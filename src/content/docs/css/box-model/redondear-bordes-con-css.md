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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3VXAM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCch3l6tJHd1kCykP2KUgpqXAJHy7yAYii41PRjYsbiaQIgcMRzLUvqSFHCx12oKycKuAbHKZACaGvNIzw8hTDnR1Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHw1IFvrs6KgzgB42SrcA01CnV9zKwqZQV2XG0SmCBnY5i5V5E3MTJ4BWLtlsiK1qoAQ55y3UyVnkA7chkS%2FMRqDc5HOfa8U0O6%2BzQ5YyPBkqbIfE7Q%2BBvNWoK9Bc52HnxDLG1rwWjzv7hOO4XVnL%2BP%2FGnDdpwPx%2Ft%2B5Exko8IDeouQ%2BU8DbGT2xscdtTShLq7R4AuKCl1ADm8RN6v1TMeb4PlxehnVnD9eYue%2FNgbGpAqHhiM7IzS3zL5gRqREZ2PtnKUQ8d6ZcF2p6jioSbqpQyBkbqSNAzrQKM08aellqKXiAi1MAtbfyflFq7nmIk%2FlO2nt6eu6g29gXKbj6EBCpp6lYLloLJIbhd4plk38KvNgqSHYGXkjpk9xyTFxmF4D0P3pJEfrntIkEZROAHi0CEW7Ilw1tzK%2BeF1sCvsC44ORP9%2FVKIH9ir4tMbieimLmgAeASOshEmfnSYjceU8RnND3EUapQ%2FNNT9qLkO%2B%2FUch0JNLNiZap8iM87k5AbPPJDSjWoooS9Pa0%2BsTtjJAsP6HkfU4XgM8wcx5e3KiXM7vmMI9PFyhrnBKlNG5KSqiGrEXE%2B0Suy%2FzcI5SUj47rWo4WHKgQHXFmblOA4yi7nW1H3%2FGb0Q5IH7rXe6rgQmufTfcS3mwJKMLpWMKj6h8oGOqUB8SHHahjOBOPcWoTTBnxQnk6zXwLw2nj8NX%2FLl%2FH7pTlv0HDt%2F0%2FqJdltMFUjiD853iMac5%2FudfI%2BIBhbl0lyfgDkZAy3kcQMTDy3ve8dFHgDomCiHXEs3jTeImzyVN4DFy6sY%2BCrDG4A0m3YMJisWCHsvbR5XFIouA0B3qZ0xKScOz9xGZN6Q1PeTrF5MCww45VGm1jANhiJlyGeQERHDr6NI730&X-Amz-Signature=444166313d8f17d6f5b21e403349f0d4b002abc5d2ab0456dc9e52fd211a960a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3VXAM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCch3l6tJHd1kCykP2KUgpqXAJHy7yAYii41PRjYsbiaQIgcMRzLUvqSFHCx12oKycKuAbHKZACaGvNIzw8hTDnR1Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHw1IFvrs6KgzgB42SrcA01CnV9zKwqZQV2XG0SmCBnY5i5V5E3MTJ4BWLtlsiK1qoAQ55y3UyVnkA7chkS%2FMRqDc5HOfa8U0O6%2BzQ5YyPBkqbIfE7Q%2BBvNWoK9Bc52HnxDLG1rwWjzv7hOO4XVnL%2BP%2FGnDdpwPx%2Ft%2B5Exko8IDeouQ%2BU8DbGT2xscdtTShLq7R4AuKCl1ADm8RN6v1TMeb4PlxehnVnD9eYue%2FNgbGpAqHhiM7IzS3zL5gRqREZ2PtnKUQ8d6ZcF2p6jioSbqpQyBkbqSNAzrQKM08aellqKXiAi1MAtbfyflFq7nmIk%2FlO2nt6eu6g29gXKbj6EBCpp6lYLloLJIbhd4plk38KvNgqSHYGXkjpk9xyTFxmF4D0P3pJEfrntIkEZROAHi0CEW7Ilw1tzK%2BeF1sCvsC44ORP9%2FVKIH9ir4tMbieimLmgAeASOshEmfnSYjceU8RnND3EUapQ%2FNNT9qLkO%2B%2FUch0JNLNiZap8iM87k5AbPPJDSjWoooS9Pa0%2BsTtjJAsP6HkfU4XgM8wcx5e3KiXM7vmMI9PFyhrnBKlNG5KSqiGrEXE%2B0Suy%2FzcI5SUj47rWo4WHKgQHXFmblOA4yi7nW1H3%2FGb0Q5IH7rXe6rgQmufTfcS3mwJKMLpWMKj6h8oGOqUB8SHHahjOBOPcWoTTBnxQnk6zXwLw2nj8NX%2FLl%2FH7pTlv0HDt%2F0%2FqJdltMFUjiD853iMac5%2FudfI%2BIBhbl0lyfgDkZAy3kcQMTDy3ve8dFHgDomCiHXEs3jTeImzyVN4DFy6sY%2BCrDG4A0m3YMJisWCHsvbR5XFIouA0B3qZ0xKScOz9xGZN6Q1PeTrF5MCww45VGm1jANhiJlyGeQERHDr6NI730&X-Amz-Signature=62d3a5ee9cbc8ca9253d60af8310894e725b29d9e3ccffbafc84a20e30de1d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
