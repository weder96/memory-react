import React, { useState, useEffect, useContext } from 'react'
import UserContext from './UserContext'
import { Card, Avatar } from 'antd';
import { sortBy } from 'lodash';
import images from '../assets/img/cards/*.svg';
import 'antd/dist/antd.css';

const Cards = () => {
let [erows , setErows ] =  useState([]);
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


function shuffle(array) {
  let ordered = [];
  Object.keys(array).sort().forEach(function(key) {
    ordered[key] = array[key];
  });
  return ordered;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

useEffect(() => {
  let rows = [];
  for(let i=0; i<12; i++) {
    rows.push(<img className="img" key={i+'m'} src={images["js-badge"]} alt=""/>);
  }
  setErows(rows);
},[]);

return (

  <div>
    <div style={{ background: '#ECECEC', padding: '30px' }}></div>
      {erows.map((tag, index1) => {   
             console.log(index1); 
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {erows[index1]}
                  </div>

              {Object.keys(shuffle(images)).map((key, index2) => {
              let keya = index1+'a'; 
                if(key.indexOf('js-badge') === -1 && (index1 === index2)) {
                    console.log(keya);
                    return <div className="flip-card-back"> <img className="img" key={keya} src={images[key]} alt=""/>  </div>         
                }   
              })} 
              {Object.keys(shuffleArray(images)).map((key, index3) => {
              let keyb = index1+'b';
              console.log(keyb);
                if(key.indexOf('js-badge') === -1 && (index1 === (index3 + 6))) {
                  console.log(keyb);
                    return <div className="flip-card-back"> <img className="img" key={keyb} src={images[key]} alt=""/> </div>        
                }
              })}  
            </div>
            </div>
      })}

           

            
  </div>

    );
}

export default Cards