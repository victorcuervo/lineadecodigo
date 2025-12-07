---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6DQNQP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGliMniYj0VjBCPk06wd3c8G4JcssekTD6myuGhvl8WzAiAelElcGS4Voyj4Y3XLAX7MwuV8%2BL6ngIsP9FKU5ocu8SqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYPYex6HOxS%2FGNBFKtwDqPeZPEPQrh7kNLCaMHaeoUuWzgGHRQchQ9AZ8G32maWf3lJrLfVgCwQ1JAr3CWFFwYVMMPBM0yndg0Wjr8SKbnoUmO9NjE%2FWsMYX5%2FkqxYEWVWF0gKJz8DW0Pitt0BDbHYlS7fYRtNJkm%2F%2FLxTt7iNZjImq2vV3%2BFgt1jrChTM2HvFGgcqoSi9RsZEPQbboGVYZOD%2F9yoQs77ev2FjWd3MJUASIuFZtbdQrD36r4sytzNz5rBlOOAX9yTPwDLbXgjhNweG%2FK%2FUs2MbLEdGqLl6oNJON1%2Bnjbi0vPH%2B96PkhodI%2B2Jpv1LxyWUdIUPsTTb4TJ9k8XcC9aYtRq7jYupEI86aKJPj4u8fxbI8TT%2Be5SPynM3XuJxFM0Dp4I0YLZsbj7nNn6QsbppC6p3XCYiCf%2FIHzzRfJrTVRUzplyIx%2BKP1ryw8OVVTplDiib7iymHKG4qwC%2FiVITROO4Olp8taUIRzK1PlnP2DdPg%2B42umjeEjT%2BeTSctPa3EucQl8uEB3uVH5of50H4K2y4A4K4RuobvuQgQ8dC8%2FaGGpvYIgAOrKDgZGf6Mlux2GtNY3c4zCIISYKdUnvd3oaSorvby1jwhnYIfQ%2BfccMPtQHL9PsJptgazJ%2FRC1fSbLow7Z7UyQY6pgGGkVV%2B7o%2Bcyh0gj3UU8HvE%2BJHS%2FXx7MCLKmYDk56peq1uJjRoEpNpH7JXMBMrQW1h1vQtWSVjpsd6LjdDlK4OLj4qhVYS1ZV3IAK%2F0GZL6p%2B9NAFuZyGCzHkDva34NClq0lioxdDnDq%2BzM1Wie5U9fXJy01GP0LnLuXnEkaLlypVymI2xvOwW9scInQTln%2FDWHn5nCEbsFnfmGaKQ8SDwVMfZBQ6wn&X-Amz-Signature=cc5a096ae86c6203a1b0d522407ac34b3632803d955d767ac5f4210032fd0e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6DQNQP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGliMniYj0VjBCPk06wd3c8G4JcssekTD6myuGhvl8WzAiAelElcGS4Voyj4Y3XLAX7MwuV8%2BL6ngIsP9FKU5ocu8SqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYPYex6HOxS%2FGNBFKtwDqPeZPEPQrh7kNLCaMHaeoUuWzgGHRQchQ9AZ8G32maWf3lJrLfVgCwQ1JAr3CWFFwYVMMPBM0yndg0Wjr8SKbnoUmO9NjE%2FWsMYX5%2FkqxYEWVWF0gKJz8DW0Pitt0BDbHYlS7fYRtNJkm%2F%2FLxTt7iNZjImq2vV3%2BFgt1jrChTM2HvFGgcqoSi9RsZEPQbboGVYZOD%2F9yoQs77ev2FjWd3MJUASIuFZtbdQrD36r4sytzNz5rBlOOAX9yTPwDLbXgjhNweG%2FK%2FUs2MbLEdGqLl6oNJON1%2Bnjbi0vPH%2B96PkhodI%2B2Jpv1LxyWUdIUPsTTb4TJ9k8XcC9aYtRq7jYupEI86aKJPj4u8fxbI8TT%2Be5SPynM3XuJxFM0Dp4I0YLZsbj7nNn6QsbppC6p3XCYiCf%2FIHzzRfJrTVRUzplyIx%2BKP1ryw8OVVTplDiib7iymHKG4qwC%2FiVITROO4Olp8taUIRzK1PlnP2DdPg%2B42umjeEjT%2BeTSctPa3EucQl8uEB3uVH5of50H4K2y4A4K4RuobvuQgQ8dC8%2FaGGpvYIgAOrKDgZGf6Mlux2GtNY3c4zCIISYKdUnvd3oaSorvby1jwhnYIfQ%2BfccMPtQHL9PsJptgazJ%2FRC1fSbLow7Z7UyQY6pgGGkVV%2B7o%2Bcyh0gj3UU8HvE%2BJHS%2FXx7MCLKmYDk56peq1uJjRoEpNpH7JXMBMrQW1h1vQtWSVjpsd6LjdDlK4OLj4qhVYS1ZV3IAK%2F0GZL6p%2B9NAFuZyGCzHkDva34NClq0lioxdDnDq%2BzM1Wie5U9fXJy01GP0LnLuXnEkaLlypVymI2xvOwW9scInQTln%2FDWHn5nCEbsFnfmGaKQ8SDwVMfZBQ6wn&X-Amz-Signature=02cc0020757131a441a6c07bac204ac10aef87092f896ed9217366d96c594b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
