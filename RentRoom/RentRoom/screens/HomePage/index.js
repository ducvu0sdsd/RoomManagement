import { Text, View, Image, ImageBackground, Pressable } from 'react-native';
import ButtonCustom from '../../components/ButtonCustom';
import styles from './homepagestyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const [title, setTitle] = useState("");
  const navigation  =useNavigation()

  useEffect(() => {
    setTitle("Quản Lý Phòng Trọ");
  }, []);

  const handlePress = () => {
    
  };

  return (
    <View style={{backgroundColor : 'white', height : '100%'}}>
      <ImageBackground source={require('./images/background_title.jpg')} style={{ width: '100%', height: 210, zIndex : 1 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.info_user}>
          <Image style={styles.avatar} source={require('./images/tienduc.jpg')} />
          <View style={styles.btn_login}>
            <Text style={{fontSize : 23, marginLeft : 5, color : 'white', fontWeight : 'bold'}}>Vũ Tiến Đức</Text>
            {/* <ButtonCustom onPress={handlePress} text={'Đăng Nhập'} styleButton={{backgroundColor : '#2247FF', marginLeft : 2, borderRadius : 5}} styleText={{color : 'white', fontWeight : 'bold'}} /> */}
          </View>
        </View>
        <View style={{flexDirection : 'row',justifyContent : 'center', marginTop : 20}}>
          <Pressable style={{width : 100,margin : 2,borderWidth : 1, borderColor : '#D7D7D7',backgroundColor : 'white', padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
              <Text style={{fontSize : 14, marginTop : 2, fontWeight : 'bold'}}>Số Phòng</Text>
              <Text style={{fontSize : 15, marginTop : 2, fontWeight: 'bold'}}>6</Text>
          </Pressable>
          <Pressable style={{width : 100,margin : 2,borderWidth : 1, borderColor : '#D7D7D7',backgroundColor : 'white', padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
              <Text style={{fontSize : 14, marginTop : 2, fontWeight : 'bold'}}>Đã Thuê</Text>
              <Text style={{fontSize : 15, marginTop : 2, fontWeight: 'bold'}}>5</Text>
          </Pressable>
          <Pressable style={{width : 100,margin : 2,borderWidth : 1, borderColor : '#D7D7D7',backgroundColor : 'white', padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
              <Text style={{fontSize : 14, marginTop : 2, fontWeight: 'bold'}}>Phòng Trống</Text>
              <Text style={{fontSize : 15, marginTop : 2, fontWeight: 'bold'}}>1</Text>
          </Pressable>
        </View>
      </ImageBackground>

      <View style={{paddingTop : 50, flexDirection : 'row', justifyContent : 'center', flexWrap : 'wrap'}}>
        <Pressable onPress={() => navigation.navigate("Host Management")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Nhà Trọ</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Electric Managment")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Điện</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Water Management")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Nước</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Room Management")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Phòng Trọ</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Garbage Management")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Rác</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Arise Management")} style={{marginLeft: 5, marginRight : 5, marginBottom : 5,width : 100,height : 60,margin : 2, padding : 7, borderRadius : 8,flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
            <Icon style={{color : '#CDCDCD',fontSize : 30}} name="money" size={15} color="black" />
            <Text style={{color : '#CDCDCD',fontSize : 13, marginTop : 2, fontWeight: 'bold'}}>Phát Sinh</Text>
        </Pressable>
      </View>
      <View style={{flexDirection : 'row', justifyContent : 'space-evenly', flexWrap :'wrap'}}>
        <View style={{marginTop : 0, padding : 5, position : 'relative'}}>
          <Image source={require('./images/1.jpg')} style={{width : 170, height : 170, borderRadius : 20}}/>
          <View style={{position : 'absolute',height : 175, width : 175, padding : 25, flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontSize : 19, color : 'white', fontWeight : 'bold'}}>Trọ Tín Đức</Text>
            <Text style={{fontSize : 16,marginTop : 5, color : 'white', fontWeight : 'bold'}}>0916879135</Text>
          </View>
        </View>
        <View style={{marginTop : 0, padding : 5, position : 'relative'}}>
          <Image source={require('./images/2.jpg')} style={{width : 170, height : 170, borderRadius : 20}}/>
          <View style={{position : 'absolute',height : 175, width : 175, padding : 25, flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontSize : 19, color : 'white', fontWeight : 'bold'}}>Tiền Điện</Text>
            <Text style={{fontSize : 16,marginTop : 5, color : 'white', fontWeight : 'bold'}}>3500đ/1 Tháng</Text>
          </View>
        </View>
        <View style={{marginTop : 0, padding : 5, position : 'relative'}}>
          <Image source={require('./images/3.jpg')} style={{width : 170, height : 170, borderRadius : 20}}/>
          <View style={{position : 'absolute',height : 175, width : 175, padding : 25, flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontSize : 19, color : 'white', fontWeight : 'bold'}}>Tiền Nước</Text>
            <Text style={{fontSize : 16,marginTop : 5, color : 'white', fontWeight : 'bold'}}>12000đ/1 Khối</Text>
          </View>
        </View>
        <View style={{marginTop : 0, padding : 5, position : 'relative'}}>
          <Image source={require('./images/4.jpg')} style={{width : 170, height : 170, borderRadius : 20}}/>
          <View style={{position : 'absolute',height : 175, width : 175, padding : 25, flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontSize : 19, color : 'white', fontWeight : 'bold'}}>Tiền Rác</Text>
            <Text style={{fontSize : 16,marginTop : 5, color : 'white', fontWeight : 'bold'}}>15000đ/ 1 Tháng</Text>
          </View>
        </View>
      </View> 
    </View>
  );
};

export default HomePage;
