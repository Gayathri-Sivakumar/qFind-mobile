import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TicketsYours} from '../DummyData/Category';

const YourTickets = ({navigation}) => {
  const [yourTickets, setYourTickets] = useState([]);
  useEffect(() => {
    setYourTickets(TicketsYours);
  }, []);

  const formattedDate = dateTime => {
    const date = new Date(dateTime);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFf',
        padding: 5,
        paddingTop: 0,
      }}>
      <Text style={styles.heading}>Your Tickets</Text>

      <View style={styles.categoryHeading}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}> Date and Time</Text>
        <Text style={styles.text}>Seats</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          data={yourTickets}
          renderItem={({item}) => (
            <View style={styles.category} key={item.name}>
              <Icon name={item.icon} size={30} color="#000" />
              <Text style={{color: '#000', fontSize: 16}}>
                {' '}
                {formattedDate(item.dateTime)}
              </Text>
              <Text style={{color: '#000', fontSize: 16}}>{item.seats}</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('SellTicket', {
                    categoryItem: item,
                  })
                }>
                <Icon name="edit" size={26} color="#000" />
              </Pressable>
              <Pressable onPress={() => {}}>
                <Icon name="delete" size={26} color="#000"></Icon>
              </Pressable>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};
export default YourTickets;

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'rgba(254, 139, 74, 0.4)',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000',
  },
  categoryHeading: {
    margin: 10,
    padding: 10,
    paddingBottom: 0,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  heading: {
    paddingBottom: 8,
    paddingTop: 0,
    alignSelf: 'center',
    color: '#FF6347',
    fontSize: 20,
    fontWeight: '800',
  },
});
