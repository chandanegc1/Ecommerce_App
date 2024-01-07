import React from 'react'
import Products from './Products';
import SingUp from './Sing-Up';
import Nextbtn from './Nextbtn';
import scrollToTop from './goToTop';

function Shop() {
  scrollToTop();
  return (
    <>
       {/* <!-- Destop Description --> */}

<div class="section1-shop"> 
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