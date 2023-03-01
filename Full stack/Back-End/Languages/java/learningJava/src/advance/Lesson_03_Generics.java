package advance;
import java.util.ArrayList;
public class Lesson_03_Generics {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ArrayList<Integer> numbers=new ArrayList<Integer>();
		numbers.add(4);
		numbers.add(6);
		numbers.add(3);
		numbers.add(4);
		System.out.println(numbers);
		numbers.forEach((a)->{
			System.out.println("lambda---"+a);
		});

	}

}
