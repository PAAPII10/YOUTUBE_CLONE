import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme,useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider,useSelector } from 'react-redux';
import {createStore,combineReducers} from 'redux'


import Home from './src/screen/Home'
import Search from './src/screen/Search';
import VideoPlayer from './src/screen/VideoPlayer';
import Explore from './src/screen/Explore';
import Subscribe from './src/screen/Subscribe';
import reducer from './src/reducers/reducer'
import ThemeReducer from './src/reducers/ThemeReducer';


const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}
const rootReducer = combineReducers({
  cardData:reducer,
  myDarkmode:ThemeReducer
  
})

const Store = createStore(rootReducer)
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  const {colors} =useTheme()
  return(
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        } else if (route.name === 'Subscribe') {
          iconName='subscriptions';
        } 

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: colors.tabIcon,
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tabs.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tabs.Screen name="Explore" component={Explore} options={{headerShown: false}}/>
      <Tabs.Screen name="Subscribe" component={Subscribe} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}
export default ()=>{
  return(
    <Provider store={Store}>
      <Navigation/>

    </Provider>
  )

}
export function Navigation(){
  let currenttheme = useSelector(state=>{
    return state.myDarkmode
  })
    return(
      <Provider store={Store}>
        <NavigationContainer theme={currenttheme? customDarkTheme:customDefaultTheme}>
          <Stack.Navigator >
            <Stack.Screen name="rootHome" component={RootHome} options={{headerShown: false}}/>
            <Stack.Screen name="search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="videoplayer" component={VideoPlayer} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}


