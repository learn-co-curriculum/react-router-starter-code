import React from 'react';
import { Link } from 'react-router-dom';
import Painting from './Painting';

class PaintingsList extends React.Component{

  render(){
    return(<div>
       <Link to="/newPainting"> Add a new painting</Link>
       <h1>Paintings</h1>
      {
      this.props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
        />
      ))
      }
    </div>)
  }
}

export default PaintingsList;
