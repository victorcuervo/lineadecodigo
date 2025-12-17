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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBSDK32%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMjY8q3pS6%2BelZh0QUwTsPp1LnsMJlipkrefCIMB%2Fw9AiAf%2BQyBLsFrWKk0lBlsZs3ct4iMF9ugA0PE2vMSeN7hwCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgl%2Be5wTIZVF7ZcpKtwDINsmScMVI58wtGWp0UG%2BHb1gTj2c0fZS4HjxN6QCMh0CTAsh8pBTTgr6ZSQrrA0VjCokqMh93DPpYp4bOVZZ6I5v4QO%2FZrUhCFa510ZlZ%2B52SAoIj6Ncpcm9TgD0Ghy%2FuDd4cPkNhy2NNTJiqMfkLzDjRSb0iJWBWKUQMYtSJ7nJWaqr6sxFx3jZ7hrLK6IGXAd4Yjbpalpj3SnRQUqgEqqKoU55EP703kCNgmu4UHI9RIRuOgLTk14Mp6P2Xtfiy1lu5fylMUAwXdYLaZ62dCOwNOO%2F0go5EMYfUFuT9uSXj7hVOGW8czlsMqIQ%2BL0tI0qGVjGPQAil89LL9h4UAHXGou%2FQvAMYEAX72r0EIMfHujBqW5sIWDs3CuFwahkL0bpFeY7wPyoONdAaJ%2Bjh4k4KZ1sZm1sVDhWUzIM9S0lIxi9sjVY%2BYwm2dxz81qqGM6mZzXVt0xkJlcziulvcCy7kawBca9gSD4bdEYLZSDNpSaMLQYTs31dKuwtd17pV0HyklofwaBmp1wIigRTHf7t2Ip4ncUDMuNYmjkKAaEF0T17o67FX9n6Vozi0k54OnizAFBkHZGe%2Fj21JETUObVZECWsU2R7TqSOkt41j%2B21KgXk7YZZ9hFgJ26owyoGLygY6pgE%2BdbXg8E%2BwdQl%2FE1ApiRe1q3%2BpjDOmnxhevnvHUJT7V4q8RHRrZsNNtKuUMzaOB7rSFmVx5x6Yi7TNTVWokCSpqbH6Uhsuu0jU8RK55TZp2NWN%2FJNvmJuBIiLNZBnMPQu%2FvvOZl3Ho3DfKl44FqsGnlsF8ODVglKOnszWQq3c0YSi2pDhzmrXlhSpR5Gg5nkoEwnGoY1iXeNvhDzzBzLWU%2FIFYnKgK&X-Amz-Signature=29618be4243b78925759720adc4a15fc553ad60404ee5546124873158f348ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBSDK32%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMjY8q3pS6%2BelZh0QUwTsPp1LnsMJlipkrefCIMB%2Fw9AiAf%2BQyBLsFrWKk0lBlsZs3ct4iMF9ugA0PE2vMSeN7hwCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgl%2Be5wTIZVF7ZcpKtwDINsmScMVI58wtGWp0UG%2BHb1gTj2c0fZS4HjxN6QCMh0CTAsh8pBTTgr6ZSQrrA0VjCokqMh93DPpYp4bOVZZ6I5v4QO%2FZrUhCFa510ZlZ%2B52SAoIj6Ncpcm9TgD0Ghy%2FuDd4cPkNhy2NNTJiqMfkLzDjRSb0iJWBWKUQMYtSJ7nJWaqr6sxFx3jZ7hrLK6IGXAd4Yjbpalpj3SnRQUqgEqqKoU55EP703kCNgmu4UHI9RIRuOgLTk14Mp6P2Xtfiy1lu5fylMUAwXdYLaZ62dCOwNOO%2F0go5EMYfUFuT9uSXj7hVOGW8czlsMqIQ%2BL0tI0qGVjGPQAil89LL9h4UAHXGou%2FQvAMYEAX72r0EIMfHujBqW5sIWDs3CuFwahkL0bpFeY7wPyoONdAaJ%2Bjh4k4KZ1sZm1sVDhWUzIM9S0lIxi9sjVY%2BYwm2dxz81qqGM6mZzXVt0xkJlcziulvcCy7kawBca9gSD4bdEYLZSDNpSaMLQYTs31dKuwtd17pV0HyklofwaBmp1wIigRTHf7t2Ip4ncUDMuNYmjkKAaEF0T17o67FX9n6Vozi0k54OnizAFBkHZGe%2Fj21JETUObVZECWsU2R7TqSOkt41j%2B21KgXk7YZZ9hFgJ26owyoGLygY6pgE%2BdbXg8E%2BwdQl%2FE1ApiRe1q3%2BpjDOmnxhevnvHUJT7V4q8RHRrZsNNtKuUMzaOB7rSFmVx5x6Yi7TNTVWokCSpqbH6Uhsuu0jU8RK55TZp2NWN%2FJNvmJuBIiLNZBnMPQu%2FvvOZl3Ho3DfKl44FqsGnlsF8ODVglKOnszWQq3c0YSi2pDhzmrXlhSpR5Gg5nkoEwnGoY1iXeNvhDzzBzLWU%2FIFYnKgK&X-Amz-Signature=467b58e40006bfad1837e61a692bd65348766d3507915cc76fc82932a6577e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
