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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OLW7G2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcIQLQRkFZ36GACpmzew%2FkDHYoBjKSZFYGeBLE8lEGtQIhAMx5U2MVRrIBhxx%2BAaNmlyGo%2FNPOSMljyamudqJKave6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWHUkVJOYu8ABBk4Qq3APn%2B%2BsRtXUYwsy2eAsiEUfghw24u6sG3wtBX1KoLdYkPS7M4fLEzY96v6XC%2FGWkKwF9ZMkVqWdFYoyJwj8J%2BiNt3BHKqeDkGYrA4SDtf35P84D1O4VNMxGJIGWIRYsnJ6Y2acCPvFewHzpeLQuQmvrrgb1yMvjC%2Bc4XyuOcXGE5ClADiul3niQbGHFxl8%2FR8q%2BYaZRqP7SDNEP4zVJZ0kG6ZODGUqLj4Qto0Ivt2jgIjDFy%2BIgH3Ekp1xVfXxlb8YikbEyUwoaDg%2BlUSRFbCTk4LiE1lBot31vTvFJ99RYEevKyBK5BLTbsYyfkLtnsGGGkFD1xEdSGHxMRtwolZm8OWed4ETi7p15Zx500iYf4XRMF6%2FacbDONpmR2nrmmji0G1K2P35vX5%2FjCvlLMIOxdqfL4ZuLk0q7H5v4gOwuCZkEvs3a%2BLJCS8ewj%2BN1HSi%2Fj%2F3fYhIqpX%2BBWOtirV3SKEZT5DanyeNmLu4StwqX%2FOEgXnpnghA8mmMZBFTAYGTL6bWj3j0Gc8eZ2xgr2849PeTEeTh7vZ7yVEgpHECJtY%2Bk6nwoCAgBK%2FS0LatxxToyOlnz6Crk%2FJRxnudDF6OP%2BtmdGdxeTluOCSP887rHgZjaBkW98N%2BMgsN2f4zD2htzJBjqkAXxEz3PV6x0%2ByO%2BMpg%2BIh3nCG4lxXhyrmT8x32vCSbXJ75vx0ZCBud9BcJd3pWLHHMI7uBJgpKwLDTq1lRiGQfxGpuRiRvocWp5RjCQ0N0wHdVUCV8blR72p4%2Fw5OYx8cIpGk1fzNDU1QpEPpn77hs%2BmHwuJ%2BHnvBK0LYkuq%2FBI0tsiEYQFgcyLhT566eW%2FHl2JVfHX4KSRwNtSCdfXgMs16w0Bt&X-Amz-Signature=aee28c158a8aa84e812b8f413bfb2de9a94ffdc664acb09cccc7cb93fc896c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OLW7G2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcIQLQRkFZ36GACpmzew%2FkDHYoBjKSZFYGeBLE8lEGtQIhAMx5U2MVRrIBhxx%2BAaNmlyGo%2FNPOSMljyamudqJKave6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWHUkVJOYu8ABBk4Qq3APn%2B%2BsRtXUYwsy2eAsiEUfghw24u6sG3wtBX1KoLdYkPS7M4fLEzY96v6XC%2FGWkKwF9ZMkVqWdFYoyJwj8J%2BiNt3BHKqeDkGYrA4SDtf35P84D1O4VNMxGJIGWIRYsnJ6Y2acCPvFewHzpeLQuQmvrrgb1yMvjC%2Bc4XyuOcXGE5ClADiul3niQbGHFxl8%2FR8q%2BYaZRqP7SDNEP4zVJZ0kG6ZODGUqLj4Qto0Ivt2jgIjDFy%2BIgH3Ekp1xVfXxlb8YikbEyUwoaDg%2BlUSRFbCTk4LiE1lBot31vTvFJ99RYEevKyBK5BLTbsYyfkLtnsGGGkFD1xEdSGHxMRtwolZm8OWed4ETi7p15Zx500iYf4XRMF6%2FacbDONpmR2nrmmji0G1K2P35vX5%2FjCvlLMIOxdqfL4ZuLk0q7H5v4gOwuCZkEvs3a%2BLJCS8ewj%2BN1HSi%2Fj%2F3fYhIqpX%2BBWOtirV3SKEZT5DanyeNmLu4StwqX%2FOEgXnpnghA8mmMZBFTAYGTL6bWj3j0Gc8eZ2xgr2849PeTEeTh7vZ7yVEgpHECJtY%2Bk6nwoCAgBK%2FS0LatxxToyOlnz6Crk%2FJRxnudDF6OP%2BtmdGdxeTluOCSP887rHgZjaBkW98N%2BMgsN2f4zD2htzJBjqkAXxEz3PV6x0%2ByO%2BMpg%2BIh3nCG4lxXhyrmT8x32vCSbXJ75vx0ZCBud9BcJd3pWLHHMI7uBJgpKwLDTq1lRiGQfxGpuRiRvocWp5RjCQ0N0wHdVUCV8blR72p4%2Fw5OYx8cIpGk1fzNDU1QpEPpn77hs%2BmHwuJ%2BHnvBK0LYkuq%2FBI0tsiEYQFgcyLhT566eW%2FHl2JVfHX4KSRwNtSCdfXgMs16w0Bt&X-Amz-Signature=2d3435bf3a192101831ce023260f51ae4303ba2532a886b6fb7db9c6c0c4634c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
