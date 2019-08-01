import React, { Component } from "react";
import Carousel, { ParallaxImage, Pagination } from "react-native-snap-carousel";
import { Dimensions, StyleSheet, View, Text, ImageBackground } from "react-native";
import colors from "../../utils/colors";

const { width: screenWidth } = Dimensions.get("window");

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title: "The best haricuts",
          thumbnail: "http://serviceme.ng/images/categories/barber.jpg",
          body:
            "Barbers selected based on their stunning work. We have the best barbers at their craft. Calling them artists won't be out of place"
        },
        {
          title: "Spotless cars",
          thumbnail: "http://serviceme.ng/images/categories/car_wash.jpg",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          title: "Coupon codes",
          thumbnail: "https://via.placeholder.com/150/0000FF/808080 ?Text=Item 1",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt urna sed ligula tempus aliquam. Maecenas quis lacinia est. Sed."
        }
      ],
      active: 0
    };
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ImageBackground source={{ uri: item.thumbnail }} style={styles.imageContainer}>
          <View style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: 10 }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Montserrat-Regular",
                fontSize: 16,
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: "#fff", fontFamily: "Montserrat-Regular" }}>{item.body}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth * (3 / 4)}
          itemWidth={screenWidth - 40}
          data={this.state.entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          onSnapToItem={index => this.setState({ active: index })}
          layout="default"
          layoutCardOffset={50}
        />
        <Pagination
          dotsLength={this.state.entries.length}
          activeDotIndex={this.state.active}
          dotColor={colors.darkInput}
          inactiveDotColor="grey"
          inactiveDotScale={0.5}
          inactiveDotOpacity={0.5}
          style={{ paddingTop: 0 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height: screenWidth / 2
    // padding: 20
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 0,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: screenWidth - 30,
    height: screenWidth / 2,
    resizeMode: "contain"
  }
});
