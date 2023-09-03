import React from 'react'

const OccuranceOfEachCharacter = () => {
  return (
    <div className='active'>
      <div className='active'>
      <h3>Write a program to finding occourance each character of a String ?</h3>
        <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        import java.util.Arrays;
        
        public class OccuranceOfEachCharacter {
        
            public static void main(String[] args) {
                String s="my name is sonu";
                char[] ch=s.toCharArray();
                Arrays.sort(ch);
                for(int i=0;i<ch.length;i++){
                    int count=1;
                    for(int j=i+1;j<ch.length;j++){
                        if(ch[i]==ch[j]){
                            count=count+1;
                            i=j;
                        }
                    }
                    System.out.println(ch[i]+"...."+count+" time");
                }
        
            }
        
        }
        
                `}
            </pre>
        </section>
        {/* <section>
            <p className='example'>Solution-2:</p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;
        public class FindNumberOfCharEachWord{
            public static void main(String[] args) {
                String s="my name is sonu";
        		String[] words=s.split("\\s");
        		for(String word: words){
        			int length = word.length();
        			System.out.println(word+" character length is: "+length);
        		}
            }
        }
                `}
            </pre>
        </section> */}
    </div>
    </div>
  )
}

export default OccuranceOfEachCharacter
