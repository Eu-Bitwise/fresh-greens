import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider } from './utils/context';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route
                        path="/product/:productId"
                        element={<Product />}
                        // render={(props) => <Profile {...props} />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
