import React from 'react';
import './AddForm.css';

const AddForm = ({positive, setStatePositive, negative, setStateNegative, date, setDate, handlerAddDay}) => {

    return (
        <div className="addItem">
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
            <input type="text" placeholder="Приход" onInput={setStatePositive} value={positive} />
            <input type="text" placeholder="Расход" onInput={setStateNegative} value={negative} />
            <button type="button" onClick={handlerAddDay}>Add</button>
        </div>
    )
}

export default AddForm;