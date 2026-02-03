---
title: "Microdata para una geolocalización con HTML5"
description: "Aprende a utilizar microdata para una geolocalización efectiva en HTML5 y mejora la semántica de tu página, facilitando así su integración con mapas y servicios."
date: 2012-10-17
updatedDate: 2026-01-21
tags: ["microdata","geocoordinates","itemscope","itemtype","itemprop"]
slug: html/semantica/microdata-para-una-geolocalizacion-con-html5
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-812e-8b01-ee25d32fbaa6
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_web/WebContent/markup/HTML5/Microdata/geolocalizacion.html
---

Seguimos con más [ejemplos sobre microdata en HTML5](http://lineadecodigo.com/tag/html5-microdata) para aprender a definir nuevas entidades semánticas dentro de nuestros documentos [HTML5](https://www.manualweb.net/html5/).


En este caso vamos a ver cómo definir un microdata para una geolocalización. Algo muy útil cuando estemos trabajando con mapas - seguro que ya has probado todos [nuestros ejemplos del API de Google Maps](http://lineadecodigo.com/tag/google-maps/) -.


## ¿Qué es una geolocalización?


Lo que tenemos que saber es que **una geolocalización se define por una latitud y una longitud**. Por ejemplo, la ciudad de Ávila está en la latitud 40.65599461 y la longitud -4.69373720. 


Para ello, [**Schema.org**](http://schema.org/) nos define la entidad GeoCoordinates en [http://schema.org/GeoCoordinates](http://schema.org/GeoCoordinates).


## Definir el ámbito de la entidad


Así, que lo primero que tenemos para hacer es definir el ámbito de nuestra entidad mediante el atributo `itemscope` e indicar dónde está definida la entidad mediante el atributo `itemtype`.


```html
<div itemscope itemtype="[http://schema.org/GeoCoordinates](http://schema.org/GeoCoordinates)">
</div>
```


## Propiedades de GeoCoordinates


Dentro de la entidad GeoCoordinates tenemos principalmente los atributos:

- **latitude**, para especificar la latitud.
- **longitude**, para especificar la longitud.

Así que asignaremos dichos nombres mediante los atributos `itemprop`. En este caso volvemos a utilizar un elemento `span` para dar la información.


```html
<div itemscope itemtype="[http://schema.org/GeoCoordinates](http://schema.org/GeoCoordinates)">
  <span itemprop="latitude">40.65599461</span>
  <span itemprop="longitude">-4.69373720</span>
</div>
```


De una forma sencilla hemos dotado de semántica a la información de geolocalización de nuestra página [HTML5](https://www.manualweb.net/html5/).

