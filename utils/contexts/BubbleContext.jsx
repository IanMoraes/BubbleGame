import React, { createContext } from 'react'

export default function BubbleContext() {
    
    const [bubbles, setBubbles] = useState([]);
    const BubbleContext = createContext();
  return (
    <BubbleContext.Provider>BubbleContext</BubbleContext.Provider>
  )
}
