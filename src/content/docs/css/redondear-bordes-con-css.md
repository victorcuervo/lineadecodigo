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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABBK75R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCioGj4%2BJLgr8Hip089QBys9OnJRXKiUPKBHH88iXhxwIgTEeILkE2ZS9v8YbMptl6haVqVzqPVs7Syg2OXnRwIr4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGTTMVp2XbMY9Ag3yrcAzMJHR7AvK9G366Pk9GAz1VqssfG1UzUSRtVGEH9dUor9B11I7JoPlS3iuKKsXxDKZaD7AnjzYrGj7QjMcCfYAqas%2BK5qm8e%2BIrVSqi206wHIov47Ikh17TU2oXyfFUt8l8XIMjybGLQ5hlFEvdMJ48qsmdAFtUiozeGLfIDpSyxP3zTr0SlGpu0HIOVkvI9DbpfWRaQtIzN6cy2YoYGb2lZ3MklRBK%2B2xovoZhLplmUAEWdaHVveU0kHl2fqDTMZSgC7HB3uwL3mqxWUMIzziZxOCJYDrVrbv07r%2BhSc4oUIGuQF9dRvFiqKf4e3a0cSoUJ7qD661wDpB4CA7VG%2FDec7pHHMsZ6BgBBLBZEWycvBrFqJ1knuMY2hl6temW5EFzw3LBX4%2FmgZk2qd8rB22G4vjVjLgbDBvOkQZ3GrQFIsDvpTjISWq92oAGNRCiwwc6HS0yfGP6cpPavfeau24BLq%2Bcq6rT828vrvKy1Tz3jENlNCm%2FIGeO2jkAoz8wsP%2BMUhNNR0aKXa3N6IwdMpxViJXqSG96bBaEeHDV2F8SKl975AicAmTPbyTGPY%2F3npLZLu0KJFXSQ3rKebQjNtJKUhAUld59IAHZM7Sb5aezDnv%2BAk6XqGzl5AXmlMI7t2ckGOqUB%2B03qwSFKbFvMoKrExri2WDKiuECH99k2zQidOE3%2F%2Ff08SazyjsuzpnZRhJZ1OBGW4fq8FWJRQRCjqokG2Y%2BM1AYPgqMq9JeAgcxD%2BJFA14xP2j8VH1izpyQwvEfdol7Xiu2gA%2BT47VY4rIteLJLWMKEcReoe4hBx91ndyuaWlcAbj2niXBVnAejuUbcG8I8wJchNFSwoWo1xrz%2BqEhVF6VC%2FTCS1&X-Amz-Signature=3456c242b96571ebdbea215db9e63be2e34c2e4702cf5ea6e8131d9d82f2f0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABBK75R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCioGj4%2BJLgr8Hip089QBys9OnJRXKiUPKBHH88iXhxwIgTEeILkE2ZS9v8YbMptl6haVqVzqPVs7Syg2OXnRwIr4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGTTMVp2XbMY9Ag3yrcAzMJHR7AvK9G366Pk9GAz1VqssfG1UzUSRtVGEH9dUor9B11I7JoPlS3iuKKsXxDKZaD7AnjzYrGj7QjMcCfYAqas%2BK5qm8e%2BIrVSqi206wHIov47Ikh17TU2oXyfFUt8l8XIMjybGLQ5hlFEvdMJ48qsmdAFtUiozeGLfIDpSyxP3zTr0SlGpu0HIOVkvI9DbpfWRaQtIzN6cy2YoYGb2lZ3MklRBK%2B2xovoZhLplmUAEWdaHVveU0kHl2fqDTMZSgC7HB3uwL3mqxWUMIzziZxOCJYDrVrbv07r%2BhSc4oUIGuQF9dRvFiqKf4e3a0cSoUJ7qD661wDpB4CA7VG%2FDec7pHHMsZ6BgBBLBZEWycvBrFqJ1knuMY2hl6temW5EFzw3LBX4%2FmgZk2qd8rB22G4vjVjLgbDBvOkQZ3GrQFIsDvpTjISWq92oAGNRCiwwc6HS0yfGP6cpPavfeau24BLq%2Bcq6rT828vrvKy1Tz3jENlNCm%2FIGeO2jkAoz8wsP%2BMUhNNR0aKXa3N6IwdMpxViJXqSG96bBaEeHDV2F8SKl975AicAmTPbyTGPY%2F3npLZLu0KJFXSQ3rKebQjNtJKUhAUld59IAHZM7Sb5aezDnv%2BAk6XqGzl5AXmlMI7t2ckGOqUB%2B03qwSFKbFvMoKrExri2WDKiuECH99k2zQidOE3%2F%2Ff08SazyjsuzpnZRhJZ1OBGW4fq8FWJRQRCjqokG2Y%2BM1AYPgqMq9JeAgcxD%2BJFA14xP2j8VH1izpyQwvEfdol7Xiu2gA%2BT47VY4rIteLJLWMKEcReoe4hBx91ndyuaWlcAbj2niXBVnAejuUbcG8I8wJchNFSwoWo1xrz%2BqEhVF6VC%2FTCS1&X-Amz-Signature=2901d981619afa3eca54fb2cad5a82bea797fb344be8a7bff7b404b415023eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
