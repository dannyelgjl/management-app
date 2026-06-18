import React from 'react';
import { Text, View } from 'react-native';
import { useContainer } from './useContainer';

const Home = () => {
  const { teste } = useContainer();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{teste}</Text>
    </View>
  );
};

export default Home;
