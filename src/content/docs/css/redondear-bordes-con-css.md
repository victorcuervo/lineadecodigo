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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5JRBSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0K85N7UUj8w4%2FsbPJTtwK%2Boov73m09CTYGcOm4RLzSQIhALB4rcqThjIiVCsJiBWehH4UWW23b9GfmEkP8W%2FcoKfiKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP8t3QGKwirL3cw7Aq3ANry3Zmjk2MsTqj63GWQWtq%2BOC3b4rkdP5oH6wGQcAK6iM2D7bnWqq4K71sYlVTSP9CznJSdtUoU7uNqlRSbmPrnuHeZeMJlHtu67hHXiFyND8nVEt%2BAHEucQj9OFiV5ZZybBlJvRolXjBtHDAlGCBhLJfM2%2FF5pEDXfZvlOH6qw2L8a1jOtXGiFf5kKDfo7XaTMcCEMK3T36h02PdiiO53gbz%2B7Lk%2BZZwxVF8eHvkDkRx39cRyXn1W%2BBwr43mnbdIGBQKZSxEeV1ORj08XpjpNUT1Un%2FGGRyydi8vONrVrdHzfVBNs6HT8fSjqtPwp1Pw%2Bnwe8Jrd5eVKvmKwl8dng9JUXA3TTp04uQBIUNwRmdmdprYL7sBhw%2BfqiLhQSInme6Yy9sBdDtJAK%2FRwPNN1AgY6TgRL3aRHgrmUGtsXLrOu9An%2BqYAlSBGkzQT%2FXWbJwnxZ8664Oy7pyUsFUp%2FaFgYJmMI4Eb9Sgyf6Tl7aNdgBQdELKnnOlpjzHAP2zg2LKauMo9Rak3D%2BJ0OJPlQquXAncND9dqweZO8qgW4UqlHbiVayLISxwweaGmP%2FeTUp%2BnDo9873DY%2Fqu%2BZ9ajeAZt%2BWHuWF0Nujdi%2Bsjc2Bw0BjAhx%2FAUzz3cvM1JDD5j9vJBjqkAdzlwGUjJxPi6ox%2FfsqbH8nRkGdR6zWPHdEQomh6JtiqcYR7UzpuS2EHXi4y5z2F1sXM5gXbr5rz5oxZ317HjaIkd49p7JjGfSG7QsPfaRYYcYCtd7axNPegvh6fuBzAgneFNZr%2BVN3uds0s3EcvEuKgh3QH5IBr3iLhTya7syxoFXc%2FM2Q9LOoqCKbDpbKDfH048tVgPbkAwzUHJQoOIWXAtdbz&X-Amz-Signature=da12e860643f77869d2330710dcba93e02409946ca983838766845e9ff617647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5JRBSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0K85N7UUj8w4%2FsbPJTtwK%2Boov73m09CTYGcOm4RLzSQIhALB4rcqThjIiVCsJiBWehH4UWW23b9GfmEkP8W%2FcoKfiKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP8t3QGKwirL3cw7Aq3ANry3Zmjk2MsTqj63GWQWtq%2BOC3b4rkdP5oH6wGQcAK6iM2D7bnWqq4K71sYlVTSP9CznJSdtUoU7uNqlRSbmPrnuHeZeMJlHtu67hHXiFyND8nVEt%2BAHEucQj9OFiV5ZZybBlJvRolXjBtHDAlGCBhLJfM2%2FF5pEDXfZvlOH6qw2L8a1jOtXGiFf5kKDfo7XaTMcCEMK3T36h02PdiiO53gbz%2B7Lk%2BZZwxVF8eHvkDkRx39cRyXn1W%2BBwr43mnbdIGBQKZSxEeV1ORj08XpjpNUT1Un%2FGGRyydi8vONrVrdHzfVBNs6HT8fSjqtPwp1Pw%2Bnwe8Jrd5eVKvmKwl8dng9JUXA3TTp04uQBIUNwRmdmdprYL7sBhw%2BfqiLhQSInme6Yy9sBdDtJAK%2FRwPNN1AgY6TgRL3aRHgrmUGtsXLrOu9An%2BqYAlSBGkzQT%2FXWbJwnxZ8664Oy7pyUsFUp%2FaFgYJmMI4Eb9Sgyf6Tl7aNdgBQdELKnnOlpjzHAP2zg2LKauMo9Rak3D%2BJ0OJPlQquXAncND9dqweZO8qgW4UqlHbiVayLISxwweaGmP%2FeTUp%2BnDo9873DY%2Fqu%2BZ9ajeAZt%2BWHuWF0Nujdi%2Bsjc2Bw0BjAhx%2FAUzz3cvM1JDD5j9vJBjqkAdzlwGUjJxPi6ox%2FfsqbH8nRkGdR6zWPHdEQomh6JtiqcYR7UzpuS2EHXi4y5z2F1sXM5gXbr5rz5oxZ317HjaIkd49p7JjGfSG7QsPfaRYYcYCtd7axNPegvh6fuBzAgneFNZr%2BVN3uds0s3EcvEuKgh3QH5IBr3iLhTya7syxoFXc%2FM2Q9LOoqCKbDpbKDfH048tVgPbkAwzUHJQoOIWXAtdbz&X-Amz-Signature=23d33674c61ece35127c1dc1d35b5fb83e521c21a0bbb69c8719c2866befcb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
