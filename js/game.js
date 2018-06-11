/*
 * 구현해야 하는 기능들
 * 게임시작시
 * 남은 수 처리하는 함수
 * 실패할시 숫자 올려주는 함수
 * 남은시간 계산 & 출력해주는 함수 ok
 * 게임이 진행될 -> 정답을 찾으세요 -> 실패시 "실패" 라고 출력
 * 계란 랜덤 배치
 * 웃는 계란 + 우는 계란 + 화내는 계란
 * 랜덤으로 웃, 우, 화 계란을 찾으라고 지정해주는 함수
 * 
 */ 

function Game_start(){ // 게임 시작 전체적인 프로그램 흐름 제어 역할
    Reset_variable(); // 변수 초기화
    Can_see_time(5);
    Random_spray();

}

function Can_see_time(can_see_time){ //볼 수 있는 시간
    document.getElementById("Message_box").innerHTML="<h5>빨리 계란을 보세요!!</h5>";
    Time(can_see_time); // 인자값 만큼 기다려줌
}

function Reset_variable(){ //게임 시작시 변수 초기화
    alert("리셋 시작");
    Reset_image();
    let last_num = 6; // 찾아야 하는 계란 수
    let fail_num = 0; // 실패수는 당연히 0
    let last_time = 20; // 초기에 15초 줄 예정
    let game_status = true; // 게임 진행 유무 true or false
    Time(last_time); // 시간 초기화
    alert("리셋 끝");
}


function Time(last_time){ // 남은 시간 계산
    let game_stop = setInterval(Out_put_time, 1000); // 1초마다 실행
    function Out_put_time(){ // 남은 시간 계속해서 출력
        last_time--;
        if(last_time <= 0){ // 남은시간 0초이면 동작
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : 0 초 </h5>";
            clearInterval(game_stop); // 반복문 종료
        }
        else{ // 나머지는 1초마다 계속해서 함수 실행
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : " + last_time+ " 초 </h5>";
        }
    }
}
function Last_num(){ // 남은 수 처리 
    Left_chance = Left_chance - 1;
    return Left_chance ;
}

function eggClick(egg){ // 클릭시 이벤트
    alert("출력조차 안됨");
}

function Reset_image(){
    for(i=0; i<24; i++){
        let image3 = document.getElementById("egg"+(i+1));
        image3.src = "img/egg.jpg";
    }
}

function Random_spray(){ // 계란을 랜덤하게 뿌려줄 함수
    alert("랜덤 스프레이 작동 시작");
    let egg_id = new Array(); // 1 ~ 24 까지 랜덤한 수들이  들어갈 변수
    let image; // 우는 계란
    let image2; // 화내는 계란
    for (i = 0 ; i<8; i++)
    {
        egg_id[i] = ranGenerator(24, 1); // 1 ~ 24 까지 랜덤하게 뿌려주기
        for (j = 0; j <= i; j++)
        {
        if(egg_id[i] == egg_id[j]){ // 중복 방지
            egg_id[i] = ranGenerator(24, 1);
            }
        }
    }
    for (q=0; q<8; q++)
    {
        image2 = document.getElementById("egg"+egg_id[q]);
        image2.src = "img/engry_egg.jpg";
    }
    for(e=0; e<24; e++)//여기 수정해라 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    {
        if(egg_id[e] != image2.src)//화내는계란이랑 같다면
        {
            image = document.getElementById("egg"+e);
            image.src = "img/cry_egg.jpg";
        }
        else
        {
            image = document.getElementById("egg"+e);
            image.src = "img/cry_egg.jpg";
        }
    }

	alert("랜덤 스프레이 작동 중지");
}

function ranGenerator(max, min){ // 최대 최소 수치 설정
    return Math.floor((Math.random() * max) + min);
}