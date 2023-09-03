import React from 'react'

const MergeTwoArray = () => {
  return (
    <div className='active'>
       <h3>Write a program to merge two different Array into single Array ?</h3>
        <p>Input1: arr1[]=7 ,21, 45, 9</p>
        <p>Input2: arr2[]=14, 42, 90, 18</p>

        <p>Output: arr3[]=7,21,45,9,14,42,90,18</p>
        <section>
            <pre className='coding'>
                {`
              package com.array.Programming;

            public class MergeTwoArray {
                public static void main(String[] args){
                int[] arr1={7,21,45,9};
                int[] arr2={14,42,90,18};
                int[] arr3 = new int[arr1.length + arr2.length];

                for (int i = 0; i < arr1.length; i++) {
                    arr3[i] = arr1[i];
                }
                for (int i = 0; i < arr2.length; i++) {
                    arr3[arr1.length + i] = arr2[i];
                }
                System.out.println(Arrays.toString(arr3));

                }
            }
                `}
            </pre>
        </section>
    </div>
  )
}

export default MergeTwoArray
