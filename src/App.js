import './App.css';

function setNum(){
  const x = document.getElementById('input').value;
  // alert(x + "%");

  if(x >= 0 && x <= 100){
    const y = x + "%";
    document.querySelector('.progress .progress-bar').innerHTML = y;
    document.querySelector('.progress .progress-bar').setAttribute('style', 'width: ' + y)  

  }
  else alert("Oh please")
}

function App() {
  return (
    <div className="App container bg-light p-5">

      <h2>Loading Bar</h2>

      <div className="progress" style={{height: '40px'}}>
        <div className="progress-bar" 
        style={{width: '55%'}} 
        value='30'
        >55%</div>
      </div>

      <br/>

      <input type='number' id='input' className='form-control' placeholder='Enter the percentage'></input><br/>
      <button className='btn btn-dark w-75'
      onClick={setNum}
      >Enter</button>

    </div>
  );
}

export default App;
