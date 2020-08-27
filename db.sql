CREATE DATABASE highorc;

CREATE TABLE stores (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(50),  /* Null for delivery */
  city VARCHAR(25) NOT NULL 
);

INSERT INTO stores (name, address, city) values 
('Jungle Boys', '1 Tech Dr', 'Santa Ana'),
('People''s OC', '24 Orange St', 'Santa Ana'),
('Nice Guy''s', '4 Nighthaven Ave', 'Irvine'),
('Dank You', '11 Seton Dr', 'Orange'),
('SoCal''s Finest', '19 Wintersweet Way', 'Irvine'),
('The Good Stuff', '9 Fine Rd', 'Los Angeles');