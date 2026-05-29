import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
import prisma from "../src/config/prisma.js";

const firstNames = fs
  .readFileSync(
    path.join(process.cwd(), "prisma/first_names.txt"),
    "utf-8"
  )
  .split("\n");

const lastNames = fs
  .readFileSync(
    path.join(process.cwd(), "prisma/last_names.txt"),
    "utf-8"
  )
  .split("\n");

const countries = [
  "India",
  "USA",
  "Germany",
  "Canada",
  "Australia"
];

const jobTitles = [
  "Software Engineer",
  "QA Engineer",
  "HR Manager",
  "DevOps Engineer",
  "Product Manager"
];

const departments = [
  "Engineering",
  "HR",
  "Operations",
  "Finance"
];

function generateName() {
  const first =
    firstNames[
      Math.floor(Math.random() * firstNames.length)
    ];

  const last =
    lastNames[
      Math.floor(Math.random() * lastNames.length)
    ];

  return `${first} ${last}`;
}

async function main() {
  console.time("seed");

  await prisma.employee.deleteMany();

  const employees = [];

  for (let i = 0; i < 10000; i++) {
    employees.push({
      fullName: generateName(),

      email: `employee-${i}@salaryapp.com`,

      jobTitle:
        jobTitles[
          Math.floor(Math.random() * jobTitles.length)
        ],

      country:
        countries[
          Math.floor(Math.random() * countries.length)
        ],

      salary: faker.number.int({
        min: 25000,
        max: 250000
      }),

      department:
        departments[
          Math.floor(Math.random() * departments.length)
        ]
    });
  }

  const batchSize = 1000;

  for (let i = 0; i < employees.length; i += batchSize) {
    const batch = employees.slice(i, i + batchSize);

    await prisma.employee.createMany({
      data: batch
    });

    console.log(`Inserted ${i + batch.length}`);
  }

  console.timeEnd("seed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async error => {
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });