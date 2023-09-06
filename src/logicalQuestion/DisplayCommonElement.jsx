import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const DisplayCommonElement = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-displayCommonElement");
    };
  return (
    <div className='active'>
       <h3>Write a program to print the common element in two different Array ?</h3>
        <p>Input1: arr1[]=30,50,10,40,20</p>
        <p>Input2: arr2[]=40,60,70,80,20</p>

        <p>Output: 40,20</p>
        <section>
            <pre className='coding'>
                {`
             package logicalQuestion.array;

             public class DisplayCommonElement {
             
                 public static void main(String[] args) {
                     int[] arr1={30,50,10,40,20};
                     int[] arr2={40,60,70,80,20};
                     for(int i=0;i<arr1.length;i++){
                         for(int j=0;j<arr2.length;j++){
                             if(arr1[i]==arr2[j]){
                                 System.out.println(arr1[i]+" ");
                             }
                         }
                     }
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
        <ul id="comment-displayCommonElement">
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

export default DisplayCommonElement
