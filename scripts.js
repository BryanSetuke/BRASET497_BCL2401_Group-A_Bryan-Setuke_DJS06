// A list of provinces:
const provinces = [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
];

// A list of names:
const names = [
    "Ashwin",
    "Sibongile",
    "Jan-Hendrik",
    "Sifso",
    "Shailen",
    "Frikkie",
];

// A list of products with prices:
const products = [
    { product: "banana", price: "2" },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: "8" },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

// forEach
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Assuming a matching index for names and provinces

// Uppercase Transformation
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Sorting
provinces.sort();
console.log(provinces);

// Filtering Cape
const provincesWithoutCape = provinces.filter(
    (province) => !province.includes("Cape")
);
console.log(provincesWithoutCape.length);

// Finding 'S'
const hasS = names.map((name) => name.includes("S"));
const hasSIncludes = names.some((name) => name.includes("S")); // Check if at least one name has 'S'
console.log(hasS);
console.log(hasSIncludes);

// Creating Object Mapping:
const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index] || "No Province Assigned"; // Assign default if no province
    return acc;
}, {});
console.log(nameProvinceMap);

// Log Products
console.log(products.map((product) => product.product).join(", ")); // Join product names with comma

// Filter by Name Length:
console.log(products.filter((product) => product.product.length <= 5));

// Price Manipulation:
const total = products
    .filter((product) => product.price) // Filter products with prices
    .reduce((acc, product) => {
        acc += parseInt(product.price); // Convert price to number and add to accumulator
        return acc;
    }, 0);
console.log(`Total Price: ${total}`);

// Concatenate Product Names:
console.log(products.reduce((acc, product) => acc + product.product, "")); // Concatenate product names

// Find Extremes in Prices:
const priceExtremes = products.reduce((acc, product) => {
    const price = parseInt(product.price);
    if (!acc.highest || price > acc.highest) {
        acc.highest = price;
    }
    if (!acc.lowest || price < acc.lowest) {
        acc.lowest = price;
    }
    return acc;
}, {});
console.log(
    `Highest: ${priceExtremes.highest}. Lowest: ${priceExtremes.lowest}`
);

// Object Transformation:
const transformedProducts = Object.entries(
    products.reduce((acc, product) => {
        acc[product.product] = {
            name: product.product,
            cost: parseInt(product.price) || 0,
        };
        return acc;
    }, {})
).map(([key, value]) => ({ [key]: value })); // Destructuring and wrapping in object
console.log(transformedProducts);
