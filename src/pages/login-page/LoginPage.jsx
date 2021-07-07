import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import './styles.css';

function LoginPage() {
  const adminUser = {
    email: 'someone@posta.ge',
    password: 'easypass123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({ name: details.name, email: details.email });
      console.log('succesfully logged in user:' + user.name);
    } else {
      setError('Not valid credentials');
    }
  };

  const Logout = () => {
    console.log('succesfully logged out');
    setUser({ name: '', email: '' });
  };

  return (
    <div className="LoginPage">
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginPage;
