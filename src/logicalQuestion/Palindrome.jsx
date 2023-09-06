import React, { useState } from "react";
import { handleFormSubmit } from "../utility/HandleSubmitCommonCode";

const Palindrome = ({ id, contenId, data }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-palidrom");
  };
  return (
    <div className="active">
      <h3>Write a program to finding number of each word of a String ?</h3>
      <p>Input: kanak</p>
      <p>Output: not palindrome</p>
      <section>
        <p className="example">Solution-1: </p>
        <pre className="coding">
          {`
        package logicalQuestion.string;

        public class Palindrome {
            public static void main(String[] args) {
                String s="kanak";
            
                char[] ch=s.toCharArray();
                String nstr="";
                for(int i=0;i<ch.length/2;i++){
                    char temp=ch[i];
                    ch[i]=ch[ch.length-1-i];
                    ch[ch.length-1-i]=temp;
                }
                nstr=new String(ch);
                if(nstr.equalsIgnoreCase(s)){
                    System.out.println("palindrom");
                }else{
                    System.out.println("not palindrome");
                }
            }
        
        }
        
                `}
        </pre>
      </section>
      <section>
        <p className="example">Solution-2:</p>
        <pre className="coding">
          {`
        package logicalQuestion.string;

        public class Palindrome {
        
            public static void main(String[] args) {
                String s="kanak";
            
                String nstr="";
                for(int i=s.length()-1;i>=0;i--){
                    nstr=nstr+s.charAt(i);
                }
                if(s.equalsIgnoreCase(nstr)){
                    System.out.println("palindrom");
                }else{
                    System.out.println("not palindrome");
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
        <ul id="comment-palidrom">
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

export default Palindrome;
