import React, { Suspense } from 'react';
import Counter from "./components/Counter";
import './index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';

const App = () => {
    return (
        <div className="app">
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