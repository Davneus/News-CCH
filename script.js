document.getElementById('abrirFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
});

document.getElementById('cerrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'none';
});


<script>
    const navItems = [
        { name: 'Mundo', link: '#' },
        { name: 'Deportes', link: '#' },
        { name: 'Cultura', link: '#' },
        { name: 'Tecnología', link: '#' },
        { name: 'Contacto', link: '#' },
        { name: 'Más', link: '#', dropdown: [
            { name: 'Opinión', link: '#' },
            { name: 'Estilo de Vida', link: '#' }
        ]}
    ];

    const navList = document.getElementById('nav-items');

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        if (item.dropdown) {
            li.classList.add('dropdown');
            li.innerHTML = `
                <a class="nav-link dropdown-toggle" href="${item.link}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${item.name}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    ${item.dropdown.map(subItem => `
                        <a class="dropdown-item" href="${subItem.link}">${subItem.name}</a>
                    `).join('')}
                </div>
            `;
        } else {
            li.innerHTML = `<a class="nav-link" href="${item.link}">${item.name}</a>`;
        }

        navList.appendChild(li);
    });
</script>
