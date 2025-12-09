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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYPP6ES%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F2kSSWBCKAYibM%2BKZwTYT6vMzwDs7fBuzCVp1nv%2BEngIgCcO%2BeXxn5ni%2FxVluxH8zD6UK5NYPq20M%2BSb%2BrfHGXzAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJskjFUQJWhGXLGwdSrcA%2Fd9vQKeKaVY8rMfnSWP6U1DJes%2BBM%2FHcbAqaYP89JcJIe3%2F%2FDcP%2BrQXthGIgWYY2Hh4FLAXE1FrGHyW8uV5R1fzG3i%2BOWDYPsvuOWbIn8cEoCjDFyUcl9Ih96zdEg01byOTD%2FtyPJAXvHFdTC5js0Dwy1%2FZomUflLd7z8g8WFWgsz5d8rEDAjLky%2BhfTI4hp02WM6xKg0hAspjyZ86UAzYT6Ea4FfvE88kW2BYejsiP3sO3k98adLt79ZuBjaOM7rOt6qc2M2QFW7wDKqDmk2mG9X4W%2FSxd%2BndatQYFQdzinIfOh4X1Px9JLojumHm9Ju9%2FrUf3BT1j4TRzsioksgYXCib4cRY6pk1FJKQRzKxq7%2FUxoh5VJNy1JdKjyELtRPr%2FbY4aRwndPN4FoF%2B%2FRlIkW6EAfJNsT6Q0UewlzauD%2Bgq0wGxQ4rZv2IVidbtfdEpzzgXC%2FMZ99SBMiXpcTyzGahaNDs2ugUv2roNsiLK9xVM5willR717jVJBPoVlxE1%2FIRWDCxBqdNDnjATMjK9sm%2BtyCIZa6xiqoPHVvSHbP5tv4%2B601Goeitj7NTNfMG%2BTSBeTLRZhtYvGE936%2FG%2FE3RX7QVOuYeJ37MQsxUoHRvgT%2BhvbhwuTHa2KMJTK3skGOqUBfgyiECxJQRCQx01X3M%2B4xxM%2FTtJkVE%2FB6cf0zrUU67gToQRD2aF%2FmSmaLX8AlUmiU6Z60eVZEWQWcGshX2eErDaQgxbgoNhXXFw3v%2FRhujvUvidzgCYg1mTqrf0jLGbj9QNth3gPH9o9cszSijepZqCZFQ65l6jqy00jREMtB%2B1mKRJmeYFHxv34gDpuzAPBwt8smvaHYE%2BSPrThCT%2BoqXNtbE%2Ft&X-Amz-Signature=495fb7864fd5ddfe23139ff07c0888a6ec0372b3f9d124c42df8e65b6b1dea39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYPP6ES%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F2kSSWBCKAYibM%2BKZwTYT6vMzwDs7fBuzCVp1nv%2BEngIgCcO%2BeXxn5ni%2FxVluxH8zD6UK5NYPq20M%2BSb%2BrfHGXzAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJskjFUQJWhGXLGwdSrcA%2Fd9vQKeKaVY8rMfnSWP6U1DJes%2BBM%2FHcbAqaYP89JcJIe3%2F%2FDcP%2BrQXthGIgWYY2Hh4FLAXE1FrGHyW8uV5R1fzG3i%2BOWDYPsvuOWbIn8cEoCjDFyUcl9Ih96zdEg01byOTD%2FtyPJAXvHFdTC5js0Dwy1%2FZomUflLd7z8g8WFWgsz5d8rEDAjLky%2BhfTI4hp02WM6xKg0hAspjyZ86UAzYT6Ea4FfvE88kW2BYejsiP3sO3k98adLt79ZuBjaOM7rOt6qc2M2QFW7wDKqDmk2mG9X4W%2FSxd%2BndatQYFQdzinIfOh4X1Px9JLojumHm9Ju9%2FrUf3BT1j4TRzsioksgYXCib4cRY6pk1FJKQRzKxq7%2FUxoh5VJNy1JdKjyELtRPr%2FbY4aRwndPN4FoF%2B%2FRlIkW6EAfJNsT6Q0UewlzauD%2Bgq0wGxQ4rZv2IVidbtfdEpzzgXC%2FMZ99SBMiXpcTyzGahaNDs2ugUv2roNsiLK9xVM5willR717jVJBPoVlxE1%2FIRWDCxBqdNDnjATMjK9sm%2BtyCIZa6xiqoPHVvSHbP5tv4%2B601Goeitj7NTNfMG%2BTSBeTLRZhtYvGE936%2FG%2FE3RX7QVOuYeJ37MQsxUoHRvgT%2BhvbhwuTHa2KMJTK3skGOqUBfgyiECxJQRCQx01X3M%2B4xxM%2FTtJkVE%2FB6cf0zrUU67gToQRD2aF%2FmSmaLX8AlUmiU6Z60eVZEWQWcGshX2eErDaQgxbgoNhXXFw3v%2FRhujvUvidzgCYg1mTqrf0jLGbj9QNth3gPH9o9cszSijepZqCZFQ65l6jqy00jREMtB%2B1mKRJmeYFHxv34gDpuzAPBwt8smvaHYE%2BSPrThCT%2BoqXNtbE%2Ft&X-Amz-Signature=d87b90cbece61e20075c99bd9c8fce5d4fb0df7a9aada358852f904cf9f6993e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
