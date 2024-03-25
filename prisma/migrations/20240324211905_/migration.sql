-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "password" TEXT NOT NULL,
    "directionId" INTEGER,
    CONSTRAINT "userEntity_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_userEntity" ("directionId", "email", "id", "isActive", "name", "password") SELECT "directionId", "email", "id", "isActive", "name", "password" FROM "userEntity";
DROP TABLE "userEntity";
ALTER TABLE "new_userEntity" RENAME TO "userEntity";
CREATE UNIQUE INDEX "userEntity_email_key" ON "userEntity"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
