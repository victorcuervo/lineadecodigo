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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOTGV37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1GDzlYLKEowQ%2FVCCL1r40JQjkf2%2BxojQQliTkNlPjpgIgJT3MKVgRPq%2F8GYkGKroMZcZXbSbtFGMwpeK1JNXzWWQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKTQUMi%2BcGYyRc0T4yrcA%2FN7l1u%2B1NYT5t4DYmefkGQ%2BBsYa3R0JYMAq0wgRikMBb%2FFMbSeGt6z4j%2F0PZUL2GYhADDAYFwEnJB5RJK%2F0KodyNxT8JDBJDxUGyR7NFSkhvRHTxOFHica5ggeHhoS6tl6kt1I5rx3%2Bc8YEDqssQzeVHPdlQ5N1OSxsiHYKHcMU0kSw9%2BYGZuANCemNj84sfcnZh7McjmCOl5Mjm4LGj3ZQ5zv5PGsRPT%2BjG13Se9s8vEYBGlff4LvoscvciYVZbWeH9Er3dJM5TQtqDo4AgKC5CA4%2FvW2Lv7y1zfu7pgq6dYFaWwhKwX2xOQWpRBeI%2FqpSB7vaaEmbJ4pHQUoB0j5lF%2FQGKZWBORvNdWBSDduXrVB2Lpddoi1cbDzaQ6IfMdElpJxkFOjXiRQQvgUcTwaRq8K3Gg32Wvirp54eCfTto7e0%2FQ04VM%2FM2IsV%2FUv4EcCnqWkV0wBB%2BJu%2B4TuYDGaXzlzENXjsWWlnIzocBRclBFSmMHHkw%2BnxYLSs%2FIiuhinQQymijNVtUn5W6pgi4IaJmnrGKina%2F%2BsWb5yT4pca4j8UaFaHmHxzNxD%2FPnEnsFjF4DjpvYMluYUjYDzdAK35iCBAPW40uJ4lsMSzkACJwdhKJWcKTapaH9ptMPeqisoGOqUBMTSaiW34%2FDEK6wbeZtRmKwr3bqH5IZsk0YeFYQI7vOelLZW7KIusMJaBGd7fOxRif0qfTYXmu8%2BbeJXANVBPYscIFiRKsV5lI1zDnaxIJxBvaXBYCtbdHy3P8f%2Bx0Ub%2BWLR%2Fe0QLafqukgqs8eghf%2Baro2OA1DneFeUaanvRUPsWb9RirX3t8JkOFuAEi7TSVLAJlqR0rmUJosMOURh9IJe3C7%2FB&X-Amz-Signature=e146c03f6f3f1918535347ef0a12dc192d6d266c36af4d2c583961f9b9982261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOTGV37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1GDzlYLKEowQ%2FVCCL1r40JQjkf2%2BxojQQliTkNlPjpgIgJT3MKVgRPq%2F8GYkGKroMZcZXbSbtFGMwpeK1JNXzWWQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKTQUMi%2BcGYyRc0T4yrcA%2FN7l1u%2B1NYT5t4DYmefkGQ%2BBsYa3R0JYMAq0wgRikMBb%2FFMbSeGt6z4j%2F0PZUL2GYhADDAYFwEnJB5RJK%2F0KodyNxT8JDBJDxUGyR7NFSkhvRHTxOFHica5ggeHhoS6tl6kt1I5rx3%2Bc8YEDqssQzeVHPdlQ5N1OSxsiHYKHcMU0kSw9%2BYGZuANCemNj84sfcnZh7McjmCOl5Mjm4LGj3ZQ5zv5PGsRPT%2BjG13Se9s8vEYBGlff4LvoscvciYVZbWeH9Er3dJM5TQtqDo4AgKC5CA4%2FvW2Lv7y1zfu7pgq6dYFaWwhKwX2xOQWpRBeI%2FqpSB7vaaEmbJ4pHQUoB0j5lF%2FQGKZWBORvNdWBSDduXrVB2Lpddoi1cbDzaQ6IfMdElpJxkFOjXiRQQvgUcTwaRq8K3Gg32Wvirp54eCfTto7e0%2FQ04VM%2FM2IsV%2FUv4EcCnqWkV0wBB%2BJu%2B4TuYDGaXzlzENXjsWWlnIzocBRclBFSmMHHkw%2BnxYLSs%2FIiuhinQQymijNVtUn5W6pgi4IaJmnrGKina%2F%2BsWb5yT4pca4j8UaFaHmHxzNxD%2FPnEnsFjF4DjpvYMluYUjYDzdAK35iCBAPW40uJ4lsMSzkACJwdhKJWcKTapaH9ptMPeqisoGOqUBMTSaiW34%2FDEK6wbeZtRmKwr3bqH5IZsk0YeFYQI7vOelLZW7KIusMJaBGd7fOxRif0qfTYXmu8%2BbeJXANVBPYscIFiRKsV5lI1zDnaxIJxBvaXBYCtbdHy3P8f%2Bx0Ub%2BWLR%2Fe0QLafqukgqs8eghf%2Baro2OA1DneFeUaanvRUPsWb9RirX3t8JkOFuAEi7TSVLAJlqR0rmUJosMOURh9IJe3C7%2FB&X-Amz-Signature=6d9e2eb0ccc9ebb224c7e81938e46fcdbadac1df6fba0da7bcce10aee7621fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
