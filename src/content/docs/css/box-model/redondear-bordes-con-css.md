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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJN4YAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzyEFljUyH0OR4cFukz7CAg37hwBv%2Fkncp%2FcbjiKQUNAiATeg6Vc%2FHo8XZOvA57lVN5TLDStZtEvEcFglTujY4ytCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEHgsOyMchyckGByHKtwDn1Tgf8VLdtw8bMXO4A97VvVeThUzvv26u3TslE6xAWDk8hsE%2FmLeOerqy9Jvqp9aIdLygibbc%2FSgIWyPf0pBdySqTJNTB6rZd4RJ%2BHRaEkarS%2BKrQTG%2F79iVPLl1Jg75G10RB6huEc%2FdFjPKfqZs49uBYuFcl6IUK4opIE%2FQzgqKYfoZ0Z9CDWKmji4xsoaL7Z%2BWcU%2FlF6M5VkNQ9B%2BYjehn8PoInBPjgwdflpmGNEiw0lMA3RaOwZL7fXC%2Bh2Bsxr%2BuDSZMVzxIO9Cc9t2%2FwrWOkLJtoUEcj69Yc1PK5NRz5vnv7KJ7%2FIR8T8ehJxzNFB95Gk%2FAMGzxLMy06jXVODJSD8ippRVgmp%2F03Kb6CCnZSpAabj3tCrzeCTmB%2BxEDL7AsEk6EZY5uraqnpDOB9I3tFX4uGFGu%2FfZK%2Fq7aphMtMDRMEa%2BW2yUrMIeBzFyUHuzdWdjdnmAUo80wT7IzqkaBWLkqNIhYl3v1qFFSoMeL9Rlf%2FnHZp%2FhBQfsROFKtEqUGpKx6iEt6PP04%2Boa2dJRufNA5a7vhOyPvV67%2F%2BL8qI1aLwp%2FGNCBNY4djIh%2BRcznVAuCBUa%2FKXJkkXMWUONB4hXGSlhii%2FX2LiNEkuiq7JOFn4A1zQcHyTnIwjoKJygY6pgG0KmTDHRz510Tt%2FjHrXIMhQZGZHtrYCEygE3FB7Uep7qk%2FZlbDBZ%2FB5nQ0XpyV3rw%2Fr3KhhQZ0wOkrvRaBuCKybtxQma5qQBr9qzVGpY4ywVIdWMV2AGJGMbZyWtlwnaYGuHOBeJq7vsCFYp3XK8%2BtznYIxdXQl5R0Lzeiwe7%2B2rXFSZown78zGNcLRoOry5B3ooa3JaiGgt7a72KvPxDen2VdsU8C&X-Amz-Signature=82931d675566e9bf3465660f85df4082210d3f1a9688486942c53ab9dadf4d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJN4YAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzyEFljUyH0OR4cFukz7CAg37hwBv%2Fkncp%2FcbjiKQUNAiATeg6Vc%2FHo8XZOvA57lVN5TLDStZtEvEcFglTujY4ytCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEHgsOyMchyckGByHKtwDn1Tgf8VLdtw8bMXO4A97VvVeThUzvv26u3TslE6xAWDk8hsE%2FmLeOerqy9Jvqp9aIdLygibbc%2FSgIWyPf0pBdySqTJNTB6rZd4RJ%2BHRaEkarS%2BKrQTG%2F79iVPLl1Jg75G10RB6huEc%2FdFjPKfqZs49uBYuFcl6IUK4opIE%2FQzgqKYfoZ0Z9CDWKmji4xsoaL7Z%2BWcU%2FlF6M5VkNQ9B%2BYjehn8PoInBPjgwdflpmGNEiw0lMA3RaOwZL7fXC%2Bh2Bsxr%2BuDSZMVzxIO9Cc9t2%2FwrWOkLJtoUEcj69Yc1PK5NRz5vnv7KJ7%2FIR8T8ehJxzNFB95Gk%2FAMGzxLMy06jXVODJSD8ippRVgmp%2F03Kb6CCnZSpAabj3tCrzeCTmB%2BxEDL7AsEk6EZY5uraqnpDOB9I3tFX4uGFGu%2FfZK%2Fq7aphMtMDRMEa%2BW2yUrMIeBzFyUHuzdWdjdnmAUo80wT7IzqkaBWLkqNIhYl3v1qFFSoMeL9Rlf%2FnHZp%2FhBQfsROFKtEqUGpKx6iEt6PP04%2Boa2dJRufNA5a7vhOyPvV67%2F%2BL8qI1aLwp%2FGNCBNY4djIh%2BRcznVAuCBUa%2FKXJkkXMWUONB4hXGSlhii%2FX2LiNEkuiq7JOFn4A1zQcHyTnIwjoKJygY6pgG0KmTDHRz510Tt%2FjHrXIMhQZGZHtrYCEygE3FB7Uep7qk%2FZlbDBZ%2FB5nQ0XpyV3rw%2Fr3KhhQZ0wOkrvRaBuCKybtxQma5qQBr9qzVGpY4ywVIdWMV2AGJGMbZyWtlwnaYGuHOBeJq7vsCFYp3XK8%2BtznYIxdXQl5R0Lzeiwe7%2B2rXFSZown78zGNcLRoOry5B3ooa3JaiGgt7a72KvPxDen2VdsU8C&X-Amz-Signature=6c9634bf6274d8129e6c84cdbcf98b70e16ea23a6cb4bb84034e5e3d6b06bdcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
