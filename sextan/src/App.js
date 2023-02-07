import './App.css';


function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:"CadetBlue", padding:"1rem"}}>
        <Banner />
      </div>
      <Exhibit 
        title="Child Components displayed below"/>
    </div>
  );
}

function Banner() {
  return (
    <h2 alt="Website Title">Connection Tester</h2>
  );
}

function Exhibit(props){
  return(
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  )
}

export default App;
