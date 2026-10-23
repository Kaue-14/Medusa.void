-- SQL | Queries, functions, joins, aliases, and numeric values.
CREATE TABLE customers (
    id INT PRIMARY KEY,
    display_name VARCHAR(120) NOT NULL,
    email VARCHAR(255) UNIQUE,
    active BOOLEAN DEFAULT TRUE,
    balance DECIMAL(10, 2) DEFAULT 0.00
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(32) DEFAULT 'pending'
);

-- Find active customers with successful orders.
SELECT
    c.id,
    c.display_name AS customer_name,
    COUNT(o.id) AS order_count,
    SUM(o.total) AS total_spent
FROM customers AS c
INNER JOIN orders AS o ON o.customer_id = c.id
WHERE c.active = TRUE
  AND o.status IN ('paid', 'completed')
  AND o.total >= 25.50
GROUP BY c.id, c.display_name
HAVING COUNT(o.id) > 1
ORDER BY total_spent DESC
LIMIT 20;
