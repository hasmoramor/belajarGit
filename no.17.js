import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isShow: true
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ isShow: !previousState.isShow }))
  }


  render() {

    return (
      <View style={styles.container}>

       {
        this.state.isShow ? <Text style= {styles.headerText}> Hello Friends </Text> : null
      }
 
      <Button title="Hide Text Component" onPress={this.componentHideAndShow} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },

});