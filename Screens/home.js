import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
    return (
        <View style={tw `justify-center items-center px-8 my-40`}>
            <Image
            style={[tw `h-50 w-50`,{resizeMode:'contain'}]}
            source={require('../assets/MSEUF_LOGO.png')}/>
            <Text style={tw `text-2xl font-bold text-center`}>
                Manuel S. Enverga University Foundation
            </Text>
        </View>
    )
};

export default HomeScreen;
