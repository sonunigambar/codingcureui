import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const MergeTwoArrayInZigZag = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-MergeTwoArrayInZigZag");
  };
  return (
    <div className='active'>
       <h3>Write a program to combine two different Array in ZIGZAG manner ?</h3>
        <p>Input1: arr1[]=7 ,21, 45, 9</p>
        <p>Input2: arr2[]=14, 42, 90, 18</p>

        <p>Output: arr3[]=7,14,21,42,45,90,9,18</p>
        <section>
            <pre className='coding'>
                {`
              package com.array.Programming;

            public class MergeTwoArray {
                public static void main(String[] args){
                int[] arr1={7,21,45,9};
                int[] arr2={14,42,90,18};
                int[] arr3 = new int[arr1.length + arr2.length];

                int i = 0, j = 0;

        while (i < arr1.length && i < arr2.length) {

        		arr3[j]=arr1[i];
        		j++;
        		arr3[j]=arr2[i];
        		i++;
        		j++;
            }

        while (i < arr1.length) {
        	arr3[j]=arr1[i];
        		j++;
        		i++;
                }

        while (i < arr2.length) {
            arr3[j]=arr2[i];
        	        j++;
        		i++;
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
        <ul id="comment-MergeTwoArrayInZigZag">
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

export default MergeTwoArrayInZigZag
