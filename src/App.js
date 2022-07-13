import React, { useState } from "react";
import { render } from "react-dom";

const Hello = ({ name }) => <h1>Hello {name}!</h1>;

// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  /* any permission of extra functionality that cannot be 
  directly given to Hello component would be assigned to it 
  via this HOC */

  // And return a new anonymous component
  return class extends React.Component {
    componentDidMount() {
      if (!this.props.hasOwnProperty("name")) {
        this.props.name = "from HOC";
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const NewComponent = simpleHOC(Hello);

const App = () => (
  <div>
    <NewComponent name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
