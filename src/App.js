import React from 'react';
import './App.css';
import SearchUsers from './SearchUser';
import AddUser from './AddUser';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Search Users</Link>
                            </li>
                            <li>
                                <Link  to={"/add-user"}>Add User</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" exact element={<SearchUsers/>} />
                        <Route path="/add-user" element={<AddUser/>} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
