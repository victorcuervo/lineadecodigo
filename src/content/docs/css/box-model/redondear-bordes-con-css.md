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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJO6ATBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpkJWIhp79jGqsxKi95W8WJXe7l6RPvaQOevQz11%2BQyAiBebCsXT2LTKU%2BiQTKJNqf%2BebHf0xP3H%2FmsvnICdYMuriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLW%2Bk91HlT5zM8DZPKtwDCg1%2Bkzf1EtSkqF1je66771cfv6TL9wLJCham0wgEH%2BMk%2FH5iL3vpXF2KZ8zZXqhj7FFMFJqpw4q90P0oUD9SxVsWDqELMn4TosPRJJ2jzhmHYC1SlrYbWyEis%2FewisK5q3dOT9In2s0SyWfNVZfhueLUiocvB0zFLjT2Jr2N2bOfU5RTO2D9W29RT0bG%2FT11B0xcfxPNj8inpZeoe5v9R7nWGepYkeu0yXydMxB2vIxbaxu3W5EjU7CPQ%2BydJ3C6L13thiS%2Bi9SqBVLFvzAhs6xosgPjnBL2ZGerloUVYMrD3AMbcocVDfeq%2FLB0HbNUMiFhx7pvvOHdU4ltn8hvPZl%2Fdh5qZvp88W1vo2Up1%2FBRMaEwI5BZeXGljt2PwHBlszfhf3H40RwN3jFVaD7RI8DhxSrUc857KZmuxbdqftAggFkGsfrKKLT49va2c2ybv%2FmHDL5JHNFXjkm5G9xTq50xbq6BcCPynqM%2FaxzTpyYwqtvlgBBJd1JtY6dYkHv7NEeKv2ocwtc210nK%2BtY0JOGH09dpFLTmVm7jknzvxEHbVuBb5DVlCtgsPAt9q4r%2F%2BJ5%2F8UQt0zU6D%2B7KFS7do5V7AAECSESSRohiWYIMtVRsvqv4Iihae%2BC8IAEw5p6LygY6pgEgKi9hhKIW3m5sGwmlFKW3%2Bue2Au60X8%2B%2B62gkxl%2BlmS0dXKP1tEAUy5XaRU3MSljQlIir5QdcmA202TOkiTirVeQZ0RzIgF0vsTIN%2FZsJlvm4Y5gT0A8xK51%2B%2F0FBNibGz3KZxjHfrB05AV4xqze5Ap0gZZT48R%2BZrTPrVslPQErVEh9iKB9EGU251T4t2HK8Q%2BIqpXcBS5QgdoOngAiqVZIb4QU6&X-Amz-Signature=693d60362a19a4a81bfcd8ac981acfb3b7ee90be11e837ee5a1bbb928983d07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJO6ATBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpkJWIhp79jGqsxKi95W8WJXe7l6RPvaQOevQz11%2BQyAiBebCsXT2LTKU%2BiQTKJNqf%2BebHf0xP3H%2FmsvnICdYMuriqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLW%2Bk91HlT5zM8DZPKtwDCg1%2Bkzf1EtSkqF1je66771cfv6TL9wLJCham0wgEH%2BMk%2FH5iL3vpXF2KZ8zZXqhj7FFMFJqpw4q90P0oUD9SxVsWDqELMn4TosPRJJ2jzhmHYC1SlrYbWyEis%2FewisK5q3dOT9In2s0SyWfNVZfhueLUiocvB0zFLjT2Jr2N2bOfU5RTO2D9W29RT0bG%2FT11B0xcfxPNj8inpZeoe5v9R7nWGepYkeu0yXydMxB2vIxbaxu3W5EjU7CPQ%2BydJ3C6L13thiS%2Bi9SqBVLFvzAhs6xosgPjnBL2ZGerloUVYMrD3AMbcocVDfeq%2FLB0HbNUMiFhx7pvvOHdU4ltn8hvPZl%2Fdh5qZvp88W1vo2Up1%2FBRMaEwI5BZeXGljt2PwHBlszfhf3H40RwN3jFVaD7RI8DhxSrUc857KZmuxbdqftAggFkGsfrKKLT49va2c2ybv%2FmHDL5JHNFXjkm5G9xTq50xbq6BcCPynqM%2FaxzTpyYwqtvlgBBJd1JtY6dYkHv7NEeKv2ocwtc210nK%2BtY0JOGH09dpFLTmVm7jknzvxEHbVuBb5DVlCtgsPAt9q4r%2F%2BJ5%2F8UQt0zU6D%2B7KFS7do5V7AAECSESSRohiWYIMtVRsvqv4Iihae%2BC8IAEw5p6LygY6pgEgKi9hhKIW3m5sGwmlFKW3%2Bue2Au60X8%2B%2B62gkxl%2BlmS0dXKP1tEAUy5XaRU3MSljQlIir5QdcmA202TOkiTirVeQZ0RzIgF0vsTIN%2FZsJlvm4Y5gT0A8xK51%2B%2F0FBNibGz3KZxjHfrB05AV4xqze5Ap0gZZT48R%2BZrTPrVslPQErVEh9iKB9EGU251T4t2HK8Q%2BIqpXcBS5QgdoOngAiqVZIb4QU6&X-Amz-Signature=a3fc6a5a9c3f6b16fb28c3cdee8a66efbc6bff663c879410f3b2fb9553e9ecaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
