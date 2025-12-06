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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDT7IWNZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv4mvX2jk%2Fd%2F6CvcmyxsEll43UeciIA%2B977VyCxdMPsQIhANxXrfb8dSYnnbWKvqegl8pQTNSEimnJX%2F8diz9IxTaqKv8DCH8QABoMNjM3NDIzMTgzODA1IgzXHlu0bgW2%2FYtopREq3AMHfEAqdY%2BTEPC0xcvG0sS9i1fZ6PqN896x72swUx%2BYLNF5Agxo5pEGAgrK7AGeTLktNyf92iZuSFe7fhpy1OFEzdr6EbSOsVyO1Q%2F2N9vYaNUpjjCyE%2FQYx7deCKKHMVg3f%2BF4g%2FcCr5ABlOrNJ5Ex1n5oNyUUce13rYkMxN4bVhkr9w59PsW%2BLTJJZadWk7KctOI32wiuWhqTwiqW7utU71o47H8c0GOLD0yyzjPSyvVT4Yv2NE%2FxBH%2BnGFSb0t8hYeRHeZ%2FklH0nikjXTwOY8quV%2BcG8KqG2oLKsCjh8LbroD61DoZrZ97Fxc2G7aOoObXHHgwT7F9tvdU1HJ5K5KapgnnWuWGr4LhjHhcr4iKhhVXL1nZHUGwqxd6MdwF6U1Bvc69Ew45KrzhBhyIyMv%2FFgwYAOQSA%2BgkoIWo4MvYgtxEOAgeRCi3LGZGoXGGOna9HJSwgiJqa3DizOsR2y68UQ7eFACMTapugIqgkTYABR0dbWkgOhmSh5thm%2Bvm47N0HzPauck6xUKwdpiTSJk8I86Nw0UeZefqK0LcfoTsvpQbMwd5mvDxtHQ6lFGoJwDNUCa5edyHGgsiSQcQwn%2FtnV%2BAvDck8eeadUd0EW8xZ8L5fuf9gb%2BkHuHjCs1NLJBjqkAczLyGQWGoheEcaW5aJAdAQveQJZWozFcTjn4TmO4UHdQdZ6r4z5U%2FK%2FlcCzsC9Y%2FId3JBXQS5MckX0o5HFNKWuE9%2FXRbI7Kk01c52SVVKV4K2FY6mfNJPLuJMzeBqI0xCiL%2BRoD4BLCS3jf0FAI7ox1dm6UeMG1y4PdqFeX67i0VU0dpJR4Nh6Ce5o7%2BXqdWfWVeKv7SSTaf6Uc0xdg6XLxCvMl&X-Amz-Signature=a4bfcce52bc3288f990f4c3c042261a2b9afcea880eca4e5a075d9795f102968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDT7IWNZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv4mvX2jk%2Fd%2F6CvcmyxsEll43UeciIA%2B977VyCxdMPsQIhANxXrfb8dSYnnbWKvqegl8pQTNSEimnJX%2F8diz9IxTaqKv8DCH8QABoMNjM3NDIzMTgzODA1IgzXHlu0bgW2%2FYtopREq3AMHfEAqdY%2BTEPC0xcvG0sS9i1fZ6PqN896x72swUx%2BYLNF5Agxo5pEGAgrK7AGeTLktNyf92iZuSFe7fhpy1OFEzdr6EbSOsVyO1Q%2F2N9vYaNUpjjCyE%2FQYx7deCKKHMVg3f%2BF4g%2FcCr5ABlOrNJ5Ex1n5oNyUUce13rYkMxN4bVhkr9w59PsW%2BLTJJZadWk7KctOI32wiuWhqTwiqW7utU71o47H8c0GOLD0yyzjPSyvVT4Yv2NE%2FxBH%2BnGFSb0t8hYeRHeZ%2FklH0nikjXTwOY8quV%2BcG8KqG2oLKsCjh8LbroD61DoZrZ97Fxc2G7aOoObXHHgwT7F9tvdU1HJ5K5KapgnnWuWGr4LhjHhcr4iKhhVXL1nZHUGwqxd6MdwF6U1Bvc69Ew45KrzhBhyIyMv%2FFgwYAOQSA%2BgkoIWo4MvYgtxEOAgeRCi3LGZGoXGGOna9HJSwgiJqa3DizOsR2y68UQ7eFACMTapugIqgkTYABR0dbWkgOhmSh5thm%2Bvm47N0HzPauck6xUKwdpiTSJk8I86Nw0UeZefqK0LcfoTsvpQbMwd5mvDxtHQ6lFGoJwDNUCa5edyHGgsiSQcQwn%2FtnV%2BAvDck8eeadUd0EW8xZ8L5fuf9gb%2BkHuHjCs1NLJBjqkAczLyGQWGoheEcaW5aJAdAQveQJZWozFcTjn4TmO4UHdQdZ6r4z5U%2FK%2FlcCzsC9Y%2FId3JBXQS5MckX0o5HFNKWuE9%2FXRbI7Kk01c52SVVKV4K2FY6mfNJPLuJMzeBqI0xCiL%2BRoD4BLCS3jf0FAI7ox1dm6UeMG1y4PdqFeX67i0VU0dpJR4Nh6Ce5o7%2BXqdWfWVeKv7SSTaf6Uc0xdg6XLxCvMl&X-Amz-Signature=8297716807e4914ce7181fe98c621bb687fc3ebb8a64b5cb2c1e1af059584bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
