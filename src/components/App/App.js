import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import PayList from '../PayList/PayList';
import AddForm from '../AddForm/AddForm';
import {clearSymbol, MONTH_RU, initialDate, saveToLocalStorage} from '../../utils/formUtils';


function App() {
  const initialData = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  const payItems = [
    {date: '07', mounth: 'ЯНВ', year: '20', positive: 3000, negative: 543, id: 1},
    {date: '08', mounth: 'ЯНВ', year: '20', positive: 5000, negative: 542, id: 2},
    {date: '09', mounth: 'ЯНВ', year: '20', positive: 7000, negative: 8541, id: 3}
  ];

  const [date, setDate] = useState(initialDate);
  const [positive, setPositive] = useState('');
  const [negative, setNegative] = useState('');
  const [statePayItems, setStatePayItems] = useState(initialData);

  const handlerAddDay = () => {
    const dateParse = date.split('-');
    const res = [{ date: dateParse[2], mounth: MONTH_RU[parseInt(dateParse[1] - 1)], year: dateParse[0].slice(2), positive: parseInt(positive) ? parseInt(positive) : 0, negative: parseInt(negative) ? parseInt(negative) : 0, id: statePayItems.length+1 }];
    const result = [...statePayItems, ...res];
    saveToLocalStorage(result);
    console.log(result);
    setStatePayItems(result);
  }

  const setStatePositive = (e)=>setPositive(clearSymbol(e.target.value));
  const setStateNegative = (e)=>setNegative(clearSymbol(e.target.value));

  const deleteItem = (id) => {
    const idx = statePayItems.findIndex(i=>i.id===id);
    console.log('Удаляем ' + idx);
    const res = [...statePayItems.slice(0, idx), ...statePayItems.slice(idx+1)];
    console.log(res);
    setStatePayItems(res);
  }
   
  return (
    <>
      <Header />
      <PayList 
        payItems={statePayItems}
        onDelete={deleteItem}
      />
      <AddForm 
        handlerAddDay={handlerAddDay}
        positive = {positive}
        setStatePositive = {setStatePositive}
        negative = {negative}
        setStateNegative= {setStateNegative}
        date = {date}
        setDate = {setDate}
        handlerAddDay = {handlerAddDay}
      />
    </>
  );
}

export default App;
