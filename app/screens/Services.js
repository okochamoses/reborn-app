import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions, FlatList, TouchableHighlight } from "react-native";
import ListItem from "../components/listItem";
import RequestHandler from "../api/services";
import colors from "../utils/colors";

const { height, width } = Dimensions.get("window");

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // Check if persisted in redux else call api
    const res = await RequestHandler.getServices(false);
    const services = res.data;
    this.setState({ services: [...services] });
  }

  render() {
    return (
      <View
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#E8ECF2",
          flexDirection: "column"
        }}
      >
        <Image
          source={{
            uri:
              "https://www.kijiji.ca/kijijicentral/app/uploads/2017/10/5-Buyers_inspection_1280x692-1280x692-c-default.jpg"
          }}
          style={styles.placeholder}
        />
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.header}>All Services</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.services}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.9}
                underlayColor="#FFF"
                onPress={() => this.props.navigation.navigate("ServicePage", { service: item })}
                key={item.id}
              >
                <ListItem name={item.name} description={item.description} image={item.image} />
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    );
  }
}

module.exports = Services;

const styles = StyleSheet.create({
  constainer: {},
  bottomContainer: {
    height: height / 1.25 - 65,
    backgroundColor: "#fff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -30,
    paddingTop: 30,
    paddingHorizontal: 30
  },
  header: { fontSize: 22, paddingBottom: 10, fontFamily: "Zirkel Semibold" },
  placeholder: { height: height / 4, width: width }
});
