import React from 'react'

const ReverseFullString = () => {
  return (
    <div className='active'>
       <h3>Write a program to reverse the given string ?</h3>
        <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        public class ReverseFullString {
        
            public static void main(String[] args) {
                String s="my name is sonu";
                String str="";
                for(int i=s.length()-1;i>=0;i--){
                    str=str+s.charAt(i);
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

export default ReverseFullString
