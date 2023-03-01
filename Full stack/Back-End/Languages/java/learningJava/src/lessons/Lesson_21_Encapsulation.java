package lessons;

public class Lesson_21_Encapsulation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Divya3 a=new Divya3();
		System.out.println(a.givepassword("aaa"));
		a.updatepassword(1233489);
		System.out.println(a.givepassword("aaa"));
			}

		}

		class Divya3{
			String head="yes divya has head";
			int mony=1000;
		private	int password=1235656;
		
		//getter 
		 int givepassword(String security){
			 if(security=="aaa") {
				 return password;
			 }else {
				
				 System.out.println("wrong security quation");
				 return 00000;
			 }
			 
		 }
		 void updatepassword(int a){
			this.password=a;
		 }
	

	}

