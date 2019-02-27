import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

export default class App extends React.Component {

  state = {
    isModalVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.toggleModal}>
          <Text style = {styles.displayBtn}>モーダル表示</Text>
        </TouchableOpacity>

        <Modal
          isVisible={this.state.isModalVisible}
          animationIn = 'zoomIn'
          animationOut = 'zoomOut'
          animationInTiming = {1000}
          animationOutTiming = {1000}
        >
          <View style = {styles.card}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text style = {styles.hideBtn}>モーダル非表示</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
  //関数
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible})
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  card:{
    height:'80%',
    borderRadius:9,
    backgroundColor:'#ffddff',
    alignItems:'center',
    justifyContent:'center',
  },
  displayBtn:{
    fontSize:27,
    padding:9,
    color:'#fff',
    backgroundColor:'#333399',
  },
  hideBtn:{
    fontSize:27,
    padding:9,
    color:'#fff',
    backgroundColor:'#333399',
  }
});
