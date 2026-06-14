const pool = require("./database");
const foods = require("../data/foods");

const createFoodsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS foods;

    CREATE TABLE IF NOT EXISTS foods (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price VARCHAR(20) NOT NULL,
      difficulty VARCHAR(50) NOT NULL,
      description TEXT NOT NULL,
      ingredients TEXT[] NOT NULL,
      prep_time VARCHAR(100) NOT NULL,
      student_tip TEXT NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 foods table created successfully");
  } catch (err) {
    console.error("⚠️ error creating foods table", err);
  }
};

const seedFoodsTable = async () => {
  await createFoodsTable();

  for (const food of foods) {
    const insertQuery = {
      text: `
        INSERT INTO foods 
        (id, name, image, price, difficulty, description, ingredients, prep_time, student_tip)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `,
      values: [
        food.id,
        food.name,
        food.image,
        food.price,
        food.difficulty,
        food.description,
        food.ingredients,
        food.prepTime,
        food.studentTip
      ]
    };

    try {
      await pool.query(insertQuery);
      console.log(`✅ ${food.name} added successfully`);
    } catch (err) {
      console.error(`⚠️ error inserting ${food.name}`, err);
    }
  }

  await pool.end();
};

seedFoodsTable();