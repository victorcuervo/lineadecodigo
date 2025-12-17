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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIXJXEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNeB6hUEqZV0h1I5IpV6aX9S42J2FM4aMeKSdkFejRxAiAUzopQwk4a3CtAkRUa8PMJ12lQL0WV2kI%2FoRZab12vkyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM7bZN7HCdYAhu51W3KtwDMMpA%2FGT49cfGx7%2Fx6qmtc5Y79zUMBpkylRKuGQIcqLEmBZHBShW0tGHTvZrcrghnhdSeeeh%2BOBq%2F%2BYzxw093j4LdQ9wgod827IFtvHrTQHJFj1JK42MHmeONLkCCpmavSmYPlDYKV0OKc98eg%2B8ap1MZs1m%2FaTe7cYEs4U3JIJmzDH5uh4TXx%2B8AYW0Qqud59qL3icW%2Fa5qAsItluLqwjuGH1zrr37z3%2FwJPTsC3%2Blq%2Fj7Snjs4%2Fa%2BX%2BK%2FkCyM0hGPJIvy0lxvT8B6HWGILXDHuCkp5rziUtp6U5oiZfSGyRIM%2BAxEOEyhahKREB3VN0x2Zxx4uit%2FVQTvWPfhmTeNoQvOLL0F1tgPhpeHUD7KHsKoapq%2BFPymUf%2FKruJ5VT8Qd7VZyKK3cuzwliboRNV%2FX8ifLwyjAzeB2IJWD4E48MJAKcADllZtgU4No0JM%2FzY4bXMmIUAZJBd4Sqd1sZIzGTHwXK9FHnmFRXZT4cNkq351XxPPp3%2BiZAFPxRQwhQc04JRvgo8crimCiswFh6Qq7uCuLTZTihWflr1SQmWkow2lpF%2FMIhvW1sqiMoLc0q8E5I7%2BvNRaxIh3qOIxUJLFIPlDzlBZ22hdnGSMuZ3z31EbM6Nl9k26YVVUQwr52JygY6pgFUx2JF3DpxygHLSdJwA27QRzvoAfMnA%2BWnp3VjZbhNL04DsAGmRZyTqXV7Cb7tkP0mh3%2FE6geCiEo5Vx7cOpT6ctxUJG%2FXyCwGwKKKHkfkH7yZyRnlgjIaGJ0y8QouZYl9TSAlVtmumue8Bh9f2Mk9Y1JQtyoBr1%2BEXtr5j12IYrl%2B0fVQ3CULl3ILcum3Gx1vQ5OOtvR1RQte6l9G36f4uUKLOlb8&X-Amz-Signature=aadba8945fc48149781ac39c60442a6e7b71bc76d97690244f6b9cd67cd0c79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIXJXEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNeB6hUEqZV0h1I5IpV6aX9S42J2FM4aMeKSdkFejRxAiAUzopQwk4a3CtAkRUa8PMJ12lQL0WV2kI%2FoRZab12vkyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM7bZN7HCdYAhu51W3KtwDMMpA%2FGT49cfGx7%2Fx6qmtc5Y79zUMBpkylRKuGQIcqLEmBZHBShW0tGHTvZrcrghnhdSeeeh%2BOBq%2F%2BYzxw093j4LdQ9wgod827IFtvHrTQHJFj1JK42MHmeONLkCCpmavSmYPlDYKV0OKc98eg%2B8ap1MZs1m%2FaTe7cYEs4U3JIJmzDH5uh4TXx%2B8AYW0Qqud59qL3icW%2Fa5qAsItluLqwjuGH1zrr37z3%2FwJPTsC3%2Blq%2Fj7Snjs4%2Fa%2BX%2BK%2FkCyM0hGPJIvy0lxvT8B6HWGILXDHuCkp5rziUtp6U5oiZfSGyRIM%2BAxEOEyhahKREB3VN0x2Zxx4uit%2FVQTvWPfhmTeNoQvOLL0F1tgPhpeHUD7KHsKoapq%2BFPymUf%2FKruJ5VT8Qd7VZyKK3cuzwliboRNV%2FX8ifLwyjAzeB2IJWD4E48MJAKcADllZtgU4No0JM%2FzY4bXMmIUAZJBd4Sqd1sZIzGTHwXK9FHnmFRXZT4cNkq351XxPPp3%2BiZAFPxRQwhQc04JRvgo8crimCiswFh6Qq7uCuLTZTihWflr1SQmWkow2lpF%2FMIhvW1sqiMoLc0q8E5I7%2BvNRaxIh3qOIxUJLFIPlDzlBZ22hdnGSMuZ3z31EbM6Nl9k26YVVUQwr52JygY6pgFUx2JF3DpxygHLSdJwA27QRzvoAfMnA%2BWnp3VjZbhNL04DsAGmRZyTqXV7Cb7tkP0mh3%2FE6geCiEo5Vx7cOpT6ctxUJG%2FXyCwGwKKKHkfkH7yZyRnlgjIaGJ0y8QouZYl9TSAlVtmumue8Bh9f2Mk9Y1JQtyoBr1%2BEXtr5j12IYrl%2B0fVQ3CULl3ILcum3Gx1vQ5OOtvR1RQte6l9G36f4uUKLOlb8&X-Amz-Signature=c46e230b012d98cec8b3ac6b79517c93797c968c0038e422b9725fc01098f8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
