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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGFN35J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55VuhxwDfqYOMeyqv47n1QMgEhSKyf5gSPHu03SlBZQIgdRTaw5P9rW8kOUdO382L6TiRZg4X%2BKt5CDuBHfMujT4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBySd6JQfELthQ%2FlYyrcA%2FNGdwfigM758aya4RRVjur2hqzNALDqfeqCtSbKk0o%2B4DdkgLOhZPqsP1q3WkCaefMc7RupOH6OKrKPMA0HoP%2FLjKTULLVnFgH0H6i4o%2BkLmqU6kIxV%2BFy4nUujjARXHJRIvFYjVVZ5PCXDmCBrB4QtDnOLcAlPZHD1s35%2F6jAiIKqZHFCZ6XMryq6tqtgAGYCPufjFwfwLijAs1rlpni2K2VKNKQV1sZY5IWTDsvvVrp%2BW%2FT19A4Rlq9ORyzrRKF9ui7qXp6iXHxgbuPhLV8VGEISmGccTytkXK23nMAXrcWnnrofgLl3ptCehQ1NSFuuuWSr4dEhJTHNBKadvxf%2F%2FwiAKzwwF7%2BWGqXFHXVoxXCg6k%2FObAU6lxuE5%2FgdV2vnfC5TBeebU3FixZYlhEliO5rNwgECzLsl2pCUj3cprzBcpq8TUwKU%2BS5W25uCvN9gF16BUPyeNmmhuQJSbAG2Z4tUkq0ANbLj2NMt%2FHhViOjxU%2FGEZfvCxCP0F0jn9kh6E9TelO5SbJHXdNh0PsRODYuPD9yhgMr2EW33O%2FHqI%2FAIQEa%2BG1VJEoxNx%2BoGKo1icV53SLPPePiSKcpYxNu8aN1NYFS%2BvpTGSZsi1wuLpBQFWJvWj5MD7GfqIMNKQzckGOqUByRZdvMJVslOpjsNr5m2U5qfXz0iVcPuNC5Jr9jet88XfXdvH%2BWzYByhRZL4dz76OgBa%2Bswc1ZDtZZHycvWbH44PiK4z3rXA%2FfJHEhHWD%2FYIRE4%2FKC%2FkVfWuJlKF0RbB3wcfSkzC6X6MOZSjNdJlNmB3oL6At1vAPwXHpbCzlCd%2BvCQVgcONUW%2FJ%2FnerzUeBVL63sYXIxFcugWg0SnPd0QJeoJe1m&X-Amz-Signature=9ff9ce60ded5318827ec461e1872ce7528e8c2a6a73521ebd7065c6a8b400c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGFN35J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55VuhxwDfqYOMeyqv47n1QMgEhSKyf5gSPHu03SlBZQIgdRTaw5P9rW8kOUdO382L6TiRZg4X%2BKt5CDuBHfMujT4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBySd6JQfELthQ%2FlYyrcA%2FNGdwfigM758aya4RRVjur2hqzNALDqfeqCtSbKk0o%2B4DdkgLOhZPqsP1q3WkCaefMc7RupOH6OKrKPMA0HoP%2FLjKTULLVnFgH0H6i4o%2BkLmqU6kIxV%2BFy4nUujjARXHJRIvFYjVVZ5PCXDmCBrB4QtDnOLcAlPZHD1s35%2F6jAiIKqZHFCZ6XMryq6tqtgAGYCPufjFwfwLijAs1rlpni2K2VKNKQV1sZY5IWTDsvvVrp%2BW%2FT19A4Rlq9ORyzrRKF9ui7qXp6iXHxgbuPhLV8VGEISmGccTytkXK23nMAXrcWnnrofgLl3ptCehQ1NSFuuuWSr4dEhJTHNBKadvxf%2F%2FwiAKzwwF7%2BWGqXFHXVoxXCg6k%2FObAU6lxuE5%2FgdV2vnfC5TBeebU3FixZYlhEliO5rNwgECzLsl2pCUj3cprzBcpq8TUwKU%2BS5W25uCvN9gF16BUPyeNmmhuQJSbAG2Z4tUkq0ANbLj2NMt%2FHhViOjxU%2FGEZfvCxCP0F0jn9kh6E9TelO5SbJHXdNh0PsRODYuPD9yhgMr2EW33O%2FHqI%2FAIQEa%2BG1VJEoxNx%2BoGKo1icV53SLPPePiSKcpYxNu8aN1NYFS%2BvpTGSZsi1wuLpBQFWJvWj5MD7GfqIMNKQzckGOqUByRZdvMJVslOpjsNr5m2U5qfXz0iVcPuNC5Jr9jet88XfXdvH%2BWzYByhRZL4dz76OgBa%2Bswc1ZDtZZHycvWbH44PiK4z3rXA%2FfJHEhHWD%2FYIRE4%2FKC%2FkVfWuJlKF0RbB3wcfSkzC6X6MOZSjNdJlNmB3oL6At1vAPwXHpbCzlCd%2BvCQVgcONUW%2FJ%2FnerzUeBVL63sYXIxFcugWg0SnPd0QJeoJe1m&X-Amz-Signature=aac21d7b554e1c5d1e364a766f2e94d9f613b8296a1a1186fb8c8dd1c25040be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
