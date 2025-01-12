import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const FelixScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate("FelixScreen2") }}>
                <Text>4x4</Text>
            </TouchableOpacity>
            <Text>Felix record 3x3 : 13.707 secondes</Text>
            <Text>Felix record 4x4 : 1:34.11 secondes</Text>
        </View>
    )
}
export default FelixScreen1;
