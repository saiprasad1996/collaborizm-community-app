/**
 * @flow
 */
import React from 'react';
import {StyleSheet, Text, View, Navigator, ScrollView} from 'react-native';
import Component from './controls/Component';
import TabView from './TabView';

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

    return <TabView/>;
  }
}

var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding:60
  }
});

// https://github.com/react-native-community/react-native-tab-view