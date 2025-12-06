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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44NHGY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2U1QRZwEGdZgCbeqyjjBrpX5V255joJv60DFnaREVxAiBq%2FwJ0U2L9mRlRz9hn200HNQ6XzQvHgqCYNmt2X9GsJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMODCLcwQf3GBmkqssKtwDeHdHbGzpg1eK%2B5fdXCgwpJ5oIeCSjkyHceKUggQ%2Bs%2BxfSIG3jaoGjJHbXtG1V%2BQnWk%2BDGf4smq7aOR4vBQPaXNOzEjjSMt8Zw%2FZ38QCl1b2si3%2BHbr8Hsq8ne6Q8c0pXyl04sZykW8auQyI0ADtQA3bmopf48WnVn9o3wdftm8DMjwbIh0vGhXF85zKELVoFWnp0hI9baQph%2BY9JchSv6bWJR2yuDDtgu5mMuHs8A29WXYokp3FgS0yqT%2FkjRSjjWIBAKsWIaMoTHrpu2nZdGsD%2B1IV8EgW3LzTikCnnP2Gsuob1Nb%2B1LUPSGxz07PlJU5ndphhYyNS7W8UWUOp7LeZT0ZPDRCDMMU7GbiBpWgoSC%2BzDgCGtHVGkejtgOyCKXhMejnBOsmos5zdmmVZb04uNzq%2B34A%2Fak%2FKaCgkY%2BLAqfp5m25FxwhKADBS8bFNGd3PrQxAF0RvhYr0n8y0zQwDyrCAHMbNG9B6A5lj9zjGlJAtXXtHS1EgdlRolAJ367enVNHz9KYIifGuZTnleFUCavR1YCL%2F0F9L8H8VzrfmR0rJCgOo%2FMcmljAzY87rPUAk3e8PwEFaZg0kd4P3k1Bm9gYVKARXFPDeVL%2Bdv%2FkQi9o3tXTfEwV2bUigwjNPSyQY6pgFf63GkojNiwuaH94%2Bmi3VWO9JxBzXLzNowRN4koZaynXm5WGxta1AplIHhNbFKumAk3wxiSiXikFexaWdQPRciXE%2Fr1Mda9OHaNCQY37iPMOmY%2BmAhtmqIW5Qdsz0B7BR03AZ25eH2Yvzd8tIdv2di7EJsU2wwhkJ%2FrkL8IXibv5wnxVEvpxQdN3Io72avwzeJtC25Who6084ELdxesXuk9peO9QHP&X-Amz-Signature=a61a060c557b23960c1a7955dcc27104ddb4a94c9849d2fb5ad731d478350679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44NHGY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2U1QRZwEGdZgCbeqyjjBrpX5V255joJv60DFnaREVxAiBq%2FwJ0U2L9mRlRz9hn200HNQ6XzQvHgqCYNmt2X9GsJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMODCLcwQf3GBmkqssKtwDeHdHbGzpg1eK%2B5fdXCgwpJ5oIeCSjkyHceKUggQ%2Bs%2BxfSIG3jaoGjJHbXtG1V%2BQnWk%2BDGf4smq7aOR4vBQPaXNOzEjjSMt8Zw%2FZ38QCl1b2si3%2BHbr8Hsq8ne6Q8c0pXyl04sZykW8auQyI0ADtQA3bmopf48WnVn9o3wdftm8DMjwbIh0vGhXF85zKELVoFWnp0hI9baQph%2BY9JchSv6bWJR2yuDDtgu5mMuHs8A29WXYokp3FgS0yqT%2FkjRSjjWIBAKsWIaMoTHrpu2nZdGsD%2B1IV8EgW3LzTikCnnP2Gsuob1Nb%2B1LUPSGxz07PlJU5ndphhYyNS7W8UWUOp7LeZT0ZPDRCDMMU7GbiBpWgoSC%2BzDgCGtHVGkejtgOyCKXhMejnBOsmos5zdmmVZb04uNzq%2B34A%2Fak%2FKaCgkY%2BLAqfp5m25FxwhKADBS8bFNGd3PrQxAF0RvhYr0n8y0zQwDyrCAHMbNG9B6A5lj9zjGlJAtXXtHS1EgdlRolAJ367enVNHz9KYIifGuZTnleFUCavR1YCL%2F0F9L8H8VzrfmR0rJCgOo%2FMcmljAzY87rPUAk3e8PwEFaZg0kd4P3k1Bm9gYVKARXFPDeVL%2Bdv%2FkQi9o3tXTfEwV2bUigwjNPSyQY6pgFf63GkojNiwuaH94%2Bmi3VWO9JxBzXLzNowRN4koZaynXm5WGxta1AplIHhNbFKumAk3wxiSiXikFexaWdQPRciXE%2Fr1Mda9OHaNCQY37iPMOmY%2BmAhtmqIW5Qdsz0B7BR03AZ25eH2Yvzd8tIdv2di7EJsU2wwhkJ%2FrkL8IXibv5wnxVEvpxQdN3Io72avwzeJtC25Who6084ELdxesXuk9peO9QHP&X-Amz-Signature=2d75ba23332aaaface3a74491edee3532f69d30b452777e0d5433b8d914caaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
