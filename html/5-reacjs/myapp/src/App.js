import HelloWorld from "./components/01-hello-word";
import Comp from './components/02-comp';
import Jsx from "./components/03-jsx";
import Jsx2 from "./components/04-jsx2";
import JsxLoop from "./components/05-jsx-loop";
import JsxPractise from "./components/06-jsx-practise";
import StyleInline from "./components/07-style-inline";
import StyleInternal from "./components/08-style-internal";
import StyleExternal from "./components/09-style-external";
import Clock1 from "./components/10-clock/10-clock1";
import Clock2 from "./components/10-clock/12-clock2 copy";
import Props from "./components/props/11-props";



const  App=()=> {
  return (
    <div >
     {/* <h2>bu benim ilk çalışmam </h2>
        <HelloWorld/>
       <Comp/> 
       <Jsx/>
       <Jsx2/> 
       <JsxPractise/>
       <StyleInline/>
       <StyleInternal/>
       <StyleExternal/>
       <Clock1/>*/}
       <Props ad="Metin" yas="33"/>
       <Clock2 color="yellow" bgColor="red"/>
       <Clock2 color="blue" bgColor="yellow"/>
         <Clock2 color="white" bgColor="black"/>
          
           </div>
  );
}

export default App;

