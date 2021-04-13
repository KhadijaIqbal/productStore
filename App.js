import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Text, View, Image } from 'react-native'; 

const Profile = (props) => {
    return (
        <View >
         
            <Text style={{ padding : 52 }}>{props.name}</Text>
            <Text   Contact Info style={{ alignItems: 'center' }} >{props.adr}</Text>
            <Text>{props.phone}</Text>
           
        </View>
    );
}

 var biodata;

export default biodata = () => {
    return (
        <View style={{ alignItems: 'center' }}>
           
            <Profile name = 'HAFEEZULLAH'  />  
            <Profile   phone='Contact Info :0300453768234' adr ='Address: H # 22, Narowal '/>
           
            
            
            <Education uni='Uni name: Comsats Uni Isb' deg=' Programme : BCS'/>
            <Skills first= 'Professional Skills : Communication Skills' />
            <Hobbies myHobby=' Hobbies: Cricket and Music' />
            
            <Experience cname='Company Name: Rudad and Co.' respo='Responsibities include HR department' />
            
            <StatusBar style="auto" />
        </View>
    );
}

 

 

const Header = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            
        </View>
    );
}

const Education = (props) => {
  return (
      <View style={{ alignItems: 'center' }}>
        
          <Text>{props.uni}</Text>
          <Text>{props.degree}</Text>
      </View>
  );
}

 



 

const Experience = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>{props.cname}</Text>
            <Text>{props.respo}</Text>
        </View>
    );
}

 


const Skills = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>{props.first}</Text>

 

        </View>
    );
}

 

const Hobbies = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>{props.myHobby}</Text>

 

        </View>
    );
}





import math
tru_value = (math.pi**4)/90
s1 = 0
s1 = float(s1)
for i in range (1, 10001):
    s1+=1/i**4
print('True value is:', tru_value)
s2 = 0
s2 = float(s2)
for i in range (10000, 0, -1):
    s2+=1/i**4
print("The error from zero to 10,000 =", tru_value - s1);
print("the error from 10,000 to 0 =", tru_value - s2);
