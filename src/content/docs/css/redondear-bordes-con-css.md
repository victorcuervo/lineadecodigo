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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FI2EH7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQMsRifZ1G6Qd7hZDW%2F6Ac%2B8XZsn%2F92B3zH377Y9qxAIgPnBH4QVqz7HZZ%2FYk20q4Oo7OdAiLOxp1DOSiKrn3wzEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdWeWWd9rrDkuZWxSrcAwI57512A3oFEm%2FqWfR%2BpgH2lQ%2F9KA3rPTh5%2BqDF9E%2B1EwZi52bDmGn41u61ms%2BGfHdWGXrE6a7ETJgrRjK1EKcZj%2FSo4PkbnxSszfdbPKJSDXIMSBL9AktCvgp%2BQf6WBEeyVi3UYqjNeDrVOZttlRhV%2FFS6dPT%2Fft2m6IieFQ5kSmwPDkFin96YgM7jPIugSP6uBN2xU%2F5xfJXGBdxEPHL2bb0htrYRK6rFK4XC8MUnfxtYDH27cNPG0EUgMjalvPsehM4gw2SHyzrgi01PGDUHcsB8stnqxUKHrVBq%2B56v5ynNz4xwG12JtOAnrnW50ds5FrYUF8fs2eQFzeezTwYh6XKcKEgh4%2BEMI6%2Fq2xnbhiv07UbvmoQmIZVDNty%2BiqMaqRm2acEuFw2RrFdcmNaJw859ehczzs4Wxd6g5LHj0nx%2Fts2nuVOZ%2BRUg%2BZ82eyNCsIGDI61lKYoX%2FkfkPzWvYyF7a8ezdMjUsWYMFwShzCbQ%2BuCAzMOzi5oW1FbWZ1riYVvuKO3NUWZdpyrOskBEx149QZqO9iBgCDzmha0cf%2BuJTi3naJyQ29YeO0U00NC98t6h2sxQh8q%2FkjL8GaVK%2FwNkMElPCT8JaznxKHEoIr3e84aadNKxSdD1MPao18kGOqUBO9Et6DMiVAPqlX6rNHS1AJqjjGD4wWY8fKTCocgPrrQa%2BlzdixLOetvxBADwSuu0PBpV2VkKEqXJsHlM2C5ku2qyAJjrCxKA2Uh19IdxVWMy%2Fq6PhzYn5RNa146CMdrBhleMlhyGNW%2FnkpzQlS4uBBJ6xq6OgWtmrgGJghFuw002ucy6jTNfZc7469B3hP2baYsA2FsquQVgL8fDnJAZSf3%2Bv1WZ&X-Amz-Signature=87f0b016357215b50d784e5c9e55c0c3137c89920d1608c12b59d303d01ec6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FI2EH7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQMsRifZ1G6Qd7hZDW%2F6Ac%2B8XZsn%2F92B3zH377Y9qxAIgPnBH4QVqz7HZZ%2FYk20q4Oo7OdAiLOxp1DOSiKrn3wzEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdWeWWd9rrDkuZWxSrcAwI57512A3oFEm%2FqWfR%2BpgH2lQ%2F9KA3rPTh5%2BqDF9E%2B1EwZi52bDmGn41u61ms%2BGfHdWGXrE6a7ETJgrRjK1EKcZj%2FSo4PkbnxSszfdbPKJSDXIMSBL9AktCvgp%2BQf6WBEeyVi3UYqjNeDrVOZttlRhV%2FFS6dPT%2Fft2m6IieFQ5kSmwPDkFin96YgM7jPIugSP6uBN2xU%2F5xfJXGBdxEPHL2bb0htrYRK6rFK4XC8MUnfxtYDH27cNPG0EUgMjalvPsehM4gw2SHyzrgi01PGDUHcsB8stnqxUKHrVBq%2B56v5ynNz4xwG12JtOAnrnW50ds5FrYUF8fs2eQFzeezTwYh6XKcKEgh4%2BEMI6%2Fq2xnbhiv07UbvmoQmIZVDNty%2BiqMaqRm2acEuFw2RrFdcmNaJw859ehczzs4Wxd6g5LHj0nx%2Fts2nuVOZ%2BRUg%2BZ82eyNCsIGDI61lKYoX%2FkfkPzWvYyF7a8ezdMjUsWYMFwShzCbQ%2BuCAzMOzi5oW1FbWZ1riYVvuKO3NUWZdpyrOskBEx149QZqO9iBgCDzmha0cf%2BuJTi3naJyQ29YeO0U00NC98t6h2sxQh8q%2FkjL8GaVK%2FwNkMElPCT8JaznxKHEoIr3e84aadNKxSdD1MPao18kGOqUBO9Et6DMiVAPqlX6rNHS1AJqjjGD4wWY8fKTCocgPrrQa%2BlzdixLOetvxBADwSuu0PBpV2VkKEqXJsHlM2C5ku2qyAJjrCxKA2Uh19IdxVWMy%2Fq6PhzYn5RNa146CMdrBhleMlhyGNW%2FnkpzQlS4uBBJ6xq6OgWtmrgGJghFuw002ucy6jTNfZc7469B3hP2baYsA2FsquQVgL8fDnJAZSf3%2Bv1WZ&X-Amz-Signature=da8cc50bfcc313e167676c032b832f268d56d59ed47462725402e1a4a698033a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
