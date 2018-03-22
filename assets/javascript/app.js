$(function() {

	window.onload = function() {
		$("#start").on("click", timer.start);
		$("#submit").on("click", timer.stop);
	};
	
	var answer;
	var input = $("#answer");
	var currentScore = $("#currentScore").html(score);
	var score = 0;
	var response;
	var question = $("#questions");
	var options = $("#options");
	var questions = [
		["How many moons does Earth have?", "6 , 9 , 3 , 1", "1"],
		["What's the name of the largest planet in our solar system?", "earth , mars , jupiter , saturn" , "jupiter"],
		["How many moons does Venus have?", "6 , 9 , 23 , 0" , "0"],
		["What's the name of the hottest planet in our solar system?", "mercury, earth, venus, jupiter" , "answer"],
		["How many moons does Saturn have?", "31, 64, 23, 0", "31"],
		["How long does it take light to travel from the surface of the sun to the earth?", "1hr , 8mins , 2 days , 24hrs" , "8mins"],
		["How long does it take a photon of light to travel from the sun's core to the surface of the sun?", "1sec , 8mins , 2000 years , 50,000 years" , "50,000 years"],

	];
	// clicking start button starts timer and displays questions
	$("#start").on("click", function() { 
		
		event.preventDefault();
	
		function askQuestion(question) {
		$("#questions").html(questions[i][0]," ");
		$("#options").html(questions[i][j], " ");

		
	
	};
	for (var i=0; i<questions.length; i++) {
		for (var j=0; j<2; j++) {
		//$("#questions").html(questions[i]);
		//$("#options").html(questions[i][j]);
		askQuestion();
		console.log(questions[i]);
		};	
		
	};

});
	
	console.log(questions.length);
	
	
	// Add timer
	var startTime;
	var submit;
	
	var clockRunning = false;
	var timer = 20;
	var timerCountdown;
	
	 function timeConverter(t) {
	
	 // var minutes = Math.floor(t / 60);
	 // var seconds = t - (minutes * 60);
  var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)) * -1; //<=== why negative logic why
  var seconds = Math.floor((timer % (1000 * 59) / 1000)) * -1;
	
	 if (seconds === 0) {
	 seconds = "00";
	 }

	 else if (seconds < 10) {
	 seconds = "0" + seconds;
	 }
	
	 if (minutes === 0) {
	 minutes = "00";
	 }
	 else if (minutes < 10) {
	 minutes = "0" + minutes;
	 }
	
	 return minutes + ":" + seconds;
	 }
	
	var intervalId = setInterval(function() {
	// setTimeout(start, 1000 * 3);
	setTimeout(timeUp, 60000 * 20);
	$("#start").on("click", function() {
		$("#timer").text("00:00");
		start();
		// count();
		});
		
	function count() {
				
				var converted = timeConverter(timer);
				$("#timer").text(converted);
				timer--;

			}
			if (!clockRunning) {
				intervalId = setInterval(timer.count, 60000 * 20);
				clockRunning = true;
			};	


		function start() {
			console.log("Start");
			 intervalId = setInterval(count, 1000);
			 count();
			// $("#timer").append("<h3>3 seconds to start</h3>");

			// $("#timer").append("<h3>You have 20 minutes</h3>");
			
			
			
		};
			//set right/wrong conditions
	$("#submit").on("click", function submit() {	
		for (var t=0 ; t<questions.length ; t++){
	input !== null? input = answer: alert("please enter answer");
		if (answer === questions[0][2]) {

			$("#answer").html("Correct!");
		score += 20;
		currentScore;

	} else {
//		alert("sorry the correct answer is " + question[2]);
	}
		}
		$('#answer').val = " ";

	}); 	
	function timeUp() {
		if (timer.count === 20) {
		$("#timer").append("<h3>TIME'S UP</h3>");
		return;
		}
		//alert("Time's Up");
		console.log("TIME'S UP");
	};



	// allow one answer per question
	// activate submit and display result.
	});
});