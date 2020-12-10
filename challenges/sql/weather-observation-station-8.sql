-- Weather Observation Station 8
-- Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
-- I'd prefer to extract ('a','e','i','o','u') into a variable

SELECT DISTINCT CITY
FROM STATION
WHERE SUBSTRING(CITY,1,1) IN ('a','e','i','o','u')
  AND SUBSTRING(REVERSE(CITY),1,1) IN ('a','e','i','o','u');