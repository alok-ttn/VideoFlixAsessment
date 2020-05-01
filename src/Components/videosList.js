/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colorConstants, imageConstants} from '../config/constants';
import {connect} from 'react-redux';
import {toggleLogin, toggleSuccess} from '../Services/Authentication/action';
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={imageConstants.backgroundImage}
          style={styles.imageBack}>
          <View style={styles.topBarView}>
            <View style={styles.topBarLeft}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={imageConstants.drawer}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
              <Text style={styles.applogoText}>APP LOGO</Text>
            </View>
            <View style={styles.topBarRight} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    flex: 1,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'center',
  },
  applogoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  topBarLeft: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topBarRight: {
    flex: 0.5,
    justifyContent: 'center',
  },
  topBarView: {
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
});

const mapStateToProps = state => ({
  isLoggedIn: state.homeReducer.isLoggedIn,
});

const mapDispatchToProps = {
  toggleLogin: toggleLogin,
  toggleSuccess: toggleSuccess,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList);
