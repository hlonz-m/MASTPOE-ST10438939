import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

interface FilterPageProps {
  menuItems: MenuItem[];
}

const FilterPage = ({ menuItems }: FilterPageProps) => {
  const [filter, setFilter] = useState<string | null>(null); // Holds the currently selected filter

  const filteredItems = filter
    ? menuItems.filter((item) => item.course === filter) // Filters items by course.
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>
      <View style={styles.filterButtons}>
        <Button title="All" onPress={() => setFilter(null)} color="#1E1E1E" />
        <Button title="Starters" onPress={() => setFilter('starters')} color="#1E1E1E" />
        <Button title="Mains" onPress={() => setFilter('mains')} color="#1E1E1E" />
        <Button title="Desserts" onPress={() => setFilter('desserts')} color="#1E1E1E" />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemLabel}>Dish Name:</Text>
            <Text style={styles.menuItemName}>{item.dishName}</Text>
            
            <Text style={styles.menuItemLabel}>Description:</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>

            <Text style={styles.menuItemLabel}>Course:</Text>
            <Text style={styles.menuItemCourse}>{item.course}</Text>
            
            <Text style={styles.menuItemLabel}>Price:</Text>
            <Text style={styles.menuItemPrice}>R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  menuItemContainer: {
    backgroundColor: '#FFFFFF', 
    borderColor: '#1E1E1E', 
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // Adds a subtle shadow effect.
  },
  menuItemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 10,
  },
  menuItemName: {
    fontSize: 20,
    color: '#000000',
  },
  menuItemDescription: {
    fontSize: 16,
    color: '#000000',
  },
  menuItemCourse: {
    fontSize: 16,
    color: '#000000',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
});

export default FilterPage;



