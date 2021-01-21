import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./components/ShowcaseLayout";
import "./assets/css/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <ShowcaseLayout />
      </div>
    );
  }
}
export default App;

