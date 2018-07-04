var flag = 0;	//全局变量，控制开始和停止
var timer;	//计时器定义
function loopRetcColor() {
	//只在没有开始循环的时候开始循环
	if (flag == 0) {
		flag = 1;
		clearInterval(timer);	//每次循环开始前必须清零计时器
		timer = setInterval("btnStart()",1000);		//每秒循环
	}
	if (flag == 1){
		//若正在循环，则不再一次执行setInterval语句。否则会对计时器进行加速
	}
}
function btnStart() {
	if (flag == 1){
		var COUNT = 9;	//随机数范围
		var originalArr = new Array;	//原数组 
		//给原数组originalArr赋值 
		for (var i = 0; i <= COUNT - 1; i++){ 
			originalArr[i] = i; 
		}
		//从原数组取出一个数, 然后让原数组的这个位置赋值为null
		//下一次取数时判断是否为null, 如果是null就不取
		var Arr = new Array;
		for (var num, i = 0; i < COUNT; i++){ 
			do{
				num = Math.floor(Math.random()*COUNT); 
			} while(originalArr[num] == null); 
			Arr[i] = originalArr[num];
			originalArr[num] = null; 
		}
		// 给方块填色
		document.getElementById("Arr").innerHTML = "Arr: " + Arr;
	//	document.getElementById("index").innerHTML = (originalArr[0]+"，"+originalArr[1]+"，"+originalArr[2]); 
		document.getElementById("retc"+Arr[0]).style.backgroundColor = "red";
		document.getElementById("retc"+Arr[1]).style.backgroundColor = "red";
		document.getElementById("retc"+Arr[2]).style.backgroundColor = "red";

		for(var i = 3; i <= 8; i++){
			document.getElementById("retc"+Arr[i]).style.backgroundColor = "#fea600";
		}
		// document.getElementById("retc"+Arr[3]).style.backgroundColor = "#fea600";
		// document.getElementById("retc"+Arr[4]).style.backgroundColor = "#fea600";
		// document.getElementById("retc"+Arr[5]).style.backgroundColor = "#fea600";
		// document.getElementById("retc"+Arr[6]).style.backgroundColor = "#fea600";
		// document.getElementById("retc"+Arr[7]).style.backgroundColor = "#fea600";
		// document.getElementById("retc"+Arr[8]).style.backgroundColor = "#fea600";
	}
}

function btnStop() {
	clearInterval(timer);
	if (flag == 1) {
		flag = 0;
	}
	if(flag == 0) {
		for (var i = 0; i <= 8; i++) {
			document.getElementById("retc" + i).style.backgroundColor = "#fea600";
		}
	}
}