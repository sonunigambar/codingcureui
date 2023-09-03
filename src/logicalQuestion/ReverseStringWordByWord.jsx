import React from 'react'

const ReverseStringWordByWord = () => {
  return (
    <div className='active'>
       <h3>Write a program to reverse the given string word by word ?</h3>
        <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
       package logicalQuestion.string;

       public class ReverseStringWordByWord {
           public static void main(String[] args) {
               String s="my name is sonu";
               String str="";
               String[] ch=s.split("\\s");
               for(String word:ch){
                   for(int i=word.length()-1;i>=0;i--){
                       str=str+word.charAt(i);
                   }
                   str=str+" ";
               }
               System.out.println(str);
               
           }
       }
       
        
                `}
            </pre>
        </section>
    </div>
  )
}

export default ReverseStringWordByWord
