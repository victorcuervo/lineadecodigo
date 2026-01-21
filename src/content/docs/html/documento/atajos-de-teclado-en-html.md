---
title: "Atajos de teclado en HTML"
description: "Cómo utilizar el atributo global accesskey para poder crear atajos de teclado en HTML que nos permitan navegar directamente por los enlaces."
date: 2021-10-08
updatedDate: 2026-01-21
tags: ["a","href","target","accesskey"]
slug: html/documento/atajos-de-teclado-en-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/basicos/atajo-teclado.html
topic: html

---

Quizás sea una cosa que no se ve mucho por las páginas web, pero que es una capacidad del lenguaje, es el poder crear atajos de teclado en [HTML](https://www.manualweb.net/html). Es decir, que una combinación de teclas en una página web concreta produzca un efecto que nos permita realizar una acción sobre una página.


En concreto, la idea es poder asociar el atajo de teclado a un enlace, de tal manera que cuando pulsemos el atajo de teclado se lance dicho enlace.


## El atributo accesskey


Pero vamos por partes, lo primero es saber que el atributo global [`accesskey`](http://w3api.com/HTML/accesskey/) es aquel que nos permite indicar cuál es la tecla que actúa de atajo de teclado en la página.


Este atributo [`accesskey`](http://w3api.com/HTML/accesskey/) se lo podemos asignar a elementos como [enlaces anchor](https://w3api.com/HTML/a/), [`area`](https://w3api.com/HTML/area/), [`textarea`](https://w3api.com/HTML/textarea/), [`input`](https://w3api.com/HTML/input/), [`label`](https://w3api.com/HTML/label/),... el valor que recibe dicho atributo es el carácter de la tecla que hará de atajo de teclado.


## Crear atajos de teclado


De esta forma, si se lo queremos asignar a unos enlaces mediante su elemento [`a`](https://w3api.com/HTML/a/), haremos lo siguiente:


```html
<a href="[http://www.manualweb.net/html5/](http://www.manualweb.net/html5/)" accesskey="h">Manual de HTML</a>
<a href="[http://www.manualweb.net/java/](http://www.manualweb.net/java/)" accesskey="a">Manual Java</a>
<a href="[http://www.manualweb.net/mongodb/](http://www.manualweb.net/mongodb/)" accesskey="m">Manual de MongoDB</a>
```


Lo que hemos conseguido es que cuando pulsemos el **atajo de teclado más la tecla h** iremos al [Manual de HTML](http://www.manualweb.net/html5/), cuando pulsemos el **atajo de teclado más la tecla a** iremos al [Manual Java](http://www.manualweb.net/java/) y, finalmente, cuando pulsemos el **atajo de teclado más la tecla m** iremos al [Manual de MongoDB](http://www.manualweb.net/mongodb/).


## Atajos de teclado por navegador


Hasta aquí hemos leído en varias ocasiones **"atajo de teclado"**, pero, ¿qué teclas hacen de atajo de teclado? Pues aquí no hay estándar y dependen de cada [navegador web](http://www.ayudaenlaweb.com/2008/11/30/que-es-un-navegador/) y de cada sistema operativo.


Así que deberás de revisar cuál es para el navegador que utilices. Aquí te dejamos una tabla de referencia para los más utilizados:


| **Navegador**                                                                         | **Windows**         | **Linux**           | **Mac**               |
| ------------------------------------------------------------------------------------- | ------------------- | ------------------- | --------------------- |
| [Firefox](http://www.ayudaenlaweb.com/2008/12/22/que-es-firefox/)                     | Alt + Shift + Tecla | Alt + Shift + Tecla | Control + Alt + Tecla |
| [Internet Explorer](http://www.ayudaenlaweb.com/2010/09/12/que-es-internet-explorer/) | Alt + Tecla         | N/A                 | N/A                   |
| [Google Chrome](http://www.ayudaenlaweb.com/2010/03/28/que-es-google-chrome/)         | Alt + Tecla         | Alt + Tecla         | Control + Alt + Tecla |
| [Safari](http://www.ayudaenlaweb.com/2010/06/22/que-es-safari/)                       | Alt + Tecla         | N/A                 | Control + Alt + Tecla |
| [Opera](http://www.ayudaenlaweb.com/2010/01/20/que-es-opera/)                         | Shift + Esc + Tecla | Shift + Esc + Tecla | Shift + Esc + Tecla   |

undefined
## Prueba los atajos


De hecho, en esta propia página hemos gestionado los atajos de teclado del ejemplo y puedes probarlos ahora mismo. Si estás en un [Google Chrome](http://www.ayudaenlaweb.com/2010/03/28/que-es-google-chrome/) verás que como pulsando **Alt+h** o **Control+Alt+h** irás al [Manual de HTML](http://www.manualweb.net/html5/).


Cómo se puede comprobar, de esta forma tan sencilla podemos implementar los atajos de teclado en [HTML](https://www.manualweb.net/html).

