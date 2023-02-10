/*
  Warnings:

  - The primary key for the `result` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `leverageId` on the `result` table. All the data in the column will be lost.
  - Added the required column `resultId` to the `result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `result` DROP PRIMARY KEY,
    DROP COLUMN `leverageId`,
    ADD COLUMN `resultId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`resultId`);
