---
title: "Navegación primaria en HTML5 accesible"
description: "Para poder crear una navegación primaria en HTML5 accesible deberemos de apoyarnos en elemento nav y en su atributo aria-labelledby para darle un texto."
date: 2018-10-23
updatedDate: 2026-01-23
tags: ["accesibilidad","nav","aria-labelledby"]
slug: html/accesibilidad/navegacion-primaria-en-html5-accesible
author: victor_cuervo
type: doc
id: 04ebcbd3-3201-4f1b-a0c1-95f0153895de
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/navegacion-primaria.html
---

## Navegación primaria en HTML5


[HTML5](http://www.manualweb.net/html5/) incorporaba mediante el elemento `nav` la posibilidad de [definir áreas de navegación semánticas](http://lineadecodigo.com/html5/navegaciones-en-html5/). Hoy daremos un paso más y vamos a ver cómo podemos crear una navegación primaria en [HTML5](http://www.manualweb.net/html5/) accesible. Y es que cómo [ya vimos a la hora de crear una navegación en HTML5 podemos crear múltiples navegaciones dentro de una página](http://lineadecodigo.com/html5/navegaciones-en-html5/).


Por ejemplo, podríamos tener una página que tuviese estas dos navegaciones:


```html
<header>
  <nav>
    <ul>
      <li>
        <a href="#Inicio">Inicio</a>
      </li>
      <li>
        <a href="#Resumen">Resumen</a>
      </li>
      <li>
        <a href="#Contacto">Contacto</a>
      </li>
    </ul>
  </nav>
</header>

<!-- Contenido de la Página -->

<footer>
  <nav>
    <ul>
      <li>
        <a href="https://lineadecodigo.com" alt="Aprende a Programar">Línea de Código</a>
      </li>
      <li>
        <a href="http://www.manualweb.net" alt="Manuales de Programación">Manual Web</a>
      </li>
      <li>
        <a href="http://w3api.com" alt="APIs de Programación">W3Api</a>
      </li>
    </ul>
  </nav>
</footer>
```


Y no solo dos, podríamos tener múltiples navegaciones dentro de la página. Ya que normalmente podremos encontrar como navegaciones la navegación del site, la ubicación o breadcrumbs, enlaces al contenido de la página o enlaces externos a la página.


## Dar nombre a los menús de navegación


Si pensamos en consumir de una forma accesible el contenido de nuestra página deberemos de darle un nombre a cada menú para que podamos realizar la navegación de una forma sencilla.


Para ello contamos con el atributo `aria-labelledby`. Este atributo permite dar un nombre al cada menú de navegación. El valor del atributo `aria-labelledby` es el identificador de un elemento de texto.


```html
<nav aria-labelledby="identificador">
<h2 id="identificador">Texto para la navegación</h2>
</nav>
```


Así, apoyándonos en el atributo `aria-labelledby` podremos definir una navegación primaria en [HTML5](http://www.manualweb.net/html5/) accesible.


## Ejemplo completo


De esta forma deberemos de modificar el código de las navegaciones que hemos revisado al principio incluyendo lo siguiente:


```html
<header>
  <nav aria-labelledby="menunavegacion">

    <h2 id="menunavegacion">Menú Navegación</h2>

    <ul>
      <li>
        <a href="#Inicio">Inicio</a>
      </li>
      <li>
        <a href="#Resumen">Resumen</a>
      </li>
      <li>
        <a href="#Contacto">Contacto</a>
      </li>
    </ul>
  </nav>
</header>

<!-- Contenido de la Página -->

<footer>
  <nav aria-labelledby="menuenlaces">

    <h2 id="menuenlaces">Enlaces</h2>

    <ul>
      <li>
        <a href="https://lineadecodigo.com" alt="Aprende a Programar">Línea de Código</a>
      </li>
      <li>
        <a href="http://www.manualweb.net" alt="Manuales de Programación">Manual Web</a>
      </li>
      <li>
        <a href="http://w3api.com" alt="APIs de Programación">W3Api</a>
      </li>
    </ul>
  </nav>
</footer>
```


De esta forma estamos ayudando a la navegación de la página al haber definido una navegación primaria en [HTML5](http://www.manualweb.net/html5/) accesible.

