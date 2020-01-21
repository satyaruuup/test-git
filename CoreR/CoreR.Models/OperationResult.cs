using CoreR.Models.Enums;
using System;

namespace CoreR.Models
{
    public class OperationResult
    {
        public string Message { get; set; }
        public OperationResponse Response { get; set; }
        public bool IsSuccessful { get; set; }
        public object Data { get; set; }
    }
}
