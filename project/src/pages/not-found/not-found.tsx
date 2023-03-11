
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <section className="pageNotFound">
      <Helmet>
        <title>Page was not found.</title>
      </Helmet>
      <h1 className="pageNotFound__title">404 Not Found</h1>
      <Link to='/' title='main page' className='pageNotFound__link'>Go to the back</Link>
    </section>
  );
}

