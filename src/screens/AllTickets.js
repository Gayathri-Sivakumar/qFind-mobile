import {
  Pressable,
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomNavigationBar from '../Components/BottomNavigationBar';
import {TicketsAll} from '../DummyData/Category.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePickerModal from '../Components/DatePickerModal';
import {Picker} from '@react-native-picker/picker';
import {Categories} from '../DummyData/Category.js';
const AllTickets = ({navigation}) => {
  const [allTickets, setAllTickets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    // axios
    //   .get('https://qfind20230723201455.azurewebsites.net/api/Tickets')
    //   .then(response => {
    //     // Handle successful response
    //     console.log('Ticket added successfully:', response.data);
    //     setAllTickets(response.data);
    //     // You can add further logic here, such as navigating to a different page or showing a success message.
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error adding ticket:', error);
    //     // You can add logic here to display an error message to the user or handle the error in another way.
    //   });
    setAllTickets(TicketsAll);
    setCate(Categories);
    setSelectedCategory('All');
  }, []);
  const handleSearch = () => {
    // Filter the tickets based on the selected category and date
    let filteredTickets = TicketsAll;

    if (selectedCategory !== '') {
      filteredTickets = filteredTickets.filter(
        ticket => ticket.name === selectedCategory,
      );
    }
    if (selectedCategory === 'All') {
      filteredTickets = TicketsAll;
    }

    // if (selectedDate !== '') {
    //   filteredTickets = filteredTickets.filter(
    //     ticket => formattedDate(ticket.dateTime) === selectedDate,
    //   );
    // }

    setAllTickets(filteredTickets);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(formattedDate(date));
    hideDatePicker();
  };

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

  // const formattedDate2 = date => {
  //   const options = {
  //     day: 'numeric',
  //     month: 'numeric',
  //     year: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true,
  //   };
  //   return new Intl.DateTimeFormat('en-US', options).format(date);
  // };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFf', padding: 5, paddingTop: 0}}>
      <Text style={styles.heading}>All Tickets</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 10,
          marginHorizontal: 40,
        }}>
        Find{' '}
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(163, 163, 163, 0.30)',
            borderRadius: 30,
            padding: 10,
            height: 50,
          }}>
          <Icon name="search" size={30} color="#000" />
          <View style={styles.container}>
            <Picker
              selectedValue={selectedCategory}
              style={styles.picker}
              onValueChange={itemValue => setSelectedCategory(itemValue)}>
              {cate.map(category => (
                <Picker.Item
                  key={category.name}
                  label={category.name}
                  value={category.name}
                />
              ))}
            </Picker>
          </View>
          {/* <DatePickerModal
          isDatePickerVisible={isDatePickerVisible}
          showDatePicker={showDatePicker}
          hideDatePicker={hideDatePicker}
          date={selectedDate}
          formattedDate={formattedDate2}
          handleConfirm={handleConfirm}
        /> */}
        </View>
        <Pressable onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find</Text>
        </Pressable>
      </View>

      <View style={styles.categoryHeading}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}> Date and Time</Text>
        <Text style={styles.text}>Seats</Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={{flex: 0.89}}>
        <FlatList
          data={allTickets}
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
                  navigation.navigate('Details', {
                    detail: item,
                  })
                }>
                <Icon name="arrow-outward" size={26} color="#000" />
              </Pressable>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default AllTickets;

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
  searchButton: {
    backgroundColor: '#FE8B4A',
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
    height: 50,
    width: 70,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
});
