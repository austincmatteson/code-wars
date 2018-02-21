[Challenge](https://www.codewars.com/kata/52fba66badcd10859f00097e)

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


Regex was the first thing that came to my mind for once. It was so simple I just had to use it. I did refactor after finishing. Originally I used [aeiouAEIOU] but then I learned about i making it case insensitive and made it [aeiou].