using Microsoft.AspNetCore.Mvc;
using Mission4.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controllers
{
    public class BlahController : Controller
    {
/*Creating the Index action (which will automatically return to the index page)*/
        public IActionResult Index()
        {
            return View();
        }
/*Here are the HttpGet and HttpPost actions in the controller. The get will return the regular grades
 page and the post will go to the GradeModel class first.*/
        [HttpGet]
        public IActionResult Grades ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grades (GradeModel model)
        {
            return View();
        }
    }
}
