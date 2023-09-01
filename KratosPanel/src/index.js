import React, {createContext} from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import UserStorage from "./storage/UserStorage";

export const Context = createContext(null)

// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
    <Context.Provider value={{
      user: new UserStorage()
    }}>
      <App />
    </Context.Provider>,
    document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
