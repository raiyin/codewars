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
        public void FirstTask()
        {
            using var output = new StreamWriter(Console.OpenStandardOutput());
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

        public void DeleteDigit()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var numberCount = int.Parse(input.ReadLine());
            List<string> results = new List<string>();

            for (int setIndex = 0; setIndex < numberCount; setIndex++)
            {
                char minDigit;
                var s = input.ReadLine();

                if (s.Length == 0 || s.Length == 1)
                {
                    results.Add("0");
                    continue;
                }

                int minDigitIndex = -1;
                for (int i = 0; i < s.Length - 1; i++)
                {
                    if (s[i] < s[i + 1])
                    {
                        minDigitIndex = i;
                        break;
                    }
                }

                if (minDigitIndex == -1)
                {
                    minDigitIndex = s.Length - 1;
                }

                results.Add(s.Remove(minDigitIndex, 1));
            }
            foreach (var result in results)
                output.WriteLine(result);
        }

        public void DividingArrays()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            List<long> results = new List<long>();
            var setCount = int.Parse(input.ReadLine());
            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                long tempResult = 0;
                var len = int.Parse(input.ReadLine());
                int[] bottom = input.ReadLine().Split().Select(item => int.Parse(item)).ToArray();
                int[] up = input.ReadLine().Split().Select(item => int.Parse(item)).ToArray();

                for (int i = 0; i < bottom.Length; i++)
                {
                    if (i == 0)
                    {
                        tempResult = up[i] - bottom[i] + 1;
                    }
                    else
                    {
                        long mul = 0;
                        mul = (up[i] / (i + 1)) - (bottom[i] / (i + 1));
                        if ((bottom[i] % (i + 1)) == 0)
                            mul++;
                        tempResult = (tempResult * mul) % (1000000000 + 7);
                    }
                }
                results.Add(tempResult % (1000000000 + 7));
            }

            foreach (var result in results)
                output.WriteLine(result);
        }

        public void ValidationResponse()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            List<string> results = new List<string>();

            var setCount = int.Parse(input.ReadLine());
            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {

                int numCount = int.Parse(input.ReadLine());
                string[] rawIn = input.ReadLine().Split(' ');
                string rawOut = input.ReadLine();

                if (rawIn.Length != numCount)
                {
                    results.Add("no");
                    continue;
                }

                try
                {
                    int[] ints = rawIn.Select(item => int.Parse(item)).ToArray();
                    Array.Sort(ints);
                    string processOut = string.Join(" ", ints);
                    if (processOut != rawOut)
                    {
                        results.Add("no");
                    }
                    else
                    {
                        results.Add("yes");
                    }
                }
                catch (Exception ex)
                {
                    results.Add("no");
                    continue;
                }
            }

            foreach (var result in results)
                output.WriteLine(result);
        }

        public void MirrorPairs()
        {
            using var input = new StreamReader(Console.OpenStandardInput());
            using var output = new StreamWriter(Console.OpenStandardOutput());

            var results = new List<long>();
            var setCount = int.Parse(input.ReadLine());
            for (int setIndex = 0; setIndex < setCount; setIndex++)
            {
                int numCount = int.Parse(input.ReadLine());
                long[] numbers = input.ReadLine().Split().Select(item => long.Parse(item)).ToArray();

                var diffCountDict = new Dictionary<long, long>();
                diffCountDict.Add(numbers[0] - numbers[1], 1);
                long pairCount = 0;

                for (int i = 1; i < numbers.Length - 1; i++)
                {
                    long diff = numbers[i] - numbers[i + 1];
                    if (diffCountDict.ContainsKey(diff))
                    {
                        pairCount += diffCountDict[diff];
                        diffCountDict[diff]++;
                        if (numbers[i - 1] - numbers[i] == diff)
                            pairCount--;
                    }
                    else
                    {
                        diffCountDict.Add(diff, 1);
                    }
                }
                results.Add(pairCount);
            }

            foreach (var result in results)
                output.WriteLine(result);
        }
    }
}