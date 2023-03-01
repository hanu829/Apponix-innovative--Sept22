package lessons;

public class Lesson_22_Polymorphism {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Humans h=new Humans();
		 h.walk();
		 Humans t=new Tulsi();
		 t.walk();
		 Humans ha=new Hanumanta();
		 ha.walk();
	}

}

class Humans{
	void walk(){
		System.out.println("humanas can walk");
	}
}
class Tulsi extends Humans{
	void walk(){
		System.out.println("humanas can walk can dance also");
	}
}
class Hanumanta extends Humans{
	void walk(){
		System.out.println("humanas can walk can jump");
	}

	}


