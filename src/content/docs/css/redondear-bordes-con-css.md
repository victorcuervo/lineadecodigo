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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABRZJJR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFolVhBkL1fD6SuKWse%2Fe1T38AI7j0VLj0t9LijJp199AiBkCQ88VL7Vn735rCOQdtQKnTaLjY31fy2QQqK9muCnhSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMqdgSG2RQEbFsL1r2KtwD1P4N62iKZEDr4OsT9vUHcyN1LVXEvDG8beMyTCFDtHzdjBsluKrK30Rh%2FZG0uRjAD%2B%2BeAP%2BpZqngh63hEf%2FnP1PQfDncIOsObTNsK0idk%2Bq0ve71n6blOno5qTtloLPO5Rci0V0PgzGSzlmL43Jq%2BxuyHy8d6f4vWayp4rFRjZabfTr0XQ5ORLjBOJHjNmeX6BdbcIHpYYOn59AouhpUaWdS0O%2BYpEtbA5T86PMqHDUkT1dfMjR7%2Bi7WGjM0kMkHAB4KK29rdQWXLaOi85nplojkOULv9tSE7B40DvoCpEmwNamozOoErh3xlGBgpOg424qMY03pDr%2BWzMQCZZVtMUeEVRLeyH74A%2FYrbwQCTySgUit3RJfBKu64SbwgVZtRW5f4Gr2NGA5CNpnNPX5ofv78INrLksYtHE28vO0Va2X7ZPlSgUilkNVgzk43vVhoj%2F68ExDs4znw4KmLRme2w%2FdMfh00qbV2nSCzRpVM8%2B5ZpZpsEXTzzM1QqzXf5p%2B0HPC0mRL0l1pXOhrQ2R%2Bz7TEh8i042q9J9arxJz11JD32Tmmv8aAmjjP5f0vtWf6t2p9H5Cs5%2Bnci%2BnZo57AiGk1%2Bmu5FvuUOVhwCLXRBgLR0X7VC%2F41isjPJdTAwycLOyQY6pgFFNS7K2X4hbUIBjGtz2HN%2BEIfUck%2Fy8%2BE3XTfZr5MkWKbv29O6HlLRceTo4%2B599PNTT7z6x%2B5IJ6wjkPddzYyrt9cGYgmpYAVzqqXcUUiE4%2FsykMQFLHNGOMBZviLsbpb0mBpkYOMprQm%2FTsXEGTw%2F209jBMlmuFs5sXohUZJXYb%2FpbcRqQ2x1F5GKVm1G%2F04QXmdZI8q6BOVFuHT1rcyQu9irwMHw&X-Amz-Signature=b2e49b291ccc0042b6ca3c6cb8adc188bd2f45873a541b06d58945aa3f82dad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABRZJJR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFolVhBkL1fD6SuKWse%2Fe1T38AI7j0VLj0t9LijJp199AiBkCQ88VL7Vn735rCOQdtQKnTaLjY31fy2QQqK9muCnhSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMqdgSG2RQEbFsL1r2KtwD1P4N62iKZEDr4OsT9vUHcyN1LVXEvDG8beMyTCFDtHzdjBsluKrK30Rh%2FZG0uRjAD%2B%2BeAP%2BpZqngh63hEf%2FnP1PQfDncIOsObTNsK0idk%2Bq0ve71n6blOno5qTtloLPO5Rci0V0PgzGSzlmL43Jq%2BxuyHy8d6f4vWayp4rFRjZabfTr0XQ5ORLjBOJHjNmeX6BdbcIHpYYOn59AouhpUaWdS0O%2BYpEtbA5T86PMqHDUkT1dfMjR7%2Bi7WGjM0kMkHAB4KK29rdQWXLaOi85nplojkOULv9tSE7B40DvoCpEmwNamozOoErh3xlGBgpOg424qMY03pDr%2BWzMQCZZVtMUeEVRLeyH74A%2FYrbwQCTySgUit3RJfBKu64SbwgVZtRW5f4Gr2NGA5CNpnNPX5ofv78INrLksYtHE28vO0Va2X7ZPlSgUilkNVgzk43vVhoj%2F68ExDs4znw4KmLRme2w%2FdMfh00qbV2nSCzRpVM8%2B5ZpZpsEXTzzM1QqzXf5p%2B0HPC0mRL0l1pXOhrQ2R%2Bz7TEh8i042q9J9arxJz11JD32Tmmv8aAmjjP5f0vtWf6t2p9H5Cs5%2Bnci%2BnZo57AiGk1%2Bmu5FvuUOVhwCLXRBgLR0X7VC%2F41isjPJdTAwycLOyQY6pgFFNS7K2X4hbUIBjGtz2HN%2BEIfUck%2Fy8%2BE3XTfZr5MkWKbv29O6HlLRceTo4%2B599PNTT7z6x%2B5IJ6wjkPddzYyrt9cGYgmpYAVzqqXcUUiE4%2FsykMQFLHNGOMBZviLsbpb0mBpkYOMprQm%2FTsXEGTw%2F209jBMlmuFs5sXohUZJXYb%2FpbcRqQ2x1F5GKVm1G%2F04QXmdZI8q6BOVFuHT1rcyQu9irwMHw&X-Amz-Signature=36a2cb25a004fc3a1bc4cb7c23a4f8e77894e9635d1ee7ff083c26be05ebc947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
