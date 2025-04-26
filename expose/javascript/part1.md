1. Line 9 prints 'values added:  20'.  

2. Line 13 prints 'final result:  20'.  

3. We should not use 'var' because the variable has no scope.   
'result' SHOULD only exist within the if statement because it was declared there.  
Changing a value within an if statement outside the if block can cause issues within the if block.  

4. Line 9 should print 'values added: 20' but it instead gives me an error because of line 13 not recognizing 'result'.  
The console.log on line 9 has access to 'result' but the error comes from the 'MODULE_NOT_FOUND' error on line 13.     

5. On line 13, I received a 'MODULE_NOT_FOUND' error because we used 'let' instead of 'var'.  
Since 'result' is declared within the if statement using let, it has scope. This causes 'result' to be undefined outside the if block.  

6. The code returns an erro because we cannot reassign a constant variable.  
'result' was declared as const and we tried to reassign it in the if statement using num1 and num2 after it was already assigned the value 0.  
This causes an error to occur. 

7. Once again, it gives me an error because we tried to reassign a const varaible using num1 and num2 inside the if block.  