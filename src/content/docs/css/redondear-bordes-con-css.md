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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHY632C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM2U1k1YDAEoMwx3xrA97WMtARlwE616uK2v5PwhJXrAiASvZU06jdPrx8ChPw9D7Azl7lH3ZkCxgpYrnwPcHG0Vyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzLBbyyTZAsLYuQnHKtwDsABsZoPwwU7OGnPJUd7gtRurXAJJ8ACIBwQFvdru6YlsY%2B56B6sRkgabue7z9Tkl0Af8G0iHnxQMnhFPYExc0uJ6aGbcNThqpCFl3vQblNAiEzWiF807eCFYgV4jgQCVcfjudnhdlFo9O%2BhudsquFo0mpvDO4cGa%2BEh7V4oN3gl%2BZmA80zVmNZs5k2goRcDl1KxL8Lnk3jj7cVELCzImIAqxJHyhWAGH4KyZTgP0102DrP7L8%2BNYi0z2oAdaX3quMeTom6hRNtN2JxCbx7nAhMKSuvadrijuNoad%2F%2FDp9%2BEvs6yOHufv4xwEpenxCytkLsV1uY5bycU%2BkcHFS2U9FVzUMd1NIX7EyUZWzGcgte%2BgLmQmWSlzrb4us%2BPPHiaRNMbqSZC3Mymps%2Ba98fXd8DziuffVoDgoNRlAZPibVpCzB2niCSK0d0EYYwfE8yTdrIXaRIApC6Ctj700%2BysF4eV59LWiv7ogku5wNdOMe0VNo3QMtRXFEdsBTTkseQ8JT7vmKT0MnYaYM8pcEXM5vwLvC5XUF24GO0qYOO8ATOU7RCyapvs6pbKj2UEEJ2%2F%2F0F3kRSpCLcu7L%2FMXyuTZwAAG4KCzcI7cKx9%2ByfpOiEg5Zx0EenexEPZmgo8wxsnLyQY6pgGC0iEaSX1pCZC6W9uBAZ2QlALcNAEusTI3gyZ%2F3Iv8DgdTSLAheyhfthoz7KOg6q84qMNQbZ0IRplsk0kg93UfItdIkCqRxYupes64MAMFvny0Ahj1Mj7GpyP3dKAXWht5goRxQZIgkb1ZQtj9xU4Cq7TuTMvCrQ54e%2FJ%2FyKpkm2u0uUEcEU4coWfXlQVs9enMEeYdocNqVABw%2BJqiXttmcIoKu3MP&X-Amz-Signature=20bf68e750fba5ef42703466ee050f79f2552ad0735f5be03a32a2517d5f6c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHY632C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM2U1k1YDAEoMwx3xrA97WMtARlwE616uK2v5PwhJXrAiASvZU06jdPrx8ChPw9D7Azl7lH3ZkCxgpYrnwPcHG0Vyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzLBbyyTZAsLYuQnHKtwDsABsZoPwwU7OGnPJUd7gtRurXAJJ8ACIBwQFvdru6YlsY%2B56B6sRkgabue7z9Tkl0Af8G0iHnxQMnhFPYExc0uJ6aGbcNThqpCFl3vQblNAiEzWiF807eCFYgV4jgQCVcfjudnhdlFo9O%2BhudsquFo0mpvDO4cGa%2BEh7V4oN3gl%2BZmA80zVmNZs5k2goRcDl1KxL8Lnk3jj7cVELCzImIAqxJHyhWAGH4KyZTgP0102DrP7L8%2BNYi0z2oAdaX3quMeTom6hRNtN2JxCbx7nAhMKSuvadrijuNoad%2F%2FDp9%2BEvs6yOHufv4xwEpenxCytkLsV1uY5bycU%2BkcHFS2U9FVzUMd1NIX7EyUZWzGcgte%2BgLmQmWSlzrb4us%2BPPHiaRNMbqSZC3Mymps%2Ba98fXd8DziuffVoDgoNRlAZPibVpCzB2niCSK0d0EYYwfE8yTdrIXaRIApC6Ctj700%2BysF4eV59LWiv7ogku5wNdOMe0VNo3QMtRXFEdsBTTkseQ8JT7vmKT0MnYaYM8pcEXM5vwLvC5XUF24GO0qYOO8ATOU7RCyapvs6pbKj2UEEJ2%2F%2F0F3kRSpCLcu7L%2FMXyuTZwAAG4KCzcI7cKx9%2ByfpOiEg5Zx0EenexEPZmgo8wxsnLyQY6pgGC0iEaSX1pCZC6W9uBAZ2QlALcNAEusTI3gyZ%2F3Iv8DgdTSLAheyhfthoz7KOg6q84qMNQbZ0IRplsk0kg93UfItdIkCqRxYupes64MAMFvny0Ahj1Mj7GpyP3dKAXWht5goRxQZIgkb1ZQtj9xU4Cq7TuTMvCrQ54e%2FJ%2FyKpkm2u0uUEcEU4coWfXlQVs9enMEeYdocNqVABw%2BJqiXttmcIoKu3MP&X-Amz-Signature=2b6453ac8beefccb2de80b07be46a4c4ee73e43f96153ac67b8c5a2d4595fa40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
