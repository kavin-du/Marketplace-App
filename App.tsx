import {
  StyleSheet, Text, Image, View, StatusBar,
  TouchableHighlight,
  Button,
  Alert,
  SafeAreaView,
  Platform,

} from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const handlePress = () => console.log("button pressed");
  
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen></ListingDetailsScreen>;
  return <ViewImageScreen />;

  // return (
  //   // safe area view only for iOs, in andriod need padding
  //   <SafeAreaView style={[styles.container, containerStyle]}>
  //     <View style={{
  //       backgroundColor: 'dodgerblue',
  //       width: '50%',
  //       height: 70,
  //     }}></View>
  //     <Text numberOfLines={1} onPress={handlePress}>
  //       Open up App.tsx to start working on your app! Open up App.tsx to start
  //       working on your app!Open up App.tsx to start working on your app
  //     </Text>
  //     <Image source={require("./assets/favicon.png")} />
  //     <TouchableHighlight>
  //       <Image source={{
  //         uri: "https://picsum.photos/200/300",
  //         width: 100,
  //         height: 100,
  //       }} />
  //     </TouchableHighlight>
  //     <Button title="press me" onPress={() => Alert.alert('My title', 'My message', [
  //       { text: 'Yes', onPress: () => console.log('yes') },
  //       { text: 'No', onPress: () => console.log('No') },
  //     ])} />

  //     <Button title="press me2" onPress={() => Alert.prompt('title', 'message', (text) => console.log(text))} />
  //     {/* <StatusBar style="auto" /> */}
  //   </SafeAreaView>
  // );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
