import { Suspense } from 'react';
import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from '../g_shared/lib/classNames/classNames';
import { useTheme } from 'a_app/providers/ThemeProvider';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from 'd_widgets/Navbar';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;