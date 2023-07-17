import './styles/index.scss'
import { classNames } from '../g_shared/lib/classNames/classNames';
import { useTheme } from 'a_app/providers/ThemeProvider';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from 'd_widgets/Navbar';
import { ThemeSwitcher } from 'd_widgets/ThemeSwitcher';
import { Sidebar } from 'd_widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme();

    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={'Loading...'}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;