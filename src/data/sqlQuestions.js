export const sqlQuestions = [
  {
    id: 16,
    categoryType: 'sql',
    section: 'SELECT',
    title: 'Recyclable and Low Fat Products',
    difficulty: 'Easy',
    description: 'Find the ids of products that are both low fat and recyclable. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'product_id is the primary key for this table.',
      'low_fats is an ENUM (category) of type (\'Y\', \'N\') where \'Y\' means this product is low fat and \'N\' means it is not.',
      'recyclable is an ENUM (category) of types (\'Y\', \'N\') where \'Y\' means this product is recyclable and \'N\' means it is not.'
    ],
    schema: {
      Products: { product_id: 'INT', low_fats: 'VARCHAR(1)', recyclable: 'VARCHAR(1)' }
    },
    sampleData: {
      Products: [
        { product_id: 0, low_fats: 'Y', recyclable: 'N' },
        { product_id: 1, low_fats: 'Y', recyclable: 'Y' },
        { product_id: 2, low_fats: 'N', recyclable: 'Y' },
        { product_id: 3, low_fats: 'Y', recyclable: 'Y' },
        { product_id: 4, low_fats: 'N', recyclable: 'N' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-16-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-16-2', name: 'Contains correct column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('product_id'), message: res[0] && res[0].hasOwnProperty('product_id') ? 'product_id column exists' : 'Missing product_id column.' }) },
      { id: 'sql-16-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 1, message: res[0] && Object.keys(res[0]).length === 1 ? 'Only expected columns present' : 'Returned extra columns.' }) },
      { id: 'sql-16-4', name: 'Row count is correct', test: async (res) => ({ passed: res.length === 2, message: res.length === 2 ? 'Correct row count' : `Expected 2 rows, got ${res.length}` }) },
      { id: 'sql-16-5', name: 'Includes product 1', test: async (res) => ({ passed: res.some(r => r.product_id === 1), message: res.some(r => r.product_id === 1) ? 'Included product 1' : 'Missing product_id 1' }) },
      { id: 'sql-16-6', name: 'Includes product 3', test: async (res) => ({ passed: res.some(r => r.product_id === 3), message: res.some(r => r.product_id === 3) ? 'Included product 3' : 'Missing product_id 3' }) },
      { id: 'sql-16-7', name: 'Excludes product 0', test: async (res) => ({ passed: !res.some(r => r.product_id === 0), message: !res.some(r => r.product_id === 0) ? 'Excluded product 0 correctly' : 'Incorrectly included product 0' }) },
      { id: 'sql-16-8', name: 'Excludes product 2', test: async (res) => ({ passed: !res.some(r => r.product_id === 2), message: !res.some(r => r.product_id === 2) ? 'Excluded product 2 correctly' : 'Incorrectly included product 2' }) },
      { id: 'sql-16-9', name: 'Excludes product 4', test: async (res) => ({ passed: !res.some(r => r.product_id === 4), message: !res.some(r => r.product_id === 4) ? 'Excluded product 4 correctly' : 'Incorrectly included product 4' }) },
      { id: 'sql-16-10', name: 'Exact match verification', test: async (res) => {
          const vals = res.map(r => r.product_id).sort();
          return { passed: vals[0] === 1 && vals[1] === 3, message: vals[0] === 1 && vals[1] === 3 ? 'Exact match successful' : 'Final values mismatch' };
      }}
    ]
  },
  {
    id: 17,
    categoryType: 'sql',
    section: 'SELECT',
    title: 'Find Customer Referee',
    difficulty: 'Easy',
    description: 'Find the names of the customer that are either referred by any customer with id != 2 or not referred by any customer. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'id is the primary key column for this table.',
      'Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.'
    ],
    schema: {
      Customer: { id: 'INT', name: 'VARCHAR(50)', referee_id: 'INT' }
    },
    sampleData: {
      Customer: [
        { id: 1, name: 'Will', referee_id: null },
        { id: 2, name: 'Jane', referee_id: null },
        { id: 3, name: 'Alex', referee_id: 2 },
        { id: 4, name: 'Bill', referee_id: null },
        { id: 5, name: 'Zack', referee_id: 1 },
        { id: 6, name: 'Mark', referee_id: 2 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-17-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-17-2', name: 'Contains name column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('name'), message: res[0] && res[0].hasOwnProperty('name') ? 'name column exists' : 'Missing name column.' }) },
      { id: 'sql-17-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 1, message: res[0] && Object.keys(res[0]).length === 1 ? 'Only name column returned' : 'Returned extra columns.' }) },
      { id: 'sql-17-4', name: 'Row count is 4', test: async (res) => ({ passed: res.length === 4, message: res.length === 4 ? 'Correct row count' : `Expected 4 rows, got ${res.length}. Did you handle NULL?` }) },
      { id: 'sql-17-5', name: 'Includes Will (null referee)', test: async (res) => ({ passed: res.some(r => r.name === 'Will'), message: res.some(r => r.name === 'Will') ? 'Included Will' : 'Missing Will' }) },
      { id: 'sql-17-6', name: 'Includes Jane (null referee)', test: async (res) => ({ passed: res.some(r => r.name === 'Jane'), message: res.some(r => r.name === 'Jane') ? 'Included Jane' : 'Missing Jane' }) },
      { id: 'sql-17-7', name: 'Includes Bill (null referee)', test: async (res) => ({ passed: res.some(r => r.name === 'Bill'), message: res.some(r => r.name === 'Bill') ? 'Included Bill' : 'Missing Bill' }) },
      { id: 'sql-17-8', name: 'Includes Zack (referee 1)', test: async (res) => ({ passed: res.some(r => r.name === 'Zack'), message: res.some(r => r.name === 'Zack') ? 'Included Zack' : 'Missing Zack' }) },
      { id: 'sql-17-9', name: 'Excludes Alex (referee 2)', test: async (res) => ({ passed: !res.some(r => r.name === 'Alex'), message: !res.some(r => r.name === 'Alex') ? 'Excluded Alex' : 'Incorrectly included Alex' }) },
      { id: 'sql-17-10', name: 'Excludes Mark (referee 2)', test: async (res) => ({ passed: !res.some(r => r.name === 'Mark'), message: !res.some(r => r.name === 'Mark') ? 'Excluded Mark' : 'Incorrectly included Mark' }) }
    ]
  },
  {
    id: 18,
    categoryType: 'sql',
    section: 'SELECT',
    title: 'Big Countries',
    difficulty: 'Easy',
    description: 'A country is big if it has an area of at least 3 million km2 or a population of at least 25 million. Find the name, population, and area of the big countries. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'name is the primary key for this table.',
      'Check conditions: area >= 3000000 OR population >= 25000000'
    ],
    schema: {
      World: { name: 'VARCHAR(50)', continent: 'VARCHAR(50)', area: 'INT', population: 'INT', gdp: 'BIGINT' }
    },
    sampleData: {
      World: [
        { name: 'Afghanistan', continent: 'Asia', area: 652230, population: 25500100, gdp: 20343000000 },
        { name: 'Albania', continent: 'Europe', area: 28748, population: 2831741, gdp: 12960000000 },
        { name: 'Algeria', continent: 'Africa', area: 2381741, population: 37100000, gdp: 188681000000 },
        { name: 'Andorra', continent: 'Europe', area: 468, population: 78115, gdp: 3712000000 },
        { name: 'Angola', continent: 'Africa', area: 1246700, population: 20609294, gdp: 100990000000 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-18-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-18-2', name: 'Contains name column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('name'), message: res[0] && res[0].hasOwnProperty('name') ? 'name column exists' : 'Missing name column.' }) },
      { id: 'sql-18-3', name: 'Contains population column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('population'), message: res[0] && res[0].hasOwnProperty('population') ? 'population column exists' : 'Missing population column.' }) },
      { id: 'sql-18-4', name: 'Contains area column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('area'), message: res[0] && res[0].hasOwnProperty('area') ? 'area column exists' : 'Missing area column.' }) },
      { id: 'sql-18-5', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 3, message: res[0] && Object.keys(res[0]).length === 3 ? 'Only expected columns present' : 'Returned extra columns.' }) },
      { id: 'sql-18-6', name: 'Row count is 2', test: async (res) => ({ passed: res.length === 2, message: res.length === 2 ? 'Correct row count' : `Expected 2 rows, got ${res.length}` }) },
      { id: 'sql-18-7', name: 'Includes Afghanistan', test: async (res) => ({ passed: res.some(r => r.name === 'Afghanistan'), message: res.some(r => r.name === 'Afghanistan') ? 'Included Afghanistan' : 'Missing Afghanistan' }) },
      { id: 'sql-18-8', name: 'Includes Algeria', test: async (res) => ({ passed: res.some(r => r.name === 'Algeria'), message: res.some(r => r.name === 'Algeria') ? 'Included Algeria' : 'Missing Algeria' }) },
      { id: 'sql-18-9', name: 'Excludes small countries', test: async (res) => ({ passed: !res.some(r => r.name === 'Albania' || r.name === 'Andorra'), message: !res.some(r => r.name === 'Albania' || r.name === 'Andorra') ? 'Excluded small countries' : 'Incorrectly included small countries' }) },
      { id: 'sql-18-10', name: 'Check exact output values', test: async (res) => {
          const afg = res.find(r => r.name === 'Afghanistan');
          return { passed: afg && afg.population === 25500100 && afg.area === 652230, message: afg && afg.population === 25500100 ? 'Correct values mapped' : 'Incorrect column values' };
      }}
    ]
  },
  {
    id: 19,
    categoryType: 'sql',
    section: 'SELECT',
    title: 'Article Views I',
    difficulty: 'Easy',
    description: 'Find all the authors that viewed at least one of their own articles. Return the result table sorted by id in ascending order.',
    category: 'SQL',
    requirements: [
      'The table may have duplicate rows.',
      'Equal author_id and viewer_id indicate the same person.',
      'Return the author_id as "id".',
      'The output must not contain duplicates.'
    ],
    schema: {
      Views: { article_id: 'INT', author_id: 'INT', viewer_id: 'INT', view_date: 'DATE' }
    },
    sampleData: {
      Views: [
        { article_id: 1, author_id: 3, viewer_id: 5, view_date: '2019-08-01' },
        { article_id: 1, author_id: 3, viewer_id: 6, view_date: '2019-08-02' },
        { article_id: 2, author_id: 7, viewer_id: 7, view_date: '2019-08-01' },
        { article_id: 2, author_id: 7, viewer_id: 6, view_date: '2019-08-02' },
        { article_id: 4, author_id: 7, viewer_id: 1, view_date: '2019-07-22' },
        { article_id: 3, author_id: 4, viewer_id: 4, view_date: '2019-07-21' },
        { article_id: 3, author_id: 4, viewer_id: 4, view_date: '2019-07-21' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-19-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-19-2', name: 'Contains id column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('id'), message: res[0] && res[0].hasOwnProperty('id') ? 'id column exists' : 'Missing id column. Did you alias author_id to id?' }) },
      { id: 'sql-19-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 1, message: res[0] && Object.keys(res[0]).length === 1 ? 'Only id column present' : 'Returned extra columns.' }) },
      { id: 'sql-19-4', name: 'Row count is 2', test: async (res) => ({ passed: res.length === 2, message: res.length === 2 ? 'Correct row count' : `Expected 2 rows, got ${res.length}. Did you use DISTINCT?` }) },
      { id: 'sql-19-5', name: 'Includes id 4', test: async (res) => ({ passed: res.some(r => r.id === 4), message: res.some(r => r.id === 4) ? 'Included 4' : 'Missing id 4' }) },
      { id: 'sql-19-6', name: 'Includes id 7', test: async (res) => ({ passed: res.some(r => r.id === 7), message: res.some(r => r.id === 7) ? 'Included 7' : 'Missing id 7' }) },
      { id: 'sql-19-7', name: 'Excludes id 3', test: async (res) => ({ passed: !res.some(r => r.id === 3), message: !res.some(r => r.id === 3) ? 'Excluded 3 correctly' : 'Incorrectly included id 3' }) },
      { id: 'sql-19-8', name: 'Is sorted ascending', test: async (res) => {
          if (res.length !== 2) return { passed: false, message: 'Cannot verify sort order with wrong row count' };
          return { passed: res[0].id === 4 && res[1].id === 7, message: res[0].id === 4 && res[1].id === 7 ? 'Sorted correctly' : 'Results are not sorted ascending' };
      }}
    ]
  },
  {
    id: 20,
    categoryType: 'sql',
    section: 'SELECT',
    title: 'Invalid Tweets',
    difficulty: 'Easy',
    description: 'Find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'tweet_id is the primary key for this table.',
      'content consists of alphanumeric characters, \'!\', or \' \' and no other special characters.'
    ],
    schema: {
      Tweets: { tweet_id: 'INT', content: 'VARCHAR(50)' }
    },
    sampleData: {
      Tweets: [
        { tweet_id: 1, content: 'Let us Code' },
        { tweet_id: 2, content: 'More than fifteen chars are here!' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-20-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-20-2', name: 'Contains tweet_id column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('tweet_id'), message: res[0] && res[0].hasOwnProperty('tweet_id') ? 'tweet_id column exists' : 'Missing tweet_id column.' }) },
      { id: 'sql-20-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 1, message: res[0] && Object.keys(res[0]).length === 1 ? 'Only tweet_id column present' : 'Returned extra columns.' }) },
      { id: 'sql-20-4', name: 'Row count is 1', test: async (res) => ({ passed: res.length === 1, message: res.length === 1 ? 'Correct row count' : `Expected 1 row, got ${res.length}` }) },
      { id: 'sql-20-5', name: 'Includes tweet_id 2', test: async (res) => ({ passed: res.some(r => r.tweet_id === 2), message: res.some(r => r.tweet_id === 2) ? 'Included tweet 2' : 'Missing tweet_id 2' }) },
      { id: 'sql-20-6', name: 'Excludes tweet_id 1', test: async (res) => ({ passed: !res.some(r => r.tweet_id === 1), message: !res.some(r => r.tweet_id === 1) ? 'Excluded tweet 1 correctly' : 'Incorrectly included tweet_id 1 (length 11)' }) },
      { id: 'sql-20-7', name: 'Exact match verification', test: async (res) => {
          return { passed: res.length === 1 && res[0].tweet_id === 2, message: res.length === 1 && res[0].tweet_id === 2 ? 'Exact match successful' : 'Final values mismatch' };
      }}
    ]
  },
  {
    id: 21,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Replace Employee ID With The Unique Identifier',
    difficulty: 'Easy',
    description: 'Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'Show unique_id and name.',
      'If there is no unique_id, show null.'
    ],
    schema: {
      Employees: { id: 'INT', name: 'VARCHAR(50)' },
      EmployeeUNI: { id: 'INT', unique_id: 'INT' }
    },
    sampleData: {
      Employees: [
        { id: 1, name: 'Alice' },
        { id: 7, name: 'Bob' },
        { id: 11, name: 'Meir' },
        { id: 90, name: 'Winston' },
        { id: 3, name: 'Jonathan' }
      ],
      EmployeeUNI: [
        { id: 3, unique_id: 1 },
        { id: 11, unique_id: 2 },
        { id: 90, unique_id: 3 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-21-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-21-2', name: 'Contains unique_id column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('unique_id'), message: res[0] && res[0].hasOwnProperty('unique_id') ? 'unique_id column exists' : 'Missing unique_id column.' }) },
      { id: 'sql-21-3', name: 'Contains name column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('name'), message: res[0] && res[0].hasOwnProperty('name') ? 'name column exists' : 'Missing name column.' }) },
      { id: 'sql-21-4', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 2, message: res[0] && Object.keys(res[0]).length === 2 ? 'Only expected columns present' : 'Returned extra columns.' }) },
      { id: 'sql-21-5', name: 'Row count is 5', test: async (res) => ({ passed: res.length === 5, message: res.length === 5 ? 'Correct row count' : `Expected 5 rows, got ${res.length}. Did you use a LEFT JOIN?` }) },
      { id: 'sql-21-6', name: 'Alice has null unique_id', test: async (res) => { const r = res.find(x => x.name === 'Alice'); return { passed: r && r.unique_id == null, message: r && r.unique_id == null ? 'Alice correctly null' : 'Alice unique_id is not null' }; } },
      { id: 'sql-21-7', name: 'Meir has unique_id 2', test: async (res) => { const r = res.find(x => x.name === 'Meir'); return { passed: r && r.unique_id === 2, message: r && r.unique_id === 2 ? 'Meir mapped correctly' : 'Meir unique_id incorrect' }; } },
      { id: 'sql-21-8', name: 'Jonathan has unique_id 1', test: async (res) => { const r = res.find(x => x.name === 'Jonathan'); return { passed: r && r.unique_id === 1, message: r && r.unique_id === 1 ? 'Jonathan mapped correctly' : 'Jonathan unique_id incorrect' }; } }
    ]
  },
  {
    id: 22,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Product Sales Analysis I',
    difficulty: 'Easy',
    description: 'Write a solution to report the product_name, year, and price for each sale_id in the Sales table. Return the resulting table in any order.',
    category: 'SQL',
    requirements: [
      'Report product_name, year, and price.',
      'Join Sales with Product.'
    ],
    schema: {
      Sales: { sale_id: 'INT', product_id: 'INT', year: 'INT', quantity: 'INT', price: 'INT' },
      Product: { product_id: 'INT', product_name: 'VARCHAR(50)' }
    },
    sampleData: {
      Sales: [
        { sale_id: 1, product_id: 100, year: 2008, quantity: 10, price: 5000 },
        { sale_id: 2, product_id: 100, year: 2009, quantity: 12, price: 5000 },
        { sale_id: 7, product_id: 200, year: 2011, quantity: 15, price: 9000 }
      ],
      Product: [
        { product_id: 100, product_name: 'Nokia' },
        { product_id: 200, product_name: 'Apple' },
        { product_id: 300, product_name: 'Samsung' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-22-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-22-2', name: 'Contains correct columns', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('product_name') && res[0].hasOwnProperty('year') && res[0].hasOwnProperty('price'), message: res[0] && res[0].hasOwnProperty('product_name') ? 'Columns exist' : 'Missing product_name, year, or price' }) },
      { id: 'sql-22-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 3, message: res[0] && Object.keys(res[0]).length === 3 ? 'Only expected columns' : 'Returned extra columns' }) },
      { id: 'sql-22-4', name: 'Row count is 3', test: async (res) => ({ passed: res.length === 3, message: res.length === 3 ? 'Correct row count' : `Expected 3 rows, got ${res.length}` }) },
      { id: 'sql-22-5', name: 'Includes Nokia 2008', test: async (res) => ({ passed: res.some(r => r.product_name === 'Nokia' && r.year === 2008 && r.price === 5000), message: res.some(r => r.product_name === 'Nokia' && r.year === 2008) ? 'Found Nokia 2008' : 'Missing Nokia 2008' }) },
      { id: 'sql-22-6', name: 'Includes Apple 2011', test: async (res) => ({ passed: res.some(r => r.product_name === 'Apple' && r.year === 2011 && r.price === 9000), message: res.some(r => r.product_name === 'Apple' && r.year === 2011) ? 'Found Apple 2011' : 'Missing Apple 2011' }) },
      { id: 'sql-22-7', name: 'Does not include Samsung', test: async (res) => ({ passed: !res.some(r => r.product_name === 'Samsung'), message: !res.some(r => r.product_name === 'Samsung') ? 'Correctly excluded Samsung' : 'Included Samsung which had no sales' }) }
    ]
  },
  {
    id: 23,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Customer Who Visited but Did Not Make Any Transactions',
    difficulty: 'Easy',
    description: 'Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits. Return the result table sorted in any order.',
    category: 'SQL',
    requirements: [
      'Return customer_id and count_no_trans.',
      'Count visits that do not have a corresponding transaction.'
    ],
    schema: {
      Visits: { visit_id: 'INT', customer_id: 'INT' },
      Transactions: { transaction_id: 'INT', visit_id: 'INT', amount: 'INT' }
    },
    sampleData: {
      Visits: [
        { visit_id: 1, customer_id: 23 },
        { visit_id: 2, customer_id: 9 },
        { visit_id: 4, customer_id: 30 },
        { visit_id: 5, customer_id: 54 },
        { visit_id: 6, customer_id: 96 },
        { visit_id: 7, customer_id: 54 },
        { visit_id: 8, customer_id: 54 }
      ],
      Transactions: [
        { transaction_id: 2, visit_id: 5, amount: 310 },
        { transaction_id: 3, visit_id: 5, amount: 300 },
        { transaction_id: 9, visit_id: 5, amount: 200 },
        { transaction_id: 12, visit_id: 1, amount: 910 },
        { transaction_id: 13, visit_id: 2, amount: 970 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-23-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-23-2', name: 'Contains customer_id', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('customer_id'), message: res[0] && res[0].hasOwnProperty('customer_id') ? 'customer_id exists' : 'Missing customer_id' }) },
      { id: 'sql-23-3', name: 'Contains count_no_trans', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('count_no_trans'), message: res[0] && res[0].hasOwnProperty('count_no_trans') ? 'count_no_trans exists' : 'Missing count_no_trans alias' }) },
      { id: 'sql-23-4', name: 'Row count is 3', test: async (res) => ({ passed: res.length === 3, message: res.length === 3 ? 'Correct row count' : `Expected 3 rows, got ${res.length}` }) },
      { id: 'sql-23-5', name: 'Customer 54 count is 2', test: async (res) => { const r = res.find(x => x.customer_id === 54); return { passed: r && r.count_no_trans == 2, message: r && r.count_no_trans == 2 ? 'Customer 54 correct' : 'Customer 54 incorrect' }; } },
      { id: 'sql-23-6', name: 'Customer 30 count is 1', test: async (res) => { const r = res.find(x => x.customer_id === 30); return { passed: r && r.count_no_trans == 1, message: r && r.count_no_trans == 1 ? 'Customer 30 correct' : 'Customer 30 incorrect' }; } },
      { id: 'sql-23-7', name: 'Customer 96 count is 1', test: async (res) => { const r = res.find(x => x.customer_id === 96); return { passed: r && r.count_no_trans == 1, message: r && r.count_no_trans == 1 ? 'Customer 96 correct' : 'Customer 96 incorrect' }; } },
      { id: 'sql-23-8', name: 'Excludes customers with transactions', test: async (res) => ({ passed: !res.some(r => r.customer_id === 23 || r.customer_id === 9), message: !res.some(r => r.customer_id === 23) ? 'Excluded 23 and 9' : 'Included customers with transactions' }) }
    ]
  },
  {
    id: 24,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Rising Temperature',
    difficulty: 'Easy',
    description: 'Write a solution to find all dates\' id with higher temperatures compared to its previous dates (yesterday). Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'Return the id of dates with higher temperature than the day before.'
    ],
    schema: {
      Weather: { id: 'INT', recordDate: 'DATE', temperature: 'INT' }
    },
    sampleData: {
      Weather: [
        { id: 1, recordDate: '2015-01-01', temperature: 10 },
        { id: 2, recordDate: '2015-01-02', temperature: 25 },
        { id: 3, recordDate: '2015-01-03', temperature: 20 },
        { id: 4, recordDate: '2015-01-04', temperature: 30 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n-- Note: In AlaSQL (our JS SQL engine), you can use DATEDIFF(day, a.recordDate, b.recordDate) or standard date logic depending on syntax.\n',
    testCases: [
      { id: 'sql-24-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-24-2', name: 'Contains id column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('id'), message: res[0] && res[0].hasOwnProperty('id') ? 'id column exists' : 'Missing id column.' }) },
      { id: 'sql-24-3', name: 'No extra columns', test: async (res) => ({ passed: res[0] && Object.keys(res[0]).length === 1, message: res[0] && Object.keys(res[0]).length === 1 ? 'Only expected columns' : 'Returned extra columns' }) },
      { id: 'sql-24-4', name: 'Row count is 2', test: async (res) => ({ passed: res.length === 2, message: res.length === 2 ? 'Correct row count' : `Expected 2 rows, got ${res.length}` }) },
      { id: 'sql-24-5', name: 'Includes id 2', test: async (res) => ({ passed: res.some(r => r.id === 2), message: res.some(r => r.id === 2) ? 'Included id 2' : 'Missing id 2 (2015-01-02 was 25 vs 10)' }) },
      { id: 'sql-24-6', name: 'Includes id 4', test: async (res) => ({ passed: res.some(r => r.id === 4), message: res.some(r => r.id === 4) ? 'Included id 4' : 'Missing id 4 (2015-01-04 was 30 vs 20)' }) },
      { id: 'sql-24-7', name: 'Excludes id 3', test: async (res) => ({ passed: !res.some(r => r.id === 3), message: !res.some(r => r.id === 3) ? 'Excluded id 3' : 'Incorrectly included id 3 (2015-01-03 was 20 vs 25)' }) },
      { id: 'sql-24-8', name: 'Excludes id 1', test: async (res) => ({ passed: !res.some(r => r.id === 1), message: !res.some(r => r.id === 1) ? 'Excluded id 1' : 'Incorrectly included id 1 (no previous day)' }) }
    ]
  },
  {
    id: 25,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Employee Bonus',
    difficulty: 'Easy',
    description: 'Write a solution to report the name and bonus amount of each employee who satisfies either of the following: The employee has a bonus less than 1000. The employee did not get any bonus. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'Report name and bonus.',
      'Bonus < 1000 or no bonus (null).'
    ],
    schema: {
      Employee: { empId: 'INT', name: 'VARCHAR(50)', supervisor: 'INT', salary: 'INT' },
      Bonus: { empId: 'INT', bonus: 'INT' }
    },
    sampleData: {
      Employee: [
        { empId: 3, name: 'Brad', supervisor: null, salary: 4000 },
        { empId: 1, name: 'John', supervisor: 3, salary: 1000 },
        { empId: 2, name: 'Dan', supervisor: 3, salary: 2000 },
        { empId: 4, name: 'Thomas', supervisor: 3, salary: 4000 }
      ],
      Bonus: [
        { empId: 2, bonus: 500 },
        { empId: 4, bonus: 2000 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-25-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-25-2', name: 'Contains correct columns', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('name') && res[0].hasOwnProperty('bonus'), message: res[0] && res[0].hasOwnProperty('name') ? 'Columns exist' : 'Missing name or bonus' }) },
      { id: 'sql-25-3', name: 'Row count is 3', test: async (res) => ({ passed: res.length === 3, message: res.length === 3 ? 'Correct row count' : `Expected 3 rows, got ${res.length}` }) },
      { id: 'sql-25-4', name: 'Includes Brad with null', test: async (res) => { const r = res.find(x => x.name === 'Brad'); return { passed: r && r.bonus == null, message: r && r.bonus == null ? 'Brad correct' : 'Brad missing or not null' }; } },
      { id: 'sql-25-5', name: 'Includes John with null', test: async (res) => { const r = res.find(x => x.name === 'John'); return { passed: r && r.bonus == null, message: r && r.bonus == null ? 'John correct' : 'John missing or not null' }; } },
      { id: 'sql-25-6', name: 'Includes Dan with 500', test: async (res) => { const r = res.find(x => x.name === 'Dan'); return { passed: r && r.bonus === 500, message: r && r.bonus === 500 ? 'Dan correct' : 'Dan missing or incorrect' }; } },
      { id: 'sql-25-7', name: 'Excludes Thomas', test: async (res) => ({ passed: !res.some(r => r.name === 'Thomas'), message: !res.some(r => r.name === 'Thomas') ? 'Excluded Thomas' : 'Incorrectly included Thomas (bonus 2000)' }) }
    ]
  },
  {
    id: 26,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Students and Examinations',
    difficulty: 'Easy',
    description: 'Write a solution to find the number of times each student attended each exam. Return the result table ordered by student_id and subject_name.',
    category: 'SQL',
    requirements: [
      'Return student_id, student_name, subject_name, attended_exams.',
      'The result table should contain all students and all subjects.',
      'Order by student_id and subject_name.'
    ],
    schema: {
      Students: { student_id: 'INT', student_name: 'VARCHAR(50)' },
      Subjects: { subject_name: 'VARCHAR(50)' },
      Examinations: { student_id: 'INT', subject_name: 'VARCHAR(50)' }
    },
    sampleData: {
      Students: [
        { student_id: 1, student_name: 'Alice' },
        { student_id: 2, student_name: 'Bob' },
        { student_id: 13, student_name: 'John' },
        { student_id: 6, student_name: 'Alex' }
      ],
      Subjects: [
        { subject_name: 'Math' },
        { subject_name: 'Physics' },
        { subject_name: 'Programming' }
      ],
      Examinations: [
        { student_id: 1, subject_name: 'Math' },
        { student_id: 1, subject_name: 'Physics' },
        { student_id: 1, subject_name: 'Programming' },
        { student_id: 2, subject_name: 'Programming' },
        { student_id: 1, subject_name: 'Physics' },
        { student_id: 1, subject_name: 'Math' },
        { student_id: 13, subject_name: 'Math' },
        { student_id: 13, subject_name: 'Programming' },
        { student_id: 13, subject_name: 'Physics' },
        { student_id: 2, subject_name: 'Math' },
        { student_id: 1, subject_name: 'Math' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-26-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-26-2', name: 'Row count is 12', test: async (res) => ({ passed: res.length === 12, message: res.length === 12 ? 'Correct row count' : `Expected 12 rows (4 students x 3 subjects), got ${res.length}. Did you CROSS JOIN?` }) },
      { id: 'sql-26-3', name: 'Alice Math is 3', test: async (res) => { const r = res.find(x => x.student_name === 'Alice' && x.subject_name === 'Math'); return { passed: r && r.attended_exams == 3, message: r && r.attended_exams == 3 ? 'Alice Math correct' : 'Alice Math incorrect' }; } },
      { id: 'sql-26-4', name: 'Alice Physics is 2', test: async (res) => { const r = res.find(x => x.student_name === 'Alice' && x.subject_name === 'Physics'); return { passed: r && r.attended_exams == 2, message: r && r.attended_exams == 2 ? 'Alice Physics correct' : 'Alice Physics incorrect' }; } },
      { id: 'sql-26-5', name: 'Bob Physics is 0', test: async (res) => { const r = res.find(x => x.student_name === 'Bob' && x.subject_name === 'Physics'); return { passed: r && r.attended_exams == 0, message: r && r.attended_exams == 0 ? 'Bob Physics correct' : 'Bob Physics incorrect (expected 0)' }; } },
      { id: 'sql-26-6', name: 'Alex all 0', test: async (res) => { const r = res.filter(x => x.student_name === 'Alex'); return { passed: r.length === 3 && r.every(x => x.attended_exams == 0), message: r.length === 3 && r.every(x => x.attended_exams == 0) ? 'Alex correct' : 'Alex should have 0 for all' }; } },
      { id: 'sql-26-7', name: 'Is sorted correctly', test: async (res) => {
          if (res.length < 2) return { passed: false, message: 'Not enough rows to check sort' };
          let sorted = true;
          for(let i=1; i<res.length; i++) {
            if (res[i-1].student_id > res[i].student_id) sorted = false;
            else if (res[i-1].student_id === res[i].student_id && res[i-1].subject_name > res[i].subject_name) sorted = false;
          }
          return { passed: sorted, message: sorted ? 'Sorted correctly' : 'Not sorted by student_id and subject_name' };
      }}
    ]
  },
  {
    id: 27,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Managers with at Least 5 Direct Reports',
    difficulty: 'Medium',
    description: 'Write a solution to find managers with at least five direct reports. Return the result table in any order.',
    category: 'SQL',
    requirements: [
      'Return the name of the manager.',
      'Manager must have >= 5 direct reports.'
    ],
    schema: {
      Employee: { id: 'INT', name: 'VARCHAR(50)', department: 'VARCHAR(50)', managerId: 'INT' }
    },
    sampleData: {
      Employee: [
        { id: 101, name: 'John', department: 'A', managerId: null },
        { id: 102, name: 'Dan', department: 'A', managerId: 101 },
        { id: 103, name: 'James', department: 'A', managerId: 101 },
        { id: 104, name: 'Amy', department: 'A', managerId: 101 },
        { id: 105, name: 'Anne', department: 'A', managerId: 101 },
        { id: 106, name: 'Ron', department: 'B', managerId: 101 },
        { id: 107, name: 'Zack', department: 'B', managerId: 102 }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-27-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-27-2', name: 'Contains name column', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('name'), message: res[0] && res[0].hasOwnProperty('name') ? 'name column exists' : 'Missing name column.' }) },
      { id: 'sql-27-3', name: 'Row count is 1', test: async (res) => ({ passed: res.length === 1, message: res.length === 1 ? 'Correct row count' : `Expected 1 row, got ${res.length}` }) },
      { id: 'sql-27-4', name: 'Includes John', test: async (res) => ({ passed: res.some(r => r.name === 'John'), message: res.some(r => r.name === 'John') ? 'Included John' : 'Missing John' }) },
      { id: 'sql-27-5', name: 'Excludes Dan', test: async (res) => ({ passed: !res.some(r => r.name === 'Dan'), message: !res.some(r => r.name === 'Dan') ? 'Excluded Dan' : 'Incorrectly included Dan (only 1 report)' }) }
    ]
  },
  {
    id: 28,
    categoryType: 'sql',
    section: 'Basic Joins',
    title: 'Confirmation Rate',
    difficulty: 'Medium',
    description: 'The confirmation rate of a user is the number of \'confirmed\' messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is 0. Round the confirmation rate to two decimal places. Write a solution to find the confirmation rate of each user.',
    category: 'SQL',
    requirements: [
      'Return user_id and confirmation_rate.',
      'Round to 2 decimal places.',
      'Users with no requests have rate 0.'
    ],
    schema: {
      Signups: { user_id: 'INT', time_stamp: 'DATETIME' },
      Confirmations: { user_id: 'INT', time_stamp: 'DATETIME', action: 'VARCHAR(50)' }
    },
    sampleData: {
      Signups: [
        { user_id: 3, time_stamp: '2020-03-21 10:16:13' },
        { user_id: 7, time_stamp: '2020-01-04 13:57:59' },
        { user_id: 2, time_stamp: '2020-07-29 23:09:44' },
        { user_id: 6, time_stamp: '2020-12-09 10:39:37' }
      ],
      Confirmations: [
        { user_id: 3, time_stamp: '2021-01-06 03:30:46', action: 'timeout' },
        { user_id: 3, time_stamp: '2021-07-14 14:00:00', action: 'timeout' },
        { user_id: 7, time_stamp: '2021-06-12 11:57:29', action: 'confirmed' },
        { user_id: 7, time_stamp: '2021-06-13 12:58:28', action: 'confirmed' },
        { user_id: 7, time_stamp: '2021-06-14 13:59:27', action: 'confirmed' },
        { user_id: 2, time_stamp: '2021-01-22 00:00:00', action: 'confirmed' },
        { user_id: 2, time_stamp: '2021-02-28 23:59:59', action: 'timeout' }
      ]
    },
    starterSQL: '-- Write your SQL query below\n',
    testCases: [
      { id: 'sql-28-1', name: 'Returns a result', test: async (res) => ({ passed: res && res.length > 0, message: res && res.length > 0 ? 'Results returned' : 'No results returned.' }) },
      { id: 'sql-28-2', name: 'Contains user_id', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('user_id'), message: res[0] && res[0].hasOwnProperty('user_id') ? 'user_id exists' : 'Missing user_id' }) },
      { id: 'sql-28-3', name: 'Contains confirmation_rate', test: async (res) => ({ passed: res[0] && res[0].hasOwnProperty('confirmation_rate'), message: res[0] && res[0].hasOwnProperty('confirmation_rate') ? 'confirmation_rate exists' : 'Missing confirmation_rate' }) },
      { id: 'sql-28-4', name: 'Row count is 4', test: async (res) => ({ passed: res.length === 4, message: res.length === 4 ? 'Correct row count' : `Expected 4 rows, got ${res.length}` }) },
      { id: 'sql-28-5', name: 'User 6 rate is 0', test: async (res) => { const r = res.find(x => x.user_id === 6); return { passed: r && Number(r.confirmation_rate) === 0, message: r && Number(r.confirmation_rate) === 0 ? 'User 6 correct' : 'User 6 incorrect' }; } },
      { id: 'sql-28-6', name: 'User 3 rate is 0', test: async (res) => { const r = res.find(x => x.user_id === 3); return { passed: r && Number(r.confirmation_rate) === 0, message: r && Number(r.confirmation_rate) === 0 ? 'User 3 correct' : 'User 3 incorrect' }; } },
      { id: 'sql-28-7', name: 'User 7 rate is 1', test: async (res) => { const r = res.find(x => x.user_id === 7); return { passed: r && Number(r.confirmation_rate) === 1, message: r && Number(r.confirmation_rate) === 1 ? 'User 7 correct' : 'User 7 incorrect' }; } },
      { id: 'sql-28-8', name: 'User 2 rate is 0.50', test: async (res) => { const r = res.find(x => x.user_id === 2); return { passed: r && Number(r.confirmation_rate) === 0.5, message: r && Number(r.confirmation_rate) === 0.5 ? 'User 2 correct' : 'User 2 incorrect' }; } }
    ]
  }
];
