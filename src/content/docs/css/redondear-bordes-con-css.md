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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHBSCAJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBt5RUKKe1fJiSwko1F%2FW%2B4oeLNtV79w6gZUP3F9VqVQIhAP6VH5rQWqmXiU6a7PjM1cqe0leMglHU%2BdfXV14zNEn4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTvaGfazOqwHlRZXMq3AP214mDEwlf3dt%2FfjaLepfRwWlbUgfNY06qQ%2Fnb7kylimJ43nYOAVA%2BoX2HUmFT4qN8DC%2BbOqU%2FTzqf4VdAqxe6DixQs6nYt6I7C9U1ns7d9AncEOMMp5%2FbQLmL90noyAORLjjNa6%2FN7HOsH0pL8UlWRlA3hxNKa%2BChBvAxxbEZ8m%2BWH9a8bqWvjvXROoUFx5mhmOGtPjMUQtrXixMh5U8IxUxCFyIyJ8WwNgb18Q9lp8mNw80HZ5FfRLXJtsopdOf9Cq%2FAgyrIv6SV28%2FbS0oAf5AhGsH6Ky6bJlLvjWSiDzsULvyzUca%2B2oLbSwLcqsWFwwXNR5z%2Fz3cnX3tDS5ZjpJimx2PRB3I8srF7ZfWmA9klPDWnxuNuZG9iMBrUwvqgSY1pbWBdaAdE%2Fi2jJuRuiNq6LdLUQq46MJK8UHB%2FKJsvNIuUuEa%2FAQ5%2BE2sZ3QU7QGkV7WbVajx2Q95MnLyOr%2FBkvJe8z2rdOUhkAagK4CZ7DOH%2BfsIlGEK9Qb5xo%2BBukn5c%2FQ8%2FoiayeOZyqP8XrsnTIfUFZ2k%2FctYi9Ge3m4BVc%2FL1YB3nfYOmdcAAFj7Ij%2F1VBDNlDR3aDfxlzGutO7obC6GM%2Fwf3AIaRsHthrYAo%2BXWkuSw%2BVq17PTCQ%2FdLJBjqkAe6ftaC1ZW9xBM0HsUvacjkxs0Betg8m5zIEI15rmvCMXA1RK8C5xmsmhvZ6%2BB6hLlBsTM8yVUV%2BvgJDdnWBA1kFuWu2MdMrbeDDBzgk8FN3e4c45K1wUhBMxk%2FnycI9SrrPZQGhLxhhLbK8PD6RAfPh5GJPZVwwSPlordH5TSHFfBJhXqEaZUvDPr2hBcFsbIYn%2BJ7NrGu%2BUiuIWwrhNrYaz6pm&X-Amz-Signature=fbeeb4b3746c235c7bb272fe8339a6f169fc714ddc7a11fb5eabb9d909fcf440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHBSCAJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBt5RUKKe1fJiSwko1F%2FW%2B4oeLNtV79w6gZUP3F9VqVQIhAP6VH5rQWqmXiU6a7PjM1cqe0leMglHU%2BdfXV14zNEn4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTvaGfazOqwHlRZXMq3AP214mDEwlf3dt%2FfjaLepfRwWlbUgfNY06qQ%2Fnb7kylimJ43nYOAVA%2BoX2HUmFT4qN8DC%2BbOqU%2FTzqf4VdAqxe6DixQs6nYt6I7C9U1ns7d9AncEOMMp5%2FbQLmL90noyAORLjjNa6%2FN7HOsH0pL8UlWRlA3hxNKa%2BChBvAxxbEZ8m%2BWH9a8bqWvjvXROoUFx5mhmOGtPjMUQtrXixMh5U8IxUxCFyIyJ8WwNgb18Q9lp8mNw80HZ5FfRLXJtsopdOf9Cq%2FAgyrIv6SV28%2FbS0oAf5AhGsH6Ky6bJlLvjWSiDzsULvyzUca%2B2oLbSwLcqsWFwwXNR5z%2Fz3cnX3tDS5ZjpJimx2PRB3I8srF7ZfWmA9klPDWnxuNuZG9iMBrUwvqgSY1pbWBdaAdE%2Fi2jJuRuiNq6LdLUQq46MJK8UHB%2FKJsvNIuUuEa%2FAQ5%2BE2sZ3QU7QGkV7WbVajx2Q95MnLyOr%2FBkvJe8z2rdOUhkAagK4CZ7DOH%2BfsIlGEK9Qb5xo%2BBukn5c%2FQ8%2FoiayeOZyqP8XrsnTIfUFZ2k%2FctYi9Ge3m4BVc%2FL1YB3nfYOmdcAAFj7Ij%2F1VBDNlDR3aDfxlzGutO7obC6GM%2Fwf3AIaRsHthrYAo%2BXWkuSw%2BVq17PTCQ%2FdLJBjqkAe6ftaC1ZW9xBM0HsUvacjkxs0Betg8m5zIEI15rmvCMXA1RK8C5xmsmhvZ6%2BB6hLlBsTM8yVUV%2BvgJDdnWBA1kFuWu2MdMrbeDDBzgk8FN3e4c45K1wUhBMxk%2FnycI9SrrPZQGhLxhhLbK8PD6RAfPh5GJPZVwwSPlordH5TSHFfBJhXqEaZUvDPr2hBcFsbIYn%2BJ7NrGu%2BUiuIWwrhNrYaz6pm&X-Amz-Signature=5dcb09dd65c06b759362c3c51e89907756940d653d48b0e06d0f8b23edf76f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
