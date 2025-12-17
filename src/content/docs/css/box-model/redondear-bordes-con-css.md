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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6HHCEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlxkI7na8GL6Pi3ATTMSsYdl04rOYsHpY8i57XpUmqTAiBJFI%2B%2F2YcvcYaseo5mFWA2Qp6SJCwWcYGMuyuG2UoZQir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMeJMZ7m5PEbjpaLKvKtwDpE78XAjUGMh6niBuASkKGZdgb04leX4r3stSlR5faSnG1jPrOOpgdiFXXvJZX7NokGC%2BeoJBwqptZjX4KEOI2ZBDEiBUSLa7muGGWBMDUGTuVfdm4virEqFt5p3U11erAVQTm4nWjM42IeT37%2BDPiKT7J892Tt%2F3OfvzNloEt4igitrBZtM6hQeQLim%2FThvBXwsJZ4FqXtma1w1jZF9WGkcjwbMWCB%2FmGnxqDpGJ%2BYI0umkVz3s3LNXIfJzXEVEY%2Few2T7GJl78YnxY%2FXc7CjAHHvzpOYEV%2BSPsoo7p3FpoOE37W5cXgYBlCYXmw8HaK1J8WnxRvBG4%2F%2FVicqudkE%2FNqoY6k9R9WHIPrWr1Q96Rs5%2FNxEg27JQlRX7%2FDHl8zmWQ%2Fq35M%2BOTPL5YX1k1i0SxcahS0HSWt3wXPxYyCX9qli7FLrxgYmvomIYBo2FdiBp595%2Fhs2eyFPxVx64ihWlGte7U%2BwZ2LGUCvjYvnxTU0TfXKBpYMIUPaKKmXh5wTM6exjDc7Tsa0LS0HmPKfVwXVlHdMiqWyGR%2Fat65MTN%2BMz3H2YIbTifZirKSPU6%2F9jWFX%2B4ZqcyJpqGPINh2%2B6CgZdXnjTErKteqWl6Pm3QcVSDogo4MSUTKhdqEw4dKJygY6pgH9xG%2FJuiYjk15xJJu513Ou1%2B1gnYyjaqc1Fsp6muCqN0q37qwWss0Hqa9I6ib2VtRIN541Jdn6rO6IarT6xvkaZgz7XXByrONU0BqsNhOshLJkW%2BLmQqrbyGAIglmOjvG2VzighrnZywvm3OlFBkn4FYToQamG0ruUz2DtMB%2BJitaJELOzYrPkHaHEUhytrSmFmQRcciJ%2Bu0RFW4oV4jdEJxpSk3tN&X-Amz-Signature=60ff2cb1072cb69951db320e3c50a134978ffee895f15a1d5febd18c2e6e30e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6HHCEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlxkI7na8GL6Pi3ATTMSsYdl04rOYsHpY8i57XpUmqTAiBJFI%2B%2F2YcvcYaseo5mFWA2Qp6SJCwWcYGMuyuG2UoZQir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMeJMZ7m5PEbjpaLKvKtwDpE78XAjUGMh6niBuASkKGZdgb04leX4r3stSlR5faSnG1jPrOOpgdiFXXvJZX7NokGC%2BeoJBwqptZjX4KEOI2ZBDEiBUSLa7muGGWBMDUGTuVfdm4virEqFt5p3U11erAVQTm4nWjM42IeT37%2BDPiKT7J892Tt%2F3OfvzNloEt4igitrBZtM6hQeQLim%2FThvBXwsJZ4FqXtma1w1jZF9WGkcjwbMWCB%2FmGnxqDpGJ%2BYI0umkVz3s3LNXIfJzXEVEY%2Few2T7GJl78YnxY%2FXc7CjAHHvzpOYEV%2BSPsoo7p3FpoOE37W5cXgYBlCYXmw8HaK1J8WnxRvBG4%2F%2FVicqudkE%2FNqoY6k9R9WHIPrWr1Q96Rs5%2FNxEg27JQlRX7%2FDHl8zmWQ%2Fq35M%2BOTPL5YX1k1i0SxcahS0HSWt3wXPxYyCX9qli7FLrxgYmvomIYBo2FdiBp595%2Fhs2eyFPxVx64ihWlGte7U%2BwZ2LGUCvjYvnxTU0TfXKBpYMIUPaKKmXh5wTM6exjDc7Tsa0LS0HmPKfVwXVlHdMiqWyGR%2Fat65MTN%2BMz3H2YIbTifZirKSPU6%2F9jWFX%2B4ZqcyJpqGPINh2%2B6CgZdXnjTErKteqWl6Pm3QcVSDogo4MSUTKhdqEw4dKJygY6pgH9xG%2FJuiYjk15xJJu513Ou1%2B1gnYyjaqc1Fsp6muCqN0q37qwWss0Hqa9I6ib2VtRIN541Jdn6rO6IarT6xvkaZgz7XXByrONU0BqsNhOshLJkW%2BLmQqrbyGAIglmOjvG2VzighrnZywvm3OlFBkn4FYToQamG0ruUz2DtMB%2BJitaJELOzYrPkHaHEUhytrSmFmQRcciJ%2Bu0RFW4oV4jdEJxpSk3tN&X-Amz-Signature=83349e6d09214ea79a36ba69bb35f78f2565ef1513c1b3aef2ac4ec71a451393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
