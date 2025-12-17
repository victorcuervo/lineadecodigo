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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE53V5OW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BT00qC0bG3r4EF6dVV5KU%2Fl4ylTxinbKp2JYHgxlP8AIhAIbaby2pVhglV9GPddFZ%2FZdrXrQRGYJkJgqFam%2BzJCLGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwMrOmA8caHsPz2LIkq3ANNrhtja3XECx8LYRtAXzNAx8gcWaFC0ayZoN1berHE8Zy6GEo76TgiDI2mczUX7NXuSjQdHwuI8AATcSaLPezbKTPNrGluWzqYHCFXyIXMFI%2BQkp%2BzaqlMgsRP7t9wqVXNi73mfRt81%2BeyP5WxnyYN6dVWNUEzdPoYMh3NovMialK6QDbojdMzjRZW3KZa7gJVXikI%2BhptumygweKkS4toDhz37F%2Bm0HP8CAWlqbQ4PH3W%2Fhtz9yi32G5o3PshBU3lWLEwHOqhj%2FPEIFvwt1hZ7cC6FFyPqoLzVCeoIVlcIS2TOZ0ZtvdVjFoEhr3bo4IWbQ2XrlHdPpp37zDgPJ2vzgkreUcxfAACLc3PS%2FO1G3R9dLM7azfC6uND7EOksOYNZHRPotnX5wLO9Evzoz770r70ZSdJKcBYY9kdn2El4KZiDiQItuNpvW9i4Ive21Q5SrpYXENw09%2FbH7evOuixODkrCLFSaZWHnDVdXXq5sshVAmKu9aM0aF7DpIiDTVB30lZHbwzQ52hdvycf%2F8ZtazK0LGHqk1lraFXFP%2BgaRIb%2B%2FkTfahJAlF9cfI5sOkoXeeg6NUOHpUQ66PlLnouop5GLBcr0qN6WN055EVyyHLHcDRtH%2FBKMCCKK2jCjs4jKBjqkAQLU4GM%2FD68NJSfnopYo8NyxUYaE8TiwMmLGcGkLC5zAmXSEQAT5eJ28KwJL3klSML7F7ratsngfXvolPRM7sVxIhBGjDbnWTD8YUDvF1qo1%2BqDk6ystiO3UpHR7nSJ71sI7bY%2FSG%2Fhmc2V3bLJ2p7eX24uAScni6jGXD%2BvAWDfUbtLVEspl3zpFPoSuHUalUL%2FL968D%2FZ2AB7pVh1cDbfvvV2Zf&X-Amz-Signature=b0e92811173f380104f4ef1a43cd12e15017f31de59572b04979f216bc5e6bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE53V5OW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BT00qC0bG3r4EF6dVV5KU%2Fl4ylTxinbKp2JYHgxlP8AIhAIbaby2pVhglV9GPddFZ%2FZdrXrQRGYJkJgqFam%2BzJCLGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwMrOmA8caHsPz2LIkq3ANNrhtja3XECx8LYRtAXzNAx8gcWaFC0ayZoN1berHE8Zy6GEo76TgiDI2mczUX7NXuSjQdHwuI8AATcSaLPezbKTPNrGluWzqYHCFXyIXMFI%2BQkp%2BzaqlMgsRP7t9wqVXNi73mfRt81%2BeyP5WxnyYN6dVWNUEzdPoYMh3NovMialK6QDbojdMzjRZW3KZa7gJVXikI%2BhptumygweKkS4toDhz37F%2Bm0HP8CAWlqbQ4PH3W%2Fhtz9yi32G5o3PshBU3lWLEwHOqhj%2FPEIFvwt1hZ7cC6FFyPqoLzVCeoIVlcIS2TOZ0ZtvdVjFoEhr3bo4IWbQ2XrlHdPpp37zDgPJ2vzgkreUcxfAACLc3PS%2FO1G3R9dLM7azfC6uND7EOksOYNZHRPotnX5wLO9Evzoz770r70ZSdJKcBYY9kdn2El4KZiDiQItuNpvW9i4Ive21Q5SrpYXENw09%2FbH7evOuixODkrCLFSaZWHnDVdXXq5sshVAmKu9aM0aF7DpIiDTVB30lZHbwzQ52hdvycf%2F8ZtazK0LGHqk1lraFXFP%2BgaRIb%2B%2FkTfahJAlF9cfI5sOkoXeeg6NUOHpUQ66PlLnouop5GLBcr0qN6WN055EVyyHLHcDRtH%2FBKMCCKK2jCjs4jKBjqkAQLU4GM%2FD68NJSfnopYo8NyxUYaE8TiwMmLGcGkLC5zAmXSEQAT5eJ28KwJL3klSML7F7ratsngfXvolPRM7sVxIhBGjDbnWTD8YUDvF1qo1%2BqDk6ystiO3UpHR7nSJ71sI7bY%2FSG%2Fhmc2V3bLJ2p7eX24uAScni6jGXD%2BvAWDfUbtLVEspl3zpFPoSuHUalUL%2FL968D%2FZ2AB7pVh1cDbfvvV2Zf&X-Amz-Signature=eab763d18cc4c6528bd777a42374b2d90f2b1effc6ca5ff7c19bed5d5a74183d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
