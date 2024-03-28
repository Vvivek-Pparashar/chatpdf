import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const Chat = () => {
  const {state} = useLocation()
  
  const [isGenrating, SetisGenrating] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      SetisGenrating(true)
      const name = state;
      const response = await fetch(`http://127.0.0.1:5000/gen-db?name=${name.name}`);
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setHasFetched(true);
        SetisGenrating(false)
      }
    }
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  
  return (<>
    <div>Chat</div>
    {isGenrating ? <div>Generating db</div> :<div>DB generated</div> }
    </>
  )
}

export default Chat