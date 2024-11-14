import React from 'react';

// Components
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Features from './components/Features/Features';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Landing />
            <Features />
            <Articles />
            <Footer />
        </div>
    );
};

export default App;
