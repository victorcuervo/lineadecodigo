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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAVUR4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlz4qAkLTRECg4zSz9vM5rNMlyqZg4uVJ9To4WjNbbsgIgHJ%2BV4rzXxUqcmOIHql%2BtCFlrBfXLf%2BjmNaOZ%2Fwo7XmwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFnv8AwWvWS%2BH1pjircA%2FVJiiwxJc0PcibskQPTgnGbFu7kf37QfaFZGZJnxP%2BPbMw2chU1FdDtD42acNy%2Bqbdm2110bxwQY3GeW1Ivieza3DN7Yj0Sftf%2F4CKDm0FLVIxG8%2BtN%2B4rz%2B2qnIha9RoahG8fxLQCZJaYQH3kpIyr2kyX8Ni2gzuQNFfoVPon5VcNWR54xMjL3KjJBZbc%2F1IhM9If4rWU2nFee%2FSV2HtLBFVT0ISPwQRKVKHAkRPNaWE8ZFy%2B%2BCCPATdpf7Qgdsk1WrZo%2FOqABu0c3Gg22WIgP5pnqNE7aczgzzat6ASqiHg02tMNhDBIbYmORCBjMFNDv8ZL0c3OdTuFR7W2Vn8iYbBOcpvdWGq6GjVun9tRg1Pn36HSgMK91oUUc9wHfPubBZTMwKKadzdkMASTtkPkU7Sh9qF4AbkYuP9Bo5wEXGjie%2BAWPenYYUDA4OHUA%2F8bHEpLJGCSBiVIJTTEVK5v622zktd9Mbphzu0VsZ6DiVIg%2Bwl47icadOlF163czFvpzTCLFiCmYlfq8HZ9GUGHxhn4f3WBrkSPqbtNGGX2YdcyfLrarEdCFu0Sr94rF2BvjnW4IchehTbqn36%2B5leN1PLFn4EYnRzROXC0wWGqLmuAy00I%2Bvum0c5ipMPbt2ckGOqUBm%2B0p3EzBtgHTDULTh4bA9n0MFKfviuBHHU%2FHIPuDAvdgAGvhtrXTA29VwZ91qmwMQ5hp1XZCVPkFb9%2B2FkRYSqS29yTVXJjK15lw6ecupO5NYAA6K3Is7vf3SXc4YcSpRRU9u2LaRBQ%2B3XKJ5wYB4HQGzjqdwWN5m9xVZfyWQiVM%2FDJQtKOjKD7dgJ8OwDdoSA2I%2Fl%2BTtjbppaw2Vbju4JelWVDm&X-Amz-Signature=25d28d6667cb7411190685446c1c1edfc6c3de7fa42065d63fcccc170ad79f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAVUR4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlz4qAkLTRECg4zSz9vM5rNMlyqZg4uVJ9To4WjNbbsgIgHJ%2BV4rzXxUqcmOIHql%2BtCFlrBfXLf%2BjmNaOZ%2Fwo7XmwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFnv8AwWvWS%2BH1pjircA%2FVJiiwxJc0PcibskQPTgnGbFu7kf37QfaFZGZJnxP%2BPbMw2chU1FdDtD42acNy%2Bqbdm2110bxwQY3GeW1Ivieza3DN7Yj0Sftf%2F4CKDm0FLVIxG8%2BtN%2B4rz%2B2qnIha9RoahG8fxLQCZJaYQH3kpIyr2kyX8Ni2gzuQNFfoVPon5VcNWR54xMjL3KjJBZbc%2F1IhM9If4rWU2nFee%2FSV2HtLBFVT0ISPwQRKVKHAkRPNaWE8ZFy%2B%2BCCPATdpf7Qgdsk1WrZo%2FOqABu0c3Gg22WIgP5pnqNE7aczgzzat6ASqiHg02tMNhDBIbYmORCBjMFNDv8ZL0c3OdTuFR7W2Vn8iYbBOcpvdWGq6GjVun9tRg1Pn36HSgMK91oUUc9wHfPubBZTMwKKadzdkMASTtkPkU7Sh9qF4AbkYuP9Bo5wEXGjie%2BAWPenYYUDA4OHUA%2F8bHEpLJGCSBiVIJTTEVK5v622zktd9Mbphzu0VsZ6DiVIg%2Bwl47icadOlF163czFvpzTCLFiCmYlfq8HZ9GUGHxhn4f3WBrkSPqbtNGGX2YdcyfLrarEdCFu0Sr94rF2BvjnW4IchehTbqn36%2B5leN1PLFn4EYnRzROXC0wWGqLmuAy00I%2Bvum0c5ipMPbt2ckGOqUBm%2B0p3EzBtgHTDULTh4bA9n0MFKfviuBHHU%2FHIPuDAvdgAGvhtrXTA29VwZ91qmwMQ5hp1XZCVPkFb9%2B2FkRYSqS29yTVXJjK15lw6ecupO5NYAA6K3Is7vf3SXc4YcSpRRU9u2LaRBQ%2B3XKJ5wYB4HQGzjqdwWN5m9xVZfyWQiVM%2FDJQtKOjKD7dgJ8OwDdoSA2I%2Fl%2BTtjbppaw2Vbju4JelWVDm&X-Amz-Signature=c63ac0c5f015ca9242724a8cada9462087b6eb432c6271458201c6783699bb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
