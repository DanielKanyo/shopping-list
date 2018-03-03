import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import Item from './Item';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemArray: [],
      itemText: '',
      checkColor: '#9b9b9b'
    }
  }

  addItem() {
    if (this.state.itemText) {
      this.state.itemArray.push({
        item: this.state.itemText,
        checkColor: this.state.checkColor
      });
      this.setState({itemArray: this.state.itemArray});
      this.setState({ itemText: ''});
    }
  }

  deleteItem(key) {
    this.state.itemArray.splice(key, 1);
    this.setState({
      itemArray: this.state.itemArray
    });
  }

  render() {

    let items = this.state.itemArray.map((val, key) => {
      return <Item key={key} keyval={key} val={val} 
      deleteMethod={() => this.deleteItem(key)}
      />
    }); 

    return (
      <View style={styles.container}>
        <View style={styles.info}></View>

        <View style={styles.header}>
          <TextInput
            style={styles.textInput}
            onChangeText={(itemText) => this.setState({itemText})}
            value={this.state.itemText}
            placeholder='What would you like to buy?'
            placeholderTextColor='#333333'
            underlineColorAndroid='transparent'
          >
          </TextInput>
        </View>

        <TouchableOpacity onPress={ this.addItem.bind(this) } style={styles.addButtonContainer}>
          <Entypo name="plus" size={26} color="#eac448" />
        </TouchableOpacity>

        <ScrollView style={styles.scrollContainer}>
          {items}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  info: {
    height: 25
  },
  scrollContainer: {
    flex:1,
    padding: 10,
  },
  header: {
    position: 'relative',
    top: 0,
    left :0,
    right:0,
    padding: 10,
    zIndex:10,
    backgroundColor: '#eac448',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textInput: {
    alignSelf: 'stretch',
    color:'#333',
    fontSize: 16,
    backgroundColor: 'transparent',
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15
  },
  addButtonContainer: {
    position: 'absolute',
    top: 35,
    right: 10,
    backgroundColor: '#333',
    padding: 10,
    zIndex: 11,
    borderRadius: 15
  }
});
