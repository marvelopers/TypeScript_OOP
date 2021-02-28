// module화를 하지 않으면 global | window 스코프에서 실행 됨

export default function add(a, b){
  return a+b;
}

export function print (){
  console.log('print!')
}

export const number = 10;
