/**
 * Practice > Java > Introduction > Java Output Formatting
 * 
 * In each line of output there should be two columns:
 * The first column contains the String and is left justified using exactly 15 characters.
 * The second column contains the integer, expressed in exactly 3 digits;
 * if the original input has less than three digits, you must pad your output's leading digits with zeroes.

 * 
 * Version: Java 8
 */

import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.println("================================");
    for(int i=0;i<3;i++)
    {
      String s1=sc.next();
      int x=sc.nextInt();
      System.out.println(
        s1
          + (' ' * (15 - s1.length))
          + (
          x < 100
          ? "0" + x
          : x < 10
            ? "00" + x
            : x
        )
      );
    }
    System.out.println("================================");
  }
}

java           11