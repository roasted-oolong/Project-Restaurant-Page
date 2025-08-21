export function loadHomepage() {
  const content = document.getElementById('content');

  // Create elements
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/200x150?text=Restaurant'; // Replace with your image if needed
  img.alt = 'Restaurant';

  const header = document.createElement('h1');
  header.textContent = 'Krusty Burger';

  const para = document.createElement('p');
  para.textContent = 'The most tasty and juicy burgers in existence.';

  // Clear content and append new elements
  content.innerHTML = '';
  content.appendChild(img);
  content.appendChild(header);
  content.appendChild(para);
}