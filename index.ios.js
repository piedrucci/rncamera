import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CameraComp from './app'

export default class rnscanner extends Component {
  render() {
    return (
      <CameraComp />
    );
  }
}

AppRegistry.registerComponent('rnscanner', () => rnscanner);
