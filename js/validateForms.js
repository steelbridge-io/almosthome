function validateForm1()

    {	

      /* Validating name field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_field_FirstName"].value;

      if (x == null || x == "") { 

		  alert("Full Name must be filled out");

		  return false;

	  }

	  /* Validating email field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_field_Email"].value;

	  if (x == null || x == "") {

        alert("Email must be filled out");

        return false;

	  }

      var atpos=x.indexOf("@");

      var dotpos=x.lastIndexOf(".");

      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {

        alert("Not a valid e-mail address");

        return false;

	  }

      /* Validating Rent Per Month field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_custom_PlannedRentPerMonth"].value;

      if (x == null || x== "") {

        alert("Select Rent Per Month");

        return false;

	  }

      /* Validating Bed/Bath field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_custom_NumberofBedBath"].value;

      if (x == null || x == "") {

        alert("Select Number of Beds & Baths");

        return false;

	  }	

      /* Validating Start Date field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_custom_ApproximateStartDate"].value;

      if (x == null || x == "") {

        alert("Select Start Date");

        return false;

	  }

      /* Validating Start Date field */

      var x=document.forms["City Page Quote Request - Step 1"]["inf_custom_ApproximateLeaveDate"].value;

      if (x == null || x == "") {

        alert("Select Leave Date Month");

        return false;

	  }

	}