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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSO2WDKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAvDrCJFCGwLgL6Yxf9wNPrhdrVWkzvj2JyoV7wRF1gIhAPInHUIQ9hrkLovyff0dykSkQ8uZQVZlvW4YmW3EzSIbKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcR6DvIWHS4nPjhPcq3ANvvwnJSWY%2B54H8nWbmQJN2dld8zPSv3EBc24Zb38ffjbcYhIUkOoZxLI7%2BlDijhbgLG%2BXOc7pOajMyGUozGuwC8yuQIqRA9P3FZzcwNRtsU9fXfmjisIuUzJinrlP6VJXQPDNJLA1wKfnGsc%2Bg9DFOufOCJd%2BGOvudKV1wlHj5ipmpdPDMZbo7UkInaYgJVJ0E4Dhc%2FpaUahLNbGmW5g9FpxcyEbSa138cAwAlvPZ8BIr1dqMPfxeDHbsyRfMpw9zjWyrzSWhq%2FaZHk72Io2ZGuD6%2FPlWX2AMI9fD4tQs1r0IuXN%2BDTgiBQaEowwH5PalVraWHY5XNSCvGxLnESxfXjDYtHHdXdXiO7qwK8JZShBAzNRgsTUDJDMuybYTknifTRs2%2BZTMNVWp7ZcvVrMkgY6zOv3r8U%2Bwvx8RFLoEgDYNTBgx%2BUXh8wEUFQk%2Fc8MjaWIMT3H%2B99cmHRiwRK9eLbPI3Qz%2FQ9YAjPi%2BdcRysMF%2FlXTULN5mtNoSj9X0D2TqB1DKbwj%2ByO4j5cD4DCfxBI%2FBUcKT4bUgk9Y1dhX%2FQ0YJqx9Mq7Lea3v9UAQP8PAOXe3AErNAbWoZxQeMx93p1e8hLEqCzkdHGs2J%2Br7ltbMHeLwYgSUUD3i7ntDCMotjJBjqkAfPKSjgImLQL3LRGh3X2LQdY4RNzHTYZ77ix5Dj8hpr6hikMbuqUubUOmbddOOoeRYhFU12qce4e3mJevTMuiUjiI5w%2FFIWcQ88SVo75pojtS%2FHw%2FwlEUiMU53y0p1m4n8aiEOhYvjhqzA2TDNIL0UxJGOTR3cSkuL7hlAaf6bCkpXaJ7sOJuQzmbVQmsC3ebiA38I23KJqwX6HMzIPvAERGqyDO&X-Amz-Signature=cbb912d11e17129d578ce81b77b63258c32a7f421bb2dcc349b1f22fc9f1b51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSO2WDKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAvDrCJFCGwLgL6Yxf9wNPrhdrVWkzvj2JyoV7wRF1gIhAPInHUIQ9hrkLovyff0dykSkQ8uZQVZlvW4YmW3EzSIbKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcR6DvIWHS4nPjhPcq3ANvvwnJSWY%2B54H8nWbmQJN2dld8zPSv3EBc24Zb38ffjbcYhIUkOoZxLI7%2BlDijhbgLG%2BXOc7pOajMyGUozGuwC8yuQIqRA9P3FZzcwNRtsU9fXfmjisIuUzJinrlP6VJXQPDNJLA1wKfnGsc%2Bg9DFOufOCJd%2BGOvudKV1wlHj5ipmpdPDMZbo7UkInaYgJVJ0E4Dhc%2FpaUahLNbGmW5g9FpxcyEbSa138cAwAlvPZ8BIr1dqMPfxeDHbsyRfMpw9zjWyrzSWhq%2FaZHk72Io2ZGuD6%2FPlWX2AMI9fD4tQs1r0IuXN%2BDTgiBQaEowwH5PalVraWHY5XNSCvGxLnESxfXjDYtHHdXdXiO7qwK8JZShBAzNRgsTUDJDMuybYTknifTRs2%2BZTMNVWp7ZcvVrMkgY6zOv3r8U%2Bwvx8RFLoEgDYNTBgx%2BUXh8wEUFQk%2Fc8MjaWIMT3H%2B99cmHRiwRK9eLbPI3Qz%2FQ9YAjPi%2BdcRysMF%2FlXTULN5mtNoSj9X0D2TqB1DKbwj%2ByO4j5cD4DCfxBI%2FBUcKT4bUgk9Y1dhX%2FQ0YJqx9Mq7Lea3v9UAQP8PAOXe3AErNAbWoZxQeMx93p1e8hLEqCzkdHGs2J%2Br7ltbMHeLwYgSUUD3i7ntDCMotjJBjqkAfPKSjgImLQL3LRGh3X2LQdY4RNzHTYZ77ix5Dj8hpr6hikMbuqUubUOmbddOOoeRYhFU12qce4e3mJevTMuiUjiI5w%2FFIWcQ88SVo75pojtS%2FHw%2FwlEUiMU53y0p1m4n8aiEOhYvjhqzA2TDNIL0UxJGOTR3cSkuL7hlAaf6bCkpXaJ7sOJuQzmbVQmsC3ebiA38I23KJqwX6HMzIPvAERGqyDO&X-Amz-Signature=75fd8b5e7b9e825a5eb4481467280787204e76114b9d116137e6bb50f316d228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
