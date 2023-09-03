import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const Supplier = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-supplier");
      
        };
  return (
    <div className='active'>
        <h4>What is Supplier</h4>
        <section>

            <ul>
                <li>It is predefined functional interface.</li>
                <li>It contains only one abstract method i.e get ( )</li>
                <li>Supplier is an interface that does not take any arguments but it produces a value when the get() function got called.</li>
                <li>Suppliers are useful when our lambda is not taking any input but it is providing some ouput.</li>
            </ul>
        </section>
        <section>
            <p className='example'>Example 1:</p>
            <pre className='coding'>
        {`
            public class DateApp {

                public static void main(String[] args) {
            
                    Supplier<Date> s = () -> new Date();
                    System.out.println(s.get());
                }
            }
        `}
            </pre>
        </section>
        <section>
            <p className='example'>Example 2:</p>
            <pre className='coding'>
        {`
            public class OtpGenerator {

                public static void main(String[] args) {

                    Supplier<String> s = () -> {
                        String otp = "";
                        for (int i = 1; i <= 6; i++) {
                            otp = otp + (int) (Math.random() * 10);
                        }
                        return otp;
                    };
            
                    System.out.println(s.get());
                    System.out.println(s.get());
                    System.out.println(s.get());
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
      <ul id="comment-supplier">
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

export default Supplier