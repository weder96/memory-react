import React, { useState, useEffect, useContext } from 'react'
import UserContext from './UserContext'
import { Card, Avatar } from 'antd';
import images from '../assets/img/cards/*.svg';
import 'antd/dist/antd.css';

const Cards = () => {
let [ecart , setEcart ] =  useState([]);
const user = useContext(UserContext)
console.log(user.data);

function AccessRow (row) {
  if(row !== undefined){    
    user.data.forEach((item, index) => {
      if(row.key === item.key){
        user.data[index].ecart = user.data[index].ecart === true ? false : true;
        setEcart([user.data[index]]);
      }  
    })
  }   
};


return (    
    <div style={{ background: '#ECECEC', padding: '30px' }}>       
            {Object.keys(images).map(key => {
                return  <img className="img" key={key} src={images[key]} alt=""/>         
            })}       
    </div>  
    );
}

export default Cards