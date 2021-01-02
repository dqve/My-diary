import React, {useState, useEffect, useRef} from 'react';

function EntryList({list, deleteEntry, editEntry}) {
    const handleDeleteClick = (index) => e => {
      deleteEntry(index);
    }
  
    const [edited, setEdited] = useState("");
    const [disabled, setDisabled] = useState({});
  
    const handleEditClick = (index, entry) => e => {
      setDisabled({...disabled, index:false})
      // editEntry(index, entry);
    }
    const fieldRef = useRef();
  
    return (
      <div className="entry-list mt-3">
        {
          list && list.map((item, i) => {
            const itemDate = item.date;
            const itemAdded = moment(item.added).fromNow();
            const flagColor = item.flag ? `bg-${item.flag} text-white` : '';
            return (
              <div className={`card mb-2 ${flagColor}`}>
                <div className="card-body">
                  <h6 className="card-title">For {itemDate}</h6>
                  <textarea 
                    className="fcard-text"
                    value={item.message}
                    // onChange={handleEdit} 
                    type="text" 
                    id="message" 
                    maxLength={100}
                    width="100%"
                    ref={fieldRef}
                    disabled={disabled.i}
                    rows="5"
                    style={{border:"0px", background: 0, color: "white", height:"auto", width: "100%", outline: "none",  resize: "none"}}
                    />
                  {/* <p className="card-text">{item.message}</p> */}
                  <div class="card-footer" style={{display: "flex"}}>
                  <div>Added {itemAdded}</div>
                  <div className=" align-items-right  text-lg-right justify-content-end" style={{marginLeft: "25%"}}>
                  <button className="btn btn-sm btn-primary" 
                    onClick={handleEditClick(i)}>Edit</button>
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
