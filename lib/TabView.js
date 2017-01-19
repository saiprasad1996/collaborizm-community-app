import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, TabBarTop } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class TabViewExample extends Component {

  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        {key: 'discover', title: 'Discover'},
        {key: 'chat', title: 'Chat'},
        {key: 'discussions', title: 'Notifications'},
        {key: 'feed', title: 'Feed'},
      ],
    };
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderFooter = (props) => {
    return <TabBarTop {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
      case '2':
        return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}