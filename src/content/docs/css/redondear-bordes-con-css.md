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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJPZ5SS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxF6Ct9xVjXUv5EMh09qx9NzMBY9c%2BnoDrl9%2BTPHajjAiEAtYJukD019MyctAFBVhWPNAaxOtqiNwyYbXttkxvJjsUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKTKHYjtSCQETjYTyrcA9QKRpcSzsxDb%2Bgk8mYE%2F95fnDmnzhEW1AtbRfXn47iiCkMSTAhrrWq4EFK3h5PS3Y%2BqxLZRHzDBNMsJSgACx16bg%2BvHzSgN2qF%2BISVrgip3D5jVpi%2FtJZUMKi6vh%2B8on0PVfwbQ9V%2FlALwbzK6%2FEI6gRPkaz%2FVtCGjj3ZjK9uQDMGnvwyzEI2hle6IPkqpmWwqysPW1eRcDI7X%2FHefXACRIHIXyVjCiGeoTgTZ%2BeKL8tgklsMWWAE2kSkNiI6dT9mEk8zbfip9s71AY%2FAsnqj0gN%2BijFc4Tv7DOLfHmiMyXYWkNuCPQyMDHOpdRcaCgIAL8iScs1yufUsmc%2FpibHXX3XNrLK%2BilccnN9WS7PYWghpNjkouzKqMLrDbBZAmoxwJ1w0WImq6Hmylhx7PQJzjQh54dTsfrJRfywJNccsNXe8aBg38cfIMRBTZrPhwGY9P2sWLCKep9QO%2FNq716BU0SFHVh2N%2FEroLjyP9ELtK0TuOhD3282xjYHbwfOVHNU2qeYpNHKZh08MuaViq4ju6FkSzbQLyfNYQLJ5QuW%2BW1FjeYXMcH6U%2BN%2FxMU85jXMKPJr1NI6j2SK3EWzSp%2BirAc1o8mcQO0Q0w4mcM1QfPZ1kq7Y9tRvxsr7z6aML%2Fz2skGOqUBwzFVyZr6qGRs2MrOjHoT5mjZTv96s1wfuEGRsNympCRpzXsroap69qWSavqw9G8Fq105wqbZK9MwAn4urgEG65c7Sh8QMuzAMXhlp%2BCJI7hSxycfcHlYllLICDvLwlmXry94jRkgvbx3R7jxuXkS8YS9ghYTqanqYXjjyhwE636l317jnDduUpcHNBG0qiM8xjpdWrdp2XzfdiaaFzz1bNdb%2Fqbm&X-Amz-Signature=c38ce38ced8c236944e7cc5f256f3d25bb47c5069710f8aee79efc9f86ad80d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJPZ5SS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxF6Ct9xVjXUv5EMh09qx9NzMBY9c%2BnoDrl9%2BTPHajjAiEAtYJukD019MyctAFBVhWPNAaxOtqiNwyYbXttkxvJjsUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKTKHYjtSCQETjYTyrcA9QKRpcSzsxDb%2Bgk8mYE%2F95fnDmnzhEW1AtbRfXn47iiCkMSTAhrrWq4EFK3h5PS3Y%2BqxLZRHzDBNMsJSgACx16bg%2BvHzSgN2qF%2BISVrgip3D5jVpi%2FtJZUMKi6vh%2B8on0PVfwbQ9V%2FlALwbzK6%2FEI6gRPkaz%2FVtCGjj3ZjK9uQDMGnvwyzEI2hle6IPkqpmWwqysPW1eRcDI7X%2FHefXACRIHIXyVjCiGeoTgTZ%2BeKL8tgklsMWWAE2kSkNiI6dT9mEk8zbfip9s71AY%2FAsnqj0gN%2BijFc4Tv7DOLfHmiMyXYWkNuCPQyMDHOpdRcaCgIAL8iScs1yufUsmc%2FpibHXX3XNrLK%2BilccnN9WS7PYWghpNjkouzKqMLrDbBZAmoxwJ1w0WImq6Hmylhx7PQJzjQh54dTsfrJRfywJNccsNXe8aBg38cfIMRBTZrPhwGY9P2sWLCKep9QO%2FNq716BU0SFHVh2N%2FEroLjyP9ELtK0TuOhD3282xjYHbwfOVHNU2qeYpNHKZh08MuaViq4ju6FkSzbQLyfNYQLJ5QuW%2BW1FjeYXMcH6U%2BN%2FxMU85jXMKPJr1NI6j2SK3EWzSp%2BirAc1o8mcQO0Q0w4mcM1QfPZ1kq7Y9tRvxsr7z6aML%2Fz2skGOqUBwzFVyZr6qGRs2MrOjHoT5mjZTv96s1wfuEGRsNympCRpzXsroap69qWSavqw9G8Fq105wqbZK9MwAn4urgEG65c7Sh8QMuzAMXhlp%2BCJI7hSxycfcHlYllLICDvLwlmXry94jRkgvbx3R7jxuXkS8YS9ghYTqanqYXjjyhwE636l317jnDduUpcHNBG0qiM8xjpdWrdp2XzfdiaaFzz1bNdb%2Fqbm&X-Amz-Signature=d8c5917be7716960fcf23eb2677e768cdd74b4760b92d9274282593c3c614b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
