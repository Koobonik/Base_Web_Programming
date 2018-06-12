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


let egg_id = new Array(); // 1 ~ 24 까지 랜덤한 수들이  들어갈 변수
let answer_egg_id = new Array();//정답을 받아올 변수
let last_num =6; // 찾아야 하는 계란 수
let fail_num = 0; // 실패수는 당연히 0
let last_time = 20; // 초기에 20초 줄 예정
let game_time = 10; // 볼 수 있는 시간
let game_status = false; // 게임 진행 유무 true or false


function Game_start(){ // 게임 시작 전체적인 프로그램 흐름 제어 역할
    var audio = new Audio('audio/gamestart.mp3');
    audio.play();
    Reset_variable(); // 변수 초기화
    last_num = 6; // 찾아야 하는 계란 수
    fail_num = 0; // 실패수는 당연히 0
    last_time = 20; // 초기에 20초 줄 예정
    game_time = 10; // 볼 수 있는 시간
    game_status = true; // 게임 진행 유무 true or false
    Can_see_time(game_time, last_time); // 시작전 보는 시간과 게임중 남은 시간 인자
    Random_spray();
}

function Reset_variable(){ //게임 시작시 변수 초기화
    alert("리셋 시작");
    Reset_image(); // 우는 계란으로 다 바꾸어 줄 것임
    
    //Time(last_time); // 시간 초기화
    alert("리셋 끝");
}

function Can_see_time(can_see_time, game_time){ //볼 수 있는 시간
    document.getElementById("Message_box").innerHTML="<h5>빨리 계란을 보세요!!</h5>";
    Time2(can_see_time, game_time); // 인자값 만큼 기다려줌
}

function Time(last_time){ // 게임 시작후 남은 시간 계산
    Change_normal_egg(); // 모든 계란들을 평범한 계란으로 바꾸어 줄 것임
    let game_stop = setInterval(Out_put_time, 1000); // 1초마다 실행
    function Out_put_time(){ // 남은 시간 계속해서 출력
        last_time--;
        if(last_time <= 0){ // 남은시간 0초이면 동작
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : 0 초 </h5>";
            clearInterval(game_stop); // 반복문 종료
            Game_over();
        }
        else if(game_status == true){ // 나머지는 1초마다 계속해서 함수 실행
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : " + last_time+ " 초 </h5>";
            document.getElementById("Message_box").innerHTML="<h5>맞추세요!!</h5>";
        }
        else if(ame_status == false){
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : - 초</h5>";
        }
    }
}

function Time2(last_time, game_time){ // 게임 시작 전 남은 시간을 보여주는 함수 게임의 status를 true로 해주는 것이 포인트!
    let game_stop = setInterval(Out_put_time, 1000); // 1초마다 실행
    function Out_put_time(){ // 남은 시간 계속해서 출력
        last_time--;
        if(last_time == 5){
            var audio = new Audio('audio/tictok.mp3'); //오디오 재생 코드
            audio.play();
        }
        
        if(last_time <= 0){ // 남은시간 0초이면 동작
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : 0 초 </h5>";
            clearInterval(game_stop); // 반복문 종료
            Reset_variable.game_status = true;
            Time(game_time);//모든것이 끝나면 이제는 game_time 만큼의 맞출 시간을 준다.
            
        }
        else if(game_status == true){ // 나머지는 1초마다 계속해서 함수 실행
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : " + last_time+ " 초 </h5>";
        }
        else if(game_status == false){
            document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : - 초</h5>";
        }
    }
}

function Change_normal_egg(){ // 평범한 계란으로 바꾸어 주는 함수
    for (r = 0; r < 24; r++){
        let image = document.getElementById("egg"+(r+1));
        image.src = "img/egg.jpg";
    }
}

function Last_num(){ // 남은 계란 수 처리 
    last_num--;
    document.getElementById("Left_box").innerHTML="<h5>남은 수 : " + last_num + " </h5>";
    if(last_num == 0){
        Game_clear();
        game_status = false;
    }
}

function Fail_num(){ // 실패 수 처리 
    fail_num = fail_num + 1;
    document.getElementById("Fail_box").innerHTML="<h5>실패 수 : " + fail_num + " </h5>";
    if(fail_num >= 5){
        Game_over();
        game_status = false;
        document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : - 초</h5>";
        
    }
    return Left_chance ;
}

function Game_clear(){ // 게임 클리어시
    var audio = new Audio('audio/clearsound.mp3'); //오디오 재생 코드
        audio.play();
    document.getElementById("Message_box").innerHTML="<h5>게임 클리어!!</h5>";
}

function Game_over(){ // 게임 오버가 된다면 못찾은 계란을 띄워줌
    var audio = new Audio('audio/gameover.mp3'); //오디오 재생 코드
        audio.play();
    for(k=0; k<24; k++){
        if(k == egg_id[k]){
            let image2 = document.getElementById("egg"+(egg_id[k])); 
            image2.src = "img/laugh_egg.jpg";
        }
        else{
            let image2 = document.getElementById("egg"+(k+1)); 
            image2.src = "img/game_over.png";
        }
        document.getElementById("Message_box").innerHTML="<h5>게임 오버</h5>";
    }
}

function Reset_image(){ // 이미지 리셋 (우는 계란으로 바꾸어 줄 것)
    for(i=0; i<24; i++){
        let image3 = document.getElementById("egg"+(i+1));
        image3.src = "img/cry_egg.jpg";
    }
}

function Random_spray(){ // 계란을 랜덤하게 뿌려줄 함수
    alert("랜덤 스프레이 작동 시작");
    let image; // 우는 계란
    let image2; // 웃는 계란
    for (i = 0 ; i<24; i++)
    {
        egg_id[i] = ranGenerator(24, 1); // 1 ~ 24 까지 랜덤하게 뿌려주기
        for (j = 0; j < 100; j++)// 게임 난이도 만큼!! 100개 만큼 만들어주니 중복이 없더라
        {
            if(egg_id[i] == egg_id[j]){ // 중복 방지
                egg_id[i] = ranGenerator(24, 1);
            }
        }
    }
    for (q=0; q < last_num; q++) // 웃는 계란 랜덤 배치
    {
        image2 = document.getElementById("egg"+egg_id[q]);
        image2.src = "img/laugh_egg.jpg";
        //Give_array(egg_id[q]); // 랜덤한 위치를 저장할 수 있게끔 다른 곳으로 넘겨줄 것임
    }
    
	alert("랜덤 스프레이 작동 중지");
}

function eggClick(egg){ // egg id 인 egg1 egg2 egg3 ...egg24  같은 것 클릭시 이벤트
    // 정답일경우
    if( egg == "egg"+(egg_id[0]) || egg == "egg"+(egg_id[1]) || egg == "egg"+(egg_id[2]) || egg == "egg"+(egg_id[3]) || egg == "egg"+(egg_id[4]) || egg == "egg"+(egg_id[5]) || egg == "egg"+(egg_id[6]) || egg == "egg"+(egg_id[7]) ){
        image2 = document.getElementById(egg);
        image2.src = "img/laugh_egg.jpg";
        var audio = new Audio('audio/answer.ogg'); //오디오 재생 코드
        audio.play();
        Last_num();
    }
    else{ // 틀렸을 경우
        image2 = document.getElementById(egg);
        image2.src = "img/cry_egg.jpg";
        var audio = new Audio('audio/fail.ogg');
        audio.play();
        Fail_num();
        
    }

}

function ranGenerator(max, min){ // 최대 최소 수치 설정
    return Math.floor((Math.random() * max) + min);
}

