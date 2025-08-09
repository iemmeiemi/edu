package com.app.edu.sercurity;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Component;

@Component
public class HashUtil {

    // Độ mạnh của salt (10-14 là hợp lý, càng cao càng chậm)
    private static final int SALT_ROUNDS = 12;

    /**
     * Hash một chuỗi (thường là password)
     * @param plainText - password gốc
     * @return password đã hash
     */
    public static String hash(String plainText) {
        return BCrypt.hashpw(plainText, BCrypt.gensalt(SALT_ROUNDS));
    }

    /**
     * Kiểm tra password gốc với password đã hash
     * @param plainText - password gốc
     * @param hashed    - password đã hash lưu trong DB
     * @return true nếu khớp, false nếu sai
     */
    public static boolean verify(String plainText, String hashed) {
        if (plainText == null || hashed == null) {
            return false;
        }
        return BCrypt.checkpw(plainText, hashed);
    }
}
