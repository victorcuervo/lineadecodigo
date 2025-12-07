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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF6SBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvobOYjvZqAbHddG0cYu0bGZKM8%2Flb0EA2Lf%2Bj6ZgWfgIgYnQo49uxeauohE8jjEvhuIlkj77cNMIPcMmNiPoIC30qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpCudLIRnWWfY4TPCrcA7r9TlBnSF%2BkKla6H843Mak4YH2wQCxzBFum%2FvG4OihxxCIStuEWIe2%2BFnCRPGS5YlrRxtYSZMVHyz78Zw1dCI%2FM0syhzMncVEPtCcjb0pNa%2BLqr5nixU3NvssWt%2FG2nexYRpBwwrrMgNOP8dJ41B%2BDfYJORyJG17jItUpBc0HWA6o%2FWlXcL%2Bb2ySX5ObA5fnF45yTTaV7848y%2FxpW3C8UQM0OtrZLAE3HD4zxNb8hTxRG351rh4q5dlbKkdWZUyjA9fXXGcTu5IIblVsO154CpWJRXdBxN2PuC7UzfqyWS3%2BnULZO9Cs7ACGQXwdXkRSJeOt4%2FXSfgiTq%2F%2FOjIEkmW7ihlhtUk%2F6mofP2%2FvYKftJ2IR8OdGzQmjACmBlR0WtBv26UE6RjIQjSLnJbXsCCJpoQ6u9pkhbvn2INWqtKFEG96VZN18sdffEz5%2FpZb8ch8MamW%2B7EeQaiCdnn3sV7mMrvRL15hyw9%2FPXYvMJBB4w77nt9zske%2FGUnFuQ8N4w%2Fvzjx2QuYb3mknwVHCrl4pJvublPcyYgOSGZe5%2FG50ArS3xn6GDxqY86YCzPaNWrjFuUP3E83Hdmr%2Flkc9B57ncBWdWCNQDLdpKEm77vSq08fflWPgLKI5H7BfiMLT%2B0skGOqUBdDDH%2BHyTNDGe5l%2F3bR65G%2BOSXrVpibnlplYjoBklmczz%2B4fZGln8Y9%2BTgfSdU5CZBktEc4vvfqymqC4KolLPADDw6eSO2XrtvKPLCI%2B3pYI13A7umJP4nsa%2Fg2RHEIsoSXV3np893zp787kSaZ09PICim%2FNZ0GuHb%2F05wDuAyRBna27iDeylGwQ0%2FPDpqKnKshuJfcbBbBb2t2sqwQQICeGJs6ll&X-Amz-Signature=da7f2311d1cb5adae123393384113a76247df27dc5f5b2b8662024dd9cf108fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF6SBLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvobOYjvZqAbHddG0cYu0bGZKM8%2Flb0EA2Lf%2Bj6ZgWfgIgYnQo49uxeauohE8jjEvhuIlkj77cNMIPcMmNiPoIC30qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpCudLIRnWWfY4TPCrcA7r9TlBnSF%2BkKla6H843Mak4YH2wQCxzBFum%2FvG4OihxxCIStuEWIe2%2BFnCRPGS5YlrRxtYSZMVHyz78Zw1dCI%2FM0syhzMncVEPtCcjb0pNa%2BLqr5nixU3NvssWt%2FG2nexYRpBwwrrMgNOP8dJ41B%2BDfYJORyJG17jItUpBc0HWA6o%2FWlXcL%2Bb2ySX5ObA5fnF45yTTaV7848y%2FxpW3C8UQM0OtrZLAE3HD4zxNb8hTxRG351rh4q5dlbKkdWZUyjA9fXXGcTu5IIblVsO154CpWJRXdBxN2PuC7UzfqyWS3%2BnULZO9Cs7ACGQXwdXkRSJeOt4%2FXSfgiTq%2F%2FOjIEkmW7ihlhtUk%2F6mofP2%2FvYKftJ2IR8OdGzQmjACmBlR0WtBv26UE6RjIQjSLnJbXsCCJpoQ6u9pkhbvn2INWqtKFEG96VZN18sdffEz5%2FpZb8ch8MamW%2B7EeQaiCdnn3sV7mMrvRL15hyw9%2FPXYvMJBB4w77nt9zske%2FGUnFuQ8N4w%2Fvzjx2QuYb3mknwVHCrl4pJvublPcyYgOSGZe5%2FG50ArS3xn6GDxqY86YCzPaNWrjFuUP3E83Hdmr%2Flkc9B57ncBWdWCNQDLdpKEm77vSq08fflWPgLKI5H7BfiMLT%2B0skGOqUBdDDH%2BHyTNDGe5l%2F3bR65G%2BOSXrVpibnlplYjoBklmczz%2B4fZGln8Y9%2BTgfSdU5CZBktEc4vvfqymqC4KolLPADDw6eSO2XrtvKPLCI%2B3pYI13A7umJP4nsa%2Fg2RHEIsoSXV3np893zp787kSaZ09PICim%2FNZ0GuHb%2F05wDuAyRBna27iDeylGwQ0%2FPDpqKnKshuJfcbBbBb2t2sqwQQICeGJs6ll&X-Amz-Signature=a2f2cff663e1199212a33c17420a0d3e6c5d5c4afb983cf2400036cbd312ce57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
