# Activite-1 : compter les amis de Ziggy

## Objectif @showdialog
Dans cette activité, nous allons aider le génieman à compter les amis de Ziggy.
Pour commencer, clique sur suivant.

## Étape 1
Commençons par **créer une variable** pour stocker le nombre d'amis de Ziggy.
Aller dans la section ``||variables:Variables||`` et créer la variable "compteur".
Ensuite, glisser le bloc ``||variables:définir||`` dans le crochet ``||basic:au démarrage||``

```blocks
let count = 0
count = 0
```

## Étape 2
Nous allons incrémenter la ``||variables:Variables||`` quand le bouton B est pressé. 
1. Trouver le bloc ``||Input:Lorsque de le bouton A est pressé||`` dans la section ``||Input:Entrée||`` et le glisser n'importe où dans la surface de programmation.
2. Changer Le ``||Input:A||`` en ``||Input:B||``.

```blocks
let count = 0
count = 0
input.onButtonPressed(Button.B, function () {
	
})
```

## Étape 3
Ajouter ensuite le bloc ``||variables:modifier compteur de 1||`` dans le crochet ``||Input:Lorsque de le bouton B est pressé||``.

```blocks
let count = 0
count = 0
input.onButtonPressed(Button.B, function () {
    count += 1
})
```

## Étape 4
Faites clique droit sur ``||Input:Lorsque de le bouton B est pressé||`` puis dupliquer.
Changer ``||Input:B||`` pour ``||Input:A||``.
Changer ``||variables:modifier compteur de 1||`` pour ``||variables:modifier compteur de -1||``

```blocks
let count = 0
count = 0
input.onButtonPressed(Button.B, function () {
    count += 1
})
input.onButtonPressed(Button.A, function () {
    count += -1
})
```

## Étape 5
Il est temps d'afficher le nombre d'amis compter une fois fini.
Pour cela, ajouter ``||Input:Lorsque secouer||`` dans la surface de programmation.
Glisser ensuite ``||basic:Afficher texte||`` dans le crochet ``||Input:Lorsque secouer||``.
Glisser ``||variables:compteur||`` dans ``||basic:Afficher texte||``
Dans la section ``||basic:Base||`` selectionner ``||basic:pause (ms) 100 ||`` et glisser le sous ``||basic:Afficher texte||`` et changer 100 par 2000.
Enfin, toujours dans la section ``||basic:Base||`` selectionner ``||basic:effacer l'écran||`` et glisser le sous ``||basic:pause (ms) 2000 ||``.

```blocks
let count = 0
count = 0
input.onButtonPressed(Button.B, function () {
    count += 1
})
input.onButtonPressed(Button.A, function () {
    count += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (count))
    basic.pause(2000)
    basic.clearScreen()
})
```
## Étape 6 
Et voila, c'est fini, quand tu appuis sur B tu incrémentes le compteur des amis de Ziggy
quand tu appuis sur A du décrémente le compteur.
Quand tu as fini de compter, secoue le microbit pour afficher le nombre d'amis de Ziggy.

