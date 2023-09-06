import React, { useState } from "react";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const ReverseStringWordByWord = ({ id, contenId, data }) => {
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
      "comment-ReverseStringWord"
    );
  };
  return (
    <div className="active">
      <h3>Write a program to reverse the given string word by word ?</h3>
      <p>Input: my name is sonu</p>
      <p>Output: </p>
      <section>
        <p className="example">Solution-1: </p>
        <pre className="coding">
          {`
       package logicalQuestion.string;

       public class ReverseStringWordByWord {
           public static void main(String[] args) {
               String s="my name is sonu";
               String str="";
               String[] ch=s.split("\\s");
               for(String word:ch){
                   for(int i=word.length()-1;i>=0;i--){
                       str=str+word.charAt(i);
                   }
                   str=str+" ";
               }
               System.out.println(str);
               
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
        <ul id="comment-ReverseStringWord">
          {data.map((comment) => (
            <li key={comment.commentId}>
              <p>{comment.commentContent}</p>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default ReverseStringWordByWord;
