import "/src/App.css"

function Verb({api}) {
  return ( api[0] ? 
    <div className="mb-[43px]">
      <div className="w-full flex items-center justify-between font-bold text-[24px] mb-[44px]">
        noun <p className=" w-[90%] h-[2px] bg-gray-400"></p>
      </div>
      <p className=" font-normal text-[20px] sec-col mb-[27px]">Meaning</p>
      <ul className=" flex flex-col gap-3 pl-10 list-disc">
        {api.map((a , i) => {
          if(i === 0){
            return(
              a.meanings[1].definitions.map((d) => {
                return <li className="mb-4">{d.definition}</li>
                
              })
            )
          }
        })}
        
      </ul>
      
    </div>
  : "")
}

export default Verb