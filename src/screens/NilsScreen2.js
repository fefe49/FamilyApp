import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
    Keyboard
} from "react-native";
import Task from "../components/Task";

const NilsScreen2 = () =>{
    const [task, setTasks] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTasks(null)
    }

    const completedTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View>
            <View style={styles.tasksWrapper}>
                <View style={styles.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => completedTask(index)}>
                                    <Task key={index} text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTask}>
                <TextInput style={styles.input} placeholder={'écrit une tâche'} value={task} onChangeText={text => setTasks(text)} />
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 30,
    },
    writeTask: {
        position: 'absolute',
        bottom: -65,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        right: 60,
    },
    input: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        textAlign: 'left',
        paddingLeft: 15,
    },
    addWrapper: {
        position: 'absolute',
        bottom: -65
        ,
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        right: 50,
    },
    addText: {},

});

export default NilsScreen2;
