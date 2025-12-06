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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBCIONX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh%2FPxeK%2Bxi2rjWc42Z1rqFEqUWoJecpJWozlbhwN0qJAiEAljxBUupG2z9NCqrmndQowYx4fnGNVrMQDFy%2F6yKDMMsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCwElbQLjFLNOk%2BCwSrcA7HDMLsa0XyzjKgWGqzXg1mSSG8NideBgeO3ZCMM5qZ6qjVx7pAUuiCUNchDmpO9S3%2BrL3fC459N7%2FBnzHbkllrprsV4ZfoxjGc2qQKlEbBkZdkNJDErYJtOf5qr549zuRcj23NHIGUitPmxucK5jJVu6WiwMjPPnIe%2FK%2FAJ0guu1oIaFMrkEc%2Ff%2Fk%2F%2F%2Bjd6E5VVph1AA5uOk7T%2F28KDf3JLm1gLzWqCxe4rTUj%2BNy6takiM3AEoKZJjjX8mQAYXDOYCw5KJcWBRZEEiEqPT%2B6quPdlPitSjCv8KSiZ4qiG7mybg9jSwvoSpejU2w37eVv%2BWp3U%2FmeUQbEq4Y7hWx2rqaG6qq4znflVOTWyI18EkOkYuTP%2BRT%2BSpka5915vdJL8mj0qr85fT28WH0gedqVrnWHbdszFv6reMH1LHvcTkvd3WKynDW0XUbAAG0AZg0Z3MX0ZEV6ZP0F4AHZTaU9Gp%2BAlqKBtQie4KEUDVBUxSLIYLBIywJlrQaRUDg%2Bvnv80aD2wW2mc%2Fuorbct3V5rPCzA%2B6JNBWCKw3i0aZthsPZ%2BMT%2BolNPJE0qE1zwvSohkI9tcJkZMLHphb3H3Xl2GY1MKKrTzLADl5P1Z%2FMzmMWm2O%2B%2FwLeCbxdwZWTMLOm0MkGOqUBFeWrAy%2Bgbux%2F%2BM0vE9%2FWbvSvc8mNxYqn3nez%2FhpYCCQTSzYvhxKI0WyezRA9tAkNd1AtjIqSjhbo3IKdZRFeUfPCTqO4uzoWV03K06D%2BYz5WooZQi3qtBHNRjVPZz%2Fw9d28Hj%2F9gKAsIFpDwA8Cg60vVEzMKqCCOkbXFoU7rGWYRUQ0MhBL6liazoZjlSG6tVqj7VhNcha%2FLZpDwlxDFh2OCD52R&X-Amz-Signature=f0018b43242ae8f7876ec134f521359ef8bd159114b24d0ef965ea33a83e3f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBCIONX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh%2FPxeK%2Bxi2rjWc42Z1rqFEqUWoJecpJWozlbhwN0qJAiEAljxBUupG2z9NCqrmndQowYx4fnGNVrMQDFy%2F6yKDMMsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCwElbQLjFLNOk%2BCwSrcA7HDMLsa0XyzjKgWGqzXg1mSSG8NideBgeO3ZCMM5qZ6qjVx7pAUuiCUNchDmpO9S3%2BrL3fC459N7%2FBnzHbkllrprsV4ZfoxjGc2qQKlEbBkZdkNJDErYJtOf5qr549zuRcj23NHIGUitPmxucK5jJVu6WiwMjPPnIe%2FK%2FAJ0guu1oIaFMrkEc%2Ff%2Fk%2F%2F%2Bjd6E5VVph1AA5uOk7T%2F28KDf3JLm1gLzWqCxe4rTUj%2BNy6takiM3AEoKZJjjX8mQAYXDOYCw5KJcWBRZEEiEqPT%2B6quPdlPitSjCv8KSiZ4qiG7mybg9jSwvoSpejU2w37eVv%2BWp3U%2FmeUQbEq4Y7hWx2rqaG6qq4znflVOTWyI18EkOkYuTP%2BRT%2BSpka5915vdJL8mj0qr85fT28WH0gedqVrnWHbdszFv6reMH1LHvcTkvd3WKynDW0XUbAAG0AZg0Z3MX0ZEV6ZP0F4AHZTaU9Gp%2BAlqKBtQie4KEUDVBUxSLIYLBIywJlrQaRUDg%2Bvnv80aD2wW2mc%2Fuorbct3V5rPCzA%2B6JNBWCKw3i0aZthsPZ%2BMT%2BolNPJE0qE1zwvSohkI9tcJkZMLHphb3H3Xl2GY1MKKrTzLADl5P1Z%2FMzmMWm2O%2B%2FwLeCbxdwZWTMLOm0MkGOqUBFeWrAy%2Bgbux%2F%2BM0vE9%2FWbvSvc8mNxYqn3nez%2FhpYCCQTSzYvhxKI0WyezRA9tAkNd1AtjIqSjhbo3IKdZRFeUfPCTqO4uzoWV03K06D%2BYz5WooZQi3qtBHNRjVPZz%2Fw9d28Hj%2F9gKAsIFpDwA8Cg60vVEzMKqCCOkbXFoU7rGWYRUQ0MhBL6liazoZjlSG6tVqj7VhNcha%2FLZpDwlxDFh2OCD52R&X-Amz-Signature=5f72251c960abdee1690b954ddd11ca81059d591d55aa4db0eacae475b763183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
