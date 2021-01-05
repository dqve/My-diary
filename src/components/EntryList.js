import React, {useState, useRef /*, useEffect*/} from 'react'
import Moment from 'react-moment'


function EntryList({list, deleteEntry, editEntry}) {
    
    const [disabled, setDisabled] = useState({})
    const [state, setState] = useState(list)
        
    const handleEditClick = (index, entry) => e => {
        
      // editEntry(index, edited)
    }

    const handleDeleteClick = (index) => e => {
        deleteEntry(index)
    }

    const editDairy = (e) => null

    const fieldRef = useRef()
  
    return (
      <div className="entry-list mt-3">
        {
          state && state.map((item, i) => {
            const itemDate = item.date
            const itemAdded = item.added
            const flagColor = item.flag ? `bg-${item.flag} text-white` : ''
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
                    onChange={editDairy}
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