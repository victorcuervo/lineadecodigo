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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBTLSEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDsZvKy7zk2S%2BQCw7tCeITOJapU5Tl08JOih%2BIC3XcrNgIgEtbJQlwQfnW1vfTxbqUsHNLwfcNZOGAt04%2FFbhZccrAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD9ZhOow6UIu%2FLUzRSrcA7EUb6fcUTa%2BZxpxjoOaKccyD8ZTD3xQBDvRsKDb3YRaHtc79DcposW1k4qVyDnMkkySjKsKYD%2Fwdpa3jDwJvao9lIb%2Br%2F7iR5UVE0yR58oaLHz%2BdIYB%2BAWkUk6bxH1x%2F7cuBXc6slKJQ7nXzW9Jkv9eEt7Pnkz7QI8hICC6ie5GbT%2BY1ykZ2zwF%2BjElVG4WUepDnbtIrP0aRtoFfjZT0CGdI8b3HCapc1%2FhfiIINrgr3bd%2FNES9%2F9HDv8oz4D7k0cuO1qYnunCEuL6vKosVdek0YbDfA53Mfx1fDEY7YGR%2F39YZA7NjlFxXFIn7D6F%2BvBJbvfu0Td57B0ndysBkWclUXK1wfl82I4HV60QntDO%2FO2dNjHzP%2BLJtClAuKj6CptTsQoMnMEjkl4SAmzLFcj%2F4BCDsrv0zE6XPbghgsn9aQS%2FE%2BIRBEMC4vtHxw9VL0unASKTNrnZRPcB21NQ3fQs5zQJqklhMFwj6fgceANZlDokmbeVLhK4c8vU0aNCArHO4gq8L0AlccI1pjLNmRWPKYuGnJFT4HWLSRbuywdvrb7Dk6GniuEkcUBMUzyEpIJi8JjO8La%2ByleJrxXGZGgVx481%2FEwbFmVP%2FHAcwkS5CKd126XGJOgttqr1TMKiuxMkGOqUBpOGGJKZF%2FJYb81EWhhpORIMmCGkNIKPknKUAJhJcF3dutujL%2F0oiZUFL0zIbt4pt14M5MzOl1mLLXaYywUnh1i876C2hvDittqeEXEiouWWjyUaO5EjpBPMWmSQYvRZMWLyY%2Fd6s22brxwPUs5pukqCkQOiakFbpoOkvBY3T0VYdqVoXrHtlMVH9wnbrILVDM439kZ%2Ff%2FYc2bKTROD8%2FovoQNa3T&X-Amz-Signature=a1fd8c79f5113bf207d187f43f5cb5db8243c0ec26cc69961c8e8dbfb9a717b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBTLSEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDsZvKy7zk2S%2BQCw7tCeITOJapU5Tl08JOih%2BIC3XcrNgIgEtbJQlwQfnW1vfTxbqUsHNLwfcNZOGAt04%2FFbhZccrAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD9ZhOow6UIu%2FLUzRSrcA7EUb6fcUTa%2BZxpxjoOaKccyD8ZTD3xQBDvRsKDb3YRaHtc79DcposW1k4qVyDnMkkySjKsKYD%2Fwdpa3jDwJvao9lIb%2Br%2F7iR5UVE0yR58oaLHz%2BdIYB%2BAWkUk6bxH1x%2F7cuBXc6slKJQ7nXzW9Jkv9eEt7Pnkz7QI8hICC6ie5GbT%2BY1ykZ2zwF%2BjElVG4WUepDnbtIrP0aRtoFfjZT0CGdI8b3HCapc1%2FhfiIINrgr3bd%2FNES9%2F9HDv8oz4D7k0cuO1qYnunCEuL6vKosVdek0YbDfA53Mfx1fDEY7YGR%2F39YZA7NjlFxXFIn7D6F%2BvBJbvfu0Td57B0ndysBkWclUXK1wfl82I4HV60QntDO%2FO2dNjHzP%2BLJtClAuKj6CptTsQoMnMEjkl4SAmzLFcj%2F4BCDsrv0zE6XPbghgsn9aQS%2FE%2BIRBEMC4vtHxw9VL0unASKTNrnZRPcB21NQ3fQs5zQJqklhMFwj6fgceANZlDokmbeVLhK4c8vU0aNCArHO4gq8L0AlccI1pjLNmRWPKYuGnJFT4HWLSRbuywdvrb7Dk6GniuEkcUBMUzyEpIJi8JjO8La%2ByleJrxXGZGgVx481%2FEwbFmVP%2FHAcwkS5CKd126XGJOgttqr1TMKiuxMkGOqUBpOGGJKZF%2FJYb81EWhhpORIMmCGkNIKPknKUAJhJcF3dutujL%2F0oiZUFL0zIbt4pt14M5MzOl1mLLXaYywUnh1i876C2hvDittqeEXEiouWWjyUaO5EjpBPMWmSQYvRZMWLyY%2Fd6s22brxwPUs5pukqCkQOiakFbpoOkvBY3T0VYdqVoXrHtlMVH9wnbrILVDM439kZ%2Ff%2FYc2bKTROD8%2FovoQNa3T&X-Amz-Signature=ab936759cd572fd1763bf417bbb9343cf1719f6b6db6bb974b44c4ec450c8d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
