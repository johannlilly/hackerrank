/**
 * Practice > Java > Introduction Java Stdin and Stdout I
 * 
 * In this challenge, you must read 3 integers from stdin and then print them to stdout.
 * Each integer must be printed on a new line.
 * To make the problem a little easier, a portion of the code is provided for you in the editor below.
 * 
 * Version: Java 8
 */

import java.util.*;

public class Solution {

    public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      int myInt1 = scan.nextInt();
      int myInt2 = scan.nextInt();
      int myInt3 = scan.nextInt();
      scan.close();        

      System.out.println(myInt1);
      System.out.println(myInt2);
      System.out.println(myInt3);
    }
}