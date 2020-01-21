/**************************************************************************************************************************
 **************************************************************************************************************************
 ** @Author      :   Umesh Kumar
 ** @Create      :   Sep 05, 2012
 ** @UpdateDate  :   Sep 10, 2012
 ** @Version     :   1.0
 ** @ChangesDescription:
 ** 1) Change in ChangeImg() method;    
 ** 2)
 ** 3)
 **************************************************************************************************************************
 *************************************************************************************************************************/








/********************************************************************************************************************
 * @Author  Umesh
 * @Created Sept 06, 2012
 * This function used for required field validator on combobox
 * In the combobox, the first option must be--> <option value="000">-select-</option>
 * Recieve three argument --> < fieldId    : Id of the html combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 ********************************************************************************************************************/
function RequiredFieldComboBox(fieldId, errorDivId, message) {
    var errorDiv = document.getElementById(errorDivId);
    var comboBox = document.getElementById(fieldId);
    if (comboBox.value == '000') {
        errorDiv.innerHTML = message;
        return false;
    }
    else {
        errorDiv.innerHTML = "";
        return true;
    }
}


/******************************************************************************************************************
 * @Author  Umesh
 * @Created Sept 06, 2012
 * This function used for required field validator on textbox, textarea 
 * Recieve three argument --> < fieldId    : Id of the html textbox, textarea (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 ******************************************************************************************************************/
function RequiredFieldTextBox(fieldId, errorDivId, message) {
    var errorDiv = document.getElementById(errorDivId);
    var textBox = document.getElementById(fieldId);
    if ($.trim(textBox.value) == '') {      
        errorDiv.innerHTML = message;
        return false;
    }
    else {
        errorDiv.innerHTML = "";
        return true;
    }
}


/*******************************************************************************************************************
 * @Author  Umesh
 * @Created Sept 06, 2012
 * This function used for validate the input charactor in the input  
 * Recieve four argument -->  < fieldId    : Id of the html combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 *                            < validChar  : List of all the valid char as a string(string)
 *******************************************************************************************************************/
function FixedCharTextBox(fieldId, errorDivId, message, validChar) {
    var errorDiv = document.getElementById(errorDivId);
    var checkOK = validChar;
    var checkStr = document.getElementById(fieldId).value;
    var allValid = true;
    var allNum = "";
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);

        for (j = 0; j < checkOK.length; j++) {
            if (ch == checkOK.charAt(j))
                break;
        }

        if (j == checkOK.length) {
            allValid = false;
            break;
        }

        if (ch != ",") {
            allNum += ch;
        }
    }
    if (!allValid) {
        errorDiv.innerHTML = message;
        document.getElementById(fieldId).focus();
        return false;
    }
    else {
        errorDiv.innerHTML = "";
        return true;
    }
}

/*******************************************************************************************************************
 * @author  Umesh
 * @created Sept 06, 2012
 * This function used for input length
 * Recieve five argument -->  < fieldId    : Id of the html combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 *                            < length     : Valid length (int)
 *                            < type       : type of checking ,must be one of the three--'MAX' 'MIN' 'EQUAL' (string)
 *                             
 ********************************************************************************************************************/
function LengthTextBox(fieldId, length, type) {
    var textBox = document.getElementById(fieldId);
    switch (type) {
        case "MAX":
            {
                if (textBox.value.length > length) {
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case "MIN":
            {
                if (textBox.value.length < length) {
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case "EQUAL":
            {
                if (textBox.value.length != length) {
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        default:
            {

            }
            break;
    }
}

/*******************************************************************************************************************
 * @author  Umesh
 * @created Sept 06, 2012
 * This function used for Email validation
 * Recieve threee argument -->< fieldId    : Id of the html combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 *                             
 ********************************************************************************************************************/
function EmailValidation(fieldId,errorDivId, message) {
    var errorDiv = document.getElementById(errorDivId);
    var email = document.getElementById(fieldId).value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errorDiv.innerHTML = message;
        return false;
    }
    else {
        return true;
    }
}


/******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for validate the prefix and postfix of the string
 * this function check that a perticular char would not be at starting and ending position of a string 
 * Recieve five argument -->  < fieldId    : Id of the html input element (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message (string)
 *                            < fixType    : type of fix, must be one of the two -'POST'  'PRE'
 *                            < value      : fix value 
 *******************************************************************************************************************/
function ValidatePrefixPostfix(fieldId, errorDivId, message, fixType, value)//fixtype= POST,PRE
{
    var textBox = document.getElementById(fieldId);
    var checkStr = textBox.value;
    var errorDiv = document.getElementById(errorDivId);
    switch (fixType) {
        case "PRE":
            {
                if (checkStr.charAt(0) == value) {
                    errorDiv.style.color = "red";
                    errorDiv.innerHTML = message;
                    return false;
                }
                else {
                    errorDiv.innerHTML = "";
                    return true;
                }
            }
            break;
        case "POST":
            {
                if (checkStr.charAt(checkStr.length - 1) == value) {
                    errorDiv.style.color = "red";
                    errorDiv.innerHTML = message;
                    return false;
                }
                else {
                    errorDiv.innerHTML = "";
                    return true;
                }
            }
            break;
        default:
            {

            }
            break;
    }
}


/***********************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for compare two string 
 * if not then return <false> else return <true>
 * Recieve four argument -->  < fieldId         : Id of the html input element for compare (string)
 *                            < compareFieldId  : Id of the html input element to  compare (string)
 *                            < errorDivId      : Id of the html element where you want to show the error message(string)
 *                            < message         : Error message   (string)
 ************************************************************************************************************************/
function CompareValidator(fieldId, compareFieldId, errorDivId, message) {
    var errorDiv = document.getElementById(errorDivId);
    var field = document.getElementById(fieldId);
    var compareField = document.getElementById(compareFieldId);

    if (field.value != compareField.value) {        
        errorDiv.innerHTML = message;
        return false;
    }
    else {
        errorDiv.innerHTML = "";
        return true;
    }
}



/************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for disable the html input field
 * Recieve variable no of argument  <Ids of the input fields>
 * disabled all the element and return false
 ************************************************************/
function disableHTMLElement() {
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i]);
        element.disabled = true;
    }
    return false;
}


/*******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for enable the html input field
 * Recieve variable no of argument  <Ids of the input fields>
 * enabled all the element and return false
 *******************************************************************************************************************/
function enableHTMLElement() {
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i]);
        element.disabled = false;
    }
    return false;
}



/*******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for get the form input data in the query string format ->< "Name=satya&password=123435&Id=sat001">
 * Recieve variable no of argument  <Ids of the input fields>
 * Make a Query string with input data and return that query string 
 *******************************************************************************************************************/
function getFormData() {
    var data = "";
    var element;
    for (var i = 0; i < arguments.length; i++) {
        if (i == 0) {
            element = document.getElementById(arguments[i]);
            data = arguments[i] + '=' + element.value;
        }
        else {
            element = document.getElementById(arguments[i]);
            data = data + '&' + arguments[i] + '=' + element.value;
        }
    }
    return data;

}

/*******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for reset the html input field
 * Recieve variable no of argument  <Ids of the input fields>
 * Get them by id and reset the value of that field
 *******************************************************************************************************************/
function resetFormField() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).value = "";
    }
}


/*******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for reset the html container
 * Recieve variable no of argument  <Ids of the html containers>
 * Get them by id and empty the value of the container and < return false
 *******************************************************************************************************************/
function resetInnerHtml() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).innerHTML = "";
    }
}


/*******************************************************************************************************************
 * @Author  Umesh
 * @created Sept 12, 2012
 * This function used for validate the extension of files going to upload
 * Recieve variable no of argument greater than three
 * starting three argument must < fieldId     : Id of the html input element file upload (string)                              
 *                              < errorDivId  : Id of the html element where you want to show the error message(string)
 *                              < message     : Error message   (string)>
 * and rest of argument are valid file extension ex- 'png' 'jpg' 
 *******************************************************************************************************************/
function ValidatefileExtensions()//fieldId,errorDivId,message
{

    var fup = document.getElementById(arguments[0]);
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    var isCorrect = false;
    for (var i = 3; i < arguments.length; i++) {
        var exttemp = arguments[i];//alert(exttemp);
        if (ext == exttemp) {
            isCorrect = true;
        }
    }
    if (!isCorrect) {
        document.getElementById(arguments[1]).style.color = "red";
        document.getElementById(arguments[1]).innerHTML = arguments[2];
        return false;
    }
    else {
        document.getElementById(arguments[1]).innerHTML = "";
        return true;
    }
}



/******************************************************************************
 * @Author  :  Umesh
 * @Created :  Sept 16, 2012
 * This function used for ckecked radio button value
 * Recieve one argument--> < radioName : name of the radio button list (string)
 ******************************************************************************/
function getRadioCheckedValue(radioName) {
    var radioObj = document.getElementsByName(radioName);

    if (!radioObj)
        return "";
    var radioLength = radioObj.length;
    if (radioLength == undefined)
        if (radioObj.checked)
            return radioObj.value;
        else
            return "0";
    for (var i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "0";
}

/********************************************************************************************************************
 * @Author  :  Umesh
 * @Created :  Sept 16, 2012
 * This function used for getting the selected values of multiselect combobox 
 * and show on the defined area on the html page
 * Recieve two argument -->   < fieldId    : Id of the html multiselect combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 ********************************************************************************************************************/
function MultipleSelectMessage(errorDivId, fieldId) {
    var errorDivmultipleselect = document.getElementById(errorDivId);
    var selectedArray = new Array();
    var selObj = document.getElementById(fieldId);
    var i;
    var count = 0;

    for (i = 0; i < selObj.options.length; i++) {
        if (selObj.options[i].selected) {
            selectedArray[count] = selObj.options[i].text;
            count++;
        }
    }

    var string = "You selected as :<br/> &#xAB;&nbsp;";
    var tempstring = "";

    for (i = 0; i < count; i++) {
        if (i + 1 == count) {
            tempstring = tempstring + selectedArray[i];
        }
        else {
            tempstring = tempstring + selectedArray[i] + "<br/> &#xAB;&nbsp;";
        }
    }

    string = string + tempstring;
    errorDivmultipleselect.innerHTML = string;
    errorDivmultipleselect.style.color = "green";
    return false;
}



/*******************************************************************************************************************
 * @Author  :  Umesh
 * @Created :  Sept 16, 2012
 * This function used for getting the selected values of multiselect combobox
 * in the query string format
 * Recieve one argument -->   < fieldId : Id of the html combobox (string)                            
 *******************************************************************************************************************/
function GetMultiSelectValues(FieldId) {
    var selObj = document.getElementById(FieldId);
    var technologies_string = "";

    for (i = 0; i < selObj.options.length; i++) {
        if (selObj.options[i].selected) {
            technologies_string = technologies_string + selObj.options[i].value + ",";
        }
    }

    return technologies_string;
}


/*******************************************************************************************************************
 * @Author  :  Umesh
 * @Created :  Sept 16, 2012
 * This function used for required field validator on multiselect combobox
 * if user select no value from the combobox <return false>  
 * Recieve three argument --> < fieldId    : Id of the html combobox (string)
 *                            < errorDivId : Id of the html element where you want to show the error message(string)
 *                            < message    : Error message   (string)
 *******************************************************************************************************************/
function RequiredFieldMultiSelect(fieldId, errorDivId, message) {
    var errordiv = document.getElementById(errorDivId);
    var selObj = document.getElementById(fieldId);
    var technologies_string = "";

    for (i = 0; i < selObj.options.length; i++) {
        if (selObj.options[i].selected) {
            technologies_string = technologies_string + selObj.options[i].value + ",";
        }
    }

    if (technologies_string == "") {
        errordiv.style.color = "red";
        errordiv.innerHTML = message;
        return false;
    }
    else {
        if (errordiv.style.color == "red") {
            errordiv.innerHTML = "";
        }
        return true;
    }
}



/*******************************************************************************************************************
 *  @Author  :  Umesh
 *  @Created :  Sept 16, 2012
 * this function prevent the user to enter the char other than integer
 * This function used for check weather the entered char is integer or not
 * if its is a integer then return the coresponding key code
 * else return nothing 
 * Recieve one argument --> < fieldId    : Id of the html input element (string)
 *******************************************************************************************************************/
function checkForInt(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    return ((charCode >= 48 && charCode <= 57) || charCode == 8 || charCode == 9 || charCode == 13);
}



/*******************************************************************************************************************
 *  @Author  :  Umesh
 *  @Created :  Sept 16, 2012
 * this function prevent the user to enter the char other than alphabet
 * This function used for check weather the entered char is alphabet or not
 * if its is a alphabet then return the coresponding key code
 * else return nothing 
 * Recieve one argument --> < fieldId    : Id of the html element (string)
 *******************************************************************************************************************/
function checkForAlphabet(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    return ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 8 || charCode == 32 || charCode == 46);
}



/********************************************************************
 *  @Author  :  Umesh
 *  @Created :  Sept 16, 2012
 *  get object for Ajax 
 *  according to client's browser
 ********************************************************************/
function getAjaxRequestObject() {
    var ajaxRequest;
    try {// Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
        return ajaxRequest;
    }
    catch (e) {// Internet Explorer Browsers
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            return ajaxRequest;
        }
        catch (e) {//
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                return ajaxRequest;
            }
            catch (e) {// Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
}
function changeDdlSelectedValue(fieldId, value) {
    var field = document.getElementById(fieldId);
    for (var i, j = 0; i = field.options[j]; j++) {
        if (i.value == value) {
            field.selectedIndex = j;
            break;
        }
    }
}

function resetDdl() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).selectedIndex = 0;
    }
}


function ResetMultiSelect(fieldId) {

    var selObj = document.getElementById(fieldId);

    for (i = 0; i < selObj.options.length; i++) {
        if (selObj.options[i].selected) {
            selObj.options[i].selected = false;
        }
    }

}
function Focus(objname, waterMarkText) {
    obj = document.getElementById(objname);
    if ($.trim(obj.value) == waterMarkText) {
        obj.value = "";
        obj.style.color = "#2c4c5a";
    }
}
function Blur(objname, waterMarkText) {
    obj = document.getElementById(objname);
    if ($.trim(obj.value) == "") {
        obj.style.color = "#2c4c5a";
        obj.value = waterMarkText;
    }
}
