package lessons;

public class Lesson_10_Loops {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(int i=0;i<10;i++) {
			System.out.println(i);
		}
		MyWhileloop loop1=new MyWhileloop();
		loop1.while1();
		DoWhile loop2=new DoWhile();
		loop2.dowhile();
			}

		}

		class MyWhileloop{
			public void  while1() {
				int i=0;
				while(i<5) {
					System.out.println("im while loop"+i);
					i++;
				}
			}
		}
		class DoWhile{
			public void dowhile() {
				int i=9;
				do {
					System.out.println("im do while loop"+i);
				}while(i>10);
	}

}
