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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGYPKKJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOj6oYY7otKj2BxaVyFwt4%2F00yJ%2BD85ll3uRSbjui2CAiEAkV9Vo3T2C62QfycvDX7aSf3EVLfRQWw89kO2z6Fqx9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJon4UV6D3t0D3ezSrcA%2Bl2c53FooZ%2FS%2Bxwcmiyu78ZF1hHj32MLlsXX17K%2F0LWboA5izM8lZcG1oObmsDa3bRQ9lhTnJw0xNh5IlBbz0rYG8lELBQTCKAXeKQeJCw5qN%2B1uCbBcF9tBGFRkMhTgFEv4ZDDe1oSI0uutsFGKrgQMLmszcgQPciwN9sNHYzWLAioGEbiiD6ylF8%2FoqRQPj5BFY3Sy%2F1aAFOhzxsVK8kusNOdnMjtH0vw8jJlajJBBDMTr2TBYlRPPSwpQpsIsGMc8shSuxNkzB%2Fe%2FyAw%2FRQdo663o%2FpYNeY388ewSkpea9qA2y1YBd6fhqwcCtaBSAjCBO4LMPushBqpy1Vn6IlPKzcdXS0usjVxk4YOahEx3deK9BQDaA5dyfO9poO4kJMVjwa0kHzKpKgkgqmMzUpJ%2Bq1Zvhk07IS4KgcxZSoR6A5DvpLA5PXlsdxGuAWEKsw4%2BqxRbvrQ4fDCHjwHApVPRMc6K8%2FS5Y9PHkCjsQyNev4iNwk8TJDJeS%2F%2FEArNBZysvYlySr%2Bpy7F%2Bjqa6UanHUpCTz04JFfChuXh4zGkQirlPZmw0ltp3fW1YCyNjbvjGrcEL1zKDfL4IehlnL6KhAPnWOWUh1BQWLUgSSJ%2FqjxQ7%2BAM1hBgB0p5vMNDH18kGOqUB7VwkXlC8sayxMe4wm6ep8VZcGV23ETqk%2Bg5FaZ1K23aghRtnW2m0yE68HqbrF4ufd%2BQ7Qr8x3%2BiDWQPogN8JvyABwSJURgudBeiczb89A8Nn565Fs%2Fg9%2FdgdR6hD%2FBYnOL2rU6NvjOaORP9sLBZEEvZdI7eL0ymActw3n8BvsZEvN%2Bdnfm5eEeUUcyrWIjLgNxujFEpGw48WW3xjeji%2BVYBFw%2BML&X-Amz-Signature=8dacca18f71f815b118c67842063997c0ea2a62ac40809bd22fa74f359d2f9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGYPKKJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOj6oYY7otKj2BxaVyFwt4%2F00yJ%2BD85ll3uRSbjui2CAiEAkV9Vo3T2C62QfycvDX7aSf3EVLfRQWw89kO2z6Fqx9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJon4UV6D3t0D3ezSrcA%2Bl2c53FooZ%2FS%2Bxwcmiyu78ZF1hHj32MLlsXX17K%2F0LWboA5izM8lZcG1oObmsDa3bRQ9lhTnJw0xNh5IlBbz0rYG8lELBQTCKAXeKQeJCw5qN%2B1uCbBcF9tBGFRkMhTgFEv4ZDDe1oSI0uutsFGKrgQMLmszcgQPciwN9sNHYzWLAioGEbiiD6ylF8%2FoqRQPj5BFY3Sy%2F1aAFOhzxsVK8kusNOdnMjtH0vw8jJlajJBBDMTr2TBYlRPPSwpQpsIsGMc8shSuxNkzB%2Fe%2FyAw%2FRQdo663o%2FpYNeY388ewSkpea9qA2y1YBd6fhqwcCtaBSAjCBO4LMPushBqpy1Vn6IlPKzcdXS0usjVxk4YOahEx3deK9BQDaA5dyfO9poO4kJMVjwa0kHzKpKgkgqmMzUpJ%2Bq1Zvhk07IS4KgcxZSoR6A5DvpLA5PXlsdxGuAWEKsw4%2BqxRbvrQ4fDCHjwHApVPRMc6K8%2FS5Y9PHkCjsQyNev4iNwk8TJDJeS%2F%2FEArNBZysvYlySr%2Bpy7F%2Bjqa6UanHUpCTz04JFfChuXh4zGkQirlPZmw0ltp3fW1YCyNjbvjGrcEL1zKDfL4IehlnL6KhAPnWOWUh1BQWLUgSSJ%2FqjxQ7%2BAM1hBgB0p5vMNDH18kGOqUB7VwkXlC8sayxMe4wm6ep8VZcGV23ETqk%2Bg5FaZ1K23aghRtnW2m0yE68HqbrF4ufd%2BQ7Qr8x3%2BiDWQPogN8JvyABwSJURgudBeiczb89A8Nn565Fs%2Fg9%2FdgdR6hD%2FBYnOL2rU6NvjOaORP9sLBZEEvZdI7eL0ymActw3n8BvsZEvN%2Bdnfm5eEeUUcyrWIjLgNxujFEpGw48WW3xjeji%2BVYBFw%2BML&X-Amz-Signature=ce3bb82df0c74b9b19499ef78990ce2096ceb928c598beeaf95883db4dab110f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
