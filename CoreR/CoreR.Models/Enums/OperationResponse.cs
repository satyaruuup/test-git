using System;
using System.Collections.Generic;
using System.Text;

namespace CoreR.Models.Enums
{
    public enum OperationResponse
    {
        SUCCESS = 0,
        LOGIN_INVALID = 1,
        SESSION_TIMEOUT = 2,
        SERVER_ERROR = 3,
        MULTI_LOGIN_ERROR = 4,
        NOT_EXISTS = 5,
        NOT_MATCH = 6,
        ALREADY_EXISTS = 7,
        DB_ERROR = 8
    }
}
