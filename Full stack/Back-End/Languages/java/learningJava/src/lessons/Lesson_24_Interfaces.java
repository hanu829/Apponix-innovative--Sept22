package lessons;

public class Lesson_24_Interfaces {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}

interface Iv{
	boolean tyres=true;
	void withDrive();
}
abstract class Vehicals implements Iv {
	boolean tyres=true;
	public void withDrivss(){};
}
class Bike{
	boolean tyres=true;
	void withDrive2(){};
}
class Cars{
	boolean tyres1=true;
	void withDrive(){};
}