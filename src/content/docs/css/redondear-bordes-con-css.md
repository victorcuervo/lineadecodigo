---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPPNPDB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEZyi%2B5pyJKxGS01zGYUbBFnhJ9LZF7DgI4NY3PEenXjAiEAx49jhKM3hPMan3uzk1X6o656w2oj5KAIqAVkiqjCWUMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJgRBZ2%2BY7n091Z3hyrcAxxcwwv8%2FbsB7m08Ekg%2BEVPnjxbR1yqfeuxvWBZkVrobAG6YPhvv4IVoRpHfZINT4hw2mr9NY0au225dh4sGy1D6SQXbTmlCSyeqrA%2Bu6%2FTJj3yj%2Bwg%2FDvQ1LNmgAuhWzjVcM9zSMIJZmYDs5ChuMpohsUOOCDi0QK3eg0Nh8KhYf1cbbK4zxvHgDhK0mtBLd8HJrsRsTtgRryvvEM8bHTFn1Zi%2BF4%2FzWhfEONUC28ELVAgVa0%2BFDclNfmrc4aj33L9aKlYzoLWszW3YNhqFMmjRrNHF1tIpm9Zrj04FNNshT8dtpFP7sA9%2FOflWF8jSqym%2FwymJ1hJOe%2BAc4BuCj4Kdy7w7PPlECwQhyF1BofJZD%2FBjJzWBouH%2B6GwUDuO%2BAyoGMcqtXZ%2FqLB2aNAaa6qDdZzFMbh1Ce0v4PY1usIOeTQkaOCKNtlPDaLW7e%2BxsABf5lNShPtGJ58E5KyVgbxu3lLXIvTIv7vTQjQ066GViVwp0G64UD6WZb8EHvubs85H796rKxiRmk%2F5vTH5tnPMJ6a7Wz%2FOFWi23cuPps%2BPLO35lms2gAqH%2FH%2FC8DepcWscMkEPvj1sTx%2BCT2keWZQ6Os6q6Hv9T8jih1JGVkxzTlPshVBCI4PD%2BsqXkMLjUw8kGOqUBJf88ta0dgQz1KFAKClwrabnmqwVVC%2FE9lG6mz5NTdnZ3F5%2FAoFgCuxPQoAooaAS5NMrYJQStj7hhV6ox8UQKczoOB4obZZaiOWDG4PUz%2Bi%2BDHUxm0iIIB75%2BkSJ8a1SIU2Zneht%2BH4cOi9ZzV5HqbzyNY3I4kYxyMOwIltUMyDGODeVj%2FmAgkJc4YALbZcUAjRN%2B6a1hje72D5zaC6tPzCHPyP%2Fu&X-Amz-Signature=d9a9ee6c1599e270bf676181921448dcdcd1779c312b3dec7200490803a6df85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPPNPDB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEZyi%2B5pyJKxGS01zGYUbBFnhJ9LZF7DgI4NY3PEenXjAiEAx49jhKM3hPMan3uzk1X6o656w2oj5KAIqAVkiqjCWUMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJgRBZ2%2BY7n091Z3hyrcAxxcwwv8%2FbsB7m08Ekg%2BEVPnjxbR1yqfeuxvWBZkVrobAG6YPhvv4IVoRpHfZINT4hw2mr9NY0au225dh4sGy1D6SQXbTmlCSyeqrA%2Bu6%2FTJj3yj%2Bwg%2FDvQ1LNmgAuhWzjVcM9zSMIJZmYDs5ChuMpohsUOOCDi0QK3eg0Nh8KhYf1cbbK4zxvHgDhK0mtBLd8HJrsRsTtgRryvvEM8bHTFn1Zi%2BF4%2FzWhfEONUC28ELVAgVa0%2BFDclNfmrc4aj33L9aKlYzoLWszW3YNhqFMmjRrNHF1tIpm9Zrj04FNNshT8dtpFP7sA9%2FOflWF8jSqym%2FwymJ1hJOe%2BAc4BuCj4Kdy7w7PPlECwQhyF1BofJZD%2FBjJzWBouH%2B6GwUDuO%2BAyoGMcqtXZ%2FqLB2aNAaa6qDdZzFMbh1Ce0v4PY1usIOeTQkaOCKNtlPDaLW7e%2BxsABf5lNShPtGJ58E5KyVgbxu3lLXIvTIv7vTQjQ066GViVwp0G64UD6WZb8EHvubs85H796rKxiRmk%2F5vTH5tnPMJ6a7Wz%2FOFWi23cuPps%2BPLO35lms2gAqH%2FH%2FC8DepcWscMkEPvj1sTx%2BCT2keWZQ6Os6q6Hv9T8jih1JGVkxzTlPshVBCI4PD%2BsqXkMLjUw8kGOqUBJf88ta0dgQz1KFAKClwrabnmqwVVC%2FE9lG6mz5NTdnZ3F5%2FAoFgCuxPQoAooaAS5NMrYJQStj7hhV6ox8UQKczoOB4obZZaiOWDG4PUz%2Bi%2BDHUxm0iIIB75%2BkSJ8a1SIU2Zneht%2BH4cOi9ZzV5HqbzyNY3I4kYxyMOwIltUMyDGODeVj%2FmAgkJc4YALbZcUAjRN%2B6a1hje72D5zaC6tPzCHPyP%2Fu&X-Amz-Signature=61274393d102800b3b82966e2aadc4cd45c8acb483ce7d5c966b54ea5cee2284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
