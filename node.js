var currentTime = 0;
var trueTime = 0;
var budingx = 5;
var budingy = 10; 

function createTimer(id,left,top,r,time,height,color) {
 var cancel = false;
 var circle = document.createElementNS("http://www.w3.org/2000/svg","svg");
 circle.setAttribute("width", "1");
 circle.setAttribute("height", "1");
circle.style.left = (left + budingx) + "%"
circle.style.top = (top + budingy) + "%"; 
 circle.style.position = "absolute";
 circle.style.zIndex = "20";
  circle.style.overflow = "visible"
 x = 0
 y = 0 
 //document.body.appendChild(circle);
 var outerCircle = createOutCircle(x,y,r)
 circle.appendChild(outerCircle);
 var innerCircle = createInnerCircle(x,y,r)
 circle.appendChild(innerCircle);


 var root = document.getElementById("root");
 var contentCircle = createContentCircle(x,y,r,color);
 circle.appendChild(contentCircle);
 var content = createContent(x,y,height);
 circle.appendChild(content);
 var separator = createSeparator(x,y,r + 5,0)
 var separator1 = createSeparator(x,y,r + 5,120)
 var separator2 = createSeparator(x,y,r + 5,240)
 circle.insertBefore(separator, contentCircle);
 circle.insertBefore(separator1,contentCircle);
 circle.insertBefore(separator2,contentCircle);
 root.appendChild(circle);
 // 设置计时器的总时间和当前时间
 var totalTime = time; // 总时间为60秒
 let startTime = trueTime;
 let endTime = trueTime + totalTime;
 // 更新计时器的外圈黑边长度和颜色
 function updateTimer() {
  if(cancel){
    return;
  }
   let innerTime = currentTime - startTime; 
   if (currentTime >= timer.stopTime) {
     outerCircle.style.stroke = "red"
     const circumference = 2 * Math.PI * outerCircle.getAttribute("r");
     const currentLength = circumference * (1 - (timer.stopTime - startTime) / totalTime);
     outerCircle.style.strokeDasharray = `${currentLength} ${circumference}`;
   }else{
     const circumference = 2 * Math.PI * outerCircle.getAttribute("r");
     const currentLength = circumference * (1 - innerTime / totalTime);
     outerCircle.style.strokeDasharray = `${currentLength} ${circumference}`;

   // 根据当前时间改变外圈的颜色
   if (innerTime <= totalTime / 3) {
     outerCircle.style.stroke = "#474742";
   } else if (innerTime <= (totalTime / 3) * 2) {
     outerCircle.style.stroke = "#353531";
   } else {
     outerCircle.style.stroke = "#242421";
   }

   }


 }

 // 每秒更新计时器

 function createSeparator(x, y,r, index){
   const separator = document.createElementNS("http://www.w3.org/2000/svg","line");
   separator.setAttribute("x1", x)
   separator.setAttribute("y1", y)
   separator.setAttribute("x2", x + r * Math.cos(index * Math.PI / 180))
   separator.setAttribute("y2", y + r * Math.sin(index * Math.PI / 180))
   separator.setAttribute("stroke", "black")
   separator.setAttribute("stroke-width", "2")
   separator.style.display = "none"
   return separator
 }

 function createOutCircle(x,y,r){
   var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   circle.setAttribute("cx", x);
   circle.setAttribute("cy", y);
   circle.setAttribute("r", r);
   circle.setAttribute("fill", "none");
   circle.setAttribute("stroke", getColorById(id));
   circle.setAttribute("stroke-width", "7");
   return circle
 }

 function createInnerCircle(x,y,r){
   var innerCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   innerCircle.setAttribute("cx",x);
   innerCircle.setAttribute("cy", y);
   innerCircle.setAttribute("r", r-7);
   innerCircle.setAttribute("fill", "none");
   innerCircle.setAttribute("stroke", "black");
   innerCircle.setAttribute("stroke-width", "7");
   return innerCircle
 }

 function createContent(x,y,text){

   var content = document.createElementNS("http://www.w3.org/2000/svg","text");
   content.setAttribute("x", x);
   content.setAttribute("y", y);
   content.setAttribute("fill", "black");
   content.setAttribute("font-size", "20");
   content.setAttribute("text-anchor", "middle");
   content.setAttribute("dominant-baseline", "middle");
   content.innerHTML = text;
   
   return content
 }

 function createContentCircle(x,y,r,color){
   var contentCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   contentCircle.setAttribute("cx", x);
   contentCircle.setAttribute("cy", y);
   contentCircle.setAttribute("r", r-10);
   contentCircle.setAttribute("fill", color);
   contentCircle.setAttribute

   return contentCircle
 }
 //通过控制timer来控制计时器的停止
 var timer = {
   stopTime: 99999999,
   stop: false,
   setCentent: function(text){
   content.innerHTML = text;
   },
   cancel: function(){
     cancel = true;
     outerCircle.style.stroke = getColorById(id)
     outerCircle.setAttribute("stroke-width", "7");
     separator.style.display = "none"
      separator1.style.display = "none"
      separator2.style.display = "none"
   },
   outerCircle: outerCircle,
   startTimer: function(useSeparator){
    setInterval(() => {
      updateTimer();
      
    }, 30);
      if(useSeparator){
        separator.style.display = "block"
        separator1.style.display = "block"
        separator2.style.display = "block"
      }
},
   circle: circle,
 }

 return timer;
}


function createWaitState(id,left,top,r,outColor,innerColor, height) {

var circle = document.createElementNS("http://www.w3.org/2000/svg","svg");
circle.setAttribute("width", "1");
circle.setAttribute("height", "1");
circle.setAttribute("preserveAspectRatio", "xMidYMid meet");

circle.style.left = (left + budingx) + "%"
circle.style.top = (top + budingy) + "%";
circle.style.position = "absolute";
circle.style.zIndex = "20";
circle.style.overflow = "visible"

x = 0
y = 0 

var innerCircle = createInnerCircle(x,y,r)
circle.appendChild(innerCircle);


var root = document.getElementById("root");
var contentCircle = createContentCircle(x,y,r);
circle.appendChild(contentCircle);
var content = createContent(x,y,height);
circle.appendChild(content);
root.appendChild(circle);



function createInnerCircle(x,y,r){
 var innerCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
 innerCircle.setAttribute("cx",x);
 innerCircle.setAttribute("cy", y);
 innerCircle.setAttribute("r", r-7);
 innerCircle.setAttribute("fill", "none");
 innerCircle.setAttribute("stroke", outColor);
 innerCircle.setAttribute("stroke-width", "7");
 return innerCircle
}

function createContent(x,y,text){

 var content = document.createElementNS("http://www.w3.org/2000/svg","text");
 content.setAttribute("x", x);
 content.setAttribute("y", y);
 content.setAttribute("fill", "black");
 content.setAttribute("font-size", "30");
 content.setAttribute("text-anchor", "middle");
 content.setAttribute("dominant-baseline", "middle");
 content.innerHTML = text;
  
 return content
}

function createContentCircle(x,y,r){
 var contentCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
 contentCircle.setAttribute("cx", x);
 contentCircle.setAttribute("cy", y);
 contentCircle.setAttribute("r", r-10);
 contentCircle.setAttribute("fill", innerColor);
 contentCircle.setAttribute
 return contentCircle
}
//通过控制timer来控制计时器的停止
var timer = {
 stopTime: 99999999,
 stop: false,
 setCentent: function(text){
   content.innerHTML = text;
 },
 
 circle: circle,
}
return timer;
}

function getColorById(master){
if(master == 0)
     return"#8da0cb"
     if(master == 1)
    return "#b2b2a4"
     if(master == 2)
     return "#8e8e83"
     if(master == 3)
     return "#a0a094"
}

function createSingleNode(left,top,r){
id = 1
var circle = document.createElementNS("http://www.w3.org/2000/svg","svg");
 circle.setAttribute("width", "1");
 circle.setAttribute("height", "1");
  circle.style.left = (left + budingx) + "%"
  circle.style.top = (top + budingy) + "%";

 circle.style.position = "absolute";
  circle.style.zIndex = "20";
  circle.style.overflow = "visible"
 x = 0
 y = 0

 var innerCircle = createInnerCircle(x,y,r)
 circle.appendChild(innerCircle);


 var root = document.getElementById("root");
 var contentCircle = createContentCircle(x,y,r);
 circle.appendChild(contentCircle);
 var content = createContent(x,y);
 circle.appendChild(content);
 root.appendChild(circle);


 function createInnerCircle(x,y,r){
   var innerCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   innerCircle.setAttribute("cx",x);
   innerCircle.setAttribute("cy", y);
   innerCircle.setAttribute("r", r-7);
   innerCircle.setAttribute("fill", "none");
   innerCircle.setAttribute("stroke", "black");
   innerCircle.setAttribute("stroke-width", "7");
   return innerCircle
 }

 function createContent(x,y){

   var content = document.createElementNS("http://www.w3.org/2000/svg","text");
   content.setAttribute("x", x);
   content.setAttribute("y", y);
   content.setAttribute("fill", "black");
   content.setAttribute("font-size", "20");
   content.setAttribute("text-anchor", "middle");
   content.setAttribute("dominant-baseline", "middle");
   content.innerHTML = "0";
   
   return content
 }

 function createContentCircle(x,y,r){
   var contentCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   contentCircle.setAttribute("cx", x);
   contentCircle.setAttribute("cy", y);
   contentCircle.setAttribute("r", r-10);
   contentCircle.setAttribute("fill", getColorById(id));
   contentCircle.setAttribute

   return contentCircle
 }
 return {circle: circle, content: content, contentCircle: contentCircle};
}



function createTextElement(text, top, left, size) {
    // 创建一个新的<p>元素
    var p = document.createElement('p');
    var root = document.getElementById("root")
    // 设置元素的文本内容
    p.innerText = text;
  
    // 设置元素的位置
    p.style.position = 'absolute';
    p.style.top = top + '%';
    p.style.left = 0 + '%';
    p.style.width = '60%';
    p.style.margin = '0 20% 0 20%';
    p.fontFamily = "Glyphicons Halflings"
    p.style.fontSize = size + "px"
    p.style.textAlign = "center"
    // 将元素添加到父元素中
    root.appendChild(p);
    return p;
}


function createFreeTextElement(text, top, left, size) {
  // 创建一个新的<p>元素
  var p = document.createElement('p');
  var root = document.getElementById("root")
  // 设置元素的文本内容
  p.innerText = text;

  // 设置元素的位置
  p.style.position = 'absolute';
  p.style.top = top + '%';
  p.style.left = left + '%';
  p.style.width = 'auto';
  p.fontFamily = "Glyphicons Halflings"
  p.style.fontSize = size + "px"
  p.style.textAlign = "center"
  // 将元素添加到父元素中
  root.appendChild(p);
  return p;
}


function createVote(x, y,color,text, outColor) {
  var bsaex = x;
  var bsaey = y;
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if(outColor == null){
    outColor = "black"
  }
  circle.style.left = (bsaex + budingx) + "%";
  circle.style.top = (bsaey + budingy) + "%";
  circle.style.position = "absolute";
  circle.style.zIndex = "1";
  circle.setAttribute("height", "1");
  circle.setAttribute("width", "1");
  circle.style.overflow = "visible"
  circle.style.zIndex = "19";

  var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  innerCircle.setAttribute("fill", color);
  innerCircle.setAttribute("cx", "0");
  innerCircle.setAttribute("cy", "0");
  innerCircle.setAttribute("r", "13");
  innerCircle.setAttribute("stroke", outColor);
  innerCircle.setAttribute("stroke-width", "2");
  var content = createContent(0,0,text)
  circle.appendChild(innerCircle);
  circle.appendChild(content);
  var root = document.getElementById("root");
  root.appendChild(circle);

  function createContent(x,y,text){

    var content = document.createElementNS("http://www.w3.org/2000/svg","text");
    content.setAttribute("x", x);
    content.setAttribute("y", y);
    content.setAttribute("fill", "black");
    content.setAttribute("font-size", "20");
    content.setAttribute("text-anchor", "middle");
    content.setAttribute("dominant-baseline", "middle");
    content.innerHTML = text;
    return content
   }




  return circle;
}



function createBlock(x, y, width, height, color, status, number) {
  var bsaex = x;
  var bsaey = y;
  var block = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  block.style.left = (bsaex + budingx) + "%";
  block.style.top = (bsaey + budingy) + "%";
  block.style.position = "absolute";
  //用这个来标记这个是一个block
  block.style.zIndex = "13";
  block.setAttribute("height", "1");
  block.setAttribute("width", "1");
  //当svg内元素溢出时不隐藏
  block.style.overflow = "visible"
  var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  innerCircle.setAttribute("fill", color);
  innerCircle.setAttribute("width", width);
  innerCircle.setAttribute("height", height);
  innerCircle.setAttribute("x", -width / 2);
  innerCircle.setAttribute("y", -height / 2);
  innerCircle.setAttribute("rx", "5");
  innerCircle.setAttribute("ry", "5");  
  innerCircle.setAttribute("stroke", status);
  innerCircle.setAttribute("stroke-width", "2");
  var content = createContent(0,0,number)
  block.appendChild(innerCircle);
  block.appendChild(content);
  var root = document.getElementById("root");
  root.appendChild(block);

  function createContent(x,y,text){

    var content = document.createElementNS("http://www.w3.org/2000/svg","text");
    content.setAttribute("x", x);
    content.setAttribute("y", y);
    content.setAttribute("fill", "black");
    content.setAttribute("font-size", "20");
    content.setAttribute("text-anchor", "middle");
    content.setAttribute("dominant-baseline", "middle");
    content.innerHTML = text;
    return content
  }

  return {
    block: block,
    innerCircle: innerCircle
  }; 
}




function createBlockFree(x, y, width, height, color, status, number) {
  var bsaex = x + 1;
  var bsaey = y + 3;
  var block = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  block.style.left = bsaex + "%";
  block.style.top = bsaey + "%";
  block.style.position = "absolute";
  block.style.zIndex = "14";
  block.style.overflow = "visible"
  block.setAttribute("height", "1");
  block.setAttribute("width", "1");

  var innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  innerCircle.setAttribute("fill", color);
  innerCircle.setAttribute("width", width);
  innerCircle.setAttribute("height", height);
  innerCircle.setAttribute("x", -width / 2);
  innerCircle.setAttribute("y", -height / 2);
  innerCircle.setAttribute("stroke", status);
  innerCircle.setAttribute("rx", "5");
  innerCircle.setAttribute("ry", "5");
  innerCircle.setAttribute("stroke-width", "2");
  var content = createContent(0,0,number)
  block.appendChild(innerCircle);
  block.appendChild(content);
  var root = document.getElementById("root");
  root.appendChild(block);

  function createContent(x,y,text){

    var content = document.createElementNS("http://www.w3.org/2000/svg","text");
    content.setAttribute("x", x);
    content.setAttribute("y", y);
    content.setAttribute("fill", "black");
    content.setAttribute("font-size", "20");
    content.setAttribute("text-anchor", "middle");
    content.setAttribute("dominant-baseline", "middle");
    content.innerHTML = text;
    return content
  }

  return {
    block: block,
    innerCircle: innerCircle
  }; 
}





function createLine(x1, y1, x2, y2, color) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "100%");
  svg.setAttribute("width", "100%");
  svg.style.position = "absolute";
  svg.style.pointerEvents = "none";

  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", (x1 + budingx) + "%");
  line.setAttribute("y1", (y1 + budingy) + "%") ;
  line.setAttribute("x2", (x2 + budingx) + "%");
  line.setAttribute("y2", (y2 + budingy) + "%");
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);
  var root = document.getElementById("root");
  root.appendChild(svg);
  return svg;
}






  







 
