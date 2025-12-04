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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBCNPUN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFETkXghW97%2BvUBia393AuAuM0vrln9WVE65m2xgrLJaAiBvwbyaqIc3fpa66EwPvwcpx4NZEPZLJfVaOzTM8XX7Eyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMKTDKQm1AXeNlbN3cKtwDErKUpwW2ic%2FPscjDq%2BznPvqlKE6KMTn5eJQISSBA6LDXRTNS5eRR%2FNRyDbWcIzGZV650GMLMFHCuGnvYauCYJk9AykHfJLPYMC291H6%2BXKQdLtjH%2Bh45vAAi3sj7CDPl7rff1A92UB8DBuZVdkKIduzsg0S29kmLwIpG9MxMktkPIPSPZ3I%2BrdlEaf3pjPOLsQqARUpLoBAXFtcC%2FE0S096pFEj5Wv3hMxOnl9Bq134a2ojqe5aDE2nipbsbwhEfEm4cL%2BP%2BuCRSPl8WisfTeGTizH7lJYHg9UTO0hZOOzAevwG0Av%2FoS6RqYiT6kQDW3deGI1nRRamVB7RAJjl%2BqSSggac4fydAzfSnzAmOK81Vrns1bbzbOeOGS93%2B1oThPGS6MJhI0%2BCg%2F6kEKiyrtzzKjBkz7Ix1xOojgG1%2BopZM%2FvjgMoQsLEeOIUFKyDD04S40RvIbUi0hFj%2FSHMtWULvp0R7Gq4kWP6Ect2y%2FkRBWiIEzmKZJBjKyXHQbBHkQzeVwjnX8s7b64HhBl6AzXzsLnbNOnBDqkPRmwz1LvwusY%2B4x4oInzRCGJzv86xPtx59Fu2u8DHhIKfEh%2BqVYBO6d%2FeJS91zZIqt%2F%2FyzSu37Nn7oJxG7YGeQf674w0tzGyQY6pgFLEYgP7%2BFnyLoac%2Fx6jtMEWnlqrBvK10s4blZKEOvDQkbF88%2FYrLkAsZYNkPohtXIybECFJznnd%2BSyCqcAbliVw%2BzbVNwiLYkXL7XXwxla0CsFzdArqd11O9N4a4scGP2r4LusKmsGtBgHnyfXjHD1BZWs9UeiYLR%2FZDJxY5eMICqnfxKDxJU4zIkAC4RPrkt1JORHJMlbhbrg77p6nciA4rKuDadF&X-Amz-Signature=5a0834f598ad02cb523c35ca6f7f40f23ffe3d461046a8a5669b424b97025eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBCNPUN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFETkXghW97%2BvUBia393AuAuM0vrln9WVE65m2xgrLJaAiBvwbyaqIc3fpa66EwPvwcpx4NZEPZLJfVaOzTM8XX7Eyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMKTDKQm1AXeNlbN3cKtwDErKUpwW2ic%2FPscjDq%2BznPvqlKE6KMTn5eJQISSBA6LDXRTNS5eRR%2FNRyDbWcIzGZV650GMLMFHCuGnvYauCYJk9AykHfJLPYMC291H6%2BXKQdLtjH%2Bh45vAAi3sj7CDPl7rff1A92UB8DBuZVdkKIduzsg0S29kmLwIpG9MxMktkPIPSPZ3I%2BrdlEaf3pjPOLsQqARUpLoBAXFtcC%2FE0S096pFEj5Wv3hMxOnl9Bq134a2ojqe5aDE2nipbsbwhEfEm4cL%2BP%2BuCRSPl8WisfTeGTizH7lJYHg9UTO0hZOOzAevwG0Av%2FoS6RqYiT6kQDW3deGI1nRRamVB7RAJjl%2BqSSggac4fydAzfSnzAmOK81Vrns1bbzbOeOGS93%2B1oThPGS6MJhI0%2BCg%2F6kEKiyrtzzKjBkz7Ix1xOojgG1%2BopZM%2FvjgMoQsLEeOIUFKyDD04S40RvIbUi0hFj%2FSHMtWULvp0R7Gq4kWP6Ect2y%2FkRBWiIEzmKZJBjKyXHQbBHkQzeVwjnX8s7b64HhBl6AzXzsLnbNOnBDqkPRmwz1LvwusY%2B4x4oInzRCGJzv86xPtx59Fu2u8DHhIKfEh%2BqVYBO6d%2FeJS91zZIqt%2F%2FyzSu37Nn7oJxG7YGeQf674w0tzGyQY6pgFLEYgP7%2BFnyLoac%2Fx6jtMEWnlqrBvK10s4blZKEOvDQkbF88%2FYrLkAsZYNkPohtXIybECFJznnd%2BSyCqcAbliVw%2BzbVNwiLYkXL7XXwxla0CsFzdArqd11O9N4a4scGP2r4LusKmsGtBgHnyfXjHD1BZWs9UeiYLR%2FZDJxY5eMICqnfxKDxJU4zIkAC4RPrkt1JORHJMlbhbrg77p6nciA4rKuDadF&X-Amz-Signature=dd90cabfb8539629b6b41fbb1c49dfff57a3116f8ac6bb89cd1f615eda9e115b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
