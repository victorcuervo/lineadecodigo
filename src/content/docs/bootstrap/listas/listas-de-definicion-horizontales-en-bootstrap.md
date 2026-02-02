---
title: "Listas de definición horizontales en Bootstrap"
description: "Descubre cómo crear listas de definición horizontales en Bootstrap para mejorar la presentación de tus términos y descripciones de manera efectiva y atractiva."
date: 2015-08-08
updatedDate: 2026-02-02
tags: ["dl","dt","dd","class","dl-horizontal"]
slug: bootstrap/listas/listas-de-definicion-horizontales-en-bootstrap
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8136-a8c6-e51ef25d1b4e
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/listas/listas-definicion-horizontales.html
---

Cuando manejamos una lista de definición en [HTML](https://www.manualweb.net/html/) esta se muestra en pantalla con el término en una línea y la definición en la siguiente línea. Mediante [Bootstrap](http://www.manualweb.net/bootstrap/) tenemos la posibilidad de crear listas de definición horizontales. De esta manera las listas de definición horizontales en [Bootstrap](http://www.manualweb.net/bootstrap/) nos mostrarán el término seguido de la descripción en una misma línea. Y todo centrado dentro de la página.


Algo parecido a:


**Término 1.** Definición 1.


**Término 2.** Definición 2.


**Término 3.** Definición 3.


…


**Término N.** Definición N.


## Crear una lista de definición básica


Lo primero que tenemos que hacer para poder crear listas de definición horizontales en [Bootstrap](http://www.manualweb.net/bootstrap/) es crear la lista de definiciones mediante un elemento [`dl`](https://www.w3api.com/HTML/dl/).


```html
<dl>
  ...
</dl>
```


## Añadir términos y definiciones


Luego cada uno de los términos y descripciones utilizaremos los elementos `dt` y `dd` respectivamente.


```html
<dl>
  <dt>Termino</dt>
  <dd>Descripción</dd>
</dl>
```


Con esta información podremos crear nuestra primera lista de definiciones:


```html
<dl>
  <dt>Pizpireta</dt>
  <dd>Dicho de una mujer: Viva, pronta y aguda.</dd>
  <dt>Pulular</dt>
  <dd>Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.</dd>
  <dt>Concupiscencia</dt>
  <dd>En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.</dd>
</dl>
```


## Aplicar la clase dl-horizontal


Ahora para poder obtener listas de definición horizontales en [Bootstrap](http://www.manualweb.net/bootstrap/) vamos a utilizar la clase `dl-horizontal` sobre el elemento [`dl`](https://www.w3api.com/HTML/dl/).


```html
<dl class="dl-horizontal">
  <dt>Pizpireta</dt>
  <dd>Dicho de una mujer: Viva, pronta y aguda.</dd>
  <dt>Pulular</dt>
  <dd>Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.</dd>
  <dt>Concupiscencia</dt>
  <dd>En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.</dd>
</dl>
```


De esta forma ya habremos conseguido tener listas de definición horizontales en [Bootstrap](http://www.manualweb.net/bootstrap/).

