import React, {useState, useEffect, useRef} from 'react';


function Entry({addEntry}) {
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [flag, setFlag] = useState('');
    const fieldRef = useRef();
    const handleOnChange = e => setMessage(e.target.value);
    const handleFlagChange = e => setFlag(e.target.value);
    const handleDateChange = e => setDate(e.target.value);
    const handleOnSubmit = e => {
      e.preventDefault();
      if(message && message.trim().length > 0) {
        addEntry({
          message,
          flag,
          added: Date.now(), 
          date
        });
        setMessage('');
        setFlag('');
        setDate('');
      }
    }
    
    useEffect(() => {
      fieldRef.current.focus();
    }, []);
    
    return (
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
        <label htmlFor="message">What do you wish to record:</label>
        <textarea 
          className="form-control"
          value={message} 
          onChange={handleOnChange} 
          type="text" 
          id="message" 
          maxLength={500}
          ref={fieldRef}
          />
        </div>
        <div className="form-group row">
        <div className="mb-4 col-sm-4">
        <label htmlFor="date">The Date:</label> 
        <input type="date" name="date" onChange={handleDateChange} value={date}></input>
        </div>
        <div className="form-check form-check-inline  col-sm-4"  style={{marginTop: "-25px",padding:"0"}}>
        <label htmlFor="mood">Set Mood:</label>  
          <div name="mood" style={{paddingLeft:"5px"}}>
            <input className="form-check-input" 
                id="flagDanger" type="radio" name="flag" 
                value="danger" defaultChecked={flag === 'danger'} 
                onChange={handleFlagChange}/> 
            <label className="form-check-label bg-danger text-white mr-2 pl-2 pr-2" 
                htmlFor="flagDanger">Sad</label>
            <input className="form-check-input" 
                id="flagGreen" type="radio" name="flag" 
                value="success" defaultChecked={flag === 'success'} 
                onChange={handleFlagChange}/>
            <label className="form-check-label bg-success text-white mr-2 pl-2 pr-2" 
                htmlFor="flagGreen">Normal</label>
            <input className="form-check-input" 
                id="flagInfo" type="radio" name="flag" 
                value="dark" defaultChecked={flag === 'dark'} 
                onChange={handleFlagChange}/>
            <label className="form-check-label bg-dark text-white pl-2 pr-2" 
            htmlFor="flagInfo">Happy</label>
          </div>
        </div>
        <div className=" col-sm-2 align-items-right  text-lg-right justify-content-end" style={{marginLeft: "15%"}}>
          <button disabled={message.trim().length === 0 || !flag} 
          className="btn btn-success form-control" 
          type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }

  export default Entry