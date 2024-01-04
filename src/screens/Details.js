import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import BottomNavigationBar from '../Components/BottomNavigationBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

const Details = ({route}) => {
  //   const detail = {
  //     id: 1,
  //     name: 'Bus',
  //     icon: 'directions-bus-filled',
  //     seats: 10,
  //     contactname: 'John',
  //     contactnumber: '1234567890',
  //     dateTime: '2021-06-01T10:00:00.000Z',
  //     TicketPrice: 1000,
  //     discription: 'bus ticket from kathmandu to pokhara',
  //   };
  const {detail} = route.params;
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.heading}>Ticket Details</Text>
      <ScrollView>
        <View style={styles.detailContainer}>
          <View style={styles.iconContainer}>
            <Icon name={detail.icon} size={120} color="#545454" />
          </View>
          <Text style={styles.label}>Contact Person Name</Text>
          <Text style={styles.text}>{detail.contactname}</Text>
          <Text style={styles.label}>Contact Number</Text>
          <Text style={styles.text}>{detail.contactnumber}</Text>
          <Text style={styles.label}>Seats Count</Text>
          <Text style={styles.text}>{detail.seats}</Text>
          <Text style={styles.label}>Date and Time</Text>
          <Text style={styles.text}> {formattedDate(detail.dateTime)}</Text>
          <Text style={styles.label}>Ticket Price(LKR)</Text>
          <Text style={styles.text}>{detail.TicketPrice}</Text>
          <Text style={styles.label}>Discription</Text>
          <Text style={styles.text}>{detail.description}</Text>
        </View>
      </ScrollView>
      <BottomNavigationBar />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 25,
    paddingTop: 0,
  },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#eb4034',
    marginTop: 10,
    marginBottom: 8,
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(163, 163, 163, 0.40)',
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
