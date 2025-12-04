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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4IKB2N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAiJAK6lt95r%2FFsvpyKAQtsQeoVe1CAmlbwnwnl3zzdlAiA4JxJrLSKV%2FM0Ug6ARllitM%2F41IP6TR4wOxwoWAmBVRir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfSv8XsXNnWvS5jVWKtwDHlsLedcErGQkizGKAG53AGrAeOLnpDmVgkiuTRgVx7Qb%2FIz5jylEpZRb8f4qVuY5mpM4e4E3wssok6hrpfHYQgdPxMASJd2kayAeESpEWk3Q168I5hnxnzrV6WFdD6s%2FeFUK8KNdQRqDlgx%2FgmP70DO%2FkBZOmg%2Fspve8%2BZoHOUzGRkfdX%2BcPiFRdlxLFVr3yQOf7ifLqaeorMKWY6hhOc%2B6JpTcQ5WzZkTmkW408%2BzO3%2B2G38DaF9%2BlX5I%2BnCOPIhfDbsEG77%2FFgIcO3pKjP2IRLGLV5PoPz1ZzzgiG1PgOONZsYs0nOxVBpLiduvbuQw0sXDjQbbz3ewrAf5KSsNjSgvitrWezZbYBaP74uQyNc5Xsk51YxN6bOu6zWgKzNgQ565L5syLimwb2txCpvqwjlfyTxuui8Ht6K79d%2BfiOqxqUTcKw57GKVEcCKyFZcafxWSk0JsOSHF1Q281KKbGAEWTRfeHrMSeyTX56LItTfAZSMsLfSAGi6K7ac%2Fy87OL52n%2F4BN9fJPnx5iv8ZB%2FyYPY9B5YNt6amYLaadWE5BqoraJSkqmJbbP3jFe8RXPuD%2Fc71PzZN%2FvnK78lZJRW7tXVil%2F9Q5XyUo6rjz4%2B%2FSJHZ5yI37t1PwpRwwxr7GyQY6pgGT5a%2FYD2OqfSIEYQJrm9ADxl%2FqXhi8bnDiHhb1qIKd%2FvMOInW9WnF0z9khemKg3xL50oylzorQNCdivJETf2XAgXwWZxndsMr5e8IZcNoHoYYAsuHo5eeqyqA5DFlQCbNiaU9T4RoLFI8eOpajS9ZUVQjxKKr9G4bxjv6G68hC09tGcdMGASGutDFWw%2FFqFWzGhecXFWpBCrxcrUKj91B5%2F5z0T6cP&X-Amz-Signature=f33c33e01aeeb37ce4eadae286739f6ba46c3f3e93e06edec019767c7dff6325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4IKB2N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAiJAK6lt95r%2FFsvpyKAQtsQeoVe1CAmlbwnwnl3zzdlAiA4JxJrLSKV%2FM0Ug6ARllitM%2F41IP6TR4wOxwoWAmBVRir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfSv8XsXNnWvS5jVWKtwDHlsLedcErGQkizGKAG53AGrAeOLnpDmVgkiuTRgVx7Qb%2FIz5jylEpZRb8f4qVuY5mpM4e4E3wssok6hrpfHYQgdPxMASJd2kayAeESpEWk3Q168I5hnxnzrV6WFdD6s%2FeFUK8KNdQRqDlgx%2FgmP70DO%2FkBZOmg%2Fspve8%2BZoHOUzGRkfdX%2BcPiFRdlxLFVr3yQOf7ifLqaeorMKWY6hhOc%2B6JpTcQ5WzZkTmkW408%2BzO3%2B2G38DaF9%2BlX5I%2BnCOPIhfDbsEG77%2FFgIcO3pKjP2IRLGLV5PoPz1ZzzgiG1PgOONZsYs0nOxVBpLiduvbuQw0sXDjQbbz3ewrAf5KSsNjSgvitrWezZbYBaP74uQyNc5Xsk51YxN6bOu6zWgKzNgQ565L5syLimwb2txCpvqwjlfyTxuui8Ht6K79d%2BfiOqxqUTcKw57GKVEcCKyFZcafxWSk0JsOSHF1Q281KKbGAEWTRfeHrMSeyTX56LItTfAZSMsLfSAGi6K7ac%2Fy87OL52n%2F4BN9fJPnx5iv8ZB%2FyYPY9B5YNt6amYLaadWE5BqoraJSkqmJbbP3jFe8RXPuD%2Fc71PzZN%2FvnK78lZJRW7tXVil%2F9Q5XyUo6rjz4%2B%2FSJHZ5yI37t1PwpRwwxr7GyQY6pgGT5a%2FYD2OqfSIEYQJrm9ADxl%2FqXhi8bnDiHhb1qIKd%2FvMOInW9WnF0z9khemKg3xL50oylzorQNCdivJETf2XAgXwWZxndsMr5e8IZcNoHoYYAsuHo5eeqyqA5DFlQCbNiaU9T4RoLFI8eOpajS9ZUVQjxKKr9G4bxjv6G68hC09tGcdMGASGutDFWw%2FFqFWzGhecXFWpBCrxcrUKj91B5%2F5z0T6cP&X-Amz-Signature=e9b0291745982a14ccd00e11c79c73a55c6f0096797d0256253cfcbc8d13b83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
