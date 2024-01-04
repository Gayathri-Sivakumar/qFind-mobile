// CategoryPicker.js
import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryPicker = ({refRBSheet, setValue, category}) => {
  return (
    <RBSheet
      ref={refRBSheet}
      height={300}
      openDuration={250}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <View style={styles.sheetBody}>
        <View style={styles.categoryGroup}>
          {category.map((item, index) => {
            return (
              <View style={styles.category} key={index}>
                <Pressable
                  onPress={() => {
                    setValue(item.name);
                    refRBSheet.current.close();
                  }}>
                  <View>
                    <Icon name={item.icon} size={30} color="#fff" />
                  </View>
                </Pressable>
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  sheetBody: {
    padding: 20,
  },
  category: {
    backgroundColor: '#FF6347',
    alignSelf: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 9999,
    padding: 10,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  categoryText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  categoryGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default CategoryPicker;
