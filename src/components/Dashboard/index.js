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
import {Form, Input, Item, Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Card, CheckBox} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

export default class Dashboard extends Component {
  state = {
    username: '',
    password: '',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginTop: hp('9%'),
            marginLeft: wp('10%'),
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Hello, John
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 16,
            marginTop: hp('1%'),
            marginLeft: wp('10%'),
            marginBottom: hp('3%'),
          }}>
          Select your meal for the day
        </Text>
        <View
          style={{
            flexDirection: 'row',
            margintTop: hp('10%'),
            height: hp('8%'),
            width: wp('81%'),
            borderRadius: 10,
            backgroundColor: '#F5F5F5',
            // justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: wp('4%'),
            paddingRight: wp('4%'),
          }}>
          <Icon name="search" size={20} />
          <Text
            style={{
              fontSize: 18,
              marginLeft: wp('5%'),
              color: '#686868',
            }}>
            search for meals, dishes
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <TouchableOpacity onPress={() => Actions.checkout()}>
            <Card
              containerStyle={{
                height: hp('35%'),
                width: wp('81%'),
                marginTop: hp('5%'),
                borderRadius: 15,
                borderWidth: 0.5,
                elevation: 4,
                padding: 0,
              }}>
              <View>
                <Image
                  source={require('../../assets/images/img1.png')}
                  resizeMode="cover"
                  style={{
                    width: wp('81%'),
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: hp('20%'),
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 20,
                    marginTop: hp('3%'),
                    marginLeft: wp('4%'),
                    fontWeight: 'bold',
                    // marginBottom: hp('3%'),
                  }}>
                  Cheese Burger
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 18,
                    marginTop: hp('1%'),
                    marginLeft: wp('4%'),
                    // marginBottom: hp('3%'),
                  }}>
                  Beef, veggies and chili
                </Text>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('dsv')}>
            <Card
              containerStyle={{
                height: hp('35%'),
                width: wp('81%'),
                marginTop: hp('6%'),
                borderRadius: 15,
                borderWidth: 0.5,
                elevation: 4,
                padding: 0,
              }}>
              <View>
                <Image
                  source={require('../../assets/images/img1.png')}
                  resizeMode="cover"
                  style={{
                    width: wp('81%'),
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: hp('20%'),
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 20,
                    marginTop: hp('3%'),
                    marginLeft: wp('4%'),
                    fontWeight: 'bold',
                    // marginBottom: hp('3%'),
                  }}>
                  Jollof Rice
                </Text>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 18,
                    marginTop: hp('1%'),
                    marginLeft: wp('4%'),
                    // marginBottom: hp('3%'),
                  }}>
                  Grilled chicken, veggies and sauce
                </Text>
              </View>
            </Card>
          </TouchableOpacity>

          <Card
            containerStyle={{
              height: hp('35%'),
              width: wp('81%'),
              marginTop: hp('5%'),
              borderRadius: 15,
              borderWidth: 0.5,
              elevation: 4,
              padding: 0,
              marginBottom: hp('3%'),
            }}>
            <View>
              <Image
                source={require('../../assets/images/img1.png')}
                resizeMode="cover"
                style={{
                  width: wp('81%'),
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  height: hp('20%'),
                }}
              />
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 20,
                  marginTop: hp('3%'),
                  marginLeft: wp('4%'),
                  fontWeight: 'bold',
                  // marginBottom: hp('3%'),
                }}>
                Jollof Rice
              </Text>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 18,
                  marginTop: hp('1%'),
                  marginLeft: wp('4%'),
                  // marginBottom: hp('3%'),
                }}>
                Grilled chicken, veggies and sauce
              </Text>
            </View>
          </Card>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('81%'),
            marginTop: hp('4%'),
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 20,
              // marginTop: hp('3%'),
              // marginLeft: wp('4%'),
              fontWeight: 'bold',
              // marginBottom: hp('3%'),
            }}>
            Recommended
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 18,
              // marginTop: hp('3%'),
              marginLeft: wp('10%'),
              // fontWeight: 'bold',
              // marginBottom: hp('3%'),
            }}>
            View all
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('81%'),
            marginTop: hp('5%'),
            marginBottom: hp('3%'),
          }}>
          <Image
            source={require('../../assets/images/img1.png')}
            resizeMode="cover"
            style={{
              width: wp('18%'),
              borderRadius: 5,
              // borderTopLeftRadius: 15,
              height: hp('10%'),
            }}
          />
          <Image
            source={require('../../assets/images/img1.png')}
            resizeMode="cover"
            style={{
              width: wp('18%'),
              borderRadius: 5,
              // borderTopLeftRadius: 15,
              height: hp('10%'),
            }}
          />
          <Image
            source={require('../../assets/images/img1.png')}
            resizeMode="cover"
            style={{
              width: wp('18%'),
              borderRadius: 5,
              // borderTopLeftRadius: 15,
              height: hp('10%'),
            }}
          />
          <Image
            source={require('../../assets/images/img1.png')}
            resizeMode="cover"
            style={{
              width: wp('18%'),
              borderRadius: 5,
              // borderTopLeftRadius: 15,
              height: hp('10%'),
            }}
          />
        </View>
      </View>
    );
  }
}
