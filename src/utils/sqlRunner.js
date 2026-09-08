import alasql from 'alasql';

export async function runSqlTests(sqlQuery, testCases, schema, sampleData) {
  // 1. Initialize isolated database and create tables
  const db = new alasql.Database();

  try {
    for (const [tableName, columns] of Object.entries(schema)) {
      const colDefs = Object.entries(columns)
        .map(([colName, colType]) => `${colName} ${colType}`)
        .join(', ');
      db.exec(`CREATE TABLE ${tableName} (${colDefs})`);
      
      // Insert sample data
      if (sampleData[tableName]) {
        for (const row of sampleData[tableName]) {
          db.tables[tableName].data.push(row);
        }
      }
    }
  } catch (err) {
    return {
      results: [],
      passedTests: 0,
      totalTests: testCases.length,
      allPassed: false,
      error: `Failed to initialize database: ${err.message}`
    };
  }

  // 2. Execute user query
  let userResult;
  try {
    userResult = db.exec(sqlQuery);
  } catch (err) {
    return {
      results: [],
      passedTests: 0,
      totalTests: testCases.length,
      allPassed: false,
      error: `Query Error: ${err.message}`
    };
  }

  // 3. Run test cases
  const results = [];
  let passedTests = 0;
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    let result = {
      id: testCase.id || `test-${i}`,
      name: testCase.name,
      passed: false,
      message: "Test could not be completed."
    };

    try {
      const testRes = await testCase.test(userResult, null);
      result.passed = !!testRes.passed;
      result.message = testRes.message;
    } catch (e) {
      result.passed = false;
      result.message = `Test execution error: ${e.message}`;
    }

    if (result.passed) passedTests++;
    results.push(result);
  }

  return {
    results,
    passedTests,
    totalTests: testCases.length,
    allPassed: testCases.length > 0 && passedTests === testCases.length
  };
}
