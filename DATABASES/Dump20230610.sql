-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: libraria
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blerjet`
--

DROP TABLE IF EXISTS `blerjet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blerjet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userat_id` int DEFAULT NULL,
  `librat_id` int DEFAULT NULL,
  `data_e_blerjes` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userat_id` (`userat_id`),
  KEY `librat_id` (`librat_id`),
  CONSTRAINT `blerjet_ibfk_1` FOREIGN KEY (`userat_id`) REFERENCES `userat` (`id`),
  CONSTRAINT `blerjet_ibfk_2` FOREIGN KEY (`librat_id`) REFERENCES `librat` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blerjet`
--

LOCK TABLES `blerjet` WRITE;
/*!40000 ALTER TABLE `blerjet` DISABLE KEYS */;
/*!40000 ALTER TABLE `blerjet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `linku` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'/img/img1.jpg'),(2,'/img/img1.jpg'),(3,'/img/img1.jpg'),(4,'/img/img1.jpg'),(5,'/img/img1.jpg'),(6,'/img/img1.jpg'),(7,'/img/img1.jpg'),(8,'/img/img1.jpg'),(9,'/img/img1.jpg'),(10,'/img/img1.jpg'),(11,'/img/img1.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `koleksioni`
--

DROP TABLE IF EXISTS `koleksioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `koleksioni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userat_id` int DEFAULT NULL,
  `librat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userat_id` (`userat_id`),
  KEY `librat_id` (`librat_id`),
  CONSTRAINT `koleksioni_ibfk_1` FOREIGN KEY (`userat_id`) REFERENCES `userat` (`id`),
  CONSTRAINT `koleksioni_ibfk_2` FOREIGN KEY (`librat_id`) REFERENCES `librat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `koleksioni`
--

LOCK TABLES `koleksioni` WRITE;
/*!40000 ALTER TABLE `koleksioni` DISABLE KEYS */;
INSERT INTO `koleksioni` VALUES (2,1,35),(3,1,37),(4,1,37),(5,1,49),(6,1,37),(7,1,49),(8,7,37),(9,7,37),(10,7,49),(11,NULL,35),(12,1,38);
/*!40000 ALTER TABLE `koleksioni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `librat`
--

DROP TABLE IF EXISTS `librat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `librat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulli` varchar(70) NOT NULL,
  `isbn` bigint NOT NULL,
  `autori` varchar(70) NOT NULL,
  `viti_botimit` varchar(4) DEFAULT NULL,
  `cmimi` float DEFAULT NULL,
  `zhanri` int NOT NULL,
  `is_visible` tinyint(1) NOT NULL,
  `pdf_link` varchar(255) DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  `pershkrimi_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`),
  KEY `zhanri` (`zhanri`),
  KEY `image_id` (`image_id`),
  KEY `pershkrimi_id` (`pershkrimi_id`),
  CONSTRAINT `librat_ibfk_1` FOREIGN KEY (`zhanri`) REFERENCES `zhanri` (`id`),
  CONSTRAINT `librat_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`id`),
  CONSTRAINT `librat_ibfk_3` FOREIGN KEY (`pershkrimi_id`) REFERENCES `pershkrimi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `librat`
--

LOCK TABLES `librat` WRITE;
/*!40000 ALTER TABLE `librat` DISABLE KEYS */;
INSERT INTO `librat` VALUES (35,'dasdasd',312312,'dasd','1231',1,1,1,'1',1,1),(37,'asdasd',12312,'dasda','1233',1,1,1,'11',1,1),(38,'dasd',1,'dasd','1',1,1,1,'1',1,1),(49,'hello',213124234,'dasd','1993',1,1,1,'1',1,1),(53,'Hello',123123,'asda','1994',1,1,1,'1',1,1);
/*!40000 ALTER TABLE `librat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pershkrimi`
--

DROP TABLE IF EXISTS `pershkrimi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pershkrimi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texti` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pershkrimi`
--

LOCK TABLES `pershkrimi` WRITE;
/*!40000 ALTER TABLE `pershkrimi` DISABLE KEYS */;
INSERT INTO `pershkrimi` VALUES (1,'\"Plaku dhe Deti\" nga Hemingway është një roman emocionues për Santiago, një plak peshkatar që përballet me sfida të mëdha në det. Duke treguar guxim dhe vendosmëri për të fituar, ai shfaq mesazhin e rezistencës dhe besimit në ndeshjen me fatkeqësitë e jetës.'),(2,'\"Vdekja Aniles\" nga Ismail Kadare është një roman që ndjek historinë e Aniles, një vajzë e re që përjeton një dashuri të ndaluar dhe sfida të mëdha në shoqërinë e saj të kufizuar nga ligjet dhe traditat.'),(3,'\"Fletorja Romance\" nga Nicholas Sparks është një roman romantik që rrëfen historinë e dy personazheve që përballen me pengesa dhe sfida në dashurinë e tyre, duke ndërtuar një lidhje të fuqishme emocionale.'),(4,'\"I dashur Xhon\" nga Jane Austen është një roman klasik që përshkruan historinë e një vajze të ri të quajtur Xhon, e cila përjeton aventurat dhe konfuzionet e dashurisë dhe martesës në shoqërinë e kohës së saj.'),(5,'\"Prilli i thyer\" nga F. Scott Fitzgerald është një roman simbolik që ndjek historinë e Jay Gatsby, një personazh misterioz që përpiqet të rikthejë dashurinë e humbur dhe të arrin suksesin në shoqërinë e pasluftës.'),(6,'\"Gjenerali i ushtrisë së vdekur\" nga Ismail Kadare është një roman historik që rrëfen historinë e një gjenerali të vdekur që kthehet për të udhëhequr një ushtri të vdekur në betejën e fundit të tij, përballë çlirimit të vendit.'),(7,'\"Sikur të isha djale\" nga Gjergj Fishta është një roman epik që tregon historinë e Skënderbeut, heroit kombëtar shqiptar, duke e shfaqur atë nëpërmjet aventurave dhe betejave të tij heroike kundër pushtuesve osmanë.'),(8,'\"Histori e Skënderbeut\" nga Marin Barleti është një roman historik që paraqet historinë e jetës dhe luftës së heroit shqiptar Gjergj Kastrioti Skënderbeu, duke treguar rëndësinë e tij në mbrojtjen e vendit dhe kulturës shqiptare.'),(9,'\"Bagëti e Bujqësi\" nga George Orwell është një roman satirik që rrëfen historinë e një fermeri të quajtur Jones, i cili përjeton ndryshime politike dhe ndërlikime në fermën e tij, përfaqësuar nga personazhet e kafshëve antropomorfike.'),(10,'\"Shkëlqimi dhe rënia e shokut Zylo\" nga Gabriel García Márquez është një roman magjikorealist që përshkruan historinë e shokut Zylo, një personazh misterioz që udhëton nëpër kohë dhe hapësirë, duke përjetuar aventura fantastike.'),(11,'\"Komisari Memo\" nga Rexhep Qosja është një roman që rrëfen historinë e komisarit Memoll Dibran, një personazh i vendosur për të zbuluar të vërtetën pas një seri vrasjesh dhe konspiracionesh në një qytet të vogël shqiptar.');
/*!40000 ALTER TABLE `pershkrimi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `session_token` varchar(255) DEFAULT NULL,
  `session_cookies` varchar(255) DEFAULT NULL,
  `session_skadim` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `userat` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userat`
--

DROP TABLE IF EXISTS `userat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emrin` varchar(50) NOT NULL,
  `mbiemri` varchar(50) NOT NULL,
  `email` varchar(80) NOT NULL,
  `passwordi` varchar(255) NOT NULL,
  `privilegji` varchar(50) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userat`
--

LOCK TABLES `userat` WRITE;
/*!40000 ALTER TABLE `userat` DISABLE KEYS */;
INSERT INTO `userat` VALUES (1,'Albin','Abazi','dasda@ads.com','s2dasd','1','1',NULL),(7,'emriOsmani','Obama','dardan@kuqedra.com','12345678','2','/img/rr.jpg','dasdas'),(8,'dasdasdasd','asdasdasdasd','asdasd@sdas.casdadas','$2b$10$3btwvVRuZei5GjcXtnJQC.DiM6Q5c4g4Wc3XwPb.a..5wryyY1A3O',NULL,NULL,NULL),(17,'aaaaaaa','aaaaaaaa','aaaaaa@a.a','$2b$10$WySfDJZcTDjmMnrlPpCsKeHWp2cK9su2PeNZxO.v663udCmHdMbTe',NULL,NULL,NULL),(18,'bbbbbb','bbbbbb','b@b.b','$2b$10$3MTuAxugALJvULevfzgoxuZKggY0h7UzTUAkNDI.7F/TlpeCKui92','1',NULL,NULL),(19,'ccc','ccccccc','c@c.c','$2b$10$9UW1M92f6QHNqGBHQCl4Fehf3jDfp9HWjq.EZh9pDpw8fc8EqKV7m','2','/img/rr.jpg',NULL);
/*!40000 ALTER TABLE `userat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhanri`
--

DROP TABLE IF EXISTS `zhanri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zhanri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `zhanri` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhanri`
--

LOCK TABLES `zhanri` WRITE;
/*!40000 ALTER TABLE `zhanri` DISABLE KEYS */;
INSERT INTO `zhanri` VALUES (1,'Drame'),(2,'Tragjedi'),(3,'Romance'),(4,'Roman'),(5,'Poem');
/*!40000 ALTER TABLE `zhanri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 12:46:08
