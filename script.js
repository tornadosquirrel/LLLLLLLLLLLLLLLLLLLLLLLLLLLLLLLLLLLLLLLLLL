let text = "";
const num = document.getElementById("num");

document.querySelectorAll('button.dial').forEach((button, index) => {
  button.addEventListener('click', () => {
    //인덱스로 숫자 입력받기
    if (index === 10) {
      inputDial = "0";
    }
    else if (index === 9) {
      inputDial = "00"
    }
    else if (index === 11) {
      inputDial = "del"
    }
    else {
      inputDial = String(index + 1);
    }

    //del을 받아오면 문자열 인덱스 0번부터 마지막 전까지만 텍스트에 저장하는 방식으로 지우는거 구현
    if (inputDial === "del") {
      text = text.slice(0, text.length - 1);
    }
    else {
      text = text + inputDial;
    }
    num.textContent = text;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 800); // 트랜지션 시간과 동일하게 설정    
  });
});
