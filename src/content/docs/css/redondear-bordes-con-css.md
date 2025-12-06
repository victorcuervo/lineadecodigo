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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK5UL3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQcc9e3XcC9AYjKvsMKZJQsJANFg4HwW5vlCtc67vlvAiB%2FGIqAAcyYjwpHr%2Bzn8VatASG4ew11BRitXsWG%2B11I%2Bir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbGbJSEt7UeE64a5DKtwDDcY1yRBACnlQcyndeAHjS9%2F1Y%2Bx3FU%2FniEHRJngZ8%2FHp3GUK7kJheYCg8KC3pEJrG4GAgbK6a7MbtzPiuXwApFI%2BDNnkHmWGFSfqdkG%2BI22%2F0tcTx96EE1p8PkYUF8qaNsn5Mt5usxZeRMR4fSZkCtNxBfbTyinXcs5UuZ%2BOwVIVIj%2B%2F6i3g8kJxuc%2Fd80sogUJrnbE3HUZLJw1cTZD2vbBZUuyRNFkhUyfou056YV9AxOoeOXvrMdJH%2Fl9QZmy1xTQz7Q%2FrkYJv0i9RyOrGg4gLy14pF8pNDeTgF8jSky3OFQncqldgO59myQuFpu5HNle9ZuvfZ3TjCFra%2BEaJgHs5SQWN9gXtLWoR%2BQXRk7cWQnWSqhQkSibga6tRDWquaMmQRhzZwKNzJ6ZcTxM1gqzlyp8YlBPJdrW6k%2BeVNL%2BmtCbF76wPQ8qbmAQXddUnOJ4V5hRtksi655pM3zkuzIH%2BcukBTZQLMcirrta1qM3MO0PFipfGPcfbDSFeet3ptlo0ySHyDYe1ZClP9rwsTJU21rc4SK%2FC1xcWY5ScMmCBbiGnMBEtjtPBJpVqIhmvvJXCtH%2BLPsVSxn8QN59gtmwI8ea%2BKcyW8wahHe%2BzZVjevYxgXmq9EY%2BitbgwhKfQyQY6pgHwcqTR17%2BhMTSCkv8YDwf6a0nkRtbY%2Fi4SHKWzTYYtEHbeRPuF%2FINUe4glGgCC5%2Fhhqk54MzDaD2Rj3b9ZJ18M3Qll5Mn%2FcejjMzcgTHKLvR1mQNHd4EgvL9sNsqM3ZK8kz%2F%2BTFOsb4AGGvDnN2wrNcagOuuCM3y9uHv8Ma4Po267ReJOhAq34jfcvS%2B8fbauJrnVeE5FyWD3tZlYjFgYIPyy6hvrx&X-Amz-Signature=5341d6a203ef759dbc9b3f5ccb98e92c79b9010d214bdea38231e58b32ccab62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK5UL3S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQcc9e3XcC9AYjKvsMKZJQsJANFg4HwW5vlCtc67vlvAiB%2FGIqAAcyYjwpHr%2Bzn8VatASG4ew11BRitXsWG%2B11I%2Bir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbGbJSEt7UeE64a5DKtwDDcY1yRBACnlQcyndeAHjS9%2F1Y%2Bx3FU%2FniEHRJngZ8%2FHp3GUK7kJheYCg8KC3pEJrG4GAgbK6a7MbtzPiuXwApFI%2BDNnkHmWGFSfqdkG%2BI22%2F0tcTx96EE1p8PkYUF8qaNsn5Mt5usxZeRMR4fSZkCtNxBfbTyinXcs5UuZ%2BOwVIVIj%2B%2F6i3g8kJxuc%2Fd80sogUJrnbE3HUZLJw1cTZD2vbBZUuyRNFkhUyfou056YV9AxOoeOXvrMdJH%2Fl9QZmy1xTQz7Q%2FrkYJv0i9RyOrGg4gLy14pF8pNDeTgF8jSky3OFQncqldgO59myQuFpu5HNle9ZuvfZ3TjCFra%2BEaJgHs5SQWN9gXtLWoR%2BQXRk7cWQnWSqhQkSibga6tRDWquaMmQRhzZwKNzJ6ZcTxM1gqzlyp8YlBPJdrW6k%2BeVNL%2BmtCbF76wPQ8qbmAQXddUnOJ4V5hRtksi655pM3zkuzIH%2BcukBTZQLMcirrta1qM3MO0PFipfGPcfbDSFeet3ptlo0ySHyDYe1ZClP9rwsTJU21rc4SK%2FC1xcWY5ScMmCBbiGnMBEtjtPBJpVqIhmvvJXCtH%2BLPsVSxn8QN59gtmwI8ea%2BKcyW8wahHe%2BzZVjevYxgXmq9EY%2BitbgwhKfQyQY6pgHwcqTR17%2BhMTSCkv8YDwf6a0nkRtbY%2Fi4SHKWzTYYtEHbeRPuF%2FINUe4glGgCC5%2Fhhqk54MzDaD2Rj3b9ZJ18M3Qll5Mn%2FcejjMzcgTHKLvR1mQNHd4EgvL9sNsqM3ZK8kz%2F%2BTFOsb4AGGvDnN2wrNcagOuuCM3y9uHv8Ma4Po267ReJOhAq34jfcvS%2B8fbauJrnVeE5FyWD3tZlYjFgYIPyy6hvrx&X-Amz-Signature=321d14ad4ce11ea4bbfee37305fdf45de76ad45fa161723570e060a543d86afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
