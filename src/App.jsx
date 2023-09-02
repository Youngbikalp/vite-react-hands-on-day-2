import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>Gaming Geeks</h1>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>GTA V</h2>
          <p>
            Grand Theft Auto V is an action-adventure game played from either a
            third-person or first-person perspective.
          </p>
        </section>

        <section>
          <h2>League of Legends</h2>
          <p>
            a team-based competitive game mode based on strategy and outplaying
            opponents.
          </p>
        </section>

        <aside>
          <h2>Aside</h2>
          <p>This is some additional content in the aside.</p>
        </aside>
      </main>

      <footer>
        <p>&copy; 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
