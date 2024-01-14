import "/src/App.css";

function MainHead({ api }) {
  function playSound(a){
    const play = new Audio(a)
    play.play()
  }
  return (
    <div className="main-head flex justify-between items-center mb-[42px]">
      <div className="">
        {api.map((a, i) => {
          if (i === 0) {
            return (
              < >
                <h1 className=" text-[62px] font-bold">{a.word}</h1>
                <p  className="last-col">{a.phonetic}</p>
              </>
            );
          }
        })}
      </div>
       {api[0] ?  <img
        onClick={() => {
          
          playSound(api[0].phonetics[0].audio)
        }}
        className=" cursor-pointer"
        src="/src/images/player.svg"
        alt=""
      /> : ""}
    </div>
  );
}

export default MainHead;
