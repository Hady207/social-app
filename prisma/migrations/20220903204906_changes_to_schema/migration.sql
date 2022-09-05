/*
  Warnings:

  - You are about to drop the column `likedById` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likedById_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_savedById_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "likedById";

-- CreateTable
CREATE TABLE "_usersLikedIt" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_usersSavedIt" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_usersLikedIt_AB_unique" ON "_usersLikedIt"("A", "B");

-- CreateIndex
CREATE INDEX "_usersLikedIt_B_index" ON "_usersLikedIt"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_usersSavedIt_AB_unique" ON "_usersSavedIt"("A", "B");

-- CreateIndex
CREATE INDEX "_usersSavedIt_B_index" ON "_usersSavedIt"("B");

-- AddForeignKey
ALTER TABLE "_usersLikedIt" ADD CONSTRAINT "_usersLikedIt_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_usersLikedIt" ADD CONSTRAINT "_usersLikedIt_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_usersSavedIt" ADD CONSTRAINT "_usersSavedIt_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_usersSavedIt" ADD CONSTRAINT "_usersSavedIt_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
