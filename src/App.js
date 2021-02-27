import dino from './dino.jpg' ;
import './App.css';
import './style.css';
 

function App() {
  return (
    <>
    <div style={{border:"solid 1px black", maxWidth:'100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src="/luca.jpg" alt="boat" style={{width:500}}></img>
      <br />
      <img src= {dino} alt="car" style={{width:500}}></img>
      <br />
      <video style={{width:320, height:240}} controls src="myVideo.mp4" type="video/mp4"></video>
    </div>
    </>
  );
}

export default App;
