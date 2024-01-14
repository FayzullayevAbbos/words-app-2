import "/src/App.css";

function Noun({api}) {
  
 
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
              a.meanings[0].definitions.map((d,l) => {
                return <li key={l} className="mb-4">{d.definition}</li>
                
              })
            )
          }
        })}
        
      </ul>
      {api[0].meanings[0].synonyms[0] ? <div className="flex  flex-wrap gap-3">
        <h2 className=" text-[20px] font-normal">Synonyms</h2>
        {
         api[0].meanings[0].synonyms.map((s ,g) => {
          return <p key={g} className="last-col  text-[20px] font-bold">{s},</p>
         })
        }
        
      </div> : ""}
    </div>
  : "") ;
}

export default Noun;
