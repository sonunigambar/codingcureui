import axios from 'axios';
import React, { useState } from 'react'
import { handleFormSubmit }  from '../utility/HandleSubmitCommonCode';

const ProgramOfFI = ({ id, contenId, data }) => {
	const [comment, setComment] = useState('');
 

	const handleCommentChange = (event) => {
	  setComment(event.target.value);
	};
	  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  handleFormSubmit(comment, contenId, setComment,"comment-program-of-pi");
	  
		};
  return (
    <div class="active">
      <section>
		<p className='question'>1. Write a program to print number using Tread</p>
		<p>Without Lambda</p>
        <pre className='coding'> 
            {`
		public class Demo1 implements Runnable {

			@Override
			public void run() {
				for (int i = 1; i <= 10; i++) {
					System.out.println(i);
				}
			}

			public static void main(String[] args) {
				Demo1 demo = new Demo1();
				Thread t = new Thread(demo);
				t.start();
			}
		}
		-----------------------------------------------------------------------------------------------
		public class Demo2 {

			public static void main(String[] args) {
				Runnable runnable = new Runnable() {
					@Override
					public void run() {
						for (int i = 11; i <= 20; i++) {
							System.out.println(i);
						}
					}
				};
				Thread thread = new Thread(runnable);
				thread.start();
			}
		}
            `}
        </pre>
      </section>
      <p>Using Lambda</p>
      <section>
        <pre className='coding'>
            {`
 public class Demo3 {

	public static void main(String[] args) {
		Runnable runnable = () -> {
			for (int i = 21; i <= 30; i++) {
				System.out.println(i);
			}
		};
		
		Thread thread = new Thread(runnable);
		thread.start();
	}
}
            `}
        </pre>
      </section>
      <section>
      <p className='question'>2. Write a program to sort the data using ComparatorInterface</p>
	  <p>Without Lambda</p>
        <pre className='coding'>
            {`

 import java.util.ArrayList;
 import java.util.Collections;
 import java.util.Comparator;

 public class SortingDemo {

	public static void main(String[] args) {

		ArrayList<Integer> al = new ArrayList<>();
		al.add(10);
		al.add(21);
		al.add(32);
		al.add(5);
		al.add(8);

		System.out.println("Elements Before Sorting :: " + al);
		Collections.sort(al, new ElementsSortingComparator());
	}
 }

 class ElementsSortingComparator implements Comparator<Integer> {
	@Override
	public int compare(Integer o1, Integer o2) {
		/*if (o1 > o2) {
			return 1;
		} else if (o1 < o2) {
			return -1;
		} else {
			return 0;
		}*/
		return (o1 > o2) ? 1 : (o1 < o2) ? -1 : 0; 
	}
 }
            `}
        </pre>
		<p>With Lambda</p>
		<pre className='coding'>
			{`
				Collections.sort(al, (o1,o2) -> {
					return (o1 > o2) ? 1 : (o1 < o2) ? -1 : 0; 
				});
		
				System.out.println("Elements After Sorting :: " + al);
			`}
		</pre>
      </section>
        <section>
      <p className='question'>3. Write a program for sorting person Object using ComparatorInterface </p>
            <p>Without Lambda</p>
            <pre className='coding'>
                {`
		import java.util.Arrays;
		import java.util.Collections;
		import java.util.Comparator;
		import java.util.List;

		public class SortingApproachOne {

			public static void main(String[] args) {

				Person p1 = new Person(101, "Nick", "nick@ashokit.in");
				Person p2 = new Person(103, "Orlen", "orlen@ashokit.in");
				Person p3 = new Person(102, "John", "john@ashokit.in");
				Person p4 = new Person(104, "Charles", "charles@ashokit.in");

				List<Person> persons = Arrays.asList(p1, p2, p3, p4);

				System.out.println("===========Objects Before Sorting============");
				for (Person p : persons) {
					System.out.println(p);
				}

				// Sorting logic
				Collections.sort(persons, new PersonComparator());

				System.out.println("===========Objects After Sorting============");
				for (Person p : persons) {
					System.out.println(p);
				}
			}
		}

		class PersonComparator implements Comparator<Person> {
			@Override
			public int compare(Person p1, Person p2) {
				return p1.getPname().compareTo(p2.getPname());
			}
		}
               ` }
            </pre>
        </section>

        <section>
            <p>With Lambda</p>
            <pre className='coding'>
                {`
		import java.util.Arrays;
		import java.util.Collections;
		import java.util.List;
		
		public class SortingApproachThree {
		
			public static void main(String[] args) {
		
				Person p1 = new Person(101, "Nick", "nick@ashokit.in");
				Person p2 = new Person(103, "Orlen", "orlen@ashokit.in");
				Person p3 = new Person(102, "John", "john@ashokit.in");
				Person p4 = new Person(104, "Charles", "charles@ashokit.in");
		
				List<Person> persons = Arrays.asList(p1, p2, p3, p4);
		
				System.out.println("===========Objects Before Sorting============");
				for (Person p : persons) {
					System.out.println(p);
				}
		
				// Sorting logic
				Collections.sort(persons, (o1, o2) -> o1.getPname().compareTo(o2.getPname()));
		
				System.out.println("===========Objects After Sorting============");
				for (Person p : persons) {
					System.out.println(p);
				}
			}
		}
               ` }
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
      <ul id="comment-program-of-pi">
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

export default ProgramOfFI
