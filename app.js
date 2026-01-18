import Nav from "./nav.js";
import Hero from "./hero.js";

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Nav),
    React.createElement(Hero)
  );
};

export default App;
