// const url ="https://railwayecommerce-production.up.railway.app/"
// const url ="https://shopwithjoy.onrender.com/"
const url ="http://127.0.0.1:3002/"
const id = localStorage.getItem("id");
export const carturl = url+"cart"
export const getCartUrl = url+"cart/"+id
export const producturl = url+"product"
export const allcarturl = url+"allcart"
export const usersurl = url+"register"
export const login = url+"login"
export const postMessageUrl = url+"message"
export const CommentUrl = url+"comment"
export const cartCount = url+"cartcount"
export const logout = url+"logout" 