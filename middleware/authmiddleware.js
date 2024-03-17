import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }

  try {
    const { userId, email, fullname } = jwt.verify(token, "abs" , (err, authData)=>{
      if(err){
        return res.status(401).json({ msg: err });
        
      }else{
        req.user = { userId, email, fullname };
        next();
      }
    });
  
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
};
