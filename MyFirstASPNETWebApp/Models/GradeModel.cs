﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.models
{
    public class GradeModel
    {

        [Range(0, 100)]
        public int Assignments { get; set; }
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Range(0, 100)]
        public int Projects { get; set; }
        [Range(0, 100)]
        public int Intex { get; set; }

        [Range(0, 100)]
        public int Midterm { get; set; }

        [Range(0, 100)]
        public int Final { get; set; }
    }
} 