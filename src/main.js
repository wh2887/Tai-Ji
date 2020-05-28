let html = document.querySelector("#note");
let style = document.querySelector("#style");

let string = `/*我叫McCall
*开始制作一个圆形*/
#container{
  border:1px solid red;
  height:200px;
  width:200px;
  border-radius: 50%;
}
/*
*太极是左白右黑，我们先初步上色*/
#container{
  background: linear-gradient(90deg, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%);
  border:none;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
}
/**
 * 接下来给太极里面画圆
 * 首先使用伪元素创建两个div
 * **/
#container::before {
  content: "";
  border: 1px solid red;
  display: block;
  width: 100px;
  height: 100px;
  
}
#container::after {
  content: "";
  border: 1px solid red;

  display: block;
  width: 100px;
  height: 100px;
}
/**
 * 给中间两个方框居中，并且画圆
 * **/
#container::before {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
#container::after {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
/**
 * 太极上白下黑
 *
 * **/
#container::before {
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
  border:none;
}
#container::after {
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%); 
  border:none;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    window.scrollTo(0, 9999);
    note.scrollTo(0, 9999);
    if (n < string.length) {
      n += 1;
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, n);
    }
    step();
  }, 50);
};

step();
