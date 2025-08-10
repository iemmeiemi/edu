package com.app.edu.sercurity;

import com.app.edu.Models.Account;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtUtils {
    private SecretKey Key;
    private  static  final long EXPIRATION_TIME = 86400000; //24hours or 86400000 milisecs
    public JwtUtils(){
        String secretString = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3";
        byte[] keyBytes = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));
        this.Key = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    public String generateToken(String email, Set<String> roles){
        return Jwts.builder()
                .setSubject(email)                                  // subject
                .claim("roles", roles)  // thêm roles vào claim
                .setIssuedAt(new Date(System.currentTimeMillis())) // issued at
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // expiry
                .signWith(this.Key)                                      // key ở đây là java.security.Key
                .compact();
    }
    public String generateRefreshToken(String email){
        return Jwts.builder()
                .setSubject(email)             // đặt subject
                .setIssuedAt(new Date(System.currentTimeMillis())) // ngày phát hành
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME*7)) // hạn token
                .signWith(this.Key)
                .compact();
    }

    public String extractEmail(String token){
        return extractClaims(token, Claims::getSubject);
    }

    public List<String> extractRoles(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(Key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        // Lấy claim "roles" (có thể kiểu Object, cần cast)
        Object rolesObject = claims.get("roles");

        if (rolesObject instanceof List<?>) {
            List<?> rawList = (List<?>) rolesObject;
            // Chuyển từng phần tử thành String (nếu cần)
            return rawList.stream()
                    .filter(Objects::nonNull)
                    .map(Object::toString)
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction){
        return claimsTFunction.apply(Jwts.parserBuilder()
                .setSigningKey(Key)       // key kiểu java.security.Key
                .build()
                .parseClaimsJws(token)    // parse và verify chữ ký
                .getBody()
        );
    }

    public boolean isTokenValid(String token){
        return (!isTokenExpired(token));
    }
    public boolean isTokenExpired(String token){
        return extractClaims(token, Claims::getExpiration).before(new Date());
    }
}
