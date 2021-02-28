// module화를 하지 않으면 global | window 스코프에서 실행 됨

import add,{print as printMessage} from './09_03_module_01';
import * as calculator from './09_03_module_01';

console.log(add(1,8));
printMessage();

console.log(calculator.number) //10

