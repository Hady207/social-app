-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likedById_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_savedById_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "likedById" DROP NOT NULL,
ALTER COLUMN "savedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_savedById_fkey" FOREIGN KEY ("savedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
