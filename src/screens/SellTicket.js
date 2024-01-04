import {
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CategoriesPicker from '../Components/CategoriesPicker';
import DatePickerModal from '../Components/DatePickerModal';
import axios from 'axios';
import Counter from '../Components/Counter.js';

const SellTicket = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState('Category');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [ticketCategory, setTicketCategory] = useState(0);
  const [seats, setSeats] = useState(0);
  const [ticketPrice, setTicketPrice] = useState('');
  const [description, setDescription] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };
  const formattedDate = date => {
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

  const handleSubmit = () => {
    // Create a new ticket object with the data you want to add to the API
    const newTicket = {
      category: selectedValue,
      contactName: contactName,
      contactNumber: contactNumber,
      seatsCount: seats,
      dateTime: formattedDate(date),
      description: description,
    };

    // Make a POST request to the API endpoint to add the ticket
    axios
      .post(
        'https://qfind20230723201455.azurewebsites.net/api/Tickets',
        newTicket,
      )
      .then(response => {
        // Handle successful response
        console.log('Ticket added successfully:', response.data);
        // You can add further logic here, such as navigating to a different page or showing a success message.
      })
      .catch(error => {
        // Handle errors
        console.error('Error adding ticket:', error);
        // You can add logic here to display an error message to the user or handle the error in another way.
      });
  };

  useEffect(() => {
    const categoryItem = route.params?.categoryItem;
    if (categoryItem) {
      setSelectedValue(categoryItem.name);
      setContactName(categoryItem.contactname);
      setContactNumber(categoryItem.contactnumber);
      setSeats(categoryItem.seats.toString());
      setDate(new Date(categoryItem.dateTime));
      setTicketPrice(categoryItem.TicketPrice.toString());
      setDescription(categoryItem.description);
    }
  }, [route.params?.categoryItem]);

  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.heading}>Sell Ticket</Text>
      <ScrollView>
        <Text style={styles.text}>
          Please ensure that you provide accurate information and fill in all
          the necessary fields. This is how others will see the details.
        </Text>
        <View style={styles.container}>
          <Text style={styles.label}>Ticket Category:</Text>
          <View style={styles.picker}>
            <CategoriesPicker
              selectedValue={selectedValue}
              onValueChange={itemValue => setSelectedValue(itemValue)}
            />
          </View>
          <Text style={styles.label}>Contact person Name:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Contact person Name"
            value={contactName}
            onChangeText={setContactName}
          />

          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
          {/* <Text style={styles.label}>Seats Count:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seats Count"
            value={seats}
            onChangeText={setSeats}
          /> */}
          <Counter seats={seats} setSeats={setSeats} />
          <Text style={styles.label}>Date and Time:</Text>
          <DatePickerModal
            isDatePickerVisible={isDatePickerVisible}
            showDatePicker={showDatePicker}
            hideDatePicker={hideDatePicker}
            date={date}
            formattedDate={formattedDate}
            handleConfirm={handleConfirm}
          />

          <Text style={styles.label}>Ticket Price(LKR):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ticket Price"
            value={ticketPrice}
            onChangeText={setTicketPrice}
          />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
          <Pressable
            // onPress={() => navigation.navigate('YourTickets')}
            onPress={handleSubmit}
            style={[styles.button_container]}>
            <Text style={[styles.button]}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#959696',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    height: 40,
    borderRadius: 30,
    fontSize: 16,
    paddingTop: 8,
    marginBottom: 20,
    color: '#fff',
    fontWeight: '600',
  },
  heading: {
    paddingBottom: 8,
    paddingTop: 0,
    alignSelf: 'center',
    color: '#FF6347',
    fontSize: 20,
    fontWeight: '800',
  },
  text: {
    padding: 20,
    paddingTop: 4,
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: 14,
  },
  button_container: {
    backgroundColor: '#FE8B4A',
    alignSelf: 'center',
    height: 40,
    width: 200,
    borderRadius: 30,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  container: {
    justifyContent: 'space-between',
    padding: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(163, 163, 163, 0.30)',
    borderRadius: 30,
    padding: 10,
    height: 50,
  },
});
export default SellTicket;
