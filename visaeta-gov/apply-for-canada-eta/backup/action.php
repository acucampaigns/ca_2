<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['countryName']))  {
  
  //Email information
  $admin_email = "info@etavisa-gov.ca, jweinstock121@gmail.com";
 // $emailAddress = "info@etavisa-gov.ca";
  $subject = 'Client Information';
  
  $countryName = $_REQUEST['countryName'];
  $permanentResident = $_REQUEST['permanentResident'];
  $travellingCanada = $_REQUEST['travellingCanada'];
  $landorSee = $_REQUEST['landorSee'];
  $isRepresentativecon = $_REQUEST['isRepresentativecon'];
  $minorChild= $_REQUEST['minorChild'];
  $representative= $_REQUEST['representative'];
  $representApplicant= $_REQUEST['representApplicant'];
  $lastname = $_REQUEST['lastname'];
  $firstname = $_REQUEST['firstname'];
  $mailingAddress = $_REQUEST['mailingAddress'];
  $tellNumb = $_REQUEST['tellNumb'];
  $faxNumber = $_REQUEST['faxNumber'];
  $emailAddress = $_REQUEST['emailAddress'];
  
  //personal information
  $plastname = $_REQUEST['plastname'];
  $pfirstName = $_REQUEST['pfirstName'];
  $pdate = $_REQUEST['pdate'];
  $pcountrybirth = $_REQUEST['pcountrybirth'];
  $pcityofbirth = $_REQUEST['pcityofbirth'];
  $phasOtherCitizenship = $_REQUEST['phasOtherCitizenship'];
  $CitizenshipsInfo = $_REQUEST['CitizenshipsInfo'];
  $papplyGender = $_REQUEST['papplyGender'];
  $phasPreviouslyAppliedToCanada = $_REQUEST['phasPreviouslyAppliedToCanada'];
  $UICnuumb = $_REQUEST['UICnuumb'];
  $pavailableFunds = $_REQUEST['pavailableFunds'];
  $ppassportNumber = $_REQUEST['ppassportNumber'];
  $pcountryOfIssuance = $_REQUEST['pcountryOfIssuance'];
  $pissueDate = $_REQUEST['pissueDate'];
  $pexpiryDat  = $_REQUEST['pexpiryDat'];
  $maritalStatus = $_REQUEST['maritalStatus'];
  $employmentOccupation  = $_REQUEST['employmentOccupation'];
  
  // contact Details
  $languageOfPreference = $_REQUEST['languageOfPreference'];
  $CemailAddress = $_REQUEST['CemailAddress'];
  
  //Residential address
  $aptUnit = $_REQUEST['aptUnit'];
  $streetNo = $_REQUEST['streetNo'];
  $streetAddress = $_REQUEST['streetAddress'];
  $cityTown = $_REQUEST['cityTown'];
  $countryterri = $_REQUEST['countryterri'];
  $applysignature = $_REQUEST['applysignature'];


  
  try {
      $db = new PDO('mysql:host=etavisagovca.domaincommysql.com;dbname=etavisa', "etavisa", "@H267erc1");
      $query = "INSERT INTO customers (countryName, permanentResident, travellingCanada, landorSee,
            isRepresentativecon, minorChild, representative, representApplicant, lastname,
            firstname, mailingAddress, tellNumb, faxNumber, emailAddress, plastname, pfirstName,
            pdate, pcountrybirth, pcityofbirth, phasOtherCitizenship, CitizenshipsInfo, papplyGender,
            phasPreviouslyAppliedToCanada, UICnuumb, pavailableFunds, ppassportNumber,
            pcountryOfIssuance, pissueDate, pexpiryDat, maritalStatus, employmentOccupation,
            languageOfPreference, CemailAddress, aptUnit, streetNo, streetAddress, cityTown,
            countryterri, applysignature) VALUES (:countryName, :permanentResident, :travellingCanada, :landorSee,
            :isRepresentativecon, :minorChild, :representative, :representApplicant, :lastname,
            :firstname, :mailingAddress, :tellNumb, :faxNumber, :emailAddress, :plastname, :pfirstName,
            :pdate, :pcountrybirth, :pcityofbirth, :phasOtherCitizenship, :CitizenshipsInfo, :papplyGender,
            :phasPreviouslyAppliedToCanada, :UICnuumb, :pavailableFunds, :ppassportNumber,
            :pcountryOfIssuance, :pissueDate, :pexpiryDat, :maritalStatus, :employmentOccupation,
            :languageOfPreference, :CemailAddress, :aptUnit, :streetNo, :streetAddress, :cityTown,
            :countryterri, :applysignature)";
      $inputCustomer = $db->prepare($query);
      $result = $inputCustomer->execute(array(":countryName" => $countryName, ":permanentResident" => $permanentResident,
          ":travellingCanada" => $travellingCanada, ":landorSee" => $landorSee, ":isRepresentativecon" => $isRepresentativecon,
          ":minorChild" => $minorChild, ":representative" => $representative, ":representApplicant" => $representApplicant,
          ":lastname" => $lastname, ":firstname" => $firstname, ":mailingAddress" => $mailingAddress, ":tellNumb" => $tellNumb,
          ":faxNumber" => $faxNumber, ":emailAddress" => $emailAddress, ":plastname" => $plastname, ":pfirstName" => $pfirstName,
          ":pdate" => $pdate, ":pcountrybirth" => $pcountrybirth, ":pcityofbirth" => $pcityofbirth,
          ":phasOtherCitizenship" => $phasOtherCitizenship, ":CitizenshipsInfo" => $CitizenshipsInfo, ":papplyGender" => $papplyGender,
          ":phasPreviouslyAppliedToCanada" => $phasPreviouslyAppliedToCanada, ":UICnuumb" => $UICnuumb,
          ":pavailableFunds" => $pavailableFunds, ":ppassportNumber" => $ppassportNumber, ":pcountryOfIssuance" => $pcountryOfIssuance,
          ":pissueDate" => $pissueDate, ":pexpiryDat" => $pexpiryDat, ":maritalStatus" => $maritalStatus,
          ":employmentOccupation" => $employmentOccupation, ":languageOfPreference" => $languageOfPreference,
          ":CemailAddress" => $CemailAddress, ":aptUnit" => $aptUnit, ":streetNo" => $streetNo, ":streetAddress" => $streetAddress,
          ":cityTown" => $cityTown, ":countryterri" => $countryterri, ":applysignature" => $applysignature));

  } catch (Exception $e) {
  }

  //send email
  mail($admin_email, "$subject", 
          "Q: What is the Country/Territory of your passport?"."\n"
          ."A:".$countryName."\n\n".
          "Q: Are you a lawful permanent resident of the United States with a valid alien registration card (Green Card)?"."\n"
          ."A:".$permanentResident."\n\n".
          "Q: Are you travelling to Canada by air?"."\n"
          ."A:".$travellingCanada."\n\n".
          "Q: Are you any of the following?"."\n".
            "• A visitor entering Canada by land or sea"."\n".
            "• A citizen of France residing in and travelling from St. Pierre and Miquelon"."\n".
            "• A student with a valid study permit for Canada, which I obtained on or after August 1, 2015"."\n".
            "• A foreign worker with a valid work permit for Canada, which I obtained on or after August 1, 2015"."\n".
            "• A person holding valid status in Canada and entering Canada from the United States or St. Pierre and Miquelon"."\n".
            "• A member of Visiting Forces visiting Canada on official duties/orders"."\n".
            "• A member of flight crew, a civil aviation inspector or an accident investigator"."\n".
            "• An accredited diplomat"."\n\n"
          ."A:".$landorSee."\n\n".
           "Q:  Are you a representative or a parent/guardian applying on behalf of an eTA applicant?"."\n"
          ."A:".$isRepresentativecon."\n\n".
          "Q: Are you applying on behalf of a minor child?"."\n"
          ."A:".$minorChild."\n\n".
          "REPRESENTATIVE INFORMATION"."\n\n".
          "Q: My representative is"."\n"
          ."A:".$representative."\n\n".
          "Q: Are you being paid to represent the applicant and complete the form on their behalf?"."\n"
          ."A:".$representApplicant."\n\n".
          "Q: Last name(s)"."\n"
          ."A:".$lastname."\n\n".
          "Q: First name(s)"."\n"
          ."A:".$firstname."\n\n".
          "Q: Mailing Address"."\n"
          ."A:".$mailingAddress."\n\n".
           "Q: Telephone number"."\n"
          ."A:".$tellNumb."\n\n".
          "Q: Fax number"."\n"
          ."A:".$faxNumber."\n\n".
         "Q: Email address"."\n"
          ."A:".$emailAddress."\n\n".
          "REPRESENTATIVE INFORMATION"."\n\n".
          "Q: Last name(s)"."\n"
         ."A:".$plastname."\n\n".
          "Q: First name(s)"."\n"
          ."A:".$pfirstName."\n\n".
          "Q: Date of birth"."\n"
         ."A:".$pdate."\n\n".
          "Q: Country/territory of birth"."\n"
          ."A:".$pcountrybirth."\n\n".
          "Q: City of birth"."\n"
          ."A:".$pcityofbirth."\n\n".
          "Q: Are you a citizen of a country/territory other than the one on your passport?"."\n"
          ."A:".$phasOtherCitizenship."\n\n".
          "Q: Citizenships Information"."\n"
          ."A:".$CitizenshipsInfo."\n\n".
          "Q: Gender"."\n"
          ."A:".$papplyGender."\n\n".
          "Q: Marital status"."\n"
          ."A:".$maritalStatus."\n\n".
          "Q: Have you previously applied to enter or remain in Canada? Select YES if, in the past, you submitted an application to come to Canada, such as a study permit, work permit or visitor visa?"."\n"
          ."A:".$phasPreviouslyAppliedToCanada."\n\n".
          "Q: Unique client identifier (UCI) / Previous Canadian visa or permit number?"."\n"
          ."A:".$UICnuumb."\n\n".
          "Q: Funds available for travel to Canada?"."\n"
          ."A:".$pavailableFunds."\n\n".
          "Q: Passport number?"."\n"
          ."A:".$ppassportNumber."\n\n".
          "Q: Country/territory of issue"."\n"
          ."A:".$pcountryOfIssuance."\n\n".
         "Q: Issue date?"."\n"
          ."A:".$pissueDate."\n\n".
          "Q: Expiry date?"."\n"
          ."A:".$pexpiryDat."\n\n".
          "EMPLOIMENT DETAILS"."\n\n".
          "Q: What is your current employment situation?"."\n"
          ."A:".$employmentOccupation."\n\n".
          "CONTACT DETAILS"."\n\n".
          "Q: Preferred language to contact you?"."\n"
          ."A:".$languageOfPreference."\n\n".
          "Q: Email address?"."\n"
          ."A:".$CemailAddress."\n\n".
           "RESIDENTIAL ADDRESS"."\n\n".
           "Q: Apartment number/address?"."\n"
          ."A:".$aptUnit."\n\n".
          "Q: Apartment number/unit"."\n"
          ."A:".$streetNo."\n\n".
          "Q: Residence/House/Street number"."\n"
          ."A:".$streetAddress."\n\n".
          "Q: City/town?"."\n"
          ."A:".$cityTown."\n\n".
          "Q: Country/territory?"."\n"
          ."A:".$countryterri."\n\n".
          "Q: Signature:"."\n"
          ."A:".$applysignature."\n\n"
          , "From: ".$CemailAddress);
  
  //Email response
  header("Location: https://payment.hipay.com/index/link/id/57C165BC57C4E");
  }
  
  //if "email" variable is not filled out, display the form
  else  {
       header('Location: index.html');
  }