-- VILLES
INSERT INTO city (nameCity) VALUES
('Paris'),
('Lyon'),
('Marseille'),
('Lille'),
('Bordeaux'),
('Nantes'),
('Strasbourg');

-- LIGNES
INSERT INTO train_lines (nameLine) VALUES
('TGV Nord-Atlantique'),
('TGV Méditerranée');

-- ASSOCIATIONS (ordre des arrêts)
-- TGV Nord-Atlantique : Lille → Paris → Bordeaux
INSERT INTO lineStops (stopOrder, trainLineId, cityId) VALUES
(1, 2, 4),
(2, 2, 1),
(3, 2, 5);

-- TGV TGV Méditerranée : Paris → Lyon → Marseille
INSERT INTO lineStops (stopOrder, trainLineId, cityId) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);


-- HORAIRES
INSERT INTO schedules (time, lineStopId) VALUES
('08h00', 1),
('10h00', 2),
('12h00', 3);