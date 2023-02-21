package lessons;

public class Lesson_20_Types_of_inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Jagadish a=new Jagadish();
System.out.println(a.eyes);
Divya2 b=new Divya2();
System.out.println(b.eyes);

	}

}
class Human1{
	int eyes;
	String nose;
	int legs;
	int hands;
	Human1(){
		eyes=1234;
	}
}
class Jagadish extends Human1{
	
}
class Divya2 extends Jagadish{
	String eyes;
	Divya2(){
		eyes="jjj";
	}
}

//Multiple example
class Human3{
	int eyes;
	int nose;
	int mind;
}

class Male{
	boolean beard;
	
}

//class Hanumant extends Human3 extends Male{}