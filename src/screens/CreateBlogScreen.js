import React, {useState, useContext} from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
// import { TextInput } from 'react-native-gesture-handler'

const CreateBlogScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { addBlogPost } = useContext(Context);


    const onChanging = (type, text) => {
        switch(type){
            case "header":
                return setTitle(text)
            case "body":
                return setBody(text)
            default:
                return
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.header} >Add a new Post</Text>
            <Text style={style.title}>Enter Title:</Text>
            <TextInput style={style.textInput} onChangeText={(text) => onChanging("header", text)} value={title} />
            <Text style={style.title}>Enter Body:</Text>
            <TextInput style={style.textInput} onChangeText={(text) => onChanging("body", text)} value={body} />
            <Button title="Save" style={style.button}
                onPress={() => {
                    addBlogPost({title: title, content: body },
                        () => {navigation.navigate('Index')})
                    }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        fontSize: 18,
        fontWeight: "bold",
    },
    container:{
        display: "flex"
    },
    button:{
        // width: 50
        alignSelf: "center",
        margin: 10
    },
    textInput:{
        minHeight: 30,
        backgroundColor: "#eee",
        margin: 10,
        padding: 5
    },
    title:{
        marginLeft: 10
    }
})

export default CreateBlogScreen