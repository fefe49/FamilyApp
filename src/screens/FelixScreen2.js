import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const FelixScreen2 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Felix record 4x4 : 2:06.44 secondes</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("NilsScreen1")}}>
                <Text>Pizza</Text>
            </TouchableOpacity>
        </View>
    )
}
export default FelixScreen2;