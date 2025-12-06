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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BORJQL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk4BTjNGBilKSqB5V%2BUu69Jn3zQSE2yuPBEYooReWDkAIgHwUrlNkKUQzraf8zj%2BT6neWXhh9JAgiHUkFxUzZ%2Begcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGY%2FMJNYXGVRbSKBVyrcA2VEoKpQe%2FEwkwcfrxiKw8d%2BAI1lPrpWwkjgT3NtKmvIPo2WyQFG9EF2FecYMKV7dupG3G2ng3oZjhDA%2BwHH1zCobTQTQ4vFgbyn5dodJieyw0J03dyGiF%2BBk8Ij6wW%2Bjp6JXKDL4PugfoiyoPTZahJo0E2JT5EqDAHgSKMdZQRSSeOQ9UwXGBhlMtQVac77xYfQAjkuo16DKBswXExTNun0VEf4EoUAQHT%2FosY4DUTR1N0QeeirGczvBzo%2B2VtegjMcxbCTHsAeJg2uAYOcOQPJSu00jqHHxKDzJVchQv6rexMXLu%2B1mAl9vfrSaphxdE4wLg%2Br%2B%2BMX95Ceh3eeb81PJWTBxPHMe%2BpQmQgkTWcvuq4ZP9k2Bcsi%2FK8oKUA26l2NK%2Bk6Eb%2BiMh3gqrdkLgfrT2Aw5RTIoaYFmZVvS741rKNA%2FcOpbycspjCeJ8RsqMopEER0D3DJmW2MvnED7ZMm%2FJosuzOu%2FpdK%2FGdNxKiMj1CY9BGfuxGLzibyV0GecT8bpKQ%2BMpQYY%2B54ECT7loPDEE03ufpI82Om4PNrzxA1%2FbrDguEslWEJ158S0MUmNRM2rkjprU9VL1qouZpOyqQSGidaIDx6FwNnh6L1LX9tz7j4rtdiM4FPDkv5MPnA0ckGOqUBQSr16H72dXzepT%2BdvPCWnTqkLJkLOl4oO%2BCj0k1FTowQR51Bt3kVUJ3krXqtELlF0OZ9wanokA31MPpr7pcRKUN0L7aOm9iIji%2B9MPBToyWuiedbb6H7Da9T2WY%2B6MTyIh9KGm7oSHKWl6RRsplYaPW0MZQOzT4RM5WRXTHAAPNhMcjlwv3rS8lpKALc6eSiOoO42qimVq4N3kXZbnUs2%2FMW6Lyp&X-Amz-Signature=b0e06445b9baee6c92bb3867c3b01e0539e6fe014da89aad4d9c49eab9b0114f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BORJQL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk4BTjNGBilKSqB5V%2BUu69Jn3zQSE2yuPBEYooReWDkAIgHwUrlNkKUQzraf8zj%2BT6neWXhh9JAgiHUkFxUzZ%2Begcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGY%2FMJNYXGVRbSKBVyrcA2VEoKpQe%2FEwkwcfrxiKw8d%2BAI1lPrpWwkjgT3NtKmvIPo2WyQFG9EF2FecYMKV7dupG3G2ng3oZjhDA%2BwHH1zCobTQTQ4vFgbyn5dodJieyw0J03dyGiF%2BBk8Ij6wW%2Bjp6JXKDL4PugfoiyoPTZahJo0E2JT5EqDAHgSKMdZQRSSeOQ9UwXGBhlMtQVac77xYfQAjkuo16DKBswXExTNun0VEf4EoUAQHT%2FosY4DUTR1N0QeeirGczvBzo%2B2VtegjMcxbCTHsAeJg2uAYOcOQPJSu00jqHHxKDzJVchQv6rexMXLu%2B1mAl9vfrSaphxdE4wLg%2Br%2B%2BMX95Ceh3eeb81PJWTBxPHMe%2BpQmQgkTWcvuq4ZP9k2Bcsi%2FK8oKUA26l2NK%2Bk6Eb%2BiMh3gqrdkLgfrT2Aw5RTIoaYFmZVvS741rKNA%2FcOpbycspjCeJ8RsqMopEER0D3DJmW2MvnED7ZMm%2FJosuzOu%2FpdK%2FGdNxKiMj1CY9BGfuxGLzibyV0GecT8bpKQ%2BMpQYY%2B54ECT7loPDEE03ufpI82Om4PNrzxA1%2FbrDguEslWEJ158S0MUmNRM2rkjprU9VL1qouZpOyqQSGidaIDx6FwNnh6L1LX9tz7j4rtdiM4FPDkv5MPnA0ckGOqUBQSr16H72dXzepT%2BdvPCWnTqkLJkLOl4oO%2BCj0k1FTowQR51Bt3kVUJ3krXqtELlF0OZ9wanokA31MPpr7pcRKUN0L7aOm9iIji%2B9MPBToyWuiedbb6H7Da9T2WY%2B6MTyIh9KGm7oSHKWl6RRsplYaPW0MZQOzT4RM5WRXTHAAPNhMcjlwv3rS8lpKALc6eSiOoO42qimVq4N3kXZbnUs2%2FMW6Lyp&X-Amz-Signature=a4e2b17d17044c68c56a6c1b203bfe1db83a6929ed8ae110bc2c771778540ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
