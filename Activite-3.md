# Activite-3
##Objectif @showdialog
Dans cette Activité, nous allons programmer un minijeu d'esquive d'astéroides.
Tu va pouvoir controler un vaiseau spaciale et esquiver des astéroides.
Codé par tes propres mains.


## Étape 1
Nous allons commencer par créer notre joueur.
Dans la section ``||variables:Variables||`` cliquer sur créer une variable et nommé la joueur.
Glisser ``||variables:Définir joueur à 0 ||`` dans le crochet ``||basic:au démarrage||``.
Dans la section  ``||game:jeu||`` glisser ``||game:créer un sprite à x:0 y:0||`` à la place de 0 dans ``||variables:Définir joueur à 0 ||``
Changer les valeur **X** pour **2** et **Y** pour **4**.


```blocks
let Joueur: game.LedSprite = null
Joueur = game.createSprite(2, 4)
```


##Étape 2
Maintenant nous allons faire les déplacements du Joueur.
Pour ça, glisser ``||Input:Lorsque de le bouton A est pressé||`` trouvable dans la section ``||Input:entrée||`` dans l'espace de programmation
trouver dans la section ``||game:jeu||`` ``||game:sprite modifie de x : 1||`` et glisser le dans le crochet ``||Input:Lorsque de le bouton A est pressé||``.
Changer la valeur **1** par **-1**
Cliquer droit sur ``||Input:Lorsque de le bouton A est pressé||`` et dupliquer. 
Changer ``||Input:A||`` pour ``||Input:B||`` et **-1** pour **1**.
Tester avec le simulateur, en pressant ``||Input:A||`` la led allumée se déplace vers la gauche et inversement pour ``||Input:B||``.


```blocks
let Joueur: game.LedSprite = null
Joueur = game.createSprite(2, 4)
input.onButtonPressed(Button.A, function () {
    Joueur.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Joueur.change(LedSpriteProperty.X, 1)
})
```


## Étape 3
Maintenant que nous avons le joueur fonctionnel, nous allons programmer les astéroïdes.
Le mur d'astéroides sera initialisé en haut du microbit avec un espace pour que le vaiseau puisse passer.
Pour ce faire, Commençons par déclarer 4 nouvelles variables nommées ``||variables:wall1||``, ``||variables:wall2||``, ``||variables:wall3||`` et ``||variables:wall4||``.
Créé une autre ``||variables:variable||`` nommé ``||variables:random||``.
Ensuite, créons une fonction en cliquant sur la section ``||functions:fonction||`` puis créer une fonction, nommée la **defineWall** et cliquer sur terminer.
Une fonction te permet d'écrire un groupe de lignes de code une seule fois, et ensuite tu peux les utiliser encore et encore en appelant simplement le nom de la fonction.
Dans notre cas nous allons appeler la fonction quand nous voudrons faire apparaitre un nouveau mur d'astéroides. 

## Étape 4 
Nous voulons un trou dans le mur mais nous ne voulons pas qu'il soit tout le temps au meme endroit.
Glisser ``||variables:définir random à 0||`` dans la fonction ``||functions:defineWall||``.
Dans la section ``||math:maths||`` selectionner ``||math:choisir au hasard de 0 à 10||`` et glisser le à la place du 0 dans ``||variables:définir random à 0||``.
Changer **10** pour **4**.
Dans la section ``||logic:logique||`` selectionner ``||logic:si <vrai> alors sinon||`` et glisser le sous ``||variables:définir random à ...||``.
cliquer **4** fois sur le + et cliquer sur le - du ``||logic:sinon||``.
Remplacer le ``||logic:<vrai>||`` de ``||logic:si <vrai> alors||``  par ``||logic:0 = 0||`` trouvable dans la section ``||logic:logic||``
Faite la meme chose pour les 4 autres vide de ``||logic:sinon si < > alors||``.
Dans la section ``||variables:variables||`` trouver ``||variables:random||`` et glisser le dans les 0 de gauche des blocs ``||logic:0 = 0||`` que vous venez d'ajouter.
Dans le premier, ``||logic:sinon si random = 0 alors||`` remplacer le **0** par **1**.
Dans le deuxième, ``||logic:sinon si random = 0 alors||`` remplacer le **0** par **2**.
Dans le troisième, ``||logic:sinon si random = 0 alors||`` remplacer le **0** par **3**.
Dans le quatrième, ``||logic:sinon si random = 0 alors||`` remplacer le **0** par **4**.

```blocks
function defineWall () {
    random = randint(0, 4)
    if (random == 0) {
    	
    } else if (random == 1) {
    	
    } else if (random == 2) {
    	
    } else if (random == 3) {
    	
    } else if (random == 4) {
    	
    }
}
```

## Étape 5
Dans la section ``||variables:variables||``, glisser ``||variables:definir wall1 à 0||`` **4** fois dans le premier crochet ``||logic:si <vrai> alors||``
changer les variables définie pour ``||variables:wall1||``, ``||variables:wall2||``, ``||variables:wall3||``, ``||variables:wall4||``.
Répéter l'opréation pour chaque crochet ``||logic:sinon si <vrai> alors||``.
Vous devez avoir 4 fois le bloc ``||variables:définir wall à 0||`` dans chaque crochets ``||logic:si <vrai> alors||`` et ``||logic:sinon si <vrai> alors||``.
Dans la section ``||game:jeu||``, trouver ``||game:créer un sprite à x:2 y:2||`` et remplacer chaque **0** de ``||variables:definir wall à 0||`` par ce bloc.
Répéter l'opréation pour les **4** crochet ``||logic:sinon si <vrai> alors||``.

```blocks
function defineWall () {
    random = randint(0, 4)
    if (random == 0) {
        wall1 = game.createSprite(2, 2)
        wall2 = game.createSprite(2, 2)
        wall3 = game.createSprite(2, 2)
        wall4 = game.createSprite(2, 2)
    } else if (random == 1) {
        wall1 = game.createSprite(2, 2)
        wall2 = game.createSprite(2, 2)
        wall3 = game.createSprite(2, 2)
        wall4 = game.createSprite(2, 2)
    } else if (random == 2) {
        wall1 = game.createSprite(2, 2)
        wall2 = game.createSprite(2, 2)
        wall3 = game.createSprite(2, 2)
        wall4 = game.createSprite(2, 2)
    } else if (random == 3) {
        wall1 = game.createSprite(2, 2)
        wall2 = game.createSprite(2, 2)
        wall3 = game.createSprite(2, 2)
        wall4 = game.createSprite(2, 2)
    } else if (random == 4) {
        wall1 = game.createSprite(2, 2)
        wall2 = game.createSprite(2, 2)
        wall3 = game.createSprite(2, 2)
        wall4 = game.createSprite(2, 2)
    }
}
```

## Étape 6
Nous allons initialiser les coordonnées des astéroides. l'axe X est l'axe horizontal, sa position peut allé de **0** à **4**, **0** étant la led la plus a gauche du microbit et **4** la plus à droite.
L'axe Y est l'axe vertical, sa position peut allé de **0** à **4**, **0** étant la led la plus haute du microbit et **4** en bs du microbit.
La variable ``||variables:random||`` permet de définir la position du trou de manière aléatoire.
Comme nous voulons que les astéroides apparaissent en haut du microbit, changer la valeur **Y** de tout les ``||game:créer un sprite à x:2 y:2||`` de la fonction ``||functions:defineWall||`` à **0**.
Dans le crochet ``||logic:si random = 0||``, remplacer le permier **X : 0** par **1**, le deuxième par **2**, le troisième par **3** et le quatrième par **4**.
Dans le crochet ``||logic:si random = 1||``, remplacer le permier **X : 0** par **0**, le deuxième par **2**, le troisième par **3** et le quatrième par **4**.
Dans le crochet ``||logic:si random = 2||``, remplacer le permier **X : 0** par **0**, le deuxième par **1**, le troisième par **3** et le quatrième par **4**.
Dans le crochet ``||logic:si random = 3||``, remplacer le permier **X : 0** par **0**, le deuxième par **1**, le troisième par **2** et le quatrième par **4**.
Dans le crochet ``||logic:si random = 4||``, remplacer le permier **X : 0** par **0**, le deuxième par **1**, le troisième par **2** et le quatrième par **3**.
Le mur d'astéroides est maintenant pres. 

```blocks
function defineWall () {
    random = randint(0, 4)
    if (random == 0) {
        wall1 = game.createSprite(1, 0)
        wall2 = game.createSprite(2, 0)
        wall3 = game.createSprite(3, 0)
        wall4 = game.createSprite(4, 0)
    } else if (random == 1) {
        wall1 = game.createSprite(0, 0)
        wall2 = game.createSprite(2, 0)
        wall3 = game.createSprite(3, 0)
        wall4 = game.createSprite(4, 0)
    } else if (random == 2) {
        wall1 = game.createSprite(0, 0)
        wall2 = game.createSprite(1, 0)
        wall3 = game.createSprite(3, 0)
        wall4 = game.createSprite(4, 0)
    } else if (random == 3) {
        wall1 = game.createSprite(0, 0)
        wall2 = game.createSprite(1, 0)
        wall3 = game.createSprite(2, 0)
        wall4 = game.createSprite(4, 0)
    } else if (random == 4) {
        wall1 = game.createSprite(0, 0)
        wall2 = game.createSprite(1, 0)
        wall3 = game.createSprite(2, 0)
        wall4 = game.createSprite(3, 0)
    }
}
}
```

## Étape 7
Il faut maintenant exécuter la fonction defineWall au démarrage pour que les astéroides s'affiche.
Dans la section ``||functions:fonctions||``, glisser ``||functions:appel defineWall||`` dans le crochet ``||basic:au démarrage||``.
Les astéroides apparaissent mais ne descendent pas vers le joueur.
Dans la section ``||functions:fonctions||``, cliquer sur **créer une fonction** et nommer la **deplacement**
Dans la section ``||game:jeu||``, glisser et déposer ``||game:sprite modifie X de 1||`` dans le crochet de la fonction ``||functions:deplacement||``
Dupliquer le bloc ``||game:sprite modifie X de 1||`` pour l'avoir 4 fois dans la fonction ``||functions:deplacement||``.
Glisser la variable ``||variables:wall1||`` à la place de sprite dans le premier bloc de la fonction ``||functions:deplacement||``.
Glisser la variable ``||variables:wall2||`` à la place de sprite dans le deuxième bloc de la fonction ``||functions:deplacement||``.
Glisser la variable ``||variables:wall3||`` à la place de sprite dans le troisième bloc de la fonction ``||functions:deplacement||``.
Glisser la variable ``||variables:wall4||`` à la place de sprite dans le quatrième bloc de la fonction ``||functions:deplacement||``.
À chaque appel de la fonction ``||functions:deplacement||`` les astéroides descendront de 1  vers le joueur.

```blocks
let wall1: game.LedSprite = null
let wall2: game.LedSprite = null
let wall3: game.LedSprite = null
let wall4: game.LedSprite = null
function Deplacement () {
    wall1.change(LedSpriteProperty.Y, 1)
    wall2.change(LedSpriteProperty.Y, 1)
    wall3.change(LedSpriteProperty.Y, 1)
    wall4.change(LedSpriteProperty.Y, 1)
}
```

## Étape 8 
Créer une variable ``||variables:temps||``  et glisser et déposer ``||variables:définir temps à 0||`` dans le crochet ``||basic:au démarrage||``.
Changer **0** par **500**.
Dans la section ``||basic:bases||`` glisser et déposer ``||basic:pause(ms)100||`` tout en haut du crochet ``||basic:toujours||``.
Glisser la variable ``||variables:temps||`` dans le bloc ``||basic:pause||``. 
Dans la section ``||functions:fonctions||``, glisser ``||functions:appel deplacement||`` dans le crochet ``||basic:toujours||``.

```blocks
Joueur = game.createSprite(2, 4)
defineWall()
let temps = 500
function defineWall () {}
function deplacement () {}
basic.forever(function () {
    basic.pause(temps)
    deplacement()
})

```


