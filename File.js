//
//  File.swift
//  java
//
//  Created by 福田優美 on 2021/10/12.
//

const level = 12;

// 条件式を「level > 10」とするif文を作ってください

if(level > 10){
  console.log("レベルが10より大きいです");
}
//
const age = 24;

// 「age >= 20」を出力してください
console.log(age >= 20);
// 「age < 20」を出力してください
console.log(age < 20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
}
//
const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === "ninjawanko") {
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== "ninjawanko") {
  console.log("パスワードが間違っています");
}


//
const age = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}
//
const age = 24;

// 指定された条件のif文を作成してください
if (age >= 20 && age<30) {
  console.log("私は20代です");
}
//
const rank = 2;

switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  // rankの値が2のcaseを追加してください
  case 2:
    console.log("銀メダルです！");
    break
  
  // rankの値が3のcaseを追加してください
  case3:
    conosle.log("銅メダルです！");
    break
  
}


const rank = 2;

switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  // rankの値が2のcaseを追加してください
  case 2:
    console.log("銀メダルです！");
    break;
  
  // rankの値が3のcaseを追加してください
  case 3:
    console.log("銅メダルです！");
    break;
  
}
// 変数numberを定義してください
let number = 1;

// while文を作成してください
while (number<=100){
  console.log(number);
  number+=1;
}
while (number<=100){
  console.log(number);
  number+=1
}
/////
for (let number = 1; number <=100; number++){
    console.log(number);
  }

/////////
// for文を完成させてください
for (let number=1; number <= 100;number ++) {
  
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number %3 === 0){
    console.log("3の倍数です");
  }else{
    console.log(number);
  }
  
}
/////////

const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください


for(let i = 0; i<3; i++){
  console.log(animals[i]);
}
//////
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}



// for文を完成させてください
for (let i = 0; i<characters.length  ; i++) {
  console.log("--------------------");
  
  // 定数characterを定義してください
  const character = characters[i];
  
  
  // 「名前は〇〇です」を出力してください
  console.log("名前は${character.name}です");
  console.log(`名前は${character.name}です`);
                                   
  
  // 「〇〇歳です」を出力してください
  console.log(character.age+"歳です");
  
}
or (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  
  // if文を追加してください
  if(character.age===undefined){
    console.log("年齢は秘密です");
  }else{
    console.log(`${character.age}歳です`);
    
  }
  
  
}

onst cafe = {
  name: "Progateカフェ",
  businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening:"10:00(AM)",
    closing:"8:00(PM)"
    
  }
};

// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i<cafe.menus.length;i++){
  console.log(cafe.menus[i]);
}
// 定数greetにアロー関数を代入してください
const greet = ()=>{
  console.log("こんにちは！");
}

// 定数greetを呼び出してください
greet();


// 関数の引数にnameを追加してください
const greet = (name) => {
  // 「こんにちは、〇〇さん」となるように出力してください
  console.log(`こんにちは、${name}さん`);
  
};

// greetの引数に「ひつじ仙人」を渡して呼び出してください

greet("ひつじ仙人");

///////////////////////////////////////
const half = (number) => {
  // numberを2で割った値を戻り値として返してください
  return number / 2;
};

// 定数resultを定義してください
const result = half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);
//////////

const getMax = (a,b,c)=>{
  let max = a;
  if (b >max){
    max = b;
  }
  if(c>max){
    max = c;
  }
  return max;
};

// 「最大値は○○です」と出力してください
const max = getMax(number1,number2,number3);
console.log(`最大値は${max}です`)

/////

