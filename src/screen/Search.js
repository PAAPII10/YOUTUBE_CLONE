import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Minicard from '../component/Minicard';
import {useSelector, useDispatch} from 'react-redux';
import { useTheme } from '@react-navigation/native';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAQblDIS167vvsdeed5sAPUvsAy4rvZ9mE

const SearchScreen = ({navigation}) => {
  
  const [value, setValue] = useState('');
  // const [miniCardData,setMiniCard] = useState([])
  const dispatch = useDispatch()
  const miniCardData = useSelector(state=>{
    return state.cardData
  })
  const[loading,setLoading]= useState(false)
  const fetchData=()=>{
      setLoading(true)
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}songs&type=video&key=AIzaSyAQblDIS167vvsdeed5sAPUvsAy4rvZ9mE`)
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        dispatch({type:"add",payload:data.items})

        // setMiniCard(data.items)
      })

  }
  const {colors} = useTheme() 
  return (
    <View>
      <View style={{padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation:5,
        }}>
        <MaterialIcons name="arrow-back" size={32} 
        onPress={()=>navigation.goBack()} color={colors.iconColor}
        />

        <TextInput
          style={{width: '80%',
          padding: -8,
          backgroundColor: colors.headerColor,
          color: colors.iconColor}}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <MaterialIcons name="send" size={32} onPress={()=>fetchData()} color={colors.iconColor}/>
      </View>
      {loading ? <ActivityIndicator style={{marginTop:10}} color="red" size="large"/>:null}
      <FlatList
      data={miniCardData}
      renderItem={({item})=>{
          return <Minicard
           videoId={item.id.videoId}
           title={item.snippet.title}
           channel={item.snippet.channelTitle}
          />
        }}
        keyExtractor={item=>item.id.videoId}/>
    </View>
  );
  
};


export default SearchScreen;


