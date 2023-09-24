import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps ={
    children:JSX.Element;
}

enum ThemePalette {
    BG = "#12181B",
    BOTON = "#FFFFFF",
    FUENTE = "'JetBrains Mono', monospace"
}

const theme = createTheme ({
    palette:{
        mode:"dark",
        background:{
            default:ThemePalette.BG,
        },
        primary:{
            main: ThemePalette.BOTON,
        }
    },
    typography:{
        fontFamily: ThemePalette.FUENTE,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5rem",
                    width:"100%",
                    padding:12,
                }
            }
        }
    }
});

export const ThemeConfig:React.FC <ThemeProps> = ({ children }) => {
    return (
        <ThemeProvider theme = {theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}