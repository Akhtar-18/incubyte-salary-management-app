/*
  Warnings:

  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "salary" REAL NOT NULL,
    "department" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employee" ("country", "createdAt", "department", "email", "fullName", "id", "jobTitle", "salary", "updatedAt") SELECT "country", "createdAt", "department", "email", "fullName", "id", "jobTitle", "salary", "updatedAt" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
CREATE INDEX "Employee_country_idx" ON "Employee"("country");
CREATE INDEX "Employee_jobTitle_idx" ON "Employee"("jobTitle");
CREATE INDEX "Employee_department_idx" ON "Employee"("department");
CREATE INDEX "Employee_salary_idx" ON "Employee"("salary");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
