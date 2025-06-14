import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import styles from './Header.module.scss';

export default function Header() {
  const { loggedIn, handleLogout, username } = useAuth();

  return (
    <div className={styles.header}>
      <Link to='/'>Auth Playground</Link>
      {
        loggedIn
          ? <div><span className={styles.username}>{username}</span><button onClick={handleLogout}>Log out</button></div>
          : <Link to='/login'><button>Log in</button></Link>
      }
    </div>
  );
}
