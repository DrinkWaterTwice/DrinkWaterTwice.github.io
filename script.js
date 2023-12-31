
//节点水平高度：300, 文字中间高度250，水平距离为300

let step = 0;
let timers = []
let globalTimer = null;
let continueButton;
document.addEventListener("DOMContentLoaded", function() {
        globalTimer = setInterval(() => {
        currentTime += 10;
        trueTime += 10;
      }, 10);
      continueButton = document.getElementById("root3");
    continueButtonFunction();
})

function run(){
  continueButton.style.display = "none";
  if(step==0){
    creatRoot();
    timers = []
    let p1 = createTextElement("EBFT",25,46,50)
    let p2 = createTextElement("基于平等的拜占庭共识算法",35,33,50)
    continueButton.style.display = "block";
    fadeOut([p1,p2,continueButton],600)
  }
  if(step==1){
    creatRoot();
    timers = []
    let p1 = createTextElement("什么是共识算法",25,39,40)
    let p2 = createTextElement("让我们从一个例子讲起",35,35,40)
    fadeOut([p1,p2],600)
    timers.push(
    setTimeout(()=>{
      fadeIn([p1,p2],600)
    },1200))

    timers.push(setTimeout(()=>{
      creatRoot();
      timers = []
      let p3 = createTextElement("让我们首先看一个单点系统",85,33,40)
      let c1 = createWaitState(0, 46,30,50,"#4682b4","#4682b4",'').circle
      fadeOut([p3,c1],600)
      continueButton.style.display = "block";

    },2200))
  }
  //对于本例，您可以将节点视为存储单个值的数据库服务器。
  if(step==2){
    creatRoot();
    timers = []
    let p3 = createTextElement("对于本例，您可以将节点视为存储单个值的数据库服务器",85,22,40)
    let c1 = createWaitState(0, 46,30,50,"#4682b4","#4682b4",'').circle
    scale(c1,1,5,600)
    fadeOut([p3],600)
    continueButton.style.display = "block";
  }

  if(step==3){
    creatRoot();
    timers = []
    let p1 = createTextElement("我们还有一个可以向服务器发送值的客户机",85,30,40)
    let c1 = createWaitState(0, 46,30,50,"#4682b4","#4682b4",'X')
    scale(c1.circle,5,1,600)
    timers.push(setTimeout(()=>{
          let c2 = createWaitState(0, 46,30,50,"#008000","#008000",'C')
    moveTo(c1.circle,46,45,600)
    moveTo(c2.circle,46,15,600)
    },600))

    fadeOut([p1],600)
    continueButton.style.display = "block";
  }

  if(step==4){
    creatRoot();
    timers = []
    let p1 = createTextElement("客户端将值发送到服务器",85,30,40)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 46,15,50,"#008000","#008000",'8')
    let v1 = createVote(46,15,"#4682b4",8)
    moveTo(v1,46,45,600)
    fadeOut([p1],600)
    timers.push(setTimeout(()=>{
      c1.setCentent('8')
    },600))
    continueButton.style.display = "block";
  }
  if(step==5){
    creatRoot();
    timers = []
    let p1 = createTextElement("对于这个值，单节点很容易达成一致",85,30,40)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'8')
    let c2 = createWaitState(0, 46,15,50,"#008000","#008000",'8')
    fadeOut([p1],600)
    continueButton.style.display = "block";
  }
  if(step==6){
    creatRoot();
    timers = []
    let p1 = createTextElement("但是，如果我们有多个节点, 又该如何达成共识",85,30,40)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'8')
    let c2 = createWaitState(0, 46,15,50,"#008000","#008000",'8')
    let c3 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'')
    let c4 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'')
    moveTo(c1.circle,46,65,600)
    moveTo(c2.circle,46,10,600)
    moveTo(c3.circle,63,50,600)
    moveTo(c4.circle,29,50,600)
    fadeOut([p1],600)
    timers.push(setTimeout(()=>{
          continueButton.style.display = "block";
    },600))

  }
  if(step==7){
    creatRoot();
    timers = []
    let p1 = createTextElement("这就是分布式共识问题",85,40,40)
    let c1 = createWaitState(0, 46,65,50,"#4682b4","#4682b4",'8')
    let c2 = createWaitState(0, 46,10,50,"#008000","#008000",'8')
    let c3 = createWaitState(0, 63,50,50,"#4682b4","#4682b4",'')
    let c4 = createWaitState(0, 29,50,50,"#4682b4","#4682b4",'')
    fadeOut([p1],600)
    continueButton.style.display = "block";
  }

  if(step==8){
    creatRoot();
    timers = []
    let p1 = createTextElement("EBFT就是用来解决这一问题的共识算法",30,25,50)
    let c1 = createWaitState(0, 46,65,50,"#4682b4","#4682b4",'8')
    let c2 = createWaitState(0, 46,10,50,"#008000","#008000",'8')
    let c3 = createWaitState(0, 63,50,50,"#4682b4","#4682b4",'')
    let c4 = createWaitState(0, 29,50,50,"#4682b4","#4682b4",'')
    fadeIn([c1.circle,c2.circle,c3.circle,c4.circle],600)
    fadeOut([p1],600)
    continueButton.style.display = "block";
  }

  if(step==9){
    creatRoot();
    timers = []
    let p1 = createTextElement("我们首先来看一下EBFT的结构",30,33,50)
    continueButton.style.display = "block";
    fadeOut([p1],600)
  }

  if(step==10){
    creatRoot();
    timers = []
    let p1 = createTextElement("我们首先来看一下EBFT的结构",30,33,50)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let p2 = createTextElement("EBFT中有两种节点，一种是诚实节点，诚实节点会严格遵守LCCR进行投票",85,20,30)
    fadeIn([p1],600)
    fadeOut([p2],600) 
    continueButton.style.display = "block";
  }

  if(step==11){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 46,45,50,"#008000","#008000",'B')
    let p2 = createTextElement("EBFT中有两种节点，一种是诚实节点，诚实节点会严格遵守LCCR进行投票",85,20,30)
    let p3 = createTextElement("另一种是拜占庭式节点，它会进行任意行为，比如随机投票或者不投票",85,20,30)
    moveTo(c1.circle,36,45,600)
    moveTo(c2.circle,56,45,600)
    fadeOut([p3],600)
    fadeIn([p2],600)
    continueButton.style.display = "block";
  }

  if(step==12){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 36,45,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 56,45,50,"#008000","#008000",'B')
    let p3 = createTextElement("另一种是拜占庭式节点，它会进行任意行为，比如随机投票或者不投票",85,20,30)
    let p4 = createTextElement("在这个系统中，每个节点都能平等的提出区块并发送给其它节点",85,20,30)
    fadeOut([p4],600)
    timers.push(setTimeout(()=>{
      let c3 = createWaitState(0, 46,35,50,"#4682b4","#4682b4",'X')
      let c4 = createWaitState(0, 46,35,50,"#d8e15f","#d8e15f",'X')
      let c5 = createWaitState(0, 46,35,50,"#B0C4DE","#B0C4DE",'X')
      moveTo(c3.circle,46,18,800)
      moveTo(c4.circle,36,45,800)
      moveTo(c5.circle,56,45,800)
      timers.push(setTimeout(()=>{
        let b1 = createBlock(46,18, 40,30,"#4682b4", "black",1)
        let b2 = createBlock(46,18, 40,30,"#4682b4", "black", 1)
        moveTo(b1.block,36,45,800)
        moveTo(b2.block,56,45,800)
        timers.push(setTimeout(()=>{
          continueButton.style.display = "block";
        },800))
      }, 800))
    },600))

    fadeIn([p3,c1.circle, c2.circle],600)
  }

  if(step==13){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,18,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 36,45,50,"##d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 56,45,50,"B0C4DE","#B0C4DE",'X')
    let p3 = createTextElement("在这个系统中，每个节点都能平等的提出区块并发送给其它节点",85,20,30)
    let p5 = createTextElement("区块的内部颜色与产生区块的节点颜色相同，数字代表区块的高度",85,20,30)
    let b1 = createBlock(46,38, 40,30,"#4682b4", "black",1)
    scale(b1.block,1,5,600)

    fadeOut([p5],600)
    fadeIn([p3,c1.circle, c2.circle, c3.circle],600)
    continueButton.style.display = "block";
  }

  if(step==14){
    creatRoot();
    timers = []
    let p4 = createTextElement("区块的内部颜色与产生区块的节点颜色相同，数字代表区块的高度",85,20,30)
    let p5 = createTextElement("边框颜色代表区块状态，黑色是未认证",85,40,30)
    let b1 = createBlock(46,38, 40,30,"#4682b4", "black",1)
    scale(b1.block,5,5,1)
    fadeOut([p5],600)
    fadeIn([p4],600)
    continueButton.style.display = "block";
  }

  if(step==15){
    creatRoot();
    timers = []
    let p4 = createTextElement("黑色是未认证",85,40,30)
    let p5 = createTextElement("蓝色是已认证",85,40,30)
    let b1 = createBlock(46,38, 40,30,"#4682b4", "blue",1)
    scale(b1.block,5,5,1)
    fadeOut([p5],600)
    fadeIn([p4],600)
    continueButton.style.display = "block";
  }

  if(step==16){
    creatRoot();
    timers = []
    let p4 = createTextElement("蓝色是未认证",85,40,30)
    let p5 = createTextElement("金色是已提交",85,40,30)
    let b1 = createBlock(46,38, 40,30,"#4682b4", "gold",1)
    scale(b1.block,5,5,1)
    fadeOut([p5],600)
    fadeIn([p4],600)
    continueButton.style.display = "block";
  }

  if(step==17){
    creatRoot();
    timers = []
    let p4 = createTextElement("节点对于区块的处理严格遵守LCCR",35,40,50)
    let p5 = createTextElement("Longest certified chain rule",45,40,50)
    fadeOut([p4,p5],600)
    continueButton.style.display = "block";
  }
  if(step==18){
    creatRoot();
    timers = []
    let p4 = createTextElement("具体来说，节点只会接收被认证的区块",35,40,40)
    let p5 = createTextElement("且只会对延长了最长认证链的区块进行投票",45,40,40)
    fadeOut([p4,p5],600)
    continueButton.style.display = "block";
  }

  if(step==19){
    creatRoot();
    timers = []
    let p4 = createTextElement("举例说明一下",40,40,50)
    fadeOut([p4],600)
    continueButton.style.display = "block";
  }

  if(step == 20){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"B0C4DE","#B0C4DE",'X')
    fadeOut([c1.circle,c2.circle,c3.circle],600)
    let p5 = createTextElement("节点收到区块后，会将区块用树的结构进行存储",85,30,30)
    let b1 = createBlock(46,12, 40,30,"#4682b4", "black",1)
    let b3 = createBlock(26,55, 40,30,"#d8e15f", "black",1)
    let b2 = createBlock(76,50, 40,30,"white", "gold",0)
    timers.push(setTimeout(()=>{  
      createBlock(73,60, 40,30,"#d8e15f", "black",1)
      createBlock(79,60, 40,30,"#4682b4", "black",1)
      createLine(73,60,76,50,"black")
      createLine(79,60,76,50,"black")
      continueButton.style.display = "block";
    },3000))
    moveTo(b1.block,66,55,3000)
    moveTo(b3.block,66,55,3000)
    fadeOut([p5],600)

  }


  if(step==21){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"B0C4DE","#B0C4DE",'X')
    let p5 = createTextElement("对于每个到达的区块，若其延长了本地最长的认证链，则为其生成一个投票并广播",85,20,30)
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    continueButton.style.display = "block";
  }

  if(step==22){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let p5 = createTextElement("在这里，节点产生了一个新的区块，延长了本地最长认证链条",85,20,30)
    let b0= createBlock(76,50, 40,30,"white", "gold",0)

    timers.push(setTimeout(()=>{
      let p6 = createTextElement("因此，广播该区块的同时,节点会为其生成一个投票并广播",85,20,30) 
      createBlock(76,60, 40,30,"#B0C4DE", "black",1)
      let b1 = createBlock(66,55, 40,30,"#B0C4DE", "black",1)
      let b2 = createBlock(66,55, 40,30,"#B0C4DE", "black",1)
      moveTo(b1.block,26,55,3000);
      moveTo(b2.block,46,12,3000);

      createLine(76,50,76,60,"black")
      timers.push(setTimeout(()=>{
        let v1 = createVote(66,55,"#B0C4DE",1)
        let v2 = createVote(66,55,"#B0C4DE",1)
        moveTo(v1,26,55,3000)
        moveTo(v2,46,12,3000)
        timers.push(setTimeout(()=>{
          continueButton.style.display = "block";
        },3000))
      },500)) 
      fadeIn([p5],600)
      fadeOut([p6],600)
    },1500))
  }

  if(step == 23){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    createBlock(76,60, 40,30,"#B0C4DE", "black",1)
    createLine(76,50,76,60,"black")
    let p6 = createTextElement("其他节点接收到节点验证满足LCCR后，发出对该节点的投票",85,30,30)
    let v1 = createVote(46,12,"#B0C4DE",1)
    let v2 = createVote(46,12,"#B0C4DE",1)
    let v3 = createVote(26,55,"#B0C4DE",1)
    let v4 = createVote(26,55,"#B0C4DE",1)
    moveTo(v1,26,55,3000)
    moveTo(v2,66,55,3000)
    moveTo(v3,46,12,3000)
    moveTo(v4,66,55,3000)
    timers.push(setTimeout(()=>{
      fadeIn([p6],100)
      let p7 = createTextElement("区块收集到足够的投票后就会被认证",85,40,30)
      fadeOut([p7],600)
      scale(createBlock(76,60, 40,30,"#B0C4DE", "blue",1).block,1.3,1,600)
      continueButton.style.display = "block";
    },3000))
  }
  if(step == 24){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    createBlock(76,60, 40,30,"#B0C4DE", "blue",1)
    createLine(76,50,76,60,"black")
    let p6 = createTextElement("若此时有节点产生高度为1的区块",85,30,30)
    timers.push(setTimeout(()=>{
      let b1 = createBlock(46,12, 40,30,"#4682b4", "black",1)
      let b2 = createBlock(46,12, 40,30,"#4682b4", "black",1)
      moveTo(b1.block,26,55,3000);
      moveTo(b2.block,66,55,3000);
      timers.push(setTimeout(()=>{
      createBlock(82,60, 40,30,"#4682b4", "black",1)
      createLine(76,50,82,60,"black")
      let p7 = createTextElement("因为其没有延长高度为1的认证链，所以诚实节点们不会给该区块投票",85,30,30);
      timers.push(setTimeout(()=>{
        continueButton.style.display = "block";
      },3000))
      fadeIn([p6],10)},3000))
    },1001))  
    fadeOut([p6],600)

  }

  if(step == 25){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    scale(createBlock(76,60, 40,30,"#B0C4DE", "blue",1).block,1.3,1,600)
    createLine(76,50,76,60,"black")
    scale(createBlock(82,60, 40,30,"#4682b4", "black",1).block,1.3,1,600)
    createLine(76,50,82,60,"black")
    let p7 = createTextElement("该区块不会被认证",85,30,30);
    continueButton.style.display = "block";
  }

  if(step == 26){
    creatRoot();
    timers = []
    let p4 = createTextElement("显然，若是一个高度的第一个区块认证前有其他满足LCCR的区块到来",35,40,40)
    let p5 = createTextElement("那么会导致同一个高度上有多个认证区块，这是有可能的",45,40,40)
    fadeOut([p4,p5],600)
    continueButton.style.display = "block";
  }

  if(step == 27){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    let p4 = createTextElement("这里有两个节点几乎同时挖出了新的区块并进行了广播",85,40,40)
    fadeOut([p4],600)
    timers.push(setTimeout(()=>{
      let b1 = createBlock(46,12, 40,30,"#4682b4", "black",1)
      let b2 = createBlock(46,12, 40,30,"#4682b4", "black",1)
      let b3 = createBlock(26,55, 40,30,"#B0C4DE", "black",1)
      let b4 = createBlock(26,55, 40,30,"#B0C4DE", "black",1)
      let v1 = createVote(46,12,"#4682b4",1)
      let v2 = createVote(46,12,"#4682b4",1)

      moveTo(b1.block,26,55,3000);
      moveTo(b2.block,66,55,3000);
      timers.push(setTimeout(()=>{
      let v3 = createVote(26,55,"#B0C4DE",1)
      let v4 = createVote(26,55,"#B0C4DE",1)
      moveTo(v1,26,55,3000)
      moveTo(v2,66,55,3000)
      moveTo(b3.block,46,12,3000);
      moveTo(b4.block,66,55,3000);
      timers.push(setTimeout(()=>{
        moveTo(v3,46,12,3000)
        moveTo(v4,66,55,3000)
      },200))
      
    },200))
      timers.push(setTimeout(()=>{

      createBlock(79,60, 40,30,"#4682b4", "black",1)
      createLine(76,50,79,60,"black")
      },3000))
      timers.push(setTimeout(()=>{
      createBlock(73,60, 40,30,"#B0C4DE", "black",1)
      createLine(76,50,73,60,"black")
      continueButton.style.display = "block";
      },3200))

    }, 600))
  }
  if(step == 28){
    creatRoot();
    timers = []
    let c1 = createWaitState(0, 46,12,50,"#4682b4","#4682b4",'X')
    let c2 = createWaitState(0, 26,55,50,"#d8e15f","#d8e15f",'X')
    let c3 = createWaitState(0, 66,55,50,"#B0C4DE","#B0C4DE",'X')
    let b0= createBlock(76,50, 40,30,"white", "gold",0)
    createBlock(79,60, 40,30,"#4682b4", "black",1)
    createLine(76,50,79,60,"black")
    createBlock(73,60, 40,30,"#B0C4DE", "black",1)
    createLine(76,50,73,60,"black")
    let p4 = createTextElement("因为都延长了最长认证链，节点会分别对它们进行投票",85,40,40)
    let v1 = createVote(46,12,"#B0C4DE",1)
    let v2 = createVote(46,12,"#B0C4DE",1)
    let v3 = createVote(66,55,"#B0C4DE",1)
    let v4 = createVote(66,55,"#B0C4DE",1)
    moveTo(v1,26,55,3000)
    moveTo(v2,66,55,3000)
    moveTo(v3,46,12,3000)
    moveTo(v4,26,55,3000)

    timers.push(setTimeout(()=>{
      let v1 = createVote(26,55,"#4682b4",1)
      let v2 = createVote(26,55,"#4682b4",1)
      let v3 = createVote(66,55,"#4682b4",1)
      let v4 = createVote(66,55,"#4682b4",1)
      moveTo(v1,46,12,3000)
      moveTo(v2,66,55,3000)
      moveTo(v3,46,12,3000)
      moveTo(v4,26,55,3000)
    }, 200))
    timers.push(setTimeout(()=>{
      scale(createBlock(79,60, 40,30,"#4682b4", "blue",1).block,1.3,1,600)
      p4.style.display = "none"
      p4 = createTextElement("两个区块都拿到了足够的票后，高度1出现了两个认证块",85,40,40)

    },3000))
    timers.push(setTimeout(()=>{
      scale(createBlock(73,60, 40,30,"#B0C4DE", "blue",1).block,1.3,1,600)
      continueButton.style.display = "block";
    },3200))
  }

  if(step == 29){
    creatRoot();
    timers = []
    let p4 = createTextElement("这种情况下，节点会选择其中一个区块进行延长",35,40,50)
    let p5 = createTextElement("这会导致分支的产生",45,40,50)
    continueButton.style.display = "block";
    fadeOut([p4,p5],600)
  }
  if(step == 30){
    creatRoot();
    timers = []
    let p4 = createTextElement("那么要如何消除分支呢",35,40,50)
    let p5 = createTextElement("EBFT给出了同步网络下和部分同步网络下的两个解决方案",45,40,50)
    continueButton.style.display = "block";
    fadeOut([p4,p5],600)
  }



  if(step==31){
    creatRoot();
    timers = []
    let c1 = createTimer(1,46,45,50,9000,"1","#d8e15f")
    timerStop()
    let p1 = createTextElement("同步网络下的EBFT,提出了定时器的概念",85,30,40)
    scale(c1.circle,0,3,600)
    timers.push(setTimeout(()=>{
      c1.startTimer(true)
      timerStart()
    },600))
    
    timers.push(setTimeout(()=>{
      let p2 = createTextElement("一个定时器会被分为3段，一段为一Δ，总共为3Δ",85,30,40)
      fadeIn([p1],600)
      fadeOut([p2],600)
      continueButton.style.display = "block";
    }, 2000))
  }

  if(step==32){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("那么1Δ时间意味着什么呢？",25,30,40)
    let p2 = createTextElement("1Δ是在同步网络下，节点之间信息传递的最大时间",35,30,40)
    
    let c1 = createTimer(1,26,55,50,9000,"1","#4682b4")
    let c2 = createTimer(1,66,55,50,9000,"1","#d8e15f")
    
    fadeOut([p1,p2,c1.circle,c2.circle],600)
    timers.push(setTimeout(()=>{
      c1.startTimer(true)
      let v1 = createVote(26,55,"#4682b4",1)
      moveTo(v1,66,55,3000)
      timerStart()
      timers.push(setTimeout(()=>{
        timerStop()
        continueButton.style.display = "block";
      },3000))
    }, 600))
  }

  if(step==33){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("定时器为节点提供了主动检测收敛机会的方法",25,30,40)
    let p2 = createTextElement("3Δ是为了让节点能够检测到当前高度的冲突区块",35,30,40)
    continueButton.style.display = "block";
    fadeOut([p1,p2],600)
  }

  if(step==34){
    step = 35
  }

  if(step==35){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("当一个节点拿到一个区块后，若同高度上没有冲突区块",85,30,30)
    let p2 = createTextElement("则为其添加一个定时器",90,30,30)
    let c1 = createTimer(1,16,55,50,9000,"1","#d8e15f")
    let c2 = createTimer(1,76,55,50,9000,"2","#B0C4DE")
    let c3 = createTimer(1,46,2,50,9000,"3","#4682b4")
    moveTo(c1.circle,26,55,600)
    moveTo(c2.circle,66,55,600)
    moveTo(c3.circle,46,12,600)
    let b0 =  createBlock(36,7, 40,30,"white", "gold",0)
    let b1 = createBlock(16,50, 40,30,"white", "gold",0)
    let b2 = createBlock(76,50, 40,30,"white", "gold",0 )
    fadeOut([p1,p2,c1.circle,c2.circle,c3.circle,b0.block,b1.block,b2.block],600)
    continueButton.style.display = "block";
  }
  
  if(step==36){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("此时节点1产生了一个高度为1的新区块",85,30,30)
    let p2 = createTextElement("因为没有产生冲突，所以为其添加一个定时器",90,30,30)
    let c1 = createTimer(1,26,55,50,9000,"1","#d8e15f")
    let c2 = createTimer(1,66,55,50,9000,"2","#B0C4DE")
    let c3 = createTimer(1,46,12,50,9000,"3","#4682b4")
    createBlock(36,7, 40,30,"white", "gold",0)
    createBlock(16,50, 40,30,"white", "gold",0)
    createBlock(76,50, 40,30,"white", "gold",0 )
    fadeOut([p1,p2],600)
    timers.push(setTimeout(() => {
      createBlock(16,60, 40,30,"#d8e15f", "black",1)
      createLine(16,50,16,60,"black")
      c1.startTimer(true)
      let b4 = createBlock(26,55, 40,30,"#d8e15f", "black",1)
      let b5 = createBlock(26,55, 40,30,"#d8e15f", "black",1)
      moveTo(b4.block,66,55,2600)
      moveTo(b5.block,46,12,2600)
      timerStart()
      timers.push(
        setTimeout(()=>{
          let v1 = createVote(26,55,"#d8e15f",1)
          let v2 = createVote(26,55,"#d8e15f",1)
          moveTo(v1,66,55,2600)
          moveTo(v2,46,12,2600)
        }
      ,200))
      //第一轮区块到达
      timers.push(setTimeout(()=>{
        createBlock(76, 60, 40,30,"#d8e15f","black",1)
        createBlock(36,17,40,30,"#d8e15f","black",1)
        createLine(76,60,76,50,"black")
        createLine(36,17,36,7,"black")
        fadeIn([c2.circle,c3.circle],10)
        c2 = createTimer(1,66,55,50,9000,"2","#B0C4DE")
        c3 = createTimer(1,46,12,50,9000,"3","#4682b4")
        c2.startTimer(true)
        c3.startTimer(true)
      },2600))
      //第一轮投票到达
      timers.push(setTimeout(()=>{
        timerStop()
        fadeIn([p1,p2],500)
        p1 = createTextElement("此时节点1产生了一个高度为1的新区块",85,30,30)
        p2 = createTextElement("因为没有产生冲突，所以为其添加一个定时器",90,30,30)
        fadeOut([p1,p2],600)
        timers.push(setTimeout(()=>{
          fadeIn([p1,p2],500)
          p1 = createTextElement("在第一个Δ结束前",85,30,30)
          p2 = createTextElement("区块传播到了所有的节点",90,30,30)
          fadeOut([p1,p2],600)
          timers.push(setTimeout(()=>{
            fadeIn([p1,p2],500)
            p1 = createTextElement("因此，所有节点都会为其添加定时器",85,30,30)
            p2 = createTextElement("并且开始进行对该区块的投票",90,30,30)
            v1 = createVote(66,55,"#d8e15f",1)
            v2 = createVote(66,55,"#d8e15f",1)
            v3 = createVote(46,12,"#d8e15f",1)
            v4 = createVote(46,12,"#d8e15f",1)
            moveTo(v1,46,12,2600)
            moveTo(v2,26,55,2600)
            moveTo(v3,66,55,2600)
            moveTo(v4,26,55,2600)
            timerStart()
            timers.push(setTimeout(()=>{
              timerStop()
              fadeIn([p1,p2],500)
              scale(createBlock(76, 60, 40,30,"#d8e15f","blue",1).block, 1.3,1,600)
              scale(createBlock(36,17,40,30,"#d8e15f","blue",1).block, 1.3,1,600)
              scale(createBlock(16,60, 40,30,"#d8e15f", "blue",1).block, 1.3,1,600)

              p1 = createTextElement("2Δ结束前，所有投票都会处理完毕，此时区块在所有节点都被认证",85,30,30)
              p2 = createTextElement("因为LCCR,不会再有高度为1的区块被提出",90,30,30)
              fadeOut([p1,p2],600)
              timers.push(setTimeout(()=>{
                timerStart()
                fadeIn([p1,p2],500)
                p1 = createTextElement("等到定时器结束，节点就认为这是一个收敛的机会",85,30,30)
                p2 = createTextElement("节点会把该区块以及其未提交的祖先区块都进行提交",90,30,30)
                fadeOut([p1,p2],600)
                timers.push(setTimeout(()=>{
                  createBlock(16,60, 40,30,"#d8e15f", "gold",1)
                },3400))
                timers.push(setTimeout(()=>{
                  createBlock(76, 60, 40,30,"#d8e15f","gold",1)
                  createBlock(36,17,40,30,"#d8e15f","gold",1)
                  continueButton.style.display = "block";
                },6200))
              },4000))
            },2600))

            fadeOut([p1,p2],600)
          },4000))
        },600))


      },2800))
    },300))
  }


  if(step == 37){
    creatRoot();
    timers = []
    timerStop()
    p1 = createTextElement("由于2Δ结束前，所有投票都会处理完毕，此时区块在所有节点都被认证",25,30,30)
    p2 = createTextElement("所以冲突块只会在2Δ前出现，并在3Δ前被所有节点检测到",35,30,30)
    fadeOut([p1,p2],600)
    continueButton.style.display = "block";
  }

  if(step == 38){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("节点接收到新区块，为其添加定时器",25,30,30)
    fadeOut([p1],600)
    let c1 = createTimer(1,26,55,50,9000,"1","#d8e15f")
    moveTo(c1.circle,45,55,500)
    timers.push(setTimeout(()=>{
      scale(c1.circle,1,2,500)
    },500))
    timers.push(setTimeout(()=>{
      let b1 = createBlock(75,55, 40,30,"#B0C4DE", "black",1 )
      fadeOut([b1.block],1200)
      scale(b1.block, 1, 2, 1200)
      moveTo(b1.block,45,55,2000)
      timers.push(setTimeout(()=>{
        timerStart()
        c1.startTimer(true)
        let b2 = createBlock(75,55, 40,30,"#4682b4", "black",1 )
        scale(b2.block, 1, 2, 1200)
        moveTo(b2.block,45,55,2000)
        timers.push(setTimeout(()=>{
          c1.stopTime = currentTime
            let p2 = createTextElement("定时器结束前检测到冲突区块，则取消定时器",35,30,30)
            fadeOut([p2],600)
          timers.push(setTimeout(()=>{

            c1.outerCircle.style.strokeDasharray = ""
            c1.cancel()
            continueButton.style.display = "block";
          },4000))
        },2000))

      },1800))
    },600))
  }



  if(step == 39){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("当冲突区块不断产生时",82,30,30)
    let p2 = createTextElement("整个系统产生分叉",90,30,30)
    let b0 = createBlock(50,7, 40,30,"white", "gold",0)
    scale(b0.block,1,2,600)
    let b1,b2,b3,b4,b5,b6,b7;
    let l1,l2,l3,l4,l5,l6,l7;

    timers.push(setTimeout(()=>{
      b1 = createBlock(60, 32, 40,30,"#d8e15f","blue",1)
      b2 = createBlock(40,32,40,30,"#B0C4DE","blue",1)
      scale(b1.block,1,2,600)
      scale(b2.block,1,2,600)
      timers.push(setTimeout(()=>{
        l1 = createLine(50,7,60,22,"black")
        l2 = createLine(50,7,40,22,"black")
      },600))
      fadeOut([b1.block,b2.block],600)
      moveTo(b1.block,60,22,600)
      moveTo(b2.block,40,22,600)

    },600))

    timers.push(setTimeout(()=>{
      b3 = createBlock(70,47, 40,30,"#d8e15f", "blue",2)
      b4 = createBlock(30,47, 40,30,"#4682b4", "blue",2)
      scale(b3.block,1,2,600)
      scale(b4.block,1,2,600)
      timers.push(setTimeout(()=>{
        l3 = createLine(60,22,70,37,"black")
        l4 = createLine(40,22,30,37,"black")
      },600))
      fadeOut([b3.block,b4.block],600)
      moveTo(b3.block,70,37,600)
      moveTo(b4.block,30,37,600)

    },2000))
    timers.push(setTimeout(()=>{
      b5 = createBlock(60,42, 40,30,"#B0C4DE", "blue",3)
      b6 = createBlock(80,42, 40,30,"#d8e15f", "blue",3)
      scale(b5.block,1,2,600)
      scale(b6.block,1,2,600)
      timers.push(setTimeout(()=>{
        l5 = createLine(70,37,60,52,"black")
        l6 = createLine(70,37,80,52,"black")
      },600))
      moveTo(b5.block, 60, 52,600)
      moveTo(b6.block,80, 52,600)
      fadeOut([b5.block,b6.block],600)

    },3000))
    timers.push(setTimeout(()=>{
      b7 = createBlock(70,67 , 40,30,"#4682b4", "blue",4)
      scale(b7.block,1,2,600)
      let c1 = createTimer(1,60,67,50, 3400 ,"","#4682b4")
      scale(c1.circle,1,0.5,600)

      timers.push(setTimeout(()=>{
        l7 = createLine(60,52,70,67,"black")
        timerStart()
        c1.startTimer(true)
      },600))

    },4000))




    timers.push(setTimeout(()=>{
      fadeIn([p1,p2],600)
      p1 = createTextElement("而当节点通过定时器检测到收敛机会时",82,30,30)
      p2 = createTextElement("节点会把该区块以及其未提交的祖先区块都进行提交,从而消除分支",90,30,30)
      fadeOut([p1,p2],600)
      timers.push(setTimeout(()=>{
      b7.innerCircle.setAttribute("stroke", "gold");
      scale(b7.block,2.3,2,600)
    },600))
    timers.push(setTimeout(()=>{
      b5.innerCircle.setAttribute("stroke", "gold");
      fadeIn([b6.block, l6],600)
      scale(b5.block,2.3,2,600)
    },2000))
    timers.push(setTimeout(()=>{
      b3.innerCircle.setAttribute("stroke", "gold");
      fadeIn([b4.block, l4],600)
      scale(b3.block,2.3,2,600)
    },3000))
    timers.push(setTimeout(()=>{
      b1.innerCircle.setAttribute("stroke", "gold");
      fadeIn([b2.block, l2],600)
      scale(b1.block,2.3,2,600)
      continueButton.style.display = "block";
    },4000))
    
    },8000))
  }

  //在部分同步网络下，节点无法通过定时器检测到冲突区块，因此需要另一种方法来消除分支
  if(step == 40){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("在部分同步网络下，节点无法通过定时器检测到冲突区块",35,30,30)
    let p2 = createTextElement("因此需要另一种方法来消除分支",45,30,30)
    fadeOut([p1,p2],600)
    continueButton.style.display = "block";

  }
  //在部分同步网络下，节点在本地视图中存在某个高度上唯一的认证区块时
  //会发起一轮区块唯一性证明的投票
  //左边为普通的投票，右边为唯一性证明的投票

  if(step == 41){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("节点在本地视图中存在某个高度上唯一的认证区块时",35,30,30)
    let p2 = createTextElement("会发起一轮区块唯一性证明的投票用以检测收敛",45,30,30)
    fadeOut([p1,p2],600)
    continueButton.style.display = "block";
  }

  if(step == 42){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("我们使用另一种样式代表唯一性投票",35,30,30)
    let p2 = createTextElement("左边为普通的投票，右边的是唯一性投票",45,30,30)
    fadeOut([p1,p2],1000)
    moveTo(p1, 0, 20, 600)
    moveTo(p2, 0, 30, 600)
    timers.push(setTimeout(()=>{
      let v = createVote(6,45,"#B0C4DE",1)
      let v1 = createVote(84,45,"#B0C4DE",1, "red")
      moveTo(v,30,45,1000)
      moveTo(v1,60,45,1000)
      timers.push(setTimeout(()=>{
        scale(v,1,3,600)
        scale(v1,1,3,600)
      },1000))
      continueButton.style.display = "block";

    }, 1000))

  }

  if(step == 43){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("节点在本地视图中存在某个高度上唯一的认证区块时",20,30,30)
    let p2 = createTextElement("会发起一轮区块唯一性证明的投票用以检测收敛",30,30,30)

    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,60, 40,30,"white", "gold",0)
    let b1, b2
    fadeOut([p1,p2, c1.circle, b0.block],600)
    //moveTo(p1, 0, 20, 600)
    //moveTo(p2, 0, 30, 600)
    timers.push(setTimeout(()=>{
      fadeIn([p1,p2],600)
      p1 = createTextElement("节点首先进行正常的区块认证流程",20,30,30)
      p2 = createTextElement("接收区块与投票对区块进行认证",30,30,30)
      fadeOut([p1,p2],600)
      b1 = createBlock(26, 45, 40,30,"#B0C4DE", "black",1)
      moveTo(b1.block,46,45,1500)
      fadeOut([b1.block],600)
      timers.push(setTimeout(()=>{
        b2 = createBlock(46, 70, 40,30,"#B0C4DE", "black",1)
        let l1 = createLine(46,70,46,60,"black")
        fadeOut([b2.block, l1],600)

        timers.push(setTimeout(()=>{
          let v1 = createVote(26,25,"#B0C4DE",1)
          let v2 = createVote(66,65,"#B0C4DE",1)
          let v3 = createVote(66,45,"#B0C4DE",1)
          let v4 = createVote(46,25,"#B0C4DE",1)
          let v5 = createVote(46,45,"#B0C4DE",1)
          let v6 = createVote(46,45,"#B0C4DE",1)
          let v7 = createVote(46,45,"#B0C4DE",1)
          let v8 = createVote(46,45,"#B0C4DE",1)
          moveTo(v1,46,45,1500)
          moveTo(v2,46,45,1500)
          moveTo(v3,46,45,1500)
          moveTo(v4,46,45,1500)
          moveTo(v5,26,25,1500)
          moveTo(v6,66,65,1500)
          moveTo(v7,46,25,1500)
          moveTo(v8,66,45,1500)
          fadeOut([v1,v2,v3,v4],600)
          timers.push(setTimeout(()=>{
            fadeIn([v5,v6,v7,v8], 600)
          },900))
          timers.push(setTimeout(()=>{
            b2.innerCircle.setAttribute("stroke", "blue");
            scale(b2.block,1.3,1,600)
            continueButton.style.display = "block";
          }, 1500))
        }, 2500))
      },1500))

    }, 3000))

  }

  if(step === 44){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("节点发现高度1的认证块是唯一的",20,30,30)
    fadeOut([p1],600)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,60, 40,30,"white", "gold",0)
    let b2 = createBlock(46, 70, 40,30,"#B0C4DE", "blue",1)
    let l1 = createLine(46,70,46,60,"black")
    timers.push(setTimeout(()=>{
      let p2 = createTextElement("则为该区块发出唯一性证明的投票",30,30,30)
      fadeOut([p2],600)
      
      let v1 = createVote(46,45,"#B0C4DE",1,"red")
      let v2 = createVote(46,45,"#B0C4DE",1,"red")
      let v3 = createVote(46,45,"#B0C4DE",1,"red")
      let v4 = createVote(46,45,"#B0C4DE",1,"red")
      moveTo(v1,26,25,1200)
      moveTo(v2,66,65,1300)
      moveTo(v3,46,25,1400)
      moveTo(v4,66,45,1500)
      timers.push(setTimeout(()=>{
        fadeIn([v1,v2,v3,v4], 600)
        continueButton.style.display = "block";
      },900))
    }, 600))
  }

  if(step === 45){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("发出唯一认证投票的节点将不再会对高度为1的区块进行投票",20,30,30)
    fadeOut([p1],600)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,60, 40,30,"white", "gold",0)
    let b2 = createBlock(46, 70, 40,30,"#B0C4DE", "blue",1)
    let l1 = createLine(46,70,46,60,"black")

    timers.push(setTimeout(()=>{
      let b2 = createBlock(26, 45, 40,30,"#d8e15f", "black",1)
      fadeOut([b2.block],600)
      moveTo(b2.block,46,45,1000)
      timers.push(setTimeout(()=>{
        let b3 = createBlock(50, 70, 40,30,"#d8e15f", "black",1)
        let l2 = createLine(50,70,46,60,"black")
        continueButton.style.display = "block";
      }, 1000))
    }, 600))
  }

  if(step === 46 ){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("其他节点对该区块的唯一性证明也会陆续到达",20,30,30)
    fadeOut([p1],600)
    let c1 = createWaitState(0, 46,45,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,60, 40,30,"white", "gold",0)
    let b2 = createBlock(46, 70, 40,30,"#B0C4DE", "blue",1)
    let l1 = createLine(46,70,46,60,"black")
    let b3 = createBlock(50, 70, 40,30,"#d8e15f", "black",1)
    let l2 = createLine(50,70,46,60,"black")
    timers.push(setTimeout(()=>{
      let v1 = createVote(26,25,"#B0C4DE",1, "red")
      let v2 = createVote(66,65,"#B0C4DE",1 , "red")
      let v3 = createVote(66,45,"#B0C4DE",1, "red")
      let v4 = createVote(46,25,"#B0C4DE",1, "red")
      moveTo(v1,46,45,2000)
      moveTo(v2,46,45,2000)
      moveTo(v3,46,45,2000)
      moveTo(v4,46,45,2000)
      fadeOut([v1,v2,v3,v4], 600)
      timers.push(setTimeout(()=>{
        let p2 = createTextElement("在收集了足够多的唯一性证明后，节点可以认为这是一个收敛机会，将区块进行提交",30,30,30)
        fadeOut([p2],600)
        continueButton.style.display = "block";
        timers.push(setTimeout(()=>{
          b2.innerCircle.setAttribute("stroke", "gold");
          scale(b2.block,1.7,1,600)
          fadeIn([b3.block, l2],600)
        }, 1000))
      }, 1000))  
    }, 600))
  }

  if(step === 47){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("而为了使投票更高效，唯一性投票被推迟到了对其子块的投票处理上",20,30,30)
    fadeOut([p1],600)
    continueButton.style.display = "block";
  }

  if (step == 48){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("具体来说，对区块的投票分为了两种",20,30,30)
    fadeOut([p1],600)
    timers.push(setTimeout(()=>{
      let p1 = createTextElement("一种是证明投票(witness vote)",30,30,30)
      createVote(46,45,"#B0C4DE",1)
      scale(createVote(46,45,"#B0C4DE",1),1,4,600)
      fadeOut([p1],600)
      continueButton.style.display = "block";
    },1200))
  }

  if (step == 49){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("具体来说，对区块的投票分为了两种",20,30,30)
    let p2 = createTextElement("一种是提交投票(commit vote)",30,30,30)
    fadeOut([p2],600)
    let v1 = createVote(46,45,"#B0C4DE",1)
    scale(v1,4,4,600)
    timers.push(setTimeout(()=>{
        moveTo(v1,36,45,600)
        let v2 = createVote(46,45,"#B0C4DE",1, "red")
        scale(v2,1,4,600)
        moveTo(v2,56,45,600)
      continueButton.style.display = "block";
    },10))
  }

  if (step == 50){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("节点会根据区块的父区块情况来选择发送的投票类型",70,30,30)
    let p2 = createTextElement("不同的投票会有不同的效果",80,30,30)

    let c1 = createWaitState(0, 46,15,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,30, 40,30,"white", "gold",0)
    let b1, b2,b3,b4
    b3 = createBlock(40, 40, 40,30,"#B0C4DE", "blue",1)
    b4 = createBlock(52, 40, 40,30,"#d8e15f", "blue",1)
    let l1 = createLine(46,30,40,40,"black")
    let l2 = createLine(46,30,52,40,"black")
    fadeOut([p1,p2, c1.circle, b0.block, l1,l2, b3.block, b4.block],600)
    //moveTo(p1, 0, 20, 600)
    //moveTo(p2, 0, 30, 600)
    timers.push(setTimeout(()=>{
      fadeIn([p1,p2],600)
      p1 = createTextElement("节点首先进行正常的区块认证流程",70,30,30)
      p2 = createTextElement("因为区块的父区块在高度上不唯一，所以发送witVote",80,30,30)
      fadeOut([p1,p2],600)
      b1 = createBlock(26, 15, 40,30,"#B0C4DE", "black",1)
      moveTo(b1.block,46,15,1500)
      fadeOut([b1.block],600)
      timers.push(setTimeout(()=>{
        b2 = createBlock(46, 50, 40,30,"#B0C4DE", "black",2)
        let l1 = createLine(46,50,40,40,"black")
        fadeOut([b2.block, l1],600)

        timers.push(setTimeout(()=>{
          let v1 = createVote(26,5,"#B0C4DE",2)
          let v2 = createVote(66,35,"#B0C4DE",2)
          let v3 = createVote(66,15,"#B0C4DE",2)
          let v4 = createVote(46,5,"#B0C4DE",2)
          let v5 = createVote(46,15,"#B0C4DE",2)
          let v6 = createVote(46,15,"#B0C4DE",2)
          let v7 = createVote(46,15,"#B0C4DE",2)
          let v8 = createVote(46,15,"#B0C4DE",2)
          moveTo(v1,46,15,1500)
          moveTo(v2,46,15,1500)
          moveTo(v3,46,15,1500)
          moveTo(v4,46,15,1500)
          moveTo(v5,26,5,1500)
          moveTo(v6,66,35,1500)
          moveTo(v7,46,5,1500)
          moveTo(v8,66,15,1500)
          fadeOut([v1,v2,v3,v4],600)
          timers.push(setTimeout(()=>{
            fadeIn([v5,v6,v7,v8], 600)
          },900))
          timers.push(setTimeout(()=>{
            b2.innerCircle.setAttribute("stroke", "blue");
            scale(b2.block,1.3,1,600)
            continueButton.style.display = "block";
          }, 1500))
        }, 2500))
      },1500))

    }, 3000))
  }

  if(step == 51){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("此时区块在其高度上唯一，但是节点不会进行唯一性投票",70,30,30)
    let p2 = createTextElement("而是会等待其子区块出现",80,30,30)

    let c1 = createWaitState(0, 46,15,50,"#4682b4","#4682b4",'X')
    let b0 = createBlock(46,30, 40,30,"white", "gold",0)
    let b1, b2,b3,b4
    b3 = createBlock(40, 40, 40,30,"#B0C4DE", "blue",1)
    b4 = createBlock(52, 40, 40,30,"#d8e15f", "blue",1)
    b2 = createBlock(46, 50, 40,30,"#B0C4DE", "blue",2)
    let l1 = createLine(46,50,40,40,"black")
    let l2 = createLine(46,30,40,40,"black")
    let l3 = createLine(46,30,52,40,"black")
    fadeOut([p1,p2],600)

    timers.push(setTimeout(()=>{
      fadeIn([p1,p2],600)
      p1 = createTextElement("子区块出现，因其父区块高度上唯一",70,30,30)
      p2 = createTextElement("发出comVote, 同时其他节点也会发送对该comVote",80,30,30)
      fadeOut([p1,p2],600)
      b1 = createBlock(26, 15, 40,30,"#B0C4DE", "black",1)
      moveTo(b1.block,46,15,1500)
      fadeOut([b1.block],600)
      timers.push(setTimeout(()=>{
        b5 = createBlock(46, 60, 40,30,"#B0C4DE", "black",3)
        let l1 = createLine(46,50,46,60,"black")
        fadeOut([b2.block, l1],600)

        timers.push(setTimeout(()=>{
          let v1 = createVote(26,5,"#B0C4DE",3,"red")
          let v2 = createVote(66,35,"#B0C4DE",3,"red")
          let v3 = createVote(66,15,"#B0C4DE",3,"red")
          let v4 = createVote(46,5,"#B0C4DE",3,"red")
          let v5 = createVote(46,15,"#B0C4DE",3,"red")
          let v6 = createVote(46,15,"#B0C4DE",3,"red")
          let v7 = createVote(46,15,"#B0C4DE",3,"red")
          let v8 = createVote(46,15,"#B0C4DE",3,"red")
          moveTo(v1,46,15,1500)
          moveTo(v2,46,15,1500)
          moveTo(v3,46,15,1500)
          moveTo(v4,46,15,1500)
          moveTo(v5,26,5,1500)
          moveTo(v6,66,35,1500)
          moveTo(v7,46,5,1500)
          moveTo(v8,66,15,1500)
          fadeOut([v1,v2,v3,v4],600)
          timers.push(setTimeout(()=>{
            fadeIn([v5,v6,v7,v8], 600)
          },900))
          timers.push(setTimeout(()=>{
            b5.innerCircle.setAttribute("stroke", "blue");
            scale(b5.block,1.3,1,600)
            
            timers.push(setTimeout(()=>{
              fadeIn([p1,p2],600)
              p1 = createTextElement("该区块收集到了足够多的comVote",70,30,30)
              p2 = createTextElement("在认证的同时，对其父区块进行提交",80,30,30)
              fadeOut([p1,p2],600)
              timers.push(setTimeout(()=>{
                b2.innerCircle.setAttribute("stroke", "gold");
                timers.push(setTimeout(()=>{
                  b3.innerCircle.setAttribute("stroke", "gold");
                  scale(b3.block,1.7,1,600)
                  fadeIn([b4.block, l3],600)
                  continueButton.style.display = "block";
                },1000))
                scale(b2.block,1.7,1,600)
              }, 1000))

            }, 2000))

          }, 1500))
        }, 2500))
      },1500))

    }, 3000))
  }

  if(step == 52){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("以上就是EBFT共识算法在同步网络和部分同步网络下的共识流程",30,30,30)
    let p2 = createTextElement("但是需要注意的是，为了简化起见，流程中区块认证所需的投票数量都设置为了节点的总量",40,30,30)
    continueButton.style.display = "block";
    fadeOut([p1,p2],600)
    but
  }
  if(step == 53){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("而实际上，假设一个系统中有f个拜占庭节点",20,30,30)
    fadeOut([p1],600)
    timers.push(setTimeout(()=>{
    let p2 = createTextElement("那么同步网络下需要的投票数量不应该少于f+1",30,30,30)
    fadeOut([p2],600)
    },600))
    timers.push(setTimeout(()=>{
    let p3 = createTextElement("部分同步网络下需要的投票数量不应该少于2f+1",40,30,30)
    continueButton.style.display = "block";
    fadeOut([p3],600)
    },1200))
  }

  if(step == 54){
    creatRoot();
    timers = []
    timerStop()
    let p1 = createTextElement("感谢观看！",30,30,60)

    fadeOut([p1,p2,p3,p4],600)
    continueButton.style.display = "block";
  }



  //
  
}


function continueButtonFunction(){
  step++;
  run();

}

function reRun(){
  run();
}

function back(){
  step--;
  run();
}



function fadeIn(elements, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      // 计算动画的进度
      var progress = (time - start) / duration;
      // 更新元素的透明度
      for(let i in elements){
          elements[i].style.opacity = Math.max(1 - progress, 0);
      } 
  
      // 如果动画还没有结束，继续下一帧
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    });
}

function fadeOut(elements, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      // 计算动画的进度
      var progress = (time - start) / duration;
  
      // 更新元素的透明度
      for(let i in elements){
        elements[i].style.opacity = Math.min(progress, 1);
    } 
  
      // 如果动画还没有结束，继续下一帧
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    });
}


function moveTo(element, x, y, duration, callback) {
    // 获取元素的初始位置
    console.log(element)
    var startX = parseInt(element.style.left.replace("%",""));
    var startY = parseInt(element.style.top.replace("%",""));
    // 计算每一帧的移动距离
    var deltaX = (x - startX) / duration;
    var deltaY = (y - startY) / duration;
    // 获取动画开始的时间
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // 计算动画的进度

      var progress = (time - start) / duration;
      // 更新元素的位置
      element.style.left = (startX + (x - startX) * progress) + '%';
      element.style.top = (startY +(y - startY) * progress) + '%';

      // 如果动画还没有结束，继续下一帧
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // 动画结束，调用回调函数
        if (callback) {
          callback();

        }
      }
    });
}

function scale(element ,start, end, time){
    start = 'scale('+start+')'
    end = 'scale('+end+')'
    return element.animate([
        // 开始状态
        { transform: start },
        
        // 结束状态
        { transform: end }
      ], {
        // 动画持续时间
        duration: time,
        // 动画结束后保持最后一帧
        fill: 'forwards'
      });
}

function reverseAnimation(animation,time) {
  // 获取当前的播放速度
  var playbackRate = animation.playbackRate;

  // 如果当前的播放速度是正数，将其改为负数
  if (playbackRate > 0) {
    animation.playbackRate = -1;
  }

  // 设置动画的持续时间为5秒
  animation.effect.getTiming().duration = time;

  // 重新开始动画
  animation.play();
}

function creatRoot(){

  document.getElementById("root1").removeChild(document.getElementById("root"));

  for (let i in timers){
    clearInterval(timers[i])
  }
  // 创建一个div元素
  var div = document.createElement("div");

// 设置id属性
  div.setAttribute("id", "root");

// 设置style属性
  div.setAttribute("style", "height: 87%; width: 100%; background-color: #d9ebf3;");

// 将div元素添加到文档的body中

document.getElementById("root1").insertBefore(div,document.getElementById("root2"));

}

function timerStart(){        
  globalTimer = setInterval(() => {
  currentTime += 10;
  trueTime += 10;
}, 10);
}
function timerStop(){
  clearInterval(globalTimer);
}