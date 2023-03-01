package advance;

public class Lesson_04_Thread {
	 public static int mynumber=0;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Lesson_04_Thread thread=new Lesson_04_Thread();
		thread.start();
		while(thread.isAlive()) {
			//System.out.println("still waiting ......");
			mynumber++;
			System.out.println(mynumber);
		}
		System.out.println("this line is not in thread");
		System.out.println(mynumber);
		mynumber++;
		System.out.println(mynumber);
		
	}

	private boolean isAlive() {
		// TODO Auto-generated method stub
		return false;
	}

	private void start() {
		// TODO Auto-generated method stub
		
	}

	public void run() {
		System.out.println("this line is11 in thread");
		mynumber++;
	}

}
