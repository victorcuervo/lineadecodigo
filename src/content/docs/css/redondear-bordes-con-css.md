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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMWFY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRw8Rf8OgTYHTMgWF9pBsLN7LSsw5ngu3%2BN0aDquw9QAiEA5YR2lndLAKlQrd6mwhcLG55gnQBfeLH0M%2FotqGpXp1sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDj0BfWrv2p7UQxpzSrcAy722dFKbvGku0Ou1%2FF%2B9dh6yUlrQx5gOFQ90IpB0ga%2F8D%2F7Wm9HvNApS8S91YOrln10W1%2FAosbqvXmWCOIfC8NR10gMiHlSRtkF14ZT%2BoZZ5G5oOU9ld%2B0PWZu1ZNKPdj9AwLQinr4x7EfYGQZmKZmtL7opQp%2FyHHbdw9fCjkiZfzxXp2q1IG0Na8uw1UD22a0djzvnKcdCbKnwHNqeB1UIDFblek5n7hJCRt%2Fr0CNBEYbqv2zCmRrni0qLcbAbvvkhTAFs4YUA42ib4EABCnBlHJU0qJPeQPY37EqsxU8pDsvVZLSokYV2gH%2BLIo3ADcDB%2BPsqt%2BqeWonVULJVEwA5aV4%2FZ2qQCEzVM9u%2FaeGTlXp%2FZMI1zs9zA%2BAHLEv8JTWPl1EHVgk05JstZbeqPeg4JLM1hdq3Har%2B3EdmcA%2BE4XaKJH1vnTHIKzQu8FxuFcXIGOE8mnMkWu2ucTQ6CjI3hhtrAfyxH6GRQ7TziXFkpQKiQojGX%2FXEgf4qB0zkpKswpXkl8M8UBHrv71BN8FoJCmno%2FJ0D%2Fa%2BU3yHFDgx9KVcewRsTrQLZgbljr4oCMY%2FHNjEhvWxnveLT7Wze8j8VmX60MUoMo5cS3dSZu82%2FtRkySJr9DcXHQ6yJMN6MyMkGOqUB34s28C9t3PAWouFYAYIlFkrxBmvWTO02gMwVUv%2BnV0JG718Eu4Hc8Gbr1kmfikqT%2Ba7KwEDslNgA3CrndSOsKbnRAZol8U57147Hdih1rEPQ4pxG7%2BEMEOPFtOy5g%2FWaTyzkYfWSer0%2BLPmRqQVhxQnzA8rLZU4gWGOfQr5qcqy9EKotK%2BbG%2BjMMtTwA%2BwTZWgoonN2DAklPdQd9GG8HRaxNoIW8&X-Amz-Signature=d7a31f0d9d25c33bfeebada7d4408af7ab0a09a2da23bf7ef9dfc5b10598b5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMWFY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRw8Rf8OgTYHTMgWF9pBsLN7LSsw5ngu3%2BN0aDquw9QAiEA5YR2lndLAKlQrd6mwhcLG55gnQBfeLH0M%2FotqGpXp1sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDj0BfWrv2p7UQxpzSrcAy722dFKbvGku0Ou1%2FF%2B9dh6yUlrQx5gOFQ90IpB0ga%2F8D%2F7Wm9HvNApS8S91YOrln10W1%2FAosbqvXmWCOIfC8NR10gMiHlSRtkF14ZT%2BoZZ5G5oOU9ld%2B0PWZu1ZNKPdj9AwLQinr4x7EfYGQZmKZmtL7opQp%2FyHHbdw9fCjkiZfzxXp2q1IG0Na8uw1UD22a0djzvnKcdCbKnwHNqeB1UIDFblek5n7hJCRt%2Fr0CNBEYbqv2zCmRrni0qLcbAbvvkhTAFs4YUA42ib4EABCnBlHJU0qJPeQPY37EqsxU8pDsvVZLSokYV2gH%2BLIo3ADcDB%2BPsqt%2BqeWonVULJVEwA5aV4%2FZ2qQCEzVM9u%2FaeGTlXp%2FZMI1zs9zA%2BAHLEv8JTWPl1EHVgk05JstZbeqPeg4JLM1hdq3Har%2B3EdmcA%2BE4XaKJH1vnTHIKzQu8FxuFcXIGOE8mnMkWu2ucTQ6CjI3hhtrAfyxH6GRQ7TziXFkpQKiQojGX%2FXEgf4qB0zkpKswpXkl8M8UBHrv71BN8FoJCmno%2FJ0D%2Fa%2BU3yHFDgx9KVcewRsTrQLZgbljr4oCMY%2FHNjEhvWxnveLT7Wze8j8VmX60MUoMo5cS3dSZu82%2FtRkySJr9DcXHQ6yJMN6MyMkGOqUB34s28C9t3PAWouFYAYIlFkrxBmvWTO02gMwVUv%2BnV0JG718Eu4Hc8Gbr1kmfikqT%2Ba7KwEDslNgA3CrndSOsKbnRAZol8U57147Hdih1rEPQ4pxG7%2BEMEOPFtOy5g%2FWaTyzkYfWSer0%2BLPmRqQVhxQnzA8rLZU4gWGOfQr5qcqy9EKotK%2BbG%2BjMMtTwA%2BwTZWgoonN2DAklPdQd9GG8HRaxNoIW8&X-Amz-Signature=692bc43f335f9d2d05732e1e6c108ad16d67d551bbb5e6981e27d6535453276a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
