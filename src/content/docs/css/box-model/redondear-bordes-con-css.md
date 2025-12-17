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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO32OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAssxLw6hxSJ7kzUmH0D0veU%2B3hLS%2FcY8jslZN2spqXLAiBVEpcj1r2aAZyhE51LPXe51PcntKAN1pFdU5A0Kpk9kSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSZ9t9YMp1QAYMY0PKtwDXY%2F8MfEDOHbsDqGvR7SZwYvn8PVVjcTe0Z5vLTlkvHIggrPB6eushz5jqrWvy2S5tjXbnOCPveo3Z7mpSeEeNper40%2B6ewYfMbx7nMZ0qTUw6gke318uNYYYYU27p70KI4q1qAEtiaETnSmekE89hYw3OXulCaOGEAxFOxXoQpXX%2F%2FMrZH93cL3dt6aTmOIcQChm3p6zsvbtw%2BivzGmrMxhxYZEDzBMk506PW6ym9cFAcm55T2Is0XrZ14vbs4ARHRrGmfDz2gPEHhyN9jLk5JEoeEVDIVHnThoM1095m0MFzbDf7bTT2D2FUDzA6Td7mJGG5VPIG6RsFbOImwg5vwChlyOfI116RcfUfdknqEBonG%2BLN71aJnJWgBxFoexiFCmRWyp9%2Bi5fr8ezIFJAmDBpSjagWw6IhKYa5o393y7FZiHgmyhAlYA2BM6SObzLVuavTcHD6c0LyKG1kaY%2BXdbZ4aWHoo3z2MN8vKrnymXrV4KiruKsREd8%2BcI%2FpdvyYdg6nnYdr04Fr3bD2ZTu7M%2F2tUJ%2BTE8BVAmJo3n0bczvFWLlEgWVsZg%2FHF7bAs3XiZzNpMcXmKls90TO2%2Fi5LgbVtGtn74TpU05dDn8QU2sUXrAVa3aA90syoVYw%2BZ%2BLygY6pgFAjtii8l2xqb35b2eavzKQzHFk77glHaROG6wvOERE%2F9vdtSLViOtwwAKHL6i85NOdC2Bkakjqc26dDU3kgHxB0vBppsC0Rj%2FEqjJk4NMpp%2F0Lw09uvFXGlUIiJ3zP6ARweseWMv2MmlyQTxsA6bAeEM%2Feg9cbzcMIn9YEy1IFe8mpfOpdZ7UAF62ytKmiycE2c0ym7vRdnH7rCf1xQj6KmVt98cNT&X-Amz-Signature=48659cdf5efe3ead7095680fb2b8626f86a625d31b1064dde9978c702b0a9052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO32OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAssxLw6hxSJ7kzUmH0D0veU%2B3hLS%2FcY8jslZN2spqXLAiBVEpcj1r2aAZyhE51LPXe51PcntKAN1pFdU5A0Kpk9kSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSZ9t9YMp1QAYMY0PKtwDXY%2F8MfEDOHbsDqGvR7SZwYvn8PVVjcTe0Z5vLTlkvHIggrPB6eushz5jqrWvy2S5tjXbnOCPveo3Z7mpSeEeNper40%2B6ewYfMbx7nMZ0qTUw6gke318uNYYYYU27p70KI4q1qAEtiaETnSmekE89hYw3OXulCaOGEAxFOxXoQpXX%2F%2FMrZH93cL3dt6aTmOIcQChm3p6zsvbtw%2BivzGmrMxhxYZEDzBMk506PW6ym9cFAcm55T2Is0XrZ14vbs4ARHRrGmfDz2gPEHhyN9jLk5JEoeEVDIVHnThoM1095m0MFzbDf7bTT2D2FUDzA6Td7mJGG5VPIG6RsFbOImwg5vwChlyOfI116RcfUfdknqEBonG%2BLN71aJnJWgBxFoexiFCmRWyp9%2Bi5fr8ezIFJAmDBpSjagWw6IhKYa5o393y7FZiHgmyhAlYA2BM6SObzLVuavTcHD6c0LyKG1kaY%2BXdbZ4aWHoo3z2MN8vKrnymXrV4KiruKsREd8%2BcI%2FpdvyYdg6nnYdr04Fr3bD2ZTu7M%2F2tUJ%2BTE8BVAmJo3n0bczvFWLlEgWVsZg%2FHF7bAs3XiZzNpMcXmKls90TO2%2Fi5LgbVtGtn74TpU05dDn8QU2sUXrAVa3aA90syoVYw%2BZ%2BLygY6pgFAjtii8l2xqb35b2eavzKQzHFk77glHaROG6wvOERE%2F9vdtSLViOtwwAKHL6i85NOdC2Bkakjqc26dDU3kgHxB0vBppsC0Rj%2FEqjJk4NMpp%2F0Lw09uvFXGlUIiJ3zP6ARweseWMv2MmlyQTxsA6bAeEM%2Feg9cbzcMIn9YEy1IFe8mpfOpdZ7UAF62ytKmiycE2c0ym7vRdnH7rCf1xQj6KmVt98cNT&X-Amz-Signature=510c06df0f06a008ad167918fdd9c5096a926026fcb05f56bc99c478ca4b3d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
