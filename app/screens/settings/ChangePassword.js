import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import Paragraph from "../../components/text";
import Button from "../../components/button";
import Break from "../../components/lineBreak";
import FormInput from "../../components/formInput";
import RequestHandler from "../../api/services";
const { height, width } = Dimensions.get("window");

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { oldPassword: "", newPassword: "", confirmPassword: "" };
  }

  async handleSubmit() {
    const res = await RequestHandler.changePassword(
      this.state.oldPassword,
      this.state.oldPassword,
      this.props.user.username,
      true
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <Paragraph centered bold lg>
            Change Password
          </Paragraph>
          <Break size={30} />
          <FormInput
            onChangeText={oldPassword => this.setState({ oldPassword })}
            value={this.state.oldPassword}
            secureTextEntry={true}
            type="password"
            inputPlaceholder="Old Password"
          />
          <Break size={10} />
          <FormInput
            onChangeText={newPassword => this.setState({ newPassword })}
            value={this.state.newPassword}
            secureTextEntry={true}
            type="password"
            inputPlaceholder="New Password"
          />
          <Break size={10} />
          <FormInput
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            compare={this.state.newPassword}
            secureTextEntry={true}
            type="confirmPassword"
            inputPlaceholder="Confirm Password"
          />
          <Break size={50} />
          <Button onPress={() => this.handleSubmit()} dark centered title="Change Password" />
          <Break size={30} />
        </View>
        <Break size={20} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    height: height * 0.5
  },
  placeholder: {
    height: "70%"
  },
  bottomContainer: {
    backgroundColor: "#fff",
    padding: 20,
    // paddingBottom: 30,
    // flex: 1,
    // flexGrow: 1,
    width: "100%"
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 30,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30
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

export default connect(mapStateToProps)(ChangePassword);
