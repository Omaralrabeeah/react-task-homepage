import "./App.css";
// import { Ghafor } from "./Ghaphor";
// import { Omar } from "./Omar";
// import { Rabe3a } from "./Rabe3a";
import { Cookies } from "./components/Cookies";
import { Home } from "./components/Home";
const App = () => {
  return (
    <div>
      {/* <Omar name="Ghaphor" age="12" ayshey={ayshey} /> */}
      <Home />;
      <Cookies />;
      {/* <Ghafor />
      <Rabe3a /> */}
    </div>
  );
};
export default App;
