import React, { useState } from 'react';
import Data from "../Data"

export default function Card() {
    const [data, setData]=useState(Data)
    const total=()=>{
        const totalPrice = data.reduce((total, item) => {
            return item.selected ? total + item.price : total;
          }, 0);
    }
  return (
    <div >
      <h1>costomize mens haircuts</h1>
      <p><i class="fa fa-inr" aria-hidden="true">140</i>-<i class="fa fa-inr" aria-hidden="true">1250</i></p>
      <div className='line'></div>
      <h1>Men's haircut</h1>
      <div className='line3'>
      <p>Men's haircut</p>
       <div>{data[0].data[0].price} <input type='radio'name={data[0].data[0].price}/></div> 
      </div>
      <div className='line2'></div>
      <div>
        <h1>selcted style</h1>
        <div className='line3'>
        <p>Beard Trim</p>
         <p> <i class="fa fa-usd" aria-hidden="true"></i>{data[0].data[0].price}<input type='checkbox'/></p>
        </div>
        <div className='line3'>
        <p>head shave</p>
        <p> <i class="fa fa-usd" aria-hidden="true"></i>{data[0].data[0].price}<input type='checkbox'/></p>
        </div>
        <div className='line3'>
        <p>Deluxe cut</p>
        <p>{data[0].data[0].price} <i class="fa fa-usd" aria-hidden="true"></i>{data[0].data[0].price}<input type='checkbox'/></p>
        </div>
        <div className='line5'>
          <div className='line4'>
           <p>-</p>
             1
           <p>+</p>
          </div>
          <button onClick={total()}>add item {data[0].data[0].price}</button> 
        </div>
      </div>
    </div>
  );
}
