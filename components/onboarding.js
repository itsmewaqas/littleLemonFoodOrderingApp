import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import styles from '../assets/style';

const onboarding = ({ navigation }) => {
  const [firstname, Setfirstname] = useState('');
  const [lastname, Setlastname] = useState('');
  const [email, Setemail] = useState('');
  const [phone, Setphone] = useState('');

  const [firstnameErr, SetfirstnameErr] = useState('');
  const [lastnameErr, SetlastnameErr] = useState('');
  const [emailErr, SetemailErr] = useState('');
  const [phoneErr, SetphoneErr] = useState('');

  function clearSubmission() {
    SetfirstnameErr('');
    SetlastnameErr('');
    SetemailErr('');
    SetphoneErr('');
  }

  const gotoHome = () => {
    clearSubmission();
    if (firstname == undefined || firstname == '' || firstname.length <= 5) {
      SetfirstnameErr('enter name above 5 character');
    }
    if (lastname == undefined || lastname == '' || lastname.length <= 5) {
      SetlastnameErr('enter lastname above 5 character');
    }
    var emailRgx =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == '' || !emailRgx.test(email)) {
      SetemailErr('enter your valid email address');
    }
    var cellRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phone == undefined || phone == '' || cellRgx.test(phone) == false) {
      SetphoneErr('enter your valid cell number');
    }
    if (firstname != '' && lastname != '' && email != '' && phone != '') {
      localStorage.setItem('fname', JSON.stringify(firstname));
      localStorage.setItem('lname', JSON.stringify(lastname));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('phone', JSON.stringify(phone));
      navigation.navigate('home');
      console.log(firstname, lastname, email, phone);
      Setfirstname('');
      Setlastname('');
      Setemail('');
      Setphone('');
    } else {
      return false;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.heroSection}>
          <Text style={styles.heroSecTitle1}>Little Lemon</Text>
          <View style={styles.heroSectionInner}>
            <View style={{ width: '60%' }}>
              <Text style={styles.heroSecTitle2}>Chicago</Text>
              <Text style={styles.heroSecPara}>
                We aer a family owned Mediterranean restaurent, focusd on
                traditional recipes served with a modern twits.
              </Text>
            </View>
            <View style={{ width: '40%' }}>
              <Image
                style={styles.heroImg}
                source={require('../assets/heroImg.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.formView}>
          <Text>First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={Setfirstname}
            value={firstname}
          />
          <Text style={styles.errorStyle}>{firstnameErr}</Text>
          <Text>Last Name</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={Setlastname}
            value={lastname}
          />
          <Text style={styles.errorStyle}>{lastnameErr}</Text>
          <Text>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={Setemail}
            value={email}
          />
          <Text style={styles.errorStyle}>{emailErr}</Text>
          <Text>Phone</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={Setphone}
            value={phone}
          />
          <Text style={styles.errorStyle}>{phoneErr}</Text>
          <TouchableOpacity
            style={styles.btnStyle1}
            onPress={() => {
              gotoHome();
            }}>
            <Text style={styles.btnStyle1Text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default onboarding;
