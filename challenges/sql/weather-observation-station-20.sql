-- Practice > SQL > Aggregation > Weather Observation Station 20
-- A median is defined as a number separating the higher half of a data set from the lower half.
-- Query the median of the Northern Latitudes (LAT_N) from STATION and round your answer to 4 decimal places.

SELECT ROUND(AVG(middle_values),4) AS 'median'
FROM (
  SELECT t1.LAT_N AS 'middle_values'
  FROM
    ( SELECT @row:=@row+1 as `row`, x.LAT_N
      FROM STATION AS x, (SELECT @row:=0) AS r
      ORDER BY x.LAT_N
    ) AS t1,
    ( SELECT COUNT(*) AS 'count'
      FROM STATION x
    ) AS t2
  WHERE t1.row >= t2.count/2
    AND t1.row <= ((t2.count/2) + 1)
) AS t3;
