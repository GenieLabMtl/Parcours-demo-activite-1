# Activite-2 : Communique avec Wally 
##Objectif @showdialog
Dans cette activité, tu vas programmer le microbit pour aider le genieman à communiquer avec Wally
Pour commencer, clique sur suivant.
## Étape 1
Commençons par **créer une variable**.
Aller dans la section ``||variables:Variables||`` et créer la variable "emoji".
Ensuite, glisser le bloc ``||variables:définir||`` dans le crochet ``||basic:au démarrage||``

```blocks
let emoji = 0
emoji = 0
```

## Étape 2
Nous allons incrémenter la ``||variables:emoji||`` quand le bouton B est pressé.
1. Trouver le bloc ``||Input:Lorsque de le bouton A est pressé||`` dans la section ``||Input:Entrée||`` et le glisser n'importe où dans la surface de programmation.
2. Changer Le ``||Input:A||`` en ``||Input:B||``.


```blocks
let emoji = 0
emoji = 0
input.onButtonPressed(Button.B, function () {
  
})
```
## Étape 3
1. Trouver le bloc ``||logic:si <vrai>...sinon||`` dans la section ``||logic:Logique||``.
2. Le glisser dans le crochet ``||Input:Lorsque de le bouton B est pressé||``.

```blocks
let emoji = 0
emoji = 0
input.onButtonPressed(Button.B, function () {
    if (0 == 0) {
    } else {
    }
})
```

## Étape 4
Dans le premier crochet ``||logic:si||``, glisser ``||variables:définir emoji à 0||``.
Dans le deuxième crochet ``||logic:sinon||``, glisser ``||variables:modifier emoji de 1||``.
Enfin, dans ``||logic:logique||``, glisser ``||logic:'0' = '0'||`` dans ``||logic:si <vrai> alors||``,
puis glisser la variable ``||variables:emoji||`` et changer le deuxième 0 par 4 comme ceci : ``||logic:'emoji' = '4'||``.

En appuyant sur B, la variable emoji sera incrémenté de 1 jusqu'a atteindre 4. Une fois la variable égale à 4, elle sera remise à 0.

```blocks
let emoji = 0
emoji = 0
input.onButtonPressed(Button.B, function () {
    if (emoji == 4) {
        emoji = 0
    } else {
        emoji += 1
    }
})
```

## Étape 5
Clique droit sur le crochet ``||Input:Lorsque de le bouton B est pressé||`` puis clique sur dupliquer.
Changer ``||Input:B||`` par ``||Input:A||``.
Changer ``||logic:'emoji' = '4'||`` par ``||logic:'emoji' = '0'||``.
Changer ``||variables:définir emoji à 0||`` par ``||variables:définir emoji à 4||``.
Changer ``||variables:modifier emoji de 1||`` par ``||variables:modifier emoji de -1||``.

En appuyant sur A, la variable emoji se décrémente de 1 jusqu'à atteindre 0. une fois la varible égale à 0, elle sera défini à 4 pour boucler dans les deux sens. 

```blocks
let emoji = 0
emoji = 0
input.onButtonPressed(Button.A, function () {
    if (emoji == 0) {
        emoji = 4
    } else {
        emoji += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (emoji == 4) {
        emoji = 0
    } else {
        emoji += 1
    }
})
```

## Étape 6
Maintenant il reste à faire l'affichage des emojis. 
Dans la section ``||logic:logique||``, glisse et dépose  ``||logic:si <vrai> sinon||`` dans le crochet ``||basic:toujours||``.
Cliquer 4 fois sur ``||logic:+||`` et sur le ``||logic:-||`` du ``||logic:sinon|``.
Glisser un ``||basic:montrer l'icône||`` dans chaque crochet du ``||logic:si <vrai> alors ... sinon||``.
Choisit un icône différent à afficher dans chaque ``||basic:montrer l'icône||``.

```blocks
let emoji = 0
emoji = 0
basic.forever(function () {
    if (true) {
        basic.showIcon(IconNames.Happy)
    } else if (true) {
        basic.showIcon(IconNames.Sad)
    } else if (true) {
        basic.showIcon(IconNames.Confused)
    } else if (true) {
        basic.showIcon(IconNames.Asleep)
    } else if (true) {
        basic.showIcon(IconNames.Surprised)
    }
})
input.onButtonPressed(Button.A, function () {
    if (emoji == 0) {
        emoji = 4
    } else {
        emoji += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (emoji == 4) {
        emoji = 0
    } else {
        emoji += 1
    }
})
```

## Étape 7
Pour que l'affichage du visage change quand on appuis sur ``||Input:A||`` ou ``||Input:B||``,
glisse ``||logic:'0' = '0'||`` dans ``||logic:si <vrai> sinon||`` à la place du ``||logic:<vrai>||``

