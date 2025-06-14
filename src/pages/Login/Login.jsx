import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login, register } from '../../services/authService';

import styles from './Login.module.scss';

function LoginFormInput({label, value, onChange, type = 'text', children}) {
  return (
    <div className={`${styles['form-input']} ${styles['login-input']}`}>
      <label className={styles['form-login']}>{ label }</label>
      <input
        type={type}
        placeholder={label}
        onChange={onChange}
        value={value}
      />{ children }</div>
  );
}

export default function Login() {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [existing, setExisting] = useState(true);
  const [loginClicked, setLoginClicked] = useState(false);
  const [password, setPassword] = useState('');
  const [registerClicked, setRegisterClicked] = useState(false);
  const [username, setUsername] = useState('');

  const noConfirmPasswordErrorMessage = 'Please re-enter your password';
  const noPasswordErrorMessage = 'Please enter your password';
  const noUsernameErrorMessage = 'Please enter your username';

  const navigate = useNavigate();

  function handleExisting(isExisting) {
    setExisting(isExisting);
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  async function loginUser() {
    setLoginClicked(true);

    if (username && password) {
      try {
        const res = await login(username, password);

        if (res.message === 'Login successful') {
          navigate('/');
        }
      } catch (err) {
        console.error('There was an error');
      }
    }
  }

  async function registerUser() {
    setRegisterClicked(true);

    if (username && password && confirmPassword) {
      try {
        await register(username, password);
      } catch (err) {
        console.error('There was a problem registering the user.', err);
      }
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles['registered-status']}>
        <span
          className={existing ? styles.active : ''}
          onClick={() => handleExisting(true)}
        >Existing user</span>
        <span
          className={existing ? '' : styles.active}
          onClick={() => handleExisting(false)}
        >New user</span>
      </div>
      <LoginFormInput
        label='User name'
        onChange={handleUsername}
        value={username}
      >
        { existing && loginClicked && !username && <span className={styles.error}>{noUsernameErrorMessage}</span> }
        { !existing && registerClicked && !username && <span className={styles.error}>{noUsernameErrorMessage}</span> }
      </LoginFormInput>
      <LoginFormInput
        label='Password'
        onChange={handlePassword}
        type='password'
        value={password}
      >
        { existing && loginClicked && !password && <span className={styles.error}>{noPasswordErrorMessage}</span> }
        { !existing && registerClicked && !password && <span className={styles.error}>{noPasswordErrorMessage}</span> }
      </LoginFormInput>
      {
        !existing && <LoginFormInput
          label='Confirm Password'
          onChange={handleConfirmPassword}
          value={confirmPassword}
        >
          { !existing && registerClicked && !confirmPassword && <span className={styles.error}>{noConfirmPasswordErrorMessage}</span> }
        </LoginFormInput>
      }
      {
        existing
          ? <button onClick={loginUser}>Log in</button>
          : <button onClick={registerUser}>Register</button>
      }
    </div>
  );
}
