import styles from './LoginFormInput.module.scss';

export default function LoginFormInput({label, value, onChange, type = 'text', children}) {
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
