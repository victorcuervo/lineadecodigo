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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUF7NN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH70rUIgiYok3jpwXG3i6%2FW3ZhzUj4iSuAp4slRSUlQAiBG88y%2BqB61JmRei0nGC4iSK%2BQdTgbTPyFuugJEQCedWCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtnsMt4uV3cyqFPlKtwDZ9JFZE9SoMwGF%2F4FiuwgVghgX9qWsLISbs9Go0Fux7qoZoJ6%2FuaWBv50e7HHJ3b7l3u8wfaItKuReB3bLcf7bXXRXd%2F2cz2JmAZNzbhazGbLnNr%2F6uLMfsmV3Z2ZHNcADv2zayQQwYIhhnFwlkY1DBWS0a4uIOCjXhyZ6e4UR7nX1%2BWYn0e8X0vicjWDNL5A4kzEamXfu8W14LlJqmRgs8oT%2FTbEFQGDRZtRi75nkH1gSuAlFKIakMvaLPovsQ4daH1twIbe1mh%2BtVSspi57FhBOzrMneI37K4OGZiuAtg3KtVaiO%2BqgaCU5zHUBgZ9aSpGDJE%2BQTN%2BS1c1XXKdneW6prDil%2BIUqVTMIwVwGDJrPFSp7hfOPDjOuklO4UFXIP863tJN%2B%2BKLW1S4Gbl5OgoilIPhT2GWdK4CQNxmYzb3jxK5CtMGhPJMZOzP0s%2BNmXaTCUtAlTXzQrKXsfSMS7muNjNtrs7vCH5%2FgSO0LAjNylriUKav7hO4fA2ldFw%2B0U%2FqIuAdn325647AGx5eg8v%2F2jzHfYcw%2Fi9Yr36T1eIUsbJ4vgBAeJI%2FDGdziBd7qW2NRtOsIxjYLhK1vpUekkCZvxXMUJ5ST2yv%2FTX0bj4%2FVTbYKR5AHtBxEX5sw2pTZyQY6pgHwUX9GqNQx%2F4TtbnoRVUIGE24BiPDojtnlSBCGQDO1zy9%2BzMDGBZPdZgTo4QELsW47YvlGOllOuZ3q0l3SvAAjJdT4o%2BUAILZx1jmbqJUc8JHVfN18QMyS6YOyYrSiciSQrzggXaRJrI1qWX3HV37iAoX30CgL8E44KWNz6GP3DuiGZ3HhL9EfQT0JNn4MSL8eLCyp3L7%2BozZ%2BrjUOIowApj7Igl1c&X-Amz-Signature=09063a829e708a484ba445d982a33fe48fc8d63ec16a0bf11cceb48ebc9b92ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPUF7NN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH70rUIgiYok3jpwXG3i6%2FW3ZhzUj4iSuAp4slRSUlQAiBG88y%2BqB61JmRei0nGC4iSK%2BQdTgbTPyFuugJEQCedWCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtnsMt4uV3cyqFPlKtwDZ9JFZE9SoMwGF%2F4FiuwgVghgX9qWsLISbs9Go0Fux7qoZoJ6%2FuaWBv50e7HHJ3b7l3u8wfaItKuReB3bLcf7bXXRXd%2F2cz2JmAZNzbhazGbLnNr%2F6uLMfsmV3Z2ZHNcADv2zayQQwYIhhnFwlkY1DBWS0a4uIOCjXhyZ6e4UR7nX1%2BWYn0e8X0vicjWDNL5A4kzEamXfu8W14LlJqmRgs8oT%2FTbEFQGDRZtRi75nkH1gSuAlFKIakMvaLPovsQ4daH1twIbe1mh%2BtVSspi57FhBOzrMneI37K4OGZiuAtg3KtVaiO%2BqgaCU5zHUBgZ9aSpGDJE%2BQTN%2BS1c1XXKdneW6prDil%2BIUqVTMIwVwGDJrPFSp7hfOPDjOuklO4UFXIP863tJN%2B%2BKLW1S4Gbl5OgoilIPhT2GWdK4CQNxmYzb3jxK5CtMGhPJMZOzP0s%2BNmXaTCUtAlTXzQrKXsfSMS7muNjNtrs7vCH5%2FgSO0LAjNylriUKav7hO4fA2ldFw%2B0U%2FqIuAdn325647AGx5eg8v%2F2jzHfYcw%2Fi9Yr36T1eIUsbJ4vgBAeJI%2FDGdziBd7qW2NRtOsIxjYLhK1vpUekkCZvxXMUJ5ST2yv%2FTX0bj4%2FVTbYKR5AHtBxEX5sw2pTZyQY6pgHwUX9GqNQx%2F4TtbnoRVUIGE24BiPDojtnlSBCGQDO1zy9%2BzMDGBZPdZgTo4QELsW47YvlGOllOuZ3q0l3SvAAjJdT4o%2BUAILZx1jmbqJUc8JHVfN18QMyS6YOyYrSiciSQrzggXaRJrI1qWX3HV37iAoX30CgL8E44KWNz6GP3DuiGZ3HhL9EfQT0JNn4MSL8eLCyp3L7%2BozZ%2BrjUOIowApj7Igl1c&X-Amz-Signature=e8ff35faa38b79d3a7efeaedda70cb2aa71495c53674c04312b8d0c6164d1efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
