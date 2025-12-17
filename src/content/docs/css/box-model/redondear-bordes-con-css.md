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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGUIS6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn%2F4UWH%2F0DJUE6Z0SNHy2Ek4wyVnjCrsM8GJLE4s8ghAiBYUsuktDBhR5Q0%2FHcClFmMN0qh44yXjCvdYTv%2BItsNUir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM1GPSei7jaA%2FyKjgNKtwDL4z8e3HzoRDYiH2XI0lPQ8rS41KiXJR0ALsXwWgZt6ZRoAEjHOTY70euEgcl7Z1RRWVqe9Veraopks1O%2BAz2hudaKoZR4oMuoY8jHxQ7sMkD%2FmsIuU5e9e%2Bd%2Bcjs9P7AtSI6kjtUfLc53MoT35cMdDb9kmZg%2BDxOxL4O2YbssVLQ%2BLN3Ivq6vaDxCb%2BGYqLVD%2BWnMmqppqd28n5%2FZl7iqtdD0uhfCaexhsZ9mCRbjD2Ow8eTqNtGQr%2BO00BNtwaoLUsQY1ImrbHaWECufNUgGXApwsBU8wkNcWINk8c3E6L3s5jGc3g9RGWiISBJ074OBc02qqiy%2Fejq%2B5fhFLx3foyUkkjpSkPlYY%2FzMD6yVIk2jPmZAW5NnT3VewlBlKLaHGvfYY2gaMoX8zy%2F46GTNhCzK1FjnD3DmjvOk7wkd%2FUtCcSqAaqTC47%2FlAide2zPELjwlVrnpXy%2F27n916BigsaYr4sFaasDu7m%2FXl8IXgL1X7KzVMbbN%2FJzLGM9qEm36yhTy8JM1hkFWAqWeUYdpxv%2BMOgwKztEW%2F59J0iCXYMlIRDMWbAmXaRh6uTL5WxGC9J81oyt9enuEM%2FqJ9bW1PCvgz95%2BuEgykkNz5nl46m6PK2ey1TJdTNHoZUwjPCJygY6pgGDL3L0sAv1TTu211HGsqfcmZiDVyNuqgjOFD8Np9nm6%2B6QfUrhQdsplUQTTCz6dUu%2BVr8%2BebzEMYeZAvtyHBmvHmucKqcbbUXpwB%2Bm0aWvUoWmYF%2FJCTj4hD%2BQBhJ0J55PA3Rzm91KSyMtXLQfWMyuR16IBid%2FzVtEkpSZz0oFvNwInDZTCIWzZ22yFAADq9BUkMyWad%2BJHVfTVNjmK3PeQIWHdRAG&X-Amz-Signature=25c18bcbd251b2ab030be92020f5ae80a4e4b48d7a77124aea92f8966e1089f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGUIS6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn%2F4UWH%2F0DJUE6Z0SNHy2Ek4wyVnjCrsM8GJLE4s8ghAiBYUsuktDBhR5Q0%2FHcClFmMN0qh44yXjCvdYTv%2BItsNUir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM1GPSei7jaA%2FyKjgNKtwDL4z8e3HzoRDYiH2XI0lPQ8rS41KiXJR0ALsXwWgZt6ZRoAEjHOTY70euEgcl7Z1RRWVqe9Veraopks1O%2BAz2hudaKoZR4oMuoY8jHxQ7sMkD%2FmsIuU5e9e%2Bd%2Bcjs9P7AtSI6kjtUfLc53MoT35cMdDb9kmZg%2BDxOxL4O2YbssVLQ%2BLN3Ivq6vaDxCb%2BGYqLVD%2BWnMmqppqd28n5%2FZl7iqtdD0uhfCaexhsZ9mCRbjD2Ow8eTqNtGQr%2BO00BNtwaoLUsQY1ImrbHaWECufNUgGXApwsBU8wkNcWINk8c3E6L3s5jGc3g9RGWiISBJ074OBc02qqiy%2Fejq%2B5fhFLx3foyUkkjpSkPlYY%2FzMD6yVIk2jPmZAW5NnT3VewlBlKLaHGvfYY2gaMoX8zy%2F46GTNhCzK1FjnD3DmjvOk7wkd%2FUtCcSqAaqTC47%2FlAide2zPELjwlVrnpXy%2F27n916BigsaYr4sFaasDu7m%2FXl8IXgL1X7KzVMbbN%2FJzLGM9qEm36yhTy8JM1hkFWAqWeUYdpxv%2BMOgwKztEW%2F59J0iCXYMlIRDMWbAmXaRh6uTL5WxGC9J81oyt9enuEM%2FqJ9bW1PCvgz95%2BuEgykkNz5nl46m6PK2ey1TJdTNHoZUwjPCJygY6pgGDL3L0sAv1TTu211HGsqfcmZiDVyNuqgjOFD8Np9nm6%2B6QfUrhQdsplUQTTCz6dUu%2BVr8%2BebzEMYeZAvtyHBmvHmucKqcbbUXpwB%2Bm0aWvUoWmYF%2FJCTj4hD%2BQBhJ0J55PA3Rzm91KSyMtXLQfWMyuR16IBid%2FzVtEkpSZz0oFvNwInDZTCIWzZ22yFAADq9BUkMyWad%2BJHVfTVNjmK3PeQIWHdRAG&X-Amz-Signature=c9819abdd2f04a98701f46b8e7273f9edf6f6ee56df1ba8abe4583365ae1e5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
