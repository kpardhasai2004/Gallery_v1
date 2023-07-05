export async function getImages() {
    const res = await fetch("http://127.0.0.1:8000/api/gallery/");
    return res.json();
  }