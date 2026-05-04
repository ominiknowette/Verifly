import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
            <img src="/path-to-your-logo" alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
            <h3>Your Tagline Here</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div>
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
            </div>
            <p style={{ marginTop: '20px' }}>© 2025 Verifly. Built in Nigeria.</p>
        </footer>
    );
};

export default Footer;