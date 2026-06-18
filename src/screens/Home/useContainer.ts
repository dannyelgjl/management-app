import { useState } from 'react';

export const useContainer = () => {
  const [teste, setTest] = useState('Home');

  return {
    teste,
  };
};
