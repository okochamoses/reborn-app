import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import Paragraph from "../components/text";
import Button from "../components/button";
import Break from "../components/lineBreak";
const { height, width } = Dimensions.get("window");

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.user);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/cogs.jpg")} style={styles.placeholder} />
        </View>
        <View style={styles.bottomContainer}>
          
          <Break size={20} />
          <View>
            <Paragraph lg bold centered>{"Application Settings"}</Paragraph>
          </View>
          <Break size={20} />
          <View style={{width: "100%", borderBottomWidth: 1, borderBottomColor: "#efefef"}} />
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon ="lock">Change Pass</ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon="textbox-password">Transaction Pin</ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon="credit-card-multiple">Debit/ATM Cards</ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon="file-document-box-multiple-outline">FAQs</ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon="email-outline">Contact Us</ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("Login")} icon="power-standby">Log Out</ListItem>

          {/* <Break size={50} />

          <View style={{ paddingHorizontal: 20 }}>
            <Button dark centered title="Check For Update" />
          </View> */}
          
          <Break size={20} />
        </View>
          <Break size={20} />
      </ScrollView>
    );
  }
}

function ListItem(props) {
  return (
    <TouchableHighlight underlayColor="#000" activeOpacity={0.85} onPress={props.onPress}>
      <View style={{width: "100%", borderBottomWidth: 1, borderBottomColor: "#efefef", paddingHorizontal: 20, paddingVertical: 15, flex: 1, flexDirection: "row"}}>
        <Icon name={props.icon} size={20} color="#2e2e2e" style={{paddingRight: 10}} />
        <Paragraph style={{}}>{props.children}</Paragraph>
      </View>
    </TouchableHighlight>
  )
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

export default connect(mapStateToProps)(Settings);
