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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SMOMIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BiFJZh6VN58wYS2bgiaGS3HA6lE9bk4eI7Jurhh2MGAIhAKXT%2FQzzopFJK91moVnwMtTw7VFV33ZQjAqtXWuVJ9gjKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZfFgW2Qe65j3CG3sq3AOR6x3ipoAkInhxntsUwBxIIA7fhDjTmD0OnAJRT7T3UVJMs5toJaUZcusMg1RRXiLN%2FGwp51tEFi61z4qiNdFoHFbB%2FFIPQvkIhN13%2Ba3f4fBqdfEVz8Klaqcy2Hh43VG%2FkPepLBVqakoD2cs6avxVDnU0G9rjlo1QXDejVCORp59ID%2FiHoiyQwBHl7cCRHlHRd%2B7BFIv%2Bz6V19yPoVtXisjN0jru72v%2BM2DSbGRxc1gb62ldtK9KjAJntYKgWYVcjS3CUxjXqF7noYM%2BXzbCXgqufwLGk4b38C1chjlAJHXyUi7FNH7ln7XItv1c5aHn3t57TpQbB8tOlIwFf%2F4ptapg9QHEDd2CM5UZ9X5Qztiz%2BK2FfyC5YXkYDaad6kXZ6uTkqmxaiDe%2BFZimx62EG6Zk9OfSsX1mp%2BRMfvcKJFyxFkkXCVZUpkIXmMUNP9QcWbtl8V7A92TKnCCqk%2FxomiNOpLWdpzjcFYST%2FPeJ80S3UNNhN%2FiQ5a7Kmi5PdMTjsVAxiDIapcZ4G3DN9XyrniiqOUfLirgEsaMK4PPqytJ%2Bw11SDhS44oJaMv%2FQHPVp7vKVOceoz9TDch%2FJEeFWNTRB%2FasX4%2F1Au6u1nyOcj5Z%2FtSDD2xcSSFmcm5DDFpN%2FJBjqkAZHhLUJYIYhBqYq9g011wCuZew2OOMIN4nOrzAnUA7o16A8jRhu8VVFuBS7yg9%2F74cLfa8C2cTUehn9tqrDMMfSEBN%2Ff96dQkTcjMNIhlEELiOpHyJo2T9pGPs860ayxta6P6lKVRyFYjX7oOpBThIxZyBacEaiTjVxvP2meeJHNyO2n%2FHtGN7SGo1egBXpfpay13wmvXQXO1Hd8b0OsTbRSANmI&X-Amz-Signature=7586f2e6fd4d7349841dd36c93a27ba5022b4aaf50c86f27dfb60d8ff1833b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SMOMIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BiFJZh6VN58wYS2bgiaGS3HA6lE9bk4eI7Jurhh2MGAIhAKXT%2FQzzopFJK91moVnwMtTw7VFV33ZQjAqtXWuVJ9gjKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZfFgW2Qe65j3CG3sq3AOR6x3ipoAkInhxntsUwBxIIA7fhDjTmD0OnAJRT7T3UVJMs5toJaUZcusMg1RRXiLN%2FGwp51tEFi61z4qiNdFoHFbB%2FFIPQvkIhN13%2Ba3f4fBqdfEVz8Klaqcy2Hh43VG%2FkPepLBVqakoD2cs6avxVDnU0G9rjlo1QXDejVCORp59ID%2FiHoiyQwBHl7cCRHlHRd%2B7BFIv%2Bz6V19yPoVtXisjN0jru72v%2BM2DSbGRxc1gb62ldtK9KjAJntYKgWYVcjS3CUxjXqF7noYM%2BXzbCXgqufwLGk4b38C1chjlAJHXyUi7FNH7ln7XItv1c5aHn3t57TpQbB8tOlIwFf%2F4ptapg9QHEDd2CM5UZ9X5Qztiz%2BK2FfyC5YXkYDaad6kXZ6uTkqmxaiDe%2BFZimx62EG6Zk9OfSsX1mp%2BRMfvcKJFyxFkkXCVZUpkIXmMUNP9QcWbtl8V7A92TKnCCqk%2FxomiNOpLWdpzjcFYST%2FPeJ80S3UNNhN%2FiQ5a7Kmi5PdMTjsVAxiDIapcZ4G3DN9XyrniiqOUfLirgEsaMK4PPqytJ%2Bw11SDhS44oJaMv%2FQHPVp7vKVOceoz9TDch%2FJEeFWNTRB%2FasX4%2F1Au6u1nyOcj5Z%2FtSDD2xcSSFmcm5DDFpN%2FJBjqkAZHhLUJYIYhBqYq9g011wCuZew2OOMIN4nOrzAnUA7o16A8jRhu8VVFuBS7yg9%2F74cLfa8C2cTUehn9tqrDMMfSEBN%2Ff96dQkTcjMNIhlEELiOpHyJo2T9pGPs860ayxta6P6lKVRyFYjX7oOpBThIxZyBacEaiTjVxvP2meeJHNyO2n%2FHtGN7SGo1egBXpfpay13wmvXQXO1Hd8b0OsTbRSANmI&X-Amz-Signature=bd896e9da3ddaedc66792b1e91d8fec09e3d3354d40229fd5c21c6e726898d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
