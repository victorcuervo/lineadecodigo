---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BXWTB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl%2FfwtB54kJvZu1vByLuIIypWGygeGiQlTv36OQaDzuAiBbqmLrNayNgr5mArnE40xHRFtL57C3QsguySP%2B%2BH2mJSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM1XiH97rDir7%2Fm3V4KtwDvmgSwyLE4myCjCxb7VrIxpVskwzL8W52vownajQ%2BfJMc1sjapJOTAFw0so6YNgcBwGDC9ImWoHLa3dYteT2nNsqh94Q63YTya3nH5Wq%2BXQVw1205TqrIAZkBefSfqgrwEI4JhZQcfA1tpdEm9LhoR6gu7CHTQsYOjld%2Fx5siHTuzfOO25dKNAGYLSH3FUZg4vZMXX64KuL2aDXEp3CwpayaCMde30KVDSY%2BBDScVzN7HmJH2ousveZcyZ46UNYnEkz8QJqF%2FL8JCsb1yx%2BcHOoFut8CMJL%2B%2FyEl%2F4rqEH5bfg%2BKSd%2FmqaDFY%2F3Afl2Rzo8W%2Bfl0HdktkoeBbwfl1wUeFcUb5ntzGjaWddp5YA%2BdyUEIkMom917OUNj9eSRk7pRvDKA8%2BMtzqg6HOU3yfaMwoCaGpicIjG4WeMWaVBtRG%2Ft7Z2UGNdQB%2F4twqq64CchCYu5KVzN2pD1BiAjO3uZOEbJWz7ZT9ZR76Me32bXpWR17Q6kqUcI3Bqs09kbSlAilyu5qI8leRZs04XPldL7HPNVNz0g7AFsfJDVxTEFBLX7R9h9vlW0GZqlT%2Fho70bxyvxyD7B%2FiFeoENj4OuZrAWL4PeHXDKPZPsQWfmR9ilXwUTr%2Fdcq%2Bo5wdUwo%2BGKygY6pgFClmRCpdypplGMWVBZywGvdo7cqZyFkmWKWl6aiKcCHcC4ekwJjVbWvwqb0NDiqHZVDO7VV4xtFERED8ZgrDhOVX4A4kzFhzZ7GWyhZ4HJQTLrCI07%2B0k1Dlwmn%2BASGMhUNPMJhYPm7JdGNg4SoLJdofN615yPAK1HNdhVhFWDIrzeFk4rSoKhc9Ml0qQX2LHjQv3G7RaGfn4i4sp9JG3NE8Qu0n8n&X-Amz-Signature=350f9292fd78eda23e05f158245453c678ad110d6346e7520bdad8a115023614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BXWTB7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl%2FfwtB54kJvZu1vByLuIIypWGygeGiQlTv36OQaDzuAiBbqmLrNayNgr5mArnE40xHRFtL57C3QsguySP%2B%2BH2mJSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM1XiH97rDir7%2Fm3V4KtwDvmgSwyLE4myCjCxb7VrIxpVskwzL8W52vownajQ%2BfJMc1sjapJOTAFw0so6YNgcBwGDC9ImWoHLa3dYteT2nNsqh94Q63YTya3nH5Wq%2BXQVw1205TqrIAZkBefSfqgrwEI4JhZQcfA1tpdEm9LhoR6gu7CHTQsYOjld%2Fx5siHTuzfOO25dKNAGYLSH3FUZg4vZMXX64KuL2aDXEp3CwpayaCMde30KVDSY%2BBDScVzN7HmJH2ousveZcyZ46UNYnEkz8QJqF%2FL8JCsb1yx%2BcHOoFut8CMJL%2B%2FyEl%2F4rqEH5bfg%2BKSd%2FmqaDFY%2F3Afl2Rzo8W%2Bfl0HdktkoeBbwfl1wUeFcUb5ntzGjaWddp5YA%2BdyUEIkMom917OUNj9eSRk7pRvDKA8%2BMtzqg6HOU3yfaMwoCaGpicIjG4WeMWaVBtRG%2Ft7Z2UGNdQB%2F4twqq64CchCYu5KVzN2pD1BiAjO3uZOEbJWz7ZT9ZR76Me32bXpWR17Q6kqUcI3Bqs09kbSlAilyu5qI8leRZs04XPldL7HPNVNz0g7AFsfJDVxTEFBLX7R9h9vlW0GZqlT%2Fho70bxyvxyD7B%2FiFeoENj4OuZrAWL4PeHXDKPZPsQWfmR9ilXwUTr%2Fdcq%2Bo5wdUwo%2BGKygY6pgFClmRCpdypplGMWVBZywGvdo7cqZyFkmWKWl6aiKcCHcC4ekwJjVbWvwqb0NDiqHZVDO7VV4xtFERED8ZgrDhOVX4A4kzFhzZ7GWyhZ4HJQTLrCI07%2B0k1Dlwmn%2BASGMhUNPMJhYPm7JdGNg4SoLJdofN615yPAK1HNdhVhFWDIrzeFk4rSoKhc9Ml0qQX2LHjQv3G7RaGfn4i4sp9JG3NE8Qu0n8n&X-Amz-Signature=cdda4a4fd616fd5867663e3b55db4a30d49ffdb31c52c926fc43efef83a8150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
