import { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from '../g_shared/lib/classNames/classNames';
import { useTheme } from 'a_app/providers/ThemeProvider';
import { AboutPageLazy } from 'c_pages/AboutPage';
import { MainPageLazy } from 'c_pages/MainPage';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>{'Main page'}</Link>
            <Link to={'/about'}>{'About page'}</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;