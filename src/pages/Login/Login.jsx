import styles from './Login.module.scss';

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className={`form-input ${styles['login-input']}`}>
          <label htmlFor="form-login">Login</label>
          <input type="text" name="form-login" placeholder="User name" />
        </div>
        <div className={`form-input ${styles['password-input']}`}>
          <label htmlFor="form-password">Password</label>
          <input type="text" name="form-password" placeholder="Password" />
        </div>
      </div>
    </>
  );
}
