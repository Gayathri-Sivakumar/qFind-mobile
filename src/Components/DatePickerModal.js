// DatePickerModal.js
import React from 'react';
import {TouchableOpacity, TextInput, StyleSheet, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DatePickerModal = ({
  isDatePickerVisible,
  showDatePicker,
  hideDatePicker,
  date,
  formattedDate,
  handleConfirm,
}) => {
  return (
    <>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.inputContainer}>
          <TextInput
            value={formattedDate(date)}
            placeholder="Date and Time"
            style={styles.textInput}
            editable={false}
          />
          <Icon
            name="calendar-month"
            size={20}
            color="#FF6347"
            style={styles.calendarIcon}
          />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#959696',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#000',
  },
  calendarIcon: {
    marginLeft: 10,
    color: '#959696',
  },
});

export default DatePickerModal;
