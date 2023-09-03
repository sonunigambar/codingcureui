import React, { useState } from "react";
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const Functionalinterface = ({ id, contenId, data }) => {
  const [comment, setComment] = useState('');
 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment,"comment-functional-interface");
    
      };
  return (
    <div class="active">
      <h1>Functional Interface</h1>
      <p>
        <ul>
        <li>
          If an interface contains only one abstract method then it is called as
          Functional Interface.
        </li>
        <li>Functional Interface is used to invoke lambda expression.</li>
        <li>
          Functional Interface can contain any number of default method and
          static method also
        </li>
        <li>
          Functional Interface rule is applicable only for abstract method. It
          should contain only one abstract method and it can contain any no.of
          static and default methods.
        </li>
        <li>
          To represent our interface as functional interface we will use
          @FunctionalInterface annotation
        </li>
        </ul>
      </p>
      <section>
        <p className="example" style={{textDecorationLine:"underline"}}>Example:-1</p>
        <pre>
          {`
              @FunctionalInterface
              public interface MyInterface{
                    public void m1();
              }
            `}
        </pre>
        <p>This is valid functional interface.</p>
      </section>
      <section>
        <p className="example">Example:-2</p>
        <pre>
          {`
             @FunctionalInterface
             public interface MyInterface{
                   public void m1();
                   public abstract void m2();
             }
            `}
        </pre>
        <p>This is invalid because 2 abstract methods are there.</p>
      </section>
      <section>
        <p className="example">Example:-3</p>
        <pre>
          {`
            @FunctionalInterface
            public interface Parent{
               public void m1();
            }
            
            @FunctionalInterface
            public interface Child extends Parent{
            
            }
            `}
        </pre>
        <p>
          In the above scenario, Child interface doesn't have any abstract
          methods. Child having access for Parent class abstract method hence
          Child is also functional interface.
        </p>
      </section>
      <section>
        <p className="example">Example:-4</p>
        <pre>
          {`
             @FunctionalInterface
             public interface Parent{
                public void m1();
             }
             
             @FunctionalInterface
             public interface Child extends Parent{
                public void m1();
             }
            `}
        </pre>
        <p>
          In the above scenario, Child interface overriding Parent interface
          abstract method hence Child is having only one abstract method. So it
          is valid Functional Interface.
        </p>
      </section>
      <section>
        <p className="example">Example:-5</p>
        <pre>
          {`
             @FunctionalInterface
             public interface Parent{
                public void m1();
             }
             
             @FunctionalInterface
             public interface Child extends Parent{
                public void m2();
             }
            `}
        </pre>
        <p>
          In the above scenario, Child interface having 2 abstract methods hence
          it is not functional interface.
        </p>
      </section>
      <section>
        <p className="example">Example:-6</p>
        <pre>
          {`
             @FunctionalInterface
             public interface Parent{
                public void m1();
             }
             
             public interface Child extends Parent{
                public void m2();
             }
            `}
        </pre>
        <p>
          In the above scenario, Child interface can contain any no.of abstract
          methods because it is not having @FunctionalInterface annotation.
        </p>
      </section>
      <section>
        <p className="example">Example:-7</p>
        <pre>
          {`
             public interface Parent{
              public void m1();
           }
            `}
        </pre>
        <ul>
          <li>Writing @FunctionalInterface is optional.</li>
          <li>If we write @FunctionalInterface, java compiler will verify that is
          valid functional interface or not.</li>
        </ul>
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
      <ul id="comment-functional-interface">
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
  );
};

export default Functionalinterface;
