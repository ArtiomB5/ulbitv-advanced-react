import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "a_app/providers/ThemeProvider";
import App from "a_app/App";

import './g_shared/config/i18n/i18n';
import { ErrorBoundary } from "a_app/providers/ErrorBoundary";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)