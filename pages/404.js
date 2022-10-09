import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oooopsy!</h1>
      <h2>This page cannot be found</h2>
      <p>
        Go back to{' '}
        <Link href="/">
          <a>homepage</a>
        </Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
