import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function ClientSide() {
    return (
        <div className="App">
            <Helmet>
                <meta name="og:title" content="Client Side Page" data-react-helmet="true" />
                <meta name="og:image" content="logo512.png" data-react-helmet="true" />
            </Helmet>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    CSR
                </p>
            </header>
        </div>
    );
}

export default ClientSide;
