/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Lightbox = require('react-native-lightbox');
import Swiper from 'react-native-swiper';


export default class PAT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Lightbox onClose={null} activeProps={{ width: 400,height: 400 }}  >
        <Image
          style={{ width: 100,height: 100 }}
          source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
        />
      </Lightbox>

     
  <Lightbox onClose={null} activeProps={{ width: 400,height: 400 }}  >
        <Image
          style={{ width: 100,height: 100 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
      </Lightbox>


  <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
              <Lightbox onClose={null} activeProps={{ width: 400,height: 400 }}  >
              <Image
               style={{ width: 100,height: 100 }}
               source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
               />
              </Lightbox>
              <Lightbox onClose={null} activeProps={{ width: 400,height: 400 }}  >
            
              <Image
                style={{ width: 100,height: 100 }}
              source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
              />
            </Lightbox>
               <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PAT', () => PAT);
