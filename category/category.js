const groupByCategory = (items) =>
  items.reduce((acc, { category, ...item }) => {
    (acc[category] = acc[category] || []).push(item);
    return acc;
  }, {});

const items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "broccoli", category: "vegetable" },
];

const groupedItems = groupByCategory(items);
console.log(groupedItems);
