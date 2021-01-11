/**
 * Practice > Java > Java If-Else
 * 
 * Given an integer, n, perform the following conditional actions:
 *  If n is odd, print Weird
 *  If n is even and in the inclusive range of 2 to 5, print Not Weird
 *  If n is even and in the inclusive range of 6 to 20, print Weird
 *  If n is even and greater than 20, print Not Weird
 * Complete the stub code provided in your editor to print whether or not n is weird.
 * 
 * Version: Java 8
 */

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    int n = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
    scanner.close();

    System.out.println((n%2==0) && ((1<n && n<6) || (20<n)) ? "Not Weird" : "Weird");
  }
}
