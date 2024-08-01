using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace Route
{
    internal class OzonRoute
    {
        // template
        //using var input = new StreamReader(Console.OpenStandardInput());
        //using var output = new StreamWriter(Console.OpenStandardOutput());

        //var s = input.ReadLine().Split();
        //int a = int.Parse(s[0]);
        //int b = int.Parse(s[1]);
        //output.Write(a + b);

        public void FirstTask()
        {
            //using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            //var s = input.ReadLine().Split();
            //int a = int.Parse(s[0]);
            //int b = int.Parse(s[1]);
            output.Write("OK");
        }

        public void RoundingError()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var setCount = int.Parse(input.ReadLine());
            List<decimal> results = new List<decimal>();
            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                var s = input.ReadLine().Split();
                int productCount = int.Parse(s[0]);
                decimal commission = int.Parse(s[1]);
                decimal result = 0;
                for (int productIndex = 0; productIndex < productCount; productIndex++)
                {
                    decimal productPrice = decimal.Parse(input.ReadLine());
                    decimal productProfit = productPrice * commission / 100;
                    decimal error = Math.Round(productProfit, 2) - Math.Floor(productProfit);
                    result += error;
                }
                results.Add(result);
            }

            foreach (var result in results)
                output.WriteLine(Math.Round(result, 2).ToString("F2"));
        }

        public void TreeRoot()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());
            var setCount = int.Parse(input.ReadLine());
            List<int> results = new List<int>();

            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                var nodes = new Dictionary<int, bool>();
                var numCount = int.Parse(input.ReadLine());
                var codes = input.ReadLine().Split(' ').Select(item => int.Parse(item)).ToList();

                if (numCount <= 4)
                {
                    results.Add(codes.First());
                    continue;
                }

                int numIndex = 0;
                while (numIndex < numCount)
                {
                    if (!nodes.ContainsKey(codes[numIndex]))
                        nodes.Add(codes[numIndex], true);
                    int childCount = codes[numIndex + 1];

                    for (int childIndex = 0; childIndex < childCount; childIndex++)
                    {
                        if (!nodes.ContainsKey(codes[numIndex + 2 + childIndex]))
                        {
                            nodes.Add(codes[numIndex + 2 + childIndex], false);
                        }
                        else
                        {
                            nodes[codes[numIndex + 2 + childIndex]] = false;
                        }
                    }

                    numIndex += 2 + childCount;
                }
                results.Add(nodes.Keys.First(item => nodes[item] == true));
            }

            foreach (var result in results)
                output.WriteLine(result);
        }

        public void BrokenServer()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var setCount = int.Parse(input.ReadLine());
            List<int> results = new List<int>();
            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                int requestCount = int.Parse(input.ReadLine());
                var requestIds = input.ReadLine().Split(' ').Select(item => int.Parse(item)).ToList();

                int maxLen = 0;
                int tempLen = 0;
                var hs = new HashSet<int>();

                for (int index = 0; index < requestCount; index++)
                {
                    hs.Add(requestIds[index]);
                    if (hs.Count <= 2)
                    {
                        tempLen++;
                        if (tempLen > maxLen)
                        {
                            maxLen = tempLen;
                        }
                    }
                    else
                    {
                        hs.Clear();
                        hs.Add(requestIds[index]);
                        hs.Add(requestIds[index - 1]);
                        tempLen = 2;
                        int backIndex = index - 1;
                        while (backIndex - 1 >= 0 && requestIds[backIndex] == requestIds[backIndex - 1])
                        {
                            tempLen++;
                            if (tempLen > maxLen)
                            {
                                maxLen = tempLen;
                            }
                            backIndex--;
                        }
                    }
                }
                results.Add(maxLen);
            }

            foreach (var result in results)
                output.WriteLine(result);
        }

    }
}
