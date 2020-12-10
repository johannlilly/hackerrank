-- Practice > SQL > Aggregation > Top Earners
-- We define an employee's total earnings to be their monthly  worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table.
-- Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings.
-- Then print these values as  space-separated integers.

SELECT salary * months AS max_earnings, COUNT(name)
FROM Employee
WHERE salary * months = (
    SELECT salary * months AS max_earnings
    FROM Employee
    ORDER BY max_earnings DESC
    LIMIT 1
  )
GROUP BY max_earnings;