---
title: "Resaltar los enlaces con CSS"
description: "Código que nos permite resaltar los enlaces con CSS para que sean más visibles a la hora de pasar por ellos."
date: 2007-02-27
updatedDate: 2026-01-17
tags: ["background-color","enlaces"]
slug: css/buenas-practicas/resaltar-los-enlaces-con-css
author: victor_cuervo
type: doc
topic: css
id: 27f91804-90f1-4c53-81b5-06255671fd91
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/enlaces/resaltado-de-enlaces.html
---

Los [enlaces son los elementos que ayudaron a construir la red](https://lineadecodigo.com/tag/html-enlaces/) que conocemos a día de hoy. Parece que ahora otras tecnologías son las que están ayudando a crecer a "la red", como las peticiones de datos asíncronas estilo [AJAX](http://www.manualweb.net/javascript/), los mashup de aplicaciones,... Si bien en el fondo siempre seguiremos teniendo enlaces.


Y todo este rollo, ¿para qué? Bueno, la verdad es que tampoco sabía cómo introducir a los enlaces. La idea de este ejemplo es resaltar los enlaces con [CSS](http://www.manualweb.net/css/). Para hacerles más visibles.


Para ello nos vamos a apoyar en las hojas de estilo y más concretamente en la propiedad [`background-color`](https://w3api.com/CSS/background-color/), la cual podemos aplicarla a casi cualquier elemento de la página. En nuestro caso aplicaremos el estilo sobre el [elemento `a`](https://w3api.com/HTML/a/), el cual representa a los enlaces.


De esta forma tendremos el siguiente estilo [CSS](http://www.manualweb.net/css/):


```css
a {
  background-color: #ffff00;
}
```


> El código utilizado **#ffff00** es el color amarillo. Este código es el RGB donde los dos primeros valores hexadecimales reflejan el color rojo, el segundo el color verde y el último el color azul. Su mezcla genera un color.


## Comportamientos del elemento a


Hay que tener en cuenta, que a el [elemento `a`](https://www.w3api.com/HTML/a/) se le conocen varios comportamientos:

- **link**, cuando el enlace no ha sido todavía visitado
- **hover**, cuando estamos encima del enlace
- **visited**, cuando el enlace ha sido visitado

Entonces, para nuestro ejemplo de resaltar los enlaces con [CSS](http://www.manualweb.net/css/) asignaremos un color de resaltado cuándo pasemos sobre el enlace. Aunque podríamos hacerlo con los otros dos comportamientos.


## Código final


El código para resaltar los enlaces con [CSS](http://www.manualweb.net/css/) quedaría finalmente de la siguiente guisa:


```css
a:hover {
  background-color: #ffff00;
}
```


El código del [elemento `style`](https://w3api.com/HTML/style/) de las [CSS](http://www.manualweb.net/css/) irá dentro de la cabecera de la página [HTML](http://www.manualweb.net/html/).

