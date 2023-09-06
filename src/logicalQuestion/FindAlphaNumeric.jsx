import React, { useState } from "react";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const FindAlphaNumeric = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-FindAlphaNumeric");
  };
  return (
    <div className="active">
      <h3>Write a program to finding alphaNumeric of a String ?</h3>
      <p>Input: sonu123nigam</p>
      <p>Output: 123</p>
      <section>
        <p className="example">Solution-1: </p>
        <pre className="coding">
          {`
        package logicalQuestion.string;

        public class FindAlphaNumeric {
        
            public static void main(String[] args) {
                String s="sonu123nigam";
                for(int i=0;i<s.length();i++){
                    if((s.charAt(i)>=48) && (s.charAt(i)<=57)){
                        System.out.print(s.charAt(i));
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
        <ul id="comment-FindAlphaNumeric">
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

export default FindAlphaNumeric;
