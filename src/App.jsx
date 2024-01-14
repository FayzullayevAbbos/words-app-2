import { useEffect, useState } from "react"
import "./App.css"
import Form from "./components/form/Form"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {
  const [api , setApi] = useState([])
  const [word , setWord] = useState("")
  useEffect(() => {
    getApi(word)
  }, [word])
  async function getApi(query){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
    
    const data = await res.json()
    console.log(data);
    setApi(data)
  }

  
  return (
    <div className=" pt-5 px-3 mx-auto container  ">
      <Header/>
      <Form setWord={setWord}/>
      <Main api={api}/>
    </div>
  )
}

export default App