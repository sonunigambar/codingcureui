import React from 'react'

const DisplayCommonElement = () => {
  return (
    <div className='active'>
       <h3>Write a program to print the common element in two different Array ?</h3>
        <p>Input1: arr1[]=30,50,10,40,20</p>
        <p>Input2: arr2[]=40,60,70,80,20</p>

        <p>Output: 40,20</p>
        <section>
            <pre className='coding'>
                {`
             package logicalQuestion.array;

             public class DisplayCommonElement {
             
                 public static void main(String[] args) {
                     int[] arr1={30,50,10,40,20};
                     int[] arr2={40,60,70,80,20};
                     for(int i=0;i<arr1.length;i++){
                         for(int j=0;j<arr2.length;j++){
                             if(arr1[i]==arr2[j]){
                                 System.out.println(arr1[i]+" ");
                             }
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

export default DisplayCommonElement
