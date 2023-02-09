import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  CheckBox,
  StyleSheet,
} from 'react-native';
import styles from '../assets/style';

const profile = ({ navigation }) => {
  const [firstname, Setfirstname] = useState('');
  const [lastname, Setlastname] = useState('');
  const [email, Setemail] = useState('');
  const [phone, Setphone] = useState('');

  const [chk1, Setchk1] = useState(true);
  const [chk2, Setchk2] = useState(true);
  const [chk3, Setchk3] = useState(true);
  const [chk4, Setchk4] = useState(true);

  const logout = () => {
    navigation.navigate('onboarding');
    localStorage.clear();
  };

  const getfname = localStorage.getItem('fname');
  const getlname = localStorage.getItem('lname');
  const getemail = localStorage.getItem('email');
  const getphone = localStorage.getItem('phone');

  const getProfile = () => {
    Setfirstname(JSON.parse(getfname));
    Setlastname(JSON.parse(getlname));
    Setemail(JSON.parse(getemail));
    Setphone(JSON.parse(getphone));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profileBack}
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('profile');
            }}
            style={styles.profileTab}>
            <Image
              style={styles.profileTabImg}
              source={require('../assets/profile.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.homeContentView}>
          <View style={styles.profileContent}>
            <Text style={styles.pTitle1}>Personal Information</Text>
            <Text style={styles.pTitle2}>Avatar</Text>
            <View style={styles.profileInnerContent}>
              <Image
                style={styles.pImg}
                source={require('../assets/profile.png')}
              />
              <TouchableOpacity style={styles.pBtn1}>
                <Text style={styles.pBtn1txt}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pBtn2}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formView}>
              <Text>First Name</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={Setfirstname}
                value={firstname}
              />
              <Text>Last Name</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={Setlastname}
                value={lastname}
              />
              <Text>Email</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={Setemail}
                value={email}
              />
              <Text>Phone</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={Setphone}
                value={phone}
              />
              <Text style={styles.pTitle1}>Email Notification</Text>
              <View style={styles.checkBoxList}>
                <View style={styles.checkItem}>
                  <CheckBox value={chk1} onValueChange={Setchk1} />
                  <Text style={styles.checkItemtxt}>Order Statuses</Text>
                </View>
                <View style={styles.checkItem}>
                  <CheckBox value={chk2} onValueChange={Setchk2} />
                  <Text style={styles.checkItemtxt}>Password Changes</Text>
                </View>
                <View style={styles.checkItem}>
                  <CheckBox value={chk3} onValueChange={Setchk3} />
                  <Text style={styles.checkItemtxt}>Special Offers</Text>
                </View>
                <View style={styles.checkItem}>
                  <CheckBox value={chk4} onValueChange={Setchk4} />
                  <Text style={styles.checkItemtxt}>Newsletter</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.btnStyle1}
                onPress={() => {
                  logout();
                }}>
                <Text style={styles.btnStyle1Text}>Logout</Text>
              </TouchableOpacity>
              <View style={styles.settingBtnView}>
                <TouchableOpacity style={styles.settingBtn1}>
                  <Text style={styles.settingBtn1txt}>Discard Cganges</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingBtn2}>
                  <Text style={styles.settingBtn2txt}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;
