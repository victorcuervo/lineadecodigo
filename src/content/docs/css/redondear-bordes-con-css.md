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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32ED5LM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbzQUAmdpm0tcjpJCeZ9t92kritIhI1dlaBNTMyHKCxAiAzd8WMUEILsMozOTGqtH4eav012fiSpMMjcIQlP6vrgCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMV4sxw2r1%2FcSU%2BEGKtwDk3OcdKs3j771v3eLS0h1FLMT6PaV98BLEPQNUbyGfoGHFO%2Blhrgp7YQ28x7wfHYMxaCEQIlvyq3P%2BXP9YZz1j0y2FvaRIHaDy%2BOE0dGTIA7LM1z1SnKiDSCwDSU9gtTGDK9khI%2F3g5ErP5djWCq64YvBwr0GhKHgsRlukJg5CnewRQ%2BecJPztsp0sTQsDAPNV%2Fz3Ha3qK8qMfjWDsCsvg17jV5Yzaq51dFCQs6y7tOIMSd3Chl7epS2fkXTVJoleQu6fDNB46N%2FqV7Zt780HMovYy7DN15TduJl1X8KUcU1z4s%2FmlFrhYsBsiDynJy%2F2caU5HLvOscbbjh2XcmtKBNMQZmCMQDKzAgXaGsSn5eWtJ6CqORybb71PKGgPZZ5Pal1K3EoxaIKJlst%2FCBEwiro54biEzKw1Tr7qUu6NoNk%2FWmrPu4QMWH9OdzStirHiG6tHqdscJlmsoqkryKwsX3IpLowywQsj6gS2AdRyhvVyunhxFe7VK5yglE0sdE%2FhSXUKvbpU%2B%2BrholT4tXZIxu74XY2PsHm8eAhwNW8qVEALY0cUDKvYnNthk4n%2BpzVLQTF914%2FEYeTYxZlZHH9uKDi3WdbPsmClNaP%2BgZZybL8CJ75yikLp3Akaj9wwmMHbyQY6pgGxBa13zwspAFAVPno2BcA%2FYB0ONhm8pPAoi1cDjdfjEJug%2FLgNP00vI%2F%2Bjw9UklgY%2BLGEXRq7jGlGEN3ksfoplg9Up3DyF%2Bg0MgwD2yLU%2FSvO5Xt50%2BRIUmTxSYTzF4Ix1vvdBtVx2qjSEOd35HAqodNGU20i9kS4VtcC676roViy%2B53jGMsQQhQ42QtK4VfWguXmslJNw%2BWLAmk3EUXkIM8w4R6GF&X-Amz-Signature=07af16e326c773a06e09e2c6a86e08e0fb37f2f03ee190de58c5c483acb5a844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32ED5LM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbzQUAmdpm0tcjpJCeZ9t92kritIhI1dlaBNTMyHKCxAiAzd8WMUEILsMozOTGqtH4eav012fiSpMMjcIQlP6vrgCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMV4sxw2r1%2FcSU%2BEGKtwDk3OcdKs3j771v3eLS0h1FLMT6PaV98BLEPQNUbyGfoGHFO%2Blhrgp7YQ28x7wfHYMxaCEQIlvyq3P%2BXP9YZz1j0y2FvaRIHaDy%2BOE0dGTIA7LM1z1SnKiDSCwDSU9gtTGDK9khI%2F3g5ErP5djWCq64YvBwr0GhKHgsRlukJg5CnewRQ%2BecJPztsp0sTQsDAPNV%2Fz3Ha3qK8qMfjWDsCsvg17jV5Yzaq51dFCQs6y7tOIMSd3Chl7epS2fkXTVJoleQu6fDNB46N%2FqV7Zt780HMovYy7DN15TduJl1X8KUcU1z4s%2FmlFrhYsBsiDynJy%2F2caU5HLvOscbbjh2XcmtKBNMQZmCMQDKzAgXaGsSn5eWtJ6CqORybb71PKGgPZZ5Pal1K3EoxaIKJlst%2FCBEwiro54biEzKw1Tr7qUu6NoNk%2FWmrPu4QMWH9OdzStirHiG6tHqdscJlmsoqkryKwsX3IpLowywQsj6gS2AdRyhvVyunhxFe7VK5yglE0sdE%2FhSXUKvbpU%2B%2BrholT4tXZIxu74XY2PsHm8eAhwNW8qVEALY0cUDKvYnNthk4n%2BpzVLQTF914%2FEYeTYxZlZHH9uKDi3WdbPsmClNaP%2BgZZybL8CJ75yikLp3Akaj9wwmMHbyQY6pgGxBa13zwspAFAVPno2BcA%2FYB0ONhm8pPAoi1cDjdfjEJug%2FLgNP00vI%2F%2Bjw9UklgY%2BLGEXRq7jGlGEN3ksfoplg9Up3DyF%2Bg0MgwD2yLU%2FSvO5Xt50%2BRIUmTxSYTzF4Ix1vvdBtVx2qjSEOd35HAqodNGU20i9kS4VtcC676roViy%2B53jGMsQQhQ42QtK4VfWguXmslJNw%2BWLAmk3EUXkIM8w4R6GF&X-Amz-Signature=f3d43a7728e79bbabe1c4234835047569737e14e9857a965d4be740d5015693b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
