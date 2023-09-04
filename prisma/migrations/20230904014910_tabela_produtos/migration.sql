/*
  Warnings:

  - You are about to drop the column `disponivelComprado` on the `Produtos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "beenComprado" BOOLEAN NOT NULL DEFAULT false,
    "disponivelCompra" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Produtos" ("beenComprado", "id", "image", "name", "price") SELECT "beenComprado", "id", "image", "name", "price" FROM "Produtos";
DROP TABLE "Produtos";
ALTER TABLE "new_Produtos" RENAME TO "Produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
