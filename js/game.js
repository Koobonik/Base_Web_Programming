/*
 * 구현해야 하는 기능들
 * 게임시작시
 * 남은 수 처리하는 함수
 * 실패할시 숫자 올려주는 함수
 * 남은시간 계산 & 출력해주는 함수
 * 게임이 진행될 -> 정답을 찾으세요 -> 실패시 "실패" 라고 출력
 * 계란 랜덤 배치
 * 웃는 계란 + 우는 계란 + 화내는 계란
 * 랜덤으로 웃, 우, 화 계란을 찾으라고 지정해주는 함수
 * 
 */
let Game = new object();// 
Game.Left_chance = 3; // 남은 기회
Game.Fail_number = 0; // 실패수
Game.Left_time = 15; // 남은시간


let Egg = new Image();
Egg.src = "img/egg.jpg";

let Laugh_egg = new Image(); // 웃는 계란
Lauth_egg.src = "img/laugh_egg.jpg";

let Cry_egg = new Image(); // 우는 계란
Cry_egg.src = "img/cry_egg.jpg";

let Engry_egg = new Image(); // 화내는 계란
Engry_egg.src = "img/engry_egg.jpg";

function Game_start(){ // 게임 시작 전체적인 프로그램 흐름 제어 역할
    Reset_variable(); // 변수 초기화
}

function Left_num(){ // 남은 수 처리 
    Game.Left_chance = Game.Left_chance - 1;
    return Game.Left_chance;
}

function Time(){ // 남은 시간 계산
    
}

function Reset_variable(){ //게임 시작시 변수 초기화
    alert("리셋 시작");
    let Game = new object();// 
    Game.Left_chance = 3; // 남은 기회
    Game.Fail_number = 0; // 실패수
    Game.Left_time = 15; // 남은시간
    alert("리셋 끝");
}

function eggClick(egg){ // 클릭시 이벤트
    alert("출력조차 안됨");
}