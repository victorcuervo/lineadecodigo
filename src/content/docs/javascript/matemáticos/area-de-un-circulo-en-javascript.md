---
title: "Área de un círculo en Javascript"
description: "Uso de la clase Math de Javascript para poder calcular el área de un círculo en Javascript."
date: 2015-06-16
updatedDate: 2026-01-11
tags: ["math","pi","pow","formula","circulo","area","clase"]
slug: javascript/matematicos/area-de-un-circulo-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/matematicas/formulas.js
topic: javascript

---

Una de las cosas que me preguntan para diferentes lenguajes es sobre las fórmulas matemáticas. En concreto, una de las que preguntan mucho es sobre cómo podemos **calcular el área de un círculo en Javascript**.


## La fórmula del área de un círculo


Lo primero será saber cuál es la fórmula para calcular el área de un círculo. Esta es:


```text
área = π * radio²
```


## Crear una clase de fórmulas


Partiendo de que de alguna forma te vas a hacer con el dato del tamaño del radio, solo nos quedará saber cómo resolver el valor de **π** y cómo ejecutar potencias para poder elevar el radio al cuadrado.


Para poder calcular el área de un círculo en Javascript vamos a crearnos una clase que contenga diferentes fórmulas matemáticas. A esta clase la llamaremos `Formulas`:


```javascript
class Formulas {
  // Métodos de la clase
}
```


## Método para calcular el área del círculo


El primer método de esta clase será el que nos calcule el área de un círculo en Javascript:


```javascript
areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}
```


Como vemos, hemos creado **un método areaCirculo** que recibe como parámetro el radio que nos servirá para la fórmula.


## Usando la clase Math


Este método se va a apoyar en **la clase Math** para obtener el valor de π y las potencias.


### Obtener el valor de π


En primer lugar, mediante la constante `PI` de la clase Math obtenemos el valor de π:


```javascript
Math.PI
```


### Elevar a una potencia


En segundo lugar, el método `.pow()` de la clase Math nos permitirá elevar un número a una potencia:


```javascript
Math.pow(radio, 2)
```


## Código completo


De esta forma, nuestro método para calcular el área de un círculo en Javascript nos quedará de la siguiente forma:


```javascript
class Formulas {
  areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
  }
}
```


## Usar el método


Ya podremos llamar a este método desde cualquier código Javascript de la siguiente manera:


```javascript
const formulas = new Formulas();
const area = formulas.areaCirculo(5);
console.log("El área del círculo es: " + area);
```

