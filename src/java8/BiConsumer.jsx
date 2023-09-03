import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const BiConsumer = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-biconsumer");
      
        };
  return (
    <div className='active'>
        <section>
            <h4>What is BiConsumer</h4>
            <ul>
                <li>This functional interface represents an operation that takes two input arguments (T and U) and performs an action on them, without returning a result.</li>
<li>It has a single abstract method: void accept(T t, U u), which defines the action to be performed on the two input arguments.</li>
            </ul>
        </section>
        <section>
            <pre className='coding'>
                {`
                    public class BiConsumerDemo {

                        public static void main(String[] args) {
                    
                            BiConsumer<String, Integer> printLength = (s, i) -> System.out.println(s + " has length " + i);
                            printLength.accept("Java", 4);
                    
                        }
                    }
                `}
            </pre>
        </section>
        <section>
            <p>
            Common use cases for these functional interfaces include iterating through collections, applying transformations, or performing actions on elements.
            They are particularly useful when working with Java Streams, allowing concise and expressive code for operations on elements within a stream.
            </p>
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
      <ul id="comment-biconsumer">
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

export default BiConsumer