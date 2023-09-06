import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const MergeTwoArray = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-MergeTwoArray");
  };
  return (
    <div className='active'>
       <h3>Write a program to merge two different Array into single Array ?</h3>
        <p>Input1: arr1[]=7 ,21, 45, 9</p>
        <p>Input2: arr2[]=14, 42, 90, 18</p>

        <p>Output: arr3[]=7,21,45,9,14,42,90,18</p>
        <section>
            <pre className='coding'>
                {`
              package com.array.Programming;

            public class MergeTwoArray {
                public static void main(String[] args){
                int[] arr1={7,21,45,9};
                int[] arr2={14,42,90,18};
                int[] arr3 = new int[arr1.length + arr2.length];

                for (int i = 0; i < arr1.length; i++) {
                    arr3[i] = arr1[i];
                }
                for (int i = 0; i < arr2.length; i++) {
                    arr3[arr1.length + i] = arr2[i];
                }
                System.out.println(Arrays.toString(arr3));

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
        <ul id="comment-MergeTwoArray">
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

export default MergeTwoArray
