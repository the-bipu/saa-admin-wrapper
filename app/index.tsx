import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://admin.slietalumni.in/",
        }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}