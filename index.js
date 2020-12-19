var level =1;
var sequence =[];
var player=[];
var start = false;



$(document).keypress( function(){
	if(!start)
	{
		start=true;
		drawPattern();
	}
})

$("head-cls").on("click", function(){
	if(!start)
	{
		start=true;
		drawPattern();
	}
})



$(".btn").on("click",function(e){
	
		var btnId=$(this).attr('id');
		
		$("#"+ btnId).addClass("pressed");
		playSound(btnId);
		
	
		if(btnId == "btn-grn")
			player = player + "1";
		else if(btnId == "btn-red")
			player = player + "2";
		else if(btnId == "btn-ylw")
			player = player + "3";
		else if(btnId == "btn-blu")
			player = player + "4";
		
		setTimeout(function (){
			$("#"+ btnId).removeClass("pressed");
		},100);
		
		
		checkWin(player.length-1);
	
	})




function drawPattern(){
	
	$("h1").html("LEVEL - " + level);
	
	var random = Math.floor(Math.random()*4)+1;  // generates a number between 1-4
	sequence = sequence + random;
	
	$("h1").css("color", "red");
	
		if(sequence[level-1]=='1')
			targetClass = ".grn";
		else if(sequence[level-1]=='2')
			targetClass = ".red";
		else if(sequence[level-1]=='3')
			targetClass = ".ylw";
		else if(sequence[level-1]=='4')
			targetClass = ".blu";
		
		$(targetClass).addClass("pressed");
		
		setTimeout(function (){
			$(targetClass).removeClass("pressed");
		},100);
	
	$("h1").css("color", "#FEF2BF");
	
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
  }

function checkWin(a){
	
	if(player[a]==sequence[a])
	{
		if(player == sequence)
		{
			level++;
			player=[];
			setTimeout(function(){
				drawPattern();
			},1000);
		}
	}
	else {
		player=[];
		$("h1").text("You lose");
		const w = "wrong";
		playSound(w);
		$("body").addClass("game-over");

		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		startOver();
	}
}

function startOver(){
	level=1;
	start=false;
	sequence=[];
}










