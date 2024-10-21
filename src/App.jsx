import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
    const [page, setPage] = useState('login');

    const handleLogin = (email, password) => {
        console.log('Logged in:', email);
        setPage('dashboard');
    };

    const handleRegister = (name, email, password) => {
        console.log('Registered:', name, email);
        setPage('login');
    };

    return (
        <div className="app-container">
            {page === 'login' && <Login onLogin={handleLogin} />}
            {page === 'register' && <Register onRegister={handleRegister} />}
            {page === 'dashboard' && <Dashboard />}
            <button onClick={() => setPage(page === 'login' ? 'register' : 'login')}>
                Switch to {page === 'login' ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default App;
