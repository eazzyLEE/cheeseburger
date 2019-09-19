import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feathercon from 'react-native-vector-icons/Feather';
import {Button, Card, CheckBox} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

export default class Checkout extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            margintTop: hp('15%'),
            height: hp('8%'),
            width: wp('90%'),
            borderRadius: 10,
            // backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: wp('4%'),
            paddingRight: wp('4%'),
          }}>
          <Feathercon name="menu" size={20} />
          <Icon name="shopping-basket" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margintTop: hp('15%'),
            height: hp('8%'),
            width: wp('90%'),
            borderRadius: 10,
            // backgroundColor: '#F5F5F5',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: wp('4%'),
            paddingRight: wp('4%'),
          }}>
          <View
            style={{
              flexDirection: 'column',
              // margintTop: hp('15%'),
              // height: hp('8%'),
              // width: wp('90%'),
              // borderRadius: 10,
              // backgroundColor: '#F5F5F5',
              // justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                // alignSelf: 'flex-start',
                // marginTop: hp('9%'),
                // marginLeft: wp('10%'),
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Cheese
            </Text>
            <Text
              style={{
                // alignSelf: 'flex-start',
                // marginTop: hp('9%'),
                // marginLeft: wp('10%'),
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Burger
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              // margintTop: hp('15%'),
              // height: hp('8%'),
              // width: wp('90%'),
              // borderRadius: 10,
              // backgroundColor: '#F5F5F5',
              // justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                // alignSelf: 'flex-start',
                // marginTop: hp('9%'),
                // marginLeft: wp('10%'),
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              NGN
            </Text>
            <Text
              style={{
                // alignSelf: 'flex-start',
                // marginTop: hp('9%'),
                // marginLeft: wp('10%'),
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              2000
            </Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/img1.png')}
          resizeMode="cover"
          style={{
            marginTop: hp('5%'),
            width: wp('81%'),
            // borderTopRightRadius: 15,
            // borderTopLeftRadius: 15,
            height: hp('35%'),
          }}
        />
        <Text
          style={{
            // alignSelf: 'flex-start',
            marginTop: hp('5%'),
            // marginLeft: wp('10%'),
            width: wp('70%'),
            fontSize: 17,
            textAlign: 'center',
            // fontWeight: 'bold',
          }}>
          Our medium cheese burger is packed with just the right amount of right
          nutrition including veggies you need to kickstart your day.{'\n'}{' '}
          Perfect for breakfast choice
        </Text>
        <Text
          style={{
            // alignSelf: 'flex-start',
            marginTop: hp('5%'),
            // marginLeft: wp('10%'),
            // width: wp('70%'),
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Size
        </Text>
        {/* <Card
          containerStyle={{
            height: hp('10%'),
            width: wp('15%'),
            marginTop: hp('2%'),
            borderRadius: 15,
            borderWidth: 0.5,
            elevation: 4,
            padding: 0,
          }}>
          <Text>M</Text>
        </Card> */}
      </View>
    );
  }
}
