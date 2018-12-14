import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  //////    Without hooks in class based component  start  //////
  //     state = { resources: []}

  //    async componentDidMount() {
  //        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

  //         this.setState({resources: response.data})
  //     }

  //     async componentDidUpdate(prevProps) {
  //         if (prevProps.resource !== this.props.resource) { //PURE HATE -> overcome by hooks
  //             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

  //             this.setState({resources: response.data})
  //         }

  //     }
  //////    Without hooks in class based component  end   //////

  /////   With hooks  //////

  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
      })(resource);  //useEffect cleanup requirement (for async) fulfillment intelligently
    },
    [resource]
  );

  return <div>{resources.length}</div>;
};

export default ResourceList;
