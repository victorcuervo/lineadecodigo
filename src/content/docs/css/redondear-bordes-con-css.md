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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WLQRUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVZaiAYqmvZtZ4wBwTsYr68Pih0JSmV9jjIj959iUJvgIhAK%2FXQM%2B9pK%2BC7zh8Xs%2FZLRFFxmnl1BdqXveEP2zmevZJKv8DCHAQABoMNjM3NDIzMTgzODA1IgxIh4FrlK2uRWmjmKsq3ANHGXYZsy9jSwmY5NUDnzzq9EkVCQJFNgtNhTDVX6Gz8BpgYNM7AXuu9I9dtZf37SrSBhY%2BWSfFvafMkGOkxtKovMp2iqCKWhDph0UwJELrSPNb9sdvEEuOeZCxFs8ccQ4Fu8MLD96QkSkiH7w6CBi9mzdJ0ICNhkW97hz0xczVRnG%2FthXbux%2BgR19VdN5ZHXNveNpTVJYXxj7Y7OfSb47XClKfShwsAaiuYQuRjYlG88NMkR4rxJNV56fNh%2FK1sxS5QLQehAKRvwZLzESnVvHglzEBQzoSSnIExS8DK0L3l8mK%2BEPLusC8xWgNo%2FlBu35AV%2BDwXiTItUAY1%2BdzEVu1zv9uh48BNG38x0a3i2M4KOZu9vkiAMvz1V7nHXIDBtwa5RINqwPK7uobiaIA9LSTEy7hzyS1oLe8f5Jef1g600BqBynQ7ZUn4DJEJhFsZYk9OmL%2FTQXGM9hxH0%2Bd%2BI9NVNowCCSomgGkJWWaHUIFxk6FkxgnUagWWaGDJ4OMmTf8922lMHg2ljaDzYLDdAu42qG%2BV%2FE4BMqTjaepsZA4jn5NVrLpOL8eAggkMarpUeDGEPGta4XGvnM%2FGpE5xEJjkmodWdGOME6Zc4eGTIG2CL6YuGN3mNcjI7esfjCMns%2FJBjqkAdWUHjoMLsD7iUUqvQSTcwy1uxGvni0RPT%2BLKIMYUhRGr0ulLcBlMkSnfL0EXzdYceuEiSpx1ExYODsOOoVW58xLRXJ8gd2AypcNQ5yPsTguiO8CycEJU2%2FhFkBIBysWFcERnuVgCDu3L5AMpNxvixZlvu289GSb%2FTOsfLvRHz3ux%2FWvwxYdxYEmCZEGv4uZj00VV8B1Dldrw78tTkSKVzl4JaUc&X-Amz-Signature=3e6d9be7f8c55eefa1cfc76ba0fc05baefee65c377346dd6d40acf3bf14fbf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WLQRUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVZaiAYqmvZtZ4wBwTsYr68Pih0JSmV9jjIj959iUJvgIhAK%2FXQM%2B9pK%2BC7zh8Xs%2FZLRFFxmnl1BdqXveEP2zmevZJKv8DCHAQABoMNjM3NDIzMTgzODA1IgxIh4FrlK2uRWmjmKsq3ANHGXYZsy9jSwmY5NUDnzzq9EkVCQJFNgtNhTDVX6Gz8BpgYNM7AXuu9I9dtZf37SrSBhY%2BWSfFvafMkGOkxtKovMp2iqCKWhDph0UwJELrSPNb9sdvEEuOeZCxFs8ccQ4Fu8MLD96QkSkiH7w6CBi9mzdJ0ICNhkW97hz0xczVRnG%2FthXbux%2BgR19VdN5ZHXNveNpTVJYXxj7Y7OfSb47XClKfShwsAaiuYQuRjYlG88NMkR4rxJNV56fNh%2FK1sxS5QLQehAKRvwZLzESnVvHglzEBQzoSSnIExS8DK0L3l8mK%2BEPLusC8xWgNo%2FlBu35AV%2BDwXiTItUAY1%2BdzEVu1zv9uh48BNG38x0a3i2M4KOZu9vkiAMvz1V7nHXIDBtwa5RINqwPK7uobiaIA9LSTEy7hzyS1oLe8f5Jef1g600BqBynQ7ZUn4DJEJhFsZYk9OmL%2FTQXGM9hxH0%2Bd%2BI9NVNowCCSomgGkJWWaHUIFxk6FkxgnUagWWaGDJ4OMmTf8922lMHg2ljaDzYLDdAu42qG%2BV%2FE4BMqTjaepsZA4jn5NVrLpOL8eAggkMarpUeDGEPGta4XGvnM%2FGpE5xEJjkmodWdGOME6Zc4eGTIG2CL6YuGN3mNcjI7esfjCMns%2FJBjqkAdWUHjoMLsD7iUUqvQSTcwy1uxGvni0RPT%2BLKIMYUhRGr0ulLcBlMkSnfL0EXzdYceuEiSpx1ExYODsOOoVW58xLRXJ8gd2AypcNQ5yPsTguiO8CycEJU2%2FhFkBIBysWFcERnuVgCDu3L5AMpNxvixZlvu289GSb%2FTOsfLvRHz3ux%2FWvwxYdxYEmCZEGv4uZj00VV8B1Dldrw78tTkSKVzl4JaUc&X-Amz-Signature=23687753997f667a679a7b8280b1359c5ce62da0f09b8989df5bc5f54a1cfe03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
