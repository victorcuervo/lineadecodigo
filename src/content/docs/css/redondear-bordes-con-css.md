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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HDCJIU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATPDVg%2B0XmKVe2pPqfQObczkx87ECrJrKS3r5VHd2MPAiBFfNwksDAFG1ldm0D62ncbO754q9Ty0zqVHfbAueaUgiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMurI7Gzt2167S3nh7KtwD1ukgQad8z%2FtgHOhL%2BnlXVeMy0d8XpPk%2BYw9%2F0TZ5tkBudpYZjd5%2BZ32eJkfY4qS6M%2BfjTv4y9rmASURboG%2BXe2uh6txZiAeIF5BnRSYRc8swY8q%2FpiGa1phKXGov3VIKxMYjo78lXI3LAFpZzkRdzf7NSayvAdVQ3R6rt32Z2mHhoHz4ns5MlifxTjq9FS6QKDXo5CzODNkUC%2BiU29zBg91bYrbwrvMZaoSoRQh1sDbcybPrOFYVtS9AnIteTwIbToiJ%2F3ffPbGSoPNtfIbpd%2B0d2oMDsQKg8PDKSxWesNmlIscU%2FSgkJXNvjOsCwto0zKL6ub9u5%2BvV9YiyuKufQn4MvJtdjNdeBkv9ocdwrcm%2BnZEr5wdqeOTkUnvw3ZxDEcJGDyICjg53Ihq5wr%2FwzzcHQEqYVvcVwYAJHcZeQ48%2B2EHLaZYMy5hptA22XmcbiiO0tLJdc5xQt%2Fo8da7a8QhUXY4WMYHRKDhhGhztsluJhylDPzyQ5yvJ3hL%2FcTBe5pixlnL8aKhz1R7tRKYQ6Pgk30ZJW6JzRbqkhDFtze8kbcK50LvK5o7bKCTJHI%2F0JDtnJKT0dvFOETMiTejkEtq7Z%2BtjLOfPZAvbEox8XOX%2BIujnKSsAne7d5X8wqpnVyQY6pgFGazlPevzEG6cz8grLqKqvLXgP8Fiqq5HQptib0Yzt6g96BuCllKtZg6ejHf5iiz5qE2QP8fB54dvF5WrEfZT9Cm7GpL7cMrRFyX1EpshghSFZi1x4moQihQ2pFBzDHtBlNJLTYmX5sr%2F2z1W2A8CO%2BEyXXf6%2FrPzBpxAfW257y0zgW7zwr5pjitkGJtQWjDG1TiRM5YwhNxmACly2fxvWQpfoq8VV&X-Amz-Signature=e7b7207436a1728adadc70d6dbeb67fda4622fe0a1863b53d55d004f51586bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HDCJIU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATPDVg%2B0XmKVe2pPqfQObczkx87ECrJrKS3r5VHd2MPAiBFfNwksDAFG1ldm0D62ncbO754q9Ty0zqVHfbAueaUgiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMurI7Gzt2167S3nh7KtwD1ukgQad8z%2FtgHOhL%2BnlXVeMy0d8XpPk%2BYw9%2F0TZ5tkBudpYZjd5%2BZ32eJkfY4qS6M%2BfjTv4y9rmASURboG%2BXe2uh6txZiAeIF5BnRSYRc8swY8q%2FpiGa1phKXGov3VIKxMYjo78lXI3LAFpZzkRdzf7NSayvAdVQ3R6rt32Z2mHhoHz4ns5MlifxTjq9FS6QKDXo5CzODNkUC%2BiU29zBg91bYrbwrvMZaoSoRQh1sDbcybPrOFYVtS9AnIteTwIbToiJ%2F3ffPbGSoPNtfIbpd%2B0d2oMDsQKg8PDKSxWesNmlIscU%2FSgkJXNvjOsCwto0zKL6ub9u5%2BvV9YiyuKufQn4MvJtdjNdeBkv9ocdwrcm%2BnZEr5wdqeOTkUnvw3ZxDEcJGDyICjg53Ihq5wr%2FwzzcHQEqYVvcVwYAJHcZeQ48%2B2EHLaZYMy5hptA22XmcbiiO0tLJdc5xQt%2Fo8da7a8QhUXY4WMYHRKDhhGhztsluJhylDPzyQ5yvJ3hL%2FcTBe5pixlnL8aKhz1R7tRKYQ6Pgk30ZJW6JzRbqkhDFtze8kbcK50LvK5o7bKCTJHI%2F0JDtnJKT0dvFOETMiTejkEtq7Z%2BtjLOfPZAvbEox8XOX%2BIujnKSsAne7d5X8wqpnVyQY6pgFGazlPevzEG6cz8grLqKqvLXgP8Fiqq5HQptib0Yzt6g96BuCllKtZg6ejHf5iiz5qE2QP8fB54dvF5WrEfZT9Cm7GpL7cMrRFyX1EpshghSFZi1x4moQihQ2pFBzDHtBlNJLTYmX5sr%2F2z1W2A8CO%2BEyXXf6%2FrPzBpxAfW257y0zgW7zwr5pjitkGJtQWjDG1TiRM5YwhNxmACly2fxvWQpfoq8VV&X-Amz-Signature=4e3f72824ac439aee4dee3be095f2215e8528dd49dcd139d04ee43a17eb195a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
