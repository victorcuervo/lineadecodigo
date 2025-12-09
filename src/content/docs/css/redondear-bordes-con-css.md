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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6J6J3MM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn6HpZJoto4gRrsZy8dDsfxSYJE%2FSu5gtXJJQW4P8%2FAiAbTL8UdvYHQdTy71%2BEo3IA2Xc%2BzBCboHXvD%2FW%2Fo7yr0yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrmFZVA5TFY%2BJg4aSKtwDE%2FkOFVpBvIohAd3A9FtZZ9wiAgqd4KUG%2BoXYbkyawmPT%2BK41%2Fo%2FUPdtytjD7ReS3ZcX75JYoXm8SGLOZ8MyW1ptQo7V4ZeQ8B0FPV58DLB%2BPvFAp%2FNyn2rdGqPu4Fi1F3%2FMrQdMX9jkmmKz8p%2FrcofxC8p363HjjqMAlGtD8kJOVSME26K9K6BUcaLfl5lFQKqlnold6YYpL72atqhrfdDkR3%2BZ01QX%2B5JsUnmgI203mi6lrU8gAkWdSZHbRKL2Pppc970o9AoRe4A%2BoPQ%2BjUsoV55rUaJ3mel%2BW7E2FDTMMIuJaZF2wzmB%2BiHjhgso%2FIj7spWWZvxVd815mikQk%2B%2F2zVPAkXBnE2hitjBD%2B5bLh4sSiCzLByAI%2FaJ9VCDEDJlx%2FStciVqPn1fFhUz3VgvwMMsSDkWAIvD4Emt7tO32XTIURsC09uv%2FLyC7F3DXy%2F7033okQQNwnDe%2FWptZ2A8dq561xem36WB6RMZnQNm8%2FLTUAz1wHq%2FhT%2Bht6ukIUIHG0Vge6ckOxRUBZhVGib%2BESHWVs2l63YEs9m6hRb%2Fjk%2Bvw%2F8ftZDdW4914WlGPqDz4BaHeVQbyKCnx3n%2B%2Fi2PN5Rn6v9G4gCOmrl2EjxC%2Bx2PPnTmkok3AIVmAwrMTfyQY6pgGiOUAb8qDLf6isnq%2BXAS%2FjdWWTe5s5uHWYu%2B%2BtAEjs1Ln9sYMpIvB%2By3POvgivn6Ekl6RBmvsR935sq%2BnMoelaBXQt5sFDSuR9o8pJvMysfhrwZAzegKWHM4%2FgRh4ECCRxIzI3FvChEiT64cOD0ofv4ERNicF2rJVolbRtRmvw3s6HVUOiw85zmgL2h8UQgqocYzzBul42K38Oy1I%2BXIgzAT%2BkArw4&X-Amz-Signature=76c104bf53b99e826fd20d38cb86b5034828e21d113d6581c9721399f6a45de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6J6J3MM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn6HpZJoto4gRrsZy8dDsfxSYJE%2FSu5gtXJJQW4P8%2FAiAbTL8UdvYHQdTy71%2BEo3IA2Xc%2BzBCboHXvD%2FW%2Fo7yr0yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrmFZVA5TFY%2BJg4aSKtwDE%2FkOFVpBvIohAd3A9FtZZ9wiAgqd4KUG%2BoXYbkyawmPT%2BK41%2Fo%2FUPdtytjD7ReS3ZcX75JYoXm8SGLOZ8MyW1ptQo7V4ZeQ8B0FPV58DLB%2BPvFAp%2FNyn2rdGqPu4Fi1F3%2FMrQdMX9jkmmKz8p%2FrcofxC8p363HjjqMAlGtD8kJOVSME26K9K6BUcaLfl5lFQKqlnold6YYpL72atqhrfdDkR3%2BZ01QX%2B5JsUnmgI203mi6lrU8gAkWdSZHbRKL2Pppc970o9AoRe4A%2BoPQ%2BjUsoV55rUaJ3mel%2BW7E2FDTMMIuJaZF2wzmB%2BiHjhgso%2FIj7spWWZvxVd815mikQk%2B%2F2zVPAkXBnE2hitjBD%2B5bLh4sSiCzLByAI%2FaJ9VCDEDJlx%2FStciVqPn1fFhUz3VgvwMMsSDkWAIvD4Emt7tO32XTIURsC09uv%2FLyC7F3DXy%2F7033okQQNwnDe%2FWptZ2A8dq561xem36WB6RMZnQNm8%2FLTUAz1wHq%2FhT%2Bht6ukIUIHG0Vge6ckOxRUBZhVGib%2BESHWVs2l63YEs9m6hRb%2Fjk%2Bvw%2F8ftZDdW4914WlGPqDz4BaHeVQbyKCnx3n%2B%2Fi2PN5Rn6v9G4gCOmrl2EjxC%2Bx2PPnTmkok3AIVmAwrMTfyQY6pgGiOUAb8qDLf6isnq%2BXAS%2FjdWWTe5s5uHWYu%2B%2BtAEjs1Ln9sYMpIvB%2By3POvgivn6Ekl6RBmvsR935sq%2BnMoelaBXQt5sFDSuR9o8pJvMysfhrwZAzegKWHM4%2FgRh4ECCRxIzI3FvChEiT64cOD0ofv4ERNicF2rJVolbRtRmvw3s6HVUOiw85zmgL2h8UQgqocYzzBul42K38Oy1I%2BXIgzAT%2BkArw4&X-Amz-Signature=89ff823953e0714142fc50179675b3b541924c4ccb78e54d21f5b31c610e17ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
