import React from 'react'

const Palindrome = () => {
  return (
    <div className='active'>
      <h3>Write a program to finding number of each word of a String ?</h3>
        <p>Input: kanak</p>
        <p>Output: not palindrome</p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        public class Palindrome {
            public static void main(String[] args) {
                String s="kanak";
            
                char[] ch=s.toCharArray();
                String nstr="";
                for(int i=0;i<ch.length/2;i++){
                    char temp=ch[i];
                    ch[i]=ch[ch.length-1-i];
                    ch[ch.length-1-i]=temp;
                }
                nstr=new String(ch);
                if(nstr.equalsIgnoreCase(s)){
                    System.out.println("palindrom");
                }else{
                    System.out.println("not palindrome");
                }
            }
        
        }
        
                `}
            </pre>
        </section>
        <section>
            <p className='example'>Solution-2:</p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        public class Palindrome {
        
            public static void main(String[] args) {
                String s="kanak";
            
                String nstr="";
                for(int i=s.length()-1;i>=0;i--){
                    nstr=nstr+s.charAt(i);
                }
                if(s.equalsIgnoreCase(nstr)){
                    System.out.println("palindrom");
                }else{
                    System.out.println("not palindrome");
                }
            }
        
        }
        
                `}
            </pre>
        </section>
    </div>
  )
}

export default Palindrome
