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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZBOESL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrCAwR0dVWfQ6Qtx6glPdvH6zfvVbTsrJyuwnMesu5xQIgf5dohzV56K%2FEhCdj3dSfTBW0983q%2BBIG6YLPHdbPv8IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcqE3uIHaoR7eSouircAwz2mxtvM3zUkoV5JXAeFv2tU%2FovWn9KMs7703k%2BqfniLqfZDfMSESYMyX4qx5iHVhrZBRiN4OOlv3AM30jPcyPDAl3aYPDENnzcihx5mcLgaeoe8XcWqjGJBQj%2BPmh4UYgVc9NIoPgH5hSvXc7WoYZEnkYRMMkrt5BpYXChCa0mrG8LY%2F9Ca9owuv2ZJNfblSd6AU25Ohj4RErCbEPdlCFp495S8uoL32ee9x81TNHBcwJKbvRHMoB21qAC9Zuw2mYECCHGGBm%2BGwFLaute5LaRB%2BHb6jkHhdFDyF%2BeBUproPLEY6juDQVBbtQ4rHdkOxlDAUbUQ5htDfaKKKgC8nbzjohrTpGJa2d4J%2F5x61E%2BE%2FBLJF5p1Su3NrhpscSRPgM%2BslBiPGWfk6wDUm7UXN8194w%2FyqI0dqPn2x7fhDGLwXUwmLZbDsJBGKdYNNg6UfwAilsd31iLp5UQuqobXz0Kezn0WxfSDxvzuS%2Fn50lWjSA4LSs8m6YcfBHak4PW22%2Bxan8NcE9qmp5vgAjypBmzqwz9VwdKY8t3%2Bzo89tof4ziKGRnfbBQeLxPSz1SU9cURoURrCJ2IQEKGVyWYat2S4SuDnu0pWao6D3r6dQM6VVpZd3c5jfdK14F%2BMLj90skGOqUBPnmn%2BqyqWiqg9XvkMdRb9aO0Lo8uInhjrvCkrds8Yhsdt4UfsJvBMfATDnEJ0r5Gfp010VbrRDbyPkWScOGLFR4qziwpXZ9STipuGQXwNt9TEXUV4%2BMOXAXTMmJiJLep%2FpeS53s3iN3A8z%2Bh9PBXnlIhRewLEMWmPza1UzK%2BCLSoE8aDrMb2QCkWsyd7U0r9og6ApVNhE5sYqUvVgjGwABDqcfHK&X-Amz-Signature=110fe919d6862fc2187773351f83d89b7d495056edbb4a27d9e3b2bc6b7638a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZBOESL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrCAwR0dVWfQ6Qtx6glPdvH6zfvVbTsrJyuwnMesu5xQIgf5dohzV56K%2FEhCdj3dSfTBW0983q%2BBIG6YLPHdbPv8IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcqE3uIHaoR7eSouircAwz2mxtvM3zUkoV5JXAeFv2tU%2FovWn9KMs7703k%2BqfniLqfZDfMSESYMyX4qx5iHVhrZBRiN4OOlv3AM30jPcyPDAl3aYPDENnzcihx5mcLgaeoe8XcWqjGJBQj%2BPmh4UYgVc9NIoPgH5hSvXc7WoYZEnkYRMMkrt5BpYXChCa0mrG8LY%2F9Ca9owuv2ZJNfblSd6AU25Ohj4RErCbEPdlCFp495S8uoL32ee9x81TNHBcwJKbvRHMoB21qAC9Zuw2mYECCHGGBm%2BGwFLaute5LaRB%2BHb6jkHhdFDyF%2BeBUproPLEY6juDQVBbtQ4rHdkOxlDAUbUQ5htDfaKKKgC8nbzjohrTpGJa2d4J%2F5x61E%2BE%2FBLJF5p1Su3NrhpscSRPgM%2BslBiPGWfk6wDUm7UXN8194w%2FyqI0dqPn2x7fhDGLwXUwmLZbDsJBGKdYNNg6UfwAilsd31iLp5UQuqobXz0Kezn0WxfSDxvzuS%2Fn50lWjSA4LSs8m6YcfBHak4PW22%2Bxan8NcE9qmp5vgAjypBmzqwz9VwdKY8t3%2Bzo89tof4ziKGRnfbBQeLxPSz1SU9cURoURrCJ2IQEKGVyWYat2S4SuDnu0pWao6D3r6dQM6VVpZd3c5jfdK14F%2BMLj90skGOqUBPnmn%2BqyqWiqg9XvkMdRb9aO0Lo8uInhjrvCkrds8Yhsdt4UfsJvBMfATDnEJ0r5Gfp010VbrRDbyPkWScOGLFR4qziwpXZ9STipuGQXwNt9TEXUV4%2BMOXAXTMmJiJLep%2FpeS53s3iN3A8z%2Bh9PBXnlIhRewLEMWmPza1UzK%2BCLSoE8aDrMb2QCkWsyd7U0r9og6ApVNhE5sYqUvVgjGwABDqcfHK&X-Amz-Signature=51523e5b31b6fcef59d4f90c985f3d2611bb01c7376010be85c5aab693ef7742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
