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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IT6MQMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSYqJwKVKLzYJYNh7G%2FY6zwQshfX3IPL8%2BwKMgyhhh7AiA9IfQbdez1Re%2BBQqpYfQA69c29mZUQtqxJInCooKInKCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMhJdypBuFRPGKfxmfKtwDRn%2FMObEVodMszI8oBvAnwg8YC%2F4%2Bj5Zg%2FAFuXfZ6%2BjZXsgYXVZiTgt2p3gz0ntllSl0H6ghAZN6Ay1%2BReDHX3o7uTCkW37SL8zd7T8jOj66B%2BupzjUrN1Q9J74KO6%2FCsCmUpEbUNJmevhyIFyjLVLQMMunxrMTlcv%2BVeQICKDIrRJm1luQ43%2BqLiW6b9hcwdpzo59JrAl%2BOQColJHj0Rg%2FrzwTkcyZQgzdMgxc7kh%2FOnOwImM3Ok1RXzeIviqBNT6GVkKABnNyB6P%2BCg1dDxEMmmh04bkyQg3G3Ji5IMa9ID2cW%2BviIgdQK5ziSibMFtZTQlhF0FxEkhVRxyeo1UaHU5HR0JtR1v3HAZ3owXrpy2Poezw77Xv4WpRJB3G4%2FdxHqSFRHBvBoZE3Oe3vsZ%2BlFrGsxYJo9SSNGoldcFrfeJxh0oqAbNS62hM3QKdcOLrgVKjxVvT6K86z6EcB786ov9jVRF%2BB4OF3InJMUEe8OqJyI78XeFt8BfAOTaHU3dsO6QtBfA65RoHCVSWo8Kz7uJy8fXwFs%2BoYjq0dABlJNuafm%2F7QZvGT%2B3g4QHCo4xWhZUqhrPbxVo%2BBtV0laC9dlJ6mfMJcPfK3bCR03shLsS3OIFUp1ITnW1vjQwnebLyQY6pgGjvG7468vD8CLouHIO7aDid5%2BnR3ysjy8NpCNubW8lUFHXoBwPL4%2BBNKU09s2Ei3fi%2F5a9TFDQpCKmjVeRfzuyGH6YxMbxM6KzDH7y7dODzqHRs0nGJH5snz0LN3ZzB68wzukIT07EwMCHD5oo1g3z1BRukFJVujPBFg1T%2FJRLHeoeoQGUU3o0rYLyvsmJSZYWbKA9Wq%2BQpYrZkGuJnfWakbPskWGz&X-Amz-Signature=fd3f96872a0e2806ab02d717945c5fe78491c938971ad30e1346a2b47b441366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IT6MQMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSYqJwKVKLzYJYNh7G%2FY6zwQshfX3IPL8%2BwKMgyhhh7AiA9IfQbdez1Re%2BBQqpYfQA69c29mZUQtqxJInCooKInKCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMhJdypBuFRPGKfxmfKtwDRn%2FMObEVodMszI8oBvAnwg8YC%2F4%2Bj5Zg%2FAFuXfZ6%2BjZXsgYXVZiTgt2p3gz0ntllSl0H6ghAZN6Ay1%2BReDHX3o7uTCkW37SL8zd7T8jOj66B%2BupzjUrN1Q9J74KO6%2FCsCmUpEbUNJmevhyIFyjLVLQMMunxrMTlcv%2BVeQICKDIrRJm1luQ43%2BqLiW6b9hcwdpzo59JrAl%2BOQColJHj0Rg%2FrzwTkcyZQgzdMgxc7kh%2FOnOwImM3Ok1RXzeIviqBNT6GVkKABnNyB6P%2BCg1dDxEMmmh04bkyQg3G3Ji5IMa9ID2cW%2BviIgdQK5ziSibMFtZTQlhF0FxEkhVRxyeo1UaHU5HR0JtR1v3HAZ3owXrpy2Poezw77Xv4WpRJB3G4%2FdxHqSFRHBvBoZE3Oe3vsZ%2BlFrGsxYJo9SSNGoldcFrfeJxh0oqAbNS62hM3QKdcOLrgVKjxVvT6K86z6EcB786ov9jVRF%2BB4OF3InJMUEe8OqJyI78XeFt8BfAOTaHU3dsO6QtBfA65RoHCVSWo8Kz7uJy8fXwFs%2BoYjq0dABlJNuafm%2F7QZvGT%2B3g4QHCo4xWhZUqhrPbxVo%2BBtV0laC9dlJ6mfMJcPfK3bCR03shLsS3OIFUp1ITnW1vjQwnebLyQY6pgGjvG7468vD8CLouHIO7aDid5%2BnR3ysjy8NpCNubW8lUFHXoBwPL4%2BBNKU09s2Ei3fi%2F5a9TFDQpCKmjVeRfzuyGH6YxMbxM6KzDH7y7dODzqHRs0nGJH5snz0LN3ZzB68wzukIT07EwMCHD5oo1g3z1BRukFJVujPBFg1T%2FJRLHeoeoQGUU3o0rYLyvsmJSZYWbKA9Wq%2BQpYrZkGuJnfWakbPskWGz&X-Amz-Signature=b93c42a1079a83599a35a02310f7dc7c7e0c7055f1a18a3ad8e605d4306b0b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
