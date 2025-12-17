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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SENTMYN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnZJkSGOZNZzfhXERyM1Hk8XTmqr7IVvQ8jfF9G9DFPAiEA4HVkvXja0erAw6R5CW8WWKFpevzTdyjLtETjU%2BXXMAoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcJ426zSSsQxkp2NSrcA3hGeQIH%2Bl24ea0S4bzxvXMHMDm0Vq0XGA8%2B70K9ZYHvAiUzQn5VOPfq84jPCQ93xY9sVX07ey1yBWcfPyuEEBRKDP%2Bt9fvaI5RlcDEPozT9QV%2BjKneNASBBO6Ig9jx%2F20vMJjAqx0HPQe3mjoubuB8bFyl5dUnrI5IetliGPIgtZ2cV5yA%2B1SBta8BWEsSWvQ4GJXU%2FBGFiQESTLJa9giyfb3EThlaj5n%2FRH1m92TrvF2Guj7uEvpb79862G8VAeQgp1FPqj7bHxsaj92%2FCVWPiGwEdGlFb5ZSG0UctpBaGS%2BlDMbvuRXAWR%2FTuvDl1FYemMiWdBzBJf3nz%2BEL6P%2Fg0w6jQ9zxuGRl5FMIxPTekiFe0WD0Psr9kSpKUt3KQptXUXwtNZlxh2iMizSL6iDmpC6iMKOlRNf%2FUA1XjIt8BntrfjJ4cwlmQpXVLzg5%2BzPUj%2FydPEf8UZXrZneclB85TZL%2BX73WKvTrM%2F3GgYbhCywu0hz7o1CMp0qSEYncxSWlCW1C57md2vagL6QwRv0u%2B5VzY64vPsny%2BklvPnB63Z79y8Vppu64qVYcqSbzsZFlpNkv65LjdSiZI2QRBzbTHbr4AR51ZgVh7dVNy7E7OIcA9ICZ13zOQKvBXMPSBi8oGOqUBHMSEiD%2FrRzf8SI4kSmCPsiB%2FtNwF2noMirEswE0SMIOtKfid8Ru%2FK8TKvBgBmEGLEVNfmG6cbgMWOMWCqrmJc%2F0IrhCWB5Wtmcj%2F7QYwoyqaMBnrw0x1aOt1D0FJXQoWX4hH6yQQNFSEcfka%2BuImlW1gaG1KU0bxNSDPAQewcrn%2FFRtH5NK8nR8CNw7QDRNVGu60EAxeBsjDOL8dDY4cfDkQMyXG&X-Amz-Signature=f1cd967803ba49e5e0d47bbdf94250b303610b54ec167634c155c4267b27aa43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SENTMYN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnZJkSGOZNZzfhXERyM1Hk8XTmqr7IVvQ8jfF9G9DFPAiEA4HVkvXja0erAw6R5CW8WWKFpevzTdyjLtETjU%2BXXMAoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcJ426zSSsQxkp2NSrcA3hGeQIH%2Bl24ea0S4bzxvXMHMDm0Vq0XGA8%2B70K9ZYHvAiUzQn5VOPfq84jPCQ93xY9sVX07ey1yBWcfPyuEEBRKDP%2Bt9fvaI5RlcDEPozT9QV%2BjKneNASBBO6Ig9jx%2F20vMJjAqx0HPQe3mjoubuB8bFyl5dUnrI5IetliGPIgtZ2cV5yA%2B1SBta8BWEsSWvQ4GJXU%2FBGFiQESTLJa9giyfb3EThlaj5n%2FRH1m92TrvF2Guj7uEvpb79862G8VAeQgp1FPqj7bHxsaj92%2FCVWPiGwEdGlFb5ZSG0UctpBaGS%2BlDMbvuRXAWR%2FTuvDl1FYemMiWdBzBJf3nz%2BEL6P%2Fg0w6jQ9zxuGRl5FMIxPTekiFe0WD0Psr9kSpKUt3KQptXUXwtNZlxh2iMizSL6iDmpC6iMKOlRNf%2FUA1XjIt8BntrfjJ4cwlmQpXVLzg5%2BzPUj%2FydPEf8UZXrZneclB85TZL%2BX73WKvTrM%2F3GgYbhCywu0hz7o1CMp0qSEYncxSWlCW1C57md2vagL6QwRv0u%2B5VzY64vPsny%2BklvPnB63Z79y8Vppu64qVYcqSbzsZFlpNkv65LjdSiZI2QRBzbTHbr4AR51ZgVh7dVNy7E7OIcA9ICZ13zOQKvBXMPSBi8oGOqUBHMSEiD%2FrRzf8SI4kSmCPsiB%2FtNwF2noMirEswE0SMIOtKfid8Ru%2FK8TKvBgBmEGLEVNfmG6cbgMWOMWCqrmJc%2F0IrhCWB5Wtmcj%2F7QYwoyqaMBnrw0x1aOt1D0FJXQoWX4hH6yQQNFSEcfka%2BuImlW1gaG1KU0bxNSDPAQewcrn%2FFRtH5NK8nR8CNw7QDRNVGu60EAxeBsjDOL8dDY4cfDkQMyXG&X-Amz-Signature=2f513c6b24536065adfc1a2c16f75114ba32138bf0f5c7308b1628f6502e15b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
