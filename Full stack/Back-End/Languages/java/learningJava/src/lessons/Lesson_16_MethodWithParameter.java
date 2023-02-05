package lessons;
import java.util.Scanner;
public class Lesson_16_MethodWithParameter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner uservalues=new Scanner(System.in);
//		System.out.print(addition(10,30));
		System.out.println("user enter values 1");
		int uservalue1=uservalues.nextInt();
		System.out.println(uservalue1);
		int uservalue2=uservalues.nextInt();
		System.out.println("user enter values 2");
		System.out.println(uservalue2);
		System.out.print(addition(uservalue2,uservalue1));
	}

	static int addition(int a,int b){
		return a+b;
	}

}
