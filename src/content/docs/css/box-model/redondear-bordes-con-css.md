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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQMGTPNQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOHEOmgwW7EzLSs6zh6EeigK6XZzejvsO0xm4t6sZs3wIgQOvLWJvDmHBpn6gshfPo3oNXZ0NzaoiAhlQG5Dm8i%2BUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO62c1AKSAH93559%2BCrcA7p%2FNj7DKT2W2RiYZpePoPzXBjuSn%2FkbDhRaxNtjnKTJjkrinUaNwp6cgf9cPQ5LWoYLjTAFyvIKAD4pdhZo%2BIjk8Vq5lntKhl1k6rJLA0O38xFNl38DRmO2m5JS1FnGHmiz3ZcoCKuAzdvYVJ1tRVlp8bXTuBuhY%2BeogNhZ1ELU0H3rEIoaclrcQ681s0yNgXLc0%2BpyzJu%2FMEh22qeDqCTWoN2%2FI0O93P57Cfuu8spOdORmSzq6UQbW7xqtdsr4KMN8J9moOUtswg4FpRl3oyjXqNonbzvZT2NPuM01EJ%2FavymPv2JzqGFcuRSbd1PZN4hTF9jc%2B%2FUnl8evkteBQRRVvwyq8CMZKBeFbcNGTT9D5uDZQEpan3Nx7NBXOF4abR9O0doTnUhyQ0hh2bAfK%2FpCsnppVN4Msm9geuS2bjvf7HS8V%2Bd503DR1zdjHqBH1WqlPou5pNELJGa4tJZssknI7a0XPeO6EhKifIi2WNTWkL5SHSBwkbMoiE1c1hkxt8A319tB800Yo8EO5KvwYVMjKLq68Y4GUuXMBJpJh51VIW690a%2BIOGqs37dhNLhKMv72JovLkQn2edg%2BkJRXVzTbb9dIVhdcZ9k5nKBplrXwAh0o595zs87wO4N8MO2Bi8oGOqUB26ciDKFsrl5lwVBmD2MitLQxQgCo0lQzD8hwqKyd8AC%2FvpSWRoA%2BK7eDszeAHNkdALDKfZVODsZN2Z0z8QuD8vcHSL7AowsMb9%2BbKGnZsAHG%2FlSWaz19%2FqBqygVrbYUBTHjeSddyIlMM%2FUjBWdIc7OefjAMI7gU9QBJM6ggmHZNmKquRNGRHhWKqtsOmhUjKprwUn09%2F6NU9V%2BADaDW3NzywAoBu&X-Amz-Signature=e521f83b039407c1b09fb1c16e6d1e72bad3d5fd706c0994ee4395d735ac5eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQMGTPNQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOHEOmgwW7EzLSs6zh6EeigK6XZzejvsO0xm4t6sZs3wIgQOvLWJvDmHBpn6gshfPo3oNXZ0NzaoiAhlQG5Dm8i%2BUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO62c1AKSAH93559%2BCrcA7p%2FNj7DKT2W2RiYZpePoPzXBjuSn%2FkbDhRaxNtjnKTJjkrinUaNwp6cgf9cPQ5LWoYLjTAFyvIKAD4pdhZo%2BIjk8Vq5lntKhl1k6rJLA0O38xFNl38DRmO2m5JS1FnGHmiz3ZcoCKuAzdvYVJ1tRVlp8bXTuBuhY%2BeogNhZ1ELU0H3rEIoaclrcQ681s0yNgXLc0%2BpyzJu%2FMEh22qeDqCTWoN2%2FI0O93P57Cfuu8spOdORmSzq6UQbW7xqtdsr4KMN8J9moOUtswg4FpRl3oyjXqNonbzvZT2NPuM01EJ%2FavymPv2JzqGFcuRSbd1PZN4hTF9jc%2B%2FUnl8evkteBQRRVvwyq8CMZKBeFbcNGTT9D5uDZQEpan3Nx7NBXOF4abR9O0doTnUhyQ0hh2bAfK%2FpCsnppVN4Msm9geuS2bjvf7HS8V%2Bd503DR1zdjHqBH1WqlPou5pNELJGa4tJZssknI7a0XPeO6EhKifIi2WNTWkL5SHSBwkbMoiE1c1hkxt8A319tB800Yo8EO5KvwYVMjKLq68Y4GUuXMBJpJh51VIW690a%2BIOGqs37dhNLhKMv72JovLkQn2edg%2BkJRXVzTbb9dIVhdcZ9k5nKBplrXwAh0o595zs87wO4N8MO2Bi8oGOqUB26ciDKFsrl5lwVBmD2MitLQxQgCo0lQzD8hwqKyd8AC%2FvpSWRoA%2BK7eDszeAHNkdALDKfZVODsZN2Z0z8QuD8vcHSL7AowsMb9%2BbKGnZsAHG%2FlSWaz19%2FqBqygVrbYUBTHjeSddyIlMM%2FUjBWdIc7OefjAMI7gU9QBJM6ggmHZNmKquRNGRHhWKqtsOmhUjKprwUn09%2F6NU9V%2BADaDW3NzywAoBu&X-Amz-Signature=faafc8fb66a3ee3d0b937674ac798f4dac74d950c3e7ff1d102443e3655da1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
