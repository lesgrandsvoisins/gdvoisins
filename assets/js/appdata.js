// Static JSON data for apps
const appsData = {
    "groups": [{
            "label": "Sites principaux",
            "apps": [{
                    "id": "www",
                    "appName": "WWW",
                    "icon": "🏠",
                    "color": "#fbbc04",
                    "url": "https://www.lesgrandsvoisins.com",
                    "description": "Portail lesgrandsvoisins.com"
                },
                {
                    "id": "blog",
                    "appName": "Blog",
                    "icon": "📰",
                    "color": "#34a853",
                    "url": "https://blog.lesgrandsvoisins.com",
                    "description": "Blog des Grands Voisins"
                },
                {
                    "id": "gdvoisins",
                    "appName": "GDVoisins",
                    "color": "#4285f4",
                    "icon": "🧭",
                    "url": "https://www.gdvoisins.com",
                    "description": "Tableau de bord des outils libres"
                },
                {
                    "id": "documentation",
                    "appName": "Documentation",
                    "icon": "📖",
                    "color": "#04bcfb",
                    "url": "https://quartz.resdigita.com",
                    "description": "Documentation sur les outils"
                }
            ]
        },
        {
            "label": "Outils Libres",
            "apps": [{
                    "id": "webmail",
                    "appName": "Webmail",
                    "icon": "✉️",
                    "color": "#ff6d01",
                    "url": "https://mail.lesgrandsvoisins.com",
                    "docurl": "https://quartz.resdigita.com/config/services/email/",
                    "description": "Webmail et serveur mail des Grands Voisins"
                },
                {
                    "id": "meet",
                    "appName": "Meet",
                    "techno": "Jitsi",
                    "docurl": "",
                    "icon": "👨‍👩‍👧‍👦",
                    "color": "#0f9d58",
                    "url": "https://jitsi.lgv.info/lesgrandsvoisins",
                    "description": "Salle de réunion Jitsi en visioconférence"
                },
                {
                    "id": "mots-de-passe",
                    "appName": "Mots de Passe",
                    "icon": "🔑",
                    "color": "#0f2879ff",
                    "url": "https://vw.lgv.info/",
                    "description": "Vaultwarden pour gérer nos mots de passe"
                }
            ]
        },
        {
            "label": "Outils Libres SSO",
            "apps": [{
                    "id": "drive (roses copyparty)",
                    "appName": "Drive (Roses CopyParty)",
                    "icon": "📂",
                    "color": "#1967d2",
                    "url": "https://cp.roses.gdvoisins.com/",
                    "description": "Partager des fichiers et des dossiers"
                },
                {
                    "id": "liens (linkding)",
                    "appName": "Liens (Linkding)",
                    "color": "#fbbc04",
                    "icon": "🔗",
                    "url": "https://linkding.lesgrandsvoisins.com/",
                    "description": "Gérer nos liens web (favoris / marque pages)"
                },
                {
                    "id": "markdown (hedgedoc)",
                    "appName": "Markdown (Hedgedoc)",
                    "color": "#4285f4",
                    "icon": "📝",
                    "url": "https://mark.lesgrandsvoisins.com/",
                    "description": "Editer nos documents collaboratifs en format Markdown"
                },
                {
                    "id": "tâches (vikunja)",
                    "appName": "Tâches (Vikunja)",
                    "icon": "☑️",
                    "color": "#fbbc04",
                    "url": "https://task.lesgrandsvoisins.com/",
                    "description": "Coordonner des projets et des tâches"
                }
            ]
        },
        {
            "label": "Mon Compte",
            "apps": [{
                    "id": "compte-keycloak",
                    "appName": "Compte Keycloak",
                    "icon": "🪪",
                    "color": "#ff0000",
                    "url": "https://key.lesgrandsvoisins.com/realms/master/account",
                    "description": "Interface de mon administration pour moi"
                },
                {
                    "id": "compte-guichet",
                    "appName": "Compte guichet",
                    "icon": "🪪",
                    "color": "#ff5722",
                    "url": "https://guichet.resdigita.com/user",
                    "description": "Ancien gestion d'utilisateur Guichet"
                },
                {
                    "id": "inscription-infos",
                    "appName": "Inscription infos",
                    "icon": "🗞️",
                    "color": "#673ab7",
                    "url": "https://list.lesgrandsvoisins.com/subscription/form",
                    "description": "Inscription sur nos lettres d'information ListMonk"
                }
            ]
        },
        {
            "label": "Dons",
            "apps": [{
                    "id": "dons-helloasso",
                    "appName": "Dons HelloAsso",
                    "icon": "🪙",
                    "color": "#34a853",
                    "url": "https://www.helloasso.com/associations/les-grands-voisins/adhesions/souscription-annuelle",
                    "description": "Dons HelloAsso pour Les Grands Voisins"
                },
                {
                    "id": "dons-paypal",
                    "appName": "Dons Paypal",
                    "icon": "🪙",
                    "color": "#4285f4",
                    "url": "https://www.paypal.com/donate/?hosted_button_id=BPUUS6H6TP62Y",
                    "description": "Dons Paypal pour Les Grands Voisins"
                },
                {
                    "id": "dons-stripe",
                    "appName": "Dons Stripe",
                    "icon": "🪙",
                    "color": "#1a73e8",
                    "url": "https://donate.stripe.com/fZe7uD07z9hAg0w288",
                    "description": "Dons Stripe pour Les Grands Voisins"
                }
            ]
        },
        {
            "label": "Médias sociaux",
            "apps": [{
                    "id": "inatagram",
                    "appName": "Inatagram",
                    "color": "#34a853",
                    "icon": "📽️",
                    "url": "https://www.instagram.com/les_grands_voisins",
                    "description": "les_grands_voisins sur Instagram"
                },
                {
                    "id": "youtube",
                    "appName": "YouTube",
                    "color": "#ea4335",
                    "icon": "🎥",
                    "url": "https://www.youtube.com/@LesGrandsVoisinsCom",
                    "description": "@LesGrandsVoisinsCom sur Youtube"
                },
                {
                    "id": "github",
                    "appName": "GitHub",
                    "icon": "👩🏻‍💻",
                    "color": "#5f6368",
                    "url": "https://github.com/lesgrandsvoisins",
                    "description": "lesgrandsvoisins sur GitHub"
                }
            ]
        },
        {
            "label": "Expérimentation",
            "apps": [{
                    "id": "writefreely",
                    "appName": "WriteFreely",
                    "icon": "✒️",
                    "color": "#1a73e8",
                    "url": "https://writefreely.lesgrandsvoisins.com/",
                    "description": "Blog Write Freely"
                },
                {
                    "id": "forum",
                    "appName": "Forum",
                    "icon": "💬",
                    "color": "#fbbc04",
                    "url": "https://discourse.lesgrandsvoisins.com/",
                    "description": "Forum Discourse"
                },
                {
                    "id": "fils-de-discussion",
                    "appName": "Fils de discussion",
                    "icon": "🗨️",
                    "color": "#ea4335",
                    "url": "https://mm.lgv.info/",
                    "description": "Fils de discussion Matter Most"
                },
                {
                    "id": "ancien-tabelau-de-bord",
                    "appName": "Ancien Tabelau de Bord",
                    "color": "#4285f4",
                    "icon": "🚀",
                    "url": "https://www.lgv.info",
                    "description": "Ancien tableau de bord Wagtail"
                },
                {
                    "id": "xandikos",
                    "appName": "Xandikos",
                    "icon": "🗓️",
                    "color": "#5f6368",
                    "url": "https://xandikos.lesgv.org",
                    "description": "Calendriers Xandikos"
                }
            ]
        },
        {
            "label": "Administration",
            "apps": [{
                    "id": "admin-wagtail",
                    "appName": "Admin Wagtail",
                    "icon": "⚙️",
                    "color": "#5f6368",
                    "url": "https://www.lesgrandsvoisins.com/cms-admin/",
                    "description": "Administration du portail Wagtail"
                },
                {
                    "id": "admin-keycloak",
                    "appName": "Admin Keycloak",
                    "icon": "⚙️",
                    "color": "#1a73e8",
                    "url": "https://key.lesgrandsvoisins.com/admin",
                    "description": "Administration du serveur Keycloak"
                },
                {
                    "id": "admin-ghost",
                    "appName": "Admin Ghost",
                    "icon": "⚙️",
                    "color": "#34a853",
                    "url": "https://blog.lesgrandsvoisins.com/ghost",
                    "description": "Administration du blog Ghost"
                },
                {
                    "id": "admin-uptime-kuma",
                    "appName": "Admin Uptime Kuma",
                    "color": "#fbbc04",
                    "icon": "⚙️",
                    "url": "https://list.lesgrandsvoisins.com/",
                    "description": "Monitoring par notre Uptime Kuma"
                },
                {
                    "id": "admin-listmonk",
                    "appName": "Admin ListMonk",
                    "color": "#4285f4",
                    "icon": "⚙️",
                    "url": "https://list.lesgrandsvoisins.com/",
                    "description": "Listes de diffusion par notre serveur ListMonk"
                },
                {
                    "id": "admin-config-magic",
                    "appName": "Admin Config Magic",
                    "icon": "⚙️",
                    "color": "#fbbc04",
                    "url": "https://www.configmagic.com/",
                    "description": "Wikijs de configuration Config Magic"
                }
            ]
        }
    ]
};