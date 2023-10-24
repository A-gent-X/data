CREATE TABLE animal_species(
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) UNIQUE NOT NULL,
  ability VARCHAR(64) NOT NULL,
  type VARCHAR(32) NOT NULL
);

CREATE TABLE animals(
  id SERIAL PRIMARY KEY,
  nickname VARCHAR(64),
  age INT NOT NULL
);

CREATE TABLE abilities(
  id SERIAL PRIMARY KEY,
  power INT NOT NULL,
  stastus_effect VARCHAR(32),
  type VARCHAR(32) NOT NULL
);

CREATE TABLE animal_abilities(
  id SERIAL PRIMARY KEY,
  animal_id INT NOT NULL REFERENCES animals(id),
  abilities_id INT NOT NULL REFERENCES abilities(id)
);

CREATE TABLE adobtess(
 id SERIAL PRIMARY KEY,
  first_name VARCHAR(64),
  last_name VARCHAR(64),
  dob DATE NOT NULL,
  animal_id INT NOT NULL UNIQUE REFERENCES animal(id)
);
 
INSERT INTO animal_species (name, animal, type) VALUES
('Irish Terrior', 'Bark', 'Bite', 'Fetch'),
('Bengal Cat', 'Purr', 'Bite', 'Stratch'),
('Cockatiel', 'Mimic speech', 'Fly', 'Whistle'),
('Iguana', 'Self Camoflauge', 'Regengation', 'Stratch');

 
INSERT INTO animals (name, animal, age) VALUES
('Clifford', 'Dog', 2),
('Barry', 'Cat', 4),
('Perry', 'Bird', 6);
