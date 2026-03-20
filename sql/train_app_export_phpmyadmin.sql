-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `train_app`
--

-- --------------------------------------------------------

--
-- Structure de la table `city`
--

CREATE TABLE `city` (
  `idCity` int(11) NOT NULL,
  `nameCity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `city`
--

INSERT INTO `city` (`idCity`, `nameCity`) VALUES
(1, 'Paris'),
(2, 'Lyon'),
(3, 'Marseille'),
(4, 'Lille'),
(5, 'Bordeaux'),
(6, 'Nantes'),
(7, 'Strasbourg');

-- --------------------------------------------------------

--
-- Structure de la table `linestops`
--

CREATE TABLE `linestops` (
  `idLineStop` int(11) NOT NULL,
  `trainLineId` int(11) NOT NULL,
  `cityId` int(11) NOT NULL,
  `stopOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `linestops`
--

INSERT INTO `linestops` (`idLineStop`, `trainLineId`, `cityId`, `stopOrder`) VALUES
(1, 2, 4, 1),
(2, 2, 1, 2),
(3, 2, 5, 3),
(4, 1, 1, 1),
(5, 1, 2, 2),
(6, 1, 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `schedules`
--

CREATE TABLE `schedules` (
  `idSchedule` int(11) NOT NULL,
  `lineStopId` int(11) NOT NULL,
  `time` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `schedules`
--

INSERT INTO `schedules` (`idSchedule`, `lineStopId`, `time`) VALUES
(1, 1, '08h00'),
(2, 2, '10h00'),
(3, 3, '12h00');

-- --------------------------------------------------------

--
-- Structure de la table `trainlines`
--

CREATE TABLE `trainlines` (
  `idLine` int(11) NOT NULL,
  `nameLine` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `trainlines`
--

INSERT INTO `trainlines` (`idLine`, `nameLine`) VALUES
(1, 'TGV Nord-Atlantique'),
(2, 'TGV Méditerranée');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `passwordhash` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`idCity`);

--
-- Index pour la table `linestops`
--
ALTER TABLE `linestops`
  ADD PRIMARY KEY (`idLineStop`);

--
-- Index pour la table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`idSchedule`);

--
-- Index pour la table `trainlines`
--
ALTER TABLE `trainlines`
  ADD PRIMARY KEY (`idLine`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `city`
--
ALTER TABLE `city`
  MODIFY `idCity` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `linestops`
--
ALTER TABLE `linestops`
  MODIFY `idLineStop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `idSchedule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `trainlines`
--
ALTER TABLE `trainlines`
  MODIFY `idLine` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
