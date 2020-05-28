import React, { Component } from "react";
import ChildComponent from "./childComponent";
export class parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default parent;
