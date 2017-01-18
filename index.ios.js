/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import Entry from './lib/Entry';

export default class CollaborizmCommunityApp extends Component {
  render() {
    return <Entry/>;
  }
}

AppRegistry.registerComponent('CollaborizmCommunityApp', () => CollaborizmCommunityApp);
