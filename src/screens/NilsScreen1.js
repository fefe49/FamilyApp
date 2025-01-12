import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const NilsScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate("NilsScreen2")}}>
                <Text>To Do List</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NilsScreen1;
