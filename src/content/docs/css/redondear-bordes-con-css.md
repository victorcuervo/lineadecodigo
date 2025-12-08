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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GUA3M23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEhm3Yt4I3D4PeW%2FqH8IcbgTOH1PSqS0qUjmj%2F5%2FO1TAiEAhCNgvAihl05tBDDE19UjxUO4dYwfWXtdYuEU46GTc8IqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWnhLoAPnEFWXzIICrcA8aGMWjXfXtOn0%2Begahz4l10Mbrwk8XyuqJu4%2Bg85oCfx6cspG2iMFiKcRMz4hJtXBJSaEuwY4NJ%2BX5X5ulqixPF3ym90tnDpXnGnLdxdZVUHaW%2BLFs0UGQrF3bXJVwbB%2FJ8Nvo4%2BlOjhNIOUtKb0uZDSNfdogvBeo99Y9UYboXEM2IY9oB4%2BZw3K4tUrTfCdC0LAe3Jx2uAJrWpogusuje0CzBZ92jbmQDG0kna1hmxjUaEGaQKUqYYUTCpr4RsnbdswW35KvY4kVJTibcs%2FVJvLQxF61m%2B1FSD1EscXe1dtzvBJdnEcCyLTxUx21CIBARTecukHeocKF3f4x1WWPo9eSstl%2F3qOqSy2bYSFEqBo3RCnrz%2Fy08w4GnRZv7rPeR4KtS33lj%2B3T3o9zWZrVtqBUY7lpVYmFZJGVY8Xu3QaNK3deGPXaxlD%2BdZbxoTXlEV%2BS9kaddfuO0yKduZJL9%2Fg5u4KE9NHlGeySssGNizwAX%2BWDHk78k%2FYufKLMQLp9i8acsrhnnEbAlRDsWPQFayOOylxdGgd5ci%2BPsnCrWVMWLGuOkHXGsfV0h%2BxOt2QjopIYagyj9C6qRDAKW7Wx0WXkwJOZl2vn6X4J06DKGdFdo6cDQiOSQNQRhOMJbC28kGOqUB86ucawvmzDAj5NGRljvJUlO%2Blw%2BoPYMuT8ba0CWywWeoRJXT%2FPLyukA0joL6fi4vBcT0eHcrbg4zl7ukLGrVRZ0jCyaTLVT4dAtfe2guqq9r%2Fidqu9nDE%2BFOTFeKQ5BZ8YJZu9SuLlYmzhVd%2B4Q5i01l4oqhchgyvKJRYwiqsWX0fjp5YKnscHlioxwYSNFIvNNbtlYH4ZhmMW7VywhC1aPDrc2b&X-Amz-Signature=979d09de3a1736a3ae7d704fbe218b6cd78f538207a0a0c9dbad261b04299885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GUA3M23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEhm3Yt4I3D4PeW%2FqH8IcbgTOH1PSqS0qUjmj%2F5%2FO1TAiEAhCNgvAihl05tBDDE19UjxUO4dYwfWXtdYuEU46GTc8IqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWnhLoAPnEFWXzIICrcA8aGMWjXfXtOn0%2Begahz4l10Mbrwk8XyuqJu4%2Bg85oCfx6cspG2iMFiKcRMz4hJtXBJSaEuwY4NJ%2BX5X5ulqixPF3ym90tnDpXnGnLdxdZVUHaW%2BLFs0UGQrF3bXJVwbB%2FJ8Nvo4%2BlOjhNIOUtKb0uZDSNfdogvBeo99Y9UYboXEM2IY9oB4%2BZw3K4tUrTfCdC0LAe3Jx2uAJrWpogusuje0CzBZ92jbmQDG0kna1hmxjUaEGaQKUqYYUTCpr4RsnbdswW35KvY4kVJTibcs%2FVJvLQxF61m%2B1FSD1EscXe1dtzvBJdnEcCyLTxUx21CIBARTecukHeocKF3f4x1WWPo9eSstl%2F3qOqSy2bYSFEqBo3RCnrz%2Fy08w4GnRZv7rPeR4KtS33lj%2B3T3o9zWZrVtqBUY7lpVYmFZJGVY8Xu3QaNK3deGPXaxlD%2BdZbxoTXlEV%2BS9kaddfuO0yKduZJL9%2Fg5u4KE9NHlGeySssGNizwAX%2BWDHk78k%2FYufKLMQLp9i8acsrhnnEbAlRDsWPQFayOOylxdGgd5ci%2BPsnCrWVMWLGuOkHXGsfV0h%2BxOt2QjopIYagyj9C6qRDAKW7Wx0WXkwJOZl2vn6X4J06DKGdFdo6cDQiOSQNQRhOMJbC28kGOqUB86ucawvmzDAj5NGRljvJUlO%2Blw%2BoPYMuT8ba0CWywWeoRJXT%2FPLyukA0joL6fi4vBcT0eHcrbg4zl7ukLGrVRZ0jCyaTLVT4dAtfe2guqq9r%2Fidqu9nDE%2BFOTFeKQ5BZ8YJZu9SuLlYmzhVd%2B4Q5i01l4oqhchgyvKJRYwiqsWX0fjp5YKnscHlioxwYSNFIvNNbtlYH4ZhmMW7VywhC1aPDrc2b&X-Amz-Signature=57a64ac6bac366544a6f87f4194e294c27aa0966c0c5dc755ad1f36732b06bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
