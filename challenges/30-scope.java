import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  private int[] elements;
  public int maximumDifference;

// Add your code here
  public Difference(int[] e) {
      this.elements = e;
  }

  public void computeDifference() {
    int a = 100;
    int b = 1;
    for (int i: elements) {
        if (i <= a) {
            a = i;
        }
    }
    for (int i: elements) {
        if (i >= b) {
            b = i;
        }
    }
    maximumDifference = Math.abs(b - a);
  }


} // End of Difference class

public class Solution {

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] a = new int[n];
      for (int i = 0; i < n; i++) {
          a[i] = sc.nextInt();
      }
      sc.close();

      Difference difference = new Difference(a);

      difference.computeDifference();

      System.out.print(difference.maximumDifference);
  }
}