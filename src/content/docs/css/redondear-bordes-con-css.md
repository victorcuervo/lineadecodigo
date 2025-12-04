---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324GB57U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDKscOCRoaN0o%2FmsZWhAc5adbLlQx46M1ivqb3GiOdDzQIhANFjcdz8VpQclvgQLoozH2KjEe7tzwAn8UdKZycAkyE%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxUqQKbxL8AjOEszmwq3AP0OfATI8McbJRSWryoduCmO6JMujCs19XB24A7oOklJyKOtpykPHNLdgXe0z%2FTNFnC%2Bn9zTTTwGrzzigov9wvKy10ZUmjPe6jbt2wXxx3%2BwA2FTLBTtiLcPpWk6JAlHPIVXK8UK6JqzNBXgN2cVJWAAGxMvZ6yrgWy21j3l9Jy4vOsPwCl3heWzHRlj90tnF4V7zpnZOCFCgXbzoeZ%2Bx4P1XlmSpOt5J1HRoekdF4Fqz95i9Dad5uCBC9N1WXm2HlaE5gSWALkdwLWBMb%2FjVv3NKybnyXdnwSEPkNDQBlFj1XpebunRaSskvN4bbVFZmFnzhxI79bUe06Qw8GJTA6d7rqcgTsLGkZf9BDQITJvKM0vIfA4XdiMCy6GEsqdZLM%2B%2BSGCsrlkZK6D0MCMh%2B12MyHC4HwdDnUygRpqgtvZWorYrQcD9r40g7wCPVEo5Sw%2FGErnbP3mnx4Ic%2BeyXsMgl59uS34UZ8iq6XLULD%2FGIPuBsnWOZKE1AVLznSJmKb%2BA8hP3DzPzOIoiweNgXLIg08JKMDxCLaoMe6x12iJhuoUJSAcyEfXm9X8m%2FDN6EWKOG2n2sdRkQ0e1nZ2eILDQey9L3w8PItw66s%2FM%2Bxc710OfFlukdZYNxgGrwjC51MPJBjqkAY60OCzWIZqb7bqNMZPV8rxt3j9hoAmgd1Bd6WScG7gpLwWj%2F2fD%2BA5hqICI9Z1WF9tG7KqXJhQOc3lCd9m42sAwM6xm8SvYyWsoQH3i8ZfMB%2Fvv1RcgOM6Ipz3zAmpAVi79CrlRe99Du9YbOD1%2BhPHTQDTZ3FXOgkyZMSknbTS5CcqJm0xav8GhjNv7F1BD%2BDKeaVB5M06SEqjdgI6i7PSac%2FF%2F&X-Amz-Signature=0883c35e8419ba4a64505cea858299155aced3895fb488ab44ce0733002c476c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324GB57U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDKscOCRoaN0o%2FmsZWhAc5adbLlQx46M1ivqb3GiOdDzQIhANFjcdz8VpQclvgQLoozH2KjEe7tzwAn8UdKZycAkyE%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxUqQKbxL8AjOEszmwq3AP0OfATI8McbJRSWryoduCmO6JMujCs19XB24A7oOklJyKOtpykPHNLdgXe0z%2FTNFnC%2Bn9zTTTwGrzzigov9wvKy10ZUmjPe6jbt2wXxx3%2BwA2FTLBTtiLcPpWk6JAlHPIVXK8UK6JqzNBXgN2cVJWAAGxMvZ6yrgWy21j3l9Jy4vOsPwCl3heWzHRlj90tnF4V7zpnZOCFCgXbzoeZ%2Bx4P1XlmSpOt5J1HRoekdF4Fqz95i9Dad5uCBC9N1WXm2HlaE5gSWALkdwLWBMb%2FjVv3NKybnyXdnwSEPkNDQBlFj1XpebunRaSskvN4bbVFZmFnzhxI79bUe06Qw8GJTA6d7rqcgTsLGkZf9BDQITJvKM0vIfA4XdiMCy6GEsqdZLM%2B%2BSGCsrlkZK6D0MCMh%2B12MyHC4HwdDnUygRpqgtvZWorYrQcD9r40g7wCPVEo5Sw%2FGErnbP3mnx4Ic%2BeyXsMgl59uS34UZ8iq6XLULD%2FGIPuBsnWOZKE1AVLznSJmKb%2BA8hP3DzPzOIoiweNgXLIg08JKMDxCLaoMe6x12iJhuoUJSAcyEfXm9X8m%2FDN6EWKOG2n2sdRkQ0e1nZ2eILDQey9L3w8PItw66s%2FM%2Bxc710OfFlukdZYNxgGrwjC51MPJBjqkAY60OCzWIZqb7bqNMZPV8rxt3j9hoAmgd1Bd6WScG7gpLwWj%2F2fD%2BA5hqICI9Z1WF9tG7KqXJhQOc3lCd9m42sAwM6xm8SvYyWsoQH3i8ZfMB%2Fvv1RcgOM6Ipz3zAmpAVi79CrlRe99Du9YbOD1%2BhPHTQDTZ3FXOgkyZMSknbTS5CcqJm0xav8GhjNv7F1BD%2BDKeaVB5M06SEqjdgI6i7PSac%2FF%2F&X-Amz-Signature=d1f8e2b58305f59f74e28e8dd02950a44f51953283f49556d95c9262a83fe22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
