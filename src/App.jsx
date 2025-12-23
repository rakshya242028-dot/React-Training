import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  const [characterName, setCharacterNAmne]=useState(``)
  
   
    const handlesubmit = async (event)=>{
      console.log(event)
      if(event.key === `Enter`){
      try{
        const response = await fetch(`https://yurippe.vercel.app/api/quotes?character=${characterName}&random=1`)
      const result = await response.json()
        setQuote(result)
      }catch (e){
        console.log(e)
      }
    }
  }
  


  console.log(characterName )
  return (
  <>
  <input value={characterName} placeholder="Enter character name" onChange={(e)=>setCharacterNAmne(e.target.value)} onKeyUp={handlesubmit}/>
    <ul>
      {quote.map(quo => (
        <div>
        <li key={quo._id}>{quo.character}</li>
        <li key={quo._id}>{quo.quote}</li>
        </div>
      ))}
    </ul>
    </>
  );
}

export default App;
