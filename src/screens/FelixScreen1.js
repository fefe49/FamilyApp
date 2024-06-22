import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Switch } from "react-native-gesture-handler";

const FelixScreen1 = () => {
    const navigation = useNavigation ();
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate("FelixScreen2")}}>
                <Text>4x4</Text>
            </TouchableOpacity>
            <Text>Felix record 3x3 : 23.86 secondes</Text>

        </View>
    )
}
export default FelixScreen1;