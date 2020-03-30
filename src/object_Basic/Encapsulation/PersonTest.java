package object_Basic.Encapsulation;

//자바의 모든 클래스는 Object 클래스를 상속받아 만들어짐!
public class PersonTest {
	public static void main(String[] args) {
		
		Person person = new Person();
		System.out.println(person);
		System.out.println(person.toString());
		//toString() : 객체에 저장된 내용을 출력함. 붙이지 않아도 자바 컴파일러가 자동으로 붙여준다.
		
		Person person2 = new Person("김서현",true,"1등입니다.");
		System.out.println("person2"+person2);
		
		Person person3 = new Person("김서현",true,"1등입니다.");
		System.out.println("person3"+person3);
		
		person.count = 100;
		System.out.println(person2.count);
		
		person.count = 999;
		System.out.println(person.count);
		System.out.println(person2.count);
		System.out.println(person3.count);
			
	}
}
