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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5L2QJ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLXOEnHnnOcHvHZhOVMegLJxu5fzUpJxN868M2Xt24mQIhAN%2FKE84%2B0Zca0RQw8Y19M340mbtFflsVB83VWZkdzM35KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPFEJVAr70WIxnRRkq3AMPYVj2ehUxXPdp1nhvGZelgcqyDwQixmKHZgXM1Mu7vS87P8iB8i2k5ojzzQ%2BZnhoYaYOW237goiWgsY1tAmsWCmqMirZbReKJwca34zSTCy37CvlsylNxM3Up47jQU%2FcTvbFThU%2Bsc9%2FG1%2FAwV3a%2FtUt79eGOqxGdKGhuH%2Br%2Bn7U%2FYlUrKLGJ11VntsOMDucz01%2BbKSx1R0bGdAGAT%2BvvvkEj0uhoi14jFs%2BsqxNH5lQu9OQiJl2e7f3CW6BL6RlK0jUKJhi5Ew099Q61uZdstEn7hcry6mM7BRD%2FB5APPrX2wrpYozUBmrwHU3vCSIHnkBXlss%2BPfjStgNn0Nf3b6U5BnZmpyRNeIGRbVKsAN907Qsz%2BiKWlv%2FnEQhilVmvoFRm%2BvdWVnj9j%2FvuviVRHvVE04oyu1aGgitC1t%2Bvf6UZqN7FmA8LAeVYg0A1n%2FUY%2F1r%2BpxOV4SF488koD9HaHzEGE99XIVhG%2B2T7r6gLgWS1osI9MBuZeSuQhsNvOOCJIZm%2Bjy12sax0ZOZThg%2BMgQM7qATuuG7eB13jOXRRlusDpcTelCwCSQ3dvo%2BcPCRrV1RwI%2FqI4Jso%2BZwI05icLejjgGiM3nF9sIx4AJAnq9b5CfBGCPwmz4GaApDCpoIvKBjqkAXiWemdHyS38%2FANktIInY%2Bt%2BvwZMxyc0kKfBNG7qWcCbZWQ4J4jz8aMMOIMrdLCVd3hbzUI0RAjtRfHMcx6pWZLpKKmpZ3kIbNL%2B9EhS%2FNHCSLqN%2B%2Fqm6HunnYnIrjzk%2FlURBZgFnKDz71kTjV%2Bwup2qigPrRxndmWP1N6RGtvJhZ8rk7E1pbYeTFy3gki%2FfR5xMCQDGv7Z2ijiOnWCzkNEFdiZ6&X-Amz-Signature=88535c10aad7b8222610dc6ad99485a2712b45c28acc9d1f3a418661ae75cacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5L2QJ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLXOEnHnnOcHvHZhOVMegLJxu5fzUpJxN868M2Xt24mQIhAN%2FKE84%2B0Zca0RQw8Y19M340mbtFflsVB83VWZkdzM35KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPFEJVAr70WIxnRRkq3AMPYVj2ehUxXPdp1nhvGZelgcqyDwQixmKHZgXM1Mu7vS87P8iB8i2k5ojzzQ%2BZnhoYaYOW237goiWgsY1tAmsWCmqMirZbReKJwca34zSTCy37CvlsylNxM3Up47jQU%2FcTvbFThU%2Bsc9%2FG1%2FAwV3a%2FtUt79eGOqxGdKGhuH%2Br%2Bn7U%2FYlUrKLGJ11VntsOMDucz01%2BbKSx1R0bGdAGAT%2BvvvkEj0uhoi14jFs%2BsqxNH5lQu9OQiJl2e7f3CW6BL6RlK0jUKJhi5Ew099Q61uZdstEn7hcry6mM7BRD%2FB5APPrX2wrpYozUBmrwHU3vCSIHnkBXlss%2BPfjStgNn0Nf3b6U5BnZmpyRNeIGRbVKsAN907Qsz%2BiKWlv%2FnEQhilVmvoFRm%2BvdWVnj9j%2FvuviVRHvVE04oyu1aGgitC1t%2Bvf6UZqN7FmA8LAeVYg0A1n%2FUY%2F1r%2BpxOV4SF488koD9HaHzEGE99XIVhG%2B2T7r6gLgWS1osI9MBuZeSuQhsNvOOCJIZm%2Bjy12sax0ZOZThg%2BMgQM7qATuuG7eB13jOXRRlusDpcTelCwCSQ3dvo%2BcPCRrV1RwI%2FqI4Jso%2BZwI05icLejjgGiM3nF9sIx4AJAnq9b5CfBGCPwmz4GaApDCpoIvKBjqkAXiWemdHyS38%2FANktIInY%2Bt%2BvwZMxyc0kKfBNG7qWcCbZWQ4J4jz8aMMOIMrdLCVd3hbzUI0RAjtRfHMcx6pWZLpKKmpZ3kIbNL%2B9EhS%2FNHCSLqN%2B%2Fqm6HunnYnIrjzk%2FlURBZgFnKDz71kTjV%2Bwup2qigPrRxndmWP1N6RGtvJhZ8rk7E1pbYeTFy3gki%2FfR5xMCQDGv7Z2ijiOnWCzkNEFdiZ6&X-Amz-Signature=9feec28f3812dc4a9c5b28c9cb10f936ef91d3f212303e86c3d862c6218cce8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
