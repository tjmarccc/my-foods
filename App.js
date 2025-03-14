import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./MainApp";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainApp />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
