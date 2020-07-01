using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TestProject.Backend.Models;

namespace TestProject.Backend.Controllers
{
    public class PhoneController : Controller
    {
        [HttpGet]
        public List<Phone> Index()
        {
            List<Phone> phones = new List<Phone>
            {
                new Phone { Id = 0, Name = "Xiaomi Redmi Note 8", OS = "Android"},
                new Phone { Id = 1, Name = "Xiaomi Redmi 7A", OS = "Android"},
                new Phone { Id = 2, Name = "IPhone 11", OS = "iOS"},
                new Phone { Id = 3, Name = "Samsung Galaxy S20", OS = "Android"}
            };
            return phones;
        }
    }
}