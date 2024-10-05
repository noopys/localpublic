import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './auth/AuthProvider';
import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";

const COMETCHAT_CONSTANTS = {
  APP_ID: "254033c3e0be6dd7", //Replace with your App ID
  REGION: "US", //Replace with your App Region
  AUTH_KEY: "f668b6beca8d497ea2d81d30360e412e1ebb9244" //Replace with your Auth Key
}

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForFriends()
  .build();

//Initialize CometChat UIKit
CometChatUIKit.init(UIKitSettings).then(() => {
  console.log("Initialization completed successfully");
  // You can now call login function.
  CometChatUIKit.getLoggedinUser()
}).catch(console.log);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);