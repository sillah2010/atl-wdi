 1) SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population; Holy See (Vatican City State)
 2) SELECT language FROM countrylanguage WHERE countrycode = 'VAT'; (Italian)
 3) SELECT * FROM countrylanguage WHERE language = 'Italian' AND percentage = 100;
    SELECT * FROM country WHERE code = 'SMR'; (San Marino)
 4) SELECT * FROM city WHERE countrycode = 'SMR'; (Serravalle)
 5) SELECT * FROM city WHERE name LIKE 'Serra%';
    SELECT * FROM country WHERE code='BRA';  (Serra, Brazil)
 6) SELECT * FROM city WHERE id='211'; (Brasilia)
 7) SELECT name, district, countrycode FROM city WHERE population = 91084; (Santa Monica, California)
 