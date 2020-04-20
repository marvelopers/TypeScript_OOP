package object_Basic.Encapsulation;

public class start {
	public static void main(String[] args) {
		
	    int a=5; int b=3;
	    for(int i=0;i<=a;i++){
	            System.out.print("*");
	            i+=1;
	      for(int j=0; j<=a;j++){
	            System.out.print("*");
	            j+=1;
	            System.out.println();
	     }System.out.println();
	    }System.out.println();

	    a=5; b=3;

	    for(int j=0;j<b;j++) {
		    for(int i=0;i<a;i++) {
		    	System.out.print("*");
		    }
		    System.out.println();
	    }
	}
}
