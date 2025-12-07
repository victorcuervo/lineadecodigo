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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTEXKABL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWpxhycP3hFqrjdoqF3j%2FFZ5craD9ZaHVBgWA3OO0%2BnAiAriI2ysYuJNJpbQ%2B1eQPw9K7wxxKPNIDotb4NE9nUXciqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeh8pEwevx5edShnmKtwDz0ZwPWkswRSQETLH2KvxXUBqy9RpIup0zY4Vx4VBIgoNB%2Bw%2BdhZfFffOt%2BfdRoMQchz%2BZW4DfzONi49%2Fl6a5dEHN4RdEf28rtWpzQYaeVkIqaSS5ZWuclOSUTk7NUzFcWwfkqiQbHl9TtWwaWS1ymn3Pgp0hmMPebCyWzc2fi8OXhlhfIJH8pJbh1reACxPaCkGqux87uL7baZRlnVkpjGZU%2FQXsqNvlVLsB5qbZklSv94Jpciy9eBbKmW3yg%2BDTFRnTAZuFQv0fquWoogPOxzjq1cjEHBasQR66Q24TJ7nQVbpTaxxSgSuvx%2BaGWGTiu3aMg4%2Fcqbn1i%2BD3kXoaTnuJpQrK%2BeeiVbApdev0ZGOw5izVVGXuvNKt9wRa3%2Fr0nL4%2BTzneLuzkhvJb%2BRiteA7N1tJyaQaU%2BCV7PdGZt9q6aT9TMy5PKVawNs4dvpM4I8Adj%2F3vKSKVUOvXMXTYbqAoPHebkE2HsMeQ0sQWj7%2B7%2BjXiilnVbBUwVfok6wFSXa8PO6SbK656TJt0Pazq60kZAzLKQ5S%2B52pIYHRpl%2FMH0xKcu%2B0MuI1ga2JnHLJiTc0O9sLwKpcb6GCiNMTyW3Q1k7Rdptxsa7ljSe%2BTP46TvwdShPa9d%2F2d8%2B0wyJnVyQY6pgELGfw1oSJHWA%2BVcc1U0a4kFENA%2By6UWe0rTVZJU%2F8BzT%2BZxttxvoJYIEZn7zANnuJFGxaAyu9iMuHLKuP7uXQTl%2Fz4a3Fvwz10VbFSh4jLJo9VatOMMW7UqCFJ8jNomaivo1%2Ffa1r267UqZ5tEA1tAeheq%2FkN%2BD94Xp14nxdVwPTp%2Fdhx1RS2fMBkXPgUD2k7mV04esip5nXv4BlSg%2B%2Bnz6nda2d8C&X-Amz-Signature=70396c0c9a07f74a4f9c1cd5f8685a2dd3d26a8b6f5a1ac965b7070e1f6c4309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTEXKABL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWpxhycP3hFqrjdoqF3j%2FFZ5craD9ZaHVBgWA3OO0%2BnAiAriI2ysYuJNJpbQ%2B1eQPw9K7wxxKPNIDotb4NE9nUXciqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeh8pEwevx5edShnmKtwDz0ZwPWkswRSQETLH2KvxXUBqy9RpIup0zY4Vx4VBIgoNB%2Bw%2BdhZfFffOt%2BfdRoMQchz%2BZW4DfzONi49%2Fl6a5dEHN4RdEf28rtWpzQYaeVkIqaSS5ZWuclOSUTk7NUzFcWwfkqiQbHl9TtWwaWS1ymn3Pgp0hmMPebCyWzc2fi8OXhlhfIJH8pJbh1reACxPaCkGqux87uL7baZRlnVkpjGZU%2FQXsqNvlVLsB5qbZklSv94Jpciy9eBbKmW3yg%2BDTFRnTAZuFQv0fquWoogPOxzjq1cjEHBasQR66Q24TJ7nQVbpTaxxSgSuvx%2BaGWGTiu3aMg4%2Fcqbn1i%2BD3kXoaTnuJpQrK%2BeeiVbApdev0ZGOw5izVVGXuvNKt9wRa3%2Fr0nL4%2BTzneLuzkhvJb%2BRiteA7N1tJyaQaU%2BCV7PdGZt9q6aT9TMy5PKVawNs4dvpM4I8Adj%2F3vKSKVUOvXMXTYbqAoPHebkE2HsMeQ0sQWj7%2B7%2BjXiilnVbBUwVfok6wFSXa8PO6SbK656TJt0Pazq60kZAzLKQ5S%2B52pIYHRpl%2FMH0xKcu%2B0MuI1ga2JnHLJiTc0O9sLwKpcb6GCiNMTyW3Q1k7Rdptxsa7ljSe%2BTP46TvwdShPa9d%2F2d8%2B0wyJnVyQY6pgELGfw1oSJHWA%2BVcc1U0a4kFENA%2By6UWe0rTVZJU%2F8BzT%2BZxttxvoJYIEZn7zANnuJFGxaAyu9iMuHLKuP7uXQTl%2Fz4a3Fvwz10VbFSh4jLJo9VatOMMW7UqCFJ8jNomaivo1%2Ffa1r267UqZ5tEA1tAeheq%2FkN%2BD94Xp14nxdVwPTp%2Fdhx1RS2fMBkXPgUD2k7mV04esip5nXv4BlSg%2B%2Bnz6nda2d8C&X-Amz-Signature=d7b4ae0092f98e0e6694bd37aeabeee0b35213bb7ffc88571fb8dd990b673546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
