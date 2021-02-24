-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2021 at 07:45 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_records`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_master_table`
--

CREATE TABLE `employee_master_table` (
  `employee_number` int(10) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `birthday` date NOT NULL,
  `age` int(2) NOT NULL,
  `address` varchar(200) NOT NULL,
  `telephone_number` varchar(20) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_master_table`
--

INSERT INTO `employee_master_table` (`employee_number`, `last_name`, `first_name`, `middle_name`, `sex`, `birthday`, `age`, `address`, `telephone_number`, `entry_date`) VALUES
(1, 'Dela Cruz', 'Juan', 'Castro', '1', '1991-01-01', 30, 'juan.delacruz@gmail.com', '1234567890', '2021-02-24 05:03:20'),
(2, 'Dela Cruz', 'Juan', 'Castro', '1', '1991-01-01', 30, 'juan.delacruz@gmail.com', '1234567890', '2021-02-24 05:05:49'),
(3, 'Dela Cruz', 'Juan', 'Castro', '1', '1991-01-01', 30, 'juan.delacruz@gmail.com', '1234567890', '2021-02-24 05:05:57'),
(4, 'Dela Cruz', 'Juan', 'Castro', '1', '1991-01-01', 30, 'juan.delacruz@gmail.com', '1234567890', '2021-02-24 05:06:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_master_table`
--
ALTER TABLE `employee_master_table`
  ADD PRIMARY KEY (`employee_number`),
  ADD KEY `last_name` (`last_name`),
  ADD KEY `first_name` (`first_name`),
  ADD KEY `entry_date` (`entry_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_master_table`
--
ALTER TABLE `employee_master_table`
  MODIFY `employee_number` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
