/**
 * 
 */
package lessons;

/**
 * @author Apponix
 *
 */
public class Lesson_25_Constructors {
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Humans12 hu=new Humans12("hell im dynamically given");
		System.out.println(hu.nose);
		System.out.println(hu.eyes);
//		Jugdish j=new Jugdish();
//		System.out.println("im jugdish console---"+j.nose);
//		System.out.println("im jugdish console---"+j.eyes);
	}

}


class Humans12{
String	eyes;
boolean nose;
Humans12(String h){
	eyes=h;
	nose=true;
}
Humans12(){}
}

class Jugdish extends Humans12{
	Jugdish(){
		eyes="hh";
		
	}
}

