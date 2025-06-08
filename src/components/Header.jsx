import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { loggedIn, login, logout } = useAuth();

  return (
    <>
      <h1>Auth Playground</h1>
      { loggedIn ? <button onClick={logout}>Log out</button> : <button onClick={login}>Log in</button> }
    </>
  );
}
