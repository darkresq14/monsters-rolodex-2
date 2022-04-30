// import React, { Component } from "react";

import { Monster } from "../../App";
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

type CardListProps = {
  filteredMonsters: Monster[]
}

const CardList = ({ filteredMonsters }: CardListProps) => (
  <div className="card-list">
    {filteredMonsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
