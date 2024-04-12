import React, { useEffect, useState } from "react";
import axios from "axios";
import {CommentUrl} from "./APIUrl";

const PdctComment = ({Product}) => {
    const [comment, setComment] = useState([]);
    let login = localStorage.getItem("user");

    const [commentinput, setCommentinput] = useState({ comment: '' });
    const handleCommentInput = (e) => {
      const { name, value } = e.target;
      setCommentinput({ [name]: value });
    };

    const commentSubmit = (e) => {
        e.preventDefault();
        const commentValue = commentinput.comment.trim();
        if (commentValue) {
          let url =` ${CommentUrl}/${Product._id}`;
          axios.post( url , { comment:commentValue})
            .then(() => {
              setCommentinput({ comment: '' });
              setClickCount(clickCount + 1);
            })
            .catch((e) => console.log(e));
        }
      };

 const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      try {
        let url =` ${CommentUrl}/${Product._id}`;
        const getdata = await axios.get(url);
        setComment(getdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [clickCount]);

  return (
    <>
    {login ?<form className="commentInput" onSubmit={commentSubmit}>
        <div className="cmntinpt">
        <input
          type="text"
          value={commentinput.comment}
          placeholder="Comment......."
          name="comment"
          onChange={handleCommentInput}
          required
        />
        </div>
        <button style={{margin:"5px"}}>Comment</button>
      </form>:<h4 style={{color:"red"}}>First Login Then Comment about this Product...</h4>}

      <div className="comment">
        {comment.map((item, index) => (
          <div className="handle" key={index}>
            <div className="user">
              <h6>{item.userName} </h6>
            </div>
            <div className="userComment">
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PdctComment; 
