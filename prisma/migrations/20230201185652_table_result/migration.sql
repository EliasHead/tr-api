-- CreateTable
CREATE TABLE `result` (
    `leverageId` INTEGER NOT NULL AUTO_INCREMENT,
    `monthly` VARCHAR(191) NOT NULL,
    `result` INTEGER NOT NULL,

    PRIMARY KEY (`leverageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
