import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const OccuranceOfEachCharacter = ({ id, contenId, data }) => {

    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment, "comment-OcuuranceOfEachCharacter");
    };
  return (
    <div className='active'>
      <div className='active'>
      <h3>Write a program to finding occourance each character of a String ?</h3>
        <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        import java.util.Arrays;
        
        public class OccuranceOfEachCharacter {
        
            public static void main(String[] args) {
                String s="my name is sonu";
                char[] ch=s.toCharArray();
                Arrays.sort(ch);
                for(int i=0;i<ch.length;i++){
                    int count=1;
                    for(int j=i+1;j<ch.length;j++){
                        if(ch[i]==ch[j]){
                            count=count+1;
                            i=j;
                        }
                    }
                    System.out.println(ch[i]+"...."+count+" time");
                }
        
            }
        
        }
        
                `}
            </pre>
        </section>
        {/* <section>
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
        </section> */}
    </div>
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
        <ul id="comment-OcuuranceOfEachCharacter">
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

export default OccuranceOfEachCharacter
