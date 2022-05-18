//react import
import {React} from 'react';
import {Outlet, Link} from "react-router-dom";

//css import
import 'bulma/css/bulma.min.css';
import './assets/css/App.css';

function App() {
    return (
            <main>
                <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/todolist" className="navbar-item is-link has-text-link-light">Todolist</Link>
                            <Link to="/justeprix" className="navbar-item is-link has-text-link-light">Juste Prix</Link>
                        </div>
                    </div>
                </nav>
                <Outlet/>
            </main>
    );
}

export default App;