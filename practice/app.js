console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);


//●文字列型（string型）●
let single = '文字列型です';
console.log(single);
let double = '英語だとstringといいます。';
console.log(double);

console.log('elepant');
//console.log(elephant);
//注意！JSはエラーを残すとそこから何も表示されなくなる！
//←を入れてコメントアウトしてから先に進もう！

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);
//グリート「お出迎え」

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
//テンプレートリテラルを使う時はバッククォート
//シングル・ダブル''""はただの印字になるけど
// ``は仕掛け（＄｛変数｝で変数がおでましする）絵本になる
//さらに組み込む量が増えてば増えるほどクォート間違い探しが
//地獄と化すからこのやり方は見やすくてシンプル…らしい
console.log(templateText);
//リテラル「文字通りの→直値」

//高水準（人間語）低水準（機械語）
//コンパイル⇒高級言語（高わがまま）→低級言語（低わがまま）
//トランスパイル⇒高級言語→高級言語

//●数値型（number型）●
let numTen = 10;
let strTen = '10';
console.log(numTen,strTen);

let minus = -10;
//マイナス
let decimal = 1.1;
//デシマル
console.log(minus,decimal);

//加算
let num1 = 25;
let num2 = 2;
console.log(num1 + num2);
//減算
console.log(num1 - num2);
//乗算
console.log(num1 * num2);
//除算
console.log(num1 / num2);
//これにより私は何ができるようになるのだろうか…？何をやっているんだ私は？

//変数に入っている現在の値に対しての追加の計算をしたい時
let number = 5;
number = number + 3;
console.log(number);
//　↓　短縮バージョン　↓　
//let number = 5;
//number + or - or * or /= 3;（記号と＝の間にはスペースは不要）
//例）number +=3
//　　console.log(number)
//　　これは現在の変数numberが上の計算によって５＋３で８
//　　だから８＋３＝と同じになり結果（コンソールに出てくるの）が１１

//increment（１を足す）
let increment = 0;
console.log(increment);
increment++; //increment +=1と同じなんだってさ
//++は実はこれで演算子になっていて「インクリメント演算子」だってさ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--;
//--で「デクリメント演算子」って事だね
console.log(decrement);

//剰余（割ったあまりがコンソール画面に表示される）
let bigNum = 25;
let smallNum = 2;
console.log(bigNum % smallNum);//２５÷２＝１２あまり１→１が表示される

//累乗(○の○じょうとかいう計算のやつ)
console.log(bigNum ** smallNum);

//文字扱いになっちゃうパターン
let stringNum1 = '25';
let stringNum2 = '2';
console.log(stringNum1 + stringNum2); 
//「２５という字に２という字を後に付け足した」という扱い
let stringNum = '25';
let numberNum = 2;
console.log(stringNum + numberNum);
//「２５という字に2（数字）を後に付け足した」という扱い

//●配列型（array型）●
let name1 = 'John';
let name2 = 'Bob';
let name3 ='Michael';
let name4 ='Emma';
//を、まとめられる便利な型が
let names = ['John','Bob','Michael','Emma'];
console.log('names[0]',names[0]);
console.log('names[1]',names[1]);
console.log('names[2]',names[2]);
console.log('names[3]',names[3]);
console.log('names.length => ', names.length);
//順番の事をインデックスと呼び、インデックスは「０」から始まる
//length「長さ、丈」
//○○.lengthで配列に入っている値の個数を取得する
//　↓　空の配列を定義した後に値を追加する方法　↓
let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

//オブジェクト型（object型）
//let John = ['John', '26', 'A', 'card'];
//これでは他人が見た時に26がなんなのか、
// Aがなんなのか、その他もわからない
//let John = {
//  name: 'John',
//  age: 26,           　※次の関数の勉強の為にコメントアウト
//  bloodType: 'A',
//  favorite: 'card',
//};
//｛｝の中身がオブジェクト
//key（キー）:value（バリュー）のセットで定義する
//このセットをプロパティと呼ぶ
//これなら何の事かが他人でもわかる
//{}は鍵穴がたくさんある仕掛け宝箱で
//keyをきちんと選ばないとその中身（値value）が出てこない
//その値を取得したい時は
//console.log(John.bloodType);　※関数の勉強の為にコメントアウト
//※「John」という宝箱（オブジェクト）の特定の中身（value）を見るには（宝箱名.key）と書く
//空のオブジェクトに中身を入れる方法は
let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
//つまりお道具箱に（新しい）道具をしまう行為だね

//※配置とオブジェクトの使い分け
//配列⇒同じジャンルのものをまとめる時
//オブジェクト⇒同じもののそれぞれの属性をまとめる時
let fruits = ['apple', 'banana', 'grape'] //配列
let apple ={
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
}; //オブジェクト
//配列の中にオブジェクトを入れる方法
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];
//オブジェクトの中に配列を入れる方法
let car = {
  name: 'car',
  color: 'red',
  brand: [ 'Suzuki', 'Honda', 'Toyota', 'SUBARU']
};
//typeofはWho are you?（どんな型？）という意味
//AIからの豆知識：nullに対しては「オブジェクトです」と答えるらしい
let one = '1';
let two = 2;
console.log('one →',typeof one, one);
//　　　　　　↳ラベリング ↳oneは何？↳変数に入っているものそのもの
//これで出てくるのはstring 1 「変数型は文字列型で１という字だよ」
console.log('two →', typeof two, two);
//これで出てくるのはnumber 2　「変数型は数値型で２という数字だよ」

//●関数●//
//　例）円周率の計算
//let radius = 2;
//let circle = radius * radius * 3.14;
//console.log('円の面積は' + circle + 'です');
//　↓　関数に書き換えたバージョン　↓　
function getArea1() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
// ↑　これは「関数を定義する」という行為で、まだログには何も出てこない
//function 関数名(){処理の内容}
getArea1();
// ↑ これでようやく出てくる「呼び出し（の呪文）」
//このやり方のおかげで、下記のように繰り返しが楽になる
getArea1();
getArea1();//NaN：Not Nnmber「非数」
getArea1();

//●引数（ひきすう）（いんすうは因数という言葉があり別物）●//
//異なる円の面積を求めたい時上記のように
//何度も同じものを書くのはめんどいしコードがどんどん増える…
//function 関数名(引数)｛処理の内容｝←「関数を定義する」
//関数名(引数)←「呼び出し（の呪文）」（＋「引数の所に中身を渡す」）
function getArea2(radius){
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea2(5);
//目に見えない水面下では
//function getArea(radiusが５に置き換わり){
//let circle = radius←５ * radius←５ * 3.14;
//console.log('円の面積は' + circle + 'です');
//}になっている
//getArea(5)←この（）内に入れ替わっているという事　ﾄﾞﾕｺﾄ？
//→AIのいう事にゃ（let =）が起きていると考えていいとの話
//なので（）内が変われば答えもちゃんと変わってくる
getArea2(5);  //ログは（５×５×３．１４＝）７８．５になってる
getArea2(6);  //ログは（６×６×３．１４＝）１１３．０４になっている
getArea2(10);  //ログは（１０×１０×３．１４＝）３１４になっている
//引数はいっぺんに複数渡すことが可能
function sample(arg1, arg2, arg3) {
};//もちろん順番ずつで１にはヤン坊、２にはマー坊、３には天気予報
sample('ヤン坊', 'マー坊', '天気予報');//今の子わかるんかいな…


//⚠ここちょっとよくわからないからよくお勉強しよう⚠//
//●返り値●//
//関数内の値を呼び出した箇所に返す事？？
//呼び起こした箇所ってのがそもそもどこなのよ？って話よ
function getArea3(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}
console.log('円の面積は' + getArea3(5) + 'です');
//returnの右側に書いたものは、関数の呼び出し個所に返すことができ
//この返ってきた値を返り値と呼ぶ？？
//必ず必要なものではないらしいが使いどころがあるみたい
//感覚的には中にある関数の答え（返り値）を外に押し出すみたいな動作ができる
//技名「早期リターン」「ガード節」

//関数の定義方法
//　↓　名前がついている関数の場合　↓
//function output() {
// console.log('コールバック関数が呼び出されました');
//}
//doFunc(output) //名前付きの関数を渡す時は（）を付けずに渡す（？）
//returnは「変身」、callbackは「予約」と覚えていいみたい

//function define1() { // define1という名前の関数
//  return 'This is console in showConsole function!';
//}　※これはfunction　○○だから裏側でletが行われていて「名前がついた関数」になる
//　　　「これは○○という関数（お道具箱）だよ」という意味
//const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
//  return 'This is console in showConsole function!';
//}　※これは define2にfunction()だから関数が変数の中に
// 　　入っているだけで関数自体に名前がないから「無名関数」
//　　　「define2の中に入っている関数（処理）だよ」ってだけだから名前無いよね


//●コールバック関数//
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});//これは無名関数
//function output() {
//  console.log('コールバック関数が呼び出されました');
//} これは名前がついている関数
//　　こっちの場合はdoFunc(output)と書けば実行される


//引数には、数値や文字列以外に関数も渡すことができるが
// この引数に渡す関数のことをコールバック関数という（引数の部分に関数を渡す行為）
//上の例だとdoFunc()の()内の(名前無し)関数の事とoutputという名の関数の事を
//　「コールバック関数」と呼ぶ
//名前付き関数は何度も使う処理に、無名はその場限りの処理に
// って使いわけるんだって

//ちなみに…returnとcallbackについて
//returnは中身を跳ね返して送り出す、
// callbackはこれが処理された時、次にこれを処理してねという予約注文
//returnは「ステートメント（意味：命令文）」でcallbackは「関数（そのもの）」
//returnは予約語、callbackは関数（を引数として）に関数を渡す行為の事


//●オブジェクトに関数を持たせる●//
let John = {
  name: 'John',
  age: 26,
  blooType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }//オブジェクトに持たせた関数の事を「メゾット」と呼んでるんだって
};
John.sing();
//letは予約語(キーワード)「変数の名前を登録するよ！という宣言」
//Johnは変数(文字や数字等を値を入れる箱)
//singはキー　：の次はバリュー（値）＝この一対を「プロパティ」と呼ぶ
//＝｛｝内はオブジェクトで
// ｛｝内の「function()｛｝」が関数＝メゾットと呼ぶ
//functionは予約語(キーワード)「新しい関数（処理のまとまり）を作るよ！という宣言」

//●標準組み込みオブジェクト//
//console というオブジェクトから
// . （ピリオド）を使って log() というメソッドを呼び出すという構造
//consoleはオブジェクト（お道具箱）．は指差しの指先「ここ！（カレント）」って意味
//logは「記録する」（お道具箱に入っていた道具の一つ）
//人間語訳にすると「console（箱）．（から、これ・ここ・この）log（道具）を出して」
//「Math」はマセマティクス（計算道具のお道具箱）※オブジェクトの１つ
//AIメモ
//お道具箱の名前（オブジェクト名）: John / console / Math
//中に入っている道具（メソッド）: sing() / log() / random()
//中に入っているメモ（プロパティ）: name / PI（円周率）など
//logはメゾット？⇒log の中には「画面に文字を表示させるための、
// 複雑なプログラム（命令書）」がギッシリ詰まっている
//console.log(console.log);⇒出てこないけどバイナリ（ネイティブコード）らしい

//●スコープ「変数の有効範囲」●//
//グローバル変数とローカル変数？
//ローカル変数
myFunc()
function myFunc() {
  let userAge = 27;
  console.log(userAge); // => 27
}
//console.log(userAge); （←エラーになるのでコメントアウト）
//=> userAge is not defined（エラー）と出て何もできない表示されない
//つまり｛｝外では変数が使えない

//グローバル変数
let userAge = 0;  // 変数の定義を関数の外で行う
myFunc2();
function myFunc2() {
  userAge = 28;  // ここは再代入するように変更
  console.log(userAge); // => 28がConsoleに表示される
}
console.log(userAge); // => 28がConsoleに表示される
//パッと見よくわからん
//かぶったり、後で編集した時に中身変わっちゃいそうで
//ただただ危ないという印象しかない


//●if文●//
//if(条件式)｛
// 条件式が（真）の時の処理｝

//真偽型（boolean型）「ブーリアン、ブール型」
let value1 = true;
let value2 = false;
if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');

if (false) {
  console.log('trueです！');
}
console.log('処理がまだ途中です');
//上はパス（条件を合格）したから｛｝の中が表示される
//下はパスしてないから｛｝内が表示されないって事

//比較演算子
let tall = 185;
if (tall >= 180){
  console.log('高身長です');
}
//比較演算子一覧表
//　＝＝＝　厳密に等しい　←stringの５とnumberの５は「等しい」とはならない（偽）
//　＝＝　　等しい　　　　←stringの５とnumberの５は「等しい」になる（真）
// ！＝＝　厳密に等しくない　←stringの５とnumberの５は「等しくない」になる（真）
//　！＝　　等しくない　　　 ←stringの５とnumberの５は「等しい」になる（偽）
// 　＞　　より大きい
//　＞＝　　以上
//　＜　　　未満
//　＜＝　　以下

let val = 26;
console.log(val >= 20); //２０より大きい？→　はい（真）
console.log(val === '26'); //文字「２６」と一緒？→　いいえ（偽）
console.log(val == '26'); //文字「２６」と一緒？→　はい（真）

console.log('hello' === 'world'); //文字「hello」と「world」は一緒？→　いいえ（偽）


//複雑な条件分岐
let signal = 'blue'; 
//↑ここがredならredの{}が　yellowならyellowの｛｝が呼び出される
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}
//let signal = 'red';
//※下に書いた場合「この変数使ってんで」ってエラーが出る
//ちなみに…
let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
}
//これは全てがtrueになるがifは上から処理されるから一番上の｛｝が呼び出され
//コンソールには「健康診断でバリウムを飲みます」しか出ない
//さらにさらに「全ての条件がtrueじゃない時」が召喚条件にできるelse
let myAge2 = 12;
if (myAge2 >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge2 >= 20) {
  console.log('お酒が飲めます');
} else if (myAge2 >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}
//コンソールは「子供です」になる

//論理演算子
//　↳「または（AND）||」「かつ（OR）&&」「否定（NOT）!」等？
let loto = 6;
if (loto === 7 || loto === 8) { //←「または」
  console.log('当たり');
} else {
  console.log('ハズレ');
}
//７や８ならif{}が、それ以外ならelse{}がコンソールに出る
let numVal = 6;
let strVal = 'te'
console.log(numVal === 7 || strVal === 'text')

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') { //←「かつ」
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}
//↑これに関してはコンソールの返事は｛｝内の設定した文
console.log(userA === '到着' && userB === '到着');
//↑これに関してはコンソールの返事は「false」か「true」

//三項演算子　「３つの要素を持つ演算子」
//条件式　?　trueの時の処理　:　falseの時の処理
//ifでの「エラーメッセージが出た時の処理」の書き方
let errMsg = '';
// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}
//errMsgが何も表示されていない（''内に何も文字がない）→if{}
//''内に文字がある→else{}になる
//↓↓　三項演算子の書き方だと…　↓↓
errMsg === '' ? console.log('ない！') : console.log('ある！');

let numSnko = 1;
//変数numSnkoは1です
let textSnko = numSnko % 2 === 0 ? '偶数です' : '奇数です';
//変数textSnkoは「numSnko　÷　２　厳密に等しい　０（クラッシュ防止？）
// ？（前までが条件式）　trueの時の処理：falseの時の処理」
console.log(textSnko); // 奇数です
// 　　　　　　　　　　　　↳（１は２で割れないので「false」だからfalseの時の処理が召喚）

//Truthy（真値　しんち）と Falsy（偽値　ぎち）
if (1) {
    console.log('hoge');
}
if (0) {
    console.log('piyo');
}
//コンソールにはhogeしか出てこない→勝手に型変換（キャスト）が行われていて
// １は真偽型（boolean型）だとTruthyらしく
// ０は真偽型（boolean型）だとFalsyらしい
//　ちなみに偽（Falsy）になるケースは
// 数字型「０」文字列型「''（空）、'false'、'0'、'null'、'undefind'」、
// null自体、［］（空の配列）　等など…


//●for文●//
//繰り返しの処理をするもの
//for (初期値; 繰り返しの条件式; 処理の後にされる式) {
  // ここに繰り返す処理を書きます。}
for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}//（let i = 0;←初期値　i < 10;←条件式　i++ ←後処理）
//console.log(i + '回目のコンソール');←繰り返す処理
//「変数iは数字0　で、条件式は10より小さい　、場合は　iにインクリメントする
//　コンソールには（処理した）i　＋（文字の）回目のコンソール　と表示して」
//↑これで表示されるのは「０～９回目のコンソール」が１０個出る

//forに配列を使う
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
//numbersは１～１０の数字を持った変数です
//変数sumは（数字）０です
//（let i = 0;←初期値
// i < numbers.length;←配列の長さ（今回は１０文字あるので１０回）まで（→条件式）
// i++ ←後処理（インクリメントして）)
//　翻訳：配列の長さと同じ数だけ計算して）
//｛sum += numbers[i];｝はsum = sum + numbers[i];という事
// iは０から始まるので０、１、２、、、と１０まで計算が続くという事
//1周目：sum = sum + numbers[0];  // sum = 0 + 1
//2周目：sum = sum + numbers[1];  // sum = 1 + 2
//3周目：sum = sum + numbers[2];  // sum = 3 + 3
//︙
//9周目：sum = sum + numbers[8];  // sum = 36 + 9
//10周目：sum = sum + numbers[9]; // sum = 45 + 10
//コンソールには５５が表示される
