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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNXDVPG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC92%2BDe9v1xn3%2BPhoLuD8I5FFtCwzA6T73uhfrGsimk3AiEA2ZSljSyGkYymQ%2B59JSs2xx1GtZib9CNMb7BUs4q%2BVZUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4FZZqBdMPS%2BQeE3ircAzo36fV3UkJzUrUTN8DsVTdnI5lQzbjrUb%2BLOiMtSsHKh4Q613tPwfubqUtLTO8lbpdMvmsl4OXEy64BUkB2xER6FS4aYo9Vi0p6fHcyhyNy60nJOHkjIqKRWZfvFFexrJLEQj5N1%2BpX5D1JVBAxxQ0aGKX4s8s3wCJrUJYuWCGX%2Fvh4blUe8PhKlLUHxv8AJf9CujvLaAAT4ABYi1v6yBTjrki%2BtNxyDuVDymT9%2B5cHN9dKjvRfCnGYC6F18jhkHgF65KJKkAAbFxED2uwXRo%2B%2FRsz4eWcdujmPDYteeAEgOw56d3FB%2BSKR1KTAWZqoIYLFeVI%2B5a%2Bm84RVfyfFvv9paB9ea%2BGbhsg3unAzjgxjVup1BhswPjNhtc%2FI1ahsL2JzCYx%2FQgosfbtgt7auDMgH9K8g7WHVma0T8gOvSljd3Fu5%2Bq2GleOOg0qFnnmU9WgyUIPDlAFs5FiqwyUZNQixNEY%2FOCdj0mfbq59T95yPTXb5WWQV0PJbDBbysg3Jeuqh16nvPXXRn32SWMHDbBgdvd88UW%2B9CAA8MfAiPrQttHyJB96F%2FwZxb%2FoCKUYYlE7CTHGx0xPjO4wb5bgKCmW1gZtBqHzqwq%2B2mRZW5VKaxXxXEcFS1GujMJpiMISLjMoGOqUBtre2OuMCYqWASwmU3Qw%2B6qL9Fulj2EF5msqK3nlYzQJnQ867YCzJC9rJt4awNI52JY1C7HsV8Wulq7dfuzutG0WJKUvAcaWgd43KvgyAMX%2F4EpSECeM7Dl9PvLXkLIMz7d909MvnZ8V0d7TTOQvJyuZgexCD8k%2F1og%2FsOohSn3NkJIAc%2B736C8EJeBF4EylykgpqRrTWppj64plyZ%2FH9jWETEcYX&X-Amz-Signature=1c9dc2fdb3076f15dcac1dbb51df64d269aa36d76a5b6a9369ed959e39e6ef4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNXDVPG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC92%2BDe9v1xn3%2BPhoLuD8I5FFtCwzA6T73uhfrGsimk3AiEA2ZSljSyGkYymQ%2B59JSs2xx1GtZib9CNMb7BUs4q%2BVZUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4FZZqBdMPS%2BQeE3ircAzo36fV3UkJzUrUTN8DsVTdnI5lQzbjrUb%2BLOiMtSsHKh4Q613tPwfubqUtLTO8lbpdMvmsl4OXEy64BUkB2xER6FS4aYo9Vi0p6fHcyhyNy60nJOHkjIqKRWZfvFFexrJLEQj5N1%2BpX5D1JVBAxxQ0aGKX4s8s3wCJrUJYuWCGX%2Fvh4blUe8PhKlLUHxv8AJf9CujvLaAAT4ABYi1v6yBTjrki%2BtNxyDuVDymT9%2B5cHN9dKjvRfCnGYC6F18jhkHgF65KJKkAAbFxED2uwXRo%2B%2FRsz4eWcdujmPDYteeAEgOw56d3FB%2BSKR1KTAWZqoIYLFeVI%2B5a%2Bm84RVfyfFvv9paB9ea%2BGbhsg3unAzjgxjVup1BhswPjNhtc%2FI1ahsL2JzCYx%2FQgosfbtgt7auDMgH9K8g7WHVma0T8gOvSljd3Fu5%2Bq2GleOOg0qFnnmU9WgyUIPDlAFs5FiqwyUZNQixNEY%2FOCdj0mfbq59T95yPTXb5WWQV0PJbDBbysg3Jeuqh16nvPXXRn32SWMHDbBgdvd88UW%2B9CAA8MfAiPrQttHyJB96F%2FwZxb%2FoCKUYYlE7CTHGx0xPjO4wb5bgKCmW1gZtBqHzqwq%2B2mRZW5VKaxXxXEcFS1GujMJpiMISLjMoGOqUBtre2OuMCYqWASwmU3Qw%2B6qL9Fulj2EF5msqK3nlYzQJnQ867YCzJC9rJt4awNI52JY1C7HsV8Wulq7dfuzutG0WJKUvAcaWgd43KvgyAMX%2F4EpSECeM7Dl9PvLXkLIMz7d909MvnZ8V0d7TTOQvJyuZgexCD8k%2F1og%2FsOohSn3NkJIAc%2B736C8EJeBF4EylykgpqRrTWppj64plyZ%2FH9jWETEcYX&X-Amz-Signature=1d62292e55049c1ea320bdfa7244e36b57a4fb234db112c79a59e2c12fd22ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
