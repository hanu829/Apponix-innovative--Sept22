package advance;

import java.util.HashMap;

public class Lesson_05_Hashmaps {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap mystudents=new HashMap();
		mystudents.put("one", "divya");
		mystudents.put("two", "vijay");
		System.out.println(mystudents);
		
		System.out.println(mystudents.get("one"));
		mystudents.remove("one");
		System.out.println(mystudents);
	
	}

}
