---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7HVS7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHAuLq1XamBz7Qkv9I3qHB4B%2FaJGXQYqHTesjI6NB0YhAiBuUKpmkDcDOuyVKUTXpOIPRMWNGvAh9zLXvphh6qXCfCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMh6%2B1PmW1Z03IQsEOKtwD4RKIIDGTUpaGXM9dRLxKPUyrGDwEs1X4aXWWb2AuRlhpnEWx2yy2DzQX8XKyimtlnBNFKcueWX1kP3EQrjpBIDWq5Ld640%2F%2F74hXaUIOS8iBFANfHBzMKJAyiheIlOe8wW1nIkcEG%2B9c6TFgoCli7vROA%2BS3QrmaBu4S%2FDEO1Pfrk2mRZw97N67w2v1ph7SgQdVYfTwVkOXKD%2Floi3D03nXLzax7l2IwZFHdVuiU7YPrYKZ6XKOSjxnGBem4BuxWrE0Hq0gZd%2BjZx310xIDC5HYqqmjqGgOcCp15dpDtpC6RFEOFX1rNDRYzWj6DN5I3FSUWvXsc%2FIHP3Ujslx7bO%2BmVtYiS0%2FdG1kHR2IStLfReNU0XhW%2FMF6%2F059xJk7CQ5IVCDpOruXVS7lK2QooQkHFlBZBQmaeKwVnkTabx5ObZxQ1wSk8a2Ljb8mVQkySVKTFfQB5TM%2FBrirZhHlYDlJXmGIsW4TdWmaOOMM5abJ7ooCxJQs%2BkBj1Rl1FfeCYfRFmWa6Vvc3ZPH%2B074SlpAXmXqO06%2FcImCMyP%2B2MpZyUXNtuUeW6vq5OkBH%2B0PFTifBNikJjT96KnAMFjGJJoxX1trrohHGOHxxeMJRHlMtVSPUVeQCh5OM4WcYUwzb%2FGyQY6pgF3Hz0QUofHXTrDSd4GSECdbLhleXd9ZhzAmFV4vW0WbVVCxAU3Bjtz7ImwqQ%2F4icySysvRSqBJMb2oJAws0JorEceNDvJFx%2B6yVhOwI3jfDPLVOvfBRdoqhL429LiEtucDKfqLe%2B1pq66CQx0M9adSRtAb66SZUdCaaM2W6l6daTg7jmUVjvHBHuVeF7BMHjtQuUALW9wj2u4%2FED%2FRQNnG06p7tPAG&X-Amz-Signature=24dfe10c0b77370f5f205b2b27186d8982f688681ac1475c833eb4728913dc5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7HVS7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHAuLq1XamBz7Qkv9I3qHB4B%2FaJGXQYqHTesjI6NB0YhAiBuUKpmkDcDOuyVKUTXpOIPRMWNGvAh9zLXvphh6qXCfCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMh6%2B1PmW1Z03IQsEOKtwD4RKIIDGTUpaGXM9dRLxKPUyrGDwEs1X4aXWWb2AuRlhpnEWx2yy2DzQX8XKyimtlnBNFKcueWX1kP3EQrjpBIDWq5Ld640%2F%2F74hXaUIOS8iBFANfHBzMKJAyiheIlOe8wW1nIkcEG%2B9c6TFgoCli7vROA%2BS3QrmaBu4S%2FDEO1Pfrk2mRZw97N67w2v1ph7SgQdVYfTwVkOXKD%2Floi3D03nXLzax7l2IwZFHdVuiU7YPrYKZ6XKOSjxnGBem4BuxWrE0Hq0gZd%2BjZx310xIDC5HYqqmjqGgOcCp15dpDtpC6RFEOFX1rNDRYzWj6DN5I3FSUWvXsc%2FIHP3Ujslx7bO%2BmVtYiS0%2FdG1kHR2IStLfReNU0XhW%2FMF6%2F059xJk7CQ5IVCDpOruXVS7lK2QooQkHFlBZBQmaeKwVnkTabx5ObZxQ1wSk8a2Ljb8mVQkySVKTFfQB5TM%2FBrirZhHlYDlJXmGIsW4TdWmaOOMM5abJ7ooCxJQs%2BkBj1Rl1FfeCYfRFmWa6Vvc3ZPH%2B074SlpAXmXqO06%2FcImCMyP%2B2MpZyUXNtuUeW6vq5OkBH%2B0PFTifBNikJjT96KnAMFjGJJoxX1trrohHGOHxxeMJRHlMtVSPUVeQCh5OM4WcYUwzb%2FGyQY6pgF3Hz0QUofHXTrDSd4GSECdbLhleXd9ZhzAmFV4vW0WbVVCxAU3Bjtz7ImwqQ%2F4icySysvRSqBJMb2oJAws0JorEceNDvJFx%2B6yVhOwI3jfDPLVOvfBRdoqhL429LiEtucDKfqLe%2B1pq66CQx0M9adSRtAb66SZUdCaaM2W6l6daTg7jmUVjvHBHuVeF7BMHjtQuUALW9wj2u4%2FED%2FRQNnG06p7tPAG&X-Amz-Signature=68d06d7dc8c688572c11c61d6ea56c69438cd0926fde62c1e45e7edb3b4bbf7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
