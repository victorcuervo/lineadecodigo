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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYOXC6Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDE2NthNCvASLtVIaWfSa1Hz5zSBu0lGq%2Fbho3GJZd%2BAiEAmT3iqhom2HluR9G4%2FPXD0%2FOHMpsn2HlrS39ZLZKm98oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFaDtbjsbU64oqbMUCrcA5VfqhpsCp5dLzn%2BaFLKoIHjVinK6fRKo%2B%2BRS2Gni393VW1nYIBSbRi96mwGiTLpfrtdvBZWV6OR7DI4NF0L7TtlMXR1xDdJoFv4R3YLgemezJYemqLdy50sFvrfKSZHy5G9qCIlYmJxFgI4xbFcn69EgxE9NC%2BOVl538R84ICXoOEwN0%2BA3VSLHP%2F3j8lPmzS3W3FmAjIUR7QnHLFfbtpmBUFBePI93RKp5DZTRWGli43VxOputNWqHKFfRFGh2%2FF1zZOJ42qjjMwTM3q1AbKyn7UjCUejb9na7h6JezF21xVpWszlor1sLPFdh9DQZbPkLbB1Weizm87UvKzRC7krzmX5MbuhtG3lFCYy90HwG7FJR1ZOHgeGzl9Yd0%2FT551ydqn1eb%2BWxC2gO8bhjUALuixvDG7CFBcOBpn9hM37V1vNl7UB6lalw6O0caBMCOBB%2FVGoO4dGXwU0Tw%2BoWPIzalj2OwGgrvjDgZLIW1gdBHLPpjlmISPa3elrLvOjBYJoeW2fxfQXhEJyZf8VVRQ6vbq1cnkH0Uen9%2B4oivM1xs5dS8pp63rgNfvT8ZyDV4mU3VpZ%2B2fMWedyH0NXC2fZJVQ6LXQHzDGN0stAoFaDbiGYU6IAOkvA7%2BKalMN6MyMkGOqUBXWEvG0M4piHcupLX8b1p00c0EqQZNe%2FWDETqVZGfA9Pji21ZFeFUbGqXThbiX6I1m%2BYqsRQlMfB3aLqRiEutz25VMYUYzzU7oda7YEaTopRtTM9H0TJAWzCaKY%2BGSI2t880XdN1ozeU3AwuplyDHJUUSwCnvxrhGYR%2BkAA%2FJUIplV3LVkoXmi5Ocro4S4QyC3aQPwJunSMm0Z9AxBZGV2ohD1Fr9&X-Amz-Signature=b1a733e15f2a99ab7324825d51a00b68e3ef06b2db79606b8e1c76f4064742c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYOXC6Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDE2NthNCvASLtVIaWfSa1Hz5zSBu0lGq%2Fbho3GJZd%2BAiEAmT3iqhom2HluR9G4%2FPXD0%2FOHMpsn2HlrS39ZLZKm98oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFaDtbjsbU64oqbMUCrcA5VfqhpsCp5dLzn%2BaFLKoIHjVinK6fRKo%2B%2BRS2Gni393VW1nYIBSbRi96mwGiTLpfrtdvBZWV6OR7DI4NF0L7TtlMXR1xDdJoFv4R3YLgemezJYemqLdy50sFvrfKSZHy5G9qCIlYmJxFgI4xbFcn69EgxE9NC%2BOVl538R84ICXoOEwN0%2BA3VSLHP%2F3j8lPmzS3W3FmAjIUR7QnHLFfbtpmBUFBePI93RKp5DZTRWGli43VxOputNWqHKFfRFGh2%2FF1zZOJ42qjjMwTM3q1AbKyn7UjCUejb9na7h6JezF21xVpWszlor1sLPFdh9DQZbPkLbB1Weizm87UvKzRC7krzmX5MbuhtG3lFCYy90HwG7FJR1ZOHgeGzl9Yd0%2FT551ydqn1eb%2BWxC2gO8bhjUALuixvDG7CFBcOBpn9hM37V1vNl7UB6lalw6O0caBMCOBB%2FVGoO4dGXwU0Tw%2BoWPIzalj2OwGgrvjDgZLIW1gdBHLPpjlmISPa3elrLvOjBYJoeW2fxfQXhEJyZf8VVRQ6vbq1cnkH0Uen9%2B4oivM1xs5dS8pp63rgNfvT8ZyDV4mU3VpZ%2B2fMWedyH0NXC2fZJVQ6LXQHzDGN0stAoFaDbiGYU6IAOkvA7%2BKalMN6MyMkGOqUBXWEvG0M4piHcupLX8b1p00c0EqQZNe%2FWDETqVZGfA9Pji21ZFeFUbGqXThbiX6I1m%2BYqsRQlMfB3aLqRiEutz25VMYUYzzU7oda7YEaTopRtTM9H0TJAWzCaKY%2BGSI2t880XdN1ozeU3AwuplyDHJUUSwCnvxrhGYR%2BkAA%2FJUIplV3LVkoXmi5Ocro4S4QyC3aQPwJunSMm0Z9AxBZGV2ohD1Fr9&X-Amz-Signature=726087bbf252941ee9d01be7f47b829d31f1fe9a7ed66fad2d32af33d657fde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
