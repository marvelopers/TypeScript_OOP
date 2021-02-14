interface StackGeneric<V> {
  readonly size: number;
  push(value: V): void;
  pop(): V;
}
type StackNodeGeneric<V> = {
  readonly value: V;
  readonly next?: StackNodeGeneric<V>;
}

//단일 연결 리스트 이용

class StackGenericImpl<V> implements StackGeneric<V> {
  private _size: number = 0;
  private head?: StackNodeGeneric<V>;

  constructor(private capacity: number) { }
  get size() {
    return this._size;
  }
  push(value: V) {
    if (this._size === this.capacity) {
      throw new Error('Stack is full ')
    }
    const node = { value, next: this.head }
    this.head = node;
    this._size++;
  }
  pop(): V {
    if (this.head == null) {
      throw new Error('Stack is empty')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stackGeneric = new StackGenericImpl<string>(10);
const stack2 = new StackGenericImpl<number>(10);

stackGeneric.push('chloe_01');
stackGeneric.push('chloe_02');
stackGeneric.push('chloe_03');

stack2.push('chloe_01');
while (stack.size !== 0) {
  console.log(stack.pop())
}