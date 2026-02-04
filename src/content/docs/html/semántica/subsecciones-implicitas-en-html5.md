---
title: "Subsecciones implícitas en HTML5"
description: "Descubre cómo las subsecciones implícitas en HTML5 afectan la estructura semántica de tu documento y optimiza tu código para mejorar su organización."
date: 2018-09-25
updatedDate: 2026-01-19
tags: ["section","article","h1"]
slug: html/semantica/subsecciones-implicitas-en-html5
type: doc
topic: html
id: 2c8a9dfb-adca-81d8-b092-e94fa5169ce9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/subseccion-implicita.html
---

Puede ser que cuando estés dando forma a la estructura semántica a tu documento [HTML5](http://www.manualweb.net/html5/) te vuelvas loco con la organización de las secciones entre los elementos `section` y `article` combinados con los títulos de cabecera `h1` a `h6`. Es por ello que tienes que conocer cómo funcionan las subsecciones implícitas en [HTML5](http://www.manualweb.net/html5/).


Y es que manejando el **outline** de un documento [HTML5](http://www.manualweb.net/html5/) tenemos que saber que no solo los elementos `section` generan una sección, si no que los elementos de cabecera `h1` a `h6` también generan secciones.


## Estructura semántica básica


Pero vayamos paso a paso. Lo primero será crear una semántica básica. En la cual encontremos dos secciones en un documento [HTML5](http://www.manualweb.net/html5/).


```html
<body>
  <section>
    <h2>Primera Sección</h2>
    <p>Contenido de la primera sección...</p>
  </section>
  
  <section>
    <h2>Segunda Sección</h2>
    <p>Contenido de la segunda sección...</p>
  </section>
</body>
```


Vemos claramente que las secciones están delimitadas mediante el elemento `section` y a su vez el título de la sección lo demarca el elemento `h2`.


## Subsecciones implícitas


¿Qué sucede si insertamos un nuevo elemento de cabecera dentro de la sección? Pues que lo que estamos haciendo es crear subsecciones implícitas en [HTML5](http://www.manualweb.net/html5/). Esto sucede por mantener la compatibilidad con [HTML 4.01](http://www.manualweb.net/html/) en el cual las secciones podían estar demarcadas por elementos de cabecera `h1` a `h6`.


De esta manera, si tenemos el siguiente código:


```html
<body>
  <section>
    <h2>Primera Sección</h2>
    <p>Contenido de la primera sección...</p>
    
    <h3>Subsección Implícita</h3>
    <p>Este h3 crea automáticamente una subsección dentro de la sección principal.</p>
  </section>
</body>
```


## Validación del outline


Podemos comprobar que el elemento `section` demarca la primera sección con el título especificado en el título de cabecera `h2`. Pero acto seguido tenemos el elemento `h3` el cual, por si solo, define una nueva sección.


Esto lo podemos validar mediante [el validador de W3C](https://validator.w3.org/nu/#textarea) el cual nos muestra el **outline** del documento [HTML5](http://www.manualweb.net/html5/).


Así que ya sabes que cuando manejes documentos [HTML](http://www.manualweb.net/html/) deberás de tener mucho cuidado a la hora de definir subsecciones implícitas en [HTML5](http://www.manualweb.net/html5/). Los elementos de cabecera (`h1` a `h6`) crean automáticamente secciones, incluso cuando están dentro de elementos `section` o `article`.

