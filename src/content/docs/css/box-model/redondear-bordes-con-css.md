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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VA5ZEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5BAaCY1ckWK1G2zY6125OeW8etfHdoG5DC8IbnNZmhAiBNUr8u2yHETSeO%2FVNySqtwCc3eDZnGIw53FnWEsq9sPSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMJFlkzPt2P3bfePWwKtwDsDOUMD4DR%2BsuAxPEBJZ%2FiPqJbj%2FPtCPKe6ebaKAKJcnRYtX%2BsyMO9uWXcb3TKG3i33BmYU7ZY5m%2BnqQpTo2ZLNUF7z35YOjezKaSK3fCm%2Bt0v3z3lEuEQsOdj7YXnud5JElYTWi3buTUI%2B8FwwM4z5x%2Fd%2Bg%2BKKzADATx98P8vhAzRrrzlkH6xU8r%2BIxAFLQkIJK7tq2Y7b3mw1xYxfZh5lrP5L%2B180vvoRQRsKNZ9NyMg%2FLsNIZd1ElkhJX%2B0wPBsxaE1EDN6n%2BMfjjGicno7ExgL2E1LtqpzDM5agzvbbkOxujGgXIjKx8Gd80hjTEtI6cd3fOrxiqkF8r%2B75NP%2BAPjpZWv64oZ4%2BNuyPLx7llr0aYWAUtEqYmodLqv3mnAnNaeTGcZBMnmw7dbUo3wPHIHLnlr%2BOkvGNf9pdr35sT3MKsUWonW0F0dHjPxJTZpSXj%2FbP1%2B4wxXdIYOZfG7V7mLwrCBzs8K3qOn9MJxgSZf%2Fq4BzNS0KJfTd5%2FamURDXwhFZA7XsySenKqEX%2BgMlFkwTpeTQDLRNNmzc7sigGCwPDotfArg8TfraMWdHOuEShM4C1%2B6W0G6sBJpSjAMtCFSpxYeDS1Fask7uj7IkAU0KzO7WsFo27solPUw0MaKygY6pgFaMPwhYkU3b%2BiPeVkFYPusX5zVbCDBAhHRGXEumi%2FGhui5A3kk629aqfoxmwDO%2BWY19UItUqQuzIsyWerbyKOgBArIBNItFA1NINA5YLDwCvm5C%2FhywzLJWSVSuHdeTD1E6JQQyIjwn%2FrowXl18B7Ckh6l7xPDGO7pBtpn075n7XD6f7e2oigwz2gDjpaaOYa0e2%2B8gzV%2Fy2fGtvZWoczU0oXaG%2BWA&X-Amz-Signature=9c35baf8c02c33ad195987119ce06ed26157896af89715957485f71721cc5e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VA5ZEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5BAaCY1ckWK1G2zY6125OeW8etfHdoG5DC8IbnNZmhAiBNUr8u2yHETSeO%2FVNySqtwCc3eDZnGIw53FnWEsq9sPSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMJFlkzPt2P3bfePWwKtwDsDOUMD4DR%2BsuAxPEBJZ%2FiPqJbj%2FPtCPKe6ebaKAKJcnRYtX%2BsyMO9uWXcb3TKG3i33BmYU7ZY5m%2BnqQpTo2ZLNUF7z35YOjezKaSK3fCm%2Bt0v3z3lEuEQsOdj7YXnud5JElYTWi3buTUI%2B8FwwM4z5x%2Fd%2Bg%2BKKzADATx98P8vhAzRrrzlkH6xU8r%2BIxAFLQkIJK7tq2Y7b3mw1xYxfZh5lrP5L%2B180vvoRQRsKNZ9NyMg%2FLsNIZd1ElkhJX%2B0wPBsxaE1EDN6n%2BMfjjGicno7ExgL2E1LtqpzDM5agzvbbkOxujGgXIjKx8Gd80hjTEtI6cd3fOrxiqkF8r%2B75NP%2BAPjpZWv64oZ4%2BNuyPLx7llr0aYWAUtEqYmodLqv3mnAnNaeTGcZBMnmw7dbUo3wPHIHLnlr%2BOkvGNf9pdr35sT3MKsUWonW0F0dHjPxJTZpSXj%2FbP1%2B4wxXdIYOZfG7V7mLwrCBzs8K3qOn9MJxgSZf%2Fq4BzNS0KJfTd5%2FamURDXwhFZA7XsySenKqEX%2BgMlFkwTpeTQDLRNNmzc7sigGCwPDotfArg8TfraMWdHOuEShM4C1%2B6W0G6sBJpSjAMtCFSpxYeDS1Fask7uj7IkAU0KzO7WsFo27solPUw0MaKygY6pgFaMPwhYkU3b%2BiPeVkFYPusX5zVbCDBAhHRGXEumi%2FGhui5A3kk629aqfoxmwDO%2BWY19UItUqQuzIsyWerbyKOgBArIBNItFA1NINA5YLDwCvm5C%2FhywzLJWSVSuHdeTD1E6JQQyIjwn%2FrowXl18B7Ckh6l7xPDGO7pBtpn075n7XD6f7e2oigwz2gDjpaaOYa0e2%2B8gzV%2Fy2fGtvZWoczU0oXaG%2BWA&X-Amz-Signature=1f6ff5993338f11374fd0fc5dc4830539e51d2d2db3621a1e2e2fda3420f56d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
