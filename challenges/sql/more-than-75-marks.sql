-- Practice > SQL > Basic Select > Higher Than 75 Marks
-- Query the Name of any student in STUDENTS who scored higher than  Marks.
-- Order your output by the last three characters of each name.
-- If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

SELECT Name
FROM STUDENTS
WHERE Marks > 75
ORDER BY REVERSE(SUBSTRING(REVERSE(NAME),1,3)) ASC
  , ID ASC;