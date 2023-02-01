-- AlterTable
ALTER TABLE `matches` ADD COLUMN `leverageId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Leverage` (
    `leverageId` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `result` VARCHAR(191) NULL,

    PRIMARY KEY (`leverageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `matches` ADD CONSTRAINT `matches_leverageId_fkey` FOREIGN KEY (`leverageId`) REFERENCES `Leverage`(`leverageId`) ON DELETE SET NULL ON UPDATE CASCADE;
