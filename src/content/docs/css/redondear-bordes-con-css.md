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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEOCSZO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqIdycFJ9GOeV%2FBFuLFbwowpxGxKTqBl7B8QAT2esHQIgEJUKyj6C%2FKYkRBcvU5ZQl9rvXYKQxuLL7LpikF3x5FYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCayfwJvoK%2FJe4TnAyrcAzAJ8w1YgBOrRfBUG0fotJ2iRFXpuG3Ef0ZsKzOOsH%2B7FZDa3ioI6c3vVL7CyRZcxhGvJpLnT%2F07xwm1dYhv%2BRbAPIEYBU%2BICDsqvPCYoAvJJQ8LloyJQHzx72enZzDTGpArQbY34cUUOzz3y%2B1Zs6X7auuTqE5yvpDmqo0%2Fm8zorby%2BnJKZZV4au2qa14VNKGiSzM1yfW8Orvo3ijmqc%2FUHKU0AyrgRdt4MWE7wgAKsgRUq%2BZN%2BZDj2EyZz7%2BqWuvTpLgp%2Bn9logZoWLC3x36WQWacnkG%2BKMWaiIENJomnII3HfyDuLcfovPzWwyH%2BM0Vw6W8UX8j974dETXlYqJy7uPKqW8mZGkKNYPb5yprob9yGxcG1Rn97U%2F7YzYG62Go8LFwygRuFCgPqtAxT2zGTvtXZLA0JFBQnckkGI3v7MD5ln69XeiGV4IeCuV7%2F33HvVlP%2FwINJ%2FUHncwBd2MoNELDrSKMdllDqwJAlVgPEcngD%2FDBz7I1pcdKI1xG0lm%2FBsNDRNIW3eE7UVI7wzsyfAkgftrW5QETBW4MYGs8zGaSvW5ox5sgSsggpiFQckU%2BaFW2DmH10%2FESMP7cE4uEKNsEFI1rRF4C2toGYitiQuk0RWVNRsOABK0uodMLSMyMkGOqUBeUPujbNu3lWUuoiC%2BQ2WnJk%2FXU07RZLBHNGROu%2B6nuTifXBz3E01Jbl3fxHdUqxstKulk1ucHEJy31Z9km%2F5Z182YtRa0%2BfbZdbp%2Bca5AL89FP2v8iYYv%2FSzCzumOot%2FasflJ3jt4FMI7EGWPQYI4V5kcC9ryzrvwhOmw%2F7bkJ8il1pZXnCgU9pXHcw99IItnaKxxZ%2BAXcFNUW02xexEH%2Fr%2Bj1go&X-Amz-Signature=40ce40364614ba23dfeb08ab3b81ca3bd471c0dcaf2aba97ef762b9886898fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEOCSZO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqIdycFJ9GOeV%2FBFuLFbwowpxGxKTqBl7B8QAT2esHQIgEJUKyj6C%2FKYkRBcvU5ZQl9rvXYKQxuLL7LpikF3x5FYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCayfwJvoK%2FJe4TnAyrcAzAJ8w1YgBOrRfBUG0fotJ2iRFXpuG3Ef0ZsKzOOsH%2B7FZDa3ioI6c3vVL7CyRZcxhGvJpLnT%2F07xwm1dYhv%2BRbAPIEYBU%2BICDsqvPCYoAvJJQ8LloyJQHzx72enZzDTGpArQbY34cUUOzz3y%2B1Zs6X7auuTqE5yvpDmqo0%2Fm8zorby%2BnJKZZV4au2qa14VNKGiSzM1yfW8Orvo3ijmqc%2FUHKU0AyrgRdt4MWE7wgAKsgRUq%2BZN%2BZDj2EyZz7%2BqWuvTpLgp%2Bn9logZoWLC3x36WQWacnkG%2BKMWaiIENJomnII3HfyDuLcfovPzWwyH%2BM0Vw6W8UX8j974dETXlYqJy7uPKqW8mZGkKNYPb5yprob9yGxcG1Rn97U%2F7YzYG62Go8LFwygRuFCgPqtAxT2zGTvtXZLA0JFBQnckkGI3v7MD5ln69XeiGV4IeCuV7%2F33HvVlP%2FwINJ%2FUHncwBd2MoNELDrSKMdllDqwJAlVgPEcngD%2FDBz7I1pcdKI1xG0lm%2FBsNDRNIW3eE7UVI7wzsyfAkgftrW5QETBW4MYGs8zGaSvW5ox5sgSsggpiFQckU%2BaFW2DmH10%2FESMP7cE4uEKNsEFI1rRF4C2toGYitiQuk0RWVNRsOABK0uodMLSMyMkGOqUBeUPujbNu3lWUuoiC%2BQ2WnJk%2FXU07RZLBHNGROu%2B6nuTifXBz3E01Jbl3fxHdUqxstKulk1ucHEJy31Z9km%2F5Z182YtRa0%2BfbZdbp%2Bca5AL89FP2v8iYYv%2FSzCzumOot%2FasflJ3jt4FMI7EGWPQYI4V5kcC9ryzrvwhOmw%2F7bkJ8il1pZXnCgU9pXHcw99IItnaKxxZ%2BAXcFNUW02xexEH%2Fr%2Bj1go&X-Amz-Signature=dbf3519c2085aa3a13410c28d4acf94bf74502448e1321a7e236373fd785913a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
