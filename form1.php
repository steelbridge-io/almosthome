<?php

function showForm1($form_city, $form_state) {

  $form = <<< FORM

    <script src="https://almosthome.infusionsoft.com/app/webTracking/getTrackingCode?trackingId=671dd4735310f7f58583f6d4a3513783" type="text/javascript"></script> 

    <form accept-charset="UTF-8" method="POST" onsubmit="validateForm1()" name="City Page Quote Request - Step 1"  action="process_step_1.php" >

    <input name="inf_form_xid" type="hidden" value="f0fdac70693c404862636bd4697b81fb" />

    <input name="inf_form_name" type="hidden" value="City Page Quote Request - Step 1" />

    <input name="infusionsoft_version" type="hidden" value="1.29.9.21" />

    <input id="_Metro" name="inf_custom_Metro" type="hidden" value="$form_city" />

    <input id="_State" name="inf_custom_State" type="hidden" value="$form_state" />

    <div class="default beta-base beta-font-b" id="mainContent">

    <table cellpadding="0" cellspacing="0">

    <tbody>

      <tr>

        <td align="center" valign="top">

        <table cellpadding="0" cellspacing="0">

        <tbody>

          <tr>

            <td class="body" valign="top">

            <div class="text" id="webformErrors" name="errorContent"></div>

            <table cellpadding="2">

            <tbody>

              <tr>

                <td class="infusion-field-label-container"><label for="inf_field_FirstName">Full Name</label><br><br style="line-height: 4px;">

                <input style="width:160px; height:28px;" class="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" type="text" /></td>

                <td class="infusion-field-label-container"><label for="inf_field_Email">Email</label><br><br style="line-height: 4px;">

                <input style="width:160px;" class="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" type="text" /></td>

              </tr>

              <tr>

                <td class="infusion-field-label-container"><label for="inf_custom_PlannedRentPerMonth">Rent Per Month</label><br><br style="line-height: 4px;">

                <select style="width:160px; height:28px;" id="inf_custom_PlannedRentPerMonth" name="inf_custom_PlannedRentPerMonth"  onChange="checkVal(this);"><option value="">Please select one</option><option value="Unsure - Leave Notes Below">Unsure - Leave Notes Below</option><option value="$1800 - $2399">$1800 - $2399</option><option value="$2400 - $2899">$2400 - $2899</option><option value="$2900 - $3499">$2900 - $3499</option><option value="$3500 - $3999">$3500 - $3999</option><option value="$4000 - $4499">$4000 - $4499</option><option value="$4500 - $4999">$4500 - $4999</option> </select></td>

			    <td class="infusion-field-label-container"><label for="inf_custom_NumberofBedBath">Bed/Bath:</label><br><br style="line-height: 4px;">

                <select style="width:160px; height:28px;" id="inf_custom_NumberofBedBath" name="inf_custom_NumberofBedBath"><option selected="selected" value="1x1">1x1</option><option value="2x1">2x1</option><option value="2x2">2x2</option><option value="3x2">3x2</option><option value="4x3">4x3</option><option value="5x3">5x3</option><option value="5x4">5x4</option><option value="Larger than 5 Bedrooms">Larger than 5 Bedrooms</option></select></td>

              </tr>

              <tr>

                <td colspan=2 align="center" class="infusion-field-label-container"><div id="RentNotes"    style="display: none;"><label for="inf_custom_CommentsonRent">Additional Notes Regarding Rent</label><br><br style="line-height: 4px;">

			    <textarea name='"inf_custom_CommentsonRent' id="inf_custom_CommentsonRent" tabindex='5' rows='10' cols='39'></textarea></div></td>

              </tr>

              <tr>

                <td class="infusion-field-label-container"><label for="inf_custom_ApproximateStartDate">Start Date</label><br><br style="line-height: 4px;">

			    <input style="width:160px; height:28px;" class="infusion-field-input-container" id="datepicker1" name="inf_custom_ApproximateStartDate" type="text" /></td>

                <td class="infusion-field-label-container"><label for="inf_custom_ApproximateLeaveDate">Leave Date</label><br><br style="line-height: 4px;">

		        <input style="width:160px; height:28px;" class="infusion-field-input-container" id="datepicker2" name="inf_custom_ApproximateLeaveDate" type="text" /></td>

              </tr>

              <tr>

                <td colspan=2 align="center"><br style="line-height: 4px;"><input type='submit' class='infusion-submit' value='Submit' tabindex='8'/></td>

              </tr>

            </tbody>

            </table>

            <div><inputclass="hidden" id="_RequestSubmitted" name="inf_custom_RequestSubmitted" type="hidden" value="" /></div> 

            </div>

            </td>

          </tr>

        </tbody>

        </table>

        </td>

      </tr>

    </tbody>

    </table>

    </div>

    </form> 

FORM;

  return($form);

}

?>







    

    

    







    



