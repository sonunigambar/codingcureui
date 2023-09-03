import React from 'react'

const FindAlphaNumeric = () => {
  return (
    <div className='active'>
        <h3>Write a program to finding alphaNumeric of a String ?</h3>
        <p>Input: sonu123nigam</p>
        <p>Output: 123</p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        public class FindAlphaNumeric {
        
            public static void main(String[] args) {
                String s="sonu123nigam";
                for(int i=0;i<s.length();i++){
                    if((s.charAt(i)>=48) && (s.charAt(i)<=57)){
                        System.out.print(s.charAt(i));
                    }
                }
            }
        
        }
                `}
            </pre>
        </section>
    </div>
  )
}

export default FindAlphaNumeric
