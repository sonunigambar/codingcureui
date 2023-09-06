import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const SortingString = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(
      comment,
      contenId,
      setComment,
      "comment-SortingString"
    );
  };
  return (
    <div className='active'>
        <h3>Write a program to sort the given string ?</h3>
        <p>Input: sonunigambar</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
    package logicalQuestion.string;

    public class SortingString {
    
        public static void main(String[] args) {
            String s="sonunigambar";
            char[] ch=s.toCharArray();
            sort(ch);
            
            for(int i=0;i<ch.length;i++){
                System.out.print(ch[i]);
            }
        }
    
        private static void sort(char[] ch) {
            for(int i=0;i<ch.length;i++){
                for(int j=i+1;j<ch.length;j++){
                    if(ch[i]>ch[j]){
                        char temp=ch[i];
                        ch[i]=ch[j];
                        ch[j]=temp;
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
        <ul id="comment-SortingString">
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

export default SortingString
