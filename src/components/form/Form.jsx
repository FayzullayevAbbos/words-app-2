import { useState } from "react"
import "/src/App.css"

function Form({setWord}) {
    const [surov, setSurov] = useState("")
     
    function onSubmit(e){
        e.preventDefault()

        if(e.target.inp.value){
            setWord(e.target.inp.value)
           setSurov("")

        }
    }
    function onChange(e){
       setSurov(e.target.value)
    }
  return (
    <div className="mx-width mx-auto mb-[52px]">
        <form onSubmit={onSubmit} className="formm flex items-center " >
        <input autoComplete="off" name="inp"  onChange={onChange} value={surov} type="text" className="inp text-[20px]"   placeholder="write word" />
        <button className="" type="submit"> 
            <img src="/src/images/loop.svg" alt="" />
        </button>
        </form>
    </div>
  )
}

export default Form