package advance;

import java.util.ArrayList;
import java.util.Iterator;

public class Lesson_07_Itterator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 ArrayList<String>  mystudents=new ArrayList();
	        System.out.println(mystudents);
	        mystudents.add("vijay");
	        mystudents.add("divya");
	        mystudents.add("tulsi");
	        mystudents.add("hanumanthu");
//	        System.out.println(mystudents.get(0));
	        Iterator myitems=mystudents.iterator();
//	        System.out.println(myitems.next());
//	        System.out.println(myitems.next());
//	        System.out.println(myitems.next());
//	        System.out.println(myitems.next());
	        System.out.println("short cut way");
	        while(myitems.hasNext()) {
	        	System.out.println("yhis is shoty cut way wth while loop--"+myitems.next());
	        }
	}

}
