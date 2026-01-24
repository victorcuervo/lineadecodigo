---
title: "Especificar una duración en HTML5"
description: "Descubre cómo especificar una duración en HTML5 utilizando el elemento time y los atributos adecuados para eventos, películas y más. ¡Optimiza tu código ahora!"
date: 2012-10-11
updatedDate: 2026-01-24
tags: ["datetime","time","periodo"]
slug: html/semantica/especificar-una-duracion-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/fechas-con-duracion-html5.html
topic: html

---

El otro día veíamos como podíamos [especificar una fecha en HTML5](http://lineadecodigo.com/html5/fechas-en-html5/). Con el elemento [time](https://www.w3api.com/HTML/time/) y su atributo [datetime](https://www.w3api.com/HTML/time/.datetime), por defecto podemos indicar una fecha exacta (fecha y hora).


Pero el elemento [time](https://www.w3api.com/HTML/time/) y su atributo [datetime](https://www.w3api.com/HTML/time/.datetime) tienen mucha potencia. Y es que además de poder especificar una fecha en [HTML5](https://www.manualweb.net/html5/) nos van a permitir **especificar una duración con HTML5**.


Imagina que quieres indicar que un evento ha durado 4 días o que la película dura una hora y media, o, incluso siendo más preciso, que un atleta ha recorrido la maratón en 2 horas, 5 minutos y 32 segundos. Todo esto son duraciones y el elemento [time](https://www.w3api.com/HTML/time/) de [HTML5](https://www.manualweb.net/html5/) nos va a dejar especificarlas.


## Periodo (P)


Y el truco está en **utilizar un valor de P (periodo)** dentro del atributo [datetime](https://www.w3api.com/HTML/time/.datetime). Es decir, si a una fecha del datetime le anteponemos la P, pasará a especificar una duración.


Así, si queremos decir que el evento ha durado 4 días pondremos:


```html
El evento durará <time datetime="P4D">4 días</time>.
```


O que la proyección de la película es de 1 hora y media


```html
La proyección fue de <time datetime="P1H 30M">una hora y media</time>
```


## Mayor precisión con T


Pero **hay otro modificador adicional, este será la T**. Y es que si después de especificar el periodo con la P en el datetime utilizamos la T, lo que estamos indicando es que hay mucha mayor precisión en la fecha.


Así, para el caso del tiempo de la maratón pondremos lo siguiente:


```html
La maratón se corrió en <time datetime="PT2H 05M 32S">2 horas, 5 minutos y 32 segundos</time>
```


Dos marcadores y una forma sencilla de especificar las duraciones en [HTML5](https://www.manualweb.net/html5/).

