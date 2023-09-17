import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  // useState(nilai_awal), di situasi sini = 1
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Teknik Guard Clause. Jika nama = false maka exit dari funct
    if (!name) return;

    // name: name, Property: Value, jika P & V sama, maka tulis salah satu
    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          // Attr. value itu String, jadi ubah ke Number
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          // Beri anonymous funct untuk e dan panggil dengan arrow funct
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
