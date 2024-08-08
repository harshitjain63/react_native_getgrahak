import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, RefreshControl, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import { Menu, Divider, PaperProvider } from 'react-native-paper';

const logoImg = require("./images/tanjiro.jpg");
const Stack = createNativeStackNavigator();

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyWebView" component={MyWebView} />
        <Stack.Screen name="Menubar" component={Menubar} />
        <Stack.Screen name="Referesh" component={Referesh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ padding: 20, flex: 1 }}>

      <Modal transparent={true}
        visible={showModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20 }}>This is a basic Modal</Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <View style={{
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 10,
                marginTop: 20
              }}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>Close Modal</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


      </Modal>


      <Image style={styles.image} source={logoImg} />
      <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, color: "green" }}>
        HomeScreen</Text>

      <TouchableOpacity onPress={() => setShowModal(true)} >
        <View style={{
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          padding: 20,
          marginTop: 10
        }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Open Modal</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const Menubar = (props) => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <View style={{
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: 20,
                marginTop: 10
              }}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>Open Menu</Text>
              </View>
            </TouchableOpacity>

          }>
          <Menu.Item onPress={() => props.navigation.navigate("MyWebView")} title="WebView" />
          <Menu.Item onPress={() => props.navigation.navigate("Home")} title="Home" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};


const Login = (props) => {
  return (
    <View>


      <Text style={{ textAlign: "center", marginTop: 200, fontSize: 20, color: "red" }}>Login Screen</Text>
      <View style={{ padding: 50, marginTop: 100 }}>

        <TouchableOpacity onPress={() => props.navigation.navigate("MyWebView")}>
          <View style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 20,
            marginTop: 10
          }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>WebView</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <View style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 20,
            marginTop: 10
          }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>HomeScreen and Modal</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate("Menubar")}>
          <View style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 20,
            marginTop: 10
          }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Menubar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Referesh")}>
          <View style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 20,
            marginTop: 10
          }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Referesh</Text>
          </View>
        </TouchableOpacity>



      </View>
    </View>
  );
};

const Referesh = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};


const MyWebView = () => {
  return (
    <WebView
      source={{ uri: 'https://www.freepik.com/free-photos-vectors/anime-wallpaper' }}
      style={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({

  image: {
    width: 200,
    height: 200,
    marginTop: 200,
    marginLeft: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "skyblue",
    padding: 50,
    shadowColor: "black",
    elevation: 5,
    borderRadius: 20,

  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
