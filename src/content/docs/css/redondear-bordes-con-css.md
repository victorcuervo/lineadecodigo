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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCLA7DA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFb5fFxqrUtUuxcD%2FojFwxOpXBUjECNzFnovk1Niz%2F3%2BAiAN63DzoR%2BECLAfema%2FfEGWSIsUl%2FBnwcr19xfQ1ns5ESr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWXVhjvBDlSWJIlqsKtwDhBeYmy9RltsMMd8Ht4nqKD11bkg55SnZOAOZbYQ%2Baev7lILIEIoSx8jymX%2FUpMhy1vx%2FXEILfRrai1ZWlD1xweVe8tiw%2B50vV0F8gJ5zeiolyTTDc1QKB6QTh4apY4%2BSJ8SNmTfFTHblv8LmdT01wUj2ize10EFS3Vrw1T1yuzLt49DPO4Zf00ZLkGYzG1%2FcSlzhFRYFcgo59kukqs2kXN6URN9wlRImaoqoi%2FLCdelgVb0QgK%2FkHMhpjE7kHXe359zaomEv1TUdTTscUzkw0hUUH84Yf4S3aUnX5%2BxdGW1pdoVgZKHjtCneVk%2BZ%2FKyRGqF%2B5nY%2FFMCWQYH19C3z7UokN%2FFA71mgdHqAkuQuw0LpJjvne8wgBjIF%2FtpjH0%2B2eEsfM%2FjDoE4yfEdQwaDWkSSqrlphB2EcSzeXDvP1QrI4sUbpM0Atkt8wXcM%2Fh0Sm6zzB9k0NqP43MfiPU8%2FhUXu1TX0kYGB1lA3fUST9j%2F3s3qfIFGRGp5DBfFY9Po1mys%2BNEF99w2QY5RhAP0HLrQIst%2FkqBsLN1SijZXYNIqoOeFuHdCljUa6ss7GYxMGrjDl%2B7XiqiweTfGNVe7OPjvnhj7sjbVpwldQIpjV921I28%2FuZ1d2MRMDo%2Fmww%2BsnFyQY6pgF9eXxOwxEEAKzPwyiv801zE6GBLeii9s3h17MTMK3xGbD8NJZyIS13h3RoHdbTmMifWzwTGRUsWvqJYLOT%2FZJwfwawKT34erralhGNDpcG7zmiKar1WXRB71Pnge1Np%2FIhAt2D2DGu7hzRZdqy4%2F7cKIHzjEDa42YA8ox2pvGFB1IGzbedyTBMBowgI8ENZUFUGhOTE5saHz%2ByoCGX%2F85Xqjj%2FrVnk&X-Amz-Signature=1e194a1eab989ef4511736d6cac669920fdc1043f9e53901536e487c28225165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCLA7DA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFb5fFxqrUtUuxcD%2FojFwxOpXBUjECNzFnovk1Niz%2F3%2BAiAN63DzoR%2BECLAfema%2FfEGWSIsUl%2FBnwcr19xfQ1ns5ESr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWXVhjvBDlSWJIlqsKtwDhBeYmy9RltsMMd8Ht4nqKD11bkg55SnZOAOZbYQ%2Baev7lILIEIoSx8jymX%2FUpMhy1vx%2FXEILfRrai1ZWlD1xweVe8tiw%2B50vV0F8gJ5zeiolyTTDc1QKB6QTh4apY4%2BSJ8SNmTfFTHblv8LmdT01wUj2ize10EFS3Vrw1T1yuzLt49DPO4Zf00ZLkGYzG1%2FcSlzhFRYFcgo59kukqs2kXN6URN9wlRImaoqoi%2FLCdelgVb0QgK%2FkHMhpjE7kHXe359zaomEv1TUdTTscUzkw0hUUH84Yf4S3aUnX5%2BxdGW1pdoVgZKHjtCneVk%2BZ%2FKyRGqF%2B5nY%2FFMCWQYH19C3z7UokN%2FFA71mgdHqAkuQuw0LpJjvne8wgBjIF%2FtpjH0%2B2eEsfM%2FjDoE4yfEdQwaDWkSSqrlphB2EcSzeXDvP1QrI4sUbpM0Atkt8wXcM%2Fh0Sm6zzB9k0NqP43MfiPU8%2FhUXu1TX0kYGB1lA3fUST9j%2F3s3qfIFGRGp5DBfFY9Po1mys%2BNEF99w2QY5RhAP0HLrQIst%2FkqBsLN1SijZXYNIqoOeFuHdCljUa6ss7GYxMGrjDl%2B7XiqiweTfGNVe7OPjvnhj7sjbVpwldQIpjV921I28%2FuZ1d2MRMDo%2Fmww%2BsnFyQY6pgF9eXxOwxEEAKzPwyiv801zE6GBLeii9s3h17MTMK3xGbD8NJZyIS13h3RoHdbTmMifWzwTGRUsWvqJYLOT%2FZJwfwawKT34erralhGNDpcG7zmiKar1WXRB71Pnge1Np%2FIhAt2D2DGu7hzRZdqy4%2F7cKIHzjEDa42YA8ox2pvGFB1IGzbedyTBMBowgI8ENZUFUGhOTE5saHz%2ByoCGX%2F85Xqjj%2FrVnk&X-Amz-Signature=f2d4c679ed5da6644b5cc404020b8b688c795266a3e0a02480a2d342b9062dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
