USE handcraftedheirloom;

CREATE TABLE items(
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- image IMAGE,
  name VARCHAR,
  price DECIMAL,
  description VARCHAR,
);

INSERT INTO items (name, price, description) values("Tray"," $35", "The Wooden tray is a light tan color. It can be used as a side table or to eat by the tv.");
INSERT INTO items (name, price, description) values("Stool", "$40", "This wooden stool has a unique cut out making it light weight.");
INSERT INTO items (name, price, description) values("Plate Set", "$120", "This wooden plate set comes with 5 salad plates and 6 dinner plates.");
INSERT INTO items (name, price, description) values("Wood Mortar and Pestle", "$25", "This small wooden mortar and pestle are great for grinding herbs.");
INSERT INTO items (name, price, description) values("Lamp Shade", "$35", "This unique wooden lamp shade is compatible with a hanging light fixture or a lamp.");
INSERT INTO items (name, price, description) values("Bean Bag Chair", "$150", "The bean bag chair offers a stylish seat for any home.");
INSERT INTO items (name, price, description) values("Chair Set", "$375", "The chair set comes with 1 master chair and 3 stools.");
INSERT INTO items (name, price, description) values("Ottoman", "$125", "Use this wooden ottoman inside or outside to add extra seating or as a table.");
INSERT INTO items (name, price, description) values("Lamp Shade Set", "$65", "The lamp shade set comes with 1 wide basket covering and 1 small basket. Display them together or separately, for hanging lamps only.");
INSERT INTO items (name, price, description) values("Armrest Coaster", "$20", "The armrest coaster offers a convient alternative to a side table.");
