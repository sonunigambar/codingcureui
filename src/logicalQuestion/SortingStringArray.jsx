import React from 'react'

const SortingStringArray = () => {
  return (
    <div className='active'>
      <h3>Write a program to sort string Array in alfabetically ?</h3>
        <p>Input1: str[0]="sonu"</p>
        <p>Input1: str[1]="monu"</p>
        <p>Input1: str[2]="raju"</p>
        <p>Input1: str[3]="biju"</p>

        <p>Output: biju,monu,raju,sonu</p>
        <section>
            <pre className='coding'>
                {`
            package logicalQuestion.array;

        public class SortingStringArray {
	    public static void main(String[] args) {
             String[] str=new String[4];
             str[0]="sonu";
             str[1]="monu";
             str[2]="raju";
             str[3]="biju";
             for(int i=0;i<str.length;i++){
                 for(int j=i+1;j<str.length;j++){
                     if(str[i].compareTo(str[j])>0){
                         String temp=str[i];
                         str[i]=s[j];
                         str[j]=temp;
                     }
                 }
             }
             for(String nstr:str){
                 System.out.print(nstr+" ");
             }
         }
                `}
            </pre>
        </section>
    </div>
  )
}

export default SortingStringArray
