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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CWREI7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoFSTAYoBySLxESkdVEuO9hk%2B5igDBCmhYMVMD5mrNwIgRYbvAl7J1vZB3I0tJ5VUXNDJkER0M853lGj1BwweqXoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQPt3u7l94X9oqBKCrcA3RA68HyoeH4SMH7eUeZZhHX6%2BSVimwJG4LETVdw%2Bm3X932vEVebIEeH4Norw58Rtm8yGnGAWsCaqOSs4yh9xWryStnOzwyA0btQ70B6ocBPEoNygZ%2F9c9EGz9V%2FdnGEhFuiCxVY9jKDKi2CRi8OXZdcA80TFWWqdVqu3g4aDe0LhtDgL2lUse2qZJxqFI517i5g0Y1hZlK9emFPrhpJkbv5awHlnsBrV%2FKjVXuxKlJW0z2SHNwlDV6bOokH3Hq%2BqCXDHXqcn9q0nNM9vuxWwuOgUuBjx0wqJbBM4UdbGwm0WYPWnVXrv9viYy1ryafsIPoWB7HihA0Pxt2rAOaVOAfDUmPQidF3oTqp%2B4ZZeaydgxNPrDaybz7PAgGrDJ1ttbPvyNPqCvLAw%2FtIrTrgDRQxdUPsf4haqGa%2BXzQprrwrYJ9hc%2B56RNFdK%2BY0hp61qjKxNwoOVazks5DenwyTGqBywWJ8KoVNJHx2SFrNVmruCacGmx3fdOUr2O%2FxWDPWmzpFqpbAL4J8pj5kjdtRpRDDbv7bll7uGkJcXU9FeQDQAa0caUkORDBnxjPmCF0shps7zzKuqaR9DbvhsinhnLjTMDDe3ZPtf%2FIazstf9o5xY7U9myCDAJWBbaofMPOZ1ckGOqUBHMhPaDcAYCHhiB1piniWt7IKoFBQTgu5INgS%2FnkVTFD02cuGCDifvKLKW5Pwz9UTgBP2%2BfuC%2Bsr62B0tAf6dNQg35lRQL0n5i4paOUlHCjcTLKtvKq32JpZW2J3NW17zSQIHYOoVVr8Wl1waBDAYHGUtRwD3JbGyxO3LBBQ4%2BRsGo1WIbggiVJLtlZFnbGCC3GobaHf6jYBO0ubB3kOqiwEel%2FUf&X-Amz-Signature=45060469ed5ed5bbcd030512d5d30e80635cad2bb5266d22611e3bac1e456027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CWREI7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoFSTAYoBySLxESkdVEuO9hk%2B5igDBCmhYMVMD5mrNwIgRYbvAl7J1vZB3I0tJ5VUXNDJkER0M853lGj1BwweqXoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQPt3u7l94X9oqBKCrcA3RA68HyoeH4SMH7eUeZZhHX6%2BSVimwJG4LETVdw%2Bm3X932vEVebIEeH4Norw58Rtm8yGnGAWsCaqOSs4yh9xWryStnOzwyA0btQ70B6ocBPEoNygZ%2F9c9EGz9V%2FdnGEhFuiCxVY9jKDKi2CRi8OXZdcA80TFWWqdVqu3g4aDe0LhtDgL2lUse2qZJxqFI517i5g0Y1hZlK9emFPrhpJkbv5awHlnsBrV%2FKjVXuxKlJW0z2SHNwlDV6bOokH3Hq%2BqCXDHXqcn9q0nNM9vuxWwuOgUuBjx0wqJbBM4UdbGwm0WYPWnVXrv9viYy1ryafsIPoWB7HihA0Pxt2rAOaVOAfDUmPQidF3oTqp%2B4ZZeaydgxNPrDaybz7PAgGrDJ1ttbPvyNPqCvLAw%2FtIrTrgDRQxdUPsf4haqGa%2BXzQprrwrYJ9hc%2B56RNFdK%2BY0hp61qjKxNwoOVazks5DenwyTGqBywWJ8KoVNJHx2SFrNVmruCacGmx3fdOUr2O%2FxWDPWmzpFqpbAL4J8pj5kjdtRpRDDbv7bll7uGkJcXU9FeQDQAa0caUkORDBnxjPmCF0shps7zzKuqaR9DbvhsinhnLjTMDDe3ZPtf%2FIazstf9o5xY7U9myCDAJWBbaofMPOZ1ckGOqUBHMhPaDcAYCHhiB1piniWt7IKoFBQTgu5INgS%2FnkVTFD02cuGCDifvKLKW5Pwz9UTgBP2%2BfuC%2Bsr62B0tAf6dNQg35lRQL0n5i4paOUlHCjcTLKtvKq32JpZW2J3NW17zSQIHYOoVVr8Wl1waBDAYHGUtRwD3JbGyxO3LBBQ4%2BRsGo1WIbggiVJLtlZFnbGCC3GobaHf6jYBO0ubB3kOqiwEel%2FUf&X-Amz-Signature=0915460237580415ef55941d64dfaaf881ccf86f145e3323578de05306b58320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
