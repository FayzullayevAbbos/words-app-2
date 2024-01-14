import Footer from "./Footer";
import MainHead from "./MainHead";
import Noun from "./Noun";
import Verb from "./Verb";
import "/src/App.css";

function Main({api}) {
    
  return (
    <div className="mx-auto mx-width">
      <MainHead api={api} />
      <Noun api={api} />
      <Verb api={api}/>
      <Footer api={api}/>
    </div>
  );
}

export default Main;
