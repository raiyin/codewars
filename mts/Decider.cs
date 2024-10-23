using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mts
{
    internal class Decider
    {
        public void Billing()
        {
            int fix_price = int.Parse(Console.ReadLine());
            int add_price = int.Parse(Console.ReadLine());
            int traffic = int.Parse(Console.ReadLine());

            int result = 0;
            if (traffic <= 100)
            {
                result = fix_price;
            }
            else
            {
                result = fix_price + add_price * (traffic - 100);
            }

            Console.WriteLine(result.ToString());
        }

        public void MtsString()
        {
            string inString = Console.ReadLine();
            bool m_found = false;
            bool t_found = false;
            bool s_found = false;
            int m_index = 0;
            int t_index = 0;
            int s_index = 0;

            for (int i = 0; i < inString.Length; i++)
            {
                if (!m_found && inString[i] == 'M')
                {
                    m_found = true;
                    m_index = i;
                }
                else if (m_found && !t_found && inString[i] == 'T')
                {
                    t_found = true;
                    t_index = i;
                }
                else if (m_found && t_found && !s_found && inString[i] == 'S')
                {
                    s_found = true;
                    s_index = i;
                }
            }

            if (m_found && t_found && s_found)
            {
                Console.WriteLine("1");
            }
            else
            {
                Console.WriteLine("0");
            }
        }

        public void Stat()
        {
            var baseCount = int.Parse(Console.ReadLine());
            var bases = new int[baseCount];
            for (int i = 0; i < baseCount; i++)
            {
                bases[i] = int.Parse(Console.ReadLine());
            }

            int sum = bases.Sum();
            string result = sum % 2 == 0 ? "1" : "0";
            Console.WriteLine(result);
        }

        public void Stat_2()
        {
            var baseCount = int.Parse(Console.ReadLine());
            var bases = new List<int>();
            for (int i = 0; i < baseCount; i++)
            {
                bases.Add(int.Parse(Console.ReadLine()));
            }
            if (bases.Count >=2)
            {
                while (bases[1] != 0)
                {
                    bases.Sort((a, b) => b.CompareTo(a));
                    bases[0] = bases[0] - bases[1];
                    bases[1] = 0;
                }
            }

            int result = bases[0] / 2;
            Console.WriteLine(result);
        }
    }
}
