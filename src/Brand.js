import {createTheme} from "@mui/material/styles";
import {ReactComponent as DarkLogo} from "./images/flocks-logo-dark.svg";
import {ReactComponent as LightLogo} from "./images/flocks-logo-white.svg";

export {DarkLogo, LightLogo};


let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#FFB26A",
        },
        secondary: {
            main: "#FF6A6A"
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: 'Montserrat, Arial',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

export {theme}