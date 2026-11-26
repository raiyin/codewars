using System;
using System.Security.Cryptography;
using System.Collections.Generic;

public class Kata
{
    // Sum of positive (https://www.codewars.com/kata/5715eaedb436cf5606000381/)
    public static int PositiveSum(int[] arr)
    {
        int sum = 0;
        for (int i = 0; i < arr.Length; i++)
        {
            if (arr[i] > 0)
            {
                sum += arr[i];
            }
        }
        return sum;
    }

    // Square(n) Sum (https://www.codewars.com/kata/515e271a311df0350d00000f)
    public static int SquareSum(int[] numbers)
    {
        int sum = 0;
        for (int i = 0; i < numbers.Length; i++)
        {
            sum += numbers[i] * numbers[i];
        }
        return sum;
    }

    // Remove First and Last Character (https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)
    public static string Remove_char(string s)
    {
        if (s.Length == 2)
            return string.Empty;

        return s.Substring(1).Substring(0, s.Length - 2);
    }

    // Count of positives / sum of negatives (https://www.codewars.com/kata/576bb71bbbcf0951d5000044)
    public static int[] CountPositivesSumNegatives(int[] input)
    {
        if (input == null || input.Length == 0)
            return Array.Empty<int>();

        var result = new int[] { 0, 0 };
        for (int i = 0; i < input.Length; i++)
        {
            if (input[i] > 0)
            {
                result[0]++;
            }
            else if (input[i] < 0)
            {
                result[1] += input[i];
            }
        }
        return result;
    }

    // Merge two sorted arrays into one (www.codewars.com/kata/5899642f6e1b25935d000161)
    public static int[] MergeArrays(int[] arr1, int[] arr2)
    {
        if (arr1.Length == 0 && arr2.Length == 0)
            return [];

        int index1, index2, inc1, inc2;
        List<int> result = new List<int>();

        if (arr1.Length == 0)
        {
            if (arr2[0] <= arr2[arr2.Length - 1])
            {
                result.Add(arr2[0]);
                for (int i = 1; i < arr2.Length; i++)
                {
                    if (arr2[i] != result[^1])
                    {
                        result.Add(arr2[i]);
                    }
                }
            }
            else
            {
                result.Add(arr2[^1]);
                for (int i = arr2.Length - 2; i >= 0; i--)
                {
                    if (arr2[i] != result[^1])
                    {
                        result.Add(arr2[i]);
                    }
                }
            }
        }
        else if (arr2.Length == 0)
        {
            if (arr1[0] <= arr1[arr1.Length - 1])
            {
                result.Add(arr1[0]);
                for (int i = 1; i < arr1.Length; i++)
                {
                    if (arr1[i] != result[^1])
                    {
                        result.Add(arr1[i]);
                    }
                }
            }
            else
            {
                result.Add(arr1[^1]);
                for (int i = arr1.Length - 2; i >= 0; i--)
                {
                    if (arr1[i] != result[^1])
                    {
                        result.Add(arr1[i]);
                    }
                }
            }
        }
        else
        {
            if (arr1[0] <= arr1[arr1.Length - 1])
            {
                index1 = 0;
                inc1 = 1;
            }
            else
            {
                index1 = arr1.Length - 1;
                inc1 = -1;
            }

            if (arr2[0] <= arr2[arr2.Length - 1])
            {
                index2 = 0;
                inc2 = 1;
            }
            else
            {
                index2 = arr2.Length - 1;
                inc2 = -1;
            }

            while (true)
            {

                if ((index1 < 0 || index1 >= arr1.Length) && (index2 < 0 || index2 >= arr2.Length))
                    break;

                int next;

                if (index1 < 0 || index1 >= arr1.Length)
                {
                    next = arr2[index2];
                    index2 += inc2;
                }
                else if (index2 < 0 || index2 >= arr2.Length)
                {
                    next = arr1[index1];
                    index1 += inc1;
                }
                else
                {
                    if (arr1[index1] <= arr2[index2])
                    {
                        next = arr1[index1];
                        index1 += inc1;
                    }
                    else
                    {
                        next = arr2[index2];
                        index2 += inc2;
                    }
                }

                if (result.Count == 0 || next != result[^1])
                    result.Add(next);
            }

        }

        return result.ToArray();
    }
}

class Program
{
    static void Main()
    {
        // onsole.WriteLine(Kata.PositiveSum(new int[] { 1, 2, 3, 4, 5 })); // =15
        // Console.WriteLine(Kata.SquareSum(new int[] { 5, 3, 4 })); // =50
        // Console.WriteLine(Kata.Remove_char("country")); // ="ountr"
        // Console.WriteLine(Kata.CountPositivesSumNegatives(new[] { 0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14 })); // [8]
        Console.WriteLine(string.Join(",", Kata.MergeArrays([1, 2, 3, 4], [5, 6, 7, 8]))); // {1, 2, 3, 4, 5, 6, 7, 8}
    }
}
