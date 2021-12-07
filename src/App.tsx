import { useState } from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';

export default function App() {
  const [selected, setSelected] = useState("");

  const select = (item:string) => setSelected(() => item);

  return (
    <div id="app">
      <NavBar selected={selected} select={select} />
      <main>
        <SideBar selected={selected} select={select} />
      </main>
    </div>
  )
}

