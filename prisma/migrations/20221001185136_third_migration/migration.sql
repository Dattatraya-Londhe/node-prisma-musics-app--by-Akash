-- AlterTable
ALTER TABLE `audiobook` MODIFY `credits` JSON NULL,
    MODIFY `releaseDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `podcastepisode` MODIFY `releaseDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `studio` MODIFY `deletedAt` DATETIME(3) NULL;
