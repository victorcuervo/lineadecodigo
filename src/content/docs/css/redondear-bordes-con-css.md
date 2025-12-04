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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HU5V6Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjyeGllYma9tyLhBFI0xCg25L7GEM8t9rdSxa2%2B0tGIQIhAJl%2FtBy5mVDbGFxSWCsMV6mxSuA0ZPpWaFLL2d5eSW4UKv8DCEcQABoMNjM3NDIzMTgzODA1IgzN560S7J5lLTlpqt4q3ANbckhLjpASB%2FB5M76iYJejJhwi5s0lsE5BZo5XnPbVSTcIt9FKxhbXP6cYjTQSKw%2FTf2ZbuB7DR%2FVw2rd5m7LVf5LLpeE4alauwir91KVOnckuks1pjDg4J9Yy0QkB7ltA8cCcR6rvXO3JI1fPuoONOnpkf0upkST6SnhfoI7C0yXWJ3gAzQx8az3mOAwfIRDCPsNViSHJqq%2BEIUdl05hqPabljJrOqhi497cf8s28BgSWB0z3piws9wYWZYv%2B%2BR1VmJFjwOGS8rAijHKa63mMawgqvi8Pz96t1IZi6eoSJC8rWjWIbxM93WZarGWw3hpxFlW7EWzm2BTCdEoBLofNg5bkyVp%2FK%2FE5GSyqoeOBbcLrltSRFWaB1iTNuGTk7DKn6TsM%2BY1tgsE1%2FzZzsMq8g2rcpNdWruI8Y%2BzmEFruGSbrfSHtfLRumyWmNrA3Dvn0PL3jtvZdansR3%2BLb1pO7hb%2FIXQ50CaklbhuUhTR%2Bccj7eZJjmZ6nIz7xU4EWxzt2nwgk7ogZFK1BMni6WydDrMi10f2yGV7pKtP1QBIlLF8OfRzD1u5zZVOVqqsQFj6y2AvQCApFzv0rPSCqzgLL%2BAVYslrogrEAA0IFTSMARWQ5ApuzEj44NkYtSTDFoMbJBjqkAZiC2Yfunq2w7j656MWmXKdy77YkkI%2BOTHev9HvJexkVhxI5hDfSm5mZQgUAP145fuOiWZZ%2FsGB1woSUIF%2FpEcpv9V%2FmQbPFqptkx1tg5qoAL893svqsTyFaNzrSUTOQkcYJZcjK2jJOq%2F4IcA7ik4svSG%2BLNLB%2BC1knUUCPRYc%2F%2FiTEKiWuKqavVJNLq%2FdLRfJpayt%2BdZmBDirVKCctfdRllMGx&X-Amz-Signature=5937aa002f30338e26af61eb961c5bf56a495af6f36da7ef6a42c8e57f88351c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HU5V6Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjyeGllYma9tyLhBFI0xCg25L7GEM8t9rdSxa2%2B0tGIQIhAJl%2FtBy5mVDbGFxSWCsMV6mxSuA0ZPpWaFLL2d5eSW4UKv8DCEcQABoMNjM3NDIzMTgzODA1IgzN560S7J5lLTlpqt4q3ANbckhLjpASB%2FB5M76iYJejJhwi5s0lsE5BZo5XnPbVSTcIt9FKxhbXP6cYjTQSKw%2FTf2ZbuB7DR%2FVw2rd5m7LVf5LLpeE4alauwir91KVOnckuks1pjDg4J9Yy0QkB7ltA8cCcR6rvXO3JI1fPuoONOnpkf0upkST6SnhfoI7C0yXWJ3gAzQx8az3mOAwfIRDCPsNViSHJqq%2BEIUdl05hqPabljJrOqhi497cf8s28BgSWB0z3piws9wYWZYv%2B%2BR1VmJFjwOGS8rAijHKa63mMawgqvi8Pz96t1IZi6eoSJC8rWjWIbxM93WZarGWw3hpxFlW7EWzm2BTCdEoBLofNg5bkyVp%2FK%2FE5GSyqoeOBbcLrltSRFWaB1iTNuGTk7DKn6TsM%2BY1tgsE1%2FzZzsMq8g2rcpNdWruI8Y%2BzmEFruGSbrfSHtfLRumyWmNrA3Dvn0PL3jtvZdansR3%2BLb1pO7hb%2FIXQ50CaklbhuUhTR%2Bccj7eZJjmZ6nIz7xU4EWxzt2nwgk7ogZFK1BMni6WydDrMi10f2yGV7pKtP1QBIlLF8OfRzD1u5zZVOVqqsQFj6y2AvQCApFzv0rPSCqzgLL%2BAVYslrogrEAA0IFTSMARWQ5ApuzEj44NkYtSTDFoMbJBjqkAZiC2Yfunq2w7j656MWmXKdy77YkkI%2BOTHev9HvJexkVhxI5hDfSm5mZQgUAP145fuOiWZZ%2FsGB1woSUIF%2FpEcpv9V%2FmQbPFqptkx1tg5qoAL893svqsTyFaNzrSUTOQkcYJZcjK2jJOq%2F4IcA7ik4svSG%2BLNLB%2BC1knUUCPRYc%2F%2FiTEKiWuKqavVJNLq%2FdLRfJpayt%2BdZmBDirVKCctfdRllMGx&X-Amz-Signature=d7206bc5060745c9542ff35521bcefc848f5f3fc3b961020516f086fbbb27501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
