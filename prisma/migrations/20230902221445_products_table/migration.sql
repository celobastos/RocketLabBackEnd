-- CreateTable
CREATE TABLE "Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "beenComprado" BOOLEAN NOT NULL DEFAULT true,
    "disponivelComprado" BOOLEAN NOT NULL DEFAULT true
);
