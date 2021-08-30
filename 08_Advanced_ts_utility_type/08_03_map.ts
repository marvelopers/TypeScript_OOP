type Video = {
  title: string;
  author : string;
}

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   desc?: string;
// }

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author : string;
// }

type Optional<T> = {
  [P in keyof T]?: T[P] // for...in
}

type VideoOptional = Optional<Video>
const videoOptional : VideoOptional ={
  title: 'title',
} 

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

type Nullable<T> = {[P in keyof T]: T[P] | null};

const obj2:Nullable<Video> ={
  title: 'title',
  author: null,
}

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T] : Proxy<T[P]>
}
