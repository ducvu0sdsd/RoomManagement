import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize : 22,
    fontFamily : 'Roboto',
    paddingLeft : 15,
    fontWeight : 'bold',
    marginTop : 40
  },
  avatar : {
    height : 70,
    width : 70,
    borderRadius : 33
  },
  info_user : {
    flexDirection : 'row',
    alignItems : 'center',
    marginTop : 15,
    marginLeft : 20
  },
  btn_login : {
    marginLeft : 5,
  }
});

export default styles;