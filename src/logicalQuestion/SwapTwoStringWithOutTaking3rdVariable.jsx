import React from 'react'

const SwapTwoStringWithOutTaking3rdVariable = () => {
  return (
    <div className='active'>
        <h3>Write a program to swap two string without using 3rd variable ?</h3>
        <p>Input1: Love</p>
        <p>Input2: You</p>

        <p>Output:before swap:love you</p>
        <p>after swap:you love </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
   package java8;

   public class SwapTwoStringWithOutTaking3rdVariable {
       public static void main(String[] args) {
           String s1="love";
           String s2="you";
           System.out.println("before swap:"+s1+" "+s2);
           s1=s1+s2;
           s2=s1.substring(0,s1.length()-s2.length());
           s1=s1.substring(s2.length());
           System.out.println("after swap:"+s1+" "+s2);
       }
   }
   
                `}
            </pre>
        </section>
    </div>
  )
}

export default SwapTwoStringWithOutTaking3rdVariable
