-- Weather Observation Station 10
-- Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.

SELECT DISTINCT CITY
FROM STATION
WHERE NOT SUBSTRING(REVERSE(CITY),1,1) IN ('a','e','i','o','u');