
// i have to print this pattern like this 

// for n = 6
// *  *  *  *  *  *  
// *           *
// *        *
// *     *
// *  *
// *


// I prefer to do the dsa type question in java language 

import java.io.*;
import java.util.*;
class Main {
	public static void main (String[] args) {
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		
		drawPattern(n);
	}
        
        
    public static void drawPattern(int n) {
        
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                if(i==1){
                    System.out.print("* ");
                }
                else if(j==1){
                    System.out.print("* ");
                }
                else if(i+j==n+1){
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
                
            }
            System.out.println();
        }
    }
}

