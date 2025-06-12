import styles from './Login.module.scss';

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className={`${styles['form-input']} ${styles['login-input']}`}>
          <label className={styles['form-login']} htmlFor='form-login'>Login</label>
          <input type="text" name="form-login" placeholder="User name" />
        </div>
        <div className={`${styles['form-input']} ${styles['password-input']}`}>
          <label className={styles['form-password']} htmlFor='form-password'>Password</label>
          <input type="text" name="form-password" placeholder="Password" />
        </div>
      </div>
    </>
  );
}
