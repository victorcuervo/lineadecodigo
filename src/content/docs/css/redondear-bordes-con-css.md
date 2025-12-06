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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICYJ2SP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVrVdfxLuT222E6%2BIZbBeWxkzOHsnhu9SQBO2n2bBY1QIhAL5nVtFMGnEHigtR49x9c%2FuQxh625%2B2mUF7mhM1mG6rsKv8DCHEQABoMNjM3NDIzMTgzODA1IgzNIeyEuGlWxE4uYEQq3AOXFDm%2BScviPKAVkGf%2BSxvqlJIaM2kzVmIlhCZrS2h36c4tukxMxXL0qLJ4raWZoh7S0Um1scXq2Bs%2Bcd8TGGkEqrKn4bjO6zn8n9JHbci6OCKGZhU6TDjVzKkmnAeU021K%2B3maRYvt6b0n3z%2FHFKKkSxUCfnoRnZRV60WGhNIoWnFhdQISfmw%2Fq5pG%2Feon3uC8oNutUQIuW3K7QmXQBXS%2FjWxJ3XbDnRiiVC8jtI4ln0KsKo3DhP2EHkfyBBVsrhuwrkOdkDXFuSN2bv2GSGUi6rOzfxfRJkWyFranf1asRh3J7JHhHT5DfPGGD0GZ9P3rUU17XgvON1Qq7lSPBQcTM0IjlV8f1LELuKEGmCJ6XXGjbsuxzy2GajUkiz1WOtb%2BHPq9wxRmviEOIZCCT2s0L1Pg0tWcKl4BqdCV71%2FRbD056qESSM7TxSN4RbMZNrNmGCQrdoFTDOsMpW1y8yPqo6Ieh7hMb%2FoQwkyAuuuLSRXU%2FWeOZYXZRlpi1XdDNew5ls9rlXp5b4GEUG8nplCMoaOSVa7eajTpnhXfjYDLMW%2B%2FaxkuJiM%2FEakxABTdzuXfXRqY1A53mKKO8DC1dQ%2B9xXCfMtMVrYHmX%2F1Aah0XirDLnzr93yv%2BI8B4oDCevM%2FJBjqkAaKj6v2nPZys4VgMrDIcVuT0%2FX6u7rpCBflHWw%2BQZ7e%2FR6eB3uDapzcYS%2FFpMtbO06wd5Ymyn3URrxhZ7aCBRHuH2a8cSOGd0p3zThKUf%2B5ArkXtCCQ5dg6v84FYgZw9nqT%2FuUDlZLycbe0myz8G5FQyrDqsNdwPeR1Z%2BeT8g9BxQtrOcVZT57PpzrZ36Xf7PCyqth5pgC2rB2jLlGS55sAmPnqH&X-Amz-Signature=21d470e44389dac3b1e8397c1c2500c4a312e4afedbac2eb7e82f2f79d25d1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICYJ2SP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVrVdfxLuT222E6%2BIZbBeWxkzOHsnhu9SQBO2n2bBY1QIhAL5nVtFMGnEHigtR49x9c%2FuQxh625%2B2mUF7mhM1mG6rsKv8DCHEQABoMNjM3NDIzMTgzODA1IgzNIeyEuGlWxE4uYEQq3AOXFDm%2BScviPKAVkGf%2BSxvqlJIaM2kzVmIlhCZrS2h36c4tukxMxXL0qLJ4raWZoh7S0Um1scXq2Bs%2Bcd8TGGkEqrKn4bjO6zn8n9JHbci6OCKGZhU6TDjVzKkmnAeU021K%2B3maRYvt6b0n3z%2FHFKKkSxUCfnoRnZRV60WGhNIoWnFhdQISfmw%2Fq5pG%2Feon3uC8oNutUQIuW3K7QmXQBXS%2FjWxJ3XbDnRiiVC8jtI4ln0KsKo3DhP2EHkfyBBVsrhuwrkOdkDXFuSN2bv2GSGUi6rOzfxfRJkWyFranf1asRh3J7JHhHT5DfPGGD0GZ9P3rUU17XgvON1Qq7lSPBQcTM0IjlV8f1LELuKEGmCJ6XXGjbsuxzy2GajUkiz1WOtb%2BHPq9wxRmviEOIZCCT2s0L1Pg0tWcKl4BqdCV71%2FRbD056qESSM7TxSN4RbMZNrNmGCQrdoFTDOsMpW1y8yPqo6Ieh7hMb%2FoQwkyAuuuLSRXU%2FWeOZYXZRlpi1XdDNew5ls9rlXp5b4GEUG8nplCMoaOSVa7eajTpnhXfjYDLMW%2B%2FaxkuJiM%2FEakxABTdzuXfXRqY1A53mKKO8DC1dQ%2B9xXCfMtMVrYHmX%2F1Aah0XirDLnzr93yv%2BI8B4oDCevM%2FJBjqkAaKj6v2nPZys4VgMrDIcVuT0%2FX6u7rpCBflHWw%2BQZ7e%2FR6eB3uDapzcYS%2FFpMtbO06wd5Ymyn3URrxhZ7aCBRHuH2a8cSOGd0p3zThKUf%2B5ArkXtCCQ5dg6v84FYgZw9nqT%2FuUDlZLycbe0myz8G5FQyrDqsNdwPeR1Z%2BeT8g9BxQtrOcVZT57PpzrZ36Xf7PCyqth5pgC2rB2jLlGS55sAmPnqH&X-Amz-Signature=8573a0bb8a54a8248434048745d22b114b1e3e790ae3162d73c1ed8aa6187b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
