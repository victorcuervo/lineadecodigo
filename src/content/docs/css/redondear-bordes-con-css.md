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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYOUKAJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJcYyhYPtUjRXDDWGJfdWlzBlhlYTA%2F0IvvXL8oQdy0AiEA8IYKvpZX3g0XKkSDY%2FDCPu0dTwuUSUnDEpXTalG3o4Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC6sfr6yqdA%2Fum0P%2FircA%2BvJcbN6PvAlRXdZnESM792gnG8FohYg%2Fj5kJrrb6sYAl9lPhGxK3Cjb4ztxmbHWxNS7M0Ym1s3f3GKq9B354%2BoCO95hTsSIj5oqRZprRRh%2BxRn1shH2O%2F8yni49iyYcLYEJO%2FYzfF6Zl1NCiBmRBF8TwCKjlPQphZ0TKKddf%2BKX72BiGIFcTCabEA1SX54deisyLGmaTK4B6F8pgNUWomSwhK8oFv8R%2F6p1tt0Xk1elgo1E2NYXXKBhpg6q6Z82L8oCITCdd6Xum8fRJ%2BUa8J%2BhGBXuEwiL6itgpUOb5P5Scqze6H1NrXFMg1%2BYeZiBQwXdNvbQ8CrNZ52nZi7mX0nr%2FTnDuVQsOkqWpoC3ZfMiGn11mkNvTylDpkI5SI0NBOPr%2BP4cGzl7jdUdiVVQcXn8SgY3olNxkeX7BJ6bwj5Ts9mLnqywevPhRrzRmRZ9ktB5MeUcPFqBGvXxP5p7fpMEFhgCyfGrGeeaUTT0VBmUa98jLlZLk6bC99wldco1ecFGooyoledZyMjGwB6JdhjPcogMBztmTB08voAtHX%2F7CO7Spbt1y9e0zQ%2B1DcamwCMJHpzXiKcb69JNPLWJEPW4WUGUWVcRRlAe4e9C58mSJTLqkgtG5PxZ0gj0MJzRyskGOqUB0PX9Lt2DH%2FKHKkdifd1gS9bnQO%2BKJByP925MlxvqCM93RlNXFOq4lw69pQ4t6Fu5O9bQvtuDZFc12JNVeGLNeJjNW3A8l2%2BobMT3ivKu1C%2B%2FlnnpUdWD2s94N64eeBoRsrzu5WcbupfrLlV9eTegLg8q3fB9taGjt%2Feo0GRicwGLgOu%2B8Dd7GkN4ChxcBl5o%2FUYkVVjtLzFK%2BpFSbz7WxfJCJWcD&X-Amz-Signature=15a6a87225834de1bccd38d3462ce9674dea14fac121c4cf73864217b994c203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYOUKAJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJcYyhYPtUjRXDDWGJfdWlzBlhlYTA%2F0IvvXL8oQdy0AiEA8IYKvpZX3g0XKkSDY%2FDCPu0dTwuUSUnDEpXTalG3o4Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC6sfr6yqdA%2Fum0P%2FircA%2BvJcbN6PvAlRXdZnESM792gnG8FohYg%2Fj5kJrrb6sYAl9lPhGxK3Cjb4ztxmbHWxNS7M0Ym1s3f3GKq9B354%2BoCO95hTsSIj5oqRZprRRh%2BxRn1shH2O%2F8yni49iyYcLYEJO%2FYzfF6Zl1NCiBmRBF8TwCKjlPQphZ0TKKddf%2BKX72BiGIFcTCabEA1SX54deisyLGmaTK4B6F8pgNUWomSwhK8oFv8R%2F6p1tt0Xk1elgo1E2NYXXKBhpg6q6Z82L8oCITCdd6Xum8fRJ%2BUa8J%2BhGBXuEwiL6itgpUOb5P5Scqze6H1NrXFMg1%2BYeZiBQwXdNvbQ8CrNZ52nZi7mX0nr%2FTnDuVQsOkqWpoC3ZfMiGn11mkNvTylDpkI5SI0NBOPr%2BP4cGzl7jdUdiVVQcXn8SgY3olNxkeX7BJ6bwj5Ts9mLnqywevPhRrzRmRZ9ktB5MeUcPFqBGvXxP5p7fpMEFhgCyfGrGeeaUTT0VBmUa98jLlZLk6bC99wldco1ecFGooyoledZyMjGwB6JdhjPcogMBztmTB08voAtHX%2F7CO7Spbt1y9e0zQ%2B1DcamwCMJHpzXiKcb69JNPLWJEPW4WUGUWVcRRlAe4e9C58mSJTLqkgtG5PxZ0gj0MJzRyskGOqUB0PX9Lt2DH%2FKHKkdifd1gS9bnQO%2BKJByP925MlxvqCM93RlNXFOq4lw69pQ4t6Fu5O9bQvtuDZFc12JNVeGLNeJjNW3A8l2%2BobMT3ivKu1C%2B%2FlnnpUdWD2s94N64eeBoRsrzu5WcbupfrLlV9eTegLg8q3fB9taGjt%2Feo0GRicwGLgOu%2B8Dd7GkN4ChxcBl5o%2FUYkVVjtLzFK%2BpFSbz7WxfJCJWcD&X-Amz-Signature=1f21007f8a5c7192bd7e735c2165094bbc0b7c9078656eeed27684add5539df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
