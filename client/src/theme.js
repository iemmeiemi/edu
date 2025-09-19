import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const SIDEBAR_WIDTH = "398px";
const MAIN_CONTENT_WIDTH = `calc(100vw - ${SIDEBAR_WIDTH})`;

const theme = extendTheme({
  webSize: {
    sidebarWidth: SIDEBAR_WIDTH,
    mainContentWidth: MAIN_CONTENT_WIDTH,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#2563EB",
          table: "#E2EAFE",
          text: "#111827",
        },
        secondary: {
          main: "#FFFFFF",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#000000",
        },
        secondary: {
          main: "#FFFFFF",
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "9px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bed2fdff",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#2563EB",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none",
        },
        contained: {
          backgroundColor: "#2980b9", // màu nền cho variant="contained"
          color: "#fff",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
        outlined: {
          borderColor: "#2980b9",
          color: "#2980b9",
          "&:hover": {
            borderColor: "#115293",
            backgroundColor: "rgba(25, 118, 210, 0.08)",
          },
        },
        text: {
          color: "#2980b9",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.08)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFormLabel-root.Mui-focused": {
            display: "none",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              border: "none", // Màu khi hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Màu khi focus
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiFormLabel-root.Mui-focused": {
            display: "none",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              border: "none", // Màu khi hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Màu khi focus
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItem: "center",
          justiyfyContent: "center",
          "& .MuiFormLabel-root .Mui-focused": {
            display: "none",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              border: "none", // Màu khi hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Màu khi focus
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { "&.Mui-focused": { display: "none" } },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-fieldset": { display: "none" },
        },
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     icon: ({ theme }) => ({
    //       color: theme.palette.primary.main,
    //     }),
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#111827",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          // Áp dụng style cho TableCell khi nó nằm trong TableHead
          fontSize: "16px",
          color: "white",
          fontWeight: "bold",
        },
        body: {
          borderBottom: "0.5px solid #BDBDBD",
          fontSize: "15px",
        },
      },
    },
  },
});

export default theme;
