/*
  Warnings:

  - You are about to alter the column `cantidad_persona` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "requerimiento" TEXT NOT NULL,
    "cantidad_persona" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "salonId" INTEGER NOT NULL,
    CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "userEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "Salon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reservation" ("cantidad_persona", "descripcion", "endDate", "id", "requerimiento", "salonId", "startDate", "state", "userId") SELECT "cantidad_persona", "descripcion", "endDate", "id", "requerimiento", "salonId", "startDate", "state", "userId" FROM "Reservation";
DROP TABLE "Reservation";
ALTER TABLE "new_Reservation" RENAME TO "Reservation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
