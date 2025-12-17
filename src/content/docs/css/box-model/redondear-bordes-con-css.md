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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ML44EI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ2uE%2F03wKE%2BQRl0232tKCLHJrCPcX3%2BDGG%2Bnn9Muf4QIhANYcmQDAnyF5NwKTOgThlGkZtbDxnnuE20CwjD0F7fZ%2BKv8DCHQQABoMNjM3NDIzMTgzODA1Igx6Bu3V%2FaIzjUd1q34q3AMTLJJNQHhos4iiM%2BHoitG7nRDqU4Czk%2BwW2110NfMQZMjpuGVg2nO2f8E%2FvFpX0nek5Exuv9K3Ov8KRII6CG%2FUjHtzJtvTr4%2BWIb56VIXN7WYz9meqh8AD4QEKzsIMe%2Fk8dgp0g5J8m3Nd2cproenp8s8e2TXbcDTKAGS7yy2jmQUa4747NJA1eJfQAyRL3%2FzmlkJup3mCLjI236hnLW%2FmioysIiUmqWJL7gC1WIaZAUuUVi9kigpZIucdTB5bHgX17ifbqYHupaxE66XpMx0wO1%2Fz8gS%2FyCD9LTqmEazp%2FFjp3q3kKikt3QwXGu0oygPF8q0PWXdriFynNOmOI1qUIkLOQ%2FsHfQl4XIZGzEOKSNZx%2B%2FRjQSaHt3o5QOCLYVbVQ4yT%2FY5GfLhlPNvJsf9PhEasXJbr4HsP%2BHZauwMG308DN4TtngnODcVHtJvgpVCr5jSfkS6rPkdTd06zBIPoPF4djOy6nbzyC%2F6n76LLajaEZhxVLoyURsnvJg7QJyd8vH23KHjHI74FDLiWsItUapU7Q5srC2ImrIm8IAyiCK%2FcW8mu8TI4XjPwok9%2Fr1A0%2F46fvvCvFItHzXulqhr4P3CGyPFD7Bqx2h5uAhtdoD9TCbNY0btuCVtwKDCLs4jKBjqkAekk1XkF9B1orcddGRUD7M0xf2Und8c%2FqLJQnmOPihTBjzAflAvwRUCOwknRyWC98fk9doF3mR3ZqY7Ivdv5uyifOMVKmh7cNgHa8VBbQ8TXRV7aVCPYtCJGoU7s%2F1R2yDJe4I4KJDuNcSVw%2B5D%2BscbM7dVK2riZVA5gCNAgXJJxFSm9nETbnE6%2FMZ9FqOTl1xgt5m9AKp5v%2FEAGBW0hma5qsHVJ&X-Amz-Signature=03f166f5766a9b7a32a6969b326fa31c96291a6a3f462be5ebccb442dcbb2f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ML44EI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ2uE%2F03wKE%2BQRl0232tKCLHJrCPcX3%2BDGG%2Bnn9Muf4QIhANYcmQDAnyF5NwKTOgThlGkZtbDxnnuE20CwjD0F7fZ%2BKv8DCHQQABoMNjM3NDIzMTgzODA1Igx6Bu3V%2FaIzjUd1q34q3AMTLJJNQHhos4iiM%2BHoitG7nRDqU4Czk%2BwW2110NfMQZMjpuGVg2nO2f8E%2FvFpX0nek5Exuv9K3Ov8KRII6CG%2FUjHtzJtvTr4%2BWIb56VIXN7WYz9meqh8AD4QEKzsIMe%2Fk8dgp0g5J8m3Nd2cproenp8s8e2TXbcDTKAGS7yy2jmQUa4747NJA1eJfQAyRL3%2FzmlkJup3mCLjI236hnLW%2FmioysIiUmqWJL7gC1WIaZAUuUVi9kigpZIucdTB5bHgX17ifbqYHupaxE66XpMx0wO1%2Fz8gS%2FyCD9LTqmEazp%2FFjp3q3kKikt3QwXGu0oygPF8q0PWXdriFynNOmOI1qUIkLOQ%2FsHfQl4XIZGzEOKSNZx%2B%2FRjQSaHt3o5QOCLYVbVQ4yT%2FY5GfLhlPNvJsf9PhEasXJbr4HsP%2BHZauwMG308DN4TtngnODcVHtJvgpVCr5jSfkS6rPkdTd06zBIPoPF4djOy6nbzyC%2F6n76LLajaEZhxVLoyURsnvJg7QJyd8vH23KHjHI74FDLiWsItUapU7Q5srC2ImrIm8IAyiCK%2FcW8mu8TI4XjPwok9%2Fr1A0%2F46fvvCvFItHzXulqhr4P3CGyPFD7Bqx2h5uAhtdoD9TCbNY0btuCVtwKDCLs4jKBjqkAekk1XkF9B1orcddGRUD7M0xf2Und8c%2FqLJQnmOPihTBjzAflAvwRUCOwknRyWC98fk9doF3mR3ZqY7Ivdv5uyifOMVKmh7cNgHa8VBbQ8TXRV7aVCPYtCJGoU7s%2F1R2yDJe4I4KJDuNcSVw%2B5D%2BscbM7dVK2riZVA5gCNAgXJJxFSm9nETbnE6%2FMZ9FqOTl1xgt5m9AKp5v%2FEAGBW0hma5qsHVJ&X-Amz-Signature=2e420e737803404a09df36d615d311329cd505001019fd2e3c78ab3526ccc9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
