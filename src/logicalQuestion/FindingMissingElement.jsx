import React from 'react'

const FindingMissingElement = () => {
  return (
    <div className='active'>
       <h3>Write a program to find the missing element of an given Array ?</h3>
        <p>Input1: arr[]=1,3,5,7,9</p>
        <p>Output: 2,4,6,8</p>
        <section>
            <pre className='coding'>
                {`
            package com.array.Programming;
            import java.util.Arrays;
            
            public class FindMissingelement {
            
                public static void main(String[] args) {
                    int[] arr= {1,3,5,7};
                    int n=arr[arr.length-1];
                    int[] temp=new int[n+1];
                    
                    for(int i:arr) {
                        temp[i]=1;
                    }
                        System.out.println(Arrays.toString(temp));
                    for (int i = 1; i < temp.length; i++) {
                        if(temp[i]==0) {
                            System.out.print(i+" ");
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

export default FindingMissingElement
