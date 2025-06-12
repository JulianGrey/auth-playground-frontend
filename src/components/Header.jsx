import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import styles from './Header.module.scss';

export default function Header() {
  const { loggedIn, logout } = useAuth();

  return (
    <div className={styles.header}>
      <h1>Auth Playground</h1>
      {
        loggedIn
          ? <button onClick={logout}>Log out</button>
          : <Link to='/login'><button>Log in</button></Link>
      }
    </div>
  );
}
