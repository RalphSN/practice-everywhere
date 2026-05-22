const products = [
  { name: "無線滑鼠", price: 800, category: "3C", tags: ["熱銷", "特價"] },
  { name: "機械鍵盤", price: 2500, category: "3C", tags: ["新品"] },
  { name: "人體工學椅", price: 5000, category: "家具", tags: ["特價"] },
  { name: "螢幕支架", price: 1200, category: "3C", tags: ["特價"] },
  { name: "咖啡豆", price: 450, category: "食品", tags: ["熱銷"] },
];

const result1 = products.filter(
  ({ price, tags }) => price >= 500 && price <= 2000 && tags.includes("特價"),
);

const result4 = products
  .filter(({ category }) => category === "3C")
  .map((item) => {
    return {
      ...item,
      price: item.price * 0.8,
    };
  })
  .reduce((acc, { price }) => acc + price, 0);

const result5 = products
  .filter(({ category }) => category === "3C")
  .map((item) => {
    return {
      ...item,
      price: item.price * 0.8,
    };
  })
  .map(({ name, price }) => `${name}($${price})`);

const final = `3C特惠清單:${result5.join("、")}`;

// const final = `3C特惠清單：${products
//   .filter(({ category }) => category === "3C")
//   .map(({ name, price }) => `${name}($${price * 0.8})`) // 直接解構並計算
//   .join("、")}`;

const employees = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "editor", active: false },
  { id: 3, name: "Charlie", role: "viewer", active: true },
  { id: 4, name: "David", role: "editor", active: true },
  { id: 5, name: "Eve", role: "admin", active: true },
];

const result2 = employees.filter(
  ({ active, role }) => active && (role === "admin" || role === "editor"),
);

const articles = [
  { id: 1, title: "JavaScript Filter Tutorial", author: "John" },
  { id: 2, title: "Learn React Hooks from Scratch", author: "Jane" },
  { id: 3, title: "Advanced Vue.js Techniques", author: "John" },
  { id: 4, title: "Understanding CSS Grid", author: "Mary" },
];

const searchTerm = "JS"; // 這是使用者的輸入

const result3 = articles.filter(({ title }) =>
  title.toUpperCase().includes(searchTerm.toUpperCase()),
);

const playlists = [
  {
    name: "健身熱血",
    songs: [
      { title: "Stronger", artist: "Kanye", plays: 500 },
      { title: "Believer", artist: "Imagine Dragons", plays: 300 },
    ],
  },
  {
    name: "讀書專注",
    songs: [
      { title: "Lofi Beat", artist: "Lofi Girl", plays: 1000 },
      { title: "Focus", artist: "Imagine Dragons", plays: 200 },
    ],
  },
  {
    name: "派對時光",
    songs: [
      { title: "Starboy", artist: "The Weeknd", plays: 800 },
      { title: "Power", artist: "Kanye", plays: 400 },
    ],
  },
];

const spotify = playlists
  .flatMap(({ songs }) => songs)
  .reduce((acc, { artist, plays }) => {
    const key = artist;
    acc[key] = (acc[key] || 0) + plays;
    return acc;
  }, {});

const top = Object.entries(spotify).reduce((prev, curr) => {
  return prev[1] > curr[1] ? prev : curr;
});

const bookOrders = [
  {
    id: 1,
    items: [
      { title: "JS進階", price: 500, category: "程式" },
      { title: "Vue入門", price: 400, category: "程式" },
    ],
  },
  { id: 2, items: [{ title: "原子習慣", price: 300, category: "心理" }] },
  {
    id: 3,
    items: [
      { title: "React實戰", price: 600, category: "程式" },
      { title: "被討厭的勇氣", price: 350, category: "心理" },
    ],
  },
];

const bookResult = bookOrders
  .flatMap(({ items }) => items)
  .reduce((acc, { category, price }) => {
    const key = category;
    acc[key] = (acc[key] || 0) + price;
    return acc;
  }, {});

const compete = Object.entries(bookResult).reduce((prev, curr) => {
  return prev[1] > curr[1] ? prev : curr;
});

console.log(compete[0]);

const restaurants = [
  { name: "老王牛肉麵", scores: [5, 4, 5], area: "大安區" }, // 大安區: 總分14, 次數3
  { name: "小李水餃", scores: [3, 4], area: "信義區" }, // 信義區: 總分7, 次數2
  { name: "阿金排骨", scores: [5, 5], area: "大安區" }, // 大安區: 總分10, 次數2
  { name: "泰酷辣", scores: [4, 4, 3], area: "信義區" }, // 信義區: 總分11, 次數3
];

const uber = restaurants.reduce((acc, { scores, area }) => {
  const key = area;
  acc[key] = acc[key] || { totalScore: 0, count: 0 };
  acc[key].totalScore += scores.reduce((acc, item) => acc + item);
  acc[key].count += scores.length;
  return acc;
}, {});

const max = Object.entries(uber).reduce((acc, item) => {
  const prev = acc[1].totalScore / acc[1].count;
  const curr = item[1].totlaScore / item[1].count;
  return prev > curr ? acc : item;
});

console.log(max[0]);

const courses = [
  { title: "JS 基礎", category: "程式", ratings: [5, 4, 5] },
  { title: "UI 設計", category: "設計", ratings: [4, 5] },
  { title: "React 進階", category: "程式", ratings: [5, 5, 4] },
  { title: "平面設計", category: "設計", ratings: [3, 4, 3] },
  { title: "理財入門", category: "商業", ratings: [4, 5, 5] },
];

const counting = courses.reduce((acc, { category, ratings }) => {
  acc[category] = acc[category] || { totalScore: 0, count: 0 };
  acc[category].totalScore += ratings.reduce((acc, item) => acc + item);
  acc[category].count += ratings.length;
  return acc;
}, {});

const [counting2] = Object.entries(counting).reduce((prev, curr) => {
  const getAvg = ([, { totalScore, count }]) => totalScore / count;
  return getAvg(prev) > getAvg(curr) ? prev : curr;
});

console.log(counting2);

const branchOrders = [
  { region: "台北", prices: [100, 250, 400] },
  { region: "台中", prices: [800, 1200] },
  { region: "台北", prices: [150, 300] },
  { region: "高雄", prices: [500, 600, 700, 800] },
  { region: "台中", prices: [1000] },
];

const branch = branchOrders.reduce((acc, { region, prices }) => {
  acc[region] ??= { totalRevenue: 0, count: 0 };
  acc[region].totalRevenue += prices.reduce((acc, item) => acc + item);
  acc[region].count += prices.length;
  return acc;
}, {});

const [maxBranch] = Object.entries(branch).reduce((prev, curr) => {
  const getAvg = ([, { totalRevenue, count }]) => totalRevenue / count;
  return getAvg(prev) > getAvg(curr) ? prev : curr;
});

console.log(maxBranch);

function fetchBranchData(name) {
  return new Promise((resolve) => {
    const data = {
      台北: [100, 200, 300],
      台中: [500, 600],
      高雄: [200, 200, 200, 800],
    };
    setTimeout(() => resolve({ branch: name, sales: data[name] }), 1000);
  });
}

async function getBestBranch() {
  try {
    //抓取各分店業績
    const results = await Promise.all([
      fetchBranchData("台北"),
      fetchBranchData("台中"),
      fetchBranchData("高雄"),
    ]);
    const highest = results.reduce((prev, curr) => {
      const getAvg = (item) =>
        item.sales.reduce((acc, item) => acc + item) / item.sales.length;
      return getAvg(prev) > getAvg(curr) ? prev : curr;
    });
    console.log(`本月冠軍區域是${highest.branch}`);
  } catch {
    console.error("錯誤");
  }
}

getBestBranch();

async function fetchWeather(city) {
  // 這裡我們模擬 fetch 的行為
  return new Promise((resolve) => {
    const mockDB = {
      台北: { temperature: 32, humidity: 80 },
      東京: { temperature: 28, humidity: 60 },
      倫敦: { temperature: 18, humidity: 40 },
    };
    setTimeout(() => {
      // 這裡請 resolve 一個「標準格式」的物件，包含 city 和 temp
      resolve({
        city: city,
        temp: mockDB[city].temperature,
      });
    }, 1000);
  });
}

async function weatherAnalysis() {
  const cities = ["台北", "東京", "倫敦"];
  try {
    //同步全球氣象觀測
    const result = await Promise.all(
      cities.map((city) => fetchWeather(city).catch(() => null)),
    );
    const hottest = result.reduce((prev, curr) => {
      return prev.temp > curr.temp ? prev : curr;
    });
    console.log(`全球最熱的城市是${hottest.city}測到的${hottest.temp}度`);
  } catch {
    console.error("連線失敗");
  }
}

async function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    if (city === "倫敦") {
      setTimeout(() => reject("連線失敗"), 500);
    } else {
      const data = { 台北: 32, 東京: 30 };
      setTimeout(() => resolve({ city: city, temp: data[city] }), 1000);
    }
  });
}

async function resilientWeather() {
  const cities = ["台北", "倫敦", "東京"];
  try {
    const result = Promise.all(
      cities.map((city) =>
        fetchWeather(city).catch((err) => {
          console.warn(`${city}連線失敗,${err}`);
          return null;
        }),
      ),
    );
    const vaildData = (await result).filter((city) => city !== null);
    const hottest = vaildData.reduce((prev, curr) => {
      return prev.temp > curr.temp ? prev : curr;
    });
    console.log(`全球最熱城市:${hottest.city}，${hottest.temp}度`);
  } catch (error) {
    console.error("連線失敗", error);
  }
}

resilientWeather();

function getMyPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos);
      },
      (err) => {
        reject(err);
      },
    );
  });
}
