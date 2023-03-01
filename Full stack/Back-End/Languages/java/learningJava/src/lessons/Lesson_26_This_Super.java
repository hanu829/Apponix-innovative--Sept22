package lessons;

public class Lesson_26_This_Super {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Triner  t=new Triner();
		t.checkmony(100);
	}

}

class Divya12{
	int mony=10;
}
class Triner extends  Divya12{
	int mony=20;
void checkmony(int mony) {
		System.out.println(mony);
		System.out.println(this.mony);
		System.out.println(super.mony);
	}
}
