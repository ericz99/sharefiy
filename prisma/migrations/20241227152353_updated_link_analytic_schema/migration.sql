-- DropIndex
DROP INDEX `LinkAnalytic_date_key` ON `linkanalytic`;

-- AlterTable
ALTER TABLE `linkanalytic` MODIFY `date` VARCHAR(191) NOT NULL;
