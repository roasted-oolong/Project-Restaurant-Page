export function loadAbout() {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.textContent = 'About Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = 
      "The Krabby Patty secret formula is a closely guarded secret in the SpongeBob SquarePants universe, and its exact ingredients are never revealed. While there are many fan theories, including the possibility of whale meat or love being the key ingredient, the show itself never confirms the recipe. The mystery surrounding the formula is a running gag and a key plot point, particularly in the rivalry between Mr. Krabs and Plankton"

    content.appendChild(header);
    content.appendChild(paragraph);
}