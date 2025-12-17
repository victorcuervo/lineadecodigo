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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIVUVWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBFDutysmNWJg7HSUB3fSy7rOJpj5DtiVb1OaoKAoGUQIhALXaOpvYhpaXjdFQh5Q9uZzUWpv7MUdg%2BVpnrCkxcRFyKv8DCH0QABoMNjM3NDIzMTgzODA1IgxTh1wbyF%2BXPh9zOqMq3AMgwxVZ1ucW2DFY%2Btx4Au%2FPf0NqfA6hqtYS8gKumTSd5zarl3d3jj7rg4QFK%2B0JE0%2Fmwj3QH5r3qloSI9nAfaESpA%2BewILOpuLFvqjU%2BsqikmCzx4NuynT155qlP4Tf51%2ByrWt1UhAFU7IZgIqHDV%2BlFLGHMEW6FUpCsZ5HG%2BWJBM9aA7k5AYDn6vQr0UH4wsFgoQuAJS%2FP4%2FWhaNo%2F6fl8YbvMVg4CJcls52gamwFQUTMa%2BsCNVJGiBVa8QvunbBZmZAVZk1MIwQMFo19CcYzACfnRbSLVwMsioRQq%2Fhz%2Fpw0Hj0z2wp5ksG52agnKgltmeWPilniCKkGrAnzFPqpggxgQQ93OwSKX2JZ2cOnhumcX%2BKrZTbr621aug30sxJw3nfrAvqoDXUSW%2BHNBFNOqtBMpRbs%2FjukLp3v5lyhjLJZB3He7r05VRtzigOHxg7NQBHpSS1jaV12yfF8u6p%2BbIRs0uTneryJdoDP3eO5PjEDSsm9r%2B4SQJmm6E%2FNqfLqfunw4JPGPeDhZ6Xag%2Bu%2BS4BXi1YHQfapzB3RUgnaW2oaipW10xGDmlqQrSX6ThrPwL3e1yaVI1AMXTMlJDYO2jPJeEUveMEEbPbiR0K8q5durtzUNiUfgqHFIGDCxqorKBjqkAeJIC8SG1h8SKXCVhbsLOmO9jhiX5NzEwuh4%2Be%2B6H0kx%2FSoRuTiLGXFsgV9TFxsfCGFOCWQOrwYibM76IclGgGGNdQ3DCAQp%2FpCNvYVjYWmNQ%2BeoIMZIzkfDkjUI4D9XHd60Pt%2BzSbwBzJT2qvdIymd8sTrl2hIydeLV1UihrOJKVS0X5dXuWu8E1pxIQ3ZD1Fq3Ul6x4xf0A6zATJfZ%2F7CUYHxo&X-Amz-Signature=ca306b984ee078e777046fe1b73b50ddc882bfc6630282433658f50ca7c44784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIVUVWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBFDutysmNWJg7HSUB3fSy7rOJpj5DtiVb1OaoKAoGUQIhALXaOpvYhpaXjdFQh5Q9uZzUWpv7MUdg%2BVpnrCkxcRFyKv8DCH0QABoMNjM3NDIzMTgzODA1IgxTh1wbyF%2BXPh9zOqMq3AMgwxVZ1ucW2DFY%2Btx4Au%2FPf0NqfA6hqtYS8gKumTSd5zarl3d3jj7rg4QFK%2B0JE0%2Fmwj3QH5r3qloSI9nAfaESpA%2BewILOpuLFvqjU%2BsqikmCzx4NuynT155qlP4Tf51%2ByrWt1UhAFU7IZgIqHDV%2BlFLGHMEW6FUpCsZ5HG%2BWJBM9aA7k5AYDn6vQr0UH4wsFgoQuAJS%2FP4%2FWhaNo%2F6fl8YbvMVg4CJcls52gamwFQUTMa%2BsCNVJGiBVa8QvunbBZmZAVZk1MIwQMFo19CcYzACfnRbSLVwMsioRQq%2Fhz%2Fpw0Hj0z2wp5ksG52agnKgltmeWPilniCKkGrAnzFPqpggxgQQ93OwSKX2JZ2cOnhumcX%2BKrZTbr621aug30sxJw3nfrAvqoDXUSW%2BHNBFNOqtBMpRbs%2FjukLp3v5lyhjLJZB3He7r05VRtzigOHxg7NQBHpSS1jaV12yfF8u6p%2BbIRs0uTneryJdoDP3eO5PjEDSsm9r%2B4SQJmm6E%2FNqfLqfunw4JPGPeDhZ6Xag%2Bu%2BS4BXi1YHQfapzB3RUgnaW2oaipW10xGDmlqQrSX6ThrPwL3e1yaVI1AMXTMlJDYO2jPJeEUveMEEbPbiR0K8q5durtzUNiUfgqHFIGDCxqorKBjqkAeJIC8SG1h8SKXCVhbsLOmO9jhiX5NzEwuh4%2Be%2B6H0kx%2FSoRuTiLGXFsgV9TFxsfCGFOCWQOrwYibM76IclGgGGNdQ3DCAQp%2FpCNvYVjYWmNQ%2BeoIMZIzkfDkjUI4D9XHd60Pt%2BzSbwBzJT2qvdIymd8sTrl2hIydeLV1UihrOJKVS0X5dXuWu8E1pxIQ3ZD1Fq3Ul6x4xf0A6zATJfZ%2F7CUYHxo&X-Amz-Signature=a3afaececf2f091d596ad85299619cae9edc386643d103e9c536c4b0b1df94ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
