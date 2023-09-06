import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const SwapTwoStringWithOutTaking3rdVariable = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-SwapString");
    };
  return (
    <div className='active'>
        <h3>Write a program to swap two string without using 3rd variable ?</h3>
        <p>Input1: Love</p>
        <p>Input2: You</p>

        <p>Output:before swap:love you</p>
        <p>after swap:you love </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
   package java8;

   public class SwapTwoStringWithOutTaking3rdVariable {
       public static void main(String[] args) {
           String s1="love";
           String s2="you";
           System.out.println("before swap:"+s1+" "+s2);
           s1=s1+s2;
           s2=s1.substring(0,s1.length()-s2.length());
           s1=s1.substring(s2.length());
           System.out.println("after swap:"+s1+" "+s2);
       }
   }
   
                `}
            </pre>
        </section>
        <span className="comment-box">
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            cols={150}
            placeholder="Enter your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit" className="cmt_btn">
            send
          </button>
        </form>
      </span>
      <span className="comment-list">
        <ul id="comment-SwapString">
          {data.map((comment) => (
            <li key={comment.commentId}>
              <p>{comment.commentContent}</p>
            </li>
          ))}
        </ul>
      </span>
    </div>
  )
}

export default SwapTwoStringWithOutTaking3rdVariable
