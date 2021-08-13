/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,

  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../redux/actions/userActions";

import styles from "./Sign.style";

function mapStateToProps(state) {
  return {
    user: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userSign: bindActionCreators(userActions.USER_SIGN, dispatch),
    },
  };
}

const Sign = connect(
  mapStateToProps,
  mapDispatchToProps,
)((props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safe_input_view}>
        <TextInput
          style={styles.input_text}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.safe_input_view}>
        <TextInput
          secureTextEntry
          style={styles.input_text}
          placeholder="Password"
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        onPress={() => [
          props.actions.userSign(email, password),
          navigation.navigate("LoginPage"),
        ]}
        style={styles.button}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export default Sign;
