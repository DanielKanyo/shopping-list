import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity 
} from 'react-native';
import { 
  MaterialCommunityIcons, 
  MaterialIcons, 
  Ionicons, 
  FontAwesome, 
  Entypo 
} from '@expo/vector-icons';

export default class Item extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.item}>

        <Text style={styles.itemText}>{this.props.val.item}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteBtn}>
          <MaterialCommunityIcons name="delete-circle" size={26} color="#9b9b9b" />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.checkMethod} style={styles.checkBtn}>
          <Ionicons name="ios-checkmark-circle" size={26} color={this.props.val.checkcolor} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#595959',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    paddingLeft: 5,
    color: '#eac448'
  },
  deleteBtn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 0
  },
  checkBtn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 35
  }
});
