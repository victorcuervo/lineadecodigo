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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73ENG4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHpzh4cHnYbI775AJAQ96XfxkPO2SW8DSLX3K14eaxvgIgHT9A%2FmKCxitgSxjGnDxmS22zUHJBoPJh7wgFIbWb9nUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZtvOsHkJ6qATNROyrcAy6SdjjQUJTuQGZ5kJIgGbllgKpyKwzSk7lPR7JN5phwRpJyHqNokhmwweAwOTpJuxew8GAvtV564cNNkR91TTfkwbbgPsc5BPGBMBOZe1PUAhIPmLe5rK%2FF6jMAViHdSzVkW8XdctdztcBbnzDQFO%2F7LueCnEUzcV3FPmZV2d3vuwwJWOdQybqxWvpG0Vw7lM1xEvksZMK%2B8ulidr%2F63n%2FjIfU2gyN56iwrJaRaznVK3iAntCB9ReJszesu8z7JKTJniv30PmyyrT7BZNo80loFQbzFHA%2B7pqGCoTmEuv8rtQmnXhrZKKROqs5arDQbGeG4i9DjiVi6WtSQ0wZOax7cDUBtt6hygX60ovxgBlr61VnAKuv694zBC0x7%2BoAYT1dWAs5e5Fv8PGHaXINALrwo2GRKjMjyDIdNsodecGOOVgvepSnF8M9laUMFrJpd2XvXF%2FAsj3bWqyfXIr%2B1TQRY8wRAL9bjk61MqaGSqEWa3xe6b1bjznStqoKSP3GsyvbCsKgMO1WNrFjiUn%2F2ufUZee3Q2tswGWJDfkm1zyv%2FhcP%2Bgv5zt2dP5jX4P3WITnyoMyXwOXU%2FrgLYSlpxiGb17IzG5V6e%2BpZHfdu0f1Pjmoc2Ji5FL%2FtwI30JMNWt3skGOqUBy7r0mCYnWC1o%2BfqsZXNSrz45He%2Frjp%2FyM64NtWsKwyqfRx4rUgU%2BkFdgH7E5hjKQ4oumMn3fJ8Gt%2B0SbjZQfa2xxLhSiB4FQKFR7KFfLyMPb8uYDapbUDiSBNRvrK5suKs08aq0LUDdm1HnDoILRlfjhmzH1k4LpoUsjvS85FI%2BQ42h8TQQus5%2BV%2BZSd28BO0Oyf63HGSROCR2ZTQw2C81rv6kNi&X-Amz-Signature=3e677ee4874de5cdabbb89a9a8e14de52986ebda63b801491972521c9a5ae70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX73ENG4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHpzh4cHnYbI775AJAQ96XfxkPO2SW8DSLX3K14eaxvgIgHT9A%2FmKCxitgSxjGnDxmS22zUHJBoPJh7wgFIbWb9nUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZtvOsHkJ6qATNROyrcAy6SdjjQUJTuQGZ5kJIgGbllgKpyKwzSk7lPR7JN5phwRpJyHqNokhmwweAwOTpJuxew8GAvtV564cNNkR91TTfkwbbgPsc5BPGBMBOZe1PUAhIPmLe5rK%2FF6jMAViHdSzVkW8XdctdztcBbnzDQFO%2F7LueCnEUzcV3FPmZV2d3vuwwJWOdQybqxWvpG0Vw7lM1xEvksZMK%2B8ulidr%2F63n%2FjIfU2gyN56iwrJaRaznVK3iAntCB9ReJszesu8z7JKTJniv30PmyyrT7BZNo80loFQbzFHA%2B7pqGCoTmEuv8rtQmnXhrZKKROqs5arDQbGeG4i9DjiVi6WtSQ0wZOax7cDUBtt6hygX60ovxgBlr61VnAKuv694zBC0x7%2BoAYT1dWAs5e5Fv8PGHaXINALrwo2GRKjMjyDIdNsodecGOOVgvepSnF8M9laUMFrJpd2XvXF%2FAsj3bWqyfXIr%2B1TQRY8wRAL9bjk61MqaGSqEWa3xe6b1bjznStqoKSP3GsyvbCsKgMO1WNrFjiUn%2F2ufUZee3Q2tswGWJDfkm1zyv%2FhcP%2Bgv5zt2dP5jX4P3WITnyoMyXwOXU%2FrgLYSlpxiGb17IzG5V6e%2BpZHfdu0f1Pjmoc2Ji5FL%2FtwI30JMNWt3skGOqUBy7r0mCYnWC1o%2BfqsZXNSrz45He%2Frjp%2FyM64NtWsKwyqfRx4rUgU%2BkFdgH7E5hjKQ4oumMn3fJ8Gt%2B0SbjZQfa2xxLhSiB4FQKFR7KFfLyMPb8uYDapbUDiSBNRvrK5suKs08aq0LUDdm1HnDoILRlfjhmzH1k4LpoUsjvS85FI%2BQ42h8TQQus5%2BV%2BZSd28BO0Oyf63HGSROCR2ZTQw2C81rv6kNi&X-Amz-Signature=42d9a5f25881d77dc20daa3cb47bc29bb70f334d2e91dfff860ff820a097b585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
