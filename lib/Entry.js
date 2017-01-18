/**
 * @flow
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Component from './controls/Component';


import FBSDK, {LoginManager} from 'react-native-fbsdk';
import LoginScreen from './LoginScreen';

export default class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false, accessToken: false};
  }

  loggedInFinished = accessToken => this.setState({accessToken});

  logout = accessToken => {
    LoginManager.logOut();
    this.setState({accessToken: false});
  };

  render() {
    const {accessToken} = this.state;

    return accessToken ?
      <View>
        <Text>LOGGED IN WITH TOKEN {accessToken}</Text>
      </View> : <LoginScreen loggedInFinished={this.loggedInFinished} />;
  }
}