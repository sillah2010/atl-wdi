-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM authors
JOIN books ON authors.id = books.author_id

-- Find all fields (book and author related) for all books written by Milan Kundera.

-- Find all books written by an author from China or the UK.
SELECT * FROM books
INNER JOIN authors ON books.author_id = authors.id
WHERE authors.nationality IN ('China', 'United Kingdom');
-- Find out how many books Albert Camus wrote.

-- Find out how many books were written by US authors.

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM authors
JOIN books ON authors.id = books.author_id
WHERE authors.nationality = 'Argentina'
AND books.publication_date > 1930;
-- Find all books written before 1980 by authors not from the US.

-- Find all authors whose names start with 'J'.

-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
