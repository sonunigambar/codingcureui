import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const FindNumberOfCharEachWord = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-findNoOfCharInWord");
    };
  return (
    <div className='active'>
      <h3>Write a program to finding number of each word of a String ?</h3>
        <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;
        public class FindNumberOfCharEachWord{
            public static void main(String[] args) {
                String s="my name is sonu";
                String str="";
                int count=0;
                for (int i=0; i<s.length(); i++) {
                    if(s.charAt(i)==' '){
                        System.out.println(str+".."+str.length());
                        str="";
                        count=0;
                    }
                    else{
                        count++;
                        str=str+s.charAt(i);
                    }
                }
            }
        }
                `}
            </pre>
        </section>
        <section>
            <p className='example'>Solution-2:</p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;
        public class FindNumberOfCharEachWord{
            public static void main(String[] args) {
                String s="my name is sonu";
        		String[] words=s.split("\\s");
        		for(String word: words){
        			int length = word.length();
        			System.out.println(word+" character length is: "+length);
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
        <ul id="comment-findNoOfCharInWord">
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

export default FindNumberOfCharEachWord
