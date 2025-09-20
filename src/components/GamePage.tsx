import { useEffect, useState } from 'react'

import './css/GamePage.css'

import CardUI from './CardUI.tsx'
import Map from './Map.tsx'

import { Player, NPC } from '../game/CardPlayer.ts'
import { Card } from '../game/CardHandler.ts'

import { PORT } from '../server/ServerTypes.ts';


function GamePage() {
  let playerCards:Array<Card> = [new Card("Strike","Deal 5 damage"), 
                                 new Card("Strike","Deal 5 damage"), 
                                 new Card("Strike","Deal 5 damage"), 
                                 new Card("Strike","Deal 5 damage"), 
                                 new Card("Strike","Deal 5 damage")];
  let playerHealth = 10;

  let enemyCards:Array<Card> = [];
  let enemyHealth = 20;

  const player:Player = new Player(playerCards, playerHealth);
  const enemy:NPC = new NPC(enemyCards, enemyHealth);

  const [myNumber, setNumber] = useState(0);
  const [myString, setString] = useState("Hello")
//   useEffect(() => {
    
//   }, []);

  let bruh:number = 0
  let responseString:string = ""
  const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${PORT}/number/10`);
        const result = await response.json();
        setString(result);
        setNumber(parseInt(result));
      } catch (error) {
        console.error('Error fetching data:', error);
        setNumber(-100);
      }
    };
    
    useEffect(() => {
        fetchData();
    }, [])
  

  return (
    <>
      <div>
        {responseString}{myNumber}
        <Map enemy={enemy} mynum={myNumber}/>
        <CardUI player={player}/>
      </div>
    </>
  )
}

export default GamePage
