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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVDST6V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPLxxgtYpUYnup%2BYDNhXf%2BJvQr2dw5E4pGnZPiCRfvpAiB%2BD6ykbFW9FFhuhBb7dgc0w6tPFms5Nz7gJbYLjAdzviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgPBkQ5mozKeVst%2FKtwDJ3pivP9J8BlZsLKgWscBFPh9XdG00%2Fckc7OW8RnB9tWPE7B4UzK0LiAgIr9s%2Fwo%2Bxnl4b1wFvD61HhdCoaj%2B%2F3YVRE%2Bsjn65Bfl0qmP%2B%2Fg7IUFGUajPgYOSy7adPzICuqRND6QkXa1fJmVzg4TIMMtCzSYRQmKs%2BgGQIcc9lUwR8XE2fnlpYsX4WJnyuJ7W%2FnNIxTA68oxvudx6jb%2B8oS8c9cvo5COIQCkL9CtxMRY6yVPQiThWEnKRyGtCjaYzJhDLC%2F3pBX4uK%2BdYlgmHjh73y5Ks7jXnqAjamxoi8v7OydhvXhJtIbNoF%2BGSD3PPXYQRiqI2NO9YkV7PMN8MQ8h1GBl8ntpWezvsGoeyQnJ%2BNBCdbDX9KckIED1Z8mcqIp%2B%2BbcxMsnKRWdvvQYUDpUGyIP0xcpuAUy9G%2Bq%2BAfK8eMJF%2FuLwGe%2Bbu8ZZMxTCgBWIxxTQZZOGzgWdqJ4nfKuadNKZSL5RxUCUbZmkF0m5fElB8IvOwDZRUNwhA%2B81tT8dGKM4RFqkkV4xA1U90yyACq7wNWWycW6naYwqGE7ZZN%2F%2BVJyoxpFo7hrzK9Y9r9Pgc5uhW8pOG%2FdLN13IsdggzPqCKCwkrkj8nTfso%2BBovtZ138NOCdctj74hgwwJDeyQY6pgE3bF2fmNDtwRIAzklSim7VuWpIDbkif1COhJC%2BVAPH47sdjuvWC9uot1OnwekvbGWs4OLFTqIVmtmQzbw%2FDrijZk9Jm0tQf2KlrX%2BEjSJDuf%2BMR2lkFmJAmlM9e3IUmol6fjSdP63gnNxPw7URmATTiNnwMSZbJEqBl%2FPicFQq3WLGl8hLphQVfy%2BDm3oDr75GquCN9kQeWy1pxcmz0TdSjDBTSmzj&X-Amz-Signature=4852e0895d629b9a560586758d24efaacbab1310c7d2373c034a178f983e9d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVDST6V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPLxxgtYpUYnup%2BYDNhXf%2BJvQr2dw5E4pGnZPiCRfvpAiB%2BD6ykbFW9FFhuhBb7dgc0w6tPFms5Nz7gJbYLjAdzviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgPBkQ5mozKeVst%2FKtwDJ3pivP9J8BlZsLKgWscBFPh9XdG00%2Fckc7OW8RnB9tWPE7B4UzK0LiAgIr9s%2Fwo%2Bxnl4b1wFvD61HhdCoaj%2B%2F3YVRE%2Bsjn65Bfl0qmP%2B%2Fg7IUFGUajPgYOSy7adPzICuqRND6QkXa1fJmVzg4TIMMtCzSYRQmKs%2BgGQIcc9lUwR8XE2fnlpYsX4WJnyuJ7W%2FnNIxTA68oxvudx6jb%2B8oS8c9cvo5COIQCkL9CtxMRY6yVPQiThWEnKRyGtCjaYzJhDLC%2F3pBX4uK%2BdYlgmHjh73y5Ks7jXnqAjamxoi8v7OydhvXhJtIbNoF%2BGSD3PPXYQRiqI2NO9YkV7PMN8MQ8h1GBl8ntpWezvsGoeyQnJ%2BNBCdbDX9KckIED1Z8mcqIp%2B%2BbcxMsnKRWdvvQYUDpUGyIP0xcpuAUy9G%2Bq%2BAfK8eMJF%2FuLwGe%2Bbu8ZZMxTCgBWIxxTQZZOGzgWdqJ4nfKuadNKZSL5RxUCUbZmkF0m5fElB8IvOwDZRUNwhA%2B81tT8dGKM4RFqkkV4xA1U90yyACq7wNWWycW6naYwqGE7ZZN%2F%2BVJyoxpFo7hrzK9Y9r9Pgc5uhW8pOG%2FdLN13IsdggzPqCKCwkrkj8nTfso%2BBovtZ138NOCdctj74hgwwJDeyQY6pgE3bF2fmNDtwRIAzklSim7VuWpIDbkif1COhJC%2BVAPH47sdjuvWC9uot1OnwekvbGWs4OLFTqIVmtmQzbw%2FDrijZk9Jm0tQf2KlrX%2BEjSJDuf%2BMR2lkFmJAmlM9e3IUmol6fjSdP63gnNxPw7URmATTiNnwMSZbJEqBl%2FPicFQq3WLGl8hLphQVfy%2BDm3oDr75GquCN9kQeWy1pxcmz0TdSjDBTSmzj&X-Amz-Signature=5277d1814344caa1fc34a98802e7641e3cf5d85478c3a2f936d5fa4036314076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
