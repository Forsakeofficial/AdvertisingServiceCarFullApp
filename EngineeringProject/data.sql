-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cardata
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
-- Table structure for table `carHGV`
--

DROP TABLE IF EXISTS `carHGV`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carHGV` (
  `carHGV_id` int NOT NULL AUTO_INCREMENT,
  `carHGV_mark` varchar(45) DEFAULT NULL,
  `carHGV_model` varchar(45) DEFAULT NULL,
  `carHGV_state` varchar(45) DEFAULT NULL,
  `carHGV_vin` varchar(45) DEFAULT NULL,
  `carHGV_mileage` int DEFAULT NULL,
  `carHGV_vehicle_registration` varchar(45) DEFAULT NULL,
  `carHGV_data_first_vehicle_registration` varchar(45) DEFAULT NULL,
  `carHGV_year` int DEFAULT NULL,
  `carHGV_fuel` varchar(45) DEFAULT NULL,
  `carHGV_power` int DEFAULT NULL,
  `carHGV_engine` int DEFAULT NULL,
  `carHGV_gearbox` varchar(45) DEFAULT NULL,
  `carHGV_emission` varchar(45) DEFAULT NULL,
  `carHGV_car_body` varchar(45) DEFAULT NULL,
  `carHGV_int_place` int DEFAULT NULL,
  `carHGV_color` varchar(45) DEFAULT NULL,
  `carHGV_type_color` varchar(45) DEFAULT NULL,
  `carHGV_cargo_weight` varchar(45) DEFAULT NULL,
  `carHGV_cargo_load` varchar(45) DEFAULT NULL,
  `carHGV_photo` varchar(500) DEFAULT NULL,
  `carHGV_title` varchar(45) DEFAULT NULL,
  `carHGV_description` varchar(1000) DEFAULT NULL,
  `carHGV_price` varchar(45) DEFAULT NULL,
  `carHGV_name_car` varchar(45) DEFAULT NULL,
  `carHGV_town` varchar(45) DEFAULT NULL,
  `carHGV_phone` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`carHGV_id`),
  KEY `user_id_carHGV_idx` (`user_id`),
  CONSTRAINT `user_id_carHGV` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carHGV`
--

LOCK TABLES `carHGV` WRITE;
/*!40000 ALTER TABLE `carHGV` DISABLE KEYS */;
INSERT INTO `carHGV` VALUES (31,'Volvo','FH16','Używany','1HGCM82633A400001',250000,'ABC-123','2001-05-15',2001,'Diesel',600,16000,'Automatyczna','500','Ciężarówka naczepowa',2,'Niebieski','Metaliczny','25000 ','1200','https://image.ceneostatic.pl/data/products/81935605/i-volvo-fh-16-6x4-2001-r-do-drewna-manual.jpg','Volvo FH16 2001, 25 ton, Automatyczna','Sprzedam używaną ciężarówkę Volvo FH16 z 2001 roku. Mocny silnik o mocy 600 KM, niskie zużycie paliwa. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako ABC-123. Przebieg 250 000 km. Posiada platformę o ładowności 25 ton. Ostatnie badanie spalin Euro 3. Idealna do transportu ciężkich ładunków.','119 900','Jan Kowalski','Warszawa',304293222,8),(32,'MAN','TGS','Nowy','2HGCM82633A400002',200000,'XYZ 789','2023-03-20',2023,'Diesel',450,12000,'Manualna','500','Ciężarówka kontenerowa',3,'Czerwony','Jednolity','30000','20000','https://image.ceneostatic.pl/data/products/95101506/i-man-tgs-33-460-e-6-6-x-4-3-stronny-wywro.jpg','MAN TGS 2023, 20 ton, Manualna','Sprzedam nową ciężarówkę MAN TGS z 2023 roku. Silnik o mocy 450 KM, niskie zużycie paliwa. Wyposażona w manualną skrzynię biegów. Zarejestrowana jako XYZ-789. Przebieg 100 km. Posiada kontenery o ładowności 20 ton. Standard emisji Euro 6. Doskonała do transportu kontenerów.','189 000','Anna Nowak','Kraków',945832962,8),(33,'Scania','R500','Używany','3HGCM82633A400003',320000,'EFG 456','2018-12-10',2018,'Diesel',500,13000,'Automatyczna','430','Ciężarówka chłodnia',2,'Biały','Metaliczny','18000','15000','https://www.truck1-pl.com/img/Ciagnik_siodlowy_Scania_R500_6x2_2950mm-xxl-97/97_6933465039628.jpg','Scania R500 2018, 18 ton, Automatyczna','Sprzedam używaną ciężarówkę Scania R500 z 2018 roku. Potężny silnik o mocy 500 KM, oszczędny w eksploatacji. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako EFG-456. Przebieg 320 000 km. Posiada chłodnię o ładowności 18 ton. Spełnia normy emisji Euro 5. Idealna do transportu produktów spożywczych.','149 900','Piotr Nowak','Gdańsk',492759323,8),(34,'Mercedes-Benz','Actros','Używany','4HGCM82633A400004',280000,'HIJ 789','2019-06-05',2019,'Diesel',460,14000,'Automatyczna','432','Ciężarówka plandeka',2,'Srebny','Metaliczny','22000','20000','https://image.ceneostatic.pl/data/products/90719166/i-mercedes-actros-1851-mp4-limited-retarder-euro-6.jpg','Mercedes-Benz Actros 2019','Sprzedam używaną ciężarówkę Mercedes-Benz Actros z 2019 roku. Silnik o mocy 460 KM, oszczędny w eksploatacji. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako HIJ-789. Przebieg 280 000 km. Posiada plandekę o ładowności 22 ton. Spełnia normy emisji Euro 6. Idealna do transportu różnych towarów.','169 500 ','Marta Kowalska','Poznań',42358293,8),(35,'DAF','XF','Używany','5HGCM82633A400005',300000,'KLM 999','2017-08-15',2017,'Diesel',430,12000,'Automatyczna','300','Ciężarówka wywrotka',3,'Żółty','Jednolity','16000','13000','https://image.ceneostatic.pl/data/products/84172651/i-daf-xf-460-ssc-euro-6-zbiorniki-1500-l-acc.jpg','DAF XF 2017, 16 ton, Automatyczna','Sprzedam używaną ciężarówkę DAF XF z 2017 roku. Silnik o mocy 430 KM, oszczędny w eksploatacji. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako KLM-999. Przebieg 300 000 km. Posiada wywrotkę o ładowności 16 ton. Spełnia normy emisji Euro 6. Idealna do transportu materiałów budowlanych.','129 000','Adam Kowalski','Łódź',853293592,8),(36,'Iveco','Stralis','Używany','6HGCM82633A400006',220000,'NOP 789','2016-10-12',2016,'LPG',360,10000,'Automatyczna','400','Ciężarówka chłodnia',2,'Niebieski','Metaliczny','15000','13000','https://image.ceneostatic.pl/data/products/78684570/i-sprzedam-iveco-stralis-540-euro-5-stan-bdb.jpg','Iveco Stralis 2016, 15 ton','Sprzedam używaną ciężarówkę Iveco Stralis z 2016 roku. Silnik CNG o mocy 360 KM, ekologiczny i oszczędny. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako NOP-789. Przebieg 220 000 km. Posiada chłodnię o ładowności 15 ton. Spełnia normy emisji Euro 6. Idealna do transportu produktów spożywczych.','135 500','Olek Smoly','Katowice',493203582,7),(37,'Renault','Magnum 480','Nowy','7HGCM82633A400007',492302,'QRS 123','2023-02-28',2023,'Diesel',150,25000,'Manualna','500','Mikrociężarówka',3,'Biały','Jednolity','10000','8000','https://image.ceneostatic.pl/data/products/82238207/i-renault-magnum-480-dxi-eev-sprowadzona-z-de.jpg','Renault Trafic 2023','Sprzedam nową mikrociężarówkę Renault Trafic z 2023 roku. Silnik o mocy 150 KM, bardzo ekonomiczny. Wyposażona w manualną skrzynię biegów. Zarejestrowana jako QRS-123. Przebieg 50 km. Posiada ładowność 1 ton. Spełnia normy emisji Euro 6. Idealna do transportu mniejszych ładunków.','65 000','Ewa Wacław','Wrocław',583392035,7),(38,'Volvo','FM','Używany','8HGCM82633A400008',179997,'TUV 456','2015-09-17',2015,'Diesel',420,13000,'Manualna','450','Ciężarówka kontenerowa',2,'Biały','Metaliczny','17000','14500','https://image.ceneostatic.pl/data/products/64663067/i-volvo-fm-450-euro6-2015-standard-nowy-model-aso.jpg','Volvo FM 2015','Sprzedam używaną ciężarówkę Volvo FM z 2015 roku. Silnik o mocy 420 KM, oszczędny w eksploatacji. Wyposażona w manualną skrzynię biegów. Zarejestrowana jako TUV-456. Przebieg 180 000 km. Posiada kontenery o ładowności 17 ton. Spełnia normy emisji Euro 5. Idealna do transportu kontenerów.','119 500','Janina Bienias','Poznań',503482305,7),(39,'MAN','TGX','Używany','9HGCM82633A400009',260000,'XYZ 111','2016-12-03',2016,'Diesel',480,14000,'Automatyczna','350','Ciężarówka wywrotka',3,'Czerwony','Me','19000','17000','https://image.ceneostatic.pl/data/products/80975312/i-man-tgx-euro-6-navi-acc-eba-hydraulika-klima-igla.jpg','MAN TGX 2016','Sprzedam używaną ciężarówkę MAN TGX z 2016 roku. Silnik o mocy 480 KM, oszczędny w eksploatacji. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako XYZ-111. Przebieg 260 000 km. Posiada wywrotkę o ładowności 19 ton. Spełnia normy emisji Euro 6. Idealna do transportu materiałów budowlanych.','139 500','Wojciech Nowak','Kraków',58329358,7),(40,'Mercedes-Benz','Actros','Używany','10HGCM82633A400010',310000,'LMN 987','2017-11-25',2017,'Diesel',480,14000,'Automatyczna','600','Ciężarówka kontenerowa',2,'Srebrny','Metaliczny','19000','17000','https://image.ceneostatic.pl/data/products/76264204/i-mercedes-benz-actros-1848-bigspace-retarder-euro6.jpg','\"Mercedes-Benz Actros 2017 rok','Sprzedam używaną ciężarówkę Mercedes-Benz Actros z 2017 roku. Silnik o mocy 480 KM, oszczędny w eksploatacji. Wyposażona w automatyczną skrzynię biegów. Zarejestrowana jako LMN-987. Przebieg 310 000 km. Posiada kontenery o ładowności 18 ton. Spełnia normy emisji Euro 6. Idealna do transportu kontenerów.','142 300','Ewa Mała','Warszawa',493582395,7);
/*!40000 ALTER TABLE `carHGV` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carPart`
--

DROP TABLE IF EXISTS `carPart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carPart` (
  `carParts_id` int NOT NULL AUTO_INCREMENT,
  `carParts_name` varchar(45) DEFAULT NULL,
  `carParts_state` varchar(45) DEFAULT NULL,
  `carParts_manufacturer` varchar(45) DEFAULT NULL,
  `carParts_manufacturer_reference_number` varchar(50) DEFAULT NULL,
  `carParts_photo` mediumtext,
  `carParts_title` varchar(45) DEFAULT NULL,
  `carParts_description` varchar(1000) DEFAULT NULL,
  `carParts_price` varchar(45) DEFAULT NULL,
  `carParts_name_user` varchar(45) DEFAULT NULL,
  `carParts_town` varchar(45) DEFAULT NULL,
  `carParts_phone` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`carParts_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id_carPart` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carPart`
--

LOCK TABLES `carPart` WRITE;
/*!40000 ALTER TABLE `carPart` DISABLE KEYS */;
INSERT INTO `carPart` VALUES (133,'Amortyzatory przednie','Nowy','Bilstein','G0412NZK','https://i.ebayimg.com/images/g/yxYAAOSwaPtkjVoq/s-l1200.webp','Zawieszenie przednie Bilstein','Nowe zawieszenie przednie marki Bilstein, gwarancja jakości','350','Jan Mały','Warszawa',953452385,7),(134,'Klocki hamulcowe','Używane','Brembo','67890','https://www.ebrakes.pl/img/499/klocki-hamulcowe-brembo-p-28-034x-xtra.jpg','Klocki hamulcowe Brembo','Używane hamulce tarczowe marki Brembo w dobrym stanie.','120','Anna Kosior','Mały Raj',596023485,7),(135,'Olej silnikowy','Nowy','Mobil 1','54321','https://sklep.dynex.pl/cdn/erp/img/00/5t/cu/00/5w-30-5l-mobil-olej-silnikowy-5w-30-5l-mobil-xe-502-00-505-00-505-01-acea-c-005tcu_1_view.jpg?t=765ya5rns','Olej silnikowy Mobil ','Nowy olej silnikowy Mobil 1, 5W-30, najlepsza jakość. 5 L','40','Piotr Wiśniewski','Gdańsk',405994323,7),(136,'Koła aluminiowe','Używane','Enkei','24680','https://xfelgi.pl/17809-large_default/enkei-izumo-85x20-5x120-et35.jpg','Koła aluminiowe Enkei','Używane koła aluminiowe marki Enkei w dobrym stanie.','250','Magdalena Dąbrowska','Dobroń',994332445,7),(137,'Filtr powietrza','Nowy','Bosch','13579','https://europarts.pl/cdn/erp/img/00/9j/5k/00/1457433004-filtr-powietrza-009j5k_1_view.jpg?t=75wrnzooy','Filtr powietrza Bosch','Nowy filtr powietrza marki Bosch, zapewnia czyste powietrze dla silnika.','15','Grzegorz Nowak','Wrocław',950234582,7),(138,'Akumulator4','Nowy','Exide','86420','https://sklep.prostowniki-akumulatory.pl/images/Produkty/Auto/Exide/watermark/wpx_a0134c560a7ddee8b6f8e90db76c5912.png','Akumulator Exideta','Nowy akumulator marki Exide, zapewnia niezawodne rozruchy','500','Olek','Katowice',8342132,8),(139,'Świece zapłonowe','Nowe','NGK','73249','https://superparts.pl/340726-large_default/swiece-zaplonowe-ngk-silzkr6b10e-hyundai-kia.jpg','Świece zapłonowe NGK','Nowe świece zapłonowe marki NGK, polepszą pracę silnika','200','Marcin Nowicki','Opole',392385311,8),(140,'Rozrusznik','Używany','Valeo','78963','https://media.pkwteile.de/360_photos/13773808/h-preview.jpg','Rozrusznik Valeo','Używany rozrusznik marki Valeo w sprawnej kondycji','100','Ewa Nowakowska','Łódź',994111333,8),(141,'Opony letnie','Nowe','Michelin','57412','https://www.oponeo.pl/gfx/seoProducer/michelin/tireMichelin.webp','Opony letnie Michelin','Nowe opony letnie marki Michelin, doskonała przyczepność.','1200','Mariusz Kowalczyk','Kraków',666332953,8),(142,'Wahacz','Używany','Meyle','62437','https://m.media-amazon.com/images/I/81caoywar7L._AC_UF1000,1000_QL80_.jpg','Wahacz Meyle','Używany wahacz marki Meyle w dobrym stanie.','620','Agnieszka Kaczmarek','Gliwice',987654321,8);
/*!40000 ALTER TABLE `carPart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carPassenger`
--

DROP TABLE IF EXISTS `carPassenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carPassenger` (
  `carPassenger_id` int NOT NULL AUTO_INCREMENT,
  `carPassenger_mark` varchar(45) DEFAULT NULL,
  `carPassenger_model` varchar(45) DEFAULT NULL,
  `carPassenger_state` varchar(45) DEFAULT NULL,
  `carPassenger_vin` varchar(45) DEFAULT NULL,
  `carPassenger_mileage` int DEFAULT NULL,
  `carPassenger_vehicle_registration` varchar(45) DEFAULT NULL,
  `carPassenger_data_first_vehicle_registration` varchar(45) DEFAULT NULL,
  `carPassenger_year` int DEFAULT NULL,
  `carPassenger_fuel` varchar(45) DEFAULT NULL,
  `carPassenger_power` int DEFAULT NULL,
  `carPassenger_engine` int DEFAULT NULL,
  `carPassenger_doors` int DEFAULT NULL,
  `carPassenger_gearbox` varchar(45) DEFAULT NULL,
  `carPassenger_car_drive` varchar(45) DEFAULT NULL,
  `carPassenger_emission` varchar(45) DEFAULT NULL,
  `carPassenger_car_body` varchar(45) DEFAULT NULL,
  `carPassenger_int_place` int DEFAULT NULL,
  `carPassenger_color` varchar(45) DEFAULT NULL,
  `carPassenger_type_color` varchar(45) DEFAULT NULL,
  `carPassenger_photo` varchar(500) DEFAULT NULL,
  `carPassenger_title` varchar(45) DEFAULT NULL,
  `carPassenger_description` varchar(1000) DEFAULT NULL,
  `carPassenger_price` varchar(45) DEFAULT NULL,
  `carPassenger_name_car` varchar(45) DEFAULT NULL,
  `carPassenger_town` varchar(45) DEFAULT NULL,
  `carPassenger_phone` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`carPassenger_id`),
  KEY `user_id_carPassenger_idx` (`user_id`),
  CONSTRAINT `user_id_carPassenger` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carPassenger`
--

LOCK TABLES `carPassenger` WRITE;
/*!40000 ALTER TABLE `carPassenger` DISABLE KEYS */;
INSERT INTO `carPassenger` VALUES (100,'Volkswagen','Golf','Używany','WVWZZZ1JZ3W462001',120000,'XYZ 12345','2018-05-10',2018,'Benzyna',110,1600,5,'Manualna','Przedni','120','Hatchback',5,'Czarny','Perłowy','https://images.clickdealer.co.uk/vehicles/3153/3153000/large1/64806123.jpg','Volkswagen Golf 2018, Benzyna','Sprzedam używanego Volkswagena Golfa z 2018 roku. Samochód w dobrym stanie, z niskim przebiegiem 120 000 km. Posiada benzynowy silnik o mocy 110 KM, manualną skrzynię biegów, i pięć drzwi. Przedni napęd. Zarejestrowany jako XYZ-12345. Kolor nadwozia to czarny metaliczny. Idealny dla rodzin.','42 500 ','Ola Pawlak','Szczecin',483053852,7),(102,'Ford','Focus','Używany','WF0AXXWPDA6M28888',80000,'ABC 54321','2017-11-15',2017,'Diesel',120,1600,5,'Automatyczna','Przedni','130','Sedan',5,'Srebrny','Metaliczny','https://ireland.apollo.olxcdn.com/v1/files/v0jnt3n6aq99-PL/image;s=1015x761','Ford Focus 2017, Diesel, Automatyczna','Sprzedam używanego Forda Focusa z 2017 roku. Samochód w bardzo dobrym stanie, z niskim przebiegiem 80 000 km. Posiada diesla o mocy 120 KM, automatyczną skrzynię biegów i pięć drzwi. Przedni napęd. Zarejestrowany jako ABC-54321. Kolor nadwozia to srebrny metaliczny. Idealny dla miłośników komfortu.','39 900 ','Jan Nowak','Kraków',987654321,7),(103,'Toyota','Corolla','Nowy','JTDSXHEE202345678',10,'EFG 98765','2023-03-01',2023,'Hybryda',150,1800,5,'Automatyczna','Przedni','111','Sedan',5,'Czerwony','Jednolity','https://fleet.com.pl/filemanager/photos/uploads/posts/9544/Toyota-Corolla-GR-Sport-Touring-Sports.jpg','Toyota Corolla 2023','Sprzedam nową Toyotę Corollę z 2023 roku. Samochód jest fabrycznie nowy, z przebiegiem zaledwie 10 km. Wyposażony w hybrydowy silnik o mocy 150 KM, automatyczną skrzynię biegów i cztery drzwi. Przedni napęd. Zarejestrowany jako EFG-98765. Kolor nadwozia to czerwony jednolity. Idealny dla ekologicznych kierowców.','59 500','Karolina Kaczewiak','Kutno',583952395,7),(104,'Honda','Civic','Używany','SHHEE777778888888',95000,'LMN 54321','2019-08-20',2019,'Benzyna',140,1800,4,'Manualna','Przedni','100','Sedan',5,'Niebieski','Metaliczny','https://www.autocentrum.pl/LTIwMTkuYzUoFTtnRA5uIWtNb3sKFmEyIBsoewwUIDgsBTR5Gx0jICZYeDAPQHxkeUR4bFgUfDJ_Ti4xX0N-YioUYjwEGyg1ZBQkIgIWYSxkHywgCB0uNSocYGEPWH15eVo7IA4WYSA8BS87RkR-bSIaYG1eHjt5e0d8Y0ZHfGVwWSckDFcx','Honda Civic 2019','Sprzedam używaną Hondę Civic z 2019 roku. Samochód w bardzo dobrym stanie, z przebiegiem 95 000 km. Posiada benzynowy silnik o mocy 140 KM, manualną skrzynię biegów i cztery drzwi. Przedni napęd. Zarejestrowany jako LMN-54321. Kolor nadwozia to niebieski metaliczny. Idealny dla miłośników jazdy ręczną skrzynią biegów.','44 900','Marek Sosa','Sopot',592859393,7),(105,'Renault','Megane','Używany','VF1KZ0005678912345',75000,'NOP 9876','2018-03-15',2018,'Diesel',120,1600,5,'Automatyczna','Przedni','100','Kombi',5,'Srebrny','Metaliczny','https://img.chceauto.pl/renault/megane/renault-megane-hatchback-5-drzwiowy-3295-29459_v1.jpg','Renault Megane ','Sprzedam używanego Renault Megane z 2018 roku. Samochód w dobrym stanie, z przebiegiem 75 000 km. Posiada diesla o mocy 120 KM, automatyczną skrzynię biegów i pięć drzwi. Przedni napęd. Zarejestrowany jako NOP-9876. Kolor nadwozia to srebrny metaliczny. Idealny dla rodzin z dużym bagażem.','37 800','Karolina Kowalska','Oleksiana',559555222,7),(107,'BMW','3 Series','Używany','WBA3N3C51EF712345',75000,'EZG 5999','2019-02-15',2014,'Benzyna',184,2000,4,'Automatyczna','Tylny','200','Coupe',4,'Czarny ','Metaliczny','https://bmw-uzywane.com.pl/assets/photo/upload/cars/4647707/fab1c77e-725c-43f3-855c-b2a6ab40fe6f__3-scale-1200-0.jpg','BMW seria 3','Sprzedam używane BMW 3 Series z 2014 roku. Samochód w doskonałym stanie, z przebiegiem 75 000 km. Posiada benzynowy silnik o mocy 184 KM, automatyczną skrzynię biegów i cztery drzwi. Napęd tylny. Zarejestrowany jako GHI-98765. Kolor nadwozia to czarny metaliczny. Idealny dla miłośników sportowej jazdy.','49 900','Pawel Mały','Zielona Góra',583234422,8),(108,'Mercedes-Benz','C-Class','Używany','WDDZF4HB3CA123456',85000,'ELZ 5999','2016-07-12',2016,'Diesel',170,2200,4,'Automatyczna','Tylny','200','Sedan',5,'Biały ','Perłowy','https://img.organizacja-wesel.pl/uploads/photos/2a80a471/piekny-najnowszy-bialy-mercedes-klasy-c-e-i-s-warszawa.jpg','Mercedes-Benz klasa C','Sprzedam używanego Mercedes-Benz C-Class z 2016 roku. Samochód w bardzo dobrym stanie, z przebiegiem 85 000 km. Posiada silnik diesla o mocy 170 KM, automatyczną skrzynię biegów i cztery drzwi. Napęd tylny. Zarejestrowany jako JKL-54321. Kolor nadwozia to biały perłowy. Idealny dla osób ceniących luksus i komfort.','47800','Olek Cnoty','Poznań',599302862,8),(109,'Subaru','Outback','Używany','4S4BRBGC3B3323456',60000,'TU 40230','2018-09-30',2018,'Benzyna',175,2500,5,'Automatyczna','4x4','134','Kombi',5,'Zielony','Metaliczny','https://media.ed.edmunds-media.com/subaru/outback/2018/oem/2018_subaru_outback_4dr-suv_25i-touring_fq_oem_1_1600.jpg','Subaru Outback używany','Sprzedam używanego Subaru Outback z 2018 roku. Samochód w doskonałym stanie, z przebiegiem 60 000 km. Posiada benzynowy silnik o mocy 175 KM, automatyczną skrzynię biegów i pięć drzwi. Napęd AWD (4x4). Zarejestrowany jako MNO-98765. Kolor nadwozia to zielony metaliczny. Idealny dla miłośników przygód i terenowych wypraw.','52 500','Ewa Farna','Gorzów Wielkopolski',999222333,8),(110,'Hyundai','Tucson','Używany','KM8J33AC9LU123456',70000,'EWI 4005','2017-04-25',2017,'Benzyna',132,1600,5,'Manualna','Przedni','100','SUV',7,'Czarny','Metaliczny','https://www.autotesto.pl/blog/wp-content/uploads/2020/11/duncan-winslow-Xs69Y3k1ru4-unsplash-667x445.jpg','Hyundai Tucson SUV','Sprzedam używanego Hyundaia Tucson z 2017 roku. Samochód w dobrym stanie, z przebiegiem 70 000 km. Posiada benzynowy silnik o mocy 132 KM, manualną skrzynię biegów i pięć drzwi. Napęd przedni. Zarejestrowany jako PQR-54321. Kolor nadwozia to srebrny metaliczny. Idealny dla rodzin i miłośników SUV-ów.','37 500','Paweł Jaworek','Toruń',588222333,8);
/*!40000 ALTER TABLE `carPassenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carTruck`
--

DROP TABLE IF EXISTS `carTruck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carTruck` (
  `carTruck_id` int NOT NULL AUTO_INCREMENT,
  `carTruck_mark` varchar(45) DEFAULT NULL,
  `carTruck_model` varchar(45) DEFAULT NULL,
  `carTruck_state` varchar(45) DEFAULT NULL,
  `carTruck_vin` varchar(45) DEFAULT NULL,
  `carTruck_mileage` int DEFAULT NULL,
  `carTruck_vehicle_registration` varchar(45) DEFAULT NULL,
  `carTruck_data_first_vehicle_registration` varchar(45) DEFAULT NULL,
  `carTruck_year` int DEFAULT NULL,
  `carTruck_fuel` varchar(45) DEFAULT NULL,
  `carTruck_power` int DEFAULT NULL,
  `carTruck_engine` int DEFAULT NULL,
  `carTruck_gearbox` varchar(45) DEFAULT NULL,
  `carTruck_emission` varchar(45) DEFAULT NULL,
  `carTruck_car_body` varchar(45) DEFAULT NULL,
  `carTruck_int_place` int DEFAULT NULL,
  `carTruck_color` varchar(45) DEFAULT NULL,
  `carTruck_type_color` varchar(45) DEFAULT NULL,
  `carTruck_cargo_capacity` varchar(45) DEFAULT NULL,
  `carTruck_cargo_weight` varchar(45) DEFAULT NULL,
  `carTruck_cargo_load` varchar(45) DEFAULT NULL,
  `carTruck_photo` varchar(500) DEFAULT NULL,
  `carTruck_title` varchar(45) DEFAULT NULL,
  `carTruck_description` varchar(1000) DEFAULT NULL,
  `carTruck_price` varchar(45) DEFAULT NULL,
  `carTruck_name_car` varchar(45) DEFAULT NULL,
  `carTruck_town` varchar(45) DEFAULT NULL,
  `carTruck_phone` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`carTruck_id`),
  KEY `user_id_carTruck_idx` (`user_id`),
  CONSTRAINT `user_id_carTruck` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carTruck`
--

LOCK TABLES `carTruck` WRITE;
/*!40000 ALTER TABLE `carTruck` DISABLE KEYS */;
INSERT INTO `carTruck` VALUES (49,'Mercedes-Benz','Sprinter','Używany','WDB9076361P123456',150000,'XYZ 98765','2019-08-20',2019,'Diesel',160,2200,'Automatyczna','139','VAN',3,'Biały','Metaliczny','1200','1500','800','https://www.trucksnl.com/pictures/ad-7554962-b56650dacb67419f/samochod_dostawczy_zamkniety_mercedes_benz_314_cdi_143pk_rwd_l2h2_7g_automaat_camera_navi_laadklep_10_2018_2018_7554962-10.jpg','Mercedes-Benz Sprinter 2019','Sprzedam używany Mercedes-Benz Sprinter z 2019 roku. Samochód dostawczy w bardzo dobrym stanie, z przebiegiem 150 000 km. Posiada silnik diesla o mocy 160 KM, automatyczną skrzynię biegów, i ładowność 12 m³. Zarejestrowany jako XYZ-98765. Kolor nadwozia to biały metaliczny. Idealny do transportu towarów.','69 900','Mariusz Zenek','Łódź',582395392,8),(50,'Ford','Transit','Używany','WF0XXXTTFXKP12345',120000,'ABC-54321','2018-11-15',2018,'Diesel',130,2000,'Manualna','129','VAN',3,'Biały','Metaliczny','1300','1400','750','https://www.autocentrum.pl/Z2VuZHkudVM3Fyx7RA54R3RPeGcKFndUPxk_ZwoHLls1GT9nXhE5VmcROSxeTWlTZhNuLFxAaAtkEWgpRBM1QDJYLjoKGylbIlgxJwUBI1wjFDkiClg2VzEQNCwSWzBCMVcn','Ford Transit 2018','Sprzedam używany Ford Transit z 2018 roku. Samochód dostawczy w dobrym stanie, z przebiegiem 120 000 km. Posiada silnik diesla o mocy 130 KM, manualną skrzynię biegów, i ładowność 10 m³. Zarejestrowany jako ABC-54321. Kolor nadwozia to biały metaliczny. Idealny do przewozu towarów.','59500','Bolek Olek','Zacisze',987654321,8),(51,'Renault','Master','Nowy','VF1MAF5R2K1234567',50,'EFG 54321','2023-03-01',2023,'Diesel',100,2300,'Automatyczna','150','VAN',3,'Czarny','Jednolity','1400','1600','900','https://kup.renault.pl/CarExportImageManager.axd?ImageId=84081_0','Renault Master 2023','Sprzedam nowego Renault Mastera z 2023 roku. Samochód dostawczy jest fabrycznie nowy, z przebiegiem zaledwie 100 km. Wyposażony w silnik diesla o mocy 150 KM, automatyczną skrzynię biegów, i ładowność 14 m³. Zarejestrowany jako EFG-54321. Kolor nadwozia to biały jednolity. Idealny do profesjonalnych przewozów.','74900','Karolina Nowak','Warszawa',555444333,8),(52,'Volkswagen','Crafter','Używany','WV1ZZZ2EZK1234567',90000,'LMN 98765','2017-07-15',2017,'Diesel',140,2200,'Automatyczna','150','VAN',3,'Niebieski','Metaliczny','1100','1500','850','https://lellek.pl/wp-content/uploads/2022/09/20220913_104704-1920x933.jpg','Volkswagen Crafter ','Sprzedam używanego Volkswagena Craftera z 2017 roku. Samochód dostawczy w bardzo dobrym stanie, z przebiegiem 90 000 km. Posiada silnik diesla o mocy 140 KM, automatyczną skrzynię biegów, i ładowność 11 m³. Zarejestrowany jako LMN-98765. Kolor nadwozia to biały metaliczny. Idealny do dostaw towarów.','63 900','Marek Kowalski','Czarna góra',595238492,8),(53,'Fiat','Ducato','Używany','ZFA2500001K1234567',110000,'NOP 54321','2016-06-10',2016,'Diesel',120,2300,'Manualna','130','VAN',3,'Zielony','Jednolity','1300','1400','900','https://image.ceneostatic.pl/data/products/62290261/i-fiat-ducato-2-3-jtd-lh3-h2-oryginal-przebieg.jpg','Fiat Ducato 2016','Sprzedam używanego Fiata Ducato z 2016 roku. Samochód dostawczy w dobrym stanie, z przebiegiem 110 000 km. Posiada silnik diesla o mocy 120 KM, manualną skrzynię biegów, i ładowność 13 m³. Zarejestrowany jako NOP-54321. Kolor nadwozia to biały jednolity. Idealny do przewozu towarów i małych ładunków.','52 500','Karolina Owsiak','Bydgoszcz',999444203,8),(54,'Iveco','Daily','Używany','ZCFC50C0201234567',70000,'DEF 86420','2019-03-12',2018,'Diesel',140,2287,'Automatyczna','122','Furgon',2,'Czerwony','Metaliczny','1100','1500','1250','https://lamar.com.pl/wp-content/uploads/2016/03/iveco-daily-furgon-kurier-dhl-lamar.jpg','Iveco Daily furgon','Furgon Iveco Daily w doskonałym stanie w świetnej cenie.','19 500','Tadeusz Masz','Olsztyn',996403285,7),(55,'Nissan','NV200','Używany','SJKFAF0D123456789',55000,'MNO 35741','2021-02-08',2020,'Benzyna',110,1598,'Manualna','150','Furgon',2,'Czarny','Jednolity','900','1000','800','https://img.classistatic.de/api/v1/mo-prod/images/71/710e49cb-a0ba-4dd7-8c8c-1e33ba9852fd?rule=mo-640.jpg','Nissan NV200','Kompaktowy furgon Nissan NV200 do dostaw w mieście','125 000','Ala Mala','Bądzyń',583023853,7),(56,'Citroen','Jumper','Używany','VF7ZHWLRF12345678',95000,'XYZ 98765','2016-09-14',2015,'Diesel',130,2198,'Manualna','120','Furgon',3,'Biały','Jednolity','1200','500','200','https://autoline.com.pl/img/s/samochod-kombi-minibus-CITROEN-JUMPER-BRYGADOWKA-7-OSOBOWA-L4H2---1685027450450064257_common--23052518104634651800.jpg','Citroen Jumper 2015 ','Samochód w bardzo dobrym stanie technicznym i wizualnym. Zabudowa chłodnicza 8 EP z możliwością podzielenia zabudowy na dwie różne temperatury- dwa agregaty Carrier. Wnętrze jest bardzo czyste i zadbane. Plastiki oraz deska rozdzielcza nie są zarysowane. Jednostka napędowa zapewnia dynamikę oraz wysoką kulturę jazdy. Powłoka lakiernicza bez najmniejszych zarzutów. Zawieszenie i hamulce pracują nienagannie.\nPosiadamy własny serwis pojazdów, w związku z tym istnieje możliwość dostosowania podzespołów pojazdu do wymogów kupującego – wszelkie modyfikacje, to tylko kwestia uzgodnienia pomiędzy stronami.','56 400','Weronika Makiewicz','Białystok',403283503,7),(57,'Ford','Transit Connect','Używany','1D8GUC8998W242934',190000,'HA GV90','2015-03-20',2014,'Diesel',115,1560,'Manualna','100','Furgon',2,'Biały','Metaliczny','1000','400','200','https://www.autocentrum.pl/ac-file/article/5dcd1dcd583a0f4d75292d2a.jpg','Ford Transit Connect  ','Bardzo Ładny Ford ! ! ! !\nRok 22.11. 2014 Model 2015\nSilnik Diesel ! ! !\nManualna Skrzynia Biegów ! ! !\n100% ORYGINAŁ PRZEBIEG!!!\n100% ORYGINAŁ LAKIER!!!\nOPIS POJAZDU :\nAUTO GODNE POLECENIA I UWAGI,\nMOŻLIWOŚĆ SPRAWDZENIA AUTA NA DOWOLNEJ STACJI DIAGNOSTYCZNEJ , CZUJNIKIEM LAKIERU , DIAGNOSTYKA KOMPUTEROWA\nWspółpracujemy z liderami w branży finansowej dającą profesjonalną obsługę finansową w postaci Kredytu Samochodowego oraz Leasingu.\nWspółpraca: Getin Bank, Santander Bank, Paribas Fortis, BNP.\nDecyzja o zdolności kredytowej zostaje podjęta do 1h.\n','35 999','Ewa Białak','Ustka',593059325,7),(58,'Maxus','e-Deliver 9','Nowy','2C3CDZBTXFH839031',1,'ERA 9432','2023-05-01',2023,'Elektryczny',200,1999,'Automatyczna','150','Furgon',3,'Srebny','Perłowy','800','400','320','https://www.auto-gazda.pl/maxus/wp-content/uploads/sites/10/2022/11/IMG_20230111_125310-1000x750.jpg','Maxus E-Deliver 9','FEROWANY SAMOCHÓD:\n- Maxus e-Deliver 9\n- Silnik: 0\n- Skrzynia biegów: Automatic\n- Wersja: e-Deliver 9 L3H2\n- Rocznik 2022\nOdbiór w salonie lub dostawa pod dom!\n────────────────────────────────────────────────────────────\nWYPOSAŻENIE DODATKOWE (w cenie samochodu):\n• Dodatkowa wykładzina przestrzeni bagażowej\n• Drzwi przesuwne lewe\n• Kabel do ładowania (do Wall BOX)\n','370 107','Alan Kwiecin','Jugosławia',593204742,7);
/*!40000 ALTER TABLE `carTruck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Prezes','Prezes','$2a$10$f.FuO0hSZslBZonMIYw9JOYwoNbsOSkdnnZHvIOdB1AH1H4IC3NIC','Prezes'),(8,'Kuba@gmail.com','Kuba','$2a$10$Ls46OImfodSw/xcyr5piwudfgMwn6i8kPhcQ0BTrXvg7XOdRaj21u','Kuba'),(9,'anna','Anna','$2a$10$fXRFsvm40RBHfvCGKtuuhOP4y92fGUciPjeV5uMfg0f1UETwQ3FgK','anna');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKj6m8fwv7oqv74fcehir1a9ffy` (`role_id`),
  KEY `FK2o0jvgh89lemvvo17cbqvdxaa_idx` (`user_id`),
  CONSTRAINT `FK2o0jvgh89lemvvo17cbqvdxaa` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKj6m8fwv7oqv74fcehir1a9ffy` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-15 11:48:48
