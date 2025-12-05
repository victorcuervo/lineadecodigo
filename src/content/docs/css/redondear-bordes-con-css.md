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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OVXNOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoL%2FzomQyE62%2BgFnxWqEOjt8wzCudirZnhahroDDKnSAiAfBzNeMQEnBbcjN8uu4v5N769NMbSYnUkMeUqiT5zlHyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM908DB3NqGu2pp1caKtwDM8Mm88ePHaFT8OySKjv3IHeA%2BHiS19C5Zx0rZqaA85DKL3%2Bd347dT49AYsi2eONqyVo04g6O80dlstKIvGU%2BV%2F0f6iaMHkKFLpv7gaQNa2YD0YXENeTykAk89ls7pb8CaG4TjhYwHMgH1g8ZS05gW5msayo6Y73MoL3wI4d4qG5BX%2BF6MN02mEJkuHrSCEEXGvS2gT%2BDBRj3ogFebJhoekMdoalnhENC35sS6pwKIS5q7%2FYFdfmbiDnDWWijqTdW5QnBW%2FEX%2FRa9gnSr6TGq0Dc34M3koutWVs9%2FwH3hdJ6n%2B7vt6phowtPWjfs%2Fli2Oi5DuiGrTWMVORe%2B6Q3DjRcOk5lsLe79FLyZpl%2FHpHHT6j9mnMQiKOGKJ%2FLsP%2BjqLWnSH36nurwoe2lVcSfI5Y2%2FEmJYgqiodt9yvLP1oAu8NeAhm03NSGYZGnZzUIN3kKm%2FCwYa08xJXo5fAWXwf%2FKKe5E8p2BMBpCZlAWgodnrIHCeqxYj267OPOFURcbVly1LZk7Byv69Z%2FdtoSpFCmh5N3c2cZpOWcdzje4y2pkV%2B%2BAwmoA6nrJePpc2t%2FTkiG%2FwIK3gPCByxjBViDwwkTm9lDMl1WkUqRNC8cRdvkwWXQGUmAF9sIIouVjAwxvbLyQY6pgH%2B7T6huazL%2BT4q2N1uDRMDgBcp4m1KtZV7Gy9g5STGGZpz0oYzuzJ0IMXs%2FUtLVSH8oN%2BXmNt6YiKxiqtozk3gx4HgKRuGspAQXqrK7YK4xdpsDrFOBXCw1XvyszKX9TrW%2BMd%2FBph6dmxEStiVr%2FbH6zDN%2BlAKTTX0lWKo%2F4JJytYx3Cf9r4C4f3QKyViAR9h3MY6DBNDjl8%2BlO2JjvVDfti1%2B%2FZQG&X-Amz-Signature=444dbf02db44fc97ced990a9d72d3e7182cb49dcd3e1152ec1251b1e7f38cfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OVXNOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoL%2FzomQyE62%2BgFnxWqEOjt8wzCudirZnhahroDDKnSAiAfBzNeMQEnBbcjN8uu4v5N769NMbSYnUkMeUqiT5zlHyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM908DB3NqGu2pp1caKtwDM8Mm88ePHaFT8OySKjv3IHeA%2BHiS19C5Zx0rZqaA85DKL3%2Bd347dT49AYsi2eONqyVo04g6O80dlstKIvGU%2BV%2F0f6iaMHkKFLpv7gaQNa2YD0YXENeTykAk89ls7pb8CaG4TjhYwHMgH1g8ZS05gW5msayo6Y73MoL3wI4d4qG5BX%2BF6MN02mEJkuHrSCEEXGvS2gT%2BDBRj3ogFebJhoekMdoalnhENC35sS6pwKIS5q7%2FYFdfmbiDnDWWijqTdW5QnBW%2FEX%2FRa9gnSr6TGq0Dc34M3koutWVs9%2FwH3hdJ6n%2B7vt6phowtPWjfs%2Fli2Oi5DuiGrTWMVORe%2B6Q3DjRcOk5lsLe79FLyZpl%2FHpHHT6j9mnMQiKOGKJ%2FLsP%2BjqLWnSH36nurwoe2lVcSfI5Y2%2FEmJYgqiodt9yvLP1oAu8NeAhm03NSGYZGnZzUIN3kKm%2FCwYa08xJXo5fAWXwf%2FKKe5E8p2BMBpCZlAWgodnrIHCeqxYj267OPOFURcbVly1LZk7Byv69Z%2FdtoSpFCmh5N3c2cZpOWcdzje4y2pkV%2B%2BAwmoA6nrJePpc2t%2FTkiG%2FwIK3gPCByxjBViDwwkTm9lDMl1WkUqRNC8cRdvkwWXQGUmAF9sIIouVjAwxvbLyQY6pgH%2B7T6huazL%2BT4q2N1uDRMDgBcp4m1KtZV7Gy9g5STGGZpz0oYzuzJ0IMXs%2FUtLVSH8oN%2BXmNt6YiKxiqtozk3gx4HgKRuGspAQXqrK7YK4xdpsDrFOBXCw1XvyszKX9TrW%2BMd%2FBph6dmxEStiVr%2FbH6zDN%2BlAKTTX0lWKo%2F4JJytYx3Cf9r4C4f3QKyViAR9h3MY6DBNDjl8%2BlO2JjvVDfti1%2B%2FZQG&X-Amz-Signature=9261c4a334753b59ddbbfcb16d1a8cba1038b853b6d778f1f0ed1ebc5445250e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
