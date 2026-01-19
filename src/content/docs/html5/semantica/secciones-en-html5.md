---
title: "Secciones en HTML5"
description: "Para definir secciones en HTML 5 tenemos el elemento section. Este elemento nos permite definir tnantas secciones como necesitemos en nuestro documento."
date: 2018-09-23
updatedDate: 2026-01-19
tags: ["section"]
slug: html5/semantica/secciones-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/definir-seccion.html
topic: html5

---

Una de los problemas que tenía [HTML 4.01](http://www.manualweb.net/html/) era la carencia semántica dentro de sus elementos. Solo contábamos con elementos como `div` para poder crear una estructura de elementos y mediante clases [CSS](http://www.manualweb.net/css/) definíamos una semántica.


Esto, por otro lado, era bastante confuso ya que si el [CSS](http://www.manualweb.net/css/) es para darle estilo y [HTML](http://www.manualweb.net/html/) para dar la estructura y semántica, por qué lo hacíamos al revés. Es por ello que en [HTML5](http://www.manualweb.net/html5/) se hace una revisión de los elementos y aparecen algunos elementos semánticos como `article`, `section` o `nav`.


## El elemento section


Para definir secciones en [HTML5](http://www.manualweb.net/html5/) tenemos el elemento `section`. Este elemento de bloque nos permite definir secciones con contenido dentro de nuestro documento. Por lo cual podremos tener tantas secciones dentro de nuestro documento como queramos o necesitemos.


La estructura del elemento `section` sería la siguiente:


```html
<section>
  <h1>Título de la sección</h1>
  <!-- Contenido de la sección -->
</section>
```


## Ejemplo de sección


De esta manera para definir una sección en [HTML5](http://www.manualweb.net/html5/) podremos escribir lo siguiente:


```html
<section>
  <h1>Mi Primera Sección</h1>
  <p>Este es el contenido de mi primera sección en HTML5.</p>
  <p>Aquí puedo añadir más párrafos, imágenes, listas, etc.</p>
</section>
```


Como vemos, la sección en [HTML5](http://www.manualweb.net/html5/) empieza por un elemento de cabecera `h1` el cual marcará el título de dicha sección.


## Múltiples secciones


Podemos tener múltiples secciones en un mismo documento:


```html
<body>
  <section>
    <h1>Primera Sección</h1>
    <p>Contenido de la primera sección...</p>
  </section>
  
  <section>
    <h1>Segunda Sección</h1>
    <p>Contenido de la segunda sección...</p>
  </section>
  
  <section>
    <h1>Tercera Sección</h1>
    <p>Contenido de la tercera sección...</p>
  </section>
</body>
```


## Compatibilidad con HTML 4.01


Hay que saber que los elementos de cabecera `h1` a `h6` marcan por si solo secciones dentro del documento HTML. Esto sucede para mantener compatibilidad con los documentos [HTML 4.01](http://www.manualweb.net/html/).


## Validación del outline


Para poder analizar la semántica de nuestro documento y ver que secciones en [HTML5](http://www.manualweb.net/html5/) existen tenemos que analizar su **outline**. Para poder analizar el **outline** de nuestro documento podemos utilizar [el validador de W3C](https://validator.w3.org/nu/#textarea).


El outline nos mostrará la estructura jerárquica de nuestro documento, indicando claramente las secciones que hemos definido y cómo se relacionan entre sí.

