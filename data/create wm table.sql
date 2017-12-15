CREATE TABLE `syslog` (
	`timestamp` VARCHAR(50) NOT NULL,
	`id` VARCHAR(50) NOT NULL,
	`role` VARCHAR(50) NOT NULL,
	`type` VARCHAR(50) NOT NULL,
	`data` VARCHAR(50) NULL DEFAULT NULL
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
