import './App.css';

function setNum(){
  const x = document.getElementById('input').value;
  // alert(x + "%");

  if(x >= 0 && x <= 100){
    const y = x + "%";
    document.querySelector('.progress .progress-bar').innerHTML = y;
    document.querySelector('.progress .progress-bar').setAttribute('style', 'width: ' + y)  

  }
  // This case not working
  else if(x === " "){
    alert("Can't be vacant");
  }
  else alert("Invalid");
}

function App() {
  return (
    <div className="App container bg-light p-5">

      <h2>Loading Bar</h2>

      <div className="progress" style={{height: '40px'}}>
        <div className="progress-bar" 
        style={{width: '55%'}}
        >
          55%
        </div>
      </div>

      <hr/>

      <input 
      type='number' 
      id='input' 
      className='form-control' 
      placeholder='Enter the percentage'
      ></input>
      
      <br/>
      
      <button className='btn btn-dark w-75'
      onClick={setNum}
      >Enter</button>

    </div>
  );
}

export default App;
