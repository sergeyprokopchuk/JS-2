var firstQ = document.getElementsByName("q1");
var secondQ = document.getElementsByName("q2");
var thirdQ = document.getElementsByName("q3");
var fourthQ = document.getElementsByName("q4");
var fifthQ = document.getElementsByName("q5");

document.getElementById("testresult").onclick = function() { 
testResult(); 
}
 
var result = 0;
var checkRes = 0;


function testResult() {
	result = 0;
	if (firstQ[0].checked) {
		result += 2;
	};
	
	if (secondQ[2].checked) {
		result += 2;
	};
	
	if (thirdQ[3].checked) {
		result += 2;
	};

    checkRes = 0;
    
	if (fourthQ[0].checked)   
    {
        checkRes--;   
    } 
    if (fourthQ[1].checked)   
    {
        checkRes++;   
    }
    if (fourthQ[2].checked)   
    {
        checkRes--;   
    } 
    if (fourthQ[3].checked)   
    {
        checkRes++;   
    }
   
   if (checkRes > 1) result +=2;
   
   
   checkRes = 0;
   
   
   if (fifthQ[0].checked)   
    {
        checkRes++;   
    } 
    if (fifthQ[1].checked)   
    {
        checkRes++;   
    }
    if (fifthQ[2].checked)   
    {
        checkRes--;   
    } 
    if (fifthQ[3].checked)   
    {
        checkRes--;   
    }
   
   if (checkRes > 1) result +=2;

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}