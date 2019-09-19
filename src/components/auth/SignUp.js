import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Form, Input, Item, Label} from 'native-base';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
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
            alignSelf: 'flex-start',
            marginTop: hp('14%'),
            marginLeft: wp('10%'),
          }}>
          Create your Account
        </Text>
        <Text
          style={{
            fontSize: 15,
            alignSelf: 'flex-start',
            marginLeft: wp('10%'),
            marginTop: hp('2%'),
          }}>
          It's free and easy to set up!
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
            <Item floatingLabel style={{width: wp('82.9%')}}>
              <Label style={{fontSize: 14}}>Email</Label>
              <Input
                style={{marginTop: hp('0.8%'), fontFamily: 'Avenir-Roman'}}
                value={this.state.email}
                onChangeText={value =>
                  this.setState({email: value}, this.onValidate)
                }
              />
            </Item>
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
          <Button
            title="SIGN UP"
            buttonStyle={{
              width: wp('81.3%'),
              marginTop: hp('8.4%'),
              height: hp('6.3%'),
              alignSelf: 'center',
              backgroundColor: '#e65c00',
              borderStyle: 'solid',
              borderRadius: 6,
            }}
            titleStyle={{fontSize: 15}}
            onPress={() => Actions.dash()}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: hp('4%'),
              fontSize: 15,
            }}>
            Existing user?{' '}
            <Text
              style={{color: '#e65c00', fontSize: 15}}
              onPress={() => Actions.signin()}>
              Signin
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
