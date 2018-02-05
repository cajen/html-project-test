
		function clickConsent(){
			document.getElementById('consent').style.display = 'none';
			//document.getElementById('instructions').style.display = 'block';
			;document.getElementById('info').style.display = 'block'
		}

		function validationForm(){
			
			var x = document.forms["myForm"]["fname"].value;
    		if (x == "") {
        		alert("Name must be filled out");
        		return false;
    		}

    		//document.getElementById('info').style.display = 'none'
    		//document.getElementById('instructions').style.display = 'block';

		}

		function clickInstructions(){
			document.getElementById('instructions').style.display = 'none';
			document.getElementById('trial').style.display = 'block';
		}
