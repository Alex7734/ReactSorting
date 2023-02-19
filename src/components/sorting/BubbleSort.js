import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
var audio = new Audio('./bloop.mp3');

const BubbleSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [count, setCount] = useState(0);

   let values = myState.values.map((item) => item[0]);
   let ids = myState.values.map((item) => item[1]);
   
   function play() {
      var audio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_38909ce077.mp3?filename=blaster-2-81267.mp3');
      audio.play();
    }

    function increment() {
      setCount(count => count + 1);
    }

   const solve = () => {
      setCount(0)
      for(let i = values.length,timer = 0; i > 0;timer += i-1, i--){
         setTimeout(() => {
            for(let j = 1; j < i; j++){
               setTimeout(() => {
                  document.getElementById(ids[j]).childNodes[1].style.backgroundColor = 'black';
                  document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = 'black';
                  
                  setTimeout(() => {
                     document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.color;
                     document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.color;
                  },myState.speed-10);

                  if(values[j]<values[j-1]){
                     let temp = values[j];
                     values[j] = values[j-1];
                     values[j-1] = temp;
                     play()
                     increment()
                     temp = ids[j];
                     ids[j] = ids[j-1];
                     ids[j-1] = temp;
                     
                     document.getElementById(ids[j]).style.transform = `translateX(${j*11}px)`;
                     audio.play();
                     document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*11}px)`;
                        
                  }
               },(j-1)*(myState.speed));
            }
         }
         ,(timer)*(myState.speed))
      }
      
      setTimeout(() => {
         dispatch({
            type:'PLAY_PAUSE',
            _play:false
         })

      },(((myState.values.length-1)*(myState.values.length))/2)*myState.speed+50);
   }
   
   useEffect(() => {
      if(myState.algorithm==='bubble'){
         if(myState.play)
            solve();
      }
   },[myState.play]);

   return <>
      <p class="m-1">
         {count} element switches
      </p>
      </>;
}

export default BubbleSort;