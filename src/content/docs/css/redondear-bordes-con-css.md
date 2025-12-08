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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFS454H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICM5J%2B26dQYu4FQGXlnI9gBQjxu8jGtW8XAvceVIvR7kAiAHF8zT2%2BmgQj2mWed%2BIgghHmG5lDOiF4TOU3OXQjZeqCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbIY2WAcJXOine0iJKtwDMVHIaJ2zipiyba3sWFO14j7vJf63VYBDuikUQuKueTa8i9c09b8sSoo1mLTo5mTZeDgmHPqzY7ihtNOM%2FF3a6ZkbbeWqAbk1BdHF0cmkEAD50Ae4m%2Fv6TSYsvsknUpuPRPjpmzfQcIseUB8IPTOrpPZZwhDSdWRzxi30RTS226RgLybhI9vevOJT0%2FMYvgAsQB1w17udi3WfyusLlV0ws0SMSbeiLjNfgXd6prgoRWubTlpiC8qg9Do2tPMEr9cAVsOxF8b5ty%2Bm9aooOvsuBx2j%2BAXhBNynaNtYaWX24vCgsCoiVOdvBjCOHY3UuypDdpGr0G7JrpelX0C1sScW5kZbD2C6lOaAcDN4BGwI1ZOieljbgluKqY3fiXOGBZwD4UWZ%2F75eP6S8VGn75ALubch13K%2ByUNMvAkF0H9iFTyQnLKQMw9uthe3jeaic7EQlRrRDGMK9%2BGhkxKAcC6eay06xm83r7k2z7fnLhqaUrUu54IvHYko8IhPjBtbB%2BXVWzWDZOxCYFirsP7vn8wL6pPT6KEBkoZ8M%2FsFi9mChMI%2FtVVaXynE2G4hBSr9zfSgo6t%2FEFV6VwGyvMDeG49GV3D6BNe6GIB%2F92SZ1BqZGKNnADulucjF76NxAyLkw%2Ff%2FcyQY6pgFUflc3y07X4aZnRCZHXTyH8AheTBXcIM41UIAZ7rRmTOMsKn33wxAgTSGHKZ2meIInizsBu7NYyhTazLNlc%2BgEE4YWz1Z%2FBooOlPFnhW1MvJbhDW9uvTUuoUiIFKP1e5ZYA1s87VieCsFjl7FByJB2KGzFK0%2BNtGBfrAAiwZeuBihYnLWb%2BcyiOBv%2B%2F6pAAID4AX4U5qbaysHdjoVLxRb9yi2%2BbvpR&X-Amz-Signature=793d4e6774bb9679ff91fcb5fc250750010b12d657770f17f279c1b888c44951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFS454H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICM5J%2B26dQYu4FQGXlnI9gBQjxu8jGtW8XAvceVIvR7kAiAHF8zT2%2BmgQj2mWed%2BIgghHmG5lDOiF4TOU3OXQjZeqCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbIY2WAcJXOine0iJKtwDMVHIaJ2zipiyba3sWFO14j7vJf63VYBDuikUQuKueTa8i9c09b8sSoo1mLTo5mTZeDgmHPqzY7ihtNOM%2FF3a6ZkbbeWqAbk1BdHF0cmkEAD50Ae4m%2Fv6TSYsvsknUpuPRPjpmzfQcIseUB8IPTOrpPZZwhDSdWRzxi30RTS226RgLybhI9vevOJT0%2FMYvgAsQB1w17udi3WfyusLlV0ws0SMSbeiLjNfgXd6prgoRWubTlpiC8qg9Do2tPMEr9cAVsOxF8b5ty%2Bm9aooOvsuBx2j%2BAXhBNynaNtYaWX24vCgsCoiVOdvBjCOHY3UuypDdpGr0G7JrpelX0C1sScW5kZbD2C6lOaAcDN4BGwI1ZOieljbgluKqY3fiXOGBZwD4UWZ%2F75eP6S8VGn75ALubch13K%2ByUNMvAkF0H9iFTyQnLKQMw9uthe3jeaic7EQlRrRDGMK9%2BGhkxKAcC6eay06xm83r7k2z7fnLhqaUrUu54IvHYko8IhPjBtbB%2BXVWzWDZOxCYFirsP7vn8wL6pPT6KEBkoZ8M%2FsFi9mChMI%2FtVVaXynE2G4hBSr9zfSgo6t%2FEFV6VwGyvMDeG49GV3D6BNe6GIB%2F92SZ1BqZGKNnADulucjF76NxAyLkw%2Ff%2FcyQY6pgFUflc3y07X4aZnRCZHXTyH8AheTBXcIM41UIAZ7rRmTOMsKn33wxAgTSGHKZ2meIInizsBu7NYyhTazLNlc%2BgEE4YWz1Z%2FBooOlPFnhW1MvJbhDW9uvTUuoUiIFKP1e5ZYA1s87VieCsFjl7FByJB2KGzFK0%2BNtGBfrAAiwZeuBihYnLWb%2BcyiOBv%2B%2F6pAAID4AX4U5qbaysHdjoVLxRb9yi2%2BbvpR&X-Amz-Signature=144e28f5edfde97525540bdd928cbd826176a6df201db7225350ed878de35da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
