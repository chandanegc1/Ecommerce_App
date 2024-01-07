import React, {useRef, useEffect } from 'react';
import scrollToTop from './goToTop';


function Features() {
    scrollToTop();
    const arrimg = [
        {
            path:"img/features/f1.png",
            h:"Free shipping",
        },
        {
            path:"img/features/f2.png", 
            h:"Online Order",
        },
        {
            path:"img/features/f3.png",
            h:"Save Money",
        },
        {
            path:"img/features/f4.png",
            h:"Promotions",
        }, 
        // {
        //     path:"img/features/f5.png",
        //     h:"Happy Sell",
        // },
        // {
        //     path:"img/features/f6.png",
        //     h:"F24/7Support",
        // },
    ]

    const parentRef = useRef(null);

    useEffect(() => {
        for(let i =0 ;i<arrimg.length; i++){
        let newdiv = document.createElement("div");
        let newh6 = document.createElement("h6");
        let newimg = document.createElement("img"); 
        newh6.innerHTML=arrimg[i].h;
        newdiv.className="imgages";
        newimg.src=arrimg[i].path;
        newdiv.appendChild(newh6);
        newdiv.appendChild(newimg);
        parentRef.current.appendChild(newdiv);
        }
}, []);
  return (
    <>
    <div className="features" ref={parentRef}></div>
    </>
  )
}

export default Features