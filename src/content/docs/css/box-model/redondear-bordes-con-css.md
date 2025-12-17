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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QGIWSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmjkWPZGKfIthEHH4xLx6br2KZKft9gNP35v2TPizH8gIgRJEL1r92i2u23GuXSt0KFGWlxk4HHpUJisBpfZZofZoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO4HsG0w1b%2BFdgr9KSrcAwVJALu610zkRJu6dLMsdyv%2FC%2B2hLDVu0Rd8Ee8X2zSCTiQR3hah6u0Cy5DS%2BUOjpwVn57fIBjeLE59C6FS5lOqeGUSlcIOR5F5oU1v6PitMdPT97Jo8lVJ27EvzIuTKf8j6LnYEWa4LdmquJZxszigc%2FsKmz9FL%2BuoMcVRmHU%2F0aKGLqfrwBzVA9PMW6ZXHRFV3xddb3WFsCoUBfBRnD6pL4Kd7zFxljML3fP4tcASsBsx2nXSB2R0tAPMwRmB3Sr4FNrBiEJTX1JSDMw%2FtXiHt%2BKRCdgOWMVo6WLkc5LedsmvWAVbYqloLEw25nabD2vd46w6J7rwIXl0MGRfiDtICzThJhI%2BtUeizs8YrE0eAk0UXbEH7KlpFL1RCvECevAd%2BGq5gzjFsGas3h%2F9rnyrkjj35fRU2jT4RGiblT1BkQnaUPFKztuArj1VLjsANb4LB2yEeKqt5o3btjSjuFlA1Fz%2BfJo6JfvUKdi7uv8kntGuP8L0Oq8RdCNlVU6TuBvaPm50CurPddTNYlGnnk8db8Fl%2Fxfz%2ByuKn2%2BsYkbFXm5OTe2TIbGaXnpfm4%2FDYctdsHqwsAE61cgTRxw1f1y9JRF8LXONEl9GsLD6d9mXy83tXGgS%2FI7dwQPEvMMPGisoGOqUBCl1iXfnPcr8Tg%2Ft%2Fz2xpaa9qXwRdqLleSczcpwnzPOOV96G7hkmwPlIENhxVp0WiM6lSW4ZVvHqF4lQ3cWghqMtKcIK45cyXDFo9Ftbs%2BW1lrvrFAQyutEvncx7y8JQAeWLvBBbuGC%2FcKzgUPGU%2F858VnKMg1%2FhaLY7xPhIpVx%2BBVODFMmWfDgrSCFDNPKyIxuxtj%2F0NhGDm5xGK7Dwe1N3cBnJf&X-Amz-Signature=856b8afd571f28e00b895fed111f9d31a57985aba9d6b3710c9ad76355a83203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QGIWSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmjkWPZGKfIthEHH4xLx6br2KZKft9gNP35v2TPizH8gIgRJEL1r92i2u23GuXSt0KFGWlxk4HHpUJisBpfZZofZoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO4HsG0w1b%2BFdgr9KSrcAwVJALu610zkRJu6dLMsdyv%2FC%2B2hLDVu0Rd8Ee8X2zSCTiQR3hah6u0Cy5DS%2BUOjpwVn57fIBjeLE59C6FS5lOqeGUSlcIOR5F5oU1v6PitMdPT97Jo8lVJ27EvzIuTKf8j6LnYEWa4LdmquJZxszigc%2FsKmz9FL%2BuoMcVRmHU%2F0aKGLqfrwBzVA9PMW6ZXHRFV3xddb3WFsCoUBfBRnD6pL4Kd7zFxljML3fP4tcASsBsx2nXSB2R0tAPMwRmB3Sr4FNrBiEJTX1JSDMw%2FtXiHt%2BKRCdgOWMVo6WLkc5LedsmvWAVbYqloLEw25nabD2vd46w6J7rwIXl0MGRfiDtICzThJhI%2BtUeizs8YrE0eAk0UXbEH7KlpFL1RCvECevAd%2BGq5gzjFsGas3h%2F9rnyrkjj35fRU2jT4RGiblT1BkQnaUPFKztuArj1VLjsANb4LB2yEeKqt5o3btjSjuFlA1Fz%2BfJo6JfvUKdi7uv8kntGuP8L0Oq8RdCNlVU6TuBvaPm50CurPddTNYlGnnk8db8Fl%2Fxfz%2ByuKn2%2BsYkbFXm5OTe2TIbGaXnpfm4%2FDYctdsHqwsAE61cgTRxw1f1y9JRF8LXONEl9GsLD6d9mXy83tXGgS%2FI7dwQPEvMMPGisoGOqUBCl1iXfnPcr8Tg%2Ft%2Fz2xpaa9qXwRdqLleSczcpwnzPOOV96G7hkmwPlIENhxVp0WiM6lSW4ZVvHqF4lQ3cWghqMtKcIK45cyXDFo9Ftbs%2BW1lrvrFAQyutEvncx7y8JQAeWLvBBbuGC%2FcKzgUPGU%2F858VnKMg1%2FhaLY7xPhIpVx%2BBVODFMmWfDgrSCFDNPKyIxuxtj%2F0NhGDm5xGK7Dwe1N3cBnJf&X-Amz-Signature=fd210dcb7941bb4d6888d13d90e72d6fc6b3343679a08f9a9fa8e8b322da2b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
