import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons, AntDesign, Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
  const { state, removeBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id+''}
        renderItem={({ item }) => {
          console.log(item)
          return (
                <View style={style.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('BlogDetail', {item})}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                        <EvilIcons name="trash" style={style.icon} />
                    </TouchableOpacity>
                </View>
          )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) =>{
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateBlog') } >
        <Feather name="plus-circle" style={style.plus} />
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    },
    icon:{
        fontSize: 30
    },
    plus:{
      fontSize: 30,
      marginRight: 15,
      color: 'green'
    }
});

export default IndexScreen;