import React, {useEffect, useRef, useState} from 'react';
import {View, Button, StyleSheet, Text, Pressable} from 'react-native';
import {} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryPicker from './CategoryPicker';

const CategoryPickerFull = () => {
  const refRBSheet = useRef();
  const [value, setValue] = useState('Category');
  const category = [
    {icon: 'directions-bus-filled', name: 'Bus'},
    {icon: 'train', name: 'Train'},
    {icon: 'airplanemode-active', name: 'Plane'},
    {icon: 'music-video', name: 'Concert'},
    {icon: 'movie', name: 'Movie'},
    {icon: 'theater-comedy', name: 'Drama'},
  ];
  useEffect(() => {
    refRBSheet.current.open();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6347',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
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
        <View>
          <Text>{value}</Text>
        </View>
        <View style={styles.sheetBody}>
          <View style={styles.categoryGroup}>
            {category.map((item, index) => {
              return (
                <View style={styles.category} key={index}>
                  <Pressable
                    onPress={() => {
                      setValue(item.name);
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
    </View>
  );
};
export default CategoryPickerFull;

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
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
