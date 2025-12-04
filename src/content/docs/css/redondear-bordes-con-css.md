---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRJBK4C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrhyJIzhRVWDIIUUDa5T53XMqUXOrVt%2BKcMhSf4Or8fAIgT%2FITG1ELbaYWgyRqQF30y66JDaO4QMut9DaHBPcZO1cq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK8C%2F8eZ%2F0eFDLg0ayrcAxYCsaDw%2BZb2jvx1gWJZKV4BgrrBEcVB9nNvZCQ96LHXtDrymScYwbNTV8LFOJJfmYoqUwysiQ8AVLjEPstVUWBCzHZrwZ62NXsQKUQ1mOdSi528%2F6W21CRMuAUXQ4VxV2iNhPhDPKdQ5xZUayaIRhbtqTpkI3s0pcE9nfYZrLaRBqnGFqYa8Gcm8QYqwPYzC6kmobW3QF%2FFmWcARJOI237ypIcWAPqwowStaILGKQyDEJI3eO5fhCjLlIX3u7jHRa%2FQdOUqE0gZlPTLU8JHpEZxUVdGqYTolHaBn%2FN3QA9FpmVBq2a8w4zqEDx1N6%2FjeL7W0x4ocRgsrmy7oL6ewpmv6jOZ6Yhevya0%2FepBRcr3kuysNR4eF5ti3mMKdEqVzSNMDNcFohpGVQp9OCKmqAxIqo9HroZksYRRgJ65O3%2BiGUsmkEEMaZPInoI3NVG4KDIoMZsC4L8DsQyyHXjkb2g8LzaFd1JvmNs8hryXAKVDA7DZflvq39OlpKCQcaXAIg0SMTScxngLQh6HEZsQRs4d%2F46%2Bs5VXsaHeX3oy0l9wo8qmonv%2Bd2%2BGvMX9rEiTvl2yDK1eucdbV0T0WQG9Sa11IGJvt4uHbbayM3LrjMAyoXLgxCaPeX1vAlAWMJrcxskGOqUBuKzAnpmzn56bzXQqFBmQ4gtQvE23eR%2Bo0SEDIAN8LiD29R8lf7Eoty1viltpeOZAS9ra0pv3VZW0S8cBzdVZtVcjOoHOdBxsskLtPLX%2FzNDYLilRh8rlcbsfa3XPKz1Naf3rENlzGy06tjPcQjiim%2FGm71LhoWyeAQn86vKPQZlIeJo6QSrEC13intl6uasiTXHX6lvt0ONVX7KS7sR3KkoFqTFs&X-Amz-Signature=34e0f4365071e7cc4ad7dad0671ae2cc2f226ccf316113d97f521fdb2a13cbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRJBK4C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrhyJIzhRVWDIIUUDa5T53XMqUXOrVt%2BKcMhSf4Or8fAIgT%2FITG1ELbaYWgyRqQF30y66JDaO4QMut9DaHBPcZO1cq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK8C%2F8eZ%2F0eFDLg0ayrcAxYCsaDw%2BZb2jvx1gWJZKV4BgrrBEcVB9nNvZCQ96LHXtDrymScYwbNTV8LFOJJfmYoqUwysiQ8AVLjEPstVUWBCzHZrwZ62NXsQKUQ1mOdSi528%2F6W21CRMuAUXQ4VxV2iNhPhDPKdQ5xZUayaIRhbtqTpkI3s0pcE9nfYZrLaRBqnGFqYa8Gcm8QYqwPYzC6kmobW3QF%2FFmWcARJOI237ypIcWAPqwowStaILGKQyDEJI3eO5fhCjLlIX3u7jHRa%2FQdOUqE0gZlPTLU8JHpEZxUVdGqYTolHaBn%2FN3QA9FpmVBq2a8w4zqEDx1N6%2FjeL7W0x4ocRgsrmy7oL6ewpmv6jOZ6Yhevya0%2FepBRcr3kuysNR4eF5ti3mMKdEqVzSNMDNcFohpGVQp9OCKmqAxIqo9HroZksYRRgJ65O3%2BiGUsmkEEMaZPInoI3NVG4KDIoMZsC4L8DsQyyHXjkb2g8LzaFd1JvmNs8hryXAKVDA7DZflvq39OlpKCQcaXAIg0SMTScxngLQh6HEZsQRs4d%2F46%2Bs5VXsaHeX3oy0l9wo8qmonv%2Bd2%2BGvMX9rEiTvl2yDK1eucdbV0T0WQG9Sa11IGJvt4uHbbayM3LrjMAyoXLgxCaPeX1vAlAWMJrcxskGOqUBuKzAnpmzn56bzXQqFBmQ4gtQvE23eR%2Bo0SEDIAN8LiD29R8lf7Eoty1viltpeOZAS9ra0pv3VZW0S8cBzdVZtVcjOoHOdBxsskLtPLX%2FzNDYLilRh8rlcbsfa3XPKz1Naf3rENlzGy06tjPcQjiim%2FGm71LhoWyeAQn86vKPQZlIeJo6QSrEC13intl6uasiTXHX6lvt0ONVX7KS7sR3KkoFqTFs&X-Amz-Signature=dd853624b1867244c37329298b870234f95db6bc0c0507fbc08b19f065dec87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
