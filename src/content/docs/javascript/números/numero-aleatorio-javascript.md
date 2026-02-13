---
title: "Número aleatorio Javascript"
description: "Uso del método random para poder calcular un número aleatorio Javascript."
date: 2015-06-17
updatedDate: 2026-02-13
tags: ["math","random","parseint"]
slug: javascript/numeros/numero-aleatorio-javascript
type: doc
topic: javascript
id: 1c3b3edb-580a-4d10-ae14-2a53407596b5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/matematicas/formulas.js
socialImage: ../../../../assets/javascript/covers/numero-aleatorio-javascript.webp
socialImageAlt: Número aleatorio Javascript
---

En este ejemplo vamos a ver como podemos generar un número aleatorio [Javascript](https://www.manualweb.net/javascript/). Para ello nos vamos a apoyar sobre [la función random](https://www.w3api.com/Javascript/Math/random/) del [objeto Math](https://www.w3api.com/Javascript/Math/).


## Generar número aleatorio


La clase random del [objeto Math](https://www.w3api.com/Javascript/Math/) nos va a generar un número aleatorio entre 0.0 y 1.1. De esta forma, si lanzamos [el método Math.random()](https://www.w3api.com/Javascript/Math/random/) diez veces:


```javascript
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
Math.random()
```


Podríamos obtener algo parecido a lo siguiente:


```javascript
0.1812188053037971
0.5133816874422133
0.8002818649355322
0.5672529677394778
0.005069264676421881
0.015717699797824025
0.8111960424482822
0.4249071101564914
0.7945991933718324
0.9856373902969062
```


## Convertir a número entero


Lo primero que apreciamos es que los números aleatorios generados son decimales, por lo que si estamos pensando en un número entero no nos va a valer. Para ello, lo que deberemos de hacer es multiplicar el número aleatorio por el número máximo más uno del límite superior del número aleatorio a generar:


```javascript
Math.random() * (limiteMaximo+1)
```


De esta manera, si queremos generar números entre el 1 y el 25 utilizaremos la siguiente sentencia.


```javascript
Math.random() * 26
```


Si bien deberemos de tener todavía cuidado ya que seguiremos teniendo números decimales. Es por ello que tendremos que convertirlos a enteros mediante [el método parseInt()](https://www.w3api.com/Javascript/parseInt/).


```javascript
parseInt(Math.random() * 26)
```


## Función para generar número aleatorio


De esta forma ya tenemos una función que puede calcular un número aleatorio [Javascript](https://www.manualweb.net/javascript/). Y que la podemos añadir a nuestra clase de formulas.


```javascript
function random(limiteMaximo){
  return parseInt(Math.random() * (limiteMaximo+1));
}
```

