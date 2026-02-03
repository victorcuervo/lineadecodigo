---
title: "Número de inicio de una lista con CSS"
description: "Descubre cómo modificar el número de inicio de una lista con CSS y personaliza tus listas ordenadas para lograr un diseño atractivo y funcional en tu web."
date: 2008-01-01
updatedDate: 2026-01-17
tags: ["counter-reset","list-style","before","counter-increment"]
slug: css/listas/numero-de-inicio-de-una-lista-con-css
author: victor_cuervo
type: doc
id: 88248daa-ec8c-4d38-879c-cb1307409f42
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/listas/valor-inicio-lista.html
---

El elemento [`ol`](http://www.w3api.com/HTML/ol/) nos sirve, en [HTML](http://www.manualweb.net/html/), para crear [listas ordenadas](https://lineadecodigo.com/html/listas-ordenadas-en-html/). Es decir, los elementos van antecedidos de un número que indica su orden. Asignándole el número 1 al primer elemento de la lista. En este caso vamos a ver cómo podemos modificar el número de inicio de una lista con [CSS](http://www.manualweb.net/css/).


En las primeras versiones de [HTML](http://www.manualweb.net/html/), mediante un atributo podíamos modificar el valor de inicio de la lista. Posteriormente fue declarado como obsoleto y asignado al lenguaje [CSS](http://www.manualweb.net/css/) dicho cometido.


## Propiedades CSS para contadores


Para poder modificar el número de inicio de una lista con [CSS](http://www.manualweb.net/css/) tendremos que utilizar las propiedades de contadores [`counter-reset`](http://www.w3api.com/CSS/counter-reset/) y [`counter-increment`](http://www.w3api.com/CSS/counter-increment/) sobre el elemento [`ol`](http://www.w3api.com/HTML/ol/).


Es por ello que dentro de nuestra página web definiremos dicho estilo. Para llevarlo a cabo utilizamos el elemento [`style`](http://www.w3api.com/HTML/style/) donde definiremos este estilo sobre el elemento [`ol`](http://www.w3api.com/HTML/ol/).


```css
<style type="text/css">
...
</style>
```


## Inicializar el contador


Las propiedades [`counter-reset`](http://www.w3api.com/CSS/counter-reset/) y [`counter-increment`](http://www.w3api.com/CSS/counter-increment/) están ligadas directamente y deberán de aparecer ambas en la definición de estilos para poder llevar a cabo nuestro cometido.


[`counter-reset`](http://www.w3api.com/CSS/counter-reset/) sirve para definir el contador, así como su valor inicial. Su sintaxis será la siguiente:


```css
counter-reset: idcontador entero;
```


Por defecto los contadores se inicializan a 1. Es por ello que el valor del entero (positivo o negativo) nos permitirá modificar el valor. De esta manera si queremos empezar por el número 3 en la lista, deberemos de incrementar en 2. Quedándonos el siguiente código:


```css
ol {
  counter-reset: micont 2;
}
```


## Definir el contenido del contador


El nombre del contador puede ser cualquier identificador. Pero como ya hemos dicho anteriormente, no nos sirve solo el inicializar el contador. Sino, que hay que indicar dónde se utiliza y cuándo incrementa.


[`Content`](http://www.w3api.com/CSS/content/), es la propiedad que nos sirve para indicar el contenido que va en un elemento. En este caso en el elemento [`li`](http://www.w3api.com/HTML/li/)., el cual representa a cada uno de los items de la lista.


Para volcar el contenido del contador utilizamos la función counter(idcontador). En este caso el código quedará de la siguiente forma:


```css
ol li:before {
  content: counter(micont) ".";
}
```


Hay que indicar que utilizamos el pseudoelemento [`before`](http://www.w3api.com/CSS/before/), el cual indica que el contenido se aplica delante de la etiqueta. Y como se puede apreciar, no solo se vuelca el valor del contenido, sino que también se le añade un punto.


## Incrementar el contador


Lo siguiente será el indicar cuando se incrementa el contador. En este caso también se realiza sobre el elemento [`li`](http://www.w3api.com/HTML/li/). Para ello utilizamos la propiedad [`counter-increment`](http://www.w3api.com/CSS/counter-increment/), a la cual se le pasa como valor el identificador del contador que hay que incrementar y si fuese necesario, los valores del incremento.


La sintaxis de [`counter-increment`](http://www.w3api.com/CSS/counter-increment/) es la siguiente:


```css
counter-increment: idcontador entero;
```


Finalmente nos queda el siguiente código sobre el elemento [`li`](http://www.w3api.com/HTML/li/):


```css
ol li {
  counter-increment: micont;
  list-style: none;
}
```


## Crear la lista HTML


Ahora solo nos quedará añadir nuestra lista ordenada a la página web, para ver el resultado del estilo:


```html
<ol>
  <li>Primer Elemento</li>
  <li>Segundo Elemento</li>
  <li>Tercer Elemento</li>
</ol>
```


De esta forma podremos comprobar que el _Primer Elemento_ realmente empieza por el número 3 y así habremos conseguido modificar el número de inicio de una lista con [CSS](http://www.manualweb.net/css/).

