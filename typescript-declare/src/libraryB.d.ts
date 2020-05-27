// 同じ階層に置いてある libraryB.js 用の型定義ファイル
// この宣言は libraryB.js の実装に対応している必要がある
declare class User {
  constructor(name: string, age: number);
  name: string;
  age: number;
}

export = User;
