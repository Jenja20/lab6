$(function(){
    //document is now ready for manipulation        
    var stateSelect = $('select[name="state"]');
	var option;
    var idx; 
    var state; 

    //loops through the array and inputs into the option
    //element
    for (idx = 0; idx < usStates.length; ++idx) {
        state = usStates[idx];
        option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);        
    }

    //Validates information
    $('.signup-form').submit(function(){
        
        var signupForm = $(this);
        var addr1Input = signupForm.find('input[name="addr-1"]');
        var addr1Value = addr1Input.val();

        //validates zipcode and address
        if (addr1Value.length > 0) {
            var zipInput = signupForm.find('input[name="zip"]');
            var zipValue = zipInput.val();
            if(zipValue.length == 0){
                alert('Please correctly add in zipcode');
                return false;
            }

        } else if(addr1Value.length == 0) {
            alert("Please enter address");
            return false;
        }

        //validates first name
        var firstNameInput = signupForm.find('#first-name');
        if (firstNameInput.val().length == 0) {
            alert("Please enter first name");
            return false;
        }

        //validates last name
        var lastNameInput = signupForm.find('#last-name');
        if (lastNameInput.val().length == 0) {
            alert("Please enter last name");
            return false; 
        }

        //validates email
        var emailInput = signupForm.find('#email');
        if (emailInput.val().length == 0) {
            alert("Please enter email");
            return false;
        }
      
    });
    
    $('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
	    //show the modal confirmation dialog
	    //and don't reset window.location until the user clicks
	    //the "Yes, Get Me Out of Here!" button
	    $('.cancel-signup-modal').modal();
	}); //cancel-signup click
	
	//catches the click event 
	$('.btn-abandon').click(function(){
		window.location = 'http://www.google.com';
	}); 

        
	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function
                       
});