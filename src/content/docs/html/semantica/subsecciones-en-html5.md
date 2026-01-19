---
title: "Subsecciones en HTML5"
description: "Descubre cómo crear subsecciones en HTML5 anidando elementos section para mejorar la estructura de tus documentos y facilitar la accesibilidad y organización."
date: 2018-09-24
updatedDate: 2026-01-19
tags: ["section","h1"]
slug: html/semantica/subsecciones-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/definir-subseccion.html
topic: html

---

Ya hemos visto cómo podemos crear [una sección en HTML5](http://lineadecodigo.com/html5/secciones-en-html5/), ahora vamos a ver la forma en la cual podemos crear subsecciones en [HTML5](http://www.manualweb.net/html5/).


## Crear una sección básica


Lo primero que aprendimos es que para crear [una sección en HTML5](http://lineadecodigo.com/html5/secciones-en-html5/) utilizábamos el elemento `section` de la siguiente forma:


```html
<section>
  <h1>Título de la sección</h1>
  <p>Contenido de la sección...</p>
</section>
```


Vemos que el primer elemento de la [sección en HTML5](http://lineadecodigo.com/html5/secciones-en-html5/) es un elemento de título de cabecera `h1` que nos demarca el título de la sección.


## Secciones consecutivas


En un documento [HTML5](http://www.manualweb.net/html5/) podemos tener tantas secciones consecutivas como queramos:


```html
<section>
  <h1>Primera Sección</h1>
  <p>Contenido de la primera sección...</p>
</section>

<section>
  <h1>Segunda Sección</h1>
  <p>Contenido de la segunda sección...</p>
</section>
```


Cada una de estas secciones equivaldrá a un mismo nivel de sección.


## Crear subsecciones anidadas


Pero de igual manera podemos crear subsecciones en [HTML5](http://www.manualweb.net/html5/). Para ello simplemente tenemos que anidar el elemento `section` dentro de otro elemento `section`.


```html
<section>
  <h1>Sección Principal</h1>
  <p>Contenido de la sección principal...</p>
  
  <section>
    <h2>Subsección</h2>
    <p>Contenido de la subsección...</p>
  </section>
</section>
```


## Ejemplo completo


De esta forma podremos crear el siguiente documento que contenga subsecciones en [HTML5](http://www.manualweb.net/html5/).


```html
<body>
  <section>
    <h1>Sección Principal</h1>
    <p>Contenido de la sección principal...</p>
    
    <section>
      <h2>Primera Subsección</h2>
      <p>Contenido de la primera subsección...</p>
    </section>
    
    <section>
      <h2>Segunda Subsección</h2>
      <p>Contenido de la segunda subsección...</p>
    </section>
  </section>
</body>
```


## Niveles de títulos


Aunque dentro de la estructura de cada sección podemos cambiar el nivel de los títulos de cabecera `h1` a `h6`. Vemos que por una cuestión de accesibilidad y de estructura del documento hemos incrementado el nivel del título de cabecera en la subsección que hemos anidado.


## Validación del outline


Podemos comprobar el **outline** del documento mediante [el validador de W3C](https://validator.w3.org/nu/#textarea), que nos mostrará la estructura jerárquica de nuestras secciones y subsecciones.

