import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import FilterPage from './screens/FilterPage';
import AddMenuPage from './screens/AddMenuPage';


interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}


const Tab = createBottomTabNavigator(); //Bottom navigator to navigate between screens

export default function App() {
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  
  const addMenuItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]); //create array when menu item is added 
  };

  //This removes menu item
  const removeMenuItem = (index: number) => {
    const newMenu = [...menuItems];
    newMenu.splice(index, 1);
    setMenuItems(newMenu);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Home">
          {() => <HomePage menuItems={menuItems} onRemoveMenuItem={removeMenuItem} />}
        </Tab.Screen>

        
        <Tab.Screen name="Filter">
          {() => <FilterPage menuItems={menuItems} />}
        </Tab.Screen>

        
        <Tab.Screen name="Add Menu">
          {() => <AddMenuPage onAddMenuItem={addMenuItem} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



