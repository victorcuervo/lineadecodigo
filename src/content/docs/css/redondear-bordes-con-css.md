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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNGYYCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSgEQyymacdiH3d1s2p8jtT6BHCJfbHkBj5MIg7P2yigIhAJQty%2BwJhwPVzw%2FvexU33oSz%2FivM23Xpm6yU8l6zD%2F3xKv8DCFsQABoMNjM3NDIzMTgzODA1Igy67grQP6xgQxOrUnYq3AMpY1kzLKzk42dGTrmRljCmrvTE%2FXtC0SLZ0q%2BBxvuhMTiqV7HlZZoZCO2hlIhAbVlMziS2eDzepRDvj0db5XGMY36Z5Yv%2FG8LehSa%2F3huw3T2r8ayEHHHGiXUKyk7aIfA0Lia%2B3Ba3XZdvCJ9NoJcWVP6NB1K%2Fz%2F3htxQuKwUrQ4g04zoDXgYYN85YtvRHhjzd2MYXM7ueJO3V0BblzyNHSFrw6XxS73X74KIhMtd9fuKShkks%2FLMBoUGpxBW13lmZqTGwKwMLMULlYP52qpzi1zsCoKv6pxaaAK05sNsjwHKPH9YZ%2Br4N7WQf11ClN%2FRVjAKGNKxgaX03BanqRjMurF3hwrovY47yJc0Tkw7J%2FXOfaKbyFfZqkvIiEOaQwLS16eTrQNZRaAJvIgrui5s9zYeUOlzNfYDXaQrYEWwkhCBhH%2FiydOq7Vog9EmxJw3dOtYm1D5UwTMfp0BxCiUwpHDqUuXL9xuKf%2BWWd4hJDMIOyMdYZyre6S4gcrOjgDpmp7rJTuCo1S0zq4Ybs5hMZ%2Fxkm%2BkKuVHq7NHY3RL24%2BDxMViM%2B0m8P1PPbiympfghegYlfeFba3lIH%2BE4H1zZixFAihaQtNqQfJi5HJ35qZKTr5oDoPOjuX%2FmpAzCf0MrJBjqkAQeyQMDhpXP1cpFKC1xuDEa6ITz%2Fky15fM8rRbc7hTuw1MXZ0uNwN3XS4121UWhdXQyI2kFjB0h8xpJ1ASaPZmCQ3iIVUF%2FTWnbuTJ73fjF4kidJ7T2UuEQ%2FRpI0h3GsqlHmPIyJNyevi6hvMlUkLD2OGPw2dQSdh05MYH6crfu1%2BvkSgD7KtB2I6UaB4qOp4l%2F%2FI2ka2klixZIVh3KuQU1a9uEH&X-Amz-Signature=3b911a8e350ede36cca6776e9d73fe024f6d065606a5e08b9076655877894d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMNGYYCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSgEQyymacdiH3d1s2p8jtT6BHCJfbHkBj5MIg7P2yigIhAJQty%2BwJhwPVzw%2FvexU33oSz%2FivM23Xpm6yU8l6zD%2F3xKv8DCFsQABoMNjM3NDIzMTgzODA1Igy67grQP6xgQxOrUnYq3AMpY1kzLKzk42dGTrmRljCmrvTE%2FXtC0SLZ0q%2BBxvuhMTiqV7HlZZoZCO2hlIhAbVlMziS2eDzepRDvj0db5XGMY36Z5Yv%2FG8LehSa%2F3huw3T2r8ayEHHHGiXUKyk7aIfA0Lia%2B3Ba3XZdvCJ9NoJcWVP6NB1K%2Fz%2F3htxQuKwUrQ4g04zoDXgYYN85YtvRHhjzd2MYXM7ueJO3V0BblzyNHSFrw6XxS73X74KIhMtd9fuKShkks%2FLMBoUGpxBW13lmZqTGwKwMLMULlYP52qpzi1zsCoKv6pxaaAK05sNsjwHKPH9YZ%2Br4N7WQf11ClN%2FRVjAKGNKxgaX03BanqRjMurF3hwrovY47yJc0Tkw7J%2FXOfaKbyFfZqkvIiEOaQwLS16eTrQNZRaAJvIgrui5s9zYeUOlzNfYDXaQrYEWwkhCBhH%2FiydOq7Vog9EmxJw3dOtYm1D5UwTMfp0BxCiUwpHDqUuXL9xuKf%2BWWd4hJDMIOyMdYZyre6S4gcrOjgDpmp7rJTuCo1S0zq4Ybs5hMZ%2Fxkm%2BkKuVHq7NHY3RL24%2BDxMViM%2B0m8P1PPbiympfghegYlfeFba3lIH%2BE4H1zZixFAihaQtNqQfJi5HJ35qZKTr5oDoPOjuX%2FmpAzCf0MrJBjqkAQeyQMDhpXP1cpFKC1xuDEa6ITz%2Fky15fM8rRbc7hTuw1MXZ0uNwN3XS4121UWhdXQyI2kFjB0h8xpJ1ASaPZmCQ3iIVUF%2FTWnbuTJ73fjF4kidJ7T2UuEQ%2FRpI0h3GsqlHmPIyJNyevi6hvMlUkLD2OGPw2dQSdh05MYH6crfu1%2BvkSgD7KtB2I6UaB4qOp4l%2F%2FI2ka2klixZIVh3KuQU1a9uEH&X-Amz-Signature=4adfc4fd3b5d34b077946b41d0b3b7dc2454fac15bcd8a2df8f7722c39d35b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
