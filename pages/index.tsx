import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MainLayout } from '../components/layout';

const HomePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  }, []);

  return (
    <MainLayout>
      <h1>Welcome</h1>
      <p>main page</p>
    </MainLayout>
  );
};

export default HomePage;
