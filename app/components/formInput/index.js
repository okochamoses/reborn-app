import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import styles from "./style";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", error: "" };

    this.validateText = this.validateText.bind(this);
  }

  validateText(text, compare) {
    switch (this.props.type) {
      case "password":
        if (text.length < 8) {
          this.setState({ error: "Password must be at least 8 characters" });
        } else {
          this.setState({ error: "" });
        }
        break;
      case "confirmPassword":
        if (text != compare) {
          this.setState({ error: "Passwords do not match" });
        } else {
          this.setState({ error: "" });
        }
        break;

      default:
        this.setState({ error: "" });
        break;
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.placeholder}>{this.props.placeholder}</Text>
        </View>
        <View>
          <TextInput
            placeholder={this.props.inputPlaceholder}
            {...this.props}
            onChange={() => {
              this.validateText(this.props.value, this.props.compare);
              return this.setState({ text: this.props.value });
            }}
            style={[styles.input, this.state.error ? styles.errorInput : null]}
            value={this.props.value}
          />
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        </View>
      </View>
    );
  }
}

export default FormInput;
