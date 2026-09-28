---
title: "Imagen con áreas enlazables"
description: "Código que nos enseña como podemos crear una Imagen con áreas enlazables de tal manera que cada área tenga un enlace diferente."
date: 2010-09-24
updatedDate: 2026-09-28
tags: ["map","usemap","shape","coords","image"]
slug: html/imagenes/imagen-con-areas-enlazables
type: doc
topic: html
id: 37d8299c-5f68-4778-8f28-d2d44da926c9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/imagenes/imagen-con-areas-enlazables.html
---

En este ejemplo vamos a ver cómo podemos crear una imagen la cual tenga diferentes partes (o áreas) con enlaces diferentes. Para ello nos vamos a apoyar en los elementos [`<map>`](http://w3api.com/HTML/map) y [`<area>`](http://w3api.com/HTML/area) de [HTML](http://www.manualweb.net/html/).


## Insertar la imagen en el documento web


Lo primero ver **la imagen sobre la que vamos a crear las áreas**... 


![Logos de Navegadores](../../../../assets/html/images/image.png)


La idea es que cada logo de la imagen redirija a un enlace diferente. Lo primero que hacemos es cargar la imagen en la página:


```html
<img src="navegadores.png" alt="Navegadores" usemap="#navegadores" width="821" height="152" border="0" />
```


Como se puede apreciar hemos utilizado el atributo [`usemap`](http://w3api.com/HTML/img/usemap) para indicarle el nombre del mapa que contendrá la definición de las áreas enlazables. En este caso el mapa se llama `navegadores`.


## Definiendo el mapa de elementos


Pasemos a definir el mapa. El mapa se define mediante el elemento [`<map>`](http://w3api.com/wiki/HTML:MAP):


```html
<map id="navegadores" name="navegadores">
...
</map>
```


Dentro del mapa es donde definiremos las áreas, mediante elementos [`<area>`](http://w3api.com/HTML/area). Un elemento [`<area>`](http://w3api.com/HTML/area) tiene varios atributos, pero los más importantes son: - [`href`](http://w3api.com/HTML/a/href), es el enlace donde se irá al pinchar sobre ese área.

- [`shape`](http://w3api.com/HTML/area/shape), es el tipo de figura que queremos que represente el área: `default` | `rect` | `circle` | `poly`
- [`coords`](http://w3api.com/HTML/area/coords), los las coordenadas de la imagen que representan los vértices de la figura. O centro y rádio en el caso de que sea un círculo

## Crear las áreas de cada elemento


En este caso, sobre la imagen definiríamos los siguientes áreas:


```html
<area shape="rect" coords="0,0,157,147" href="/que-es-internet-explorer/" alt="Internet Explorer">
<area shape="rect" coords="164,0,321,147" href="/que-es-firefox/" alt="Firefox">
<area shape="rect" coords="340,0,497,147" href="/que-es-google-chrome/" alt="Google Chrome">
<area shape="rect" coords="507,0,664,147" href="/que-es-safari/" alt="Safari">
<area shape="rect" coords="659,0,816,147" href="/que-es-opera/" alt="Opera">
```


En nuestro caso hemos utilizado todo rectángulos.


Lo más complicado en estos casos es encontrar las coordenadas del área. Para ello te recomiendo que utilices herramientas como [Image Map Creator](http://www.image-maps.com/) la cual genera las coordenadas y el código [HTML](http://www.manualweb.net/html/).


## Código de nuestra imagen con áreas enlazables


El código final quedaría de la siguiente forma:


```html
<map id="navegadores" name="navegadores">
  <area shape="rect" coords="0,0,157,147" href="/que-es-internet-explorer/" alt="Internet Explorer">
  <area shape="rect" coords="164,0,321,147" href="/que-es-firefox/" alt="Firefox">
  <area shape="rect" coords="340,0,497,147" href="/que-es-google-chrome/" alt="Google Chrome">
  <area shape="rect" coords="507,0,664,147" href="/que-es-safari/" alt="Safari">
  <area shape="rect" coords="659,0,816,147" href="/que-es-opera/" alt="Opera">
</map>
```

