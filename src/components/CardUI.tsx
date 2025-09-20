// import { useState } from 'react'
import './css/CardUI.css'

import CardView from './CardView';

import { Card } from '../game/CardHandler.ts'
import { Player } from '../game/CardPlayer.ts';

function CardUI(props:{player: Player}) {
  // const [count, setCount] = useState(0)


  const cardList:any = []
  for (let i:number = 0; i < Math.min(10, props.player.deck.length); i++) {
    cardList.push(props.player.deck[i]);
  }

  return (
    <>
      <div className="cardhand">
        {cardList.map(function(card:Card,index:number){ return <div className="card"> <CardView key={index} card={card}/> </div>; } )}
      </div>
    </>
  )
}

export default CardUI
