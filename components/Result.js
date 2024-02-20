import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./util";

//For lap table

function Result({ results }){
    return(
        <ScrollView>
            <View style={styles.resultItem} />
            {results.map((item, index) => (
                <View key={index} style={styles.resultItem}>
                    <Text style={styles.resultItemText}>
                        Lap {results.length - index}
                    </Text>

                    <Text style={styles.resultItemText}>
                        {displayTime(item)}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    resultItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#313131',
        height: 50,
        paddingHorizontal: 15,
    },
    resultItemText: {color: '#fff'}
});

export default React.memo(Result); //Using that memoization thing we learned about in algorithms and data struct to avoid needless recursion