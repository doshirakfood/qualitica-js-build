let result = (process.env.NODE_ENV === "development") ? `Результат dev-версии: ${10 + 11}` : `Результат prod-версии: ${20 + 20}`;

console.log(result);
