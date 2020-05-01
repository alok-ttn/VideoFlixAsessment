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
import {fetchVideosApi} from '../Services/Authentication/action';
import Carousel from 'react-native-snap-carousel';
import { transform } from '@babel/core';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }
  componentDidMount() {}

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 200,
          marginLeft: 15,
        }}>
        <Text style={{fontSize: 30}}>Hello</Text>
        <Text>Hiii</Text>
      </View>
    );
  }
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
                <Image source={imageConstants.drawer} style={styles.titleBar} />
              </TouchableOpacity>
              <Text style={styles.applogoText}>APP LOGO</Text>
            </View>
            <View style={styles.topBarRight}>
              <TouchableOpacity>
                <Image
                  source={imageConstants.notification}
                  style={styles.titleBar}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={imageConstants.search} style={styles.titleBar} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bannerView}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={450}
              itemWidth={500}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
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
  bannerView: {
    flex: 0.3,
    backgroundColor: 'white',
  },
  applogoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  titleBar: {height: 30, width: 30, marginRight: 20},
  topBarLeft: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topBarRight: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
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
  fetchVideosApi: fetchVideosApi,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList);
