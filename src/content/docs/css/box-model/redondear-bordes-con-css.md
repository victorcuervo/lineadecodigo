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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5ZL53Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmPvVXNlNPzAVBOshtgfi4QxTMrXGkHnRISYOEbOSiewIhAPy9x3H%2BZ0b3X1fgR8FCXTqP4Fbvcb6ctg8R5bLKQ%2BNDKv8DCHEQABoMNjM3NDIzMTgzODA1IgzXbnK%2FxyN5B2IP5C4q3APVupkpc9k05EOSg1cz9k3EOpgOuL5L7naF0E5TsMUBlrOHIZ6eICF9%2FXvxDQYSCY1snXYB%2BPI1xU7TzUS5vZQIT3Kj%2FIJUO0KP%2FtkRta%2B0up7tB51MLv8MFd0u%2FbI9k9BCN5E1WhagH6catPXp9md1hCp%2B845j4lvEYR4fsdJVwwY3rc%2FVgtklWhkj5O0D2DfD4buR1LljLc3tXg5jt6jlbS2Ddhyn1xaJtNlloYi9cyTHI3AxVpa5UJm7EvM875naZ9uaCjSg60lrFpkJjzJojDqSa1B%2FLlh9TxA2tcBN3VZ6p7MVxi4xyZtxQ2KmQ1FBJinUEoapBMbzigi1firFmpSvJMBfb3bl9yXX6fkh%2F1rFFpuFHXfoQMI%2F9NU6EGDV0PEYsJBKNCC%2BpqWNmu91QKyT6yXeMRCw2MPFdoIvTgvulXVlIfJdrxjfmatpElK5OathdhYRf1xQrUgbtNdagQOTPvgJNQqOE6sVTDGHy5NFtaeYExozVVfgPhlNbNrMxfB9TnOTQRf9FcMYi6UlAhcxkW9BOlwl0bUukdiyoa2P8u4kYE5Bz4p6b%2FbctIUpxZNu%2B5ICbHrn1S1VtCkYXP%2FKb1mdK2M7E555cbfaQZKDgRxqFARzGyGgNDCd34fKBjqkAQ2CAAnsEraG3DO8%2BXQU7deb7eniB2LDojrH19WxvuUqW4L0MspJIGjOFovn9w90B4XCS2MP3gHMuKf%2FNf492JgDrqkXpkJvZtqhTHiidQjdCYA3IjjoGlLMM0ADr2E4DRvDfA7sFD3O%2Byp%2Fq9DxiZUs9LD2q7C0YKa5VsPaHrgxqNwBVjh0XQLeaJdTJrjate2%2B1OBlIeKfO3ls8SoTA0YUBuqW&X-Amz-Signature=6b35d7e2e57c692d9a555cdb6562809e8b9d54c73f748caff207c8b83ea4bfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5ZL53Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmPvVXNlNPzAVBOshtgfi4QxTMrXGkHnRISYOEbOSiewIhAPy9x3H%2BZ0b3X1fgR8FCXTqP4Fbvcb6ctg8R5bLKQ%2BNDKv8DCHEQABoMNjM3NDIzMTgzODA1IgzXbnK%2FxyN5B2IP5C4q3APVupkpc9k05EOSg1cz9k3EOpgOuL5L7naF0E5TsMUBlrOHIZ6eICF9%2FXvxDQYSCY1snXYB%2BPI1xU7TzUS5vZQIT3Kj%2FIJUO0KP%2FtkRta%2B0up7tB51MLv8MFd0u%2FbI9k9BCN5E1WhagH6catPXp9md1hCp%2B845j4lvEYR4fsdJVwwY3rc%2FVgtklWhkj5O0D2DfD4buR1LljLc3tXg5jt6jlbS2Ddhyn1xaJtNlloYi9cyTHI3AxVpa5UJm7EvM875naZ9uaCjSg60lrFpkJjzJojDqSa1B%2FLlh9TxA2tcBN3VZ6p7MVxi4xyZtxQ2KmQ1FBJinUEoapBMbzigi1firFmpSvJMBfb3bl9yXX6fkh%2F1rFFpuFHXfoQMI%2F9NU6EGDV0PEYsJBKNCC%2BpqWNmu91QKyT6yXeMRCw2MPFdoIvTgvulXVlIfJdrxjfmatpElK5OathdhYRf1xQrUgbtNdagQOTPvgJNQqOE6sVTDGHy5NFtaeYExozVVfgPhlNbNrMxfB9TnOTQRf9FcMYi6UlAhcxkW9BOlwl0bUukdiyoa2P8u4kYE5Bz4p6b%2FbctIUpxZNu%2B5ICbHrn1S1VtCkYXP%2FKb1mdK2M7E555cbfaQZKDgRxqFARzGyGgNDCd34fKBjqkAQ2CAAnsEraG3DO8%2BXQU7deb7eniB2LDojrH19WxvuUqW4L0MspJIGjOFovn9w90B4XCS2MP3gHMuKf%2FNf492JgDrqkXpkJvZtqhTHiidQjdCYA3IjjoGlLMM0ADr2E4DRvDfA7sFD3O%2Byp%2Fq9DxiZUs9LD2q7C0YKa5VsPaHrgxqNwBVjh0XQLeaJdTJrjate2%2B1OBlIeKfO3ls8SoTA0YUBuqW&X-Amz-Signature=297201dd37875b2947c0a9e41feb11601340f1241a58625ca3d3f7e88f0c3c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
