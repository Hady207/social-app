/*
  Warnings:

  - You are about to drop the column `dislikes` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "dislikes",
DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile" TEXT;

-- CreateTable
CREATE TABLE "_userLikedComment" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_userDislikedComment" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userLikedComment_AB_unique" ON "_userLikedComment"("A", "B");

-- CreateIndex
CREATE INDEX "_userLikedComment_B_index" ON "_userLikedComment"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userDislikedComment_AB_unique" ON "_userDislikedComment"("A", "B");

-- CreateIndex
CREATE INDEX "_userDislikedComment_B_index" ON "_userDislikedComment"("B");

-- AddForeignKey
ALTER TABLE "_userLikedComment" ADD CONSTRAINT "_userLikedComment_A_fkey" FOREIGN KEY ("A") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userLikedComment" ADD CONSTRAINT "_userLikedComment_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userDislikedComment" ADD CONSTRAINT "_userDislikedComment_A_fkey" FOREIGN KEY ("A") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userDislikedComment" ADD CONSTRAINT "_userDislikedComment_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
