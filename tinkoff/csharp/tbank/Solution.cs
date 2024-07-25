using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tbank
{
    internal class Solution
    {
        public void firsTask()
        {
            string inString = Console.ReadLine(); // 100  10  12  15
            string[] stringArray = inString.Split(' ');
            int a = int.Parse(stringArray[0]);
            int b = int.Parse(stringArray[1]);
            int c = int.Parse(stringArray[2]);
            int d = int.Parse(stringArray[3]);

            int result;
            if (d >= b)
                result = a + c * (d - b);
            else
                result = a;
            Console.WriteLine(result);
        }

        public void pie()
        {
            int input = int.Parse(Console.ReadLine()); //6
            int result = 0;
            while (input !=1) {
                if (input % 2 == 0)
                {
                    input = input / 2;
                }
                else
                    input--;
                result++;
            }
            Console.WriteLine(result);
        }
    }
}
