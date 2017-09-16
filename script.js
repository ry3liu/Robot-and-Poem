$(document).ready(function(){
	
		var height=$("#race").height();
		//alert(height);
	
		var heightWindow=$(window).height()/2;
		
		var robot1Width=$("#robot1").width();
		var robot2Width=$("#robot2").width();
		var robot1Height=$("#robot1").height();
		var robot2Height=$("#robot2").height();
		
		
		var fullTrackWidth=$(window).width()-(250*3);
		
		var leftEnd=50;
		var rightEndRobot1=$(window).width()-robot1Width;
		var rightEndRobot2=$(window).width()-robot2Width;
		
		var upEnd=250; //since the very top is 0
		var time1=Math.floor(((Math.random()+1)*1000));//Math.random gives [0,1)
		var time2=Math.floor(((Math.random()+1)*1000));
		var done=false;
		var m=$("#robot1").position();
		var topMove1=m.top;
		var j=$("#robot1").position();
		var topMove2=j.top;		var halfWidth=$(window).width()/2;	
		$("#gateTop").css("left",(halfWidth-200));
		$("#poetry1").hide();
		$("#poetry2").hide();

		var place="first";
		
		
	
		
		function decidePlace(){
			if(!done){
				place="first";
				done=true;
			}
			else{
				place="second";
			}
		}
		
		
		function clearInfo(){
			$("#raceInfo p").text("");
		}
		
		
		
		function winner(place,who){
					
				var coloring="#FF0000";
				if(place=="first"){
					
					$("#raceInfo span").text((": "+who + " is the winner!").toUpperCase());
						if(who=="robot1"){
							coloring="#2c3eed";
							$("#poetry1").show();
							$("#poetry2").hide();
						}
						else if(who =="robot2"){
							$("#poetry2").show();
							$("#poetry1").hide();
						}
					
					$("#raceInfo span").css("color", coloring);
				}
		}
		
		
		function necessaryInfo(){
		time1=Math.floor(((Math.random()+1)*1000));//Math.random gives [0,1)
		time2=Math.floor(((Math.random()+1)*1000));
		done=false;
		clearInfo();
		fullTrackWidth=$(window).width()-(250*3);
		halfWidth=$(window).width()/2;
		rightEndRobot1=$(window).width()-robot1Width;
		rightEndRobot2=$(window).width()-robot2Width;
		
		$("#gateTop").css("left",(halfWidth-200));
		}
		
	$("#go").click(
	function(){
		necessaryInfo();
		
		//if click go, go right
		$("#robot1").animate(
		{
			left:rightEndRobot1
		},time1,
			function(){
				decidePlace();
				var identity="robot1";
				winner(place,identity);
				$("#robot1Info p").text("Robot 1 finished "+ place +" place" + " at "+time1+" ms");
			
					});
					
					
		$("#robot2").animate(
		{
			left:rightEndRobot2
		},time2,
			function(){
				decidePlace();
				var identity="robot2";
				winner(place,identity);
				$("#robot2Info p").text("Robot 2 finished "+ place +" place" + " at "+time2+" ms");
			
					});
		
		
	});
	
	
	/*CLICK THE LEFT ERROR*/
	
	$("#left").click(
	function(){
		necessaryInfo();
		var k=$("#robot1").position();
		if(k.top>=200)
		{
		$("#robot2").animate({
			left:0
		},time2, function(){
			
			decidePlace();
			var identity="robot2";
			winner(place,identity);
				$("#robot2Info p").text("Robot 2 finished "+ place +" place" + " at "+time2+" ms");
			
			
		});
		
		$("#robot1").animate(
		{
			left:0
		},time1,
			function(){
				decidePlace();
				var identity="robot1";
				winner(place,identity);
				$("#robot1Info p").text("Robot 1 finished "+ place +" place" + " at "+time1+" ms");
			
					});
					
	}	
		
	});
	
	
	/*CLICK THE RIGHT ERROR*/
	$("#right").click(
		function(){
		necessaryInfo();
		var k=$("#robot1").position();
		if(k.top>=topMove1){
		
		//if click go, go right
		$("#robot1").animate(
		{
			left:rightEndRobot1
		},time1,
			function(){
				decidePlace();
				var identity="robot1";
				winner(place,identity);
				$("#robot1Info p").text("Robot 1 finished "+ place +" place" + " at "+time1+" ms");
			
					});
					
					
		$("#robot2").animate(
		{
			left:rightEndRobot2
		},time2,
			function(){
				decidePlace();
				var identity="robot2";
				winner(place,identity);
				$("#robot2Info p").text("Robot 2 finished "+ place +" place" + " at "+time2+" ms");
			
					});
		
		}
			
		});
		/*CLICK THE UP ERROR*/
		$("#up").click(
		function(){
		necessaryInfo();
			
		//if click go, go right
		$("#robot1").animate({
			left:rightEndRobot1/2
		},(time1/2));
		
		$("#robot1").delay(150).animate(
		{
			
			top:-topMove1
			
		},time1/2,
			function(){
				decidePlace();
				var identity="robot1";
				winner(place,identity);
				$("#robot1Info p").text("Robot 1 finished "+ place +" place" + " at "+(time1+150)+" ms");
			
					});
					
				
		$("#robot2").animate({
			left:rightEndRobot2/2
		});
		$("#robot2").delay(150).animate(
		{
			top:-topMove2
			
		},time2,
			function(){
				decidePlace();
				var identity="robot2";
				winner(place,identity);
				$("#robot2Info p").text("Robot 2 finished "+ place +" place" + " at "+(time2+150)+" ms");
			
					});
		
			
			
		});
		
		
		/*CLICK THE DOWN ERROR*/
		$("#down").click(
		function(){
		necessaryInfo();
		var k=$("#robot1").position();
		//alert(k.top);
		if(k.top<topMove1&& k.left<rightEndRobot2/1.5){ // only go down if robot has already moved up
		//if click go, go right
				$("#robot1").animate(
				{
					top:"-50px"
					
				},time1,
					function(){
						decidePlace();
						var identity="robot1";
						winner(place,identity);
						$("#robot1Info p").text("Robot 1 finished "+ place +" place" + " at "+time1+" ms");
					
							});
							
							
				$("#robot2").animate(
				{
					
					top:"-50px"
					
				},time2,
					function(){
						decidePlace();
						var identity="robot2";
						winner(place,identity);
						$("#robot2Info p").text("Robot 2 finished "+ place +" place" + " at "+time2+" ms");
					
							});
			
		}
				
			});
			
		
});