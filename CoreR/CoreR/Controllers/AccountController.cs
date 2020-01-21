using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CoreR.Models;
using CoreR.Constants;
using CoreR.Domain.Interfaces;

namespace CoreR.Controllers
{
    public class AccountController : Controller
    {
        private IAccountService _accountService;
        //
        // GET: /Account/

        public AccountController(IAccountService accountService)
        {
            this._accountService = accountService;
        }

        public IActionResult Login()
        {
            if (HttpContext.Session.GetString(Constant.String.SESSION_KEY) == null)
                return View();
            else
                return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public IActionResult Login(string email, string password)
        {
            OperationResult result = this._accountService.CheckLogin(email, password);
            if (result.IsSuccessful)
            {
                HttpContext.Session.SetString(Constant.String.SESSION_KEY,email);
            }
            return Content(((int)result.Response).ToString());
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(string name, string email, string password)
        {
            OperationResult result = this._accountService.Register(name, email, password);

            return Content(((int)result.Response).ToString());
        }
    }

}