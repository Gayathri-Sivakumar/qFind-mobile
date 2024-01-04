import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BottomNavigationBar from '../Components/BottomNavigationBar';

const Account = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Account</Text>
      <Pressable onPress={() => navigation.navigate('YourTickets')}>
        <Text>Sell Your Tickets</Text>
      </Pressable>
      <BottomNavigationBar />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
