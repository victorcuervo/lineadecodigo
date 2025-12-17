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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDARXBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fw6v6SJXGCR8%2BJlSCvCfGZfnxco8RAHTvbPp2kPPCiwIhAPhXTPS%2BYG09%2FlT70YdB%2F8rtlMCIFuvmjDoPMKpjOsdwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIcLX0dbWXRY44fr8q3AOrwkWNONt1xRJChn1SmkpFcMuPjP7iw099q0oZRU1Q4WAmWeZDOOZgZBsr0C8MPYNcAkCScQUCz9v4%2BzksjjZjYkCTKS12QkCArGJLktSXyftWne6Dg5%2FuzjjseiSr%2FLzEr0dwJQ06gvb3S0gWqNRAVjkDTclGoVP77F10sBdI3x5eeNWTEEZvWiFkbOs14XDrWhJ5I2KPovlp5M%2Bm8bYkjMDW%2FbHNZHM9ECY4Wb7l%2FGiLRsnrB9NpbABMyzyhYqHv%2BSdCop9q74IvC1MGQ1bmzjEqcPMfgvT9Xn5WJBTNNtvGVbEno5VMLA%2FIH60qQnxKCqXOrntkeOLON%2FTyVYMs4clGWHcM8McQEeR1Gtj9Lt4Ce65%2Bm8%2FS6DC1FbViS035kHVqn2n%2BjDNFBrKc5BD0Nhzle%2BPKGbrjXEcowv6f2jK%2FmJBhQ6F2%2B8YCiTHLM5%2FdR7BvSd5gwMtQJmTunGGKMFPFbRkv1vjshczVtaDv8R8HMB9L%2FGLbMSWinWK49ETdETLSTRnov0vha2ZV%2FMmskuITCovSv9tn1B3oiv%2FIH7C92wCay4%2BoWLHO6WRjerSlta8oiOU0KczZ%2FS0BSuEROCPkwwcYoCmnVnnYeXCnuEThdGUsKs47o3uhuTC6iozKBjqkAfQcIY%2FHmXbM%2BMV9FW4NsrG7aG%2Foe%2F%2BcFxqPLo0I3D%2BlDe9fGX6fE%2BDDy7KsDYEVJ%2BVyU6Vb9RXBLrXZ%2BUymDc8N92qr%2BSOQi0JS9dCHJjEZImMORft0RYnAqelm55cJN1s1avVHlbcpYQY6L7VEFBqwpCxJ%2BKU5z7nY1oW4MTkZBnZkXBuUwar17FOliAZx27TUYI4vDWqfvYzUAmp%2BORxED5Om&X-Amz-Signature=886886fdc690a8442861c64b56b9775d91f4a90fd0a16559ffa273a1dc8fd2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDARXBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fw6v6SJXGCR8%2BJlSCvCfGZfnxco8RAHTvbPp2kPPCiwIhAPhXTPS%2BYG09%2FlT70YdB%2F8rtlMCIFuvmjDoPMKpjOsdwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIcLX0dbWXRY44fr8q3AOrwkWNONt1xRJChn1SmkpFcMuPjP7iw099q0oZRU1Q4WAmWeZDOOZgZBsr0C8MPYNcAkCScQUCz9v4%2BzksjjZjYkCTKS12QkCArGJLktSXyftWne6Dg5%2FuzjjseiSr%2FLzEr0dwJQ06gvb3S0gWqNRAVjkDTclGoVP77F10sBdI3x5eeNWTEEZvWiFkbOs14XDrWhJ5I2KPovlp5M%2Bm8bYkjMDW%2FbHNZHM9ECY4Wb7l%2FGiLRsnrB9NpbABMyzyhYqHv%2BSdCop9q74IvC1MGQ1bmzjEqcPMfgvT9Xn5WJBTNNtvGVbEno5VMLA%2FIH60qQnxKCqXOrntkeOLON%2FTyVYMs4clGWHcM8McQEeR1Gtj9Lt4Ce65%2Bm8%2FS6DC1FbViS035kHVqn2n%2BjDNFBrKc5BD0Nhzle%2BPKGbrjXEcowv6f2jK%2FmJBhQ6F2%2B8YCiTHLM5%2FdR7BvSd5gwMtQJmTunGGKMFPFbRkv1vjshczVtaDv8R8HMB9L%2FGLbMSWinWK49ETdETLSTRnov0vha2ZV%2FMmskuITCovSv9tn1B3oiv%2FIH7C92wCay4%2BoWLHO6WRjerSlta8oiOU0KczZ%2FS0BSuEROCPkwwcYoCmnVnnYeXCnuEThdGUsKs47o3uhuTC6iozKBjqkAfQcIY%2FHmXbM%2BMV9FW4NsrG7aG%2Foe%2F%2BcFxqPLo0I3D%2BlDe9fGX6fE%2BDDy7KsDYEVJ%2BVyU6Vb9RXBLrXZ%2BUymDc8N92qr%2BSOQi0JS9dCHJjEZImMORft0RYnAqelm55cJN1s1avVHlbcpYQY6L7VEFBqwpCxJ%2BKU5z7nY1oW4MTkZBnZkXBuUwar17FOliAZx27TUYI4vDWqfvYzUAmp%2BORxED5Om&X-Amz-Signature=201c0e316ef9c6360a3f9918d1b93cc6490929825e0349cbdc19a0cd74c845b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
