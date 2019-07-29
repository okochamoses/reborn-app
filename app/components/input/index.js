import React, { Component } from "react";
import { TextInput, View, Text, TouchableHighlight } from "react-native";
import styles from "./style";
import validate from "./validation";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", togglePasswordVal: true, validationError: "", validationErrorStyle: { fontSize: 0 } };

    this.togglePassword = this.togglePassword.bind(this);
    this.validateEntry = this.validateEntry.bind(this);
  }

  togglePassword() {
    this.setState({ togglePasswordVal: this.state.togglePasswordVal === false ? true : false });
  }

  validateEntry(text, type) {
    const { error, message } = validate(text, type);
    if (error) {
      this.setState({ validationErrorStyle: { fontSize: 11, color: "#550000", textAlign: "right" } });
      this.setState({ validationError: message });
    } else {
      this.setState({ validationError: "" });
      this.setState({ validationErrorStyle: { fontSize: 0 } });
    }
  }

  renderInput() {
    switch (this.props.type) {
      case "password":
        return (
          <View style={styles.inputSection}>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={this.state.togglePasswordVal}
                style={styles.input}
                onChangeText={text => {
                  this.setState({ text });
                  // this.props.validate ? this.validateEntry(text, this.props.type) : "";
                }}
                placeholder={this.props.placeholder}
                placeholderTextColor="#46444C"
                {...this.props}
              />
              <View style={{ height: 50, justifyContent: "center", alignItems: "center" }}>
                <TouchableHighlight style={styles.togglePassword} onPress={this.togglePassword}>
                  <Text style={styles.text}>{this.state.togglePasswordVal ? "SHOW" : "HIDE"}</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
        break;

      default:
        return (
          <View style={styles.inputSection}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={this.props.placeholder}
                placeholderTextColor="#46444C"
                keyboardType={this.props.type}
                style={styles.input}
                onChangeText={text => {
                  this.setState({ text });
                  this.props.validate ? this.validateEntry(text, this.props.type) : "";
                }}
                {...this.props}
              />
            </View>
            <View>
              <Text style={this.state.validationErrorStyle}>{this.state.validationError}</Text>
            </View>
          </View>
        );
        break;
    }
  }

  render() {
    return this.renderInput();
  }
}

module.exports = Input;
