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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEDS3FE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGRjVB4E26gg54AP26chXrBDHu0lGddRuXjrlf6My0%2FAiADLQsgfk0mFzYxSekxcSn%2BAiQyQ4zouGqBD0Ve1cCn3ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMS%2FAc1Ms0zGIr6I6tKtwDlhmnVisuOBRFks7gGhK7d9NFWjlSnjsiaFn%2FoUB3ItZPqdMmPaTNImYfUY9CiiYH7syoblDAfWmnaY6d2Uu3h1%2BRMhxi2RR%2FWZyfgJWp4cgSkc300skDEWQhitbl1lWbu21UAEnbIxOQ7uoE14YG%2FkXrHMi8NClfvfW7mOoz1QJdg%2BScyucCNbTD%2Bf%2F8X4n4uy4hPeeH6%2Bv5oX7mvGQiPxWcYUSeUXBmNz5fPeRPhgl%2FQS3EVCKDKxj4J91VMf%2FLIdhUlsHHt6SAbmt%2FfNtr921v6tcOfz1afLrmxeBCOLbeTth8iEB9rqU0R5iK0w4OMNlgqBrE%2Fk%2B8E7EYwTRaXb1ff%2FudOqAR0Bk81wFU5Uz1RMG3occdnHMn0kuRgOVbzzGJgSWde4XygGCFQh2Pvpzvws1RYomVJC83I0h3g70YuaCfgOnGShykvQAWzlyonwJdy6pM3I%2BEREQhzfMiEH26TFk7s9HIzkjrAT%2BgaNASpDBMl1dVoYAWsCB1%2BzVhi8DbmuYBQdnRGVL2KgmOSYujRPLO2bFxB4lFgGOX6tzFJbWqvWZCAFwlVCfDG7CXAQDbbm5YerTv89r4uVe2l1wmDBfvjNaiQJhsyA5cO5AUc9U8eRPHqRRhkTYwp87KyQY6pgEU9k9D096KG7MaxZAL0gD1lpZOz7PkP8dUIVJ5uMkIqgA27c95lBYiMDtj2wYS8lKcHW%2FVIxz4uD7Bu5%2BT%2FuSk25VIYMI27HyyUI%2Bcl8BAIftyIb9DjsR3Wd7a7ENUB33HNS%2FLxFjFLJPsZiMkHgxtogIpPxbCOL1jYkFU4BdRv3ge2iX8yAkBVWJZqj75M1SBYlGCtIwVSj3GJwSsHBPoJeLzmJ8F&X-Amz-Signature=db155f0e71d2939be3ce09c5f809ed5c3d3ad461db6780afda6499696071b5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEDS3FE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGRjVB4E26gg54AP26chXrBDHu0lGddRuXjrlf6My0%2FAiADLQsgfk0mFzYxSekxcSn%2BAiQyQ4zouGqBD0Ve1cCn3ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMS%2FAc1Ms0zGIr6I6tKtwDlhmnVisuOBRFks7gGhK7d9NFWjlSnjsiaFn%2FoUB3ItZPqdMmPaTNImYfUY9CiiYH7syoblDAfWmnaY6d2Uu3h1%2BRMhxi2RR%2FWZyfgJWp4cgSkc300skDEWQhitbl1lWbu21UAEnbIxOQ7uoE14YG%2FkXrHMi8NClfvfW7mOoz1QJdg%2BScyucCNbTD%2Bf%2F8X4n4uy4hPeeH6%2Bv5oX7mvGQiPxWcYUSeUXBmNz5fPeRPhgl%2FQS3EVCKDKxj4J91VMf%2FLIdhUlsHHt6SAbmt%2FfNtr921v6tcOfz1afLrmxeBCOLbeTth8iEB9rqU0R5iK0w4OMNlgqBrE%2Fk%2B8E7EYwTRaXb1ff%2FudOqAR0Bk81wFU5Uz1RMG3occdnHMn0kuRgOVbzzGJgSWde4XygGCFQh2Pvpzvws1RYomVJC83I0h3g70YuaCfgOnGShykvQAWzlyonwJdy6pM3I%2BEREQhzfMiEH26TFk7s9HIzkjrAT%2BgaNASpDBMl1dVoYAWsCB1%2BzVhi8DbmuYBQdnRGVL2KgmOSYujRPLO2bFxB4lFgGOX6tzFJbWqvWZCAFwlVCfDG7CXAQDbbm5YerTv89r4uVe2l1wmDBfvjNaiQJhsyA5cO5AUc9U8eRPHqRRhkTYwp87KyQY6pgEU9k9D096KG7MaxZAL0gD1lpZOz7PkP8dUIVJ5uMkIqgA27c95lBYiMDtj2wYS8lKcHW%2FVIxz4uD7Bu5%2BT%2FuSk25VIYMI27HyyUI%2Bcl8BAIftyIb9DjsR3Wd7a7ENUB33HNS%2FLxFjFLJPsZiMkHgxtogIpPxbCOL1jYkFU4BdRv3ge2iX8yAkBVWJZqj75M1SBYlGCtIwVSj3GJwSsHBPoJeLzmJ8F&X-Amz-Signature=17bd49fb43970ef97119add4e4591b228cd1a48e3c7efa884f844a6df60052cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
