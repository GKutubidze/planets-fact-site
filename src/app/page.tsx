'use client'
// pages/index.tsx

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const Home = () => {
  useEffect(() => {
    // Client-side redirection when using useEffect
    redirect('/planets/mercury');
  }, []);

  return null;
};

export default Home;
