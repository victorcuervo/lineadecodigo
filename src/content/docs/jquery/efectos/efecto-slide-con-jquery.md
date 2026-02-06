---
title: "Efecto slide con jQuery"
description: "Descubre cómo implementar el efecto slide con jQuery y mejora la interactividad de tus páginas web. Aprende a ocultar elementos fácilmente y sorprende a tus usuarios."
date: 2012-01-05
updatedDate: 2026-02-06
tags: ["hide","slide"]
slug: jquery/efectos/efecto-slide-con-jquery
type: doc
topic: jquery
id: aa0df429-e624-43ea-a2da-424c390490f4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/efecto-slide.html
---

El efecto slide es el que nos permite realizar un desplazamiento de un elemento en alguna dirección (izquierda, derecha, arriba o abajo). En las siguientes líneas veremos lo sencillo que es hacerlo con [jQuery](https://lineadecodigo.com/jquery/).


## El Efecto y la Función .hide()


En nuestro ejemplo vamos a desplazar una capa que tengamos en la página, para ocultarla. De esta manera aplicaremos el efecto slide en ese momento.


Lo primero que tenemos que saber es que la función que oculta un elemento en [jQuery](https://lineadecodigo.com/jquery/) es **.hide()**. Pero si vemos la sintaxis (la más común) de esta función:


```javascript
.hide(velocidad, [funcion_callback])
```


Nos damos cuenta que solo podemos aplicar una velocidad de ocultación y una función de callback para ejecutar cuando se termine la ocultación.


## jQuery UI y los Efectos


Entonces, ¿dónde ejecuto el efecto? Para ello tenemos la librería **jQuery UI**, que es una extensión al core de jQuery, dotándole de capacidades gráficas como la de los efectos.


Así en jQuery UI encontraremos una extensión de la función **.hide()** para que podamos aplicar efectos. Lo mismo sucede con las funciones **.show()** y **.toggle()**.


De esta manera la función **.hide()** podrá recibir un efecto como parámetro. El efecto se compondrá de dos partes:

- Nombre del efecto
- Parámetros del efecto

## Parámetros del Efecto Slide


En el caso del **efecto slide** podemos indicar como parámetros:

- **direction**: la dirección (izquierda, derecha, arriba, abajo)
- **distance**: punto del elemento en el que se aplicará el efecto
- **mode**: si es show o hide

De esa manera nuestro efecto saliendo hacia la izquierda sería algo así:


```javascript
$(this).hide("slide", { direction: "left" }, 5000);
```


Donde `this` será el elemento sobre el que aplicamos el efecto.


## Aplicar el Efecto Slide a una Capa


Por ejemplo, si queremos desplazar una capa:


```html
<div id="micapa" style="background-color:red;width:100px;height:100px"></div>
```


El código jQuery nos quedará de la siguiente forma:


```javascript
$(document).ready(function(){
  $("#micapa").click(function(){		
    $(this).hide("slide", { direction: "left" }, 5000);
  });
});
```


Hemos utilizado el método **.click()** para lanzar el efecto cuando se pulse sobre la capa.


Con esos sencillos pasos tenemos completado el efecto slide con jQuery.

