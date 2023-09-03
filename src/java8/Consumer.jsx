import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const Consumer = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-consumer");
      
        };
  return (
    <div className='active'>
        <section>
            <h4>What is Consumer</h4>
            <ul>
                <li>It is a predefined functional interface</li>

                <li>It contains only one abstract method i.e accept(T t)</li>

                <li>Consumer will take input but it won't return anything.</li>

                <li>Consumer can be used in a scenario where our lambda should take input and perform operation based on the input but no need to return anything.</li>
            </ul>
        </section>
        <section>
            <pre className='coding'>
                {`
                    Syntax:

                        interface Consumer{
                            void accept(T t);
                        }
                `}
            </pre>
            <pre className='coding'>
                {`
                    public class ConsumerDemo {

                        public static void main(String[] args) {
                    
                            Consumer<String> consumer1 = (name) -> System.out.println(name + ", Good Mrng..!!");
                            consumer1.accept("Ashok");
                    
                            Consumer<Integer> consumer2 = (i) -> System.out.println(i * i);
                            consumer2.accept(20);
                        }
                    
                    }
                `}
            </pre>
        </section>
        <section>
            <ul>
                <li>Consumer interface will take only one input.</li>
                <li>If we want to supply two inputs for lambda then we can use BiConsumer.</li>
            </ul>
            <p className='syntax'>Syantax:</p>
            <pre className='coding'>
                {`
                    interface BiConsumer<T, U){
                        accept(T t, U u);
                    }
            
                    T - represents first argument
                    U - represents second argument
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
      <ul id="comment-consumer">
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

export default Consumer