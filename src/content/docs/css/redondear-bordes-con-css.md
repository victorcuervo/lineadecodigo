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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMAI5IM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe%2Fin6YNLrP0ApyKzNKVQ2aKxMSgD2vBOKON%2F4DMHImAiEAtghuSdb5lnJJnEffLIQsx%2FRbU3%2BUGGSD98mHe7P4l2Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH61hAV16ZnDxk0lfircAzfhrasEEj9qS5J8yJN1q9YkIiqI8q1fnfV0Bjo7IpmKAZp8iOyl3WSX0Y2fSM7g8dLZfS1BdiXuhJRHEaemGnFpUGwIvclLqKJI%2FQkwRHu2xjAXjKBM1n0KBOhQNNwzGeR536GsH420kw9Cf0XmhGGo%2FrfmNKA125WiB7Ldn%2B2TgBo40cnIER232zXK5Y8He4Nhy15P19%2FF%2FHTOWmuU5JHxgGO5cQHzgKCmJXHKUu8IDBqbqc9KLE7PfsV80TR6TkQ622nXmLk%2BOGGzAi6k4d%2BQWVoryXMF4CsA%2B2BxbZ7siUtF3Qo74YVYFnX%2BlrhoFxonszsC7Nhj6fSKLerQLPEH40HJmxlLh0SlSv0OFI4Iw2GbKVEBEZfzFefvhvfa92zIV3XoZjAuhWWT6LyuQNod1TTYEQPX32sgPnyOCtu48u7kmJAoaYpw%2FmxIypmZLk4zpbcTQa85CZ8upp4Id7BvwD8bfQjCJfHhyXhNXz6mKhpe8PKpRhT48diDniEmd4TTP46WbCWf4NFP61cv6BgJiCVXb0kzD2y5JCMFLuPoo8IzOfwjSQcew%2BwrsDTGqw7DTwHKlMiphlKHjotbgN8qwDEfvjefZOVZt6yYgnC1exuGKaHLu9fHSPz%2FMKSm0MkGOqUBRFSvqU7%2B5EwVfgAGu02gkffTmTx0iVYr6ciaQVD9crTJGL1Z4KEXJ8DGydnkXLEYIuyC3BLKP9EE4gKofxjc4usmOIS75U%2FBcUXwDOICkF2biWFDuTf9bmRiWIIM9kBfFEplbewAWXBsOZO0A4YdJlMVCeUB1i%2BsZenRpadb3eYmUN4cp9y%2FHpewtGzy6QImBFCG0Y84oBxbG4ecIjiL9dEr6SEA&X-Amz-Signature=0290cdeb9cd29224ee4b66bdfd08862c1d9505d9cd76ed994a17235f0fdc4deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMAI5IM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe%2Fin6YNLrP0ApyKzNKVQ2aKxMSgD2vBOKON%2F4DMHImAiEAtghuSdb5lnJJnEffLIQsx%2FRbU3%2BUGGSD98mHe7P4l2Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH61hAV16ZnDxk0lfircAzfhrasEEj9qS5J8yJN1q9YkIiqI8q1fnfV0Bjo7IpmKAZp8iOyl3WSX0Y2fSM7g8dLZfS1BdiXuhJRHEaemGnFpUGwIvclLqKJI%2FQkwRHu2xjAXjKBM1n0KBOhQNNwzGeR536GsH420kw9Cf0XmhGGo%2FrfmNKA125WiB7Ldn%2B2TgBo40cnIER232zXK5Y8He4Nhy15P19%2FF%2FHTOWmuU5JHxgGO5cQHzgKCmJXHKUu8IDBqbqc9KLE7PfsV80TR6TkQ622nXmLk%2BOGGzAi6k4d%2BQWVoryXMF4CsA%2B2BxbZ7siUtF3Qo74YVYFnX%2BlrhoFxonszsC7Nhj6fSKLerQLPEH40HJmxlLh0SlSv0OFI4Iw2GbKVEBEZfzFefvhvfa92zIV3XoZjAuhWWT6LyuQNod1TTYEQPX32sgPnyOCtu48u7kmJAoaYpw%2FmxIypmZLk4zpbcTQa85CZ8upp4Id7BvwD8bfQjCJfHhyXhNXz6mKhpe8PKpRhT48diDniEmd4TTP46WbCWf4NFP61cv6BgJiCVXb0kzD2y5JCMFLuPoo8IzOfwjSQcew%2BwrsDTGqw7DTwHKlMiphlKHjotbgN8qwDEfvjefZOVZt6yYgnC1exuGKaHLu9fHSPz%2FMKSm0MkGOqUBRFSvqU7%2B5EwVfgAGu02gkffTmTx0iVYr6ciaQVD9crTJGL1Z4KEXJ8DGydnkXLEYIuyC3BLKP9EE4gKofxjc4usmOIS75U%2FBcUXwDOICkF2biWFDuTf9bmRiWIIM9kBfFEplbewAWXBsOZO0A4YdJlMVCeUB1i%2BsZenRpadb3eYmUN4cp9y%2FHpewtGzy6QImBFCG0Y84oBxbG4ecIjiL9dEr6SEA&X-Amz-Signature=3101e221b792fe77b72725a4eb0a2b8e3150e38b7b03d5f43402afd7f1c2f164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
