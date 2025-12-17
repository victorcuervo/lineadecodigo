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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IECS3MR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHapuA4ACv7NGY9BOuBs2BAL08E%2BYzDR3BCUknnS5qU1AiEAqJTV%2B%2FQ%2B300Gh88kJb8VgvNKzXeRQ9a9204VgytlO8Iq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHT8y8ggQ8PpGmMW0ircA5PJKjh2OcMe0%2BgQOd6%2FbnQKfiAVUWw%2FfZNFvBBHXcKmPnqfUlbiZlFa1lkH6MGOKI8M1VLYhnOJS1p8%2BQBdl9akVbORAIp0XcwM1%2FO53FaSPDerQpUn4h5YW1XSxggouj2gQEznfM5Q3kKf4w6JrTKsWja01IrTC5V3X6JQ7uFbMNkra%2FYLIpEe4dfqp6VtjpwoWq4p6m9mnjHUcAxA56a6RBBzJoJyEFES8kQ%2BNr9LzKGDnbAGxtCd3vBBXzuS4Q0obLOLhaN%2BS%2BKzE88L37lPgLGnY0ldd0n4fWU4bxY6d2lhZ5m%2FgJzJGkjkTPvkGtBjyWRZRnH503%2FKBt4soIerxKqP362AYSX3EKJr2yPrp4ftUrB5I2kX3k3tzu2aOO348p%2B0MIwkbFkhXmMGrB2XGdezCXdCTSU4zuTjij1l6mFxYCpmoq4PjQrw5RMcZjrPochEFKIa1A3eDvWRg1gvqZsR3IIQVjzC%2Fes0Kyt%2F7bPQr4NuHrmk2vaY8%2ByPMoCtPAJi7I%2BB1snigcSD7ZNHDEYbFZNl9849MHdyscBzI%2FEF2iV1Un0cVftL3d1Bsy0Ny5YWCy5FHiZv%2B2zXiTi1eAVf5isTaKO2SWqFdTOyvmp5sSHVmqTZ4fozMKS4icoGOqUBEZYFwnMJiE3NGI7eQFPZAiigV%2FFbNCM%2BSl94xq2SBRfvGZ2eolFoAK7mMvyO5iRKXtevvcnPOC%2BbQidhTi2kxTTNPLTjjihoi%2FJYvAilPRRlLFbKdXk1t%2BhcdhxH5iovSb3Tn%2BcE7FkiijAcXTliOIORyi%2FbacvfLBFdyyK55OfFHcziB2Dfig9nKUbXmgHdw7zCSu3GjgWq8Jw912cGEuy%2FrPau&X-Amz-Signature=ce459d8365ed29517ae1653bda23662782ba4973531dfdfac3984df075fa4a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IECS3MR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHapuA4ACv7NGY9BOuBs2BAL08E%2BYzDR3BCUknnS5qU1AiEAqJTV%2B%2FQ%2B300Gh88kJb8VgvNKzXeRQ9a9204VgytlO8Iq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHT8y8ggQ8PpGmMW0ircA5PJKjh2OcMe0%2BgQOd6%2FbnQKfiAVUWw%2FfZNFvBBHXcKmPnqfUlbiZlFa1lkH6MGOKI8M1VLYhnOJS1p8%2BQBdl9akVbORAIp0XcwM1%2FO53FaSPDerQpUn4h5YW1XSxggouj2gQEznfM5Q3kKf4w6JrTKsWja01IrTC5V3X6JQ7uFbMNkra%2FYLIpEe4dfqp6VtjpwoWq4p6m9mnjHUcAxA56a6RBBzJoJyEFES8kQ%2BNr9LzKGDnbAGxtCd3vBBXzuS4Q0obLOLhaN%2BS%2BKzE88L37lPgLGnY0ldd0n4fWU4bxY6d2lhZ5m%2FgJzJGkjkTPvkGtBjyWRZRnH503%2FKBt4soIerxKqP362AYSX3EKJr2yPrp4ftUrB5I2kX3k3tzu2aOO348p%2B0MIwkbFkhXmMGrB2XGdezCXdCTSU4zuTjij1l6mFxYCpmoq4PjQrw5RMcZjrPochEFKIa1A3eDvWRg1gvqZsR3IIQVjzC%2Fes0Kyt%2F7bPQr4NuHrmk2vaY8%2ByPMoCtPAJi7I%2BB1snigcSD7ZNHDEYbFZNl9849MHdyscBzI%2FEF2iV1Un0cVftL3d1Bsy0Ny5YWCy5FHiZv%2B2zXiTi1eAVf5isTaKO2SWqFdTOyvmp5sSHVmqTZ4fozMKS4icoGOqUBEZYFwnMJiE3NGI7eQFPZAiigV%2FFbNCM%2BSl94xq2SBRfvGZ2eolFoAK7mMvyO5iRKXtevvcnPOC%2BbQidhTi2kxTTNPLTjjihoi%2FJYvAilPRRlLFbKdXk1t%2BhcdhxH5iovSb3Tn%2BcE7FkiijAcXTliOIORyi%2FbacvfLBFdyyK55OfFHcziB2Dfig9nKUbXmgHdw7zCSu3GjgWq8Jw912cGEuy%2FrPau&X-Amz-Signature=8b8d42ba041fbb6a3ea52ba2d754aec78f2a998da718d5ca8c2ae71712a87b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
