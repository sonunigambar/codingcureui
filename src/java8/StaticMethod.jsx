import axios from 'axios';
import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const StaticMethod = ({ id, contenId, data }) => {
  const [comment, setComment] = useState('');
 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment,"comment-static-method");
    
      };
  return (
    <div className='active'>
        <section>
      A static method in an interface is a method that is associated with the interface itself, rather than with any specific instance of a class that implements the interface. These methods are defined using the static keyword and can be called on the interface itself, without the need to create an instance of a class that implements the interface.

      <pre className='coding'>
        {`
        public interface Vehicle {

            static void fuelCheck() {
                System.out.println("Checking fuel....");
            }
        }

        class Car implements Vehicle {
            
            //Can't implement staticMethod()

            public static void main(String[] args) {
                //Call the method by using interface name
                Vehicle.fuelCheck();
        
            }
        }

        Output: Checking fuel....
        `}
      </pre>
      </section>
      <section>
        <p className='question'>Why Static Methods?</p>
        <p>
        Do you know? Collection and Collections.</p>
<p>
Collection is an interface and Collections is an utility class containing only static methods which operate on Collection objects.</p>
<p>
Java API developers have followed this pattern of supplying an utility class along with an interface to perform basic operations on such objects. But from Java 8, they have break this pattern by introducing static methods to interfaces.
</p>
<p>
With the introduction of static methods to interface, such utility classes will disappear and methods to perform basic operations will be kept as static methods in interface itself.
        </p>
      </section>
      <section></section>
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
      <ul id="comment-static-method">
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

export default StaticMethod
