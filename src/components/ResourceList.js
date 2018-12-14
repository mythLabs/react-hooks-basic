import React from "react";
import useResources from './useResources';

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

  const resources = useResources(resource);
  
  return <div>{resources.length}</div>;
};

export default ResourceList;
