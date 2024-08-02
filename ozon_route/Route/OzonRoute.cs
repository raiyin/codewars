using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace leetcode
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

        public void jsonPrettify()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var setCount = int.Parse(input.ReadLine());

            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                int stringCount = int.Parse(input.ReadLine());
                var sb = new StringBuilder();

                //for (int strIndex = 0; strIndex < stringCount; strIndex++)
                //{
                //    sb.Append(input.ReadLine());
                //}
                sb.Append("{\"a\": \"f\",\"b\": { \"c\": { \"d\": [], \"e\": [\"ababa\"]} },\"c\": { \"k\": { } },\"d\": { \"d\": { \"e\": { } } }}");

                var options = new JsonSerializerOptions();
                options.MaxDepth = 100;
                var node = JsonNode.Parse(sb.ToString());
                var items = (node as JsonObject).AsEnumerable().ToList();
                foreach (var item in items)
                {
                    processNode(item.Key);
                    items.Remove(item);
                }

            }

            void processNode(JsonNode node)
            {
                if (node == null)
                { }
                else
                {
                }
            }
        }

        public void PackingBoxes()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var setCount = int.Parse(input.ReadLine());
            List<int> results = new List<int>();

            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                int transportation = 0;
                var s = input.ReadLine().Split();
                int carCount = int.Parse(s[0]);
                int[] cars = new int[carCount];

                int capacity = int.Parse(s[1]);
                int[] degreesCounts = new int[(int)Math.Log2(capacity) + 1];

                int boxCount = int.Parse(input.ReadLine());
                List<int> degrees = input.ReadLine().Split(' ').Select(x => int.Parse(x)).ToList();
                for (int i = 0; i < degrees.Count; i++)
                {
                    degreesCounts[degrees[i]]++;
                }

                while (degreesCounts.Any(item => item > 0))
                {
                    Array.Fill(cars, capacity);
                    for (int carIndex = 0; carIndex < carCount; carIndex++)
                    {
                        for (int boxIndex = degreesCounts.Length - 1; boxIndex >= 0; boxIndex--)
                        {
                            if (degreesCounts[boxIndex] > 0 && cars[carIndex] - (int)Math.Pow(2, boxIndex) >= 0)
                            {
                                cars[carIndex] -= (int)Math.Pow(2, boxIndex);
                                degreesCounts[boxIndex]--;
                                boxIndex++;
                            }
                        }
                    }
                    transportation++;
                }
                results.Add(transportation);
            }

            foreach (var result in results)
                output.WriteLine(result);
        }

        public void SimilarLogins()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var empLogins = new List<string>();
            var canLogins = new List<string>();

            var employeesCount = int.Parse(input.ReadLine());
            for (int i = 0; i < employeesCount; i++)
            {
                empLogins.Add(input.ReadLine());
            }

            var candidatesCount = int.Parse(input.ReadLine());
            int[] results = new int[candidatesCount];

            for (int i = 0; i < candidatesCount; i++)
            {
                canLogins.Add(input.ReadLine());
            }

            for (int i = 0; i < candidatesCount; i++)
            {
                for (int j = 0; j < employeesCount; j++)
                {
                    if (canLogins[i] == empLogins[j])
                    {
                        results[i] = 1;
                        break;
                    }
                    else if (canLogins[i].Length == empLogins[j].Length)
                    {
                        int loginLen = canLogins[i].Length;
                        int diffCount = 0;
                        bool isDiff = false;

                        for (int cIndex = 0; cIndex < loginLen; cIndex++)
                        {
                            // Главная проверка на транспозицию.
                            if (canLogins[i][cIndex] != empLogins[j][cIndex])
                            {
                                if ((cIndex != loginLen - 1))
                                {
                                    if (canLogins[i][cIndex] == empLogins[j][cIndex + 1] &&
                                        canLogins[i][cIndex + 1] == empLogins[j][cIndex])
                                    {
                                        diffCount++;
                                        cIndex++;
                                    }
                                    else
                                    {
                                        // Не разрешается транспозицией. Не похож.
                                        isDiff = true;
                                        break;
                                    }
                                }
                                else
                                {
                                    // Разница в последнем символе, не разрешается транспозицией. Не похож.
                                    isDiff = true;
                                    break;
                                }
                            }

                            if (diffCount > 1)
                            {
                                isDiff = true;
                                break;
                            }
                        }

                        if (!isDiff)
                        {
                            results[i] = 1;
                            break;
                        }
                    }
                }
            }

            foreach (var result in results)
                output.WriteLine(result);
        }
    }
}
