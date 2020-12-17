-- Practice > SQL > Aggregation > Weather Observation Station 19
-- Consider P1(a,c) and P2(b,d) to be two points on a 2D plane where (a,b) are the respective minimum
-- and maximum values of Northern Latitude (LAT_N) and (c,d) are the respective minimum and maximum values of Western Longitude (LONG_W) in STATION.
-- Query the Euclidean Distance between points P1 and P2 and format your answer to display 4 decimal digits.
-- Euclidean distance = ( (d-b)^2 + (c-a)^2) )^0.5

SET @a = (SELECT MIN(LAT_N) FROM STATION);
SET @b = (SELECT MIN(LONG_W) FROM STATION);
SET @c = (SELECT MAX(LAT_N) FROM STATION);
SET @d = (SELECT MAX(LONG_W) FROM STATION);

SELECT ROUND( SQRT(POW(@d-@b,2) + POW(@c-@a,2)), 4);