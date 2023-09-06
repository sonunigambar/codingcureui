import React, { useState } from 'react'
import { handleFormSubmit } from '../utility/HandleSubmitCommonCode';

const RemoveDuplicateCharacterFromString = ({ id, contenId, data }) => {

    const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment, "comment-RemoveDuplicateString");
  };
  return (
    <div className='active'>
       <h3>Write a program to remove duplicate characters from given string ?</h3>
        <p>Input: programming</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        import java.util.HashSet;
        import java.util.Set;
        
        public class RemoveDuplicateCharacterFromString {
        
            public static void main(String[] args) {
                
                 String input = "programming";
                    String result = removeDuplicateChar(input);
                    System.out.println("Original String: " + input);
                    System.out.println("String without duplicates: " + result);
                
            }
        
            private static String removeDuplicateChar(String str) {
                StringBuffer sb=new StringBuffer();
                Set<Character> s=new HashSet<Character>();
                for(int i=0;i<str.length();i++){
                    char ch=str.charAt(i);
                    if(s.add(ch)){
                        sb.append(ch);
                    }
                }
                return sb.toString();
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

       import java.util.HashSet;
       import java.util.Set;
       
       public class RemoveDuplicateCharacterFromString {
       
           public static void main(String[] args) {
               
                String input = "programming";
                   String result = removeDuplicates(input);
                   System.out.println("Original String: " + input);
                   System.out.println("String without duplicates: " + result);
               
           }

            public static String removeDuplicates(String input) {
                boolean[] seen = new boolean[256]; // Assuming ASCII characters
                
                StringBuilder result = new StringBuilder();
                
                for (int i = 0; i < input.length(); i++) {
                    char currentChar = input.charAt(i);
                    if (!seen[currentChar]) {
                        seen[currentChar] = true;
                        result.append(currentChar);
                    }
                }
                
                return result.toString();
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
        <ul id="comment-RemoveDuplicateString">
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

export default RemoveDuplicateCharacterFromString
