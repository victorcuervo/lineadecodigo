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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCAGGKK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSwjBesPBapSlUNBQ8SvjixlwUpnfzXyj6T6lQ415TxAiB0bRH8ystlpXMVZkcDCtts82ppk3KRYjjWpJ%2FQHbx8%2BCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMHcSugCDBFdtGLzaiKtwDvyv%2BwedfkyHZ4ls3eHaY9yA%2BKIDV3WYIuu88MKbJAEqWc6ygdAJlcA%2BJVrlw75jOiIQKlyGDfwODaZPdYczjMy8%2FFflR%2BNo4Xu36FMqKK9SpGrS2peOZ67e5PaDdXVvCLanrf9b7o2a44PaIXOQdDdWxKZO0xymdgDPYwfQlZfgwJw2kXHjCWvtIDOVNcZAjwqrYEeCpOTHucBgrSYTJoIpycOfG%2FS%2F4Qr0yFv5RIyOBrhUya2gmULBrpATTUh9vqMNlwBdP0VIzM6t%2BvpjWlgQDFOoJm6IA1oUoQ31WLxLf4TgKfqQuls84fyLMwqvxg3LxrI8%2F0RIG2kbxis1pazOfSoUNDs3Ot4d%2BWcJKkRMiXRJbx7nqO5JfJjxG41XoasdRgjCjLTGuUPYTWgmcqC59qqMyCxHooWs3fDJ2pOLaJOzmZj22QWXgyu8pS%2FxVF3FPAkbKo%2FaX6hSVM69y5HFa0jYTuG9K%2Fnwz%2BHYePaeIW1Ogl0matJ41%2FM3sJjkzzCphfazP3wO4M9%2Fq6TEo5OYGhs%2FgVn0FUyujozLv6fso3VYFAFlpU7ye5Oxg6Otr6ryqnSHeTmA0GJA2mRpOM1cCJYgd23Me%2BEnB%2BMVIVkRAwctY6v4LHJDs8Ccw7e%2BJygY6pgGpXJcdMkLidk5iFxdNkFd2RsXexyj1Z%2FWVHkKy50J%2F8s5Nznc%2F47C3oB%2BioNu%2FwdyL4R7W3nB1psAtTddU8vuCnkHErO%2FQ2%2F2ilUdO%2FNh0Lb3C%2BT0%2BRCSxP87mqTFN%2F%2BnMLAVYKDnzOlHk%2FLv47Kz8y6lafCGnUObdUKHx2rVGG%2F9G85HLkL1bpTYaaqvDfk9cWmtJCDGrPYlxnCBU5N97nDJzG5dn&X-Amz-Signature=c42ad6b3db56c18f1f4bdf7513576f7df47c4438086a831b03862690e3e55aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCAGGKK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSwjBesPBapSlUNBQ8SvjixlwUpnfzXyj6T6lQ415TxAiB0bRH8ystlpXMVZkcDCtts82ppk3KRYjjWpJ%2FQHbx8%2BCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMHcSugCDBFdtGLzaiKtwDvyv%2BwedfkyHZ4ls3eHaY9yA%2BKIDV3WYIuu88MKbJAEqWc6ygdAJlcA%2BJVrlw75jOiIQKlyGDfwODaZPdYczjMy8%2FFflR%2BNo4Xu36FMqKK9SpGrS2peOZ67e5PaDdXVvCLanrf9b7o2a44PaIXOQdDdWxKZO0xymdgDPYwfQlZfgwJw2kXHjCWvtIDOVNcZAjwqrYEeCpOTHucBgrSYTJoIpycOfG%2FS%2F4Qr0yFv5RIyOBrhUya2gmULBrpATTUh9vqMNlwBdP0VIzM6t%2BvpjWlgQDFOoJm6IA1oUoQ31WLxLf4TgKfqQuls84fyLMwqvxg3LxrI8%2F0RIG2kbxis1pazOfSoUNDs3Ot4d%2BWcJKkRMiXRJbx7nqO5JfJjxG41XoasdRgjCjLTGuUPYTWgmcqC59qqMyCxHooWs3fDJ2pOLaJOzmZj22QWXgyu8pS%2FxVF3FPAkbKo%2FaX6hSVM69y5HFa0jYTuG9K%2Fnwz%2BHYePaeIW1Ogl0matJ41%2FM3sJjkzzCphfazP3wO4M9%2Fq6TEo5OYGhs%2FgVn0FUyujozLv6fso3VYFAFlpU7ye5Oxg6Otr6ryqnSHeTmA0GJA2mRpOM1cCJYgd23Me%2BEnB%2BMVIVkRAwctY6v4LHJDs8Ccw7e%2BJygY6pgGpXJcdMkLidk5iFxdNkFd2RsXexyj1Z%2FWVHkKy50J%2F8s5Nznc%2F47C3oB%2BioNu%2FwdyL4R7W3nB1psAtTddU8vuCnkHErO%2FQ2%2F2ilUdO%2FNh0Lb3C%2BT0%2BRCSxP87mqTFN%2F%2BnMLAVYKDnzOlHk%2FLv47Kz8y6lafCGnUObdUKHx2rVGG%2F9G85HLkL1bpTYaaqvDfk9cWmtJCDGrPYlxnCBU5N97nDJzG5dn&X-Amz-Signature=8d9f6389409db08708ed768bb3bd742c026c505162923919da262a12f453fb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
