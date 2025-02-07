"use client";

import { useState } from "react";

export default function Imc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  function handleClick() {
    const alturaMetro = Number(altura) / 100;
    const total = Number(peso) / (alturaMetro * alturaMetro);
    setImc(total.toFixed(2));
  }
  return (
    <div>
      <input
        onChange={(e) => setPeso(e.target.value)}
        type="text"
        id="peso"
        name="peso"
        value={peso}
        placeholder="Peso em kg"
      />
      <input
        onChange={(e) => setAltura(e.target.value)}
        type="text"
        id="altura"
        name="altura"
        value={altura}
        placeholder="Altura em cm"
      />
      <button onClick={handleClick}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
