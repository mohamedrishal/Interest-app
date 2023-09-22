import './App.css';
import {useState} from 'react';
import {TextField,Stack,Button} from '@mui/material';




function App() {

  // to create a state
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [isPrincipleValid,setIsPricncipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)

  // interest calculate method
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!year || !rate || !principle){
      alert("Fill the Form Compeletly..")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  // reset method
  const handleReset = ()=>{
    setInterest(0)
    setYear(0)
    setRate(0)
    setPrinciple(0)
    setIsPricncipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
  }


  // form Validate method
  const validateInput =(e)=>{
    // {key}=object
    const {name,value} = e.target

    //logic to check number validation - regular expression
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPricncipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPricncipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsYearValid(false)
      }
    }
  }


  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>

     <div style={{width:'500px'}} className='bg-light p-5 rounded'>
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your Simple interest Easily</p>

      <div style={{height:'150px'}} className='interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow'>
        <h1> ₹ {` `} {interest} </h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>

      {/* form */}

      <form  className='mt-5' onSubmit={handleCalculate}>

        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic1" label="₹ Principle amount" variant="outlined" value={ principle|| ""} name='principle' onChange={(e)=>validateInput(e)}/>
        </div>
        
        {
          !isPrincipleValid &&
          <div className="mb-3 text-danger fw-bolder">
              * Invalid User Input
          </div>
        }

        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p.a) %" variant="outlined" value={ rate|| ""} name='rate' onChange={(e)=>validateInput(e)} />
        </div>

        {
          !isRateValid &&
          <div className="mb-3 text-danger fw-bolder">
              * Invalid User Input
          </div>
        }

        <div className="mb-5">
        <TextField className='w-100' id="outlined-basic3" label="Time Period (yr)" variant="outlined" value={ year || ""} name='year' onChange={(e)=>validateInput(e)} />
        </div>

        {
          !isYearValid &&
          <div className="mb-3 text-danger fw-bolder">
              * Invalid User Input
          </div>
        }

        <Stack direction="row" spacing={2}>
          <Button disabled={isPrincipleValid && isRateValid && isYearValid? false:true}  type='submit' style={{height:'70px',width:'200px'}} variant="contained">CALCULATE</Button>
          <Button onClick={handleReset}  style={{height:'70px',width:'200px'}} variant="outlined">RESET</Button>
        </Stack>


      </form>

      </div>

    </div>
  );
}

export default App;
