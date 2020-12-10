-- Weather Observation Station 6
-- Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

SELECT DISTINCT CITY
FROM STATION
WHERE SUBSTRING(CITY,1,1) = 'a'
  OR  SUBSTRING(CITY,1,1) = 'e'
  OR  SUBSTRING(CITY,1,1) = 'i'
  OR  SUBSTRING(CITY,1,1) = 'o'
  OR  SUBSTRING(CITY,1,1) = 'u';