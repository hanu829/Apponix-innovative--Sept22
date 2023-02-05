package lessons;

public class Lesson_18_MethodOverriding {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Apponix1 myob=new Apponix1();
		myob.classrom();
		Divya1 divya=new Divya1();
		divya.classrom();
		Array1 array=new Array1();
		array.classrom();
		
	}

}
class Apponix1{
	void classrom(){
		System.out.println("im working 1");
	}
}
class Divya1 extends  Apponix1{
	void classrom(){
		System.out.println("im working 2");
	}
}
class Array1 extends  Apponix1{
	void classrom(){
		System.out.println("im working 3");
	}

}
