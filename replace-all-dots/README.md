[Challenge](https://www.codewars.com/kata/fixme-replace-all-dots/javascript)

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

**Task:**
Fix the bug so we can all go home early.

**Notes:**
String str will never be null.


So I feel silly. Overthought this one a bit, and missed the super easy fix of an escape character for the period. Ended up going with split and join as my quick, clever fix.