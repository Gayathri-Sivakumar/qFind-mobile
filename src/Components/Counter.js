import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Counter = ({seats, setSeats}) => {
  const increaseCount = () => {
    setSeats(seats + 1);
  };

  const decreaseCount = () => {
    if (seats > 0) {
      setSeats(seats - 1);
    }
  };

  return (
    <View>
      <Text style={styles.label}>Seats Count: </Text>
      <View style={styles.container}>
        <Text style={styles.text}>{seats}</Text>
        <View style={{flexDirection: 'row-reverse'}}>
          <Icon
            name="arrow-drop-down"
            size={30}
            color="#959696"
            onPress={decreaseCount}
          />
          <Icon
            name="arrow-drop-up"
            size={30}
            color="#959696"
            onPress={increaseCount}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959696',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    paddingVertical: 10,
    color: '#000',
  },
});

export default Counter;
