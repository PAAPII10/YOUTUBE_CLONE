import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation,useTheme } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch,useSelector } from 'react-redux';




function Header(){
  const navigation = useNavigation()
  const {colors} =useTheme()
  const dispatch = useDispatch()
  const currentTheme = useSelector(state=>{
    return state.myDarkmode
  })
  
  return(
    // Header
    <View style={{padding:10,
      backgroundColor:colors.headerColor,
      height:50,
      flexDirection:'row',
      justifyContent:"space-between",
      elevation:5}}>
      <View style={{justifyContent:'flex-start',flexDirection:'row',
        marginLeft:15,}}>
       <Icon name="youtube-play" size={30} color="red" /> 
       <Text style={{flexDirection:'row', 
        fontWeight:'bold',
        fontSize:22,
        marginLeft:5,
        color:colors.iconColor,}}>YouTube</Text>
      </View>
      <View style={{flexDirection:'row',
        width:150,
        justifyContent:'space-around',
        margin:1}}>
       <MaterialIcons name="video-call" size={30} color={colors.iconColor} />
       <MaterialIcons name="search" size={30} color={colors.iconColor}
       onPress={()=>navigation.navigate("search")}
       />
       <MaterialIcons name="account-circle" size={30} color={colors.iconColor} 
       onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})}
       />
      </View>
    </View>
  );
}

export default Header;



