// import React, { Component } from "react";
import React from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { filteredMonsters } = this.props;

//     return (
//       <div className="card-list">
//         {filteredMonsters.map((monster) => (
//           <Card monster={monster} />
//         ))}
//       </div>
//     );
//   }
// }

const CardList = ({ filteredMonsters }) => (
  <div className="card-list">
    {filteredMonsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
