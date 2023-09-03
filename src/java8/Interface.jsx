import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';


const Interface = ({ id, contenId, data }) => {
  const [comment, setComment] = useState('');
 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment,"comment-interface");
    
      };

    
  return (
    <div className='active'>
      <h2>Java 8 Interface Changes</h2>
      <section>
        <p>
        From Java 8, interfaces can also have concrete methods i.e methods with body along with abstract methods. This is the major change introduced to interfaces in Java 8 to help Java API developers to update and maintain the interfaces. The interfaces can have concrete methods either in the form of default methods or static methods.
        </p>
      </section>
      <section>
        <p>Default Methods</p>
        <p className='example'>Example 1</p>
        <ul>
            <li>Default methods of an interface are the concrete methods i.e methods with body for which implementing classes need not to give implementation.</li>
            <li>They inherit default implementation.</li>
            <li>Default methods start with the modifier default.</li>  
        </ul>
        <pre className='coding'>
            {`
                
        interface RBI { 
            boolean deposit(String fromAccNo, String toAccNo, double amount);     
            boolean withdral(String fromAccNo, double amount);

            default void linkAdharNo()
            {
                System.out.println("It is a default method");
            }
        }

        class SBI implements RBI
        {
            @Override
            public boolean deposit() 
            {
                System.out.println("Abstract Method implemented");
                return true;
            }
            @Override
            public boolean withdral() 
            {
                System.out.println("Abstract Method implemented");
                return true;
            }
            
            //No need to implement defaultMethod()
        }
            `}
        </pre>
      </section>
      <section>
        <p className='question'> Why Default Method</p>
        <p>efault methods are introduced to add extra features to current interfaces without disrupting their existing implementations. </p>
        <p>For example, stream() is a default method which is added to Collection interface in Java 8. If stream() would have been added as abstract method, then all classes implementing Collection interface must have implemented stream() method which may have irritated existing users.</p>
        <p>But here problem is if two default method having same name in 2 differnt interface, then dimond problem will be happen. How to avoid it ?</p>
      </section>
      <section>
        <p className='example'>Solution 1:</p>
        <p>Using InterfaceName.super.methodName()</p>
        <pre className='coding'>
            {`
        package java8;

        public interface Interface1 {
            default void display()
            {
                System.out.println("Hi... From Interface One");
            }
        }
        ========================================================

        package java8;

        public interface Interface2 {
            default void display() {
                System.out.println("Hi... From Interface One");
            }
        }
        =========================================================

        package java8;

        public class Greet implements Interface1, Interface2{

            @Override
            public void display() {
                Interface1.super.display();
            }
            
            public static void main(String[] args) {
                new Greet().display();

            }
        }

        output: Hi... From Interface One
            `}
        </pre>
        <p>Here if we want to invoke interface 2 method the use Interface2.super.display()</p>
      </section>
      <section>
        <p className='example'>Solution 2:</p>
        <p>If we you want to call our overrdien method. Then we need to wwrite the logic in implementation class.</p>
        <p>But it will override only one method</p>
        <pre className='coding'>
            {`
        package java8;

        public interface Interface1 {
            default void display()
            {
                System.out.println("Hi... From Interface One");
            }
        }
        ========================================================

        package java8;

        public interface Interface2 {
            default void display() {
                System.out.println("Hi... From Interface One");
            }
        }
        =========================================================

        package java8;

        public class Greet implements Interface1, Interface2{

            @Override
            public void display() {
                System.out.println("From Greet Class display()");
            }
            
            public static void main(String[] args) {
                new Greet().display();

            }
        }

        output: From Greet Class display()
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
      <ul id="comment-interface">
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

export default Interface
