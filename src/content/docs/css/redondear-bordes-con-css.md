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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJUZZA5H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUJQAEuZUBzmKoPXiQJ6uQWi6mU3IShn%2B65QCGaawmOAiEAn5bcajkEz0pUKz5IaVz%2FJ8Xsu3xh4n8SJ2mOWT2pIOAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkx3qq0wfuxZC3lvCrcAwwkTvBz6cfgEq1CQRbhROTslfMiom08LAqN0BZIUm0C3o%2FY5%2B%2FYyFxXx02ha0u1YEsCnGez3IwhC30%2BzvES7Ktrp0Lo7Ox%2Br1IIBmWhF20mzn7vvaYVfyWI0uLrq1X6kQBp%2B54jrJjx6mmcm0eTfkhb2Lt91yZjpR7J6LGmEa3UNH0uFt966XytLDzGlcRckjhclZwlmHkMzs6RHPSuq0t%2FZlZPqRGlN7mqDoRpy7rllAMRxetExkhJyPtNwTlGMGKud%2FQdn0MN%2F5PmBOSVCgDawl3W3hKAUgcYUvNxJhWzDkfI43pubaxe2L5u63rmBKh0Xlg7o4gg33go%2F5bTZI4hh6MEp87T0l0EKneWvpJRx9SX%2FBdkSW0WGuECD8wahLaa9gqdkU9tAv0W3KKnz%2FoADnJBcYQkINv59W22eE6nFAuX7sShH%2FVS%2BopcWSAZQmulwgRsfRQ2Q79mk1GYYJIk83qPUy7yIPoIA8PeFaQsnG9k0JSXFzAuA3w4%2BMrHb61tPwDYQYdA1T0ZvkEwgkh5CLvEWgUWRol60cefKiiwlsRccROynzzB9HLLEA0ZhF1Oh9wbcqUr7NpXzMIrdZZQfltUzY1GLvRy1FBWdAT%2BHAGoKnz0Qk52YLkKMLuP28kGOqUBVufWU214dtVjVw1a9jzS9rWuf7JuAnxaa9sQMdRG0XaindwZGR%2FM2Dyyt%2B4uv8km747hsQWK9UE308YetW3ozHbIGJQnNHvKelSQDLmIv%2BUZEU%2B%2FMp9B2xNGtVlaoIVMQYZS%2F7d5cjGGOA7nvkjaV0dQyNDVfT4rT1sgMoSXFOSDGZkA6f1uUEFBpcpW4a6S3OfIctBxcwArrlzxUtUB%2BhpXZb1v&X-Amz-Signature=bd32082b981008075df7002aad5f94fe95ac810b57ca622a9b5cb3f5e00b27f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJUZZA5H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUJQAEuZUBzmKoPXiQJ6uQWi6mU3IShn%2B65QCGaawmOAiEAn5bcajkEz0pUKz5IaVz%2FJ8Xsu3xh4n8SJ2mOWT2pIOAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkx3qq0wfuxZC3lvCrcAwwkTvBz6cfgEq1CQRbhROTslfMiom08LAqN0BZIUm0C3o%2FY5%2B%2FYyFxXx02ha0u1YEsCnGez3IwhC30%2BzvES7Ktrp0Lo7Ox%2Br1IIBmWhF20mzn7vvaYVfyWI0uLrq1X6kQBp%2B54jrJjx6mmcm0eTfkhb2Lt91yZjpR7J6LGmEa3UNH0uFt966XytLDzGlcRckjhclZwlmHkMzs6RHPSuq0t%2FZlZPqRGlN7mqDoRpy7rllAMRxetExkhJyPtNwTlGMGKud%2FQdn0MN%2F5PmBOSVCgDawl3W3hKAUgcYUvNxJhWzDkfI43pubaxe2L5u63rmBKh0Xlg7o4gg33go%2F5bTZI4hh6MEp87T0l0EKneWvpJRx9SX%2FBdkSW0WGuECD8wahLaa9gqdkU9tAv0W3KKnz%2FoADnJBcYQkINv59W22eE6nFAuX7sShH%2FVS%2BopcWSAZQmulwgRsfRQ2Q79mk1GYYJIk83qPUy7yIPoIA8PeFaQsnG9k0JSXFzAuA3w4%2BMrHb61tPwDYQYdA1T0ZvkEwgkh5CLvEWgUWRol60cefKiiwlsRccROynzzB9HLLEA0ZhF1Oh9wbcqUr7NpXzMIrdZZQfltUzY1GLvRy1FBWdAT%2BHAGoKnz0Qk52YLkKMLuP28kGOqUBVufWU214dtVjVw1a9jzS9rWuf7JuAnxaa9sQMdRG0XaindwZGR%2FM2Dyyt%2B4uv8km747hsQWK9UE308YetW3ozHbIGJQnNHvKelSQDLmIv%2BUZEU%2B%2FMp9B2xNGtVlaoIVMQYZS%2F7d5cjGGOA7nvkjaV0dQyNDVfT4rT1sgMoSXFOSDGZkA6f1uUEFBpcpW4a6S3OfIctBxcwArrlzxUtUB%2BhpXZb1v&X-Amz-Signature=2aaeb9de033dbfea7946a97a7bd6ce4b11e270a320ea481df09d21568272e19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
