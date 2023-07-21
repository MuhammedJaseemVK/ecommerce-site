import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Logout from '../components/Logout/Logout';

function RoutesLayout() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default RoutesLayout