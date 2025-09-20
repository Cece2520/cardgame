import './css/CardUI.css'

import { Card } from "../game/CardHandler.ts"

function CardView(props:{card:Card}) {
  return (
    <>
      <div className="card">
        <button /* onClick={() => props.playCard()} */ >
          <div className="cardtitle"> {props.card.getName()} </div>
          <div className="cardbody"> {props.card.getAbilityText()} </div>
        </button>
      </div>
    </>
  )
}

export default CardView
