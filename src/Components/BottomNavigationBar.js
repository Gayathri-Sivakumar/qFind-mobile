import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Tab = ({screen, icon, size = 28}) => {
  const navigation = useNavigation();
  const currentScreen =
    navigation.getState().routes[navigation.getState().index].name;
  const isScreen = currentScreen === screen;

  return (
    <>
      {isScreen ? (
        <View>
          <Icon name={icon} size={size} color="white" />
        </View>
      ) : (
        <Icon
          name={icon}
          size={size}
          color="#fff"
          onPress={() => navigation.navigate(screen)}
        />
      )}
    </>
  );
};

const BottomNavigationBar = () => {
  return (
    <View style={styles.tabContainer}>
      <Tab screen="Account" icon="account-circle" />
      <Tab screen="SellTicket" icon="add-circle" />
      <Tab screen="AllTickets" icon="home" />
      <Tab screen="Settings" icon="settings" />
      <Tab screen="YourTickets" icon="add-circle" />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FE8B4A',
    elevation: 11,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  activeTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3c5396',
    padding: 6,
    borderRadius: 10,
  },
  activeTabText: {
    color: 'white',
    paddingLeft: 10,
  },
});

export default BottomNavigationBar;
