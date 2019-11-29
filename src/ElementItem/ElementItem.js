import React, { Fragment, useState } from 'react'
import elements from '../PeriodicTableJSON.json'
import './ElementItem.css';
import { useParams } from "react-router-dom";

export default function ElementItem() {
  const [els, setEls] = useState(elements);
  let { id } = useParams();
  return (
    <div>
      <p>{id}</p>
      {console.log(els[id-1])}
      <h1>{els[id-1].name}</h1>
    </div>
  )
}


// export default class ElementItem extends Component {
//   state = {
//     element: {}
//   }
  
//   componentDidMount() {
//     this.setState({
//       element: elements
//     })
//   }

//   render() {
//     const { element } = this.state
//     let { id } = useParams();

//     return (
//       <div>
//         <h1>React</h1>
//         <p>{id}</p>
//         {/* {console.log(this.state)} */}
//       </div>
//     )
//   }
// }
