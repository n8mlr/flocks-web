import {theme} from "./Brand";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import BrandDemo from "./BrandDemo";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrandDemo/>
            </ThemeProvider>
        </div>
    );
}

export default App;
