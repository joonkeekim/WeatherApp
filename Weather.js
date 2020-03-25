import * as React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#DBDBDB", "#ADA996"],
        title: "Haze",
        subtitle: "What the fuck is haze"
    },
    Drizzle: {
        iconName: "weather-fog",
        gradient: ["#ADA996", "#DBDBDB"],
        title: "Drizzle",
        subtitle: "What the hell is Drizzle"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#667db6", "#DBDBDB"],
        title: "비가 와용",
        subtitle: "비가 그쳤으면 좋겠어용"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#1c92d2", "#f2fcfe"],
        title: "눈이 와용",
        subtitle: "눈은 좋아해용"
    },
    Atmosphere: {
        iconName: "weather-snowy-rainy",
        gradient: ["#36D1DC", "#5B86E5"],
        title: "Atmosphere",
        subtitle: "What the fuck is Atmosphere"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#0575E6", "#021B79"],
        title: "맑아용",
        subtitle: "맨날 이런 날씨면 좋겠어용"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "구름꼈어용",
        subtitle: "맑아졌으면 좋겠어용"
    },
    
    Mist: {
        iconName: "weather-fog",
        gradient: ["#606c88", "#3f4c6b"],
        title: "안개가 꼈어용",
        subtitle: "안개가 걷혔으면 해용"
    },
    Dust: {
        iconName: "weather-windy-variant",
        gradient: ["#232526", "#414345"],
        title: "미세먼지 시발",
        subtitle: "좆같아용"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                < MaterialCommunityIcons 
                size={100} 
                name={weatherOptions[condition].iconName} 
                color="white" />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        alignItems: "flex-start"
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize: 24,
        alignItems:"flex-start"
         
    }

});

