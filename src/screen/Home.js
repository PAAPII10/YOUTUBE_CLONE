import React from 'react';
import {View,Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Header from '../component/Header'
import Card from '../component/Card';
import {useSelector} from 'react-redux'


function HomeScreen(){
    const cardData = useSelector(state=>{
        return state.cardData
    })
    return(
        <SafeAreaView >

            <Header/>
            <FlatList
            data={cardData}
            renderItem={({item})=>{
                return <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            
            keyExtractor={item=>item.id.videoId}/>
            
    

        </SafeAreaView>
        

    );
}

export default HomeScreen;
