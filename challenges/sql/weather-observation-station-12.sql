-- Weather Observation Station 12
-- Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.

SELECT DISTINCT CITY
FROM STATION
WHERE NOT SUBSTRING(CITY,1,1) IN ('a','e','i','o','u')
  AND NOT SUBSTRING(REVERSE(CITY),1,1) IN ('a','e','i','o','u');