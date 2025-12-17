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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457K2YCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3OOs2%2BSQqnIjzESiDMU1EgtXxIbQ%2FOeJZbK1nxaCptQIhAJK4VCGy6prLWzHI6e%2BWnZnfoyyrD6PsrJz98mXgEDzEKv8DCH4QABoMNjM3NDIzMTgzODA1IgwYs1cOYBrEdHfiZqMq3ANUyuqTJHXnsMSDStkJe8uWF4ekSt6anU4BMxLN6qpCfPpCrHd399AlPJDQ5XSj5hiLUizsbTwr%2BaNUE3QSyaQJPSrMmiw7aqoxY9HwGSTFcMfh%2FGsI4NUEGI%2FBqVv3upizPbe1TLGCB5WvoYJWkbllZ5a9nX%2BBOE1tcpt%2Bv3Y79viZV1bexS2m4aGXfnGa7wleqfG%2FG8qg2iTGTm3Ta1u1ko0FWpzWCu2IlE9lM0IuMw8gxVnYT6w%2BK%2BgTFXFhmbeVaB16eflCWO7xVH43RX976w70zvxFbZehUgOoaKQU9HmS7hCnsRUPZR%2BQtuuuW88%2BKz3mndyAv5SZMsm50iUHCz4qMf%2Facr8NhagzTTPUB2qos0swffcFK89tRS0mESdXjvCMMg6ei0zlP3w2CavomVeqT%2B%2FMgYXs5qAPGbswD9NgEzU9mK0umdC3meTGCaLXQq85qTJi9th9Wfz%2FBRdib61hz7R0Y0CZHNGihfLv1WQPNvS872nwpx%2BbfxSEfnoxZB0sHO7IiH%2B3ISKhKUfAN8RdJUijCjZ1el7NCwEi%2BFcFWnqzZM4jZhr%2F163H6htLOmpb0AG6N8D1xPESGkpLSr9ZWM6RvYdO%2BEQKeGOS2hABrj9CDxZD6ruxPjDWxorKBjqkAVIPKuNiHDek4a%2BHFHCSZxARtMKH73Y0BFuHwQXaA8Xa%2BhKXVjHQPwIsF%2BL5T%2B14tyYreLduhxl2NiD%2BCzB5wWIc87s3OhSjBadbnt%2FJzH%2B7m10EnmbDNUasZTNIfNIN8yQ8V1chR9edP1Nt1DUjNyUWWxIOoLmZne4gvSUk%2FhTCu3fh2t8CGQC%2FT09vOzqlJn6%2Byy4TvfC4HILJzaSAYtJTRqaI&X-Amz-Signature=f5c929edcb34bdd72da109b08f3fa70b52f7d07c36a24b67a52c2bde119d0b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457K2YCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3OOs2%2BSQqnIjzESiDMU1EgtXxIbQ%2FOeJZbK1nxaCptQIhAJK4VCGy6prLWzHI6e%2BWnZnfoyyrD6PsrJz98mXgEDzEKv8DCH4QABoMNjM3NDIzMTgzODA1IgwYs1cOYBrEdHfiZqMq3ANUyuqTJHXnsMSDStkJe8uWF4ekSt6anU4BMxLN6qpCfPpCrHd399AlPJDQ5XSj5hiLUizsbTwr%2BaNUE3QSyaQJPSrMmiw7aqoxY9HwGSTFcMfh%2FGsI4NUEGI%2FBqVv3upizPbe1TLGCB5WvoYJWkbllZ5a9nX%2BBOE1tcpt%2Bv3Y79viZV1bexS2m4aGXfnGa7wleqfG%2FG8qg2iTGTm3Ta1u1ko0FWpzWCu2IlE9lM0IuMw8gxVnYT6w%2BK%2BgTFXFhmbeVaB16eflCWO7xVH43RX976w70zvxFbZehUgOoaKQU9HmS7hCnsRUPZR%2BQtuuuW88%2BKz3mndyAv5SZMsm50iUHCz4qMf%2Facr8NhagzTTPUB2qos0swffcFK89tRS0mESdXjvCMMg6ei0zlP3w2CavomVeqT%2B%2FMgYXs5qAPGbswD9NgEzU9mK0umdC3meTGCaLXQq85qTJi9th9Wfz%2FBRdib61hz7R0Y0CZHNGihfLv1WQPNvS872nwpx%2BbfxSEfnoxZB0sHO7IiH%2B3ISKhKUfAN8RdJUijCjZ1el7NCwEi%2BFcFWnqzZM4jZhr%2F163H6htLOmpb0AG6N8D1xPESGkpLSr9ZWM6RvYdO%2BEQKeGOS2hABrj9CDxZD6ruxPjDWxorKBjqkAVIPKuNiHDek4a%2BHFHCSZxARtMKH73Y0BFuHwQXaA8Xa%2BhKXVjHQPwIsF%2BL5T%2B14tyYreLduhxl2NiD%2BCzB5wWIc87s3OhSjBadbnt%2FJzH%2B7m10EnmbDNUasZTNIfNIN8yQ8V1chR9edP1Nt1DUjNyUWWxIOoLmZne4gvSUk%2FhTCu3fh2t8CGQC%2FT09vOzqlJn6%2Byy4TvfC4HILJzaSAYtJTRqaI&X-Amz-Signature=e67edcb625388b9acaa793eaf0fc0c5a5d621cf8dc7cb56b8f738fd4f85c05d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
