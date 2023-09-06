import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const SortingStringArray = ({ id, contenId, data }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-SortingStringArray");
    };
  return (
    <div className='active'>
      <h3>Write a program to sort string Array in alfabetically ?</h3>
        <p>Input1: str[0]="sonu"</p>
        <p>Input1: str[1]="monu"</p>
        <p>Input1: str[2]="raju"</p>
        <p>Input1: str[3]="biju"</p>

        <p>Output: biju,monu,raju,sonu</p>
        <section>
            <pre className='coding'>
                {`
            package logicalQuestion.array;

        public class SortingStringArray {
	    public static void main(String[] args) {
             String[] str=new String[4];
             str[0]="sonu";
             str[1]="monu";
             str[2]="raju";
             str[3]="biju";
             for(int i=0;i<str.length;i++){
                 for(int j=i+1;j<str.length;j++){
                     if(str[i].compareTo(str[j])>0){
                         String temp=str[i];
                         str[i]=s[j];
                         str[j]=temp;
                     }
                 }
             }
             for(String nstr:str){
                 System.out.print(nstr+" ");
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
        <ul id="comment-SortingStringArray">
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

export default SortingStringArray
