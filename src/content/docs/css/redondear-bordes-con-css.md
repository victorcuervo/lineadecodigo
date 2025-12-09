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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHPBFJP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICconOrw9Q7lCsPnpEsNI2L0WFHY6l6yIJg8%2F%2FOGgRYDAiEA3vY%2BnmrbHjs5DzJZ9L9dNepvMiwAhWQ2H7KSkQN%2FJ44qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnuNMSZixIpA8jUWCrcA9mdZy1aWummkbK6mTjjF%2B0YzorpDAIszbubG0VhroZag%2FfqmAKRddyqcEqzkEwVtNR%2FDymS%2FJAnTRcQBLTRwEXmoQgd4r6E3jw0jqeGwXqWApUoq5F%2BQ2%2BliMNjJkXmkXq9il5YtBm0W9K1Rwwn%2BPgon00eF9joXF%2FxyhSxiwKEHzJme9jSWobL842s23n1qvZbcEwoVmeIEs0hS5tSXlIJADO%2BjbKwP8%2Fzd%2FnFQoBiXtX7tF6UdcOIU77ucTskHoG%2FeYKIrrapWEoVmbY0Z4xUwsgpRbXW6wKKbSLF0CrkxiKQdrZI76HlB3bo4E5X0ke2pY%2Bb4DLerWKYlMEdY08op6L6RBOpUU%2BOw6Y14j9sGgtCjE%2BPN8rPd1ypobwbvpXXN7gvLeat5k6Mb%2FLhr3z%2FKEKmOHrEwZGRhHDMpflskvTFV7Pq6XW6UheLlydznlTFmBEDodfrlsAPdPR63lQ8L86eiZUi4Tp%2Bu8w%2FKZOsCmJeMGLfSgY60Hhc%2FBAPAE4EaRvgQ5b3L5XubcX5YsEjpWWoN15WjQUldJVgtbpDsrLurRHjuO2cvU7Zbh2N22newnJsTeImnITv9Qoy49asBh5VBdGPqpcDxxle60hDcguEDoTXLHHMcBAxMJ%2Bl38kGOqUBEPmkbRCZY4%2FG9Hbp4jk4bKoq%2BRCwyaEet8CzWpGIrHtrwv7D4hsXv2WVrZJi%2FLpLvDdQvevJ1EP%2Fd01MNzO2LU%2BsG76qSFmgdY%2FdZ8fAEvaTnVEh8eduxhBp4LheE6OTvPOYqUi2wCpKYdzEjcGvMOoavyCEnZX2eHzms6jfbghgIJY3%2BpHYlFadgXNdH4qRlqoMMhJd%2BSsuVe3wJla8c9Gzt5Sc&X-Amz-Signature=5757989d6776887676a4d561c863fb3054037a460263e61c68ba4bd0ee492342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHPBFJP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICconOrw9Q7lCsPnpEsNI2L0WFHY6l6yIJg8%2F%2FOGgRYDAiEA3vY%2BnmrbHjs5DzJZ9L9dNepvMiwAhWQ2H7KSkQN%2FJ44qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnuNMSZixIpA8jUWCrcA9mdZy1aWummkbK6mTjjF%2B0YzorpDAIszbubG0VhroZag%2FfqmAKRddyqcEqzkEwVtNR%2FDymS%2FJAnTRcQBLTRwEXmoQgd4r6E3jw0jqeGwXqWApUoq5F%2BQ2%2BliMNjJkXmkXq9il5YtBm0W9K1Rwwn%2BPgon00eF9joXF%2FxyhSxiwKEHzJme9jSWobL842s23n1qvZbcEwoVmeIEs0hS5tSXlIJADO%2BjbKwP8%2Fzd%2FnFQoBiXtX7tF6UdcOIU77ucTskHoG%2FeYKIrrapWEoVmbY0Z4xUwsgpRbXW6wKKbSLF0CrkxiKQdrZI76HlB3bo4E5X0ke2pY%2Bb4DLerWKYlMEdY08op6L6RBOpUU%2BOw6Y14j9sGgtCjE%2BPN8rPd1ypobwbvpXXN7gvLeat5k6Mb%2FLhr3z%2FKEKmOHrEwZGRhHDMpflskvTFV7Pq6XW6UheLlydznlTFmBEDodfrlsAPdPR63lQ8L86eiZUi4Tp%2Bu8w%2FKZOsCmJeMGLfSgY60Hhc%2FBAPAE4EaRvgQ5b3L5XubcX5YsEjpWWoN15WjQUldJVgtbpDsrLurRHjuO2cvU7Zbh2N22newnJsTeImnITv9Qoy49asBh5VBdGPqpcDxxle60hDcguEDoTXLHHMcBAxMJ%2Bl38kGOqUBEPmkbRCZY4%2FG9Hbp4jk4bKoq%2BRCwyaEet8CzWpGIrHtrwv7D4hsXv2WVrZJi%2FLpLvDdQvevJ1EP%2Fd01MNzO2LU%2BsG76qSFmgdY%2FdZ8fAEvaTnVEh8eduxhBp4LheE6OTvPOYqUi2wCpKYdzEjcGvMOoavyCEnZX2eHzms6jfbghgIJY3%2BpHYlFadgXNdH4qRlqoMMhJd%2BSsuVe3wJla8c9Gzt5Sc&X-Amz-Signature=2d256c82bd81db703639ba6b856255827d58e2918378acadab3e0ade4b95eaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
