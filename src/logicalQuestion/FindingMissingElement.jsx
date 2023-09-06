import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const FindingMissingElement = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-findMissingElement");
    };
  return (
    <div className='active'>
       <h3>Write a program to find the missing element of an given Array ?</h3>
        <p>Input1: arr[]=1,3,5,7,9</p>
        <p>Output: 2,4,6,8</p>
        <section>
            <pre className='coding'>
                {`
            package com.array.Programming;
            import java.util.Arrays;
            
            public class FindMissingelement {
            
                public static void main(String[] args) {
                    int[] arr= {1,3,5,7};
                    int n=arr[arr.length-1];
                    int[] temp=new int[n+1];
                    
                    for(int i:arr) {
                        temp[i]=1;
                    }
                        System.out.println(Arrays.toString(temp));
                    for (int i = 1; i < temp.length; i++) {
                        if(temp[i]==0) {
                            System.out.print(i+" ");
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
        <ul id="comment-findMissingElement">
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

export default FindingMissingElement
