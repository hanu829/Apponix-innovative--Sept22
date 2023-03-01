package lessons;

public class Lesson_23_Abstraction {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Cmoney m= new Cmoney();
m.howtowithrolmoney();
	}

}
abstract class Atm{
	int money=666;
	void howtowithrolmoney() {}
}
class Cmoney extends Atm{}
