import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//For buttons and such

function Control({isRunning, dLBP, dRBP}){ //dLBP = do left button press, dRBP = do right button press
    return (
        <>
            <TouchableOpacity
                style = {[
                    styles.controlButtonBorder, 
                    {backgroundColor: isRunning ? '#333333' : '#1c1c1e'},

                ]}
                onPress={dLBP}
            >
                <View style={styles.controlButton}>
                    <Text style={{color: isRunning ? '#fff' : '#9d9ca2'}}>
                        {isRunning ? "Lap" : "Reset"}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style = {[
                    styles.controlButtonBorder, 
                    {backgroundColor: isRunning ? '#340e0d' : '0a2a12'},
                ]}
                onPress={dRBP}
            >
                <View style={styles.controlButton}>
                    <Text style={{color: isRunning ? '#ea4c49' : '#37d05c'}}>
                        {isRunning ? "Pause" : "Start"}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const CENTER = {
    justifyContent : "center",
    alignItems : "center",
};

const styles = StyleSheet.create({
    controlButtonBorder: {
        ...CENTER,
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    controlButton: {
        ...CENTER,
        width: 65,
        height: 65,
        borderRadius: 65,
        borderColor: "#000",
        borderWidth: 1,
    },
});

export default React.memo(Control); //Using that memoization thing we learned about in algorithms and data struct to avoid needless recursion