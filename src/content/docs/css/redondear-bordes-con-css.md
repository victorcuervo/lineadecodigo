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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS2QEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Crz%2F8qwcQkiCHVQ1JW92C7h0Z7f5WzD6qPTPbBHILAiEAzVDS9%2FqRIVP4Tj4WoFPuL317Ovk0r%2BZhc5bIBC1A%2Bdgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDALIFA4XPLb1UgvLTircA4Qr4IS9U5Vp1yatei4QZj0mSBtDYShbFyzsW4PHCFZxTnq5FbAAJWeJTKLND8m%2FB4f2uAFdfnJbQMmc1gSf9nE9rODke6W9Q0rikIz7gztHeoCQptu1s5jnMwJ2uWagcnm1pV0xVcH321ItvjbiNGfRLZO7seKXhYhR1%2FZ7vAxIT4BHBUUBexfBA4Y3eWerzdCr5jPpPAtQJVz%2F7R97M%2BmXGL9m6c9XbwrkBQIhyVnKNPvEASna5GeaXj1E4S9uQ5CNFiVtn2exLdfo47gaN%2BCTH0HhmbvYdCEiLlTDRHQMtKlLhBRL4M5ziMseKdSpRPpr9e9nOL5qbkR74W9sdRMjBr9et0JsL75wxfRYH%2B75pfk9OeKRXMu3q%2F5QX0xTt7aL7SgSVvxw4YAvn8j5vHKatRY3Jm2PYc88i6s0fe3NVPsZaXJ87pMdvc1mJ2f5gypjt5zd3goO4DdMZBv0hKDBrtXv2mdPYsNkMW8244dJB2TA6XSqIQgxwem%2Fx5bQ9vRYbj%2FiH%2BamZgkjf3u%2BLS7QqsAp7qANRi7Gf1B5gCHgSLUl8c3BMwblhSY5qe65eMOg9fHtUNJwsKnNdMMnojZ4eARR30j2d5H%2FXCbgt9sa60rDPxL9j%2FKRS74cMIG10ckGOqUBWkhmK3m8GgfCupPBaz7%2BBj4LrTNVwQLWyfxQUyhJtaK1RTpwTPPbWP6zIOobjKTXPUrzAdGy63FyHTwYORYF1KTTBWgwL85tJqNhZqRK6FqYrRuaGVTaDRIhHiT7VOLjyJBt4p5uB%2FMeG6Tm6hKK1PCS7tKR1qcQoxKqzezVMln2j0XOmS2XJ4bKhNWXMg00mYWqITGQtRuHz2mlvooS%2F7KDDJHb&X-Amz-Signature=0c599c900f574689114da926ef52d127fc1864d58a39535b9515a931f52fed84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS2QEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Crz%2F8qwcQkiCHVQ1JW92C7h0Z7f5WzD6qPTPbBHILAiEAzVDS9%2FqRIVP4Tj4WoFPuL317Ovk0r%2BZhc5bIBC1A%2Bdgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDALIFA4XPLb1UgvLTircA4Qr4IS9U5Vp1yatei4QZj0mSBtDYShbFyzsW4PHCFZxTnq5FbAAJWeJTKLND8m%2FB4f2uAFdfnJbQMmc1gSf9nE9rODke6W9Q0rikIz7gztHeoCQptu1s5jnMwJ2uWagcnm1pV0xVcH321ItvjbiNGfRLZO7seKXhYhR1%2FZ7vAxIT4BHBUUBexfBA4Y3eWerzdCr5jPpPAtQJVz%2F7R97M%2BmXGL9m6c9XbwrkBQIhyVnKNPvEASna5GeaXj1E4S9uQ5CNFiVtn2exLdfo47gaN%2BCTH0HhmbvYdCEiLlTDRHQMtKlLhBRL4M5ziMseKdSpRPpr9e9nOL5qbkR74W9sdRMjBr9et0JsL75wxfRYH%2B75pfk9OeKRXMu3q%2F5QX0xTt7aL7SgSVvxw4YAvn8j5vHKatRY3Jm2PYc88i6s0fe3NVPsZaXJ87pMdvc1mJ2f5gypjt5zd3goO4DdMZBv0hKDBrtXv2mdPYsNkMW8244dJB2TA6XSqIQgxwem%2Fx5bQ9vRYbj%2FiH%2BamZgkjf3u%2BLS7QqsAp7qANRi7Gf1B5gCHgSLUl8c3BMwblhSY5qe65eMOg9fHtUNJwsKnNdMMnojZ4eARR30j2d5H%2FXCbgt9sa60rDPxL9j%2FKRS74cMIG10ckGOqUBWkhmK3m8GgfCupPBaz7%2BBj4LrTNVwQLWyfxQUyhJtaK1RTpwTPPbWP6zIOobjKTXPUrzAdGy63FyHTwYORYF1KTTBWgwL85tJqNhZqRK6FqYrRuaGVTaDRIhHiT7VOLjyJBt4p5uB%2FMeG6Tm6hKK1PCS7tKR1qcQoxKqzezVMln2j0XOmS2XJ4bKhNWXMg00mYWqITGQtRuHz2mlvooS%2F7KDDJHb&X-Amz-Signature=879c402b130b0c6ceb905580fdafcc660727b533221bed7f88106266f924309a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
