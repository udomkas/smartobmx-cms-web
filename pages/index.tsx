import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Space, Spin } from 'antd';
import { MainLayout } from '../components/layout';

const HomePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <div style={{ height: '100vh', padding: '50vh 50vw' }}>
      <Spin size="large" />
    </div>
  );
};

export default HomePage;
