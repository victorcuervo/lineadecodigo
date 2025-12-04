---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAU7BF7P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD3sX9XFiSYxlk%2BEhAMELVhvwwvOUBqYTRun8xmqc8z%2FwIhAMuo2lAYdepG%2Bgc9MQko0LWDhztoP4bGp3BC5kZMSz9CKv8DCD8QABoMNjM3NDIzMTgzODA1Igx3z0DoYq1E43ACN5Uq3ANxSKFX0xGtqoShNAleQn%2F7TVXxJOa0QzF2Ov0E%2BxmxyMvSyumQyAhXUhTNgWr%2FiPaOIx6HBbSDaL2m%2FUkKttf8rRogGaTvPUovdsvf7zGEkGh8MMq9kk3SqopBZtW%2BE9lXC615XGfF%2B3hfeEKXju%2FN%2F3SFTjnoz3XaAg5BNe1dioImPzM6%2BXH6AoawUfe0kXCxJa1mTd9HBClUai4ISwhMHiYY%2B8V65%2FZRM%2FXgugoInJ4xuZf0bTkdfL3JyDmjdlEzN1kdAWLhB3sKhkNFR%2B2SwOHEXerWgA7aZBx8L0j6Jg%2FVAPMwLLRHVnzwvdPqKdKTyzyYpx5Bd6J%2BBYLae6j61Wy1EqQUk08x5hdz3Q3%2FTh7WLM9w3cXhwHI8N%2FWw%2FXh3j0um1DXocy7dzW2qegNnaY07FSUnyT7dbbfNE7LvZUVq3AB7IUXY0XYy2hvdFoVCbUirJM8nMhDWcX3eAsUU6Y4QhvDwEGjjmcIVb1tXT5JTN5VtPzJ1sbH%2F45cOqmc%2BaHe74qaN1K8Bsd%2B9aop1Y0ZzjymzzN2tN%2FMZvYdafwaAID4X6d6HSyTLWfPaGKznIRBLXCdwbT48f%2FWZ4HTwrzAtyPKlJQK6wy%2FGff6KJfbpQZ6900tT7iRFgTCqycTJBjqkARoTz4jHqNPXwwgGZfZ4gb%2BUZUBPkKVMdwckiy1JJBIbZnXf84JF05gPk96qCaScTgjApHXKgZeHlyZkZHwMMZIWGoWyxHhRCjT9Dvgcd0LI2eBPAQy2YkUaN1fW0EuyK5suzm0hUWKSfZlQMExu7C6cBKgW7WVldBfzk4KYgj2lkCKZTVV1zqMS2HLjbRcG8ikfusjEdT3b3w0xS%2Bx%2FnXw2axh3&X-Amz-Signature=f309998fe3fda86027422ef6f363e74638efc0026d8dbbfd183186699b67b811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAU7BF7P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD3sX9XFiSYxlk%2BEhAMELVhvwwvOUBqYTRun8xmqc8z%2FwIhAMuo2lAYdepG%2Bgc9MQko0LWDhztoP4bGp3BC5kZMSz9CKv8DCD8QABoMNjM3NDIzMTgzODA1Igx3z0DoYq1E43ACN5Uq3ANxSKFX0xGtqoShNAleQn%2F7TVXxJOa0QzF2Ov0E%2BxmxyMvSyumQyAhXUhTNgWr%2FiPaOIx6HBbSDaL2m%2FUkKttf8rRogGaTvPUovdsvf7zGEkGh8MMq9kk3SqopBZtW%2BE9lXC615XGfF%2B3hfeEKXju%2FN%2F3SFTjnoz3XaAg5BNe1dioImPzM6%2BXH6AoawUfe0kXCxJa1mTd9HBClUai4ISwhMHiYY%2B8V65%2FZRM%2FXgugoInJ4xuZf0bTkdfL3JyDmjdlEzN1kdAWLhB3sKhkNFR%2B2SwOHEXerWgA7aZBx8L0j6Jg%2FVAPMwLLRHVnzwvdPqKdKTyzyYpx5Bd6J%2BBYLae6j61Wy1EqQUk08x5hdz3Q3%2FTh7WLM9w3cXhwHI8N%2FWw%2FXh3j0um1DXocy7dzW2qegNnaY07FSUnyT7dbbfNE7LvZUVq3AB7IUXY0XYy2hvdFoVCbUirJM8nMhDWcX3eAsUU6Y4QhvDwEGjjmcIVb1tXT5JTN5VtPzJ1sbH%2F45cOqmc%2BaHe74qaN1K8Bsd%2B9aop1Y0ZzjymzzN2tN%2FMZvYdafwaAID4X6d6HSyTLWfPaGKznIRBLXCdwbT48f%2FWZ4HTwrzAtyPKlJQK6wy%2FGff6KJfbpQZ6900tT7iRFgTCqycTJBjqkARoTz4jHqNPXwwgGZfZ4gb%2BUZUBPkKVMdwckiy1JJBIbZnXf84JF05gPk96qCaScTgjApHXKgZeHlyZkZHwMMZIWGoWyxHhRCjT9Dvgcd0LI2eBPAQy2YkUaN1fW0EuyK5suzm0hUWKSfZlQMExu7C6cBKgW7WVldBfzk4KYgj2lkCKZTVV1zqMS2HLjbRcG8ikfusjEdT3b3w0xS%2Bx%2FnXw2axh3&X-Amz-Signature=4da72c8c15f681184433bfadf47ec10cce4a4d33496aa00bc849ac60f9d23f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
