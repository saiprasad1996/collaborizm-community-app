/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Entry from './lib/Entry';

export default class CollaborizmCommunityApp extends Component {
  render() {
    return <Entry/>;
  }
}

AppRegistry.registerComponent('rn4test', () => CollaborizmCommunityApp);