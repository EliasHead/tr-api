-- CreateTable
CREATE TABLE `Competition` (
    `competition_id` INTEGER NOT NULL AUTO_INCREMENT,
    `competition_name` VARCHAR(255) NOT NULL,
    `season_name` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`competition_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teams` (
    `team_id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_name` VARCHAR(255) NOT NULL,
    `team_country` VARCHAR(255) NOT NULL,
    `team_initials` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`team_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matches` (
    `match_id` INTEGER NOT NULL AUTO_INCREMENT,
    `match_date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `home_goals` INTEGER NOT NULL DEFAULT 0,
    `visitor_goals` INTEGER NOT NULL DEFAULT 0,
    `odd` DOUBLE NULL,
    `strategy` VARCHAR(255) NULL,
    `result` VARCHAR(255) NULL,
    `review` VARCHAR(255) NULL,
    `stake` DOUBLE NULL,
    `round` INTEGER NOT NULL DEFAULT 0,
    `competition_id` INTEGER NULL,
    `home_team_id` INTEGER NOT NULL,
    `visitor_team_id` INTEGER NOT NULL,

    UNIQUE INDEX `Matches_round_home_team_id_visitor_team_id_key`(`round`, `home_team_id`, `visitor_team_id`),
    PRIMARY KEY (`match_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Matches` ADD CONSTRAINT `Matches_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `Competition`(`competition_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matches` ADD CONSTRAINT `Matches_home_team_id_fkey` FOREIGN KEY (`home_team_id`) REFERENCES `Teams`(`team_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matches` ADD CONSTRAINT `Matches_visitor_team_id_fkey` FOREIGN KEY (`visitor_team_id`) REFERENCES `Teams`(`team_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
