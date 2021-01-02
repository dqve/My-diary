import React, {useState, useRef} from 'react';
import Moment from 'react-moment';

function EntryList({list, deleteEntry, editEntry}) {
    const handleDeleteClick = (index) => e => {
      deleteEntry(index);
    }
    
    // const [edited, setEdited] = useState("");
    const [disabled, setDisabled] = useState({});
    
    const handleEditClick = (index, entry) => e => {
        disabled.index? setDisabled({...disabled, [index]:true}): setDisabled({...disabled, [index]:!disabled.index})
      // editEntry(index, entry);
    }
    const fieldRef = useRef();
  
    return (
      <div className="entry-list mt-3">
        {
          list && list.map((item, i) => {
            const itemDate = item.date;
            const itemAdded = item.added
            const flagColor = item.flag ? `bg-${item.flag} text-white` : '';
            return (
              <div key={i} className={`card mb-2 ${flagColor}`}>
                <div className="card-body">
                  <h6 className="card-title">My entry for {itemDate}</h6>
                  <textarea 
                    className="fcard-text"
                    value={item.message}
                    // onChange={handleEdit} 
                    type="text" 
                    id="message" 
                    maxLength={100}
                    width="100%"
                    ref={fieldRef}
                    disabled={disabled.i?false:true}
                    rows="5"
                    style={{border:"0px", background: 0, color: "white", height:"auto", width: "100%", outline: "none",  resize: "none"}}
                    />
                  {/* <p className="card-text">{item.message}</p> */}
                  <div className="card-footer" style={{display: "flex"}}>
                  <div>Added <Moment fromNow>{itemAdded}</Moment> </div>
                  <div className=" align-items-right  text-lg-right justify-content-end" style={{marginLeft: "35%"}}>
                  <button className="btn btn-sm btn-primary" 
                    onClick={handleEditClick(i)} style={{marginRight: "25px"}}>{disabled.i?"Save Edit":"Edit"}</button>
                  <button className="btn btn-sm btn-danger" 
                    onClick={handleDeleteClick(i)}>Delete</button>
                  </div>
                  
                  </div>
                  </div>
  
                </div>  
            )
          })
        }
      </div>
    )
  }

  export default EntryList
