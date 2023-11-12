import { Text, View, Image } from 'react-native';
import styles from './homepagestyle';
import React from 'react';

const Index = () => {
  return (
    <View>
      <View style={{position : 'relative'}}>
        <Image source={require("../HomePage/background_title.jpg")} style={{ width: '100%', height : 250 }} />
        {/* <Text style={styles.title}>Quản Lý Phòng Trọ</Text> */}
      </View>
    </View>
  );
};

export default Index;
