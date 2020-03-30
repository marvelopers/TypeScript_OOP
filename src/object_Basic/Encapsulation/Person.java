package object_Basic.Encapsulation;

import java.sql.Date;

public class Person {

	/* #멤버변수의 정의 
	 * 멤버 변수를 선언할 때 "="를 사용해 초기화 시킬 수 있다.
	 * 자동 초기값 : int = 0, boolean = false,class = null;
	 * 멤버변수의 종류 : 정적 멤버 변수(static), 인스턴스 멤버 변수 
	 * 				정적 멤버 변수 : 모든 객체에서 사용. 클래스이 객체를 생성하지 않고 이름에 "."를 찍어 사용.
	 * 				인스턴스 멤버 변수 :모든 객체에서 독립된 메모리 공간을 가짐. 
	 * 
	 * #생성자
	 * 이름 : 클래스명과 같아야 함.
	 * 사용목적 : 객체가 생성되는 순간 자동으로 실행되어 멤버 변수를 초기화 시킴.
	 * 기본 생성자 : 생성자를 정의하지 않으면 자동으로 생성, 정의하면 자동생성 안됨.
	 * return, void를 사용하지 않는다. 
	 */
	
	//멤버변수 [접근 권한 지정자][static]자료형 변수명
	public static int count; //정적 멤버 변수
	private int no; // 객체가 생성될 때마다 자동 증가
	private String name;
	private boolean gender;
	private String memo;
	private Date writeDate;  //객체가 생성되는 순간의 날짜와 시간 자동 초기화
	
	//생성자
	public Person() {
		this("무명씨",true,"없음");
		//현재 클래스의 다른 생성자 호출 
	}
	public Person(String name, boolean gender, String memo) {
		// super : 부모 클래스를 의미, this : 현재 클래스를 의미
		//super(); : 부모 클래스의 생성자를 의미한다.   
		//super()와 this()는 반드시 생성자의 첫 문장에 써야함. 동시에 사용가능.
		//super()를 생략하면 자바 컴파일러가 자동으로 붙여줌.
		//this(); : 현재 클래스의 다른 생성자를 의미한다.
		
		no=++count;
		this.name = name;
		this.gender = gender;
		this.memo = memo;
		writeDate = new Date();
	}
	
	//getter&setter 메소드
	//getter&setter : private 권한이 설정된 멤버에 저장된 값을 사용할 수 있도록 예외 규정을 만듬. 
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setNum(String name) {
		this.name = name;
	}
	public boolean isGender() {
		return gender;
	}

	public void setGender(boolean gender) {
		this.gender = gender;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public Date getWriteDate() {
		return writeDate;
	}
	public void setWriteData(Date writeDate) {
		this.writeDate = writeDate;
	}
	
}
