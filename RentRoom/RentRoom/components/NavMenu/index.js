
import { View, Pressable, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function NavMenu() {
    const navigation  = useNavigation()

    return (
        <View style={{borderWidth : 1, borderColor : '#EAEAEA',flexDirection : 'row', justifyContent : 'center',height : 70, width : '100%', backgroundColor : 'white', position : 'absolute', bottom : 0}}> 
            <Pressable onPress={() => navigation.navigate("Home")} style={{width : 85,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Icon style={{color : '#CDCDCD',fontSize : 25}} name="money" size={15} color="black" />
                <Text style={{color : '#CDCDCD',fontSize : 12, marginTop : 2, fontWeight: 'bold'}}>Trang Chủ</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Payment")} style={{width : 85,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Icon style={{color : '#CDCDCD',fontSize : 25}} name="money" size={15} color="black" />
                <Text style={{color : '#CDCDCD',fontSize : 12, marginTop : 2, fontWeight: 'bold'}}>Tính Tiền</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Check In")} style={{width : 85,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Icon style={{color : '#CDCDCD',fontSize : 25}} name="money" size={15} color="black" />
                <Text style={{color : '#CDCDCD',fontSize : 12, marginTop : 2, fontWeight: 'bold'}}>Nhận Phòng</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Check Out")} style={{width : 85,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <Icon style={{color : '#CDCDCD',fontSize : 25}} name="money" size={15} color="black" />
                <Text style={{color : '#CDCDCD',fontSize : 12, marginTop : 2, fontWeight: 'bold'}}>Trả Phòng</Text>
            </Pressable>
        </View>
    )
}