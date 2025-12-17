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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7AUIZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDkpNu%2F3M8O1R2nB2kvDbx76KiLlIM3GBqJV%2BxtrZcQAiB%2FTGgLTIQfCo5GQ7P8a%2FcAkEaRrh7eWVhJdbPd1Ix4UCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMFIVf3091NrKi%2Bwm%2BKtwDWdt%2Blu3ey4QSS0G%2FXKTX0KsFcLFbkN4lXtU5xLqM3Fs8dvbOGyg36QO6SqTYY4ryib6bkjgv2QKp%2B7PDJLhgSPapms63pSqS3kb8tbpyoVvgWDt04iAkRoycXvWeim%2BmPCeJ9iW9L%2F7FQusgiA6H7cdFNlgozNDvw6p60ICsYC7T2a2E9lCW2LSHzy%2BvO6RcLh8tveSGmpOVPyQ9xq2oXiJFYc9VluIwQAdoEX8E4ZJRu%2B%2B%2FTBgSYk7nl4T7QMw6bflzmCkqkH%2FQvNjdGqtBTEtpw2rsP2zBIkkJ%2FJLlqCX2TkZTjAxsFqvxb4mSIeJPo5vMVi4jh%2FSs9UmfReW8HDZgDqfCcegrcK1eGYwfMKqtcsfpHnWEKrhcNGvGpw682d3nPtxNofTp2lFs4CcRpko1Ct4AD3ssTXpRCTdWi1NnrVi1SO9ScpJkrnox%2F8J9iUxt7XTZ74EBagqcdIphzIjCYTY4CS7Kl0IegzZVuQWywK9AP8DI%2FrEEkmpBYr9AJckkA3IPWjle82z09P%2F2GcPGJ0LEx88x8xmGpVDcDa%2BwHjus6GUYkQrBy6QQp55pDtJJyYq63miHv7NonKuRya6z3pzxRaHYuH6V3tQWuIFLBeasFlPC6JuFnoow2PuHygY6pgHcRmmD67rydnSWhgTbrjkWoheYbqixb609khtSVWQNkxuyaSCAMTJ5lM0cvNgT8B5gYQ2zkURfEH58cWSSQJyB4INucYA0gx0piEeZ%2F2YvpgoPoT1cXVu1tofR6A79PsPCtBl8RYK8%2Bdj5VnlDiSbc6inWQ79hfTkD%2FbRIjC%2BRXMfgm6lE8ymdIhb1%2Bq04rrX93y1Qo7G87bYs2cGnsEJ7nKJTZuYn&X-Amz-Signature=cf90c2a1ae5b68770ca4d4096b8f8ce8365fa38cba2bf57ff0337122cd9b7d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7AUIZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDkpNu%2F3M8O1R2nB2kvDbx76KiLlIM3GBqJV%2BxtrZcQAiB%2FTGgLTIQfCo5GQ7P8a%2FcAkEaRrh7eWVhJdbPd1Ix4UCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMFIVf3091NrKi%2Bwm%2BKtwDWdt%2Blu3ey4QSS0G%2FXKTX0KsFcLFbkN4lXtU5xLqM3Fs8dvbOGyg36QO6SqTYY4ryib6bkjgv2QKp%2B7PDJLhgSPapms63pSqS3kb8tbpyoVvgWDt04iAkRoycXvWeim%2BmPCeJ9iW9L%2F7FQusgiA6H7cdFNlgozNDvw6p60ICsYC7T2a2E9lCW2LSHzy%2BvO6RcLh8tveSGmpOVPyQ9xq2oXiJFYc9VluIwQAdoEX8E4ZJRu%2B%2B%2FTBgSYk7nl4T7QMw6bflzmCkqkH%2FQvNjdGqtBTEtpw2rsP2zBIkkJ%2FJLlqCX2TkZTjAxsFqvxb4mSIeJPo5vMVi4jh%2FSs9UmfReW8HDZgDqfCcegrcK1eGYwfMKqtcsfpHnWEKrhcNGvGpw682d3nPtxNofTp2lFs4CcRpko1Ct4AD3ssTXpRCTdWi1NnrVi1SO9ScpJkrnox%2F8J9iUxt7XTZ74EBagqcdIphzIjCYTY4CS7Kl0IegzZVuQWywK9AP8DI%2FrEEkmpBYr9AJckkA3IPWjle82z09P%2F2GcPGJ0LEx88x8xmGpVDcDa%2BwHjus6GUYkQrBy6QQp55pDtJJyYq63miHv7NonKuRya6z3pzxRaHYuH6V3tQWuIFLBeasFlPC6JuFnoow2PuHygY6pgHcRmmD67rydnSWhgTbrjkWoheYbqixb609khtSVWQNkxuyaSCAMTJ5lM0cvNgT8B5gYQ2zkURfEH58cWSSQJyB4INucYA0gx0piEeZ%2F2YvpgoPoT1cXVu1tofR6A79PsPCtBl8RYK8%2Bdj5VnlDiSbc6inWQ79hfTkD%2FbRIjC%2BRXMfgm6lE8ymdIhb1%2Bq04rrX93y1Qo7G87bYs2cGnsEJ7nKJTZuYn&X-Amz-Signature=b39a13228d9e6036b92f140d295bf048630148997a0780b7e54be17620ee2407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
