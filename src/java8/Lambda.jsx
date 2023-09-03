import React, { useState } from 'react'
import '../css/CommentBox.css'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';


const Lamda = ({ id, contenId, data }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment,"comment-lambda");
    
      };

  return (
    <div class="active">
        <h1>Lamda Expression</h1>
        <p>
          <ul>
            <li>LISP is the first programming language which supported for lambda expressions
            </li>
              <ol>
                <li>LISP</li>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Scala</li>
                <li>Ruby</li>
                <li>
                    Python etc..
                    </li>
              </ol>
            <li>Java started support for Lambda expressions from 1.8 version (Java is late in lambdas)</li>
            <li>Java is an object oriented programming language. By Introducing Lambdas in java it is supporting Functional programming also.</li>
          </ul>
        </p>
        <h2>Object Oritend Programming vs Functional Programming?</h2>
        <p>
          <ul>
        <li>In Object Oriented Programming Languages Classes & Objects are main entities.</li>
        <li>If we want to create a function in OOP languages, that function should be created inside the class.
</li>
        <li>In functional programming, function can exist outside the scope of an object
</li>
        <li>We can assign function to reference variable</li>
        <li>One function can be passed as a parameter to another function.</li>
        </ul>
        </p>
        <h2>What is Lambda ?</h2>
        <p>
          <ul>
          <li> A Lambda Expression is just an anonymous function.</li>
          <ol>
            <li>No Name</li>
            <li>No Modifier</li>
            <li>No Return Type</li>
          </ol>
          </ul>
        </p>
        <h2>Why Lambda Expression ?</h2>
        <p>
          <ul>
            <li>Code Optimization</li>
            <li>Readability</li>
            <li>Less Coding</li>
            <li>To write functional programming in java</li>
            <li>To write more readable, maintainable and consice code</li>
        </ul>
        </p>
        <h2>How to write Lambda Expression ?</h2>
        <p>
          <ul>
        <li>Writing Lambdas is very easy if you know how to write methods in java</li>
        <li>Let us one example to understand how to write lambda</li>
        </ul>
       <p className='example'>Example:-1</p> 
        <pre className='coding'>
        {`
          public void greet(){
            System.out.println("Hi");
              }
        `}
        </pre>
        After Java 8
        <pre className='coding'>
        {
          `
          () -> System.out.println("Hi");`
        }
        </pre>  
        <p className='example'>Example:-2</p> 

        <pre className='coding'>
        {`
          public void add(int a, int b){
            System.out.println(a+b);
          }
        `}
        </pre>
        After Java 8
        <pre className='coding'>
          {`
          (a,b) -> System.out.println(a+b);
          `}
        </pre>
        <p className='example'>Example:-3</p> 

        <pre className='coding'>
          {`
          public User getUserById(Integer userId){
            //logic to get from db
           return user;
      }
          `}
        </pre>
        After Java 8
        <pre className='coding'>
          {`
          (userId) -> {
            //logic to get from db
           return user;
          }
          `}
        </pre>
        <p className='example'>Example:-4</p> 

        <pre className='coding'>
          {`
          public User getUserById(int userid){
            UserDao dao = new UserDao();
            User user = dao.findById(userid);
            return user;
      }
          `}
        </pre>
        After Java 8
        <pre className='coding'>
          {`
          (userid) -> new UserDao().findById(userid);
          `}
        </pre>
       
        </p>
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
      <ul id="comment-lambda">
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

export default Lamda