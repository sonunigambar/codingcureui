import axios from 'axios';
import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const PredicateJoining = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-predicate-joining");
      
        };
  return (
    <div className='active'>
        <h3>What is Predicate Joining</h3>
        <section>
            <p>
                <ul>
                    <li>To combine multiple predicates we will use Predicate Joining</li>
                    <li>We have below methods in Predicate:
                        <ol>
                            <li>test ()  : It is abstract method</li>
                            <li>negate()  : To reverse condition</li>
                            <li>and()  : if all predicates statisfield returns true</li>
                            <li>or()  : if any one predicate satisfied returns true</li>
                        </ol>
                    </li>
                    <li>negate() , and() , or() methods are default methods in Predicate interface</li>
                    <li>Using and( ) & or( ) methods we can achieve predicate joining</li>
                </ul>
            </p>
        </section>
        <section>
            <p className='question'>
            Write a java program to identify who is eligible for marriage
            </p>
            <pre className='coding'>
                {`
                    public class PredicateJoinApp {

                        public static void main(String[] args) {
                            Person p1 = new Person("Raju", 21);
                            Person p2 = new Person("Sonu", 23);
                            Person p3 = new Person("Monu", 67);
                            Person p4 = new Person("Trilochan", 14);
                            Person p5 = new Person("Milan", 26);
                    
                            List<Person> persons = Arrays.asList(p1, p2, p3, p4, p5);
                    
                            Predicate<Person> ageLowerLimit = (p) -> p.getAge() >= 21;
                    
                            Predicate<Person> ageUpperLimit = (p) -> p.getAge() <= 64;
                    
                            for (Person p : persons) {
                                Predicate<Person> predicate = ageLowerLimit.and(ageUpperLimit);
                                boolean isEligibleForMarriage = predicate.test(p);
                                if (isEligibleForMarriage) {
                                    System.out.println(p.getName());
                                }
                            }
                        }
                    }
                `}
            </pre>
            <p>We can add multiple predicates also like below</p>
            <pre className='coding'>
                {`
                Predicate finalPredicate1 = p1.and(p2).and(p3).and(p4).and(p5);
                Predicate finalPredicate2 = p1.or(p2).or(p3).or(p4).or(p5);
                `}
            </pre>

            <p className='note'><b>Note: </b>Here p1, p2, p3, p4 and p5 are predicates</p>
            <p>We can execute final predicate by calling test( ) method</p>
            <pre className='coding'>
                {`
                boolean status1 = finalPredicate1.test(input);
                boolean status2 = finalPredicate2.test(input);
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
      <ul id="comment-predicate-joining">
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

export default PredicateJoining