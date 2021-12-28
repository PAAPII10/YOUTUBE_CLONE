import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation,useTheme } from '@react-navigation/native';

const Card = props => {
    const navigation = useNavigation()
    const {colors} = useTheme()
    const textcolor = colors.iconColor
  return (
    <TouchableOpacity onPress={() => navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title}) }>
      <View style={Styles.Main}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={Styles.Imgstyle}
        />
        <View style={Styles.Desc}>
          <MaterialIcons name="account-circle" size={45} color={"#212121"} />
          <View style={Styles.DescText}>
            <Text
              style={{fontSize: 20, width: Dimensions.get('screen').width - 50,
              color:textcolor}}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={{color:textcolor}}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const Styles = StyleSheet.create({
  Main: {
    marginBottom: 10,
  },
  Imgstyle: {
    width: '100%',
    height: 200,
  },
  Desc: {
    flexDirection: 'row',
    margin: 5,
  },
  DescText: {
    marginLeft: 10,
  },
});
