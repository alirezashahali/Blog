import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import BlogDetailScreen from './src/screens/BlogDetailScreen'
import CreateBlogScreen from './src/screens/CreateBlogScreen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen,
  BlogDetail: BlogDetailScreen,
  CreateBlog: CreateBlogScreen,
} ,{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}