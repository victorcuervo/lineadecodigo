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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRYBLG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FOIGWN4vApMWyQkME%2FFw7ghg4nGckYJmYNF4iHl3MZAIgL751mMeU3%2Bpim4zgMnAS2btTqhYumN%2B0ibE2W0%2BK8MoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBNW0OSdaX6AfgZrircA643cxyAnlYHy0Tpy7L%2FvnVrJVhRg%2FcckNaWGmoSbb%2FlinGIZQoqkd0MKlg%2FpSwQMBhoOtV8sBOb7jnJMcZDUgJqi8X4YOBqs372WsrloV1kmT61sXLUSYoY2hgE3ZDB2%2FX3%2FtwDXTzyowZL6c4B8m1tJ%2FAtc5oxSdAn0WJ6M%2FQK6QVu9PbYPEpFEmzZh06hga7LzvYhzCxFuE8swMtzR6ptC3K79vykjioN4fZStyCbNP5cq7HX9bIPuYZSkqacFEf313AD8jtQnO6piAaAJi4cYGhfHNUNdu2LypvuRlxg8PbRen71IraoBNChMC5efnSgTLAVHayjr6nibvF%2FlX24GzvBD6fvscdL9tmWSWzCEU%2F0tYt69%2FlRo3TgQUSeYPN8tKYc6%2Bd9qpmhtDx6Q0ytbAzTHIjtGHxW8mPqrtIZuUVReQno1ZJyfnpcBlk8j5Ny7RYXu5Fkx%2BqzJyFXmlCHBebJRbNMt%2BVRpO%2BoMK%2Bl8m6pi61iqBLpx9lTYxcRgUNJOb4G8JATmBkusWl3FvXfbP54ySztDPSzorKdneMNQ2KdR7Di0r6q87NU4eRhisYk%2FmKZWaz7XxD5saFIBn4BREdHnMz6wyjN2RT1C8wENIe4VL3ERekGfH4cMICLjMoGOqUBJQzmnMz%2FVMfttW1UYjkmUolXDDzDhjeMrlWxUtmhLb0gcoQj4wgZT5vtTAuZpcJulkFaZrtcI04W1fxI%2BuhRPDhCiNd6PbX5H9apwTC%2FVOMkcw%2FLxTEoKwkKSOoSxnKVzaIxS%2F5Daaex8VhduoqBHAh6y%2Bw3Dm8w2ohVOeIzAgi95MW0wBv3sSBv7qEld1EGT3MycIAfmSQz3vCy6uf39O1K0Bxw&X-Amz-Signature=c2f89fdd4b4e1a53833731442b789c2128edf1488f105b2bd6a39434de9465e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRYBLG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FOIGWN4vApMWyQkME%2FFw7ghg4nGckYJmYNF4iHl3MZAIgL751mMeU3%2Bpim4zgMnAS2btTqhYumN%2B0ibE2W0%2BK8MoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBNW0OSdaX6AfgZrircA643cxyAnlYHy0Tpy7L%2FvnVrJVhRg%2FcckNaWGmoSbb%2FlinGIZQoqkd0MKlg%2FpSwQMBhoOtV8sBOb7jnJMcZDUgJqi8X4YOBqs372WsrloV1kmT61sXLUSYoY2hgE3ZDB2%2FX3%2FtwDXTzyowZL6c4B8m1tJ%2FAtc5oxSdAn0WJ6M%2FQK6QVu9PbYPEpFEmzZh06hga7LzvYhzCxFuE8swMtzR6ptC3K79vykjioN4fZStyCbNP5cq7HX9bIPuYZSkqacFEf313AD8jtQnO6piAaAJi4cYGhfHNUNdu2LypvuRlxg8PbRen71IraoBNChMC5efnSgTLAVHayjr6nibvF%2FlX24GzvBD6fvscdL9tmWSWzCEU%2F0tYt69%2FlRo3TgQUSeYPN8tKYc6%2Bd9qpmhtDx6Q0ytbAzTHIjtGHxW8mPqrtIZuUVReQno1ZJyfnpcBlk8j5Ny7RYXu5Fkx%2BqzJyFXmlCHBebJRbNMt%2BVRpO%2BoMK%2Bl8m6pi61iqBLpx9lTYxcRgUNJOb4G8JATmBkusWl3FvXfbP54ySztDPSzorKdneMNQ2KdR7Di0r6q87NU4eRhisYk%2FmKZWaz7XxD5saFIBn4BREdHnMz6wyjN2RT1C8wENIe4VL3ERekGfH4cMICLjMoGOqUBJQzmnMz%2FVMfttW1UYjkmUolXDDzDhjeMrlWxUtmhLb0gcoQj4wgZT5vtTAuZpcJulkFaZrtcI04W1fxI%2BuhRPDhCiNd6PbX5H9apwTC%2FVOMkcw%2FLxTEoKwkKSOoSxnKVzaIxS%2F5Daaex8VhduoqBHAh6y%2Bw3Dm8w2ohVOeIzAgi95MW0wBv3sSBv7qEld1EGT3MycIAfmSQz3vCy6uf39O1K0Bxw&X-Amz-Signature=82c727e90fa14dacda99c41238915daab4984a6eee8abbfdd09f0825bcc96b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
