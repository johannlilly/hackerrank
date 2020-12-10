-- Weather Observation Station 11
-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

SELECT DISTINCT CITY
FROM STATION
WHERE NOT SUBSTRING(CITY,1,1) IN ('a','e','i','o','u')
  OR NOT SUBSTRING(REVERSE(CITY),1,1) IN ('a','e','i','o','u');