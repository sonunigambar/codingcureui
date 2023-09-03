import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const BiPredicate = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-bipredicate");
      
        };
  return (
    <div className='active'>
        <h3>What is Bipredicate interface</h3>
        <section>
            <ul>
                <li>Predicate{`<T> `}takes only one parameter and returns the result.</li>
                <li>If we want to supply two parameters as input for lambda and return the result then we can use BiPredicate for this.</li>
                <li>BiPredicate{`<T, T> `}is  functional interface which contains a abstract method test ( ).</li>
                <li>BiPredicate{`<T, T> `}takes two parameters and returns boolean value.</li>
            </ul>
            <pre className='coding'>
                {`
                    public class Demo {

                        public static void main(String[] args) {
                            BiPredicate<Integer, Integer> biPredicate = (i, j) -> i + j >= 100;
                            System.out.println(biPredicate.test(10, 200));
                        }
                    }
                `}
            </pre>
        </section>
        <span className='comment-box'>
          <form onSubmit={handleSubmit}>
            <textarea
              rows="4"
              cols={150}
              placeholder="Enter your comment"
              value={comment}
              onChange={handleCommentChange}
            />
            <button type="submit" className='cmt_btn'>
              {/* <i className="fas fa-paper-plane"></i> */}
              send
            </button>
        </form>
      </span>
      <span className='comment-list'>
      <ul id="comment-bipredicate">
          {/* {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
          {/* {console.log(data)}
          {console.log(contenId)}
          {console.log(id)} */}

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

export default BiPredicate