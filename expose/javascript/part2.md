1. Line 12 prints 3. Since i is declared as var, it has no scope. The conosle.log() below the for loop has access to var i.  
The for loop completes its full run by going through the entire length of the length of prices array.  
Since the prices array has length 3, the for loop finishes its run prints 3.    

2. Line 13 prints 150. Since discountedPrice is declared as var, it has no scope. discountedPrice is declared as var on every iteration.  
After the for loop we console.log(discountedPrice) which will print the last iterations discountedPrice. In this case the last number in prices is 300.  
So it calculates half of 300 and console logs the discounted price.  

3. Line 14 prints 150. finalPrice will continuously be updated until the for loop finishes.  
After the for loop we console.log(finalPrice) which will print the final update of finalPrice. In this case the last number in prices is 300.  
So it calculates half of 300 and console logs the discounted price.  

4. This function returns the new array of discounted prices. This happens because the function simply calculates the discounted prices using the discount argument.  
It calculated the discounted price for every price in the prices array and adds it to the discounted array. Then it returns this new array.  

5. On line 12 we get a reference error. This happens because i is declared as let which gives this variable scope. Since i has scope it is not recognized outside the for loop.  

6. On line 13 we get a reference error again. discountedPrices is declared with let, so it has scope. Therefore, discountedPrice is not recognized outside the for loop.  

7. Line 14 console logs the final price which is 150. Since finalPrice is declared within the function above the for loop with let, anything inside the function can access it.  

8. This function returns the new array of discounted prices. This happens because the function simply calculates the discounted prices using the discount argument.  
It calculated the discounted price for every price in the prices array and adds it to the discounted array. Then it returns this new array.  

9. The code causes a ReferenceError because i is declared as let. Since i is declared as let, it has scope. This means we cannot access i outside the for loop.  
So we cannot console.log i after the for loop.    

10. Line 12 console logs 3. This happens because length is declared in the function above the for loop as const.  
Since length is not reassigned and is within the scope of the console log, it successfully logs 3 without errors.  

11. This function returns the new array of discounted prices. This happens because the function simply calculates the discounted prices depending on the discount argument.  
It calculated the discounted price for every price in the prices array and adds it to the discounted array. Then it returns this new array.


12. 
 - A. `student.name`
 - B. `student['grad year']`
 - C. `student.greeting()`
 - D. `student['favorite teacher'].name`
 - E. `student.courseLoad[0]`

13.  
 - A. 32. This converts the integer 2 into a string and concatenates them. 
 - B. 1. This converts the string 3 into an integer and subtracts 2 from it. 
 - C. 3. Null gets converted to 0 so it adds 0 and 3 and prints 3. 
 - D. 3null. This converts null into a string and concatenates it with 3.
 - E. 4. Since 1 is equal to true and false is equal to 0, it converts true to 1 and adds 3. 
 - F. 0. False is equal to 0 and null gets converted to 0 so it prints 0. 
 - G. 3undefined. This converts undefined to a string and concatenates it with '3'.
 - H. NaN. This prints 'Not a number' because undefined cannot be converted to a number so 3 subtracts nothing from it. 

14. 
 - A. true. It converts 2 into an integer and compares them. Since 2 is greater than 1 it prints true. 
 - B. false. It does a lexicographical comparison and checks '2' and '1' in Ascii.    
      Since '2' is represented by 50 and '1' is represented by 49, '2' < '12' returns false.
 - C. true. We are using the loose equality operator so it converts '2' into a 2 and returns true.
 - D. false. We are using the strict equality operator so it checks the type and the value which are not equal.
 - E. false. True converts to the integer 1 and 1 does not equal 2. 
 - F. true. The Boolean() function converts any non-zero number to true so `Boolean(2)` converts to true in its type and value. 

15. == is a loose equality operator. This simply checks the value and not the type. So '2' == 2 will be true here because the '2' will be converted into an integer.  
=== is a strict equality operator. This checks the value and the type. So '2' === 2 will be false becuase it will not do any type conversions and compare it as well.  

17. The result will return [2, 4, 6]. This happens because first we pass `[1, 2, 3]` into the function `modifyArray(array, callback)`.  
We also pass in the `doSomething(num)`. So for each value inside 'array' we call `doSomething(num)` which returns the number multiplied by 2.  
Finally, we push the number into a new const array `newArr`. After the for loop, we return `newArr` which is all the numbers in the original array multiplied by 2.  

18. The output is 1 4 3 2. This prints because setTimeout() waits for the set time in arg2 to execute the function.   