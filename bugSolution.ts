function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

const dateString = '2024-03-10';
const date = new Date(dateString);
greet("John Doe", date); // Correct usage