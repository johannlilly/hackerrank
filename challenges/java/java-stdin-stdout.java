/**
 * Practice > Java > Introduction Java Stdin and Stdout II
 * 
 * In this challenge, you must read an integer, a double, and a String from stdin,
 * then print the values according to the instructions in the Output Format section below.
 * To make the problem a little easier, a portion of the code is provided for you in the editor.
 * 
 * On the first line, print String: followed by the unaltered String read from stdin.
 * On the second line, print Double: followed by the unaltered double read from stdin.
 * On the third line, print Int: followed by the unaltered integer read from stdin.
 * 
 * Version: Java 8
 */

import java.util.Scanner;

public class Solution {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    int i = scan.nextInt();
    double d = scan.nextDouble();
               scan.nextLine();
    String s = scan.nextLine();

    System.out.println("String: " + s);
    System.out.println("Double: " + d);
    System.out.println("Int: " + i);
  }
}