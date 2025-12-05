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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4A3ZBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQRgmpC7PdRHkYcAa1gzfaIHwFKAnR5tauBG0fKpIstAIgNsIT9CIUKHnvbJEVwniHmrc5sgWE6SAObet%2FtzDfzy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBhL%2B9AATdymtPaXXyrcA0NpAdVosRwy8yBgdaPOcDR12Zd76y2avdd5fcmwGsPivO5xQXN2%2F1yBxl5pTznxT1A5bpoN5Q5%2F6fQhRDErrUylffpTJBs9OaP8OXrdNlpuGn6RAV5IamliabcdYnp2LVzXmQ6LpGlZqMCGxIWI575cpQd52k2j4GGcVBgFhaQf2z2TYtwmuj4WfHEn2b3lu1QQVFNUUgrIaa1n9xwFOo6fucEHHgoXuoRXwOLv82XKNMxAtuPvxgQo8XzBeL1KKaS%2FE3upvyjFQimUKV7rFskzC9g5xBpPlvRv1a1x4KdEc%2F8VJoZPPCKNm3S7wJEc%2Fq3OrRgEBjQEZVSXRFszPso62UvxHKAW189ehVn1piPpYdYgt7TG9%2FBg%2FFZGFqmrfVFoRHcMOw8RGK%2Bxik1kdVD7JtutGOrRnKt6WslI0OB%2BZ5jxfKdOvK%2B8nSaeuAZ0HZpM2Q%2Fjz%2BjOwfZm7X83H5nvSZfyKRP2Gh%2F3iHXknzUgEu4jPxypie8FalIe%2F0W9Q7bF44G8V6wVw3oggMfGqbwGqH%2FoLwS%2B6pgkJgglMZ9WNddODcMKuD8%2FcwiVmB%2BsWY%2BAJt1PvEh1ItwyfshrBCKtQU7ThLSkWj01bA%2BlpFtCjt4uvEzHV0GvtkZjMLHGzckGOqUBD7PD6CwRrpwFpCgZXP%2BO3osiTK%2FYwenOlgYD3%2BwibSkZkVpQNI9e2Zdm995PGGYx8EBKMhndB3yaRMySoepunxFENt6M2cARf56Ov7sA03NnNUAi1aDCMb1Xhadk79gLEcSysJbWfMfrr%2FG3rQhsB3%2B1nxnwTGoe22G0ON0J%2FjlaOoR4MCXDWuDighq8CEMCPQzWit8VrD4OUNMFYWgp0GvSJVng&X-Amz-Signature=56d8e77425a454628900690c8a375b08d40d8652b711a146ad1842c3a94d1b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4A3ZBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQRgmpC7PdRHkYcAa1gzfaIHwFKAnR5tauBG0fKpIstAIgNsIT9CIUKHnvbJEVwniHmrc5sgWE6SAObet%2FtzDfzy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBhL%2B9AATdymtPaXXyrcA0NpAdVosRwy8yBgdaPOcDR12Zd76y2avdd5fcmwGsPivO5xQXN2%2F1yBxl5pTznxT1A5bpoN5Q5%2F6fQhRDErrUylffpTJBs9OaP8OXrdNlpuGn6RAV5IamliabcdYnp2LVzXmQ6LpGlZqMCGxIWI575cpQd52k2j4GGcVBgFhaQf2z2TYtwmuj4WfHEn2b3lu1QQVFNUUgrIaa1n9xwFOo6fucEHHgoXuoRXwOLv82XKNMxAtuPvxgQo8XzBeL1KKaS%2FE3upvyjFQimUKV7rFskzC9g5xBpPlvRv1a1x4KdEc%2F8VJoZPPCKNm3S7wJEc%2Fq3OrRgEBjQEZVSXRFszPso62UvxHKAW189ehVn1piPpYdYgt7TG9%2FBg%2FFZGFqmrfVFoRHcMOw8RGK%2Bxik1kdVD7JtutGOrRnKt6WslI0OB%2BZ5jxfKdOvK%2B8nSaeuAZ0HZpM2Q%2Fjz%2BjOwfZm7X83H5nvSZfyKRP2Gh%2F3iHXknzUgEu4jPxypie8FalIe%2F0W9Q7bF44G8V6wVw3oggMfGqbwGqH%2FoLwS%2B6pgkJgglMZ9WNddODcMKuD8%2FcwiVmB%2BsWY%2BAJt1PvEh1ItwyfshrBCKtQU7ThLSkWj01bA%2BlpFtCjt4uvEzHV0GvtkZjMLHGzckGOqUBD7PD6CwRrpwFpCgZXP%2BO3osiTK%2FYwenOlgYD3%2BwibSkZkVpQNI9e2Zdm995PGGYx8EBKMhndB3yaRMySoepunxFENt6M2cARf56Ov7sA03NnNUAi1aDCMb1Xhadk79gLEcSysJbWfMfrr%2FG3rQhsB3%2B1nxnwTGoe22G0ON0J%2FjlaOoR4MCXDWuDighq8CEMCPQzWit8VrD4OUNMFYWgp0GvSJVng&X-Amz-Signature=a0f3a328df6df6e7f6a2e0e7417211028cbc8bdf8c497e348375dc0909c1f481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
