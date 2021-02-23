import React, { useState } from 'react';
import './PayItem.css';

const PayItem = (props) => {
  const {date, mounth, year, positive, negative} = props.data;
  const onCross = props.onCross;
  const saldo = positive - negative;
  const deleteClass = 'pay-item__delete';
  const [deleteButtonClass, toggleDeleteButton] = useState(deleteClass);
    return (
        <div 
          className="pay-item"
          onMouseOver = {() => {let res = deleteButtonClass + ' pay-item__delete_show'; toggleDeleteButton(res)}}
          onMouseOut = {()=> toggleDeleteButton(deleteClass)}
        >
            <div className="pay-item__date">
              <div className="pay-item__day">{date}</div>
              <div className="pay-item__mounth">{mounth}</div>
              <div className="pay-item__year">{year}</div>
            </div>
            <div className="pay-item__info">
              <div className="pay-item__positive">+ {positive}</div>
              <div className="pay-item__negative">- {negative}</div>
            </div>
            <div className={'pay-item__saldo ' + (saldo < 0 && 'pay-item__saldo_negative')}>
              {saldo>0 ? '+' : '-'} {Math.abs(saldo)}
            </div>
            <div
              className={deleteButtonClass}
              onClick={onCross}
            >
              X
            </div>
          </div>
    )
}

export default PayItem;