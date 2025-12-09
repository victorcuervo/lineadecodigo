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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZE6OQR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLMqcdolNPryunA%2B9Npl0wfUsjyVWw2vIIEcFv3o7z4AiEAvjbBQ5DKwVu8VpUIKIFan3ouuyZGkuR26bYXC%2Ff3YJAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPZaYDjYxOcrPHcgCrcA9TNRnx2933yRt6siM1iPeIRgBRwosiiALzD8S3GOM8%2BQaZMjpqZEYZcyRdlV5aWQEBh%2Bnub8W5adfLytXg%2FxYQpyYGLbjJ9%2BJkvNMBdzLeq8mvy7Gff0E%2FpZ3il8aLYYjVlziV5uncC6V9cfCwnXvAroLoD3VP6ZbP0ZxQnQsya%2FkxUZBeNlKmYiwOYtnoFCSk2HI77VlVAsa%2FJRMvMlHiKnb5QkyVtqYCsHsotErUsIe1oUjXnz8PmbJ3RFkkavTr5g37PNvwmknnQROL2CVGWJBHFzOdAynjEajZJ7seWEtU0xDyZmk2C47zrbEjRzdiE%2BjQb4jUIumU5UGi8iAxImrpEIsHuqiMvQcTM7FBH4RZBnCr5iK5TVS8jwCysHFaw5WdZ%2Fad63PiU8csnvmP1wZhXykt7V5rM51mHz4jhNVbmqZLViLhjCuLbet98bt%2FKJYCiNqsc6l5sr2yjoo4%2F0LahhmzCwg4scXig33L4EhfIRyGmJK6Qc8mPY5m2rcMYDz55PSrYuOJgWwLpUoTxQiSqdtnZORNTLtdI4mvdP6AfiWwxLwZpaSpLH8rDwkEm8ikYJ00MYhi42oZr15evd7HrFFgu%2FcTfqp%2FoSorGcvGF9fYaSWFkK03RMLmO3skGOqUBP9CbKE7UySSh8onkdpd8UmZN%2F3b8olv8LfK66EGzwWlfHJ0OoadSSWGt4uP28k3YUWKuSeyMG92UwBEyX6E3R2%2Barm%2FdKSMym1VhYsAV2Os9sMNJDxtuB0Y7USMpihGgcnQWmEXu9xb9Bt3qWNvwfbSkVJ4QmeNExFoHd0pXL9aOG2ahLSZw0q5xlhyDcYFONZXokXvIgIN6wmU8bHiA3jn6GSvU&X-Amz-Signature=1d5335de0b21d0f4f72aa37ce57383d61ad731b4580a1ce075c14ef767011184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZE6OQR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLMqcdolNPryunA%2B9Npl0wfUsjyVWw2vIIEcFv3o7z4AiEAvjbBQ5DKwVu8VpUIKIFan3ouuyZGkuR26bYXC%2Ff3YJAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPZaYDjYxOcrPHcgCrcA9TNRnx2933yRt6siM1iPeIRgBRwosiiALzD8S3GOM8%2BQaZMjpqZEYZcyRdlV5aWQEBh%2Bnub8W5adfLytXg%2FxYQpyYGLbjJ9%2BJkvNMBdzLeq8mvy7Gff0E%2FpZ3il8aLYYjVlziV5uncC6V9cfCwnXvAroLoD3VP6ZbP0ZxQnQsya%2FkxUZBeNlKmYiwOYtnoFCSk2HI77VlVAsa%2FJRMvMlHiKnb5QkyVtqYCsHsotErUsIe1oUjXnz8PmbJ3RFkkavTr5g37PNvwmknnQROL2CVGWJBHFzOdAynjEajZJ7seWEtU0xDyZmk2C47zrbEjRzdiE%2BjQb4jUIumU5UGi8iAxImrpEIsHuqiMvQcTM7FBH4RZBnCr5iK5TVS8jwCysHFaw5WdZ%2Fad63PiU8csnvmP1wZhXykt7V5rM51mHz4jhNVbmqZLViLhjCuLbet98bt%2FKJYCiNqsc6l5sr2yjoo4%2F0LahhmzCwg4scXig33L4EhfIRyGmJK6Qc8mPY5m2rcMYDz55PSrYuOJgWwLpUoTxQiSqdtnZORNTLtdI4mvdP6AfiWwxLwZpaSpLH8rDwkEm8ikYJ00MYhi42oZr15evd7HrFFgu%2FcTfqp%2FoSorGcvGF9fYaSWFkK03RMLmO3skGOqUBP9CbKE7UySSh8onkdpd8UmZN%2F3b8olv8LfK66EGzwWlfHJ0OoadSSWGt4uP28k3YUWKuSeyMG92UwBEyX6E3R2%2Barm%2FdKSMym1VhYsAV2Os9sMNJDxtuB0Y7USMpihGgcnQWmEXu9xb9Bt3qWNvwfbSkVJ4QmeNExFoHd0pXL9aOG2ahLSZw0q5xlhyDcYFONZXokXvIgIN6wmU8bHiA3jn6GSvU&X-Amz-Signature=ae569408cb34c2e493404e8b20f5687c62ae5710b25f42c2d74ff80e8932d4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
