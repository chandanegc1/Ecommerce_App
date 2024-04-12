import React from 'react'
import Products from '../Componants/Products';
import SingUp from '../Componants/Sing-Up';
import Nextbtn from '../Componants/Nextbtn';
import scrollToTop from '../Componants/goToTop';

function Shop() {
  scrollToTop();
  return (
    <>
       {/* <!-- Destop Description --> */}

<div className="section1-shop"> 
    <h1>#StayHome</h1>
    <p>Save more with coupans & up to 70% off! </p> 
</div>

{<Products start={0} end={8}/>}
{<Products start={8} end={16}/>}
{<Products start={5} end={13}/>}
<Nextbtn/>
<SingUp/>
    </>
  )
}

export default Shop