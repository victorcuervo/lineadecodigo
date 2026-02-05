---
title: "Moverse por el API History"
description: "Descubre cómo moverte por el API History de manera efectiva. Aprende a crear estados y navegar en tu aplicación AJAX para mejorar la experiencia del usuario."
date: 2019-01-09
updatedDate: 2026-02-05
tags: ["history","pushstate","go","forward","back"]
slug: webapi/navegador/moverse-por-el-api-history
type: doc
topic: webapi
id: 2c8a9dfb-adca-81d5-afab-e05f2d70bb89
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/History%20API/history-go.html
---

El **API History** nos ofrece la posibilidad no solo de movernos por las navegaciones que ha hecho un usuario si no también la posibilidad de crear **nuevos estados** para simular navegaciones en aplicaciones que funcionen bajo un modelo AJAX.


De esta forma, mediante el API History, tenemos una pila de estados sobre los cuales podemos desplazarnos, y que estarán totalmente integrados con los botones de _back_ y _forward_ del navegador del usuario.


En este ejemplo vamos a ver cómo hay que moverse por el API History e ir a un estado en concreto.


## Creando estados con pushState


Lo primero que vamos a hacer es crear un conjunto de estados. De esta forma simulamos que el usuario ha estado navegando o realizando una serie de acciones. Para ello utilizamos el método `pushState` el API History.


```javascript
history.pushState({ pagina: "1" }, "Titulo 1", "history-go.html#p1");
history.pushState({ pagina: "2" }, "Titulo 2", "history-go.html#p2");
history.pushState({ pagina: "3" }, "Titulo 3", "history-go.html#p3");
history.pushState({ pagina: "4" }, "Titulo 4", "history-go.html#p4");
history.pushState({ pagina: "5" }, "Titulo 5", "history-go.html#p5");
history.pushState({ pagina: "6" }, "Titulo 6", "history-go.html#p6");
history.pushState({ pagina: "7" }, "Titulo 7", "history-go.html#p7");
```


De esta forma le hemos indicado al navegador que se han realizado 7 navegaciones y por lo tanto hay 7 estados dentro del navegador.


Podemos comprobar el número de estados mediante la propiedad `history.length` del API History.


```javascript
console.log("El número de estados es de " + history.length);
```


## Método history.go()


Ahora lo que vamos a ver es cómo moverse por el API History. En este caso el método que tenemos que utilizar es `go`. El método `go` del API history lo que recibe un parámetro numérico con el número de desplazamientos a realizar.


```javascript
history.go(numero);
```


En el caso de que el número sea positivo irá hacia delante en el historial, y si el número es negativo irá hacía atrás del historial, es decir, sobre los estados que tenemos apilados.


## Navegando hacia atrás


Dada la situación inicial, estamos en el **"estado 7"** no hay ningún estado nuevo hacia delante, con lo cual no serviría el movernos hacia delante. Lo que vamos a hacer es desplazarnos hacía detrás en el historial de navegación.


```javascript
window.history.go(-2);
```


De esta forma nos hemos situado en el **"estado 5"**.


## Navegando hacia delante


Ahora ya sí que podemos movernos por el API History hacía delante. Así que escribimos.


```javascript
window.history.go(1);
```


En estos momentos nos encontramos en el **"estado 6"**.


> 💡 El uso de `history.go(1)` equivaldría a escribir `history.forward()` y utilizar `history.go(-1)` equivaldría a utilizar `history.back()`.


	El uso de `history.go(1)` equivaldría a escribir `history.forward()` y utilizar `history.go(-1)` equivaldría a utilizar `history.back()`.


## Ejemplo combinado


Si nuevamente utilizamos un valor negativo, nos volveremos a mover hacía atrás.


```javascript
window.history.go(-2);
```


Encontrándonos finalmente en el **"estado 4"**.


Ya hemos visto lo sencillo que es moverse por el **API History** y cómo podemos darle uso en aplicaciones ricas montadas con AJAX.

