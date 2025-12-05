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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFXTD6IG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4DYVRT63Bj5cP3JVC2V5wr0BGANJ5KhWJRAdTxhYO2gIhAM7BfQ%2B5WW%2FefoM%2FqcvvqPhmi5AUb3CIf7jV%2F5YHuKoAKv8DCE8QABoMNjM3NDIzMTgzODA1IgyOi%2BeiwNszhCP0ZdMq3AOUKJBxwklCPouOZNZWNiySUOgaUx1L5%2Bjww5JYnkfEue4ObkT7v5P0KAswNRB4wPnghcF3%2B%2FGfM8Krc9jJSlKpMD2yiYmbko9JlCXB9Eq5hgxEY5tTp8EgOVG3vAKtMQoxx1PQvlSsvtO5Uh6KJ3vqqFjJWBkjDYSn7P2ptfXQZ%2Bfh%2F0VvFOsT6Z6HjpW6eZkI%2F6FLpYFlrfZF4hv1SemvbiLHqK0Ypx8RPrgtH%2FXmbvJK%2B0ZwiO%2B14teW%2FAYFWbOichnppnKZwONk8roqwPGusZDNBFeZotBCNwcrJMx6TdfmIMzJkV6ty7yWnKX8PhFRSu5jTPKfHtfmViu3Tq7JtB3ZSwYy0wjYN00knNe8R%2B4iYltZiaqUJ93vRtUbg9uEqpn%2B5QOvidBE8jaYXNpcP%2BG76ic5ur9I8VU0xzCBn9tvMoGinTlrBejdqWibvMzBVtc9cthV8FII%2BUcD7CzWfOuPHPds9ea%2Fu4lWTRcO3tZXF70LJ3PBqJedtueIYBWFyG6vFs6qrJo%2BzmNq5qzHRglleQWDYr1hCmUb9ZO6PCKzIRY2xqAtBcvfF4YflYB5KRRosrQxRDBPT%2Fg3FIxqBdkjqP438U0LNhiz%2Bbu6T97F%2FyJu1i2wxQ7idDDujMjJBjqkAfFy%2BVQXHLHOWzzhyksLu%2BarwH2PrFvO%2FGTRBHQgQIfylDM7niesDY64eWnDUszBeB5Lv5e%2BD2wTEGeYee%2BtO8G%2FiulcYaJPpYcdqY60fcu4%2FntExZtwkUqgN963b1J1N4RckdeTc4P2yufQ4jil53pthRSZbargGwJEPbGssg0serzg8ldT%2F8gt9OXRCHO%2FDmIdeXII5LCci2EBPhZ6kInbvUhP&X-Amz-Signature=fd7e2a4a7fef47f3ce4d440253caf0a309767b9324dbc0a5280ea54eb5d4a4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFXTD6IG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4DYVRT63Bj5cP3JVC2V5wr0BGANJ5KhWJRAdTxhYO2gIhAM7BfQ%2B5WW%2FefoM%2FqcvvqPhmi5AUb3CIf7jV%2F5YHuKoAKv8DCE8QABoMNjM3NDIzMTgzODA1IgyOi%2BeiwNszhCP0ZdMq3AOUKJBxwklCPouOZNZWNiySUOgaUx1L5%2Bjww5JYnkfEue4ObkT7v5P0KAswNRB4wPnghcF3%2B%2FGfM8Krc9jJSlKpMD2yiYmbko9JlCXB9Eq5hgxEY5tTp8EgOVG3vAKtMQoxx1PQvlSsvtO5Uh6KJ3vqqFjJWBkjDYSn7P2ptfXQZ%2Bfh%2F0VvFOsT6Z6HjpW6eZkI%2F6FLpYFlrfZF4hv1SemvbiLHqK0Ypx8RPrgtH%2FXmbvJK%2B0ZwiO%2B14teW%2FAYFWbOichnppnKZwONk8roqwPGusZDNBFeZotBCNwcrJMx6TdfmIMzJkV6ty7yWnKX8PhFRSu5jTPKfHtfmViu3Tq7JtB3ZSwYy0wjYN00knNe8R%2B4iYltZiaqUJ93vRtUbg9uEqpn%2B5QOvidBE8jaYXNpcP%2BG76ic5ur9I8VU0xzCBn9tvMoGinTlrBejdqWibvMzBVtc9cthV8FII%2BUcD7CzWfOuPHPds9ea%2Fu4lWTRcO3tZXF70LJ3PBqJedtueIYBWFyG6vFs6qrJo%2BzmNq5qzHRglleQWDYr1hCmUb9ZO6PCKzIRY2xqAtBcvfF4YflYB5KRRosrQxRDBPT%2Fg3FIxqBdkjqP438U0LNhiz%2Bbu6T97F%2FyJu1i2wxQ7idDDujMjJBjqkAfFy%2BVQXHLHOWzzhyksLu%2BarwH2PrFvO%2FGTRBHQgQIfylDM7niesDY64eWnDUszBeB5Lv5e%2BD2wTEGeYee%2BtO8G%2FiulcYaJPpYcdqY60fcu4%2FntExZtwkUqgN963b1J1N4RckdeTc4P2yufQ4jil53pthRSZbargGwJEPbGssg0serzg8ldT%2F8gt9OXRCHO%2FDmIdeXII5LCci2EBPhZ6kInbvUhP&X-Amz-Signature=720ccd1c63226fb261bf6e3be947f3adc2e4dba8d7e08bf2642c395767f9dc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
