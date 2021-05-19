import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  ScrollView, 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
     
<TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("List of Products")}>
      <Text style= {styles.touchtext}>  MANAGE PRODUCTS </Text>
      </TouchableOpacity>

<TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("Employee")}>
      <Text style= {styles.touchtext}>  MANAGE EMPLOYEES </Text>
      </TouchableOpacity>
    
<TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("Order")}>
      <Text style= {styles.touchtext}>  MANAGE ORDERS </Text>
      </TouchableOpacity>
    
    </View>
  );
};


var productitems = [

  {
   
    itemname: 'SWORD',
    
    cost: '1300',
    image: 'https://i.pinimg.com/originals/f3/18/5f/f3185f78fcb64b2319aeb48ecd5a8bc1.jpg'
      ,
  },
  {
   
    itemname: 'BLADE',
    cost: '3500',
    
    image:
      'https://i.pinimg.com/originals/2a/21/c9/2a21c96c51c562837e212ee109007f58.jpg'
  },
  {
   
    itemname: 'ODM GEAR',
    cost: '3750',
    image:
    'https://cdna.artstation.com/p/assets/images/images/007/218/992/large/ryan-bradley-ryan-bradley-odm2.jpg?1504554199'
  },

];

var members = [

  {
   
    name: 'JEAN KIRSTEIN',
    height: '175 cm',
    image: 'https://i.pinimg.com/originals/c9/93/65/c99365f329b7c82cf52beeb837fc52a5.jpg'
      ,
  },
  {
   
    name: 'MIKASA ACKERMAN',
    height: '165cm',
    image:
      'https://media.comicbook.com/2020/07/attack-on-titan-mikasa-anime-1227615-1280x0.jpeg'
  },
  {
   
    name: 'LEVI ACKERMAN',
    height: '160 cm',
    image:
'https://pbs.twimg.com/profile_images/1377892223564578816/U8jqzlcS.jpg'  },

];


var orders = [

 {
    orderID: 1,
    productname : 'swords',
    quantity: 3,
    status: 'order placed',
    date: 'January 1, 2005',
  },
  {
    orderID: 2,
    productname : 'blade',
    quantity: 2
    ,
    status: 'order placed',
    date: 'May 21, 2006',
  },
  {
    orderID: 3,
    productname : 'ODM Gear',
    quantity: 1
    ,
    status: 'purchase successful',
    date: 'June 11, 2016',
  },
 
];




const ProdList = ({ navigation}) => {
  return (
     <ScrollView>
        {productitems.map((item) => {
          return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("Details", {item})}>
      <Text style={styles.touchtxt}>{item.itemname}</Text>
      </TouchableOpacity>


    
      
    </View>
       );
        })}
      </ScrollView>
  );
};

const ProdDetails = ({ route, navigation }) => {
  const { item } = route.params;
     
       
          return (
    <View style={styles.container}>
      
      <Text style={{ fontWeight: 'bold' }}>{item.itemname}</Text>
      <Text style={{ fontWeight: 'bold' }}>COST: {item.cost}</Text>
       <Image style={styles.imagenew} source={{ uri: item.image }} />
      


    
      
    </View>
       );
      

};
const EmployeePage = ({ navigation}) => {
return (
     <ScrollView>
        {members.map((item) => {
          return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("Employee Details ", {item})}>
      <Text style={styles.touchtxt}>{item.name}</Text>
      </TouchableOpacity>


    </View>
       );
        })}
      </ScrollView>
  );
};

const EmployeeDetailsPage = ({ route, navigation }) => {
const { item } = route.params;
     
       
          return (
    <View style={styles.container}>
      
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text >HEIGHT: {item.height}</Text>
       <Image style={styles.imagenew} source={{ uri: item.image }} />
      


    
      
    </View>
       );
};


const OrderPage = ({ navigation}) => {
 return (
     <ScrollView>
        {orders.map((item) => {
          return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchstyle} onPress={() => navigation.navigate("Order Details", {item})}>
      <Text style={styles.touchtxt}>{item.productname}</Text>
      </TouchableOpacity>


    </View>
       );
        })}
      </ScrollView>
  );
};
const OrderInfo = ({ route, navigation }) => {
  const { item } = route.params;
  return (
     <View style={styles.container}>
      
      <Text style={{ fontWeight: 'bold' }}>NAME: {item.productname}</Text>
      <Text style={{ fontWeight: 'bold' }}>ORDER ID: {item.orderID}</Text>
       <Text style={{ fontWeight: 'bold' }}>QUANTITY: {item.quantity}</Text> 
       <Text style={{ fontWeight: 'bold' }}>DATE: {item.date}</Text>
        <Text style={{ fontWeight: 'bold' }}>STATUS: {item.status}</Text>
      


    
      
    </View>
  );
};
















const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="List of Products" component={ProdList} />
        <Stack.Screen name="Details" component={ProdDetails} />
        <Stack.Screen name="Employee" component={EmployeePage} />
        <Stack.Screen name="Employee Details " component={EmployeeDetailsPage} />      
        <Stack.Screen name="Order" component={OrderPage} />
        <Stack.Screen name="Order Details" component={OrderInfo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  touchstyle: {    
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 25,
    marginTop: 20
  },
  touchtext:{
    marginTop: 10, 
    marginBottom: 10
  },
 
imagenew: {
     width: '100px',
    height: '100px',
  },
});
export default App;
