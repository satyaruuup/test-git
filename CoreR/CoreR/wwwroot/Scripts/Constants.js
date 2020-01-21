var OperationResponse = {};
OperationResponse.SUCCESS = "0";
OperationResponse.LOGIN_INVALID = "1";
OperationResponse.SESSION_TIMEOUT = "2";
OperationResponse.SERVER_ERROR = "3";
OperationResponse.MULTI_LOGIN_ERROR = "4";
OperationResponse.NOT_EXISTS = "5";
OperationResponse.NOT_MATCH = "6";
OperationResponse.ALREADY_EXISTS = "7";


var OperationMessage = {};
OperationMessage.LOGIN_SUCCESS = "login successful";
OperationMessage.METER_FEED_SUCCESS = "feed successful";
OperationMessage.ROOM_ADD_SUCCESS = "Room added successful";
OperationMessage.PG_BOOKED_SUCCESS = "PG booked successful";
OperationMessage.ROOM_BOOKED_SUCCESS = "Room booked successful";
OperationMessage.PROPERTY_CREATE_SUCCESS = "Property added successful";
OperationMessage.BILL_GENERATE_SUCCESS = "bill generated successful";
OperationMessage.REGISTER_SUCCESS = "register successful";
OperationMessage.FACILITY_UPDATE_SUCCESS = "Facility updated successful";

OperationMessage.EMAIL_NOT_EXIST = "Email does not exist";
OperationMessage.PASSWORD_NOT_MATCH = "password did not matched";

OperationMessage.SESSION_TIMEOUT = "session timeout";
OperationMessage.SERVER_ERROR = "server error";
OperationMessage.MULTI_LOGIN_ERROR = "user already loged in";
OperationMessage.EMAIL_ALREADY_EXISTS = "email already exist";
OperationMessage.FEED_ALREADY_EXISTS = "Feed already exist";
OperationMessage.BILL_ALREADY_EXISTS = "Bill already exist";
OperationMessage.ROOM_ALREADY_EXISTS = "Room already exist";


var PropertyTypes = {
    House: 1,
    PG: 2    
};