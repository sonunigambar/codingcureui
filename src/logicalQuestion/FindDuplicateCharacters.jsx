import React from 'react'

const FindDuplicateCharacters = () => {
  return (
    <div className='active'>
      <h3>Write a program to finding FindDuplicate elements from String</h3>
      <p>Input: my name is sonu</p>
        <p>Output: </p>
        <section>
            <p className='example'>Solution-1: </p>
            <pre className='coding'>
                {`
        package logicalQuestion.string;

        public class FindDuplicateElementFromString {
            public static void main(String[] args) {
                
                String s="my name is sonu";
                char[] ch=s.toCharArray();
                char[] nch=new char[ch.length];
                int count=0;
                for(int i=0;i<ch.length;i++){
                    for(int j=i+1;j<ch.length;j++){
                        if(ch[i]==ch[j]){
                            nch[count]=ch[i];
                            count++;
                            break;
                        }
                    }
                }
                
                for(int i=0;i<nch.length;i++){
                    System.out.print(nch[i]);
                }
            }
        }
        
                `}
            </pre>
            <section>
                <p className='example'>Solution-2: </p>
                <p>Using Map</p>
            <pre>
                {`
        import java.util.HashMap;
        import java.util.Map;
        
        public class FindDuplicateElementFromString{
            public static void main(String[] args) {
                String str = "my name is sonu";
        
                char[] chars = str.toCharArray();
                Map<Character, Integer> charCountMap = new HashMap<>();
        
                for (char ch : chars) {
                    // If the character is already in the map, increment its count
                    if (charCountMap.containsKey(ch)) {
                        charCountMap.put(ch, charCountMap.get(ch) + 1);
                    } else {
                        // Otherwise, add the character to the map with a count of 1
                        charCountMap.put(ch, 1);
                    }
                }
        
                for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
                    if (entry.getValue() > 1) {
                        System.out.println("Character '" + entry.getKey() + "' appears " + entry.getValue() + " times.");
                    }
                }
            }
        }
                
                `}
            </pre>
            </section>
        </section>
    </div>
  )
}

export default FindDuplicateCharacters
