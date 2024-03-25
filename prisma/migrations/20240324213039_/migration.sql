/*
  Warnings:

  - Made the column `directionId` on table `userEntity` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "password" TEXT NOT NULL,
    "directionId" INTEGER NOT NULL,
    CONSTRAINT "userEntity_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userEntity" ("directionId", "email", "id", "isActive", "name", "password") SELECT "directionId", "email", "id", "isActive", "name", "password" FROM "userEntity";
DROP TABLE "userEntity";
ALTER TABLE "new_userEntity" RENAME TO "userEntity";
CREATE UNIQUE INDEX "userEntity_email_key" ON "userEntity"("email");
CREATE UNIQUE INDEX "userEntity_directionId_key" ON "userEntity"("directionId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
