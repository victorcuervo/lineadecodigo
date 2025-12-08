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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFE675CN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKY7vc7RXvKjGecAruuLzuVnJRz0LXzxBG2eIEPfW6DgIhAN3E7S9ybETUvYIJi7Ufv3iCWtankpRXIv4Akeg5WW4UKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl2JQFO8jW9Bftwqkq3AMRXv2m2Aa1fwWmhuNUlm0lPPCxA5ISUIJqPBldjXRiRCdl50kIx1FEg7JnoptO0%2FPb4ES10FzuHSMMlXaaBNwNYV6nDZA1orHafDtDSMmIdmkjVHNpLJsbqwW3uCz9cNwuRnTTtmfMMPdsU%2BwYKej1aw5iW%2Fj%2FRgj32c9IwP4WjwCGE%2F%2BKmOeSoLG1%2FPNVRPpKg%2FTDfyhG%2BXwmdk3T86pvAEoNsxDt7SxqZ0TDrFklPxIvAyiAc5mywJzDARM8hzuSCAtHgGPw5vHwohb3SZJ1rjJcJ9%2F9Woetigi%2BVJJ2Cq99SstApj3IbBPFVT6A9HnpgT5XJquyy8GGQG4SedBsyZKBFKe7yOUBeXGEbwmeXW2sLNTgt%2B75R%2B8MkMk6sOjA5ZCvPc54aWjCl5OYlXQF%2FgjNM6n8pUSLnOfAPMf746Mc%2BjR%2FTnzleny4G%2FcHWFO7rAeC66Sf0iZ11%2By6BgQs%2FxdF8OvYKHe06BLOE2RgcQ3%2FZxMJlm6F3AHH1vHCGO%2Fou%2BZB0sq4U6U0SYnUSsOCDLCgZS%2FP%2FMa%2BEs7lCOt%2FYmhvnmjMtRl8JDvSrv%2BRvps6hE4bRewKkIOgAPWlg0%2BUwZ2aRTsntUP%2BjftIhILsvt4y88Exdwa2DK%2F9CTDWtNnJBjqkAZ3S0Mte6NYT1HZH7mBAJfXforEPB3b33jh0cvg3pbJJpQdOosLfksLuUcgwoV05wp0qAO5U9UjBoIMnVowLNWXF%2FgUPgcyGwG4V9%2Bprw3REVsIefvwxi7t8PM8PwvQiAm1Y75o97jRXdPRqaAyqr4M1%2Ff90uCCBMknWYtBUhw82yJNEKY179nBlQUpEf1PzROOXyuqzNz%2FGGcmIMZeJITLSuf9%2B&X-Amz-Signature=a9c730964c831f0cb6ed748f78d149e04ab165bbb9a0ca0ee7e2cc5aca17a8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFE675CN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKY7vc7RXvKjGecAruuLzuVnJRz0LXzxBG2eIEPfW6DgIhAN3E7S9ybETUvYIJi7Ufv3iCWtankpRXIv4Akeg5WW4UKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl2JQFO8jW9Bftwqkq3AMRXv2m2Aa1fwWmhuNUlm0lPPCxA5ISUIJqPBldjXRiRCdl50kIx1FEg7JnoptO0%2FPb4ES10FzuHSMMlXaaBNwNYV6nDZA1orHafDtDSMmIdmkjVHNpLJsbqwW3uCz9cNwuRnTTtmfMMPdsU%2BwYKej1aw5iW%2Fj%2FRgj32c9IwP4WjwCGE%2F%2BKmOeSoLG1%2FPNVRPpKg%2FTDfyhG%2BXwmdk3T86pvAEoNsxDt7SxqZ0TDrFklPxIvAyiAc5mywJzDARM8hzuSCAtHgGPw5vHwohb3SZJ1rjJcJ9%2F9Woetigi%2BVJJ2Cq99SstApj3IbBPFVT6A9HnpgT5XJquyy8GGQG4SedBsyZKBFKe7yOUBeXGEbwmeXW2sLNTgt%2B75R%2B8MkMk6sOjA5ZCvPc54aWjCl5OYlXQF%2FgjNM6n8pUSLnOfAPMf746Mc%2BjR%2FTnzleny4G%2FcHWFO7rAeC66Sf0iZ11%2By6BgQs%2FxdF8OvYKHe06BLOE2RgcQ3%2FZxMJlm6F3AHH1vHCGO%2Fou%2BZB0sq4U6U0SYnUSsOCDLCgZS%2FP%2FMa%2BEs7lCOt%2FYmhvnmjMtRl8JDvSrv%2BRvps6hE4bRewKkIOgAPWlg0%2BUwZ2aRTsntUP%2BjftIhILsvt4y88Exdwa2DK%2F9CTDWtNnJBjqkAZ3S0Mte6NYT1HZH7mBAJfXforEPB3b33jh0cvg3pbJJpQdOosLfksLuUcgwoV05wp0qAO5U9UjBoIMnVowLNWXF%2FgUPgcyGwG4V9%2Bprw3REVsIefvwxi7t8PM8PwvQiAm1Y75o97jRXdPRqaAyqr4M1%2Ff90uCCBMknWYtBUhw82yJNEKY179nBlQUpEf1PzROOXyuqzNz%2FGGcmIMZeJITLSuf9%2B&X-Amz-Signature=a4a8bdad57f7638b8e497edc8c71265613fdccf287d2e635ce6aa2a3f54290f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
