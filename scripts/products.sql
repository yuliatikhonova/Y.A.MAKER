USE handcraftedheirloom;

CREATE TABLE items(
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- image IMAGE,
  name VARCHAR,
  price DECIMAL,
  description VARCHAR,
);

INSERT INTO items (name, price, description) values("Play Tower with slide","$200", "Play tower for kids to climb on with slide attachment.");
INSERT INTO items (name, price, description) values("Side Shelf", "$250", "Small single shelf.");
INSERT INTO items (name, price, description) values("Standing Crib", "$300", "Small standing crib with lower shelf.");
INSERT INTO items (name, price, description) values("Coffee Table", "$350", "Soft light colored wooden coffee table.");
INSERT INTO items (name, price, description) values("Climbing Tower", "$250", "Colorfull climbing tower with rock wall attachment.");
INSERT INTO items (name, price, description) values("Play Tower", "$175", "Play Tower for kids to climb on.");
INSERT INTO items (name, price, description) values();
INSERT INTO items (name, price, description) values();
INSERT INTO items (name, price, description) values();
