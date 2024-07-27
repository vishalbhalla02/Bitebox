import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/Appstore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
