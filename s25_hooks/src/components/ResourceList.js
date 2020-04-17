import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    const res = await axios.get(
      `https:jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: res.data });
  }
  async componentDidUpdate(prevProps) {
    //   If you didn't have this check, it would keep making the axios request
    if (prevProps.resource !== this.props.resource) {
      const res = await axios.get(
        `https:jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: res.data });
    }
  }
  render() {
    return <div>Resource: {this.state.resources.length}</div>;
  }
}

export default ResourceList;
