import * as React from 'react';
import {Alert} from 'react-native';
import Loading from "./Loading";
import Weather from"./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY="8616eed6eaf1556e5c92df40e7ae3e61";

export default class extends React.Component {
  state = { 
    isLoading: true
  };
  getWeather= async(latitude, longitude) =>{
     const {data} = await axios.get(
       `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
       );
      this.setState({
        isLoading:false, 
        condition:data.weather[0].main,
        temp: data.main.temp
      });
  };
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //send to api and get the weather information

    }catch(error){
      Alert.alert("Can't find you!", "So sad :(");
    }
    
  };
  componentDidMount(){
    this.getLocation(); 
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading?<Loading /> :<Weather temp={Math.round(temp)} condition={condition} />;
  }
  
}

