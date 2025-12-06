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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYBNRRO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJZ%2FqxweCswl6aWYDLuNnHMbXJH3GsJZvag9%2FHukQkAIhAJEzOX4l5MvLrNHH3JUiXzRwWZnG12Atq%2FkKp5Fl%2FkIOKv8DCHUQABoMNjM3NDIzMTgzODA1IgxbozlVhOLqENsA5XMq3AP8l8hC2yz2XsLXkSXpoPOagJAQM0u3KCv4fWiXA14rXm48j69Dw1lrSaJFK3NBC2G8qC1Z4XQtin2jFnbTfZaWChapxMc6rNg3eK50l7jz8XRzykrbmEvh4F%2FhA0%2F9FJpuRFZqNpRfygktDBi34xSXhe4fMqYqj6%2BB3nlMv8PZO0yZ2ple9lc3l%2Btjs%2Fa2rqJREql1APJLMuKhqqCzQzm6lGlm2ZxFWACSH3%2FcwKLVi2Cl4MCeg4qpthAT5qtbz6i5C3tMORvEo04ZUv3rIdYyToepnbDP8ktwPiggKC%2FhxqmnhEStQK2qGGf5SmQLoKVzF8cZoJmdjORXB55HpPl4lB36u2EzWd5lcaa7F%2Frk8PhgsKk%2F3l2DjHgaUgXx8A4tXeyvzdMj%2FRtwFgEXFgVDYd%2BEeaSXzxTzi2w8r8FX%2F5UfZLSV4hJIH42R2rR6ybmGDmtn%2FxheU0U%2FfTZmId6KoSBpn9tSgldKO1xiW9OcgE56fFl05hpj2S4B7eJcQIvDS185CRxIbVO3keYwBcRJUBB%2B8YrG6iNASGMlrorA2g3PVTqDPG10Kff1yftHmj9r1ge2oPS4B0b6Vigs%2Bu%2F23sA5Zxjov3%2FYT6IhkLJbiZCrz96RxWQbb%2FroVDCzptDJBjqkAbcztDAa58nD378laL8maGyzf975lj1cLWdGZwDPZT0irzLtxcZvbKbQJZXwpE%2BbMeR4jf2GBPO%2FrNIPzetFvXWOqvQi5FaGRSseYdEQ4Ps3UyW6XCfabxwxvgUs0%2FjepnjA2z4mEtQca24V5EfSKVJgXQoJW%2FZ87en9gXmzGRP4ZyPVcg4RjkbUAlzJjnC8O%2F53etOh%2F%2B7706cedNgZsO%2FycPK6&X-Amz-Signature=9708f0d52dbf5e07b8506400c7153fbb1603ee08773237e8490c2133bcb7cbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYBNRRO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJZ%2FqxweCswl6aWYDLuNnHMbXJH3GsJZvag9%2FHukQkAIhAJEzOX4l5MvLrNHH3JUiXzRwWZnG12Atq%2FkKp5Fl%2FkIOKv8DCHUQABoMNjM3NDIzMTgzODA1IgxbozlVhOLqENsA5XMq3AP8l8hC2yz2XsLXkSXpoPOagJAQM0u3KCv4fWiXA14rXm48j69Dw1lrSaJFK3NBC2G8qC1Z4XQtin2jFnbTfZaWChapxMc6rNg3eK50l7jz8XRzykrbmEvh4F%2FhA0%2F9FJpuRFZqNpRfygktDBi34xSXhe4fMqYqj6%2BB3nlMv8PZO0yZ2ple9lc3l%2Btjs%2Fa2rqJREql1APJLMuKhqqCzQzm6lGlm2ZxFWACSH3%2FcwKLVi2Cl4MCeg4qpthAT5qtbz6i5C3tMORvEo04ZUv3rIdYyToepnbDP8ktwPiggKC%2FhxqmnhEStQK2qGGf5SmQLoKVzF8cZoJmdjORXB55HpPl4lB36u2EzWd5lcaa7F%2Frk8PhgsKk%2F3l2DjHgaUgXx8A4tXeyvzdMj%2FRtwFgEXFgVDYd%2BEeaSXzxTzi2w8r8FX%2F5UfZLSV4hJIH42R2rR6ybmGDmtn%2FxheU0U%2FfTZmId6KoSBpn9tSgldKO1xiW9OcgE56fFl05hpj2S4B7eJcQIvDS185CRxIbVO3keYwBcRJUBB%2B8YrG6iNASGMlrorA2g3PVTqDPG10Kff1yftHmj9r1ge2oPS4B0b6Vigs%2Bu%2F23sA5Zxjov3%2FYT6IhkLJbiZCrz96RxWQbb%2FroVDCzptDJBjqkAbcztDAa58nD378laL8maGyzf975lj1cLWdGZwDPZT0irzLtxcZvbKbQJZXwpE%2BbMeR4jf2GBPO%2FrNIPzetFvXWOqvQi5FaGRSseYdEQ4Ps3UyW6XCfabxwxvgUs0%2FjepnjA2z4mEtQca24V5EfSKVJgXQoJW%2FZ87en9gXmzGRP4ZyPVcg4RjkbUAlzJjnC8O%2F53etOh%2F%2B7706cedNgZsO%2FycPK6&X-Amz-Signature=a965478bc448e87d4e1841d6170acc3fa223ca29b11211bc651f45c3ee4c6e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
