import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/pages/Home';
import MyNetwork from './src/pages/MyNetwork';
import Post from './src/pages/NewPost';
import Notifications from './src/pages/Notifications';
import Jobs from './src/pages/Jobs';

import DrawerContent from './src/components/DrawerContent';

import InputHeader from './src/components/InputHeader';
import ProfileHeader from './src/components/ProfileHeader';
import ChatHeader from './src/components/ChatHeader';

import PostHeaderRight from './src/components/PostHeader/HeaderRight';
import PostHeaderLeft from './src/components/PostHeader/HeaderLeft';

const Stack = createStackNavigator();
const TabNavigator = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const StackNagivation = (props) => {
  return (
    <>
      <Stack.Navigator
        mode="modal"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            height: 105,
            backgroundColor: '#0073b1',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={{
            headerTitle: () => <InputHeader />,
            headerLeft: () => <ProfileHeader {...props} />,
            headerRight: () => <ChatHeader />,
          }}
        />
        <Stack.Screen
          name="NewPost"
          component={Post}
          options={({navigation}) => ({
            headerTitle: null,
            headerLeft: () => <PostHeaderLeft {...navigation} />,
            headerRight: () => <PostHeaderRight />,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const BottomNavigator = () => {
  return (
    <>
      <TabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'MyNetwork':
                iconName = 'account-multiple';
                break;
              case 'Post':
                iconName = 'plus-circle-outline';
                break;
              case 'Notifications':
                iconName = 'bell-plus-outline';
                break;
              case 'Jobs':
                iconName = 'briefcase-outline';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return <Icon name={iconName} size={38} color={color} />;
          },
        })}
        tabBarOptions={{
          inactiveTintColor: '#999',
          activeTintColor: '#0073b1',
          style: {
            height: 90,
            paddingTop: 10,
          },
        }}>
        <TabNavigator.Screen name="Home" component={Home} />
        <TabNavigator.Screen name="MyNetwork" component={MyNetwork} />
        <TabNavigator.Screen
          name="Post"
          component={Post}
          listeners={({navigation}) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('NewPost');
            },
          })}
        />
        <TabNavigator.Screen name="Notifications" component={Notifications} />
        <TabNavigator.Screen name="Jobs" component={Jobs} />
      </TabNavigator.Navigator>
    </>
  );
};

const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{width: screenWidth - 70}}
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="App" component={StackNagivation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
