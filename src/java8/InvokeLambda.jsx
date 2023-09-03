import React, { useState } from "react";
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const InvokeLambda = ({ id, contenId, data }) => {
  const [comment, setComment] = useState('');
 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(comment, contenId, setComment,"comment-invoke-lambda");
    
      };
  return (
    <div class="active">
      <h4> How to Invoke Lambda Using Functional Interface</h4>
      <section>
        <p>without using Lambdas</p>
        <pre className='coding'>
          {`
  

    public interface MyInterface{
      public void m1();
    }

    public class MyApp implements MyInterface{
   @Override
    public void m1(){
	System.out.println("Hello");
    }
      
    public static void main(String... args){
	    MyInterface mi = new MyApp();
            mi.m1();
    }    
 }
            `}
        </pre>
      </section>
      <section>
        <p>Using Lambdas</p>
        <pre>
          {`
    public interface MyInterface{
    public void m1();
 }

    public class MyApp{

     public static void main(String... args){
	    MyInterface i = ()  -> System.out.println("Hello");
	     i.m1();
     }
  }
            `}
        </pre>
      </section>
      <p className="scenario">Scenario - 1 : Implementation classes for Interface</p>
      <section>
        <pre className='coding'>
            {`

 public interface Greeting {
    public abstract void greet();
 }
 -----------------------------------------------------------------------------------------
 public class EnglishGreeting implements Greeting {
 
     @Override
     public void greet() {
         System.out.println("Hello, Good Morning..!!");
     }
 }
 ---------------------------------------------------------------------------------------------
  public class HindiGreeting implements Greeting {
 
     @Override
     public void greet() {
         System.out.println("Namaskar...");
     }
 }
 -------------------------------------------------------------------------------------------
  public class WellWisher {
 
     public static void wish(Greeting greeting) {
         greeting.greet();
     }
 
     public static void main(String[] args) {
         Greeting hindiGreeting = new HindiGreeting();
         wish(hindiGreeting);
 
         Greeting englishGreeting = new EnglishGreeting();
         wish(englishGreeting);
     }
 }
            `}
        </pre>
        <ul>
            <li>In above approach we are creating seperate implementation class for every language. If we want to support 20 languages then we have to create 20 implementation classes. It is not recommended.</li>
            <li>To avoid this problem we can use Anonymous implementation.</li>
        </ul>
      </section>
      <p className="scenario">Scenario-2: (Anonymous Implementation for Interface)</p>
      <section>
        <pre className='coding'>
        {`
 public interface Greeting {
 	public abstract void greet();
 }
----------------------------------------------------------------------------------------------
 public class WellWisher {

	public static void wish(Greeting greeting) {
		greeting.greet();
	}

	public static void main(String[] args) {
		wish(new Greeting() {
			@Override
			public void greet() {
				System.out.println("Hello, Good Morning...!!");
			}
		});
		wish(new Greeting() {
			@Override
			public void greet() {
				System.out.println("Namaskar...!!");
			}
		});
	}
 }
       `}
       </pre>
      </section>
      <p className="scenario">Scenario-3: Using Lambda Expressions</p>
      <section>
        <pre className='coding'>
        {`
 public class WellWisher {

	public static void wish(Greeting greeting) {
		greeting.greet();
	}

	public static void main(String[] args) {
		wish(() -> System.out.println("Hello, Good Morning...!!"));
	}
 }
---------------------------------------------------------------------------------------------
 public class WellWisher {

	public static void main(String[] args) {

		Greeting hindi = () -> System.out.println("Namaskar...!!");
		hindi.greet();

		Greeting english = () -> System.out.println("Hello, Good Morning...!!");
		english.greet();

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
      <ul id="comment-invoke-lambda">

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

export default InvokeLambda;
