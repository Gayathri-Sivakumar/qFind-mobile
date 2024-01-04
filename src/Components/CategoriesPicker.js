import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CategoriesPicker = ({selectedValue, onValueChange}) => {
  categories = [
    {
      id: 0,
      name: 'Category',
      icon: '',
    },
    {
      id: 1,
      name: 'Bus',
      icon: 'directions-bus-filled',
    },
    {
      id: 2,
      name: 'Train',
      icon: 'train',
    },
    {
      id: 3,
      name: 'Movie',
      icon: 'movie',
    },
    {
      id: 4,
      name: 'Concert',
      icon: 'music-video',
    },
    {
      id: 5,
      name: 'Plane',
      icon: 'airplanemode-active',
    },
    {
      id: 6,
      name: 'Drama',
      icon: 'theater-comedy',
    },
  ];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}>
        {categories.map(category => (
          <Picker.Item
            key={category.name}
            label={category.name}
            value={category.name}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: 320,
  },
});

export default CategoriesPicker;
