-- Weather Observation Station 5
-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
-- use TOP in T-SQL

-- city in STATION with the shortest CITY names
SELECT CITY, CHAR_LENGTH(CITY)
FROM STATION
ORDER BY CHAR_LENGTH(CITY) ASC, CITY ASC
LIMIT 1;


-- city in STATION with the longest CITY names
SELECT CITY, CHAR_LENGTH(CITY)
FROM STATION
ORDER BY CHAR_LENGTH(CITY) DESC, CITY ASC
LIMIT 1;