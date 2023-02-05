package lessons;

public class Lesson_19_inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Apponix myob=new Apponix();
		myob.classrom();
		Divya divya=new Divya();
		divya.classrom();
		Array array=new Array();
		array.classrom();
		
	}

}

class Apponix{
	void classrom(){
		System.out.println("im working 12334");
	}
}
class Divya extends  Apponix{
	
}
class Array extends  Apponix{
	}