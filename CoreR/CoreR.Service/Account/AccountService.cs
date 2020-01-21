using CoreR.Domain.Interfaces;
using CoreR.Models;
using System;

namespace CoreR.Service
{
    public class AccountService : IAccountService
    {
        private IAccountRepository _accountRepository;
        public AccountService(IAccountRepository accountRepository)
        {
            this._accountRepository = accountRepository;
        }
        public  OperationResult CheckLogin(string email, string password)
        {
            return this._accountRepository.CheckLogin(email, password);
        }

        public  OperationResult Register(string name, string email, string password)
        {
            return this._accountRepository.Register(name, email, password);
        }
    }
}
