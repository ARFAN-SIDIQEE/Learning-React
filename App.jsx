import './App.css'
import ArfanButton from './Arbutton';
import Hello from './hello';  
import Random from './random';    
//  multilple import structure is { component name ,}
function App() {


  return (
    <>
    <div>
    <h1>hello world</h1>
    <p>this is best react course</p>
      
      {/* <button> Subscribe</button> */}
       <Hello></Hello>
      <ArfanButton></ArfanButton>
      <Random></Random>
      <Random></Random><Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
    </>
  )
}

export default App
