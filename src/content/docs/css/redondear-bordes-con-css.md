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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEH6YMB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO0YGpwYB0WwmkC2vDPE8jssLVj1JbH7KmuVD0mHTslAiEAmxL1rIIX2JYNxDKZbmIujAxtMDED1OFZIZ5NgH8n1cEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxOP4j64MVS0t2qXSrcA3anam69RQ93pNziBqAyFf5548w%2BHDcaDqeycCJo5P%2FOuVOJFckAzCcRs%2B7X4Y7l%2F7AlGKIZl6kHdwuzqxsTeKjaLSvWu8h3MGlp2SL9BSHR%2BeoV6cBG%2FFFrwS5g7P9HYkQa1APcQuf7RZ3e53r5eIszG1lOccNB2USAD%2FzEjKYoyNWeijx6wuzvmUKXwGuF8dcZxCrSKvQm3HcBbRF5kPX7o1k2j2MNb0tLbFUR0Pj8ZO9tCNh6bygtwtJHYt1SwPRvHjsq9wQxP2zRsgD%2FaKxGinhu%2B5j4c2Mczbam0N6PrnDNTm5z8id68%2Bef2TMJAoa4R2cnW8e217gf4gftSjDk%2FZI5Z0BNCxkznxkFMgiZqaGqXPbdE3BdS6Y%2FzP1ysMT4ygGe%2F6hdhaWZtVEnD0Q8NEo2rv2W%2BUFM80f3SQ6bxLeLme2xVKDNhQlOTDLi2cohQfFkaVmm2aJGDk4xdAmUqnPprJfXS0pX%2FoNQqUjox%2F%2FG%2Fu7Nmu6pdP%2FQa1b6C9vZqhWjaPPCdUeqGjRqhgDDIJRDGOJUVDXoLHZ3GRhwrO6smJHFMEJR%2BV6M0U0Xq%2ByVULXvtfmryBrN%2FMWETObnIGnCg1BpYYZxOxIKfQNuEKnFXT89GWQzovPvMJyi3ckGOqUB93qpwGRAYlY%2FZu1dddIF%2FYqMXYShSElypzjqSi%2BM4KKJl6O8h%2F5Y%2B9oEDGrHEGCHezkpg9FMuyOyMOjuEJQJI%2FOsw9Psn5h9r2Dyuv3oubDKlJ%2B4GYPUhhYDSl2WtyS9zVLWh5K2ojoApBgDM7Ck%2B5Mxjf4VedGrAQmeX2u1g4WiAMzMiUScgqY1EijtfF70FbjclM5AXkCMBx78L0svXj%2FoI64c&X-Amz-Signature=5383e5397ee0ac9dc78d91df784d86b772d25d0d18447f7bc834dc5911adbc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEH6YMB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO0YGpwYB0WwmkC2vDPE8jssLVj1JbH7KmuVD0mHTslAiEAmxL1rIIX2JYNxDKZbmIujAxtMDED1OFZIZ5NgH8n1cEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxOP4j64MVS0t2qXSrcA3anam69RQ93pNziBqAyFf5548w%2BHDcaDqeycCJo5P%2FOuVOJFckAzCcRs%2B7X4Y7l%2F7AlGKIZl6kHdwuzqxsTeKjaLSvWu8h3MGlp2SL9BSHR%2BeoV6cBG%2FFFrwS5g7P9HYkQa1APcQuf7RZ3e53r5eIszG1lOccNB2USAD%2FzEjKYoyNWeijx6wuzvmUKXwGuF8dcZxCrSKvQm3HcBbRF5kPX7o1k2j2MNb0tLbFUR0Pj8ZO9tCNh6bygtwtJHYt1SwPRvHjsq9wQxP2zRsgD%2FaKxGinhu%2B5j4c2Mczbam0N6PrnDNTm5z8id68%2Bef2TMJAoa4R2cnW8e217gf4gftSjDk%2FZI5Z0BNCxkznxkFMgiZqaGqXPbdE3BdS6Y%2FzP1ysMT4ygGe%2F6hdhaWZtVEnD0Q8NEo2rv2W%2BUFM80f3SQ6bxLeLme2xVKDNhQlOTDLi2cohQfFkaVmm2aJGDk4xdAmUqnPprJfXS0pX%2FoNQqUjox%2F%2FG%2Fu7Nmu6pdP%2FQa1b6C9vZqhWjaPPCdUeqGjRqhgDDIJRDGOJUVDXoLHZ3GRhwrO6smJHFMEJR%2BV6M0U0Xq%2ByVULXvtfmryBrN%2FMWETObnIGnCg1BpYYZxOxIKfQNuEKnFXT89GWQzovPvMJyi3ckGOqUB93qpwGRAYlY%2FZu1dddIF%2FYqMXYShSElypzjqSi%2BM4KKJl6O8h%2F5Y%2B9oEDGrHEGCHezkpg9FMuyOyMOjuEJQJI%2FOsw9Psn5h9r2Dyuv3oubDKlJ%2B4GYPUhhYDSl2WtyS9zVLWh5K2ojoApBgDM7Ck%2B5Mxjf4VedGrAQmeX2u1g4WiAMzMiUScgqY1EijtfF70FbjclM5AXkCMBx78L0svXj%2FoI64c&X-Amz-Signature=5dcee899dc32d9094647f75b898ac00c87e7a206c35e065013e0bb5c0ea74359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
