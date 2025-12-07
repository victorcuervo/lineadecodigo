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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKIJCAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTpe5eP5TeqDfR3QWz9dULWbZGWVYYe3Q7ZMsjXmLgYwIgRmUut9V4w7aibMsSE1x%2F9fI3NhSlI8YTvsWTD908AvcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpiH9I%2FBarRSWo8IircA3pz6rcoVTkdCHuzcX031idtrm5nTy6r97BfGG1K3RPbeGmq8whbdZng9tFqUlDxLz2x8pD1lY3xoOutCXzFVyZkXJrodE%2Ft22EdvR3MA0eyV2wjyWzGUUuof3nOBgyBUvwRtyVQRJ13K%2Bu4UV2yc65vWBh2jlp43%2FGu8JwCpO9PFp7RF1Ake6Se2%2F%2BjMwPOyzLiU%2BMPw18%2FZ9oWpoQ8cfsLyt3djwHVrGLR3E4M7EFFob9xsLv9V20eNjky3p21ZwUDNYvyoDw6xCxDXHoTzFPHoxr%2B7fsoq5zuOZZOneYdqNxgu%2BV84ajoo%2BY40stJ4xG8pSf6jfdq6WZs%2Fms85Jn0ROKSMHqq9zttztiwsE7jTdvb9Zj0RwVSUTZon0RPD9atjr2YxHr9vVf2%2FvVX9b6zdot9Ct4PyeS98oakTnTFAQ%2FzZKAWCtaSqwKtsC9eBv3gEgoUeVLWYRgNXchZydktwK%2BTfVV7cyWeTjRUkNvkR1Xbirzph32mF%2BpFNMwIFpdfzUbIt8u%2FbRR4yXUvVj48Zrn3TF9XaySrNe3tvl8wnjLEUHsMxp1UumD94snhIyX%2F6pRQa1n6SyR%2FFyx0vvDxWONUwhmMmT6LZdpvDzedY9eh5jNR%2BV1oP0kEMNLH18kGOqUBC5j%2Bm65do3PReLxRyuWeT1XGU0XQ69N00QYuocCoSEu0G3%2BaFOM9qiQtd1ersO2sGKH%2BCQlzURof240GGLUMLEBZpajsHPGQY8eg7z1b1Tb35V3yv2ANLZ0qIvqKh%2F8LkpZ519ltmTsM2lvP56IdainCY6u4ZIOGTBOO6W%2BxWBsslt3k%2F2s7sL7tl3kM7H8Qv4kAfE1XmFUCseHjau6Jewzczv78&X-Amz-Signature=79eef5cbb5561982d8ff115593a8163b1f6bf9dc87749e5a9411e751a5779477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKIJCAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTpe5eP5TeqDfR3QWz9dULWbZGWVYYe3Q7ZMsjXmLgYwIgRmUut9V4w7aibMsSE1x%2F9fI3NhSlI8YTvsWTD908AvcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpiH9I%2FBarRSWo8IircA3pz6rcoVTkdCHuzcX031idtrm5nTy6r97BfGG1K3RPbeGmq8whbdZng9tFqUlDxLz2x8pD1lY3xoOutCXzFVyZkXJrodE%2Ft22EdvR3MA0eyV2wjyWzGUUuof3nOBgyBUvwRtyVQRJ13K%2Bu4UV2yc65vWBh2jlp43%2FGu8JwCpO9PFp7RF1Ake6Se2%2F%2BjMwPOyzLiU%2BMPw18%2FZ9oWpoQ8cfsLyt3djwHVrGLR3E4M7EFFob9xsLv9V20eNjky3p21ZwUDNYvyoDw6xCxDXHoTzFPHoxr%2B7fsoq5zuOZZOneYdqNxgu%2BV84ajoo%2BY40stJ4xG8pSf6jfdq6WZs%2Fms85Jn0ROKSMHqq9zttztiwsE7jTdvb9Zj0RwVSUTZon0RPD9atjr2YxHr9vVf2%2FvVX9b6zdot9Ct4PyeS98oakTnTFAQ%2FzZKAWCtaSqwKtsC9eBv3gEgoUeVLWYRgNXchZydktwK%2BTfVV7cyWeTjRUkNvkR1Xbirzph32mF%2BpFNMwIFpdfzUbIt8u%2FbRR4yXUvVj48Zrn3TF9XaySrNe3tvl8wnjLEUHsMxp1UumD94snhIyX%2F6pRQa1n6SyR%2FFyx0vvDxWONUwhmMmT6LZdpvDzedY9eh5jNR%2BV1oP0kEMNLH18kGOqUBC5j%2Bm65do3PReLxRyuWeT1XGU0XQ69N00QYuocCoSEu0G3%2BaFOM9qiQtd1ersO2sGKH%2BCQlzURof240GGLUMLEBZpajsHPGQY8eg7z1b1Tb35V3yv2ANLZ0qIvqKh%2F8LkpZ519ltmTsM2lvP56IdainCY6u4ZIOGTBOO6W%2BxWBsslt3k%2F2s7sL7tl3kM7H8Qv4kAfE1XmFUCseHjau6Jewzczv78&X-Amz-Signature=9c07c01ec4ed64746b0af6d53e36d7d6e636f3cf7680966101a2bde8bfa98f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
