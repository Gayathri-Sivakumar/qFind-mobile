import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BottomNavigationBar from '../Components/BottomNavigationBar';

const Settings = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Settings</Text>
      <Text>AllTickets</Text>
      <Pressable onPress={() => navigation.navigate('SellTicket')}>
        <Text>Sell Ticket</Text>
      </Pressable>
      <BottomNavigationBar />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
