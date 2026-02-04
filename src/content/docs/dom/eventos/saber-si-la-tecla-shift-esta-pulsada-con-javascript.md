---
title: "Saber si la tecla Shift esta pulsada con Javascript"
description: "Código que nos enseñar a controlar eventos y saber si la tecla Shift esta pulsada con Javascript."
date: 2007-08-04
updatedDate: 2026-01-13
tags: ["event","onmousedown","shiftkey"]
slug: dom/eventos/saber-si-la-tecla-shift-esta-pulsada-con-javascript
type: doc
topic: dom
id: a1c9bb25-5587-450c-b147-eb45aeec0182
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/teclado/controlar-pulsacion-tecla-shift.html
---

La tecla **Shift** la utilizamos normalmente para poner teclas en mayúscula. Si bien, existen otros usos como el de hacer múltiples selecciones de elementos. En estos casos mantenemos dicha tecla pulsada mientras elegimos los elementos.


Hay que pensar que no siempre vamos a enfrentarnos a un formulario con una selección múltiple donde el propio navegador gestiona si está la tecla shift pulsada. Pueden presentarsenos situaciones donde queramos proporcionar la selección de múltiples elementos (por ejemplo, imágenes, capas,...) y tengamos que codificarnos, nosotros mismos, el control de la selección múltiple.


## Detectar la tecla Shift con JavaScript


Para ello podemos apoyarnos en [JavaScript](https://www.manualweb.net/javascript/) y detectar si está la tecla shift pulsada y actuar en consecuencia. Lo primero que tenemos que hacer es elegir sobre que evento vamos a realizar el control. En nuestro caso lo vamos a realizar cuando se produzca un click del ratón. Esto es el evento **onmousedown**.


```javascript
<body onmousedown="estaPulsadoShift(event);">
```


## La función estaPulsadoShift


La función que se lanzará será **estaPulsadoShift**, la cual está recibiendo el objeto **event** como parámetro. Este objeto tiene toda la información relativa al evento que se ha producido, es decir, al click del ratón.


La propiedad, del [objeto event](https://www.w3api.com/DOM/Event/target/), que tiene la información relativa a si la tecla shift estaba pulsada o no, es **shiftKey**. Si su valor es igual a 1, entonces significará que la tecla Shift estaba pulsada.


Si codificamos esto en [JavaScript](https://www.manualweb.net/javascript/), nos quedaría el siguiente código:


```javascript
function estaPulsadoShift(e) {
  if (e.shiftKey == 1)
    alert("Tecla Shift Pulsada");
}
```


Poco código y de mucha utilidad.

