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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKE25VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyJHjGWxtYNruf%2FtWWWfaYZtZE94encTENto0gCjkwewIgRIYCY8a3p92ZDOcqygcNA87hWotK5pXVo5tsf1h2I6kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Wap7tTf6VxysDXircAzqdO3cCYWXKsJROD%2B9Q1Vp%2BE37vAVu9Lc2yEXAjKrbELY%2BzBZP1AkXyqr2hD83hbg%2F4kBnt9VpNWwMzsvbwr%2BuvxlZNr1I5s%2F%2FsmMpEgx3LmoIWy2ioQMzlXbVDuJLAuLo8rEKkTIv7nl8pb%2BLro1aXOvQ0sdRN7fTmrPi9RLiWHjhPCu42AU58mTmjrZMSeqI8lwGbPkUsflSjROTY81CnQXNmL8yotJHBP6j8cBHw7uRzEdiLEVLiS4O65ftstJH6DOkhp1AP0HR5oMqwYIXB2Ht6s9f304e0gc8UqQjAjIwGV%2FmrIBN4%2BVsyikF1HTzBdu94gbgBfBqBnfp3WUpehCV44uFuWao6PMZLfVcLWABdtfKsyzj4e2tizxcgbQn6awrokbUnGO5zSFNy8jJbucaz4ty49j6UuJPXe2sK9FO6oB5ZQGGGHDs9%2Bk78gdqJFKDNKyeWiZBJ24R8JyS2%2FozrEVj4ZPEDbrLGOyZQYZZrjXczLF2cghU9ThS4rvPqsb%2BS6qGlMZCg0N7fJJhfdlsNZZ8yi6RwNfS%2BlV7AuYankNyLHAb8ikwbLwRM4ZLw0oMaiUAxYyQUsi%2Fuxo3qXFWXJY1NlbLGCVTyGxpwfh0HzEyn5OhKJ20%2BML6a1ckGOqUBdS30DnYoJu24xAckCo5CjmdEpPAIB2hMwufr90SVOtlSGqAt8%2BVczeVKIG6K2XWv6n6dUyJ0Za7GZrcSDiz0uyJx6M7Ba4jE3wIv%2F8WpCc%2F0X2JpdVPefDpL3O97iuM7MGmSYImgXI7NQamE61lBilW7br864YH6xHrwmS2M3nBs5ZnLh0ohfwLkWZj6DuHhrbAJSo91KlFddgvnG7RlO307cTVP&X-Amz-Signature=b79bc0107958e03c70dd10cbb8322ff05da96f3b42c38544a41a4d08a6e9b3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKE25VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyJHjGWxtYNruf%2FtWWWfaYZtZE94encTENto0gCjkwewIgRIYCY8a3p92ZDOcqygcNA87hWotK5pXVo5tsf1h2I6kqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6Wap7tTf6VxysDXircAzqdO3cCYWXKsJROD%2B9Q1Vp%2BE37vAVu9Lc2yEXAjKrbELY%2BzBZP1AkXyqr2hD83hbg%2F4kBnt9VpNWwMzsvbwr%2BuvxlZNr1I5s%2F%2FsmMpEgx3LmoIWy2ioQMzlXbVDuJLAuLo8rEKkTIv7nl8pb%2BLro1aXOvQ0sdRN7fTmrPi9RLiWHjhPCu42AU58mTmjrZMSeqI8lwGbPkUsflSjROTY81CnQXNmL8yotJHBP6j8cBHw7uRzEdiLEVLiS4O65ftstJH6DOkhp1AP0HR5oMqwYIXB2Ht6s9f304e0gc8UqQjAjIwGV%2FmrIBN4%2BVsyikF1HTzBdu94gbgBfBqBnfp3WUpehCV44uFuWao6PMZLfVcLWABdtfKsyzj4e2tizxcgbQn6awrokbUnGO5zSFNy8jJbucaz4ty49j6UuJPXe2sK9FO6oB5ZQGGGHDs9%2Bk78gdqJFKDNKyeWiZBJ24R8JyS2%2FozrEVj4ZPEDbrLGOyZQYZZrjXczLF2cghU9ThS4rvPqsb%2BS6qGlMZCg0N7fJJhfdlsNZZ8yi6RwNfS%2BlV7AuYankNyLHAb8ikwbLwRM4ZLw0oMaiUAxYyQUsi%2Fuxo3qXFWXJY1NlbLGCVTyGxpwfh0HzEyn5OhKJ20%2BML6a1ckGOqUBdS30DnYoJu24xAckCo5CjmdEpPAIB2hMwufr90SVOtlSGqAt8%2BVczeVKIG6K2XWv6n6dUyJ0Za7GZrcSDiz0uyJx6M7Ba4jE3wIv%2F8WpCc%2F0X2JpdVPefDpL3O97iuM7MGmSYImgXI7NQamE61lBilW7br864YH6xHrwmS2M3nBs5ZnLh0ohfwLkWZj6DuHhrbAJSo91KlFddgvnG7RlO307cTVP&X-Amz-Signature=323e67d158d3836e124914a89100564b5dafdc2f3b8eaae9906b05c8918df79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
