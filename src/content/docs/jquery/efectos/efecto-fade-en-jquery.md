---
title: "Efecto Fade en jQuery"
description: "Crea un efecto Fade en jQuery de forma sencilla y rápida. Aprende a ocultar y mostrar elementos con un toque suave que mejorará tu web."
date: 2012-03-30
updatedDate: 2026-02-06
tags: ["fadeout","fadein"]
slug: jquery/efectos/efecto-fade-en-jquery
type: doc
topic: jquery
id: 31207131-1f5c-43c3-b8c4-6747c7525ecc
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/efecto-fade.html
---

Utilizando [jQuery](http://www.manualweb.net/jquery/) podemos crear de una forma muy sencilla efectos de Fade, es decir, ocultar o mostrar un elemento de forma gradual. Para poder realizar un efecto de Fade en [jQuery](http://www.manualweb.net/jquery/) utilizaremos los métodos [.FadeOut()](https://www.w3api.com/jQuery/fadeOut%20%22Método%20fadeOut%20de%20jQuery%22) y [.FadeIn()](https://www.w3api.com/jQuery/fadeIn%20%22Método%20fadeIn%20de%20jQuery%22).


## Crear la Imagen


Pero lo primero será poner un elemento sobre el que aplicar el efecto Fade. En nuestro caso utilizaremos una imagen.


```html
<img id="logo" src="contenido.png" alt="logo">
```


## Añadir los Enlaces


Ahora ponemos los enlaces para ocultar y mostrar:


```html
<a href="#" id="ocultar">Ocultar</a> | <a href="#" id="mostrar">Mostrar</a>
```


## Manejar el Evento Click


Lo que haremos ahora será poner el código [jQuery](http://www.manualweb.net/jquery/) que controle el evento onclick sobre estos enlaces. Para poder hacer esto necesitamos el [método click](https://www.w3api.com/jQuery/click%20%22Método%20click%20de%20jQuery%22) sobre los enlaces.


```javascript
$("#mostrar").click(function(e){				
  // Efecto Fade
});
```


## Ejecutar los Efectos Fade


Ya solo nos quedará el ejecutar los efecto con los métodos [.FadeOut()](https://www.w3api.com/jQuery/fadeOut%20%22Método%20fadeOut%20de%20jQuery%22) y [.FadeIn()](https://www.w3api.com/jQuery/fadeIn%20%22Método%20fadeIn%20de%20jQuery%22).


```javascript
$("#ocultar").click(function(e){				
  $("#logo").fadeOut();		
});

$("#mostrar").click(function(e){				
  $("#logo").fadeIn();		
});
```


## Configurar el Tiempo del Efecto


Si queremos, podemos configurar el tiempo en el cual realizamos el efecto del fade. Para ello pasaremos el tiempo, en milisegundos, a las funciones [.FadeOut()](https://www.w3api.com/jQuery/fadeOut%20%22Método%20fadeOut%20de%20jQuery%22) y [.FadeIn()](https://www.w3api.com/jQuery/fadeIn%20%22Método%20fadeIn%20de%20jQuery%22).


```javascript
$("#ocultar").click(function(e){				
  $("#logo").fadeOut(2000);		
});

$("#mostrar").click(function(e){				
  $("#logo").fadeIn(2000);		
});
```


Algo sencillo: realizar un efecto de fade en [jQuery](http://www.manualweb.net/jquery/).

