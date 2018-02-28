import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity 
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>SHOPPING LIST</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  text: {
    color: '#333333',
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#eac448',
    paddingTop: 30,
    paddingBottom: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15 
  }
});
