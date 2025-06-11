import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>This is the Home page</h1>
      <Link to='/login'>
        <button>Log in</button>
      </Link>
    </>
  );
}
