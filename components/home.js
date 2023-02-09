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
  StyleSheet,
} from 'react-native';
import styles from '../assets/style';

const home = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [menulist, Setmenulist] = useState([
    {
      id: 1,
      title: 'Greek Salad',
      description:
        'The famous greek salad of crispy lettuce poppers olives and our chicag..',
      price: '$12.99',
      imgProduct: require('../assets/pImg1.png'),
    },
    {
      id: 2,
      title: 'Brushetta',
      description:
        'Our Brushetta is made from grilled bread that has been seeared with garli..',
      price: '$7.99',
      imgProduct: require('../assets/pImg2.png'),
    },
    {
      id: 3,
      title: 'Grilled Fish',
      description:
        'Barbequed catch of the day with red onion crisp capers chive creme fraiche..',
      price: '$20.00',
      imgProduct: require('../assets/pImg3.png'),
    },
    {
      id: 4,
      title: 'Pasta',
      description:
        'Penne with fried aubergines tomato sauce fresh chilli garlic basil & salted..',
      price: '$18.99',
      imgProduct: require('../assets/pImg4.png'),
    },
    {
      id: 5,
      title: 'Lemon Dessert',
      description:
        'Light and fluffy traditional homemade italian lemon and ricotta cake..',
      price: '$6.99',
      imgProduct: require('../assets/pImg5.png'),
    },
  ]);

  const Item = ({ title, description, price, imgProduct }) => (
    <View style={styles.flatlistView}>
      <Image style={styles.flatlistImg} source={imgProduct} />
      <Text style={styles.flatlistTitle}>{title}</Text>
      <Text style={styles.flatlistDescription}>{description}</Text>
      <Text style={styles.flatlistPrice}>{price}</Text>
    </View>
  );

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = menulist.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(menulist);
      setSearch(text);
    }
  };

  useEffect(() => {
    setfilterData(menulist);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
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
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => searchFilterFunction(text)}
            placeholder="Search"
          />
        </View>
        <View style={styles.homeContentView}>
          <Text style={styles.homeContentViewTitle}>Order for Delivery</Text>
          <View style={styles.homeTabView}>
            <TouchableOpacity
              onPress={() => {
                console.log('tab1');
              }}
              style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtntxt}>Starters</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('tab2');
              }}
              style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtntxt}>Mains</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('tab3');
              }}
              style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtntxt}>Desserts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('tab4');
              }}
              style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtntxt}>Drinks</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={filterData}
            estimatedItemSize={10}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Item
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imgProduct={item.imgProduct}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default home;
