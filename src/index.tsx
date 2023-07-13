import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "a_app/providers/ThemeProvider";
import App from "a_app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)