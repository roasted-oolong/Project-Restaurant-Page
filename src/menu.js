export function loadMenu() {
    const content = document.getElementById('content');

    const menuItems = [
        {
            name: 'Krabby Patty',
            price: '$12',
            description: 'The original Krabby Patty.'
        },
        {
            name: 'Fries',
            price: '$10',
            description: "It's a lot of fries for the price, trust me bro"
        },
        {
            name: 'Salad',
            price: '$8',
            description: 'Crisp romaine lettuce, parmesan, croutons, and Caesar dressing.'
        }
    ];

    content.innerHTML = '';
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';

        const title = document.createElement('div');
        title.style.fontWeight = 'bold';
        title.textContent = `${item.name} | ${item.price}`;

        const desc = document.createElement('div');
        desc.textContent = item.description;
        desc.style.marginTop = '4px';

        card.appendChild(title);
        card.appendChild(desc);
        content.appendChild(card);
    });
}