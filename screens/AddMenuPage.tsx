import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  Keyboard, 
  TouchableWithoutFeedback, 
  ScrollView, 
  Alert, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

interface AddMenuPageProps {
  onAddMenuItem: (item: MenuItem) => void;
}

const AddMenuPage = ({ onAddMenuItem }: AddMenuPageProps) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (dishName && description && course && price) {
      onAddMenuItem({ dishName, description, course, price: parseFloat(price) }); // Adds the new menu item
      setDishName('');
      setDescription('');
      setCourse('');
      setPrice('');

      Alert.alert('Success', 'Menu item added successfully!', [{ text: 'OK' }]);
    } else {
      alert('Please fill out all fields'); // Alerts if required fields are missing.
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Add Menu Item</Text>

          <Text style={styles.label}>Dish Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter dish name"
            value={dishName}
            onChangeText={setDishName}
          />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.label}>Course:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={course}
              onValueChange={(itemValue) => setCourse(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select a Course" value="" />
              <Picker.Item label="Starters" value="starters" />
              <Picker.Item label="Mains" value="mains" />
              <Picker.Item label="Desserts" value="desserts" />
            </Picker>
          </View>

          <Text style={styles.label}>Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Button title="Add Menu Item" onPress={handleSubmit} color="#1E1E1E" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 15,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    padding: 0,
    backgroundColor: '#FFFFFF',
  },
  picker: {
    width: '100%',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default AddMenuPage;












