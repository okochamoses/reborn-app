// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Fragment } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions
// } from "react-native/Libraries/NewAppScreen";
// import Button from "./components/button";
// import Input from "./components/input";
// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Input placeholder="test@email.com" />
//               <Input placeholder="Your password here" type="password"></Input>
//               <Button title="SIGN IN"></Button>
//               <Text style={styles.sectionTitle}>Step Onae</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back to see your
//                 edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>Read the docs to discover what to do next: ???</Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter
//   },
//   engine: {
//     position: "absolute",
//     right: 0
//   },
//   body: {
//     backgroundColor: Colors.white
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: Colors.black
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//     color: Colors.dark
//   },
//   highlight: {
//     fontWeight: "700"
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: "600",
//     padding: 4,
//     paddingRight: 12,
//     textAlign: "right"
//   }
// });

// export default App;

import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/Login";
import ForgotPasswordScreen from "./screens/ForgotPassword";
import RegisterScreen from "./screens/Register";
import AlertModal from "./screens/AlertModal";

const MainNavigator = createStackNavigator(
  {
    AlertModal: {
      screen: AlertModal
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login",
        header: null //this will hide the header
      }
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        title: "Forgot Password",
        headerStyle: {
          backgroundColor: "#949494"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: "Register",
        headerStyle: {
          backgroundColor: "#1b1a1d"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
