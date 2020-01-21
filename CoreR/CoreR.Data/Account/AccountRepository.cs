using CoreR.Domain.Interfaces;
using CoreR.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreR.Data.Account
{
   public class AccountRepository : IAccountRepository
    {
        public  OperationResult CheckLogin(string email, string password)
        {
            OperationResult result = new OperationResult();
            //login = null;

            //try
            //{
            //    RREntities db = new RREntities();

            //    Login loginDB = db.Logins.Where(l => l.UserName == email).FirstOrDefault();

            //    if (loginDB == null)
            //    {
            //        result.IsSuccessful = false;
            //        result.Response = OperationResponse.NOT_EXISTS;
            //    }
            //    else
            //    {
            //        if (loginDB.Password == password)
            //        {
            //            result.Response = OperationResponse.SUCCESS;
            //            result.IsSuccessful = true;

            //            login = loginDB;
            //        }
            //        else
            //        {
            //            result.Response = OperationResponse.NOT_MATCH;
            //            result.IsSuccessful = false;
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    result.Response = OperationResponse.SERVER_ERROR;
            //    result.IsSuccessful = false;
            //}
            return result;
        }

        public  OperationResult Register(string name, string email, string password)
        {
            OperationResult result = new OperationResult();

            //try
            //{
            //    RREntities db = new RREntities();

            //    if (db.Logins.Where(l => l.UserName == email).Count() > 0)
            //    {
            //        result.Response = OperationResponse.ALREADY_EXISTS;
            //        result.IsSuccessful = false;
            //    }

            //    User user = new User();
            //    user.Email = email;
            //    user.Name = name;
            //    user.UserTypeId = (int)UserTypes.Owner;
            //    user.CreateDate = DateTime.Now.Date;

            //    db.Users.Add(user);
            //    db.SaveChanges();

            //    Login login = new Login();
            //    login.UserId = user.UserId;
            //    login.Password = password;
            //    login.UserName = email;
            //    login.IsBlocked = false;
            //    login.LastLogin = DateTime.Now;


            //    db.Logins.Add(login);

            //    db.SaveChanges();

            //    result.Response = OperationResponse.SUCCESS;
            //    result.IsSuccessful = true;
            //}
            //catch (Exception ex)
            //{
            //    result.Response = OperationResponse.SERVER_ERROR;
            //    result.IsSuccessful = false;
            //}

            return result;
        }
    }
}
