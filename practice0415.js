const products = [
  { name: "原子筆", price: 20 },
  { name: "筆記本", price: 80 },
  { name: "橡皮擦", price: 10 },
  { name: "剪刀", price: 55 },
];

const result = products
  .filter((item) => item.price > 30)
  .map((item) => item.name);

const account = products.reduce((acc, item) => {
  if (item.price > 50) {
    acc += item.price * 0.8;
  } else {
    acc += item.price;
  }
  return acc;
}, 0);

const category = products.reduce((acc, item) => {
  const key = item.price > 50 ? "expensive" : "cheap";
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item.name);
  return acc;
}, {});

const produ = [
  { name: "原子筆", price: 20, type: "文具" },
  { name: "筆記本", price: 80, type: "文具" },
  { name: "巧克力", price: 50, type: "零食" },
  { name: "橡皮擦", price: 10, type: "文具" },
  { name: "可樂", price: 25, type: "零食" },
  { name: "耳機", price: 2000, type: "電子產品" },
];

const sells = produ.reduce((acc, item) => {
  const key = item.type;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item.name);
  return acc;
}, {});

const product = [
  { id: 1, name: "原子筆", price: 20, type: "文具" },
  { id: 2, name: "耳機", price: 2000, type: "電子產品" },
  { id: 3, name: "筆記本", price: 80, type: "文具" },
];

const update = product.map((item) => {
  return item.type === "電子產品" ? { ...item, price: item.price + 100 } : item;
});

const orders = [
  {
    id: "A001",
    status: "completed",
    items: [
      { name: "滑鼠", price: 500, quantity: 2 },
      { name: "鍵盤", price: 1200, quantity: 1 },
    ],
  },
  {
    id: "A002",
    status: "pending",
    items: [{ name: "螢幕", price: 5000, quantity: 1 }],
  },
  {
    id: "A003",
    status: "completed",
    items: [
      { name: "耳機", price: 1500, quantity: 2 },
      { name: "滑鼠墊", price: 300, quantity: 3 },
    ],
  },
];

const neworders = orders
  .filter((item) => item.status === "completed")
  .map((items) =>
    items.items.reduce((acc, item) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0),
  );

const students = [
  { name: "小明", active: true, scores: [80, 90, 100] }, // 平均 90
  { name: "小紅", active: false, scores: [100, 100, 100] }, // 不在學，剔除
  { name: "小剛", active: true, scores: [50, 40, 60] }, // 平均 50，太低剔除
  { name: "小美", active: true, scores: [90, 85, 95] }, // 平均 90
];

const newStud = students
  .filter(({ active }) => active)
  .map(({ name, scores }) => {
    return {
      name,
      avg: scores.reduce((acc, score) => acc + score, 0) / scores.length,
    };
  })
  .filter(({ avg }) => avg >= 80)
  .map(({ name, avg }) => `${name}:${avg}`);

const posts = [
  { title: "JS教學", tags: ["javascript", "programming"] },
  { title: "React入門", tags: ["javascript", "frontend", "react"] },
  { title: "CSS技巧", tags: ["frontend", "css"] },
];

const flatten = posts.flatMap(({ tags }) => tags);
const newFlatten = [...new Set(flatten)].sort();

const orders0421 = [
  {
    id: 1,
    paid: true,
    products: [
      { name: "滑鼠", category: "周邊" },
      { name: "螢幕", category: "顯示器" },
    ],
  },
  {
    id: 2,
    paid: false,
    products: [{ name: "耳機", category: "音響" }],
  },
  {
    id: 3,
    paid: true,
    products: [
      { name: "鍵盤", category: "周邊" },
      { name: "喇叭", category: "音響" },
    ],
  },
];

const check0421 = orders0421
  .filter(({ paid }) => paid)
  .flatMap(({ products }) => products)
  .map(({ category }) => category);
const result0421 = [...new Set(check0421)].sort();

const allTags = [
  "javascript",
  "programming",
  "javascript",
  "frontend",
  "react",
  "frontend",
  "css",
];

const resultTags = allTags.reduce((acc, item) => {
  const key = item;
  if (!acc[key]) {
    acc[key] = 1;
  }
  if (item === key) {
    acc[key] += 1;
  }
  return acc;
}, {});

const fruits = [
  "apple",
  "rotten_apple",
  "banana",
  "apple",
  "rotten_banana",
  "banana",
  "apple",
];

const product = fruits
  .filter((fruit) => !fruit.includes("rotten"))
  .reduce((acc, item) => {
    const key = item;
    if (!acc[key]) {
      acc[key] = 1;
    }
    if (item === key) {
      acc[key] += 1;
    }
    return acc;
  }, {});

const salesData = [
  { category: "文具", price: 20, sales: 100 },
  { category: "零食", price: 50, sales: 50 },
  { category: "文具", price: 80, sales: 20 },
  { category: "電子", price: 1000, sales: 2 },
];

const salesResult = salesData.reduce((acc, { category, price, sales }) => {
  const key = category;
  acc[key] = (acc[key] || 0) + price * sales;
  return acc;
}, {});

const compare = Object.entries(salesResult).reduce((prev, curr) =>
  prev[1] > curr[1] ? prev : curr,
);

console.log(compare[0]);
