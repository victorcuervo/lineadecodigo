---
title: "Múltiples fondos"
description: "Cómo poder tener múltiples fondos en tu página web utilizando CSS."
date: 2011-03-20
updatedDate: 2026-09-18
tags: ["background","background-image","background-repeat","background-attachment","position"]
slug: css/colores-y-fondos/multiples-fondos
type: doc
topic: css
id: 2c8a9dfb-adca-81d6-97c7-fdc6981032e7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_css/fondos/multiples-fondos
---

Una de las posibilidades más útiles de [CSS](https://lineadecodigo.com/css/) es aplicar múltiples fondos a un mismo elemento mediante la propiedad abreviada `background`. Cada fondo se define como una capa y las capas se separan con comas. La primera imagen indicada se muestra por encima de las siguientes.


## Sintaxis de la propiedad background


Antes de crear múltiples fondos, conviene revisar la sintaxis básica de `background`:


```css
background: [color] [image] [repeat] [attachment] [position];
```


Por ejemplo, para colocar una sola imagen de fondo sin repetición, podemos escribir:


```css
background: url("logo.png") no-repeat 50px 700px;
```


En este caso, `url()` indica la imagen, `no-repeat` evita que se repita y `50px 700px` establece su posición horizontal y vertical.


## Cómo definir múltiples fondos con [CSS](https://lineadecodigo.com/css/)


Para aplicar múltiples fondos, debemos separar con comas la configuración de cada capa. Si queremos utilizar dos imágenes de fondo, podemos hacerlo de la siguiente forma:


```css
background:
  url("logo.png") no-repeat 50px 700px,
  url("bg.gif") repeat 0 0;
```


La imagen `logo.png` se dibuja sobre `bg.gif`, ya que la primera capa declarada queda por encima de las posteriores. Cada capa puede tener sus propios valores de repetición y posición.


## Compatibilidad con navegadores


Actualmente, los múltiples fondos forman parte del soporte habitual de los navegadores modernos. Para navegadores antiguos que no admitían esta característica, se podía declarar primero un único fondo como alternativa y, después, la versión con varias capas:


```css
background: url("bg.gif") repeat 0 0;
background:
  url("logo.png") no-repeat 50px 700px,
  url("bg.gif") repeat 0 0;
```


Un navegador antiguo ignoraba la segunda declaración si no entendía los múltiples fondos y conservaba la primera. En proyectos actuales, este recurso solo resulta necesario cuando se debe mantener compatibilidad con navegadores heredados.

