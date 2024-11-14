import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <main>
            <div className="left">
                <h1>
                    Next generation <br /> digital banking
                </h1>
                <p>
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <button>Request Invite</button>
            </div>
            <div className="right">
                <img src="/images/image-mockups.png" alt="Phones" />
                <img src="/images/bg-intro-desktop.svg" alt="Bg Svg" />
            </div>
        </main>
    );
};

export default Landing;
