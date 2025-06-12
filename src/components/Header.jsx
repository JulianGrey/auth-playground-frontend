import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import styles from './Header.module.scss';

export default function Header() {
  const { loggedIn, handleLoggedInStatus } = useAuth();

  return (
    <div className={styles.header}>
      <Link to='/'>Auth Playground</Link>
      {
        loggedIn
          ? <button onClick={handleLoggedInStatus(false)}>Log out</button>
          : <Link to='/login'><button>Log in</button></Link>
      }
    </div>
  );
}
