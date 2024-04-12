import React from 'react'
import Nextbtn from '../Componants/Nextbtn'
import SingUp from '../Componants/Sing-Up'
import scrollToTop from '../Componants/goToTop';
function Blog() {
    scrollToTop();
  return (

    <>
<div className="section12"> 
    <h1>#readmore</h1>
    <p>Read all case studies about aur product! </p> 
</div>
<div className="fullbody">
<div className="section13">
    <div className="imgpart">
        <img src="img/blog/b1.jpg" alt=""/>
    </div>
    <div className="descriptionpart">
        <h2>The Cotton-Jersey Zip Up hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br/>
            adipisicing elit. Hic, obcaecati et? Aspernatur <br/> facere vitae quaerat, accusamus
            assumenda enim saepe! Nesciunt.
         </p>
    </div>
</div>
<div className="section13">/
    <div className="imgpart">
        <img src="img/blog/b2.jpg" alt=""/>
    </div>
    <div className="descriptionpart">
        <h2>The Cotton-Jersey Zip Up hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br/>
            adipisicing elit. Hic, obcaecati et? Aspernatur <br/> facere vitae quaerat, accusamus
            assumenda enim saepe! Nesciunt.
         </p>
    </div>
</div>
<div className="section13">
    <div className="imgpart">
        <img src="img/blog/b3.jpg" alt=""/>
    </div>
    <div className="descriptionpart">
        <h2>The Cotton-Jersey Zip Up hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br/>
            adipisicing elit. Hic, obcaecati et? Aspernatur <br/> facere vitae quaerat, accusamus
            assumenda enim saepe! Nesciunt.
         </p>
    </div>
</div>
<div className="section13">
    <div className="imgpart">
        <img src="img/blog/b4.jpg" alt=""/>
    </div>
    <div className="descriptionpart">
        <h2>The Cotton-Jersey Zip Up hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br/>
            adipisicing elit. Hic, obcaecati et? Aspernatur <br/> facere vitae quaerat, accusamus
            assumenda enim saepe! Nesciunt.
         </p>
    </div>
</div>
<div className="section13">
    <div className="imgpart">
        <img src="img/blog/b6.jpg" alt=""/>
    </div>
    <div className="descriptionpart">
        <h2>The Cotton-Jersey Zip Up hoodie</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br/>
           adipisicing elit. Hic, obcaecati et? Aspernatur <br/> facere vitae quaerat, accusamus
           assumenda enim saepe! Nesciunt.
        </p>
    </div>
</div>
</div>
<Nextbtn/>
<SingUp/>
    </>
  )
}

export default Blog