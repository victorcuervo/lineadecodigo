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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46KFSTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7XI8xblILi2i2jGYikMm5BqkpUMr4rVnIF%2BX8wy1gAiB2XAflNxpUYn1uRIbXpQo67zL45t3ORd1vGcbXrfysnyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMXWFFpK0r6QdtETygKtwDKLRTH83cze5HUhbTFL7EZMtP0UGqPvwEg%2FRZY8CNoJDQCcJjm6zb%2BuhphLKxdKl7Pep7XRh%2BHp0%2F3F%2BjQynvzXyWg3dPYt8HveJPT3P7Tq3Hr0AA1DWtXezGdelIXMCpVh9Qm68A1C6P%2Bb3by3R9%2FMXgN3%2BobBxWhDzJ3GRPzqjB9tGKeWYKrmAX%2Fb%2Fhmi9cRe5F177Pb7MHa%2ByKsxaldC0IMjF7iaU%2F3AnmFoXAK6c0PJKhGji1gcXQKbiI3zSJHNlfxAhYqT%2FqZXSHmb4mYad6K550eSllTOII9k%2B0xanRzyGIY6%2FrR4OKzJPmnWbcYRCgpzCWhRTvW34W7IyhCgvF2qZNrBSzOv88%2FFaUa5z5SzfdGhL3Z%2BAC%2BY3aN6Db6oWcBpKOrNmGtZ2PVKK0xl25mawhrcEgeQ7Cj90hgGmB11LjjPw%2Bk949IvZZWvcZDQ4liOQWl7RI1Z8Rx8gL0JrKLafXOpC0Y1DTlISTSQB%2FpqaPG6wk9jHhy3Q%2FLolKQSSFwbzDyeMuSMyx8Z5uIG4QeGwoRjzn28W2ibdKt59UJSvl8LFBP0HRI3inUe44mB4TAhjkqK7rMRsIlUPpoqUlUwivrvj%2B%2BJS4OnM6iEDaQKgWyHf7AhFr1BkwicvKyQY6pgG78sf5XBoCuwFU7yfjsQsb8DqcvNXISYXEsQTp5UdaZnPP%2FF%2FYOnqcZ59HdM0fEJcmJhrFc8qRbx0SJ2kY6vWE50D6K4D4AvYsaqZ0TI3Dm9WIc%2BGKu64B5dqsQiXskcWogYpKAbaL3tBp0oUcMTjfjo3d1nfH%2BjBRv9iSXEkDg738qpLeYeqkJqTCEFUjt7lbz9H3QozBd2Y2FAp5TtHOedtC0NEW&X-Amz-Signature=857498b2fb60ccc6e850bdee3089bc4a3f8c1fb1111e76ffe2fcab01d92085a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46KFSTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7XI8xblILi2i2jGYikMm5BqkpUMr4rVnIF%2BX8wy1gAiB2XAflNxpUYn1uRIbXpQo67zL45t3ORd1vGcbXrfysnyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMXWFFpK0r6QdtETygKtwDKLRTH83cze5HUhbTFL7EZMtP0UGqPvwEg%2FRZY8CNoJDQCcJjm6zb%2BuhphLKxdKl7Pep7XRh%2BHp0%2F3F%2BjQynvzXyWg3dPYt8HveJPT3P7Tq3Hr0AA1DWtXezGdelIXMCpVh9Qm68A1C6P%2Bb3by3R9%2FMXgN3%2BobBxWhDzJ3GRPzqjB9tGKeWYKrmAX%2Fb%2Fhmi9cRe5F177Pb7MHa%2ByKsxaldC0IMjF7iaU%2F3AnmFoXAK6c0PJKhGji1gcXQKbiI3zSJHNlfxAhYqT%2FqZXSHmb4mYad6K550eSllTOII9k%2B0xanRzyGIY6%2FrR4OKzJPmnWbcYRCgpzCWhRTvW34W7IyhCgvF2qZNrBSzOv88%2FFaUa5z5SzfdGhL3Z%2BAC%2BY3aN6Db6oWcBpKOrNmGtZ2PVKK0xl25mawhrcEgeQ7Cj90hgGmB11LjjPw%2Bk949IvZZWvcZDQ4liOQWl7RI1Z8Rx8gL0JrKLafXOpC0Y1DTlISTSQB%2FpqaPG6wk9jHhy3Q%2FLolKQSSFwbzDyeMuSMyx8Z5uIG4QeGwoRjzn28W2ibdKt59UJSvl8LFBP0HRI3inUe44mB4TAhjkqK7rMRsIlUPpoqUlUwivrvj%2B%2BJS4OnM6iEDaQKgWyHf7AhFr1BkwicvKyQY6pgG78sf5XBoCuwFU7yfjsQsb8DqcvNXISYXEsQTp5UdaZnPP%2FF%2FYOnqcZ59HdM0fEJcmJhrFc8qRbx0SJ2kY6vWE50D6K4D4AvYsaqZ0TI3Dm9WIc%2BGKu64B5dqsQiXskcWogYpKAbaL3tBp0oUcMTjfjo3d1nfH%2BjBRv9iSXEkDg738qpLeYeqkJqTCEFUjt7lbz9H3QozBd2Y2FAp5TtHOedtC0NEW&X-Amz-Signature=f4d33e3ca1a01e961c664b990f20a1d162cb970dc0c4803f12c5cee9f0b8da47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
