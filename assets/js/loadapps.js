const menuBtn = document.getElementById('menuBtn');
const appMenu = document.getElementById('appMenu');
const overlay = document.getElementById('overlay');
const appGrid = document.getElementById('appGrid');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadApps();
});

// Load apps from JSON data
function loadApps() {
    appsData.groups.forEach(group => {
        // const groupDiv = document.createElement('div');
        // groupDiv.className = 'app-group';

        // const groupLabel = document.createElement('div');
        // groupLabel.className = 'group-label';
        // groupLabel.textContent = group.label;
        // // groupDiv.appendChild(groupLabel);
        // appGrid.appendChild(groupLabel);

        n = group.apps.length
        i = 0;

        group.apps.forEach(app => {
            const appItem = document.createElement('a');
            i++;
            label = "";

            if (i == 1) {
                extraClass = "app-item-first";
                label = `
                <label for="${app.id}">
                    ${group.label}
                </label>
                `;
            } else if (i == n) {
                extraClass = "app-item-last";
            } else {
                extraClass = "app-item-middle";
            }
            appItem.href = app.url;
            appItem.className = "app-item " + extraClass;

            docHTML = "";
            if (app.docurl && app.docurl != "") {
                docHTML = `
                <form action="${app.docurl}" class="app-documentation"><input type="submit" value="doc."/></form>
                `;
            }
            appItem.innerHTML = `
                        ${label}
                        <div class="app-card" id="${app.id}">
                            <div class="app-front">
                                <div class="app-icon" style="background: ${app.color};">${app.icon}</div>
                                <div class="app-name">${app.name}</div>
                            </div>
                            <div class="app-back">
                                    <div class="app-name">${app.name}</div>
                                    <div class="app-description">${app.description}</div>
                                ${docHTML}
                                    <div class="group-label">${group.label}</div>
                            </div>
                        </div>
                
                    `;

            // appItem.addEventListener('click', (e) => {
            //     e.preventDefault();
            //     toggleMenu();
            //     console.log(`Clicked: ${app.name}`);
            // });

            // groupDiv.appendChild(appItem);
            appGrid.appendChild(appItem);
        });

        // appGrid.appendChild(groupDiv);
    });
}

function toggleMenu() {
    appMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);