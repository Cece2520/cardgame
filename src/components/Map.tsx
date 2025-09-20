import { useEffect, useState } from 'react'
import './css/Map.css'

import { NPC } from '../game/CardPlayer.ts'

function Map(props: {enemy: NPC, mynum:number}) {
  const [count, setCount] = useState(props.mynum)
  
  useEffect(() => {
    setCount(props.mynum);
  }, [])
  
  return (
    <>
      <div className="mainmap">
        <button onClick={() => setCount((count) => count + 1)}>
          Enemy is at {props.enemy.getHealth()} hp also {count}
        </button>
      </div>
    </>
  )
}

export default Map
