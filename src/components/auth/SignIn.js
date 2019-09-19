import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Form, Input, Item, Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, CheckBox} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

export default class SignIn extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginTop: hp('14%'),
            marginLeft: wp('10%'),
          }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            fontSize: 15,
            alignSelf: 'flex-start',
            marginLeft: wp('10%'),
            marginTop: hp('2%'),
          }}>
          Login to your account
        </Text>
        <KeyboardAwareScrollView contentContainerStyle={{}}>
          <Form style={{marginTop: hp('8%'), marginBottom: hp('4%')}}>
            <Item floatingLabel style={{width: wp('82.9%')}}>
              <Label style={{fontSize: 14}}>Username</Label>
              <Input
                style={{marginTop: hp('0.8%'), fontFamily: 'Avenir-Roman'}}
                value={this.state.username}
                onChangeText={value =>
                  this.setState({username: value}, this.onValidate)
                }
              />
            </Item>
            {/* <Item floatingLabel style={{width: wp('82.9%')}}>
              <Label style={{fontSize: 14}}>Email</Label>
              <Input
                style={{marginTop: hp('0.8%'), fontFamily: 'Avenir-Roman'}}
                value={this.state.email}
                onChangeText={value =>
                  this.setState({email: value}, this.onValidate)
                }
              />
            </Item> */}
            <Item floatingLabel style={{width: wp('82.9%')}}>
              <Label style={{fontSize: 14}}>Password</Label>
              <Input
                style={{marginTop: hp('0.8%')}}
                value={this.state.password}
                onChangeText={value =>
                  this.setState({password: value}, this.onValidate)
                }
                secureTextEntry={true}
              />
            </Item>
          </Form>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              // iconRight
              title="Remember me"
              iconType="font-awesome"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={18}
              checkedColor="#e65c00"
              checked={this.state.checked}
              onPress={() => {
                this.setState({checked: this.state.checked ? false : true});
              }}
              containerStyle={{
                height: hp('6.2%'),
                backgroundColor: 'transparent',
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderWidth: 0,
              }}
              textStyle={{
                alignSelf: 'flex-start',
                fontWeight: '100',
                color: '#686868',
                marginLeft: wp('2%'),
                marginRight: wp('19.7%'),
              }}
            />
            <Text style={{fontSize: 14, color: '#e65c00'}}>
              Forgot Password?
            </Text>
            {/* <CheckBox
            center
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checked}
          /> */}
          </View>
          <Button
            title="LOGIN"
            buttonStyle={{
              width: wp('81.3%'),
              marginTop: hp('8.4%'),
              height: hp('6.3%'),
              alignSelf: 'center',
              backgroundColor: '#e65c00',
              borderStyle: 'solid',
              borderRadius: 6,
            }}
            onPress={() => Actions.dash()}
          />
          <Text style={{alignSelf: 'center', marginTop: hp('4%')}}>
            New user?{' '}
            <Text style={{color: '#e65c00'}} onPress={() => Actions.signup()}>
              Sign Up
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
