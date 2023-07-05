import React from 'react';

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/gallery/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return (
    <div>
      { data.results.map(data => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};
