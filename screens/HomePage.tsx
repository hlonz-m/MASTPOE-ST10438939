import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

interface HomePageProps {
  menuItems: MenuItem[];
  onRemoveMenuItem: (index: number) => void;
}

const HomePage = ({ menuItems, onRemoveMenuItem }: HomePageProps) => {
  const getTotalItems = () => menuItems.length; //gets the total number of items
//calculates average price for a course
  const getAveragePriceByCourse = (course: string) => {
    const filteredItems = menuItems.filter((item) => item.course === course);
    const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length ? totalPrice / filteredItems.length : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.totalItems}>Total Menu Items: {getTotalItems()}</Text>

      <Text style={styles.averagePriceTitle}>Average Price by Course:</Text>
      <Text style={styles.averagePrice}>Starters: R{getAveragePriceByCourse('starters').toFixed(2)}</Text>
      <Text style={styles.averagePrice}>Mains: R{getAveragePriceByCourse('mains').toFixed(2)}</Text>
      <Text style={styles.averagePrice}>Desserts: R{getAveragePriceByCourse('desserts').toFixed(2)}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemLabel}>Dish Name:</Text>
            <Text style={styles.menuItemName}>{item.dishName}</Text>
            
            <Text style={styles.menuItemLabel}>Description:</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>

            <Text style={styles.menuItemLabel}>Course:</Text>
            <Text style={styles.menuItemCourse}>{item.course}</Text>
            
            <Text style={styles.menuItemLabel}>Price:</Text>
            <Text style={styles.menuItemPrice}>R{item.price}</Text>
            
            <Button 
              title="Remove" 
              onPress={() => onRemoveMenuItem(index)} 
              color="#FF6347" 
            />
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
  totalItems: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  averagePriceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
  },
  averagePrice: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
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
    elevation: 2, 
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

export default HomePage;





