using CoreR.Models;

namespace CoreR.Domain.Interfaces
{
    public interface IAccountService
    {
        OperationResult CheckLogin(string email, string password);
        OperationResult Register(string name, string email, string password);
    }
}
