import React from "react";
import { render } from "react-dom";

const Hello = ({ name }) => <h1>Hello {name}!</h1>;

// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  /* any permission of extra functionality that cannot be 
  directly given to Hello component would be assigned to it 
  via this HOC */

  // And return a new anonymous component
  return class extends React.Component {
    state = { name: this.props.name };
    componentDidMount() {
      if (this.props.name.length <= 0) {
        console.log("here");
        this.setState({ name: "from HOC" });
      }
    }
    render() {
      console.log(this.name);
      return <WrappedComponent {...this.state} />;
    }
  };
}

const NewComponent = simpleHOC(Hello);

const App = () => (
  <div>
    <NewComponent name="" />
  </div>
);

render(<App />, document.getElementById("root"));
