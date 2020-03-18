import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return( 
    <View style={styles.container}>
        <Text>getting the weather now</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-end",
        padding: 40 
    }
});