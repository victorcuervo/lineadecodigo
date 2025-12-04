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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUZFRTJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDpnEEajP9GvogXjLVC23g3toHWE1hgyXzXLmNzq98c7QIhAJgAtVM0d%2BEUqwiCPwXWeNa%2BGZR3VdhY9YTFNv8i38vqKv8DCEEQABoMNjM3NDIzMTgzODA1IgwIkPhuxRDqOb6d8p0q3AMtNxUi17YQOhiXvzu4XmUnoNhvFsDMVnfrcbTVkEj8ZSjUU83h9lecjMQMBjaVzZeqMGNbynJp2NSv2qDdX4aGc9cdUQop5AUThUQDbGU3v9cPXFYdhV8BkY%2BnqLOhAIHOjjUGSvyBb6oS21cLFhjjPoTZ91TXy7edVZVcn6JRiEGErXNzQrhEZBplAVvIHmCBbRvaJrb4oMMK3IZ3TzmhwEf43Gb9cFMMM%2B2HjEG2rjx75u5Mk20JANhu5HasyvpCuJbjxo%2F9OcuRykhsmcVCZP4kHjyNniP7Dr%2B6q5nhWVK0w%2F7ia4QKy3FYtOP%2BvRBL4M%2B7r1WjyJQLeQBaQAg7TMVVjlRRneFyGnAsNEukzC5BTu0OKEznZOHRZ1Cw7H9AynNczW5EqNZXm2nKSK03JRFHhGE5L2ZUWmXblMUbkYfnE0bc7Ywn3mV%2FAk%2FstR3CpI9DNU0giasXHHAq%2BKglRQ5OzaF5MWJwpkA%2FG6s7QOrMriSXi9wzvdQOlVO6tL4cg%2BqktCxB7K92SIBREeCEf1exAbt0YKWJEU%2BIzI42EYQ69kLoMxFQnakUcZA%2BSseuZP6xhN9SruxYSAkHiRLtecaDUYB5I8yIdOLRz7t4dO9AUKvxyvZqLT7o9jDlhcXJBjqkAZJ3FZAmh9obddb6Ud9wuz0m5uGy25cP0ACCDIKv5G3KRupV30PDbArT%2BGW8EiNRkOAbzA9XB8JZUpDSukK005nq5tnrscwjipDfjz7CE2dlBVQ4DBEEd80GZhjnwGieLeQ6NQqBOI2yiZz2SP1idWJFTZLucJJqyh8Of4C89Wn11GcbV%2B2MLNJyX%2Faq%2B%2FVaAZLzcrUFaK85nNY7Nvixyz6jIJrs&X-Amz-Signature=6387668c4f035aa7b0947f3f00fa9adfa382b00bd6de1beed21ccba28c192f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUZFRTJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDpnEEajP9GvogXjLVC23g3toHWE1hgyXzXLmNzq98c7QIhAJgAtVM0d%2BEUqwiCPwXWeNa%2BGZR3VdhY9YTFNv8i38vqKv8DCEEQABoMNjM3NDIzMTgzODA1IgwIkPhuxRDqOb6d8p0q3AMtNxUi17YQOhiXvzu4XmUnoNhvFsDMVnfrcbTVkEj8ZSjUU83h9lecjMQMBjaVzZeqMGNbynJp2NSv2qDdX4aGc9cdUQop5AUThUQDbGU3v9cPXFYdhV8BkY%2BnqLOhAIHOjjUGSvyBb6oS21cLFhjjPoTZ91TXy7edVZVcn6JRiEGErXNzQrhEZBplAVvIHmCBbRvaJrb4oMMK3IZ3TzmhwEf43Gb9cFMMM%2B2HjEG2rjx75u5Mk20JANhu5HasyvpCuJbjxo%2F9OcuRykhsmcVCZP4kHjyNniP7Dr%2B6q5nhWVK0w%2F7ia4QKy3FYtOP%2BvRBL4M%2B7r1WjyJQLeQBaQAg7TMVVjlRRneFyGnAsNEukzC5BTu0OKEznZOHRZ1Cw7H9AynNczW5EqNZXm2nKSK03JRFHhGE5L2ZUWmXblMUbkYfnE0bc7Ywn3mV%2FAk%2FstR3CpI9DNU0giasXHHAq%2BKglRQ5OzaF5MWJwpkA%2FG6s7QOrMriSXi9wzvdQOlVO6tL4cg%2BqktCxB7K92SIBREeCEf1exAbt0YKWJEU%2BIzI42EYQ69kLoMxFQnakUcZA%2BSseuZP6xhN9SruxYSAkHiRLtecaDUYB5I8yIdOLRz7t4dO9AUKvxyvZqLT7o9jDlhcXJBjqkAZJ3FZAmh9obddb6Ud9wuz0m5uGy25cP0ACCDIKv5G3KRupV30PDbArT%2BGW8EiNRkOAbzA9XB8JZUpDSukK005nq5tnrscwjipDfjz7CE2dlBVQ4DBEEd80GZhjnwGieLeQ6NQqBOI2yiZz2SP1idWJFTZLucJJqyh8Of4C89Wn11GcbV%2B2MLNJyX%2Faq%2B%2FVaAZLzcrUFaK85nNY7Nvixyz6jIJrs&X-Amz-Signature=eec4e6c5358233eee988b7cf162aa553af4ee52ab080fabb61c15952a0520741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
