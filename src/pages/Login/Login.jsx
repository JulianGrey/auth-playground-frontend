import { useState } from 'react';
import styles from './Login.module.scss';

export default function Login() {
  const [existing, setExisting] = useState(true);

  function handleExisting(isExisting) {
    setExisting(isExisting);
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
      <div className={`${styles['form-input']} ${styles['login-input']}`}>
        <label className={styles['form-login']} htmlFor='form-login'>Login</label>
        <input type="text" name="form-login" placeholder="User name" />
      </div>
      <div className={`${styles['form-input']} ${styles['password-input']}`}>
        <label className={styles['form-password']} htmlFor='form-password'>Password</label>
        <input type="text" name="form-password" placeholder="Password" />
      </div>
      { !existing && <div className={`${styles['form-input']} ${styles['password-confirm-input']}`}>
          <label className={styles['form-password-confirm']} htmlFor='form-password-confirm'>Password</label>
          <input type="text" name="form-password-confirm" placeholder="Confirm Password" />
        </div>
      }
      { existing ? <button>Log in</button> : <button>Register</button> }
    </div>
  );
}
