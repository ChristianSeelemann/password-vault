import fs from 'fs/promises';

async function readDB() {
  try {
    const db = fs.readFile('src/db.json', 'utf-8');
    console.log(await db);
  } catch (err) {
    console.error(err);
  }
}

readDB();
