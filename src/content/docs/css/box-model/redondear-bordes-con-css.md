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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFYQSGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OdAN%2FqCCxdFhWigstw9ICsHpB0%2BhjUjT87cERarL8AIhAPQ4uUfdp%2Bv8OT5sd1WyUZc5cFLulhCr9znxX17CP88MKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2J2YU3hw1jOmgzHAq3ANhlxQtbmsZrjsi0b2USyxAiKlMQjkxXUUpZCYOUCWEwAlhGR1QaO0IAlK1kv4dX0cfIgBvvMSNhXWr3a1nTY3qhSs6TL4zpFIll7RZP0H4eEfq%2B4u6EBb3ql%2Ff8yStSAdbH08bd286D3skEM%2B4Tyf6lI5LT6O4izeoDeRWEZlW7Lwephfgg6SIUptuZldy%2FsZmEpp5id9E1y%2BjB%2BgOHLl9A3RnAQLeuiaIE4qpAncEMWHCo9o0wZDLuIsse%2FzAUtXoUD6hH4vUoAqnR69bs6dMFBw98Xd2v8qwQy5%2B2ogTXxnAfOcQBpVUqctN4QlnFgo2%2F%2BkKSBShI8K%2Fkohkk9wDOxy2SfBJq7%2B9RqccB7T1pmDPtZZtawBp%2F9FXGUREwcjNI9X5Xr8hPUcsKUe3NXXZsmKoDOm3zP0HseHXXup%2FaNP9MLkxp9XullnIKGZmBbuBUoD09kNvl2GlK7XGE0%2FzWA5jlTuQh2CE6KU3Z1k1fVukOnECmFbz3XXHl8uuoiVZw%2FyrLPgmCa2WHgULoSuVikK%2F2IeRdWk3aBqDajKMM08vh3V8mcW3UK5flwess0lscx5hq%2BTsFOCZAx5p3%2FyVQLgvA%2FfLerfIstXsnYv3m4TzTCgQ%2FtMrqjxWtTD0%2F4rKBjqkAaizWbMGzDeNCR5T7nUf4ego52LXsK9E0OwBPL3EanvcI5dE5BE8yldxzp8cnogvH8vh3elT5DgIPJYnebTkyVIZ6wgIZNzLr%2Fe30Iu%2BB5VbzeSM3QQ%2FyAJ8iPn9%2F5GI1S%2BZ9WhFXgHIoKe4chImvnoerHqBmZc9xe9WICLJJkRSoIdAcgRlSgMGHMqNewLU9eOK6NhJea76KIT7Il4M5sKSK2Po&X-Amz-Signature=bf74ca898a7cbbbdd7b5e2da8748c60f3721af9032815f0813b5daf77b385e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFYQSGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OdAN%2FqCCxdFhWigstw9ICsHpB0%2BhjUjT87cERarL8AIhAPQ4uUfdp%2Bv8OT5sd1WyUZc5cFLulhCr9znxX17CP88MKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2J2YU3hw1jOmgzHAq3ANhlxQtbmsZrjsi0b2USyxAiKlMQjkxXUUpZCYOUCWEwAlhGR1QaO0IAlK1kv4dX0cfIgBvvMSNhXWr3a1nTY3qhSs6TL4zpFIll7RZP0H4eEfq%2B4u6EBb3ql%2Ff8yStSAdbH08bd286D3skEM%2B4Tyf6lI5LT6O4izeoDeRWEZlW7Lwephfgg6SIUptuZldy%2FsZmEpp5id9E1y%2BjB%2BgOHLl9A3RnAQLeuiaIE4qpAncEMWHCo9o0wZDLuIsse%2FzAUtXoUD6hH4vUoAqnR69bs6dMFBw98Xd2v8qwQy5%2B2ogTXxnAfOcQBpVUqctN4QlnFgo2%2F%2BkKSBShI8K%2Fkohkk9wDOxy2SfBJq7%2B9RqccB7T1pmDPtZZtawBp%2F9FXGUREwcjNI9X5Xr8hPUcsKUe3NXXZsmKoDOm3zP0HseHXXup%2FaNP9MLkxp9XullnIKGZmBbuBUoD09kNvl2GlK7XGE0%2FzWA5jlTuQh2CE6KU3Z1k1fVukOnECmFbz3XXHl8uuoiVZw%2FyrLPgmCa2WHgULoSuVikK%2F2IeRdWk3aBqDajKMM08vh3V8mcW3UK5flwess0lscx5hq%2BTsFOCZAx5p3%2FyVQLgvA%2FfLerfIstXsnYv3m4TzTCgQ%2FtMrqjxWtTD0%2F4rKBjqkAaizWbMGzDeNCR5T7nUf4ego52LXsK9E0OwBPL3EanvcI5dE5BE8yldxzp8cnogvH8vh3elT5DgIPJYnebTkyVIZ6wgIZNzLr%2Fe30Iu%2BB5VbzeSM3QQ%2FyAJ8iPn9%2F5GI1S%2BZ9WhFXgHIoKe4chImvnoerHqBmZc9xe9WICLJJkRSoIdAcgRlSgMGHMqNewLU9eOK6NhJea76KIT7Il4M5sKSK2Po&X-Amz-Signature=34ff891d955514ffc2f1da0d79b4214e1198953c6f7c1adf463ff7f08674d045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
