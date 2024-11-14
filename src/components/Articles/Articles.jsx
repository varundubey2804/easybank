import React from 'react';
import './Articles.css';

const articles = [
    {
        src: '/images/image-currency.jpg',
        author: 'By Claire Robinson',
        name: 'Receive money in any currency with no fees',
        description:
            'The world is getting smaller and we’re becoming more mobile. So why shouldyou be forced to only receive money in a single …'
    },
    {
        src: '/images/image-restaurant.jpg',
        author: 'By Wilson Hutton',
        name: 'Treat yourself without worrying about money',
        description:
            'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        src: '/images/image-plane.jpg',
        author: 'By Wilson Hutton',
        name: 'Take your Easybank card wherever you go',
        description:
            'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        src: '/images/image-confetti.jpg',
        author: 'By Claire Robinson',
        name: 'Our invite-only Beta accounts are now live!',
        description:
            'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
];

const Articles = () => {
    return (
        <section className="articles">
            <h2>Latest Articles</h2>
            <div className="list">
                <div className="card">
                    <img src="/images/image-currency.jpg" alt="" />
                    <h3>By Claire Robinson</h3>
                    <h4>Receive money in any currency with no fees</h4>
                    <p>
                        The world is getting smaller and we’re becoming more
                        mobile. So why shouldyou be forced to only receive money
                        in a single ...
                    </p>
                </div>
                <div className="card">
                    <img src="/images/image-restaurant.jpg" alt="" />
                    <h3>By Wilson Hutton</h3>
                    <h4>Treat yourself without worrying about money</h4>
                    <p>
                        Our simple budgeting feature allows you to separate out
                        your spending and set realistic limits each month. That
                        means you something ...
                    </p>
                </div>
                <div className="card">
                    <img src="/images/image-plane.jpg" alt="" />
                    <h3>By Wilson Hutton</h3>
                    <h4>Take your Easybank card wherever you go</h4>
                    <p>
                        We want you to enjoy your travels. This is why we don’t
                        charge any fees on purchases while you’re abroad. We’ll
                        even show you ...
                    </p>
                </div>
                <div className="card">
                    <img src="/images/image-confetti.jpg" alt="" />
                    <h3>By Claire Robinson</h3>
                    <h4>Our invite-only Beta accounts are now live!</h4>
                    <p>
                        After a lot of hard work by the whole team, we’re
                        excited to launch our closed beta. It’s easy to request
                        an invite through the site ...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Articles;
