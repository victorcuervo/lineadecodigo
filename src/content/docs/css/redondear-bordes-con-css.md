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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3YKSFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FaJZMfKLiquu0k4itRhX460xUpjdM7YrCZP9Y%2BlOlgIhAJNwQlq0WeYB%2F8%2BshZWnRJZElbk11vfI18lzovAj7kdXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3sV1Y5JPRZkCp6%2F8q3AMpbgAndLLxhalAS3Ju6kAjAsoqqvyKTGepkUxZ%2BPKSiXMDQFfnC7PFOzRu5NLPXIg3JxApO%2FGkjLXUlcO08LlVrv76SU1Mrb8Zo33zyLh4OHbZphCW56o8NMvkU3GZq9qFA131lQVMmPrp7iVZ79VWNkEiGvZRmhMPx286Mj6xAioki3tZuBIOwcbHjUO6TxvJMqG5PzrVu58MSGqGORGOD0HTPipRN8iFIpsriBoks4odTggmUzoKJpUHXElvbgH5WcsfsOMFd2PKyBFKpV9%2FswMSNT4Ss2mtNcQqjKjdJz94zveH5tRPl55SrYunozgshTG17o8uSme4764hc1TvxNhUbbGNt79%2FQKDyxPoq9rkL5GFcb4yC8gflIfNTUMfjalC4oheiG59w%2FsXrD%2FNhuyntKFqVnvME186jwiA%2Bwl6w0Iud1kZIgRmkTxv3hlKRmpUIzWhujHqVSAUTtCWbiVndTaptJbmyGQwpFbfkHC7apX%2FNjRYSyI5RHxOETVflL4wOSErxcaLtHiLVZP3HJCYcPuyYKkYJ2UMeEYWJ8p5CqbDG6A7Xhn5WYjelU%2Bvx%2BcxrAahhXojf9416hFd1a2Eym%2Fy%2FIuXomFl1oDFF8AY6XtGaL6LrkTv6aTCp7tjJBjqkASYbmv21RCOc061En8zGmOcxalsjdeoiWSKgux2NzqG1MmRzkVVzxouIWlJ48sSXSYYZBglVfXmxFdIFfE8Xds8WUNJ7y44ZcJwDn%2FZjykevjpc8opfNVcEwqowb%2BB8g4OXjmWN8eob6ZXV6mNR98pweU1Se7szvnElv%2FAU9ccTtfZqnEHAev6esvLzm20Pg87EJ%2BjfY%2B3PO6LFUw%2F9xFQWsjFJt&X-Amz-Signature=5de596d272c3e95b75afa8275bd3d3a0a2e2f20691d65a679f0df1959c8f80d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3YKSFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa%2FaJZMfKLiquu0k4itRhX460xUpjdM7YrCZP9Y%2BlOlgIhAJNwQlq0WeYB%2F8%2BshZWnRJZElbk11vfI18lzovAj7kdXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3sV1Y5JPRZkCp6%2F8q3AMpbgAndLLxhalAS3Ju6kAjAsoqqvyKTGepkUxZ%2BPKSiXMDQFfnC7PFOzRu5NLPXIg3JxApO%2FGkjLXUlcO08LlVrv76SU1Mrb8Zo33zyLh4OHbZphCW56o8NMvkU3GZq9qFA131lQVMmPrp7iVZ79VWNkEiGvZRmhMPx286Mj6xAioki3tZuBIOwcbHjUO6TxvJMqG5PzrVu58MSGqGORGOD0HTPipRN8iFIpsriBoks4odTggmUzoKJpUHXElvbgH5WcsfsOMFd2PKyBFKpV9%2FswMSNT4Ss2mtNcQqjKjdJz94zveH5tRPl55SrYunozgshTG17o8uSme4764hc1TvxNhUbbGNt79%2FQKDyxPoq9rkL5GFcb4yC8gflIfNTUMfjalC4oheiG59w%2FsXrD%2FNhuyntKFqVnvME186jwiA%2Bwl6w0Iud1kZIgRmkTxv3hlKRmpUIzWhujHqVSAUTtCWbiVndTaptJbmyGQwpFbfkHC7apX%2FNjRYSyI5RHxOETVflL4wOSErxcaLtHiLVZP3HJCYcPuyYKkYJ2UMeEYWJ8p5CqbDG6A7Xhn5WYjelU%2Bvx%2BcxrAahhXojf9416hFd1a2Eym%2Fy%2FIuXomFl1oDFF8AY6XtGaL6LrkTv6aTCp7tjJBjqkASYbmv21RCOc061En8zGmOcxalsjdeoiWSKgux2NzqG1MmRzkVVzxouIWlJ48sSXSYYZBglVfXmxFdIFfE8Xds8WUNJ7y44ZcJwDn%2FZjykevjpc8opfNVcEwqowb%2BB8g4OXjmWN8eob6ZXV6mNR98pweU1Se7szvnElv%2FAU9ccTtfZqnEHAev6esvLzm20Pg87EJ%2BjfY%2B3PO6LFUw%2F9xFQWsjFJt&X-Amz-Signature=a2bcdbd8ab5c80f57a6483b4b3fbac1e85464a64c0269c823d0d9fdadd047d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
