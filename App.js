import * as React from 'react';
import { StyleSheet , AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MainNavigation />
    </NavigationContainer>
  );
}
AppRegistry.registerComponent('main', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
