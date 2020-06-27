import React, {useContext} from 'react'
import { SafeAreaView, Text, View, TextInput, Button} from 'react-native'

import Context from '../context/store'

const Login = props => {
    const {state, dispatch} = useContext(Context)

    const login = () =>{
        const userResponse = {name:"Erdeniz", surname:"Yılmaz", email:"erdenizyilmaz@hotmail.com"}
        dispatch({ type: "SET_USER", userOBJ: userResponse })
        props.navigation.navigate("Facts")
    }


    return(
        <SafeAreaView style={{flex:1}}>

            <View style={{flex:1, justifyContent:'center', }}>

               <View style={{ backgroundColor:'#bdbdbd', padding:10, borderRadius:10, marginVertical:3}}>
                <TextInput
                placeholder="E-posta giriniz"
                />
                </View>

                <View style={{ backgroundColor:'#bdbdbd', padding:10, borderRadius:10, marginVertical:5}}>
                
                <TextInput
                placeholder="Şifre giriniz"
                />
                </View>
                
                <Button
                title="Giriş"
                onPress={login}
                />

            </View>

        </SafeAreaView>
    )

}

export {Login}