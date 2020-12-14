-- Practice > SQL > Aggregation > Weather Observation Station 14
-- Query the greatest value of the Northern Latitudes (LAT_N) from STATION that is less than 137.2345.
-- Truncate your answer to 4 decimal places.

SELECT FLOOR(LAT_N * 10000) / 10000
FROM STATION
WHERE LAT_N < 137.2345
ORDER BY LAT_N desc
LIMIT 1;