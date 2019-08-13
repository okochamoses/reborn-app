import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import Paragraph from "../components/text";
import Break from "../components/lineBreak";
const { height, width } = Dimensions.get("window");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/bg-abstract.jpg")} style={styles.placeholder} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.imagePlaceholder}>
            <Image
              source={require("../assets/images/bg-abstract.jpg")}
              style={[styles.placeholder, styles.bottomImage]}
            />
          </View>
          <Break size={20} />
          <View>
            <Paragraph lg bold centered>{`${this.props.user.firstName} ${this.props.user.lastName}`}</Paragraph>
            <Paragraph light centered>
              {this.props.user.email}
            </Paragraph>
          </View>

          <Break size={10} />

          <View style={{ borderBottomColor: "#f2f2f2", borderBottomWidth: 2 }} />
          <View style={{ flexDirection: "row", padding: 20 }}>
            <Break size={10} />
            <Icon name="phone" size={20} style={{ paddingRight: 10 }} />
            <Paragraph bold>Phone Number: </Paragraph>
            <Paragraph>{this.props.user.phoneNumber}</Paragraph>
          </View>
          <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
            <Break size={10} />
            <Icon name="phone" size={20} style={{ paddingRight: 10 }} />
            <Paragraph bold>Phone Number: </Paragraph>
            <Paragraph>{this.props.user.phoneNumber}</Paragraph>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8ECF2",
    flexDirection: "column"
  },
  top: {
    height: height * 0.2
  },
  placeholder: {
    height: "100%",
    width: "100%"
  },
  bottomContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    // borderTopEndRadius: 20,
    // borderTopStartRadius: 20,
    borderRadius: 20,
    marginTop: -30,
    paddingBottom: 30
  },
  imagePlaceholder: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: "#222",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#efefef",
    marginTop: -70
  },
  bottomImage: {
    borderRadius: 70
  }
});

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Profile);
