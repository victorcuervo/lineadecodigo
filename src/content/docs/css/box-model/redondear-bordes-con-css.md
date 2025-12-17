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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7URT2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAuOW3NkqnAZvej2OiLoDVpGuD4je48T%2BYUJDspsceXwIgc2qk3mMOVLeRntwuJSQm452exxenz6OwKys%2FCvEOeXUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o1fDIUDWlsjF%2B4yrcA4U8XPLzTaHmGz7Q9%2FRSQBZ7iUa6E3gFQnwj8dLdt1%2ByXDb3N6q4ceJzggD3Kq7dQBkvPkuGZmE1ieDgcPEur69ynVoA0zV9fdsvmQEWAHZbZZ%2FBM%2BifA8230xqTPYIBY7%2FPkM1AMBrQxrgJrmjDRQJ%2FPhC0W1UqFk9ATnxr3DZxqZiUhIJpXCbX9eTpETM74YmUMwchqAexnYryNP3g7yYrlT1qsKdEn8ib%2FLDuxg1Do6iBgH9a7WBGJIzoki4YrMhVJ5NROz7UBfzrk%2BHxBf3Hdlbv%2BDYDHXLgLFA94WzFPzmL7siF5M%2FXUSmOMRNS9vrgXzF8B0yO26AA1M8nt%2B0gFMY8311CFL67RTHnadpLpOYa2EJ5w780y3bk2jpQXLZzAVv84ZroecQ9DodJldlAnNR4uzqEFy%2B4GKaTgErr%2Br3B5U9awffHt%2FCQ5x%2BDeSgiH%2FPafivwcQeVlrxvwYSd%2BZfrjmbPHi%2BJjKK82%2BuZ1arwCzjSEzX8cmGRKeQJ4HusobFNzCSdpVK%2BUS9zO9MU6XSUrtWubbdjYLlxmN8ShCJ67jDSJXDpLqdQJVf532f8gh%2FYSucwG0Owv4VkC1jE0Vj7LQutTZ0vSQdeZ7WiwCRhB4US6XabeKUYMJ2fi8oGOqUBcqAivM0fBHkrhAEDyAsUixiiDbAAz4AMlb%2B8DGyj5AY6q4EyyR1oIb7j2h3hy9Jt%2Bo2cmeMEWCjqaBFGxbxBUptq%2BvjpZNSieD707LSZ2478Z4AeHkS%2FoNXCWMN8xHSR61vMI%2BdeeNjTGUMqyGK3nHBEpBAlE%2BdgWFIF%2FgvYYqo%2Fj9qkHaRiyta5XhsGe44%2F2ZfNBRwyoXUF6XEzCkkfTP7aiinT&X-Amz-Signature=52bb9fea2536624fbbc2690ea4c5be901db7db147b17009c8da23c9932e75a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7URT2Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAuOW3NkqnAZvej2OiLoDVpGuD4je48T%2BYUJDspsceXwIgc2qk3mMOVLeRntwuJSQm452exxenz6OwKys%2FCvEOeXUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o1fDIUDWlsjF%2B4yrcA4U8XPLzTaHmGz7Q9%2FRSQBZ7iUa6E3gFQnwj8dLdt1%2ByXDb3N6q4ceJzggD3Kq7dQBkvPkuGZmE1ieDgcPEur69ynVoA0zV9fdsvmQEWAHZbZZ%2FBM%2BifA8230xqTPYIBY7%2FPkM1AMBrQxrgJrmjDRQJ%2FPhC0W1UqFk9ATnxr3DZxqZiUhIJpXCbX9eTpETM74YmUMwchqAexnYryNP3g7yYrlT1qsKdEn8ib%2FLDuxg1Do6iBgH9a7WBGJIzoki4YrMhVJ5NROz7UBfzrk%2BHxBf3Hdlbv%2BDYDHXLgLFA94WzFPzmL7siF5M%2FXUSmOMRNS9vrgXzF8B0yO26AA1M8nt%2B0gFMY8311CFL67RTHnadpLpOYa2EJ5w780y3bk2jpQXLZzAVv84ZroecQ9DodJldlAnNR4uzqEFy%2B4GKaTgErr%2Br3B5U9awffHt%2FCQ5x%2BDeSgiH%2FPafivwcQeVlrxvwYSd%2BZfrjmbPHi%2BJjKK82%2BuZ1arwCzjSEzX8cmGRKeQJ4HusobFNzCSdpVK%2BUS9zO9MU6XSUrtWubbdjYLlxmN8ShCJ67jDSJXDpLqdQJVf532f8gh%2FYSucwG0Owv4VkC1jE0Vj7LQutTZ0vSQdeZ7WiwCRhB4US6XabeKUYMJ2fi8oGOqUBcqAivM0fBHkrhAEDyAsUixiiDbAAz4AMlb%2B8DGyj5AY6q4EyyR1oIb7j2h3hy9Jt%2Bo2cmeMEWCjqaBFGxbxBUptq%2BvjpZNSieD707LSZ2478Z4AeHkS%2FoNXCWMN8xHSR61vMI%2BdeeNjTGUMqyGK3nHBEpBAlE%2BdgWFIF%2FgvYYqo%2Fj9qkHaRiyta5XhsGe44%2F2ZfNBRwyoXUF6XEzCkkfTP7aiinT&X-Amz-Signature=14d756b56ced4901148dbb80880c64364f99e0c402a5c831d71de36c38709e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
