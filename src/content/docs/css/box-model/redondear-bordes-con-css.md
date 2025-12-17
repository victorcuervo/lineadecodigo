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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTQMG6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOytTR29DEpIClOBMBsNBTOdzfWIM6GdWzOHyCsidwyQIgEgajBk9cnzJSQj7xl3rBDNO6YlLTny0VBFQijVPjxAYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMEYN1hp5zPkRMmPFSrcA7yqHxVy3ZJmGWJsBIlSUpJGohauP%2BgJEVl8FzVrbEFcdbTC%2BMkijw%2F2N3OvB5H%2FTXv2IbdPvy%2Ffuwzc4RttWxCOfTf2wEpfqE%2BLBbLvlF0myeK5BtDnfvvhNjeBqKjGy5lNPwxO1WJd7hkO8R9M1XsgpxHg5uQKMqbZfUPusSGl1AgEij0gRnvtPxFOEs2srSvq0BkbM2k9bp1NIj1rE8X5U%2FuAt4EGC1GOGnvP6JNpYL1sJ3k6vkpSqEWF3XFHFnnsSDe%2BxseYKBa5B0SxmgchxtW9zqNnlusOm4lX1KB%2Fhe53CJs7OS1gfyuQULfWt1olvLgsp2qBAbEapAkRFTcwpYaHLKkulwZ%2BqYpJf1WQQs9unMFoiICw2XQgUz%2BduLP9DotH6YkYmn4EarxDpGS0BtFZf78cCa1Teh9Swo6byQWXcAKqNT7jnWquRnPLgp9a3CQgmoJHX5AXCnyTC%2FvebYrpMvG2f%2FS42N7sNLClnKxa%2FKVDn93GiaZJxe%2BFOZLi%2FO614902si2aTbl0%2FQElOpVPYmIine97WavY4sXgU3Poc5dp1xGBqloYt6PPiFZ4gKc%2FzW%2Bmfu0hKFmSrSdhtEt%2BryxtJuKLr8N3Z%2FHAhXWrlYkN34DVvur6MKC4icoGOqUBotUlBwCYIqHqO%2BQymo6XZBckmfoUnq2T4S7KMgYS6bmV0zB4LPT97EuDEEiaSJ7UWjV4MMpBvsVVD6NA4kXPGhDG7wP31FolrpWasRkV6yEhdnhuAnl84RUXRwdXQ%2FmlOLQZ9v1YEhM6uxxvQcgY6WcE9XNYNU0qF4qYhFtxi4NVRyAGY74OuFcRoNhtHZBeQAmKWVDawfNa1hso6YiAQ9GRW9h%2B&X-Amz-Signature=03ef12ad3c9b6effb50be0ca328b306a2212ca72a3db189be7dceee752feb9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTQMG6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOytTR29DEpIClOBMBsNBTOdzfWIM6GdWzOHyCsidwyQIgEgajBk9cnzJSQj7xl3rBDNO6YlLTny0VBFQijVPjxAYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMEYN1hp5zPkRMmPFSrcA7yqHxVy3ZJmGWJsBIlSUpJGohauP%2BgJEVl8FzVrbEFcdbTC%2BMkijw%2F2N3OvB5H%2FTXv2IbdPvy%2Ffuwzc4RttWxCOfTf2wEpfqE%2BLBbLvlF0myeK5BtDnfvvhNjeBqKjGy5lNPwxO1WJd7hkO8R9M1XsgpxHg5uQKMqbZfUPusSGl1AgEij0gRnvtPxFOEs2srSvq0BkbM2k9bp1NIj1rE8X5U%2FuAt4EGC1GOGnvP6JNpYL1sJ3k6vkpSqEWF3XFHFnnsSDe%2BxseYKBa5B0SxmgchxtW9zqNnlusOm4lX1KB%2Fhe53CJs7OS1gfyuQULfWt1olvLgsp2qBAbEapAkRFTcwpYaHLKkulwZ%2BqYpJf1WQQs9unMFoiICw2XQgUz%2BduLP9DotH6YkYmn4EarxDpGS0BtFZf78cCa1Teh9Swo6byQWXcAKqNT7jnWquRnPLgp9a3CQgmoJHX5AXCnyTC%2FvebYrpMvG2f%2FS42N7sNLClnKxa%2FKVDn93GiaZJxe%2BFOZLi%2FO614902si2aTbl0%2FQElOpVPYmIine97WavY4sXgU3Poc5dp1xGBqloYt6PPiFZ4gKc%2FzW%2Bmfu0hKFmSrSdhtEt%2BryxtJuKLr8N3Z%2FHAhXWrlYkN34DVvur6MKC4icoGOqUBotUlBwCYIqHqO%2BQymo6XZBckmfoUnq2T4S7KMgYS6bmV0zB4LPT97EuDEEiaSJ7UWjV4MMpBvsVVD6NA4kXPGhDG7wP31FolrpWasRkV6yEhdnhuAnl84RUXRwdXQ%2FmlOLQZ9v1YEhM6uxxvQcgY6WcE9XNYNU0qF4qYhFtxi4NVRyAGY74OuFcRoNhtHZBeQAmKWVDawfNa1hso6YiAQ9GRW9h%2B&X-Amz-Signature=e788d035d613f0bb8944a4d296715ddd29b0e91ccda72dc280b392388468e337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
