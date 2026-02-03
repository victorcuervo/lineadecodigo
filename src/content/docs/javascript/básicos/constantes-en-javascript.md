---
title: "Constantes en Javascript"
description: "Las constantes en Javascript osn variables que tienen un valor fijo e inmutable durante toda la vida de nuestro programa."
date: 2021-09-28
updatedDate: 2026-01-11
tags: ["constantes","const","try-catch"]
slug: javascript/basicos/constantes-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 89349214-84b3-429b-99c1-693cf193dcbd
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/constante-javascript.js
---

En nuestros programas en Javascript [trabajaremos normalmente con variables](https://lineadecodigo.com/tag/javascript-variables/), asignando y modificando valores de las mismas. Si bien tenemos que saber que podemos definir **constantes en Javascript**. Es decir, definir unas variables las cuales tienen un valor fijo que no puede ser modificado a lo largo de la vida del programa.


## Estructura de una constante


La estructura que declara una constante en [Javascript](https://www.manualweb.net/javascript) es la siguiente:


```javascript
const NOMBRE_CONSTANTE = valor;
```


Como podemos comprobar se utiliza el modificador `const` para definir nuestra constante, seguido del nombre de la constante y de la asignación de un valor.


En contra de las variables que podrían ser definidas sin ningún valor y luego asignárselo, en el caso de las constantes, estas tienen que ser creadas con un valor inicial, dado a su carácter de inmutabilidad.


## Declarar una constante


De esta manera vamos a declarar nuestra primera constante en [Javascript](https://www.manualweb.net/javascript) de la siguiente manera:


```javascript
const PI = 3.14159;
```


Podemos acceder al contenido de nuestra constante y utilizarlo en nuestras operaciones sin ningún problema:


```javascript
const radio = 5;
const area = PI * radio * radio;
console.log("El área del círculo es: " + area);
```


## Inmutabilidad de las constantes


Si bien, no podremos alterar su valor, por la propia definición en sí de la constante, en ningún momento de nuestro programa. Si lo intentamos veremos que por consola se nos muestra un error de tipo:


```shell
TypeError: Assignment to constant variable.
```


Si queremos capturar la generación de dicho error podemos utilizar un método `try-catch` de la siguiente manera:


```javascript
const MI_CONSTANTE = 10;
try {
  MI_CONSTANTE = 20;
} catch (error) {
  console.error("Error: No se puede modificar una constante");
}
```


## Ámbito de las constantes


Así veremos que una constante en Javascript no puede ser modificada. Lo que sí tenemos que saber es que el ámbito de la constante en Javascript es de bloque, es decir, podremos acceder a ella desde el bloque donde fue declarada y sus bloques internos.


Espero que mediante este ejemplo ya podáis tener un poco más claro el manejo de constantes en Javascript.

