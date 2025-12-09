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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZJLBDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFMUcQZcetDHQFnebkdFPqSSnyfkReFMNXgWYoDx7Q9wIgF%2BL6IjSOLmyKE5wr5ctFNoOEXTBsObwbdzlgbHAP5yYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbJd%2BW9Nox8QhVNqircA3k3Sog65%2FuhJWmxeQA92LTV95iFYKu0wLp3c8i09onKZ4Y3EuK6oKNMufwY4sWxGyCC8078c512GqcFvpIokB563koRY8jj7UH4JRRnRXxHyxXw%2BvR3FjVde0henEOPGwlXanKvKJBqLUjETHQs5ZCc07PQOSTQyyW3TdwQo9lFj0cz6zOb4phSaIAakgcVyoN62LKrQrn1CdFS9Td%2BlfOJF%2Bg7liz4%2Ff1%2Fods2rKibO0RumZ%2Fz3z6OifpOMfS%2BevqKpIpBN7EPnGmcP6XQGQdK8GUfxmx1m1JGd4a8%2Fuf14G2hC25J7UIflcDXB7fBeB1bhjkgQ9xYM18YSMsA8d9IpwZvTrDVNedFKGM%2Bo5ewivnsk2H%2FPAuEHo5Kko93oEFtgtdeKGi9lbfe925V9tnDowuntJNGbyPHbl7C7VmbpBEXVNLp6VeE24Ja8N%2F9fnn2MIZMLV3ijFoz3cjH8pN46K%2FzWD5R%2FM%2FkYy4MMq1ue5RU%2FjawJAc2zJF3kSePLSIooH38u2RivYx0NPTvOiLerlgxQI6CS1HmUI5KvpWKVDFH92L57%2BPQ3afxiIWvVglkNHHb5xeAMqBDPXoLDHX6J0vwKBrs%2FWHAcArQpuvattOGS22hNvSt5lxfMPjJ3skGOqUBoiefwIVEmwb6yBGfOcPsgNzagRLO3sOel7799%2B1LcfJr6QHc10VkGKGnQz2zuf2HhlPHs8xejSFOofKp7h6Zy1UoUw5TfDu%2Fo97gTbeR8IyRM8zQAMCZRQB1p3XFtWwNU0Ene9hNI5OA%2Ft1yqBhjP1nSkyWryg%2BCanlH4xasYBHUAFLvo%2FpdcdaXrk1ynCgZOIfCYqOfTnugjVgYCdxatIlIXG02&X-Amz-Signature=ed69e78e2ef77a79b43cac0723106730205ea9cfdd436df6dfd7f61fbee2d94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZJLBDQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFMUcQZcetDHQFnebkdFPqSSnyfkReFMNXgWYoDx7Q9wIgF%2BL6IjSOLmyKE5wr5ctFNoOEXTBsObwbdzlgbHAP5yYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbJd%2BW9Nox8QhVNqircA3k3Sog65%2FuhJWmxeQA92LTV95iFYKu0wLp3c8i09onKZ4Y3EuK6oKNMufwY4sWxGyCC8078c512GqcFvpIokB563koRY8jj7UH4JRRnRXxHyxXw%2BvR3FjVde0henEOPGwlXanKvKJBqLUjETHQs5ZCc07PQOSTQyyW3TdwQo9lFj0cz6zOb4phSaIAakgcVyoN62LKrQrn1CdFS9Td%2BlfOJF%2Bg7liz4%2Ff1%2Fods2rKibO0RumZ%2Fz3z6OifpOMfS%2BevqKpIpBN7EPnGmcP6XQGQdK8GUfxmx1m1JGd4a8%2Fuf14G2hC25J7UIflcDXB7fBeB1bhjkgQ9xYM18YSMsA8d9IpwZvTrDVNedFKGM%2Bo5ewivnsk2H%2FPAuEHo5Kko93oEFtgtdeKGi9lbfe925V9tnDowuntJNGbyPHbl7C7VmbpBEXVNLp6VeE24Ja8N%2F9fnn2MIZMLV3ijFoz3cjH8pN46K%2FzWD5R%2FM%2FkYy4MMq1ue5RU%2FjawJAc2zJF3kSePLSIooH38u2RivYx0NPTvOiLerlgxQI6CS1HmUI5KvpWKVDFH92L57%2BPQ3afxiIWvVglkNHHb5xeAMqBDPXoLDHX6J0vwKBrs%2FWHAcArQpuvattOGS22hNvSt5lxfMPjJ3skGOqUBoiefwIVEmwb6yBGfOcPsgNzagRLO3sOel7799%2B1LcfJr6QHc10VkGKGnQz2zuf2HhlPHs8xejSFOofKp7h6Zy1UoUw5TfDu%2Fo97gTbeR8IyRM8zQAMCZRQB1p3XFtWwNU0Ene9hNI5OA%2Ft1yqBhjP1nSkyWryg%2BCanlH4xasYBHUAFLvo%2FpdcdaXrk1ynCgZOIfCYqOfTnugjVgYCdxatIlIXG02&X-Amz-Signature=055886c384629f95294ba46dc2e230f7c2ce4635e58c426d8d8e1e46461e3604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
