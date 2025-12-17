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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFDCQVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg9nwpMxdLxVqZz%2FHmSTZ58jV%2F9mTzCgQE%2BHM4g90KzAiBFng3QDLIr9p9gyR8jMwZUMaqrTk7Qh%2FohF8zKoUOtOSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJ385Wi%2BcI7coVqjHKtwDFGRYRmH3%2F8r8NkC99yIHAYS0XNAb8iyb%2FmT5hZhXdIm8DGzV6qpjT8rNcQuL2%2F0fclpTdoylGLoJ%2F7onf8sPsKWQbgmyhFCE9qDU3WEtKrNeWCfd29H8SN6CYZXh36JTboceGOaU9UclJhysUd%2BHAjJqkq02AqcnFH%2BxfKU7K7Pl7ynNhFrRFrUeLW3N1SrhKxVxFn6%2BTSdaCkfXBxBF8GSjYMTXyrbCYXB8uC50SyAwKUZAv3gcsPCVbOjKkNj9k1mS8ZodvPM1L0TOjuCR8F7qCWP67%2BdBOuFbfIEXiFTtmEnolJ5VAWxmfKhqDmAkFYXmKzbcIAD6pr8B6aex0idzA3UddEv%2BesXw3p2Xllwgm94I75cG43r5RkKfkGxml6fMNUlamO%2Fz4GMoMDu4swDBsntOqI3p7Skmk9sL86bkktMwWYSxB848NVAuU%2FD4xGw9mxDgaNSoilfv5wLwBgZbjW8HAdnRTi9J7ZPhns8XWwbBGbwLeWrWqJYaJ4Qq%2BGZbrcpHbPycVQQG3h2uvflISbedPY5ZRdeIARhcZRtbdbMaCl9LV3fN%2FBKRgfhOjz0TW5gpWzx0Q%2BHmUawJy7YNxVvFkXnZ8KCZm%2BCpfkY3xiG7JNPbROk5Kf8wmfuHygY6pgHLDn2nNDZ0hxpIOF%2B5TFzEztwqswn5cn5apT%2Fr2vDoXod%2F0BZGGh2Vmq%2BcqtDpHgUj5BTGeP%2B71h3oCuBYAyjuS9JOmjsXxpPCwP3%2BpOS9PK1M%2BeskcUXYYkQLtEhbgsr6CAK5GpTN%2FxrrwIDKlNGA8thDPMyHL8DMis%2FUdZ4TFTLhaB4pTFv4QqCZsX%2BEXr01p6ZkcXXYZEiBaZBoogC1g8beIv6q&X-Amz-Signature=217f7452862cea0e388df742d97324b5c075332c1bc5b7f4e8870aec67340bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFDCQVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg9nwpMxdLxVqZz%2FHmSTZ58jV%2F9mTzCgQE%2BHM4g90KzAiBFng3QDLIr9p9gyR8jMwZUMaqrTk7Qh%2FohF8zKoUOtOSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJ385Wi%2BcI7coVqjHKtwDFGRYRmH3%2F8r8NkC99yIHAYS0XNAb8iyb%2FmT5hZhXdIm8DGzV6qpjT8rNcQuL2%2F0fclpTdoylGLoJ%2F7onf8sPsKWQbgmyhFCE9qDU3WEtKrNeWCfd29H8SN6CYZXh36JTboceGOaU9UclJhysUd%2BHAjJqkq02AqcnFH%2BxfKU7K7Pl7ynNhFrRFrUeLW3N1SrhKxVxFn6%2BTSdaCkfXBxBF8GSjYMTXyrbCYXB8uC50SyAwKUZAv3gcsPCVbOjKkNj9k1mS8ZodvPM1L0TOjuCR8F7qCWP67%2BdBOuFbfIEXiFTtmEnolJ5VAWxmfKhqDmAkFYXmKzbcIAD6pr8B6aex0idzA3UddEv%2BesXw3p2Xllwgm94I75cG43r5RkKfkGxml6fMNUlamO%2Fz4GMoMDu4swDBsntOqI3p7Skmk9sL86bkktMwWYSxB848NVAuU%2FD4xGw9mxDgaNSoilfv5wLwBgZbjW8HAdnRTi9J7ZPhns8XWwbBGbwLeWrWqJYaJ4Qq%2BGZbrcpHbPycVQQG3h2uvflISbedPY5ZRdeIARhcZRtbdbMaCl9LV3fN%2FBKRgfhOjz0TW5gpWzx0Q%2BHmUawJy7YNxVvFkXnZ8KCZm%2BCpfkY3xiG7JNPbROk5Kf8wmfuHygY6pgHLDn2nNDZ0hxpIOF%2B5TFzEztwqswn5cn5apT%2Fr2vDoXod%2F0BZGGh2Vmq%2BcqtDpHgUj5BTGeP%2B71h3oCuBYAyjuS9JOmjsXxpPCwP3%2BpOS9PK1M%2BeskcUXYYkQLtEhbgsr6CAK5GpTN%2FxrrwIDKlNGA8thDPMyHL8DMis%2FUdZ4TFTLhaB4pTFv4QqCZsX%2BEXr01p6ZkcXXYZEiBaZBoogC1g8beIv6q&X-Amz-Signature=3a44ef7afc89c2c6ce063868b6e4eba38dc5bd3441445925f0f7c801d493a844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
