import React, { Suspense, useContext, useState } from 'react';
import Counter from "./components/Counter";
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>{'Main page'}</Link>
            <Link to={'/about'}>{'About page'}</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
                <Counter />
            </Suspense>
        </div>
    );
};

export default App;