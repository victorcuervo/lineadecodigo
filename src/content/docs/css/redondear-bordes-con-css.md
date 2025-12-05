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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466525ZXV52%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQYmITDVVXKB4lQciUw7f2OXq6ZYFB6ShC3gtcFVXWVwIhAOTFDRXUZY4kBcM8iz%2BsnksbHFvW0m32BmsEQk1iqGmIKv8DCGAQABoMNjM3NDIzMTgzODA1IgwToiljU9TuOZTXIEUq3AM%2FTIyt%2BbmDYK5%2FvD04fmGT8pM%2BrDNefdjUBCexwMXelaivPGVNfB%2F%2BkJptvBvv131juEPrJ3Opva6eSLB%2FbeeSLZBWWyxXAqVI8Wt8NeXUvSncDfc6BcGTt0dnGS9n9lIBv3UHjE5c3XwzVdPIH04FKgSxypC%2FN9Oh9VDD6yM47HLVl2KPvcpIINcINhQdhn6XQ%2BIDK1kw%2FoUlmVZkv5aFeyOr343p8tGC8btyAev3nWAlWmzdN37wco9yZam6uMqDBECaP3mpbZ7yBBPgvI%2Fou9RQimoaJQoEQf%2Fsn6ELdUZGM9EeuAS78OWPEAF2alkchx92ParuKu2q8rHrweN9IAzZmPGCiUQfr4DT5gsH6iru7pUBE8zpIeUlbGV7bxChSAfUizKCBrYMGtwv2RwVWXCDEzpPSgQjHiITjM51thTIwV0vh8hNjhp6ZWBzrUeHo7KvMf24Iv38iB%2BVi97NnlG%2FEJ8QBrzM0SmaV3MAWFvCNiZs6E1DyrJwX%2Br25QwMf%2B4lh8mFqkl%2Bfn7UqGA9F0qxqvcnvJyVPqNqxwFaGDicpUEK2cqw9mHW5Mtad9CK0GIWZjjG5b%2FhR6i5Aws32ewJDB%2FtQm7wycdNeEopOQmO%2BjlY2vly9gAzjjC%2B4cvJBjqkAeUR8FoIZAxD4D%2BPqsYxepy7%2BwwfgD6gWJvn3pXB1FFPsUkV8Yrcva1X6Qo848H40C3yvp0EVT19nzl8aSZH%2FDzmKyNXJ3B0T0kLw%2BFW1KzZ%2BW1eG8HAeG3NYS8jvr5RZEbg8m%2BcuDF0lFLzhWbwqodtaZKscWcSp6IzgnPBi2jRU3pUSjrpp4xPS2QibpJy5GpdTcIRLh8fWZlaZcgcgFiNiuut&X-Amz-Signature=c81b45d8c7b9b84d5db52518c62ff420eb6092e0d838df5f97855ed3b5f8f0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466525ZXV52%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQYmITDVVXKB4lQciUw7f2OXq6ZYFB6ShC3gtcFVXWVwIhAOTFDRXUZY4kBcM8iz%2BsnksbHFvW0m32BmsEQk1iqGmIKv8DCGAQABoMNjM3NDIzMTgzODA1IgwToiljU9TuOZTXIEUq3AM%2FTIyt%2BbmDYK5%2FvD04fmGT8pM%2BrDNefdjUBCexwMXelaivPGVNfB%2F%2BkJptvBvv131juEPrJ3Opva6eSLB%2FbeeSLZBWWyxXAqVI8Wt8NeXUvSncDfc6BcGTt0dnGS9n9lIBv3UHjE5c3XwzVdPIH04FKgSxypC%2FN9Oh9VDD6yM47HLVl2KPvcpIINcINhQdhn6XQ%2BIDK1kw%2FoUlmVZkv5aFeyOr343p8tGC8btyAev3nWAlWmzdN37wco9yZam6uMqDBECaP3mpbZ7yBBPgvI%2Fou9RQimoaJQoEQf%2Fsn6ELdUZGM9EeuAS78OWPEAF2alkchx92ParuKu2q8rHrweN9IAzZmPGCiUQfr4DT5gsH6iru7pUBE8zpIeUlbGV7bxChSAfUizKCBrYMGtwv2RwVWXCDEzpPSgQjHiITjM51thTIwV0vh8hNjhp6ZWBzrUeHo7KvMf24Iv38iB%2BVi97NnlG%2FEJ8QBrzM0SmaV3MAWFvCNiZs6E1DyrJwX%2Br25QwMf%2B4lh8mFqkl%2Bfn7UqGA9F0qxqvcnvJyVPqNqxwFaGDicpUEK2cqw9mHW5Mtad9CK0GIWZjjG5b%2FhR6i5Aws32ewJDB%2FtQm7wycdNeEopOQmO%2BjlY2vly9gAzjjC%2B4cvJBjqkAeUR8FoIZAxD4D%2BPqsYxepy7%2BwwfgD6gWJvn3pXB1FFPsUkV8Yrcva1X6Qo848H40C3yvp0EVT19nzl8aSZH%2FDzmKyNXJ3B0T0kLw%2BFW1KzZ%2BW1eG8HAeG3NYS8jvr5RZEbg8m%2BcuDF0lFLzhWbwqodtaZKscWcSp6IzgnPBi2jRU3pUSjrpp4xPS2QibpJy5GpdTcIRLh8fWZlaZcgcgFiNiuut&X-Amz-Signature=825be5e52ea308e29e7394ff98e2ad15e634b76175ea972b4d8663088d94e030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
