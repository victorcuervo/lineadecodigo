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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD56ZVI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChtKBulMz4roAjbBk0oIq8xqBhbDKtIED5hBnv0NI33QIhAOVY5zMledmQeaGHY0bY5fscfiDFBqC9qRTTEE4htu5wKv8DCGEQABoMNjM3NDIzMTgzODA1IgzhUk8XDyN8jhkMukUq3AOaM7XcROk6do9wRDGsimFLwqMPBkuWWF%2BYt4Ap7KRfvjp4vQLBu7C8fxan8exjUegl%2BBsWBHPaTOAQ7H%2F8%2BbRK1BJkqMCJ%2FhG%2Bv8e0aPTu1SoAJEu2WN2XSci83dDPMe5RMQm7hlOmo1d7odpOtoYckIvNoWgHkPqJ9snS%2FkaYngcQogCFDj6o88K5uC%2Fgq5z9BiQq3v52QJbqC2ke4AIv%2Beqxq1D0HUx1y%2FbA6OpUhYYQqr8W%2BRa3bG4niHpnwRzOoRBbPNhEoit%2FCMhKz9z%2FnSUtvYLU5zgHKW5287jd4j2WPSHJ3%2F7SKAt3QeBmeXz3eh0xr6X7MYkiRhJvRwqfEmoiBu2usMA3jzkMRhxK%2BlKP9N78mg6vgdcuT90Wti5ISzPSv%2FeowsonM8LhD996%2BEMG0y0fvE5lNQQBVbZQ1LMi89QzAii6HLiUKEwOfFFBXR5sN7ZGgRBmQot2kHXhi0kVTVw3hxvRvmhr5%2Bd3mwN%2Fw4ZNj%2FhwhKkIlFZnu1PSAswj4Ze6AyTeWaEPYTevL6nxTQcoMluXS3CRMIvXF95xz1ABQ8ArC2VOkUuZ6RPCB25B4AnoV5nCG6XxzH6ocMhTMXh9fCzN%2FF%2FwzCq9f1b7EY2NtJsaFoSOXjCu%2BMvJBjqkAfQSpJ2KDBOWfuwRZa%2FiROOLhZuUNljbGYHRmOXAwmrVm7NqrGY3dZYYfShaTMBu%2Fd9N3DUAs%2FQKt1vSyvc7ARUPf0bB7NsGySrQqcs%2Bk58MIXhhTy%2BenI2oFexalD9OLJEVT32EYyPQGU9R%2Fx95rIMItB2QQ3QPl5rLWTRo3MWLVsI7wqRDtn7kQ17k0v2j%2BxZrJwD8mwuotMR0trJFM23BEqmF&X-Amz-Signature=f1d4f0290cdc5f79a3a90f72a12cfa5b62d5862cbc377fb6788ef237c24425b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD56ZVI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChtKBulMz4roAjbBk0oIq8xqBhbDKtIED5hBnv0NI33QIhAOVY5zMledmQeaGHY0bY5fscfiDFBqC9qRTTEE4htu5wKv8DCGEQABoMNjM3NDIzMTgzODA1IgzhUk8XDyN8jhkMukUq3AOaM7XcROk6do9wRDGsimFLwqMPBkuWWF%2BYt4Ap7KRfvjp4vQLBu7C8fxan8exjUegl%2BBsWBHPaTOAQ7H%2F8%2BbRK1BJkqMCJ%2FhG%2Bv8e0aPTu1SoAJEu2WN2XSci83dDPMe5RMQm7hlOmo1d7odpOtoYckIvNoWgHkPqJ9snS%2FkaYngcQogCFDj6o88K5uC%2Fgq5z9BiQq3v52QJbqC2ke4AIv%2Beqxq1D0HUx1y%2FbA6OpUhYYQqr8W%2BRa3bG4niHpnwRzOoRBbPNhEoit%2FCMhKz9z%2FnSUtvYLU5zgHKW5287jd4j2WPSHJ3%2F7SKAt3QeBmeXz3eh0xr6X7MYkiRhJvRwqfEmoiBu2usMA3jzkMRhxK%2BlKP9N78mg6vgdcuT90Wti5ISzPSv%2FeowsonM8LhD996%2BEMG0y0fvE5lNQQBVbZQ1LMi89QzAii6HLiUKEwOfFFBXR5sN7ZGgRBmQot2kHXhi0kVTVw3hxvRvmhr5%2Bd3mwN%2Fw4ZNj%2FhwhKkIlFZnu1PSAswj4Ze6AyTeWaEPYTevL6nxTQcoMluXS3CRMIvXF95xz1ABQ8ArC2VOkUuZ6RPCB25B4AnoV5nCG6XxzH6ocMhTMXh9fCzN%2FF%2FwzCq9f1b7EY2NtJsaFoSOXjCu%2BMvJBjqkAfQSpJ2KDBOWfuwRZa%2FiROOLhZuUNljbGYHRmOXAwmrVm7NqrGY3dZYYfShaTMBu%2Fd9N3DUAs%2FQKt1vSyvc7ARUPf0bB7NsGySrQqcs%2Bk58MIXhhTy%2BenI2oFexalD9OLJEVT32EYyPQGU9R%2Fx95rIMItB2QQ3QPl5rLWTRo3MWLVsI7wqRDtn7kQ17k0v2j%2BxZrJwD8mwuotMR0trJFM23BEqmF&X-Amz-Signature=c556f5817d10797fb211ddee1fc4e04bf24a78896f78cfd1960abfa59d835b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
