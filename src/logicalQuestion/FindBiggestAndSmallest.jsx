import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const FindBiggestAndSmallest = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-findBiggestandSmallest");
    };
  return (
    <div className='active'>
       <h3>Write a program to find smallest and biggest element of an Array ?</h3>
        <p>Input1: arr[]=30,50,10,40,20</p>
        <p>Output:biggest no is:50 </p>
        <p>Output:smallest no is:10 </p>
        <section>
            <pre className='coding'>
                {`
            package logicalQuestion.array;


            public class FindBiggestAndSmallest {
                public static void main(String[] args) {
                    int[] arr={30,50,10,40,20};
                    sort(arr);
                    System.out.println("biggest no is:"+arr[arr.length-1]);
                    System.out.println("smallest no is:"+arr[0]);
                }
            
                private static void sort(int[] arr) {
                    for(int i=0;i<arr.length;i++){
                        for(int j=i;j<arr.length;j++){
                            if(arr[i]>arr[j]){
                                int temp=arr[i];
                                arr[i]=arr[j];
                                arr[j]=temp;
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
        <ul id="comment-findBiggestandSmallest">
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

export default FindBiggestAndSmallest
