/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const Realm = require('realm');
class RealmPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeData: [],
      name: '',
      realm: null,
    };
  }
  componentDidMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}],
    }).then(realm => {
      this.setState({realm});
    });
  }
  componentWillUnmount() {
    // Close the realm if there is one open.
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
  saveData() {
    const {realm, name} = this.state;
    realm.write(() => {
      realm.create('Dog', {name: name});
    });
  }
  deleteData() {
    const {realm} = this.state;
    realm.write(() => {
      let allDogs = realm.objects('Dog');
      realm.delete(allDogs);
    });
  }
  fetchData() {
    const storeData = this.state.realm.objects('Dog');
    this.setState({storeData: storeData});
  }
  render() {
    const {storeData, name} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.animationView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            data={storeData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={{height: 30}}>
                    <Text> {item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.productId}
          />
        </View>
        <TextInput
          style={styles.textInputView}
          placeholder={'input text'}
          value={name}
          onChangeText={text => {
            this.setState({name: text});
          }}
        />
        <TouchableOpacity
          onPress={() => this.saveData()}
          style={styles.buttonView}>
          <Text>Save Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.fetchData()}
          style={styles.buttonView}>
          <Text>Fetch Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.deleteData()}
          style={styles.buttonView}>
          <Text>Delete Data</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  textInputView: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
  },
  animationView: {
    flex: 0.5,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: '#a1b2c3',
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default RealmPractice;
