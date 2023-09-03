import axios from 'axios';
import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const Predicate = ({ id, contenId, data }) => {
    const [comment, setComment] = useState('');
 

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
      
    const handleSubmit = (event) => {
      event.preventDefault();
      handleFormSubmit(comment, contenId, setComment,"comment-predicate");
      
        };
  return (
    <div className='active'>
        <h1>Predicate</h1>
        <section>
            <ul>
            <li>Predicate is a functional interface present in java.util.function package.</li>
            <li>It is used to perform some conditional check and returns true or false</li>
            <li>Predicate is having test() method which is used to invoke lambda expression.</li>
            </ul>
            <p className='example'>Example:-1</p>
            <p className='question'>Check weather given number is greather than 20 or not ?</p>
            <p>Logic wihtout Lambda</p>
            <pre className='coding'>
                {`
                 

                 public class Test{
                    
                    public static void main(String[] args) {
                        System.out.println(test(23));
                    }

                    public static boolean test(int number) {
                        if (number > 20) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
                `}
            </pre>
            <p>Logic with Lambda</p>
            <pre className='coding'>
                {`
                    import java.util.function.Predicate;
                    
                    public class Test{
                    
                        public static void main(String[] args) {
                    
                            Predicate<Integer> predicate = (number) -> number > 20;
                            System.out.println(predicate.test(40));
                        }
                    }
                `}
            </pre>

        </section>
        <section>
            <p className='question'>Write a program to check person name is having 7 characters not</p>
            <pre className='coding'>
                {`
                    import java.util.function.Predicate;
                    
                    public class Test{
                    
                        public static void main(String[] args) {
                    
                            Predicate<String> predicate = (name) -> name.length() >= 7 ;
		                    System.out.println(predicate.test("Why are you Drinking"));
                        }
                    }
                `}
            </pre>
        </section>
        <section>
            <p className='question'>Write a program to print names which are starting with character 'A' using lambda from below names.</p>
            <pre className='coding'>
                {`
                    import java.util.function.Predicate;
                    
                    public class NameListPrinting{
                    
                        public static void main(String[] args) {
                    
                            String[] names = { "Sonu", "Trilochan", "Akash", "Manoranjan", "Rajendra", "Ommprakash", "Milan", "Anand" };
                            Predicate<String> predicate = (name) -> name.startsWith("A");
                            for (String name : names) {
                                if (predicate.test(name)) {
                                    System.out.println(name);
                                }
                            }
                        }
                    }
                `}
            </pre>
        </section>
        <section>
            <p className='question'>Write a java program to print person names who are eligible for vote from below persons using Lambda</p>
            <pre className='coding'>
                {`
                    import java.util.ArrayList;
                    import java.util.List;
                    
                    class Person {
                        private String name;
                        private int age;
                    
                        public Person(String name, int age) {
                            this.name = name;
                            this.age = age;
                        }
                    
                        public int getAge() {
                            return age;
                        }
                    
                        public String getName() {
                            return name;
                        }
                    }
                    
                    public class Main {
                        public static void main(String[] args) {
                            List<Person> persons = new ArrayList<>();
                            persons.add(new Person("Sonu", 25));
                            persons.add(new Person("Monu", 17));
                            persons.add(new Person("Raju", 30));
                            persons.add(new Person("David", 15));
                            persons.add(new Person("Akash", 21));
                    
                            System.out.println("Persons eligible to vote:");
                            
                            Predicate<Integer> voter = (age) -> age >= 18 ;
                            for (Person person: persons) {
                                if (voter.test(person.getAge())) {
                                    System.out.println(person);
                                }
                            }
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
      <ul id="comment-predicate">
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

export default Predicate