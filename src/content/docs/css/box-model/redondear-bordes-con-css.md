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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7RGAZJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGVjgNOvfNJOrZI5zRLuZYMyrHmuIS2VzW681xFRMNtAIgGn7LAvzWRvcwS13b9WXObc4x4s4fg3n3YDyZHKVitgsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCkZ2OsBEsQEt1ZxCrcA5IQfu0yVjJdDSFLD4b2HU3OPpj2wldUxeRoKJh8S5fzawaGFuH8m7oH9P%2Bs7Bf2CMTq1qevq9eM6Gxrd7UJ%2Fob0fgliXrp72hILMAoC63pjyRKIjRifWr1ccNjVPAtkjOqD%2BuweQJVQ8yv8Y6J1WL87AvBaWKFaCZ7mKXaFyQDb5%2FxbkAbruyTh8XkVjHd2fZ5hPEbQRU9RpXaqQJv5kr9idrdHnT71VPhhJHmpcGgYJWMUqxxBexPp7B5DPJr6NSbzByhdfn7vj2C%2Bu6hBb1WMWuq8M0NBAZH8LFz0EbsnkWXow5TU%2BHJrrD3PxOdr%2Fq%2FIG7eJkGtsJDj8BLxaVezwpGf9SizlxUL2DqJUvb0EVkv%2BkrGfosgtqSwNm5wz2gG%2BCukqyTkt289Wgm%2B7MSl%2BaK%2FypwXzIOdzn9Jr5WDe1KVlOuxes0WUk8wOWkaRuAhMpmdgEfo4hR1EEyfcoeJbSvR8OGPaFxo5UChjr7tazhL%2BZbLeE5WjO4ysru9jHR2v6xjryXyy3MD2gJFaN6h%2BogcLa3P2mfkM3Gg6aPrl9S42tQ1miQfCcGywjeTCqCIZ6vgm15NhXcxa5Tu9Y7ogWQxccOWIdb0m9OwcGbMQ4E09Imd%2BDU0kJufKMLmfi8oGOqUBjj9ckBSDaZ%2BdXAsRrMkbUzWJbtXf1TEkbZQCDohAK9ALHVjj%2BP0hpv%2Fmx4VRNCXeH6EoyqyrHwQiU31LUQw4sIUaQKJeJwgtlelUWHdF%2F%2BqtU%2FnnHyaoL2TjZ765ZkLpupUTReRXbyBoQCTLGaF%2BcJMNNhEYTCkqt05oDP4QEeYALu2%2FHeNjVgHmWnXzrj41r0BrLw0QEYECM5%2B0Zzh693smL9K9&X-Amz-Signature=fcd68a7a4c27cf4ed6894c6a5beaa5ab9780946095620cbf1ada61b85bc87a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7RGAZJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGVjgNOvfNJOrZI5zRLuZYMyrHmuIS2VzW681xFRMNtAIgGn7LAvzWRvcwS13b9WXObc4x4s4fg3n3YDyZHKVitgsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCkZ2OsBEsQEt1ZxCrcA5IQfu0yVjJdDSFLD4b2HU3OPpj2wldUxeRoKJh8S5fzawaGFuH8m7oH9P%2Bs7Bf2CMTq1qevq9eM6Gxrd7UJ%2Fob0fgliXrp72hILMAoC63pjyRKIjRifWr1ccNjVPAtkjOqD%2BuweQJVQ8yv8Y6J1WL87AvBaWKFaCZ7mKXaFyQDb5%2FxbkAbruyTh8XkVjHd2fZ5hPEbQRU9RpXaqQJv5kr9idrdHnT71VPhhJHmpcGgYJWMUqxxBexPp7B5DPJr6NSbzByhdfn7vj2C%2Bu6hBb1WMWuq8M0NBAZH8LFz0EbsnkWXow5TU%2BHJrrD3PxOdr%2Fq%2FIG7eJkGtsJDj8BLxaVezwpGf9SizlxUL2DqJUvb0EVkv%2BkrGfosgtqSwNm5wz2gG%2BCukqyTkt289Wgm%2B7MSl%2BaK%2FypwXzIOdzn9Jr5WDe1KVlOuxes0WUk8wOWkaRuAhMpmdgEfo4hR1EEyfcoeJbSvR8OGPaFxo5UChjr7tazhL%2BZbLeE5WjO4ysru9jHR2v6xjryXyy3MD2gJFaN6h%2BogcLa3P2mfkM3Gg6aPrl9S42tQ1miQfCcGywjeTCqCIZ6vgm15NhXcxa5Tu9Y7ogWQxccOWIdb0m9OwcGbMQ4E09Imd%2BDU0kJufKMLmfi8oGOqUBjj9ckBSDaZ%2BdXAsRrMkbUzWJbtXf1TEkbZQCDohAK9ALHVjj%2BP0hpv%2Fmx4VRNCXeH6EoyqyrHwQiU31LUQw4sIUaQKJeJwgtlelUWHdF%2F%2BqtU%2FnnHyaoL2TjZ765ZkLpupUTReRXbyBoQCTLGaF%2BcJMNNhEYTCkqt05oDP4QEeYALu2%2FHeNjVgHmWnXzrj41r0BrLw0QEYECM5%2B0Zzh693smL9K9&X-Amz-Signature=e33ad0ac114c3a893334c911c9720afbbd0d19f3cbf26c4ee2f89759169da609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
