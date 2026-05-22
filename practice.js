const scores = [
  { name: "Alice", subject: "Math", score: 95 },
  { name: "Bob", subject: "Math", score: 58 },
  { name: "Charlie", subject: "English", score: 88 },
  { name: "David", subject: "Math", score: 76 },
  { name: "Eve", subject: "English", score: 55 },
];

const result = scores.reduce((acc, item) => {
  const key = item.subject;
  const { passList, failCount } = acc[key] || { passList: [], failCount: 0 };
  const isPass = item.score >= 60;

  return {
    ...acc,
    [key]: {
      passList: isPass ? [...passList, item.name] : passList,
      failCount: isPass ? failCount : failCount + 1,
    },
  };
}, {});

const posts = [
  { id: 1, type: "video", likes: 1000, title: "教學影片" },
  { id: 2, type: "image", likes: 500, title: "生活照" },
  { id: 3, type: "video", likes: 3000, title: "挑戰影片" },
  { id: 4, type: "text", likes: 200, title: "心情小語" },
  { id: 5, type: "image", likes: 1200, title: "風景照" },
];

const result2 = posts.reduce((acc, item) => {
  const key = item.type;
  const { totalLikes, bestPost, bestLike } = acc[key] || {
    totalLikes: 0,
    bestPost: "",
    bestLike: 0,
  };
  const isNewBest = item.likes > bestLike;

  return {
    ...acc,
    [key]: {
      totalLikes: totalLikes + item.likes,
      bestLike: isNewBest ? item.likes : bestLike,
      bestPost: isNewBest ? item.title : bestPost,
    },
  };
}, {});

const inventory = [
  { name: "Apple", cat: "Fruit", price: 10, stock: 5 },
  { name: "Carrot", cat: "Veg", price: 5, stock: 10 },
  { name: "Banana", cat: "Fruit", price: 8, stock: 20 },
  { name: "Onion", cat: "Veg", price: 12, stock: 3 },
];

const result3 = inventory.reduce((acc, item) => {
  const key = item.cat;
  const { totalStock, totalValue, items } = acc[key] || {
    totalStock: 0,
    totalValue: 0,
    items: [],
  };
  return {
    ...acc,
    [key]: {
      totalStock: totalStock + item.stock,
      totalValue: totalValue + item.stock * item.price,
      items: [...items, item.name],
    },
  };
}, {});

const bookings = [
  {
    guest: "Alice",
    roomType: "Suite",
    status: "checked-in",
    nights: 3,
    price: 500,
  },
  {
    guest: "Bob",
    roomType: "Standard",
    status: "checked-out",
    nights: 1,
    price: 200,
  },
  {
    guest: "Charlie",
    roomType: "Suite",
    status: "checked-in",
    nights: 2,
    price: 500,
  },
  {
    guest: "David",
    roomType: "Standard",
    status: "checked-in",
    nights: 4,
    price: 200,
  },
  {
    guest: "Eve",
    roomType: "Standard",
    status: "checked-out",
    nights: 2,
    price: 200,
  },
];

const result4 = bookings.reduce((acc, item) => {
  const key = item.roomType;
  const { totalRevenue, stayCount, activeGuests } = acc[key] || {
    totalRevenue: 0,
    stayCount: 0,
    activeGuests: [],
  };
  const isCheckedIn = item.status == "checked-in";
  return {
    ...acc,
    [key]: {
      totalRevenue: totalRevenue + item.nights * item.price,
      stayCount: stayCount + item.nights,
      activeGuests: isCheckedIn ? [...activeGuests, item.guest] : activeGuests,
    },
  };
}, {});

console.log(result4);

const rawTags = [
  "JavaScript",
  "html",
  "JS",
  "HTML",
  "css",
  "JavaScript",
  "React",
];

const result5 = rawTags.reduce((acc, item) => {
  const upperTag = item.toUpperCase();
  const isExcist = acc.includes(upperTag);
  return isExcist ? acc : [...acc, upperTag];
}, []);

const rawInterests = [
  "  Coding",
  "music ",
  " CODING",
  "  cooking  ",
  "MUSIC",
  "Gaming",
];

const result6 = rawInterests.reduce((acc, item) => {
  const cleanItem = item.trim().toLowerCase();
  const isExcist = acc.includes(cleanItem);
  return isExcist ? acc : [...acc, cleanItem];
}, []);

const posts2 = [
  { id: 1, title: "JS 基礎", tags: ["JS", "Web"] },
  { id: 2, title: "React 入門", tags: ["JS", "React", "Web"] },
  { id: 3, title: "CSS 心得", tags: ["CSS", "Web"] },
  { id: 4, title: "Node 教學", tags: ["JS", "Node"] },
];

const result7 = posts2.reduce((acc, item) => {
  item.tags.forEach((tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, {});

const authors = [
  { name: "Alice", posts: 3, likes: 100 },
  { name: "Bob", posts: 8, likes: 50 },
  { name: "Charlie", posts: 8, likes: 150 },
  { name: "David", posts: 2, likes: 200 },
];

const result8 = authors.reduce((acc, item) => {
  if (item.posts > acc.posts) {
    acc = item;
  } else if (item.posts == acc.posts) {
    if (item.likes > acc.likes) {
      acc = item;
    } else {
      return acc;
    }
  } else {
    return acc;
  }
  return acc;
}, authors[0]);

const orders = [
  {
    id: "A01",
    items: [
      { name: "Cup", price: 10 },
      { name: "Pen", price: 5 },
    ],
  },
  { id: "A02", items: [{ name: "Watch", price: 100 }] },
  {
    id: "A03",
    items: [
      { name: "Tape", price: 2 },
      { name: "Eraser", price: 1 },
    ],
  },
];

const result9 = orders.reduce((acc, item) => {
  item.items.forEach((product) => {
    if (product.price > 5) {
      acc.push(product.name);
    }
  });
  return acc;
}, []);

const library = [
  {
    author: "小明",
    books: [
      { title: "JS 入門", price: 300 },
      { title: "CSS 重構", price: 150 },
    ],
  },
  {
    author: "小華",
    books: [
      { title: "React 攻略", price: 500 },
      { title: "HTML 基礎", price: 100 },
    ],
  },
  { author: "阿強", books: [{ title: "Node 實戰", price: 400 }] },
];

const result10 = library.reduce((acc, item) => {
  item.books.forEach((book) => {
    if (book.price > 200) {
      acc.push(book.title);
    }
  });
  return acc;
}, []);

const departments = [
  {
    name: "前端組",
    members: [
      { name: "Alice", role: "Senior" },
      { name: "Bob", role: "Junior" },
    ],
  },
  {
    name: "後端組",
    members: [
      { name: "Charlie", role: "Senior" },
      { name: "David", role: "Senior" },
    ],
  },
];

const result11 = departments.reduce((acc, item) => {
  const key = item.name;
  const cal = item.members.filter((s) => s.role == "Senior");
  acc[key] = cal.length;
  return acc;
}, {});

const orders1 = [
  {
    id: "101",
    category: "Electronics",
    amount: 500,
    products: ["Laptop", "Mouse"],
  },
  { id: "102", category: "Books", amount: 50, products: ["JS Guide"] },
  {
    id: "103",
    category: "Electronics",
    amount: 100,
    products: ["Mouse", "Keyboard"],
  },
  {
    id: "104",
    category: "Books",
    amount: 30,
    products: ["JS Guide", "CSS Manual"],
  },
];

const result12 = orders1.reduce((acc, item) => {
  const key = item.category;
  const { totalAmount, allProducts } = acc[key] || {
    totalAmount: 0,
    allProducts: [],
  };
  return {
    ...acc,
    [key]: {
      totalAmount: totalAmount + item.amount,
      allProducts: [...new Set([...allProducts, ...item.products])],
    },
  };
}, {});

const result12 = orders1.reduce((acc, item) => {
  const key = item.category;

  // 1. 如果分類不存在，先初始化
  if (!acc[key]) {
    acc[key] = {
      totalAmount: 0,
      allProducts: new Set(), // 這裡先用 Set，效能最好
    };
  }

  // 2. 直接對該物件進行修改
  acc[key].totalAmount += item.amount;

  // 3. 利用 Set.add() 快速去重，不需要展開陣列
  item.products.forEach((p) => acc[key].allProducts.add(p));

  return acc;
}, {});

// 4. 最後把所有 Set 轉回 Array (如果你的後續邏輯需要陣列)
Object.values(result12).forEach((group) => {
  group.allProducts = [...group.allProducts];
});

const cities = [
  {
    region: "北區",
    facilities: [
      { name: "公園", status: "OK" },
      { name: "醫院", status: "Repair" },
    ],
  },
  {
    region: "南區",
    facilities: [
      { name: "學校", status: "OK" },
      { name: "公園", status: "Repair" },
    ],
  },
  { region: "西區", facilities: [{ name: "警察局", status: "OK" }] },
];

const result13 = cities.reduce((acc, item) => {
  item.facilities.forEach((s) => {
    if (s.status == "Repair") {
      acc.push(s.name);
    }
  });
  return acc;
}, []);

const company = [
  {
    dept: "工程部",
    employees: [
      { name: "Alice", skills: ["js", "react"] },
      { name: "Bob", skills: ["JS", "Node"] },
    ],
  },
  {
    dept: "設計部",
    employees: [{ name: "Charlie", skills: ["Figma", "css"] }],
  },
];

const result14 = company.reduce((acc, item) => {
  item.employees.forEach((employee) => {
    employee.skills.forEach((skill) => {
      const upperSkill = skill.toUpperCase;
      if (!acc.includes(upperSkill)) {
        acc.push(upperSkill);
      }
    });
  });
  return acc;
}, []);

const inventory = [
  {
    store: "台北店",
    items: [
      { name: "牛奶", price: 90, stock: 10 },
      { name: "麵包", price: 40, stock: 20 },
    ],
  },
  {
    store: "台中店",
    items: [
      { name: "牛奶", price: 90, stock: 5 },
      { name: "咖啡", price: 120, stock: 15 },
    ],
  },
];

const result15 = inventory.reduce((acc, item) => {
  item.items.forEach((product) => {
    const key = product.name;
    if (!acc[key]) {
      acc[key] = { totalStock: 0, totalValue: 0 };
    }
    acc[key].totalStock += product.stock;
    acc[key].totalValue += product.stock * product.price;
  });
  return acc;
}, {});

const drinkRanking = Object.entries(result15).sort((a, b) => {
  return b[1].totalValue - a[1].totalValue;
});

const students = [
  { name: "小明", score: 85, active: true },
  { name: "小華", score: 40, active: true },
  { name: "阿強", score: 90, active: false },
  { name: "小美", score: 75, active: true },
];

const result16 = students
  .filter((item) => item.score >= 60 && item.active)
  .reduce((acc, item, index, array) => {
    acc += item.score;
    if (index === array.length - 1 && array.length > 0) {
      return acc / array.length;
    }
    return acc;
  }, 0);
