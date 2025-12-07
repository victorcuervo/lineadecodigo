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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMAN3LFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmlSZpmOGVflIh7PaOJ%2FJ1BboXLdiQS%2FBV2CZhW3Ek4AiAwBo5lpqFZsYIStp35D%2B1rGNS5dGFi8TSoHvtix6pUNiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyruayJ5vAPPHMxsAKtwDdXmreFP5%2BAztTePN%2FS4%2BegnUHHiEvCW7CDe6KIwKYyKk4E0WYdYPn7M9p40aNDVqiN2hDUqKVWvHvhVU83yX2v2j4H8sxg%2F1reHtPAnSrbRktkj0mUO8DoUiTO%2FH8g5ECwGEtfz3i%2B02wU35XwY5a1iJ8wYLj%2FcmsUsa3mkxu4N8%2FCAYzZND0C6u%2BKBNxP3SF8ZWa4jYxrrApgetwlG%2BRqoGdZ68Sp6mtbI4ZAugiWhKDyOm1CysPjqhGl5iF8ixRTyroFqQADCDQQhCYLVTSgzyALM5Uneuq4jW7Dtaq9yc1cqbFX6VuxORsQQcEJcS3DAFvCNN9sGJTOm4BXud4tiSimIFkCY8fIkMnjmaBioD2aWdspr5NtZCugyYJrX%2Ftx3y1YZZowJrVsFzFBH7I%2BvR5S6x3JiFLBUlEi5gdRB1ihUhq08PTKKWpKlwE%2FDy51bPQaGdsES18eJLxluD07%2FP4nfvJaSMg7Eo6IwGUaT7fQsg5hc%2FFYEVyDIJL8qxrcoa1xKxLscDkE89LLIS6eADtAwzhHQrkiBb61SEMGDYL1HN4GW%2BqG9pBnlGV4SJ%2BMQCZ6VIuxkhlRSLt%2F3FHEPNCVum3McX%2B4CTlrr8LAPIHfkTVxguTsg3GyMw%2BaDUyQY6pgForDqCL89CBT69W47CkEkaqYvUkavFfQg6Y%2B3INrkI9e8F51VYu3kDVS6Rt8XmAYGxNOhXWR9Xna8tQQjTlCJQlvZG%2Fr%2FOX%2FF6fx0XYMZlbFMWDO3C9JRlAch2ORD6WTIXWCXdN3uz2FByKOEnnFk0DwvFMQHguaQ4uQT4I%2BpglKa%2BgfC9Z%2BIUq49wzWpdPOlp6nGi%2F2syfQMchCdrUaeJBaGfuy4L&X-Amz-Signature=c183cf05aa6fa0f284d0517628716247556e8686eb554e13595156a53c1a5cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMAN3LFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmlSZpmOGVflIh7PaOJ%2FJ1BboXLdiQS%2FBV2CZhW3Ek4AiAwBo5lpqFZsYIStp35D%2B1rGNS5dGFi8TSoHvtix6pUNiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyruayJ5vAPPHMxsAKtwDdXmreFP5%2BAztTePN%2FS4%2BegnUHHiEvCW7CDe6KIwKYyKk4E0WYdYPn7M9p40aNDVqiN2hDUqKVWvHvhVU83yX2v2j4H8sxg%2F1reHtPAnSrbRktkj0mUO8DoUiTO%2FH8g5ECwGEtfz3i%2B02wU35XwY5a1iJ8wYLj%2FcmsUsa3mkxu4N8%2FCAYzZND0C6u%2BKBNxP3SF8ZWa4jYxrrApgetwlG%2BRqoGdZ68Sp6mtbI4ZAugiWhKDyOm1CysPjqhGl5iF8ixRTyroFqQADCDQQhCYLVTSgzyALM5Uneuq4jW7Dtaq9yc1cqbFX6VuxORsQQcEJcS3DAFvCNN9sGJTOm4BXud4tiSimIFkCY8fIkMnjmaBioD2aWdspr5NtZCugyYJrX%2Ftx3y1YZZowJrVsFzFBH7I%2BvR5S6x3JiFLBUlEi5gdRB1ihUhq08PTKKWpKlwE%2FDy51bPQaGdsES18eJLxluD07%2FP4nfvJaSMg7Eo6IwGUaT7fQsg5hc%2FFYEVyDIJL8qxrcoa1xKxLscDkE89LLIS6eADtAwzhHQrkiBb61SEMGDYL1HN4GW%2BqG9pBnlGV4SJ%2BMQCZ6VIuxkhlRSLt%2F3FHEPNCVum3McX%2B4CTlrr8LAPIHfkTVxguTsg3GyMw%2BaDUyQY6pgForDqCL89CBT69W47CkEkaqYvUkavFfQg6Y%2B3INrkI9e8F51VYu3kDVS6Rt8XmAYGxNOhXWR9Xna8tQQjTlCJQlvZG%2Fr%2FOX%2FF6fx0XYMZlbFMWDO3C9JRlAch2ORD6WTIXWCXdN3uz2FByKOEnnFk0DwvFMQHguaQ4uQT4I%2BpglKa%2BgfC9Z%2BIUq49wzWpdPOlp6nGi%2F2syfQMchCdrUaeJBaGfuy4L&X-Amz-Signature=36ac81e3ea57205786b95b9d979cfa40a1f4a6609010fc2335e6409970b425a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
