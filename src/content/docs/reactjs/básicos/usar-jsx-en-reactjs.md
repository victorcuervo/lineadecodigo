---
title: "Usar JSX en ReactJS"
description: "Aprende a usar JSX en ReactJS para crear componentes. Descubre cómo combinar sintaxis HTML con JavaScript para facilitar el desarrollo de interfaces."
date: 2020-09-08
updatedDate: 2026-02-09
tags: ["reactdom","render","jsx"]
slug: reactjs/basicos/usar-jsx-en-reactjs
type: doc
topic: reactjs
id: 2c8a9dfb-adca-81d7-bb7a-fefd8225f0ec
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_reactjs/blob/master/basicos/ejemplo-jsx.html
---

En nuestro primer artículo vimos cómo podíamos hacer un [Hola Mundo con ReactJS](http://lineadecodigo.com/reactjs/hola-mundo-con-reactjs/) donde creábamos un componente que nos saludaba. Dando así los primeros pasos en la creación de componentes con [ReactJS](http://www.manualweb.net/reactjs). En este caso vamos a ver cómo podemos usar JSX en [ReactJS](http://www.manualweb.net/reactjs) y qué beneficios tenemos al utilizarlo.


## ¿Qué es JSX?


**JSX o JavaScript XML** es una extensión de la sintaxis de [Javascript](http://www.manualweb.net/javascript) en la cual podemos definir elementos [Javascript](http://www.manualweb.net/javascript) mediante sintaxis [HTML](http://www.manualweb.net/html). De esta manera es más sencillo de entender el código [Javascript](http://www.manualweb.net/javascript) cuando definimos un objeto con [HTML](http://www.manualweb.net/html) en vez de si lo hacemos [vía métodos en Javascript](http://lineadecodigo.com/javascript/crear-elementos-html-con-javascript/). Facilitando a una persona que no conozca nuestro código una fácil lectura.


Por ejemplo podemos definir un elemento de cabecera `h1` de la siguiente forma:


```javascript
const elemento = <h1>Soy una cabecera</h1>;
```


Mucho más sencillo que si lo hacemos con métodos como `.createElement()` que sería algo así:


```javascript
var elemento = document.createElement("h1");
elemento.innerHTML = "Soy una cabecera";
```


## Renderizar un componente con JSX


Ya vimos en nuestro ejemplo [Hola Mundo con ReactJS](http://lineadecodigo.com/reactjs/hola-mundo-con-reactjs/) cómo renderizar un componente que tuviese el elemento cabecera `h1` definido mediante JSX.


```javascript
ReactDOM.render(
  <h1>Hola Mundo!</h1>,
  document.getElementById('root')
);
```


## Combinar JSX con variables JavaScript


Pero además podemos combinar dentro del código JSX el código que representa al elemento [HTML](http://www.manualweb.net/html) y el contenido de variables o expresiones [Javascript](http://www.manualweb.net/javascript) que tengamos en nuestro programa.


Por ejemplo, si hemos definido una constante con el nombre:


```javascript
const nombre = "Manual Web";
```


La utilizaremos en el código JSX introduciéndola entre llaves.


```javascript
const element = (
  <h1>
    Hola, {nombre}!
  </h1>
);
```


De igual manera se podría poner una expresión entre las llaves que, por ejemplo, invocase a una función:


```javascript
const element = (
  <h1>
    Hola, {formatear(nombre)}!
  </h1>
);
```


## Ejemplo completo


Ya solo nos quedará renderizar el elemento, mediante el método `.render()`, para poder crear nuestro componente y así usar JSX en [ReactJS](http://www.manualweb.net/reactjs) para insertar el contenido de variables en [Javascript](http://www.manualweb.net/javascript). Quedándonos el siguiente código:


```javascript
const nombre = "Manual Web";
const element = (
  <h1>
    Hola, {nombre}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```


## Cargar las librerías de ReactJS


Eso sí, no olvides el referenciar a las librerías de ReactJS para que la página se visualice de forma correcta.


```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

