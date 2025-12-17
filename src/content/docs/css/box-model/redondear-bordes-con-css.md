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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ISEPL6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG5yZZyn8EagsjmrVh9Cy51wQIH7qrfOu3EjUggj8iqAiEAoCEq7Pz%2F404alQpANQ%2F7fU6jGcsB28RYriEYDAHDzRcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDObRcy9beLbYq%2FEC%2FSrcA%2ByGXQs8RDB0sau2JxGrBI9fZckCxDEfOygSKFbATZE%2FW8oU5vHtBLgvvTjkDDU%2F7hUTtSKDrv%2FI5hXhkZdUyShmASSvkUuD4Uwu%2F5sSH4fkKjT6pUZaTw6OFZWbuLZdBkPzeOXZuUM1o6Cm1lvzh25OHLo6Fxu6wZwzc3YLu8vT13kB5QNxYryh0cZdyyxr4VlyvhpGtlx4aArIFuq1OrTapMi%2BYh9lv%2FtWYc5NpAsAZL8zNJ5bSD8J%2B4fMrcbxXNRlAOfWlbY8ur2%2BuJqUkej0rbCA1ebwM40c%2F2JWaRnlr%2BPAQkmNyqdEU8lj96N%2B0684lqrEE3r1y8S3IRZmWk8C%2Bnl9xkWsgbP2ZiDOrUhbLoeSPv2EdX9qknD3rWjFqeuzpXWb36OqOtFKzjUNZxHIkCm%2FqHFldISYuj2X2wH7z3DK4qu6QncmPs3bMTIIaQRbnTPB1DICnYN5swiODDiVppU2JGZavKl9J3e0mk0lP7KKEUIYFtCdARsjKZh3pbNDlPFUgB2gCjOvo%2FDF%2F6MoEqKU6cPs2iaejBYhp%2B8UHjwJ%2F%2FdyTwn4ThTPSsmfOGautEx6LjuzunNPh%2Fx%2BYIu5kIghEV2YhI0dKrPIwew6q7D%2Bx8MYlu4wIb2yMLiyiMoGOqUBS8rfgLv8WCBdw1wq5XCiKTUdUeyrIuKbey6SZ8HvuDM%2BYQGAVl5tOjBGMLxXcSJznzX40GI0JM%2BePpvDe9VVhxcZESOQpc%2BgKLG7AFiZdZt5zNFeNrd39%2FarHo9nMDaweatgKKio1MBMOoVDdq%2FwRV0jL4N5GaL7gARjNE7acv2T76peURNVA0HR1kTUlxxWyYLAu8I2pfSs3nk%2FB%2FKPW8t%2BG6Hk&X-Amz-Signature=d77b3b671c7328497842f65504b4367b6fdec006e122dd5931b5f30eaa05cb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ISEPL6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG5yZZyn8EagsjmrVh9Cy51wQIH7qrfOu3EjUggj8iqAiEAoCEq7Pz%2F404alQpANQ%2F7fU6jGcsB28RYriEYDAHDzRcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDObRcy9beLbYq%2FEC%2FSrcA%2ByGXQs8RDB0sau2JxGrBI9fZckCxDEfOygSKFbATZE%2FW8oU5vHtBLgvvTjkDDU%2F7hUTtSKDrv%2FI5hXhkZdUyShmASSvkUuD4Uwu%2F5sSH4fkKjT6pUZaTw6OFZWbuLZdBkPzeOXZuUM1o6Cm1lvzh25OHLo6Fxu6wZwzc3YLu8vT13kB5QNxYryh0cZdyyxr4VlyvhpGtlx4aArIFuq1OrTapMi%2BYh9lv%2FtWYc5NpAsAZL8zNJ5bSD8J%2B4fMrcbxXNRlAOfWlbY8ur2%2BuJqUkej0rbCA1ebwM40c%2F2JWaRnlr%2BPAQkmNyqdEU8lj96N%2B0684lqrEE3r1y8S3IRZmWk8C%2Bnl9xkWsgbP2ZiDOrUhbLoeSPv2EdX9qknD3rWjFqeuzpXWb36OqOtFKzjUNZxHIkCm%2FqHFldISYuj2X2wH7z3DK4qu6QncmPs3bMTIIaQRbnTPB1DICnYN5swiODDiVppU2JGZavKl9J3e0mk0lP7KKEUIYFtCdARsjKZh3pbNDlPFUgB2gCjOvo%2FDF%2F6MoEqKU6cPs2iaejBYhp%2B8UHjwJ%2F%2FdyTwn4ThTPSsmfOGautEx6LjuzunNPh%2Fx%2BYIu5kIghEV2YhI0dKrPIwew6q7D%2Bx8MYlu4wIb2yMLiyiMoGOqUBS8rfgLv8WCBdw1wq5XCiKTUdUeyrIuKbey6SZ8HvuDM%2BYQGAVl5tOjBGMLxXcSJznzX40GI0JM%2BePpvDe9VVhxcZESOQpc%2BgKLG7AFiZdZt5zNFeNrd39%2FarHo9nMDaweatgKKio1MBMOoVDdq%2FwRV0jL4N5GaL7gARjNE7acv2T76peURNVA0HR1kTUlxxWyYLAu8I2pfSs3nk%2FB%2FKPW8t%2BG6Hk&X-Amz-Signature=bf621030f37c40710bbe7f3acdee1eea4892393038ba32ca2f3813bac3e12293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
