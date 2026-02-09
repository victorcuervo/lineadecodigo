---
title: "Hola Mundo con ReactJS"
description: "Aprende a crear tu primera aplicación con ReactJS. Descubre cómo usar componentes, JSX y ReactDOM.render() para mostrar Hola Mundo en pantalla."
date: 2020-03-28
updatedDate: 2026-02-09
tags: ["jsx","reactdom","render"]
slug: reactjs/basicos/hola-mundo-con-reactjs
type: doc
topic: reactjs
id: b201fb39-5f8b-4f7f-aa4d-2d93b2585c9c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_reactjs/blob/master/basicos/hola-mundo-reactjs.html
---

En el artículo de hoy vamos a ver cómo crear nuestra primera aplicación Hola Mundo con [ReactJS](http://www.manualweb.net/reactjs) paso a paso para poder crear nuestras aplicaciones visuales mediante este framework de desarrollo.


## Qué es ReactJS


[ReactJS](http://www.manualweb.net/reactjs) es una librería de desarrollo [Javascript](http://www.manualweb.net/javascript) que nos permite el fácil desarrollo de interfaces de usuario basado en componentes y optimizada para el trabajo sobre el DOM Virtual.


Las principales características de [ReactJS](http://www.manualweb.net/reactjs) son:

- **Interfaces Declarativos,** podemos crear vistas de forma declarativa definiendo un estado. La modificación del estado será la que haga que cambie el componente.
- **Basado en Componentes**, [ReactJS](http://www.manualweb.net/reactjs) permite crear componentes visuales, desde cero o a partir de componentes ya existentes, para crear nuestros interfaces de usuario.
- **Extensión JSX**, nos permite crear objetos [Javascript](http://www.manualweb.net/javascript) mediante el uso de [elementos HTML](http://lineadecodigo.com/categoria/html/) y así generar el DOM Virtual.
- **Renderizable en servidor**, [ReactJS](http://www.manualweb.net/reactjs) se puede renderizar tanto en un navegador web como en el servidor mediante el uso de [NodeJS](http://lineadecodigo.com/categoria/nodejs/).

## Crear el primer componente Hola Mundo


Para poder crear nuestro Hola Mundo con [ReactJS](http://www.manualweb.net/reactjs) lo que vamos a hacer es crear un primer componente que nos muestre la cadena Hola Mundo en la pantalla.


Lo primero será instanciar la librería ReactJS. Para ello cargaremos las librerías **react.development.js**, **react-dom.development.js** y **babel.min.js**. Lógicamente estas librerías nos servirán para poder trabajar en entornos de desarrollo:


```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```


## Renderizando el componente


Lo siguiente que haremos será renderizar nuestro código con [ReactJS](http://www.manualweb.net/reactjs). Para ello utilizamos el método `ReactDOM.render()` el cual recibe el componente o [código HTML](http://www.manualweb.net/html) que queremos renderizar y el elemento del DOM sobre el cual queremos realizar el renderizado.


```javascript
ReactDOM.render(
  <h1>Hola Mundo!</h1>,
  document.getElementById('root')
);
```


Para poder acceder al elemento DOM sobre el que realizar el renderizado vamos a utilizar el método `document.getElementById()`. Es por ello que nuestra página debe de contener dicho elemento.


```html
<body>
  <div id="root"></div>
  <script type="text/babel">

    ReactDOM.render(
      <h1>Hola Mundo!</h1>,
      document.getElementById('root')
    );
  </script>
</body>
```


Así ya habremos creado nuestra primera aplicación Hola Mundo con [ReactJS](http://lineadecodigo.com/reactjs/). En siguientes artículos iremos ampliando el conocimiento y explicando todas las funcionalidades sobre [ReactJS](http://lineadecodigo.com/reactjs/).

