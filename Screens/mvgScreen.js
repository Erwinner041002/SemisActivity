import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import tw from 'twrnc'

const MVGScreen = () => {
    return (
        <ScrollView style={tw `py-2 px-6 mb-15`}>
            <View style={tw `border-b-4`}>
                <Text style={tw `text-[#800000] font-bold text-2xl text-center my-4`}>
                    OUR VISION
                </Text>
                <Text style={tw `text-base text-center mb-4 px-4`}>
                In 2030, the Manuel S. Enverga University Foundation is a globally competitive university with high concentrations of talent, excellent teaching environment, rigorous program quality, sufficient resources, and a culture of collaboration.
                </Text>
            </View>

            <View style={tw `border-b-4`}>
                <Text style={tw `text-[#800000] font-bold text-2xl text-center my-4`}>
                    OUR MISSION
                </Text>
                <Text style={tw `text-base text-center mb-4 px-4`}>
                The University is a private non-stock non-profit non-sectarian educational foundation with a three-fold function - instruction, research, and community service - offering responsive and alternative programs supportive of national development and standards of global excellence.
                </Text>
            </View>

            <View style={tw `border-b-4`}>
                <Text style={tw `text-[#800000] font-bold text-2xl text-center my-4`}>
                    OUR GOAL
                </Text>
                <Text style={tw `text-base text-center mb-4 px-4`}>
                MSEUF shall produce graduates who have research-based knowledge, leadership and management skills, and professionalism.
                </Text>
            </View>
        </ScrollView>
    )
};

export default MVGScreen;
