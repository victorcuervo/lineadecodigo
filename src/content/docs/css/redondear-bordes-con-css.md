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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJ2Y2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIALQaG%2FX2J4hwzS0aJc1tsLlmeuumaI7omsxVRF8KUGzAiEAu7wUtuirdtZQW3pfM0dXKGs5Q%2Fx3xwVin9r5q8isHAoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPWVm4O9m5SVab%2FsVyrcA0xqM2d5QaDz7z9WMusLJbanD7WZM43VK5lWC7lFRTnOyvHS1Fj%2B4FK6EdHzXNNLKnr%2FoxX58naPLPo74zbyBVC8AVicGWrlsumvJfd%2BRSqUiFAbKikydUoSTxgMbF%2F%2Fscd%2FcqtBqXvMMwDYaBdouriy4z%2BPZ8lL19gYxWj%2BiNv%2BET8edFWWdoZevCx2BimQu6L8DQajpcLh%2B3O8vQHKjjtbbJoLUVJfP%2Fg58PSOQvkzBmV7EkciOvDSdJizrPKHKG6tHZBjgVANxqTMOOXNBzlmEL03j1z6GZckMWn6b1BGDk5hYS8usb%2FRTdwlTfHzvh2EUvmY5MysB0uJbxGhqLaY770lCwclcEKB4hPCS4P1aRr7G2b687x9L2wHVlqCtiXPVTawhLSxrHCHQhiXvMj8pTAX7uXRteSRal8IZ3NqOvcUO2%2Ft9B7XOSUFAqaFvRvJK1yyq9ZKJmn691zpndVtjxip%2FCNeNvx6XIHruA%2FObD0xkb9hBBVxc5kOC5utvzxMbUTUP0wRWhmxez7uJ16YP65%2FPfUHP147zdQvMlnQ0V9qaMq0jSiJCT1%2FaGS3l0d0DClRmODzY6mQl9i%2FoIK1Z4pg9c7sy7fimrIVnaZCE8gyXymk7BEfmKMgMID4wskGOqUBMtU1nIKukAccPY1XZBDQPbFf0akmsREQ5lljSpL5QhHsqkgroNdBJznO7hkTcN9SFxUDS3HFGZkof9Qgt3ywXQIC0llqZvDyjomcLucHJyaVrdvhQGOaJhtz4BNvLwEC1oGKkAUX8Dp1JmyhPsfx4jXDIEfLiDivGlPws%2BFDePBv0q6OdxXrvHhn4SIvYJjsSt3UKkyKhE2tbwsjmIWxU3yNVafc&X-Amz-Signature=915b75419613e9d7aa36f6e61e35026dfa4e785750f36c36b52bf7eb4e8cb9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJ2Y2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIALQaG%2FX2J4hwzS0aJc1tsLlmeuumaI7omsxVRF8KUGzAiEAu7wUtuirdtZQW3pfM0dXKGs5Q%2Fx3xwVin9r5q8isHAoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPWVm4O9m5SVab%2FsVyrcA0xqM2d5QaDz7z9WMusLJbanD7WZM43VK5lWC7lFRTnOyvHS1Fj%2B4FK6EdHzXNNLKnr%2FoxX58naPLPo74zbyBVC8AVicGWrlsumvJfd%2BRSqUiFAbKikydUoSTxgMbF%2F%2Fscd%2FcqtBqXvMMwDYaBdouriy4z%2BPZ8lL19gYxWj%2BiNv%2BET8edFWWdoZevCx2BimQu6L8DQajpcLh%2B3O8vQHKjjtbbJoLUVJfP%2Fg58PSOQvkzBmV7EkciOvDSdJizrPKHKG6tHZBjgVANxqTMOOXNBzlmEL03j1z6GZckMWn6b1BGDk5hYS8usb%2FRTdwlTfHzvh2EUvmY5MysB0uJbxGhqLaY770lCwclcEKB4hPCS4P1aRr7G2b687x9L2wHVlqCtiXPVTawhLSxrHCHQhiXvMj8pTAX7uXRteSRal8IZ3NqOvcUO2%2Ft9B7XOSUFAqaFvRvJK1yyq9ZKJmn691zpndVtjxip%2FCNeNvx6XIHruA%2FObD0xkb9hBBVxc5kOC5utvzxMbUTUP0wRWhmxez7uJ16YP65%2FPfUHP147zdQvMlnQ0V9qaMq0jSiJCT1%2FaGS3l0d0DClRmODzY6mQl9i%2FoIK1Z4pg9c7sy7fimrIVnaZCE8gyXymk7BEfmKMgMID4wskGOqUBMtU1nIKukAccPY1XZBDQPbFf0akmsREQ5lljSpL5QhHsqkgroNdBJznO7hkTcN9SFxUDS3HFGZkof9Qgt3ywXQIC0llqZvDyjomcLucHJyaVrdvhQGOaJhtz4BNvLwEC1oGKkAUX8Dp1JmyhPsfx4jXDIEfLiDivGlPws%2BFDePBv0q6OdxXrvHhn4SIvYJjsSt3UKkyKhE2tbwsjmIWxU3yNVafc&X-Amz-Signature=b397e8ef58355cc4276150b7f910556465de84a6078f17f987249670a5f794f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
