import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const ArrayOperation = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-ArrayOperation");
    };
  return (
    <div className='active'>
       <h3>How to create an Array which is reading from the user ?</h3>
        <section>
            <pre className='coding'>
                {`
        package com.array.Programming;

        import java.util.Scanner;
        
        public class ArrayOperation {
            public static void main(String[] args){
                Scanner sc = new Scanner(System.in);
                System.out.println("Enter the size of an Array: ");
                int n = sc.nextInt();
                int[] arr = new int[n];
                System.out.println("Enter" + n + "values: ");
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = sc.nextInt();
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
        <ul id="comment-ArrayOperation">
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

export default ArrayOperation
