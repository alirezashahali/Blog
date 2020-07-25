import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BlogDetail = ({navigation}) => {
    const item = navigation.getParam('item')
    return (
        <View>
            <Text style={style.header} >{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        fontSize: 18
    }
})

export default BlogDetail