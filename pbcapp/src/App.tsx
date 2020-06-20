import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#C4C4C4" translucent/>
    <View style={{flex:1, backgroundColor:'#E1D8D0'}}>
      <Routes/>
    </View>
  </NavigationContainer>
);

export default App;

