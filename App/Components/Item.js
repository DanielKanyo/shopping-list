import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity 
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

export default class Item extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.item}>

        <Text style={styles.itemText}>{this.props.val.item}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteBtn}>
          <MaterialIcons name="delete" size={26} color="#eac448" />
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
    right: 5
  }
});
