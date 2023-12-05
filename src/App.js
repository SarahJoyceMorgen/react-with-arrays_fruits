import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍎 Apple", color: "green" },
    { id: 3, name: "🍍 Pineapple", color: "yellow" },
    { id: 4, name: "🍓 Strawberry", color: "red" },
    { id: 5, name: "🍊 Orange", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (                       //implicit Return
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      )

      )}
    </div>
  );
}
