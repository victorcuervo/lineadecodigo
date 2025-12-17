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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ3DTTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV8sTgVIewzxUJRL%2FLGDBUXDCuKx74eIiBVprp8RmedQIgGufbhp7%2FV1hLPkXEl1G0rnJUF1oBNtj18bGUyD8SB4sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIgb3CxRteJ49AzuMircA9wayvu3eUQRBvrvyyG2T3L4qawkkOENDKU2TO4r%2B1nl4%2FoWRKT0Fa%2F%2F1Lmx96vm%2FW%2F7izxQTjXXRJ5xwBZeMUJwShXmvJy9W4rXkUA3%2BneaQiw1JANs1Hj2of%2BifI43lP%2FtcZ3CRRgMB8CyxUMD1MuRgOAwER409NWi2QB6%2FZRxe%2Fej9EDjvGF4NHRDF6brgXw7kgu7t4UYIklkYbAijeonIk2KXrUYO05q5hMaxvzfOs%2BGNhDLupvInkegBo0J%2BSXV2czl8qXnXsHpv4jz5ubphYpbgvPGNc5IOVpxXZQxcTwEfMhKRPleshMOgOKFY4%2Fh7vpjgs6MUY2sHyHudxKGi3Rs0negH4y4f4Fg5oZ7%2BtQ10ROo5piXU%2BWtOkBG0EY4VChOR7FBb56f3zJ1%2B%2FicAMZTivnkjspZ2ocDCo8XIA890c4UdwBw%2BBJMA%2F%2FFficRaFzhZgR05b35Ziy7bC96fgLq2jAxPPDk0rGVaWDweCJwS03PU2n%2FspGgRakWh4c9lnKwjX7BLyNfeHPkh3v2E%2FNxlWi62xQAb9yB926G3EV2WvTSxPhp4Ql%2Bb2I1NAkMlBp1j7Ocpxwwt5eS2HChOxeXr1RsazDVxSX%2F0kUcO8U%2Fqux17kT7myalMPTeh8oGOqUBBcVigrpL%2B8IrL%2BWJmoEmUo4J%2B9Ad3jcqkqxXwGViE0axrPwujU4e5px7dInpbdMRsU%2BQif8YAT4V8UnyYHwf3uvgmFDCcriBVVOy3%2B5aFiJKKfh7e%2BmzadmxhEVaFsIzAJ24dI3C8fC%2FXmc3SUuAxWYcxnZjXvjxcA%2FHiZqhJBdx2L30muXTbm3yjVhgPa1jCthRGNwap4wRyWH1bv79VdJwMunV&X-Amz-Signature=92c91d2deb8bcf4b193b960b73437dc579e24fbd5b122ff8d36b00fd0346ea96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ3DTTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV8sTgVIewzxUJRL%2FLGDBUXDCuKx74eIiBVprp8RmedQIgGufbhp7%2FV1hLPkXEl1G0rnJUF1oBNtj18bGUyD8SB4sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIgb3CxRteJ49AzuMircA9wayvu3eUQRBvrvyyG2T3L4qawkkOENDKU2TO4r%2B1nl4%2FoWRKT0Fa%2F%2F1Lmx96vm%2FW%2F7izxQTjXXRJ5xwBZeMUJwShXmvJy9W4rXkUA3%2BneaQiw1JANs1Hj2of%2BifI43lP%2FtcZ3CRRgMB8CyxUMD1MuRgOAwER409NWi2QB6%2FZRxe%2Fej9EDjvGF4NHRDF6brgXw7kgu7t4UYIklkYbAijeonIk2KXrUYO05q5hMaxvzfOs%2BGNhDLupvInkegBo0J%2BSXV2czl8qXnXsHpv4jz5ubphYpbgvPGNc5IOVpxXZQxcTwEfMhKRPleshMOgOKFY4%2Fh7vpjgs6MUY2sHyHudxKGi3Rs0negH4y4f4Fg5oZ7%2BtQ10ROo5piXU%2BWtOkBG0EY4VChOR7FBb56f3zJ1%2B%2FicAMZTivnkjspZ2ocDCo8XIA890c4UdwBw%2BBJMA%2F%2FFficRaFzhZgR05b35Ziy7bC96fgLq2jAxPPDk0rGVaWDweCJwS03PU2n%2FspGgRakWh4c9lnKwjX7BLyNfeHPkh3v2E%2FNxlWi62xQAb9yB926G3EV2WvTSxPhp4Ql%2Bb2I1NAkMlBp1j7Ocpxwwt5eS2HChOxeXr1RsazDVxSX%2F0kUcO8U%2Fqux17kT7myalMPTeh8oGOqUBBcVigrpL%2B8IrL%2BWJmoEmUo4J%2B9Ad3jcqkqxXwGViE0axrPwujU4e5px7dInpbdMRsU%2BQif8YAT4V8UnyYHwf3uvgmFDCcriBVVOy3%2B5aFiJKKfh7e%2BmzadmxhEVaFsIzAJ24dI3C8fC%2FXmc3SUuAxWYcxnZjXvjxcA%2FHiZqhJBdx2L30muXTbm3yjVhgPa1jCthRGNwap4wRyWH1bv79VdJwMunV&X-Amz-Signature=de8dba426b4b0a6eba099f2a685bb7fcbe8293975a6a98c82d9ed74ee4eb2f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
