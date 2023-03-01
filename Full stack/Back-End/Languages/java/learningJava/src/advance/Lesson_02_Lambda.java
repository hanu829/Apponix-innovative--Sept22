package advance;
import java.util.ArrayList;
public class Lesson_02_Lambda {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ArrayList numbers=new ArrayList();
		numbers.add(1);
		numbers.add(2);
		numbers.add(3);
		numbers.add(4);
		System.out.println(numbers);
		numbers.forEach((a)->{
			System.out.println("lambda---"+a);
		});
	}

}
