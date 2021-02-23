import React from 'react';
import './PayList.css';
import PayItem from '../PayItem/PayItem';

function PayList({payItems, onDelete}) {
  return (
    <>
      <main>
        <div className="pay-list">
          {payItems.map(payItem => <PayItem data={payItem} key={payItem.id} onCross={()=>onDelete(payItem.id)} />)}
        </div>
      </main>
    </>
  );
}

export default PayList;