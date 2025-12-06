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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMOLYIM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuoojC6lFQOA8ERlSGQUdqIpWVn668N4QJaXtQuD8ugIgRra6Lfa%2BKdb1vD8%2BL5tzVV86dh7gKnpNTSQHxBTiZr8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLd02IOBvgFNd50KeircA0DUJOciYeNCqnYFRITtiKtVkEIX7v5DdrKJrDrkrW7ddvCvdWgmzVYdVqjN2e9G4eCsnwzM8yTBvThT0w4ecW9jTXEw7GMx2Rc4YXF9Ubm9DBoiYB6N7NdUT0l5NCMM2b9uxxFjEIsPXEQxEhRt%2B5Dn7En3c0AtOMO6Jk8Arwh0OsV3JWkDRXvZYiDTjTmOrJsjbE8PLOJ7dQl02EcpJKjlO3aZcXvcj%2BVXeb5lAY0DGiHKILQfaiWFxQLJsLzfmHGQ89H6mOWr1jk75yaGaOSXhpCbwWJQgoI1SrahEuVcrqcKaEG3KQl%2FrNKEtHNN1DQ8C90Oe3FZRV0oPu7IIghPSR3pUrfSNjKjA00R%2BluNxJuoISFmYSPQhChPb5XvJZnYQ19Ql6S8F9YjV0LZnDnFlpm%2B1kkWIUsGmui1LwmAkH0TDuDaHGfiaJugCrT5Bv53Eof1s6TnUS%2BeDy5OjTLpcyBt2gPLzWhZeSgCjy7Qqfxm8DtPI%2BbST3isW%2Fqo8nrni1EVa9bGTcmSkCr9pSfbRFwnEOm2hl8wzF%2BK%2FlIHH8kuMNEPwmTcEeGWEJ9H2aavkonIy5iAFk5aXE4yQKyMxo%2F%2BS2FNIfp2YCMlKSm%2BquNssX%2BV2LZUF42oMJPM0ckGOqUB3hObToev1b2myD9hW%2FJGiWvnJTfuyO7Y%2Bs%2FmzKfuDY726iIvnQLL%2F2AvUW4O0locIN8W8h%2B2Dy%2BNjdYlQZNoQd%2FO17%2FrICTkZafONwoMO72AMDCDlyiq9yelEO09IYW4C1RZrIkqA3R9qeRoZCTfh%2B0kLtJgH5iPYst1JtqCtufICYpk7NQekEArjhIntNRRBVu7D5%2BdymUyaYI%2BLhjFBAmLhYwb&X-Amz-Signature=ce519879b61d6fb018ba13ccbbeab4aaebb598f92cbcd06912899f6f7d9981bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMOLYIM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuoojC6lFQOA8ERlSGQUdqIpWVn668N4QJaXtQuD8ugIgRra6Lfa%2BKdb1vD8%2BL5tzVV86dh7gKnpNTSQHxBTiZr8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLd02IOBvgFNd50KeircA0DUJOciYeNCqnYFRITtiKtVkEIX7v5DdrKJrDrkrW7ddvCvdWgmzVYdVqjN2e9G4eCsnwzM8yTBvThT0w4ecW9jTXEw7GMx2Rc4YXF9Ubm9DBoiYB6N7NdUT0l5NCMM2b9uxxFjEIsPXEQxEhRt%2B5Dn7En3c0AtOMO6Jk8Arwh0OsV3JWkDRXvZYiDTjTmOrJsjbE8PLOJ7dQl02EcpJKjlO3aZcXvcj%2BVXeb5lAY0DGiHKILQfaiWFxQLJsLzfmHGQ89H6mOWr1jk75yaGaOSXhpCbwWJQgoI1SrahEuVcrqcKaEG3KQl%2FrNKEtHNN1DQ8C90Oe3FZRV0oPu7IIghPSR3pUrfSNjKjA00R%2BluNxJuoISFmYSPQhChPb5XvJZnYQ19Ql6S8F9YjV0LZnDnFlpm%2B1kkWIUsGmui1LwmAkH0TDuDaHGfiaJugCrT5Bv53Eof1s6TnUS%2BeDy5OjTLpcyBt2gPLzWhZeSgCjy7Qqfxm8DtPI%2BbST3isW%2Fqo8nrni1EVa9bGTcmSkCr9pSfbRFwnEOm2hl8wzF%2BK%2FlIHH8kuMNEPwmTcEeGWEJ9H2aavkonIy5iAFk5aXE4yQKyMxo%2F%2BS2FNIfp2YCMlKSm%2BquNssX%2BV2LZUF42oMJPM0ckGOqUB3hObToev1b2myD9hW%2FJGiWvnJTfuyO7Y%2Bs%2FmzKfuDY726iIvnQLL%2F2AvUW4O0locIN8W8h%2B2Dy%2BNjdYlQZNoQd%2FO17%2FrICTkZafONwoMO72AMDCDlyiq9yelEO09IYW4C1RZrIkqA3R9qeRoZCTfh%2B0kLtJgH5iPYst1JtqCtufICYpk7NQekEArjhIntNRRBVu7D5%2BdymUyaYI%2BLhjFBAmLhYwb&X-Amz-Signature=77500bffcd88ad4bc4921fa039fc911fb9d0fc5789ce586d8b4448b003dfa9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
