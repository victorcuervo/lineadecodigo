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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2UVUWE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkWHJr0Iur6lVXiyh8jQCSECMqGwUV%2FxumOyPbcamk5AiEA%2Ffkwplm5CWl2FoBp19rGwCIoPfGhVNmkR3wRKheilWcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlItzuLQtUjx4khWCrcAzccbqcZDUXYgF6SgfldwljXiFadWyg6DSLsEKrIaLnvYR5nFE0NBmmeEBNg5KAXrCfW622d%2FTf4jnGjg2DBd3SnOu0z3QUmkNDARa8qp2L7h7%2FyYVjh0FoC5UTc72eZhAntYoj6ueGSqhati4pkFEy7T49g%2Bt9LHCFo6368QJPWK65yVHJE%2B4vuY60zXGFfAXe0zTvW8Au6GxwijCaY3W8vgvQ1M3C1gJl7zyNSps9Q3u3EgWSxMqM%2FWvsb9s95VebK5IeD8iGQ9wHpswVEHcsqc8Do00Rnt45%2Fh%2FoNvU%2FUHUEkxvY17bldpdNltIj%2FsyPLgDYvntN2JgI8Bgzcab7oyH%2BRFKSukCUtTwR2UsRAoCtUtU7%2B6HvwDG%2BmEYtwrdJRDATXxysscBJjuBh7VHcreugHJOaJOOEioSd9nsXtcpvVyuGe%2FNV1lRa5QzjmPOdh7LnrdAi23CB2KkPNMZph%2FItcHDrHw8PdNB%2B62n9lfgy3U%2BGMwMbnljiqPlec%2FQyzDYNuTCA5tL8mUgwD%2BhJAqxlc5Isg9y4BIzBEho0Tj17l9eLfH%2B5uI8mrDH7lXVBmlHjzartgx7iyTYzjF3ojq0Fh6z%2F4tXE6r2YHwXG4AYuu7P1dWDaUr20eMJf90skGOqUBNUOXo0LFpf5P2cgvJoLYCHxa3SdJM7LIDcqDO2xC0DSQuqXgrspG7bQ5RliYsOaU%2BM%2FtL%2FNJxmpyQWz38wVxOMc5FKJBuJESRf9CnjSFNrfL2f%2BlpYfq1Iu3n27gBK7hYnPUk2MP1XtQ%2FfNHGjKTJeyC79o8XOPUO38%2FLLyLGILwdRYXW6HG9wQOZINyDeLKHaEt0xGGKxad70Awr12N1GzvY7TX&X-Amz-Signature=d4623ebd426f9d3ecd7038413860f19ee7ba654ee0b5b5eeecf907b9c3b06bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2UVUWE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkWHJr0Iur6lVXiyh8jQCSECMqGwUV%2FxumOyPbcamk5AiEA%2Ffkwplm5CWl2FoBp19rGwCIoPfGhVNmkR3wRKheilWcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlItzuLQtUjx4khWCrcAzccbqcZDUXYgF6SgfldwljXiFadWyg6DSLsEKrIaLnvYR5nFE0NBmmeEBNg5KAXrCfW622d%2FTf4jnGjg2DBd3SnOu0z3QUmkNDARa8qp2L7h7%2FyYVjh0FoC5UTc72eZhAntYoj6ueGSqhati4pkFEy7T49g%2Bt9LHCFo6368QJPWK65yVHJE%2B4vuY60zXGFfAXe0zTvW8Au6GxwijCaY3W8vgvQ1M3C1gJl7zyNSps9Q3u3EgWSxMqM%2FWvsb9s95VebK5IeD8iGQ9wHpswVEHcsqc8Do00Rnt45%2Fh%2FoNvU%2FUHUEkxvY17bldpdNltIj%2FsyPLgDYvntN2JgI8Bgzcab7oyH%2BRFKSukCUtTwR2UsRAoCtUtU7%2B6HvwDG%2BmEYtwrdJRDATXxysscBJjuBh7VHcreugHJOaJOOEioSd9nsXtcpvVyuGe%2FNV1lRa5QzjmPOdh7LnrdAi23CB2KkPNMZph%2FItcHDrHw8PdNB%2B62n9lfgy3U%2BGMwMbnljiqPlec%2FQyzDYNuTCA5tL8mUgwD%2BhJAqxlc5Isg9y4BIzBEho0Tj17l9eLfH%2B5uI8mrDH7lXVBmlHjzartgx7iyTYzjF3ojq0Fh6z%2F4tXE6r2YHwXG4AYuu7P1dWDaUr20eMJf90skGOqUBNUOXo0LFpf5P2cgvJoLYCHxa3SdJM7LIDcqDO2xC0DSQuqXgrspG7bQ5RliYsOaU%2BM%2FtL%2FNJxmpyQWz38wVxOMc5FKJBuJESRf9CnjSFNrfL2f%2BlpYfq1Iu3n27gBK7hYnPUk2MP1XtQ%2FfNHGjKTJeyC79o8XOPUO38%2FLLyLGILwdRYXW6HG9wQOZINyDeLKHaEt0xGGKxad70Awr12N1GzvY7TX&X-Amz-Signature=44d7d532a3f109119ade7ecd2af2678cadcda42a0703e662389077d9bc3e894a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
