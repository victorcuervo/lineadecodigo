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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZERCG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY75fHxH5cKcoS8DOv006rVbD3q9FbnpKPr4UzF5lmMAiEAx4vX818qRgmzD6EXHHtfWD6FizTFjy2BuAmUbV8iMqoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNdWBepIxVLTraMp8yrcA8V8YVwYNwcmRiRobLFw171V1e3I5fQlJGUhK805ilulSDwjsdL%2FQlTZvEyv9eRveCHgKx3dE2sWJJ3OQbnpBchQQJ8OBuQ7515rM9I%2FUpqOP%2FsM7CkJ13gsIGetdLM%2FBzKR3MQ%2BL1PP0OjiBXyiLZ%2F8egZhrMzQCMNZwswFSmtvW4bfKZkdBlGsVGxOFmYfOG%2BjogSXORLMJP6iVSJShrZqbSVXGxnca5EexBo2spe5jDQgz7iNbqB%2F7jW1uAf%2FUnq7xi4I4usrg7Ge4LpEIKpAFeKfLylc6uZdFmWltFwtKAvKjZhons58YwPrGq8nKVVHWjKL8WwU7LzfLHo7MJM1P8maDNLyOJeax%2BfDajK6TgKO0JsLdtCQEHUPUvgnp%2BrbrVA9DtkdbWQvOQ9YH4rMiJgymmdSB9NwSrokWsJ92YN6OnY1vmZqFlU5Z%2BR2kq4Hqj0%2BWuiNFjbgtZlBcQeHACWRxqiM2OOlOYh7DV2najis2P4LX0ezidLJlutohFa8JtwCkFntT5ikJXSK%2B6W%2Fpu6y0OgldMEAWInOfYOOKD1uNhg3qfUdcxgVt1cIhWt7xXyZXylBvax%2BXModu6g7nmTTd37TJ2NbWcVRombUkLxIMr1gVhVivEk3MKO3icoGOqUBSykHBFG21wrWrsRKV%2FquJQYUa%2Fqaw%2FCfDLkPcnDTJeQWnB2Yh87qH%2F4xqlJX5N4sPjYQC2LX7aLb3NeROglAC4cVFDjKdoM47d7ur3m7oPuZrctsX83AVpF%2FeG5452g7fDJn04%2BsWvotBGN7I%2B2T%2BCKpAK2QBtnWEDydmbS38ScKp%2FzUaphJTmRhn04qyRZcVTjaNOPz5KedlvDBjYm6FGx57p1L&X-Amz-Signature=6a8c8d6b828a6dbb9682b3c8c9046bc00f4f36b02ef8e7ed1d382a93d9e46413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZERCG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY75fHxH5cKcoS8DOv006rVbD3q9FbnpKPr4UzF5lmMAiEAx4vX818qRgmzD6EXHHtfWD6FizTFjy2BuAmUbV8iMqoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNdWBepIxVLTraMp8yrcA8V8YVwYNwcmRiRobLFw171V1e3I5fQlJGUhK805ilulSDwjsdL%2FQlTZvEyv9eRveCHgKx3dE2sWJJ3OQbnpBchQQJ8OBuQ7515rM9I%2FUpqOP%2FsM7CkJ13gsIGetdLM%2FBzKR3MQ%2BL1PP0OjiBXyiLZ%2F8egZhrMzQCMNZwswFSmtvW4bfKZkdBlGsVGxOFmYfOG%2BjogSXORLMJP6iVSJShrZqbSVXGxnca5EexBo2spe5jDQgz7iNbqB%2F7jW1uAf%2FUnq7xi4I4usrg7Ge4LpEIKpAFeKfLylc6uZdFmWltFwtKAvKjZhons58YwPrGq8nKVVHWjKL8WwU7LzfLHo7MJM1P8maDNLyOJeax%2BfDajK6TgKO0JsLdtCQEHUPUvgnp%2BrbrVA9DtkdbWQvOQ9YH4rMiJgymmdSB9NwSrokWsJ92YN6OnY1vmZqFlU5Z%2BR2kq4Hqj0%2BWuiNFjbgtZlBcQeHACWRxqiM2OOlOYh7DV2najis2P4LX0ezidLJlutohFa8JtwCkFntT5ikJXSK%2B6W%2Fpu6y0OgldMEAWInOfYOOKD1uNhg3qfUdcxgVt1cIhWt7xXyZXylBvax%2BXModu6g7nmTTd37TJ2NbWcVRombUkLxIMr1gVhVivEk3MKO3icoGOqUBSykHBFG21wrWrsRKV%2FquJQYUa%2Fqaw%2FCfDLkPcnDTJeQWnB2Yh87qH%2F4xqlJX5N4sPjYQC2LX7aLb3NeROglAC4cVFDjKdoM47d7ur3m7oPuZrctsX83AVpF%2FeG5452g7fDJn04%2BsWvotBGN7I%2B2T%2BCKpAK2QBtnWEDydmbS38ScKp%2FzUaphJTmRhn04qyRZcVTjaNOPz5KedlvDBjYm6FGx57p1L&X-Amz-Signature=fa7cef0aa438a56f603d682361efe276223cea6628a1c5fe568a7b0ab20f964a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
