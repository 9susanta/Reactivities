﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException(int statusCode,string message, string details)
    {
        public int StatusCode = statusCode; 
        public string Message = message; 
        public string Details = details;
    }
}
