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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5YLXED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7ZbIGrzGMaDFdchZQNTiMU1djT4z8Wjc%2FcuPP1bKRqAiEAoiU5cz8SlN9A3W3TNLiL%2FWIbLKlV0JjGQZZqvU9%2BucIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM6%2BRly5meWzRLlHyrcA%2BcD3xRItzfnTbJgs52YrvEDe5k2PHClFwv4WWvEMzzArTfxgy92iMWuPhomzkOW4201BsG%2FHZwyk9gQjrHuOAu7%2B91cp7m5RlzCGaTCKkjfnN7lgGxCNFVTRBPFaywh%2BwdtdcqJuL%2FXmBXgWTl8m4YJf8cISjteYCDjAlhQ3DX0OouzFIMIPeQ764Jl7Oa%2FBtQtFfc7dJ52oUK5XZd2u01krOYS%2BHw%2F90eGnFUcXTZXe6O%2Fh9GFdtmnu95vgGOzVsXAU1RdeL9%2B8skUobhs3Elkz%2BMssSJu9gGD3x1oBZhGEQ9sjhqMRS%2F39YhmdzXXgwMWhwGco6eUTewoR5hq%2BDyz%2FerBf4hLSXmNmAZNp7Q8K7AIsKYo08bOu%2BXqZcn%2Bu4fyZGuXsp%2BlZVUr5rxcdYPrWPoMVeV%2Bka4RvbbxvvZthZFo88nA9I7DpxsNovVMMzzn9Taxg6eCajoggNcIP4B1O%2BmAVcO%2Fa99MauLwdg0K7EjlR%2F85%2BArQOdrPV14RUwlga1k2aIqVH1bWyYdChSL5TzICIMUTsXNhPjVCV%2BlmIvqzW6ZKurDC2ycoQ%2ByYulHSdF2n8JVR0uTi%2BOvdyQxXdehwZzR0xvh1vJtncKojsMap5i7E%2FSGkrS%2F4MI790skGOqUB3M6D6sP4pXxMV2gW1ICEL%2BgEzMQ69avXHVOTplaolwm6gk1F6o6FWnTEg6sGFqjYueV0hP6cfmfb%2B4w6NKYgvgD2IXDlv%2FwuvVSMhdDhkR5aJguX3pBDd7dR3uY%2FR%2FGyGNGgk%2B%2BKiC3m8cPvE9rcFxLuWq9EIsfJcBmTnYyW7UJxMmUxeZXYiKqVn07wzg1tkt%2Fi3qpvUDcSC5niBcy%2Bcwn%2FtdsP&X-Amz-Signature=f66d6a7a2d027c801fc1b336ae5708884d8b8b1cafa5bd6d9dfc0018ba6fc1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA5YLXED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7ZbIGrzGMaDFdchZQNTiMU1djT4z8Wjc%2FcuPP1bKRqAiEAoiU5cz8SlN9A3W3TNLiL%2FWIbLKlV0JjGQZZqvU9%2BucIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM6%2BRly5meWzRLlHyrcA%2BcD3xRItzfnTbJgs52YrvEDe5k2PHClFwv4WWvEMzzArTfxgy92iMWuPhomzkOW4201BsG%2FHZwyk9gQjrHuOAu7%2B91cp7m5RlzCGaTCKkjfnN7lgGxCNFVTRBPFaywh%2BwdtdcqJuL%2FXmBXgWTl8m4YJf8cISjteYCDjAlhQ3DX0OouzFIMIPeQ764Jl7Oa%2FBtQtFfc7dJ52oUK5XZd2u01krOYS%2BHw%2F90eGnFUcXTZXe6O%2Fh9GFdtmnu95vgGOzVsXAU1RdeL9%2B8skUobhs3Elkz%2BMssSJu9gGD3x1oBZhGEQ9sjhqMRS%2F39YhmdzXXgwMWhwGco6eUTewoR5hq%2BDyz%2FerBf4hLSXmNmAZNp7Q8K7AIsKYo08bOu%2BXqZcn%2Bu4fyZGuXsp%2BlZVUr5rxcdYPrWPoMVeV%2Bka4RvbbxvvZthZFo88nA9I7DpxsNovVMMzzn9Taxg6eCajoggNcIP4B1O%2BmAVcO%2Fa99MauLwdg0K7EjlR%2F85%2BArQOdrPV14RUwlga1k2aIqVH1bWyYdChSL5TzICIMUTsXNhPjVCV%2BlmIvqzW6ZKurDC2ycoQ%2ByYulHSdF2n8JVR0uTi%2BOvdyQxXdehwZzR0xvh1vJtncKojsMap5i7E%2FSGkrS%2F4MI790skGOqUB3M6D6sP4pXxMV2gW1ICEL%2BgEzMQ69avXHVOTplaolwm6gk1F6o6FWnTEg6sGFqjYueV0hP6cfmfb%2B4w6NKYgvgD2IXDlv%2FwuvVSMhdDhkR5aJguX3pBDd7dR3uY%2FR%2FGyGNGgk%2B%2BKiC3m8cPvE9rcFxLuWq9EIsfJcBmTnYyW7UJxMmUxeZXYiKqVn07wzg1tkt%2Fi3qpvUDcSC5niBcy%2Bcwn%2FtdsP&X-Amz-Signature=e3836f521d13521c0d86a42b8934b1d07ab6b5546d2eea39e0c1055bbd18733c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
