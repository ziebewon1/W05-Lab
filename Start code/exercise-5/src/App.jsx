import { matchaMenu } from "./data";

function MenuItem({ item }) {
  return (
    <li className="matcha-menu-item">
      <img src={item.image.src} alt={item.image.alt} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </li>
  );
}

function App() {
  return (
    <>
      <header>
        <h2>Our Tasty Meownu :3</h2>
        <p>Test out our delicious best sellers 🩷 </p>
        <p>All items are made with loves and kissies 💋</p>
      </header>
      <main>
      <section className="matcha-menu">
        <ul>
          {matchaMenu.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
      </main>
    </>
  );
}
export default App;
