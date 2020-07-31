import React from 'react'

import { createAppContainer, createSwitchNavigator } from'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Courses from './pages/Courses'

const App = createStackNavigator({ Home, Courses }, {
  headerMode: "none",
  defaultNavigationOptions: {
    title: 'Tinder Treinamentos'
  },
  initialRouteName: 'Home'
})

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App,
    },
    {
      initialRouteName: 'App'
    }
  )
)

export default Routes;