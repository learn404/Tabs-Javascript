# Exercice d'Onglets en JavaScript

Bienvenue dans l'exercice d'onglets en JavaScript ! Dans cet exercice, vous allez apprendre à créer une interface de navigation par onglets simple en utilisant JavaScript. Cela vous aidera à pratiquer la gestion des interactions utilisateur, la manipulation du DOM et la mise à jour de l'interface utilisateur en fonction des actions de l'utilisateur.

## Objectifs

- Comprendre comment sélectionner et manipuler des éléments du DOM en utilisant JavaScript.
- Apprendre à ajouter des écouteurs d'événements pour gérer les interactions utilisateur.
- Implémenter des fonctionnalités pour basculer entre différentes sections de contenu.

## Instructions

1.  **Configurer la structure HTML** : - Créez un fichier `index.html` avec la structure de base suivante :

        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabs JS</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="tabs">
                <div class="tab" data-tab="1">
                    <input type="radio" class="radio-button" id="tab1" checked>
                    <label for="tab1">Tab 1</label>
                    <div class="tab-content active" id="tab1-content">
                        <h2>Content 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div class="tab" data-tab="2">
                    <input type="radio" class="radio-button" id="tab2">
                    <label for="tab2">Tab 2</label>
                    <div class="tab-content" id="tab2-content">
                        <h2>Content 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
                <div class="tab" data-tab="3">
                    <input type="radio" class="radio-button" id="tab3">
                    <label for="tab3">Tab 3</label>
                    <div class="tab-content" id="tab3-content">
                        <h2>Content 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
            </div>
            <script src="script.js"></script>
        </body>
        </html>

        ```

2.  **Styliser les Onglets et le Contenu** :

    - Créez un fichier `styles.css` pour styliser vos onglets et sections de contenu. Voici un exemple de base pour commencer :

    ```css
    body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }

    .tabs {
        max-width: 600px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        overflow: hidden;
    }

    .tab {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 15px 20px;
        transition: background-color 0.3s, box-shadow 0.3s;
        border-bottom: 1px solid #ddd;
    }

    .tab:last-child {
        border-bottom: none;
    }

    .tab:hover {
        background-color: #f0f0f0;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    }

    .tab input[type="radio"] {
        display: none;
    }

    .tab label {
        flex: 1;
        font-size: 18px;
        font-weight: 600;
        color: #555;
        display: block;
        transition: color 0.3s;
    }

    .tab label:hover {
        color: #000;
    }

    .tab-content {
        display: none;
        padding: 20px;
        background-color: #fff;
        animation: fadeIn 0.5s ease-in-out;
    }

    .tab-content.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .tab-content h2 {
        margin-top: 0;
        font-size: 24px;
        color: #222;
    }

    .tab-content p {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
    }

    @media (max-width: 768px) {
        .tab {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px 15px;
        }

        .tab label {
            font-size: 16px;
        }

        .tab-content {
            padding: 15px;
        }
    }

    ```

3.  **Implémenter la Logique JavaScript** :

    - Créez un fichier `script.js` où vous écrirez le JavaScript pour gérer le changement d'onglet. Suivez les étapes ci-dessous pour compléter l'exercice :
      1. Sélectionnez tous les boutons d'onglets et les sections de contenu en utilisant `querySelectorAll`.
      2. Ajoutez un écouteur d'événements `click` à chaque bouton d'onglet.
      3. Dans l'écouteur d'événements, cachez toutes les sections de contenu et supprimez les états actifs de tous les onglets.
      4. Affichez la section de contenu qui correspond à l'onglet cliqué et définissez l'onglet cliqué comme actif.

4.  **Tester Votre Solution** :
    - Ouvrez le fichier `index.html` dans votre navigateur.
    - Cliquez sur les onglets pour vous assurer que le contenu change correctement.

## Défis Supplémentaires

- Ajoutez du CSS pour indiquer visuellement quel onglet est actuellement actif.
- Implémentez la même fonctionnalité en utilisant la délégation d'événements.
- Rendez les onglets accessibles en permettant la navigation au clavier.

## Ressources Supplémentaires

- [MDN Web Docs : Document Object Model (DOM)](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
- [MDN Web Docs : EventTarget.addEventListener()](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs : querySelector()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
