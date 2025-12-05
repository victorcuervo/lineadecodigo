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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEY6P32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV5c%2BIKfir3JZEiJWmUdrqNNM3osnINt13b6RnrkgW%2FAiEAspoSV90r%2FHqbnB9p%2FwmS3ECyL8Vy1LOeGZ6nM9ktCl4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEMs0f%2BcROXY3kpntSrcA4d5XiuvHhgn1RpMhawdEPLL%2Bwl62NghMwpesAv67htXIU0gULGiXfvPIsuj4FcIawEN4YXjzGwyWULS%2FlTlavaax64k4Aah1hag6JuaNjT81rMp4TWRZ9TCv2fhouzOuyVFdTURRTy2YZETquVOtAqKlxV5B%2Bm9PxajojeuEqaA4kfB4i1NQKzT%2BL%2Bv%2FjxzZOqHVloW2IUD%2F%2FlJvr%2BrnxeOdWKjRPmqN4GrPgENxo763apfNtD624eYF8aJy9uoR8sLhx0KbV3JpMXV3%2Bi4AI3kUAR4DSnzsjMcu0ubDcjDE%2Fl68RQDAzaqNzQ%2BLIwNNtZLR5Cl%2Bp7grwF8OFXJft4KFtKxwvkYqOCMIzXvYGWicBFinBoL6C0YTQca1VW0xD0eMB8mra9tIcncKfy0uuU5%2FcS2zOb0iQ9YDmHFHcoi3ZUUXSX2G33pnHYsGG3DEgDrLnfbvudVsZAAE9nxWNURKUdhZUqcLI%2BVOdvsPekKOXpmLASGEwTll3TMtCpxZTWUVYXuDBnR00j3X6%2B97xiinnehX9IdfzYVSWcelAjN9LfhXsC9vh5oHa6FxahZwNjATjneaLVpGUht%2BELjAMZ9YoTihC0KTkDaBbk8FMIENxg57xXnI2sthcDIMOOtyckGOqUB06q5E5Vh%2BUmaJGtSy8PAS7NHmDmEToXPu4iP083HDxOkfe%2FZN7%2Fa4gQdE7wauZ62FE2wKITJqAvw8YaENlbvmxUWE9IV6jDRQb4kSlHeT0PZJstRUb%2FgHTTrYKg3Q8RGXY2uIGBvh8nf0Mn47%2FPP5F4Fo2XJE19hriCEHE8FhaTYjzou%2BIpVjG86pXtuXLZnewYF75KyUGsw5KDDIl37gf4M81Bh&X-Amz-Signature=db50325b4aea41c3be14a700a037e3fd03354d9b6667505329b769c5f5446b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEY6P32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV5c%2BIKfir3JZEiJWmUdrqNNM3osnINt13b6RnrkgW%2FAiEAspoSV90r%2FHqbnB9p%2FwmS3ECyL8Vy1LOeGZ6nM9ktCl4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEMs0f%2BcROXY3kpntSrcA4d5XiuvHhgn1RpMhawdEPLL%2Bwl62NghMwpesAv67htXIU0gULGiXfvPIsuj4FcIawEN4YXjzGwyWULS%2FlTlavaax64k4Aah1hag6JuaNjT81rMp4TWRZ9TCv2fhouzOuyVFdTURRTy2YZETquVOtAqKlxV5B%2Bm9PxajojeuEqaA4kfB4i1NQKzT%2BL%2Bv%2FjxzZOqHVloW2IUD%2F%2FlJvr%2BrnxeOdWKjRPmqN4GrPgENxo763apfNtD624eYF8aJy9uoR8sLhx0KbV3JpMXV3%2Bi4AI3kUAR4DSnzsjMcu0ubDcjDE%2Fl68RQDAzaqNzQ%2BLIwNNtZLR5Cl%2Bp7grwF8OFXJft4KFtKxwvkYqOCMIzXvYGWicBFinBoL6C0YTQca1VW0xD0eMB8mra9tIcncKfy0uuU5%2FcS2zOb0iQ9YDmHFHcoi3ZUUXSX2G33pnHYsGG3DEgDrLnfbvudVsZAAE9nxWNURKUdhZUqcLI%2BVOdvsPekKOXpmLASGEwTll3TMtCpxZTWUVYXuDBnR00j3X6%2B97xiinnehX9IdfzYVSWcelAjN9LfhXsC9vh5oHa6FxahZwNjATjneaLVpGUht%2BELjAMZ9YoTihC0KTkDaBbk8FMIENxg57xXnI2sthcDIMOOtyckGOqUB06q5E5Vh%2BUmaJGtSy8PAS7NHmDmEToXPu4iP083HDxOkfe%2FZN7%2Fa4gQdE7wauZ62FE2wKITJqAvw8YaENlbvmxUWE9IV6jDRQb4kSlHeT0PZJstRUb%2FgHTTrYKg3Q8RGXY2uIGBvh8nf0Mn47%2FPP5F4Fo2XJE19hriCEHE8FhaTYjzou%2BIpVjG86pXtuXLZnewYF75KyUGsw5KDDIl37gf4M81Bh&X-Amz-Signature=6f39ba506e86550c30e0c120bda9e58932ad725222dbb7f8088e8f5a229ea3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
