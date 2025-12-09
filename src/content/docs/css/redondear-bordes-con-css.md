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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSLFQ24%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpH7e12AHzaSGWP7W2c5HOzLkz9bSipZDqMuD7NyJX7AiBlhgGrWKKWBnVg2J8A9ifUvijYvGSWOhziRio5Loo1WyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ8bfOziezGBKXTxKtwD8mTYQZgRaUvdS8yMSjvU6KCNqm4nG2IOFf1vZcbH71MRXpdT5rbdP%2BCh4iv1e0lp7NP8gI99vJgUf36zdGTFpPIAft7Z7IR57ph2pVW7iLJdb8BSu%2B0mq5pUpMIG0CNbV%2B5ilY90KnnndtDRmTnrGzmLz0S064nGFuajsuugWe%2FC%2FJ91cRIW1IoXlBqXyUJaXTlnezHYIxDoNjoPNOdL5WmkTySDr5tYz6o9NAw4%2BtNzGvz9crN8%2B2eTqwgOOBG0FyuyE0ugF0axxI8hG5T%2FchVv%2FhyG%2F4kGa5LOtlxzS%2F2ei%2FP2VIvO%2FJ7cEVW56bgxBneHLvFnBZeL08QdYupTH%2FZX4TDBTcyo0uROqg1niVjSybKGE0yeeeBH8Q4NrsIcF3lwaAvnU2MSYRXG%2FXyzM4C1ECVVc02XeJ8LTzuvkrnIelSKSTyCxfloaop8SazYg78nSwFRbpXEF0eyWAzgYFe8zdAXhlUGOyVvooWRvJsulep%2FUtJlMkKTwpmwKyIeMm%2BLTex90ZyEw6AoKv%2FIbL8HWn2kgZOlnDO88vOZyZ0ojZ3bGj7b%2FcLC8SmF9K78krw8UIIuodTjKOsjkEEax6AdPKCy7w4AFAB4ElDe0x%2BbO3Mn1zF%2FOTyfDG8wjundyQY6pgHvyHUhc8WjYQiuzNmHHwwjgTZMxuRe5NE%2Fw7FfVFQ7VMQtJoM5ImnLigHKftCGz0ssPzHR2qEf8mZKxsoqkEZYtUeMXdrsfB3u9A7zXtE7cIdlz9QSYI9sSlggaqCz1DpeBe0B89y5E6xHTMrgQBFjF7GUHYFTeygDONcn01GcLERieDQXLu0POK5VwPwOHHClnliSoDQ4JSEpAAJgUBoG93NBB7Tu&X-Amz-Signature=3277e841460ee5e2c565d8d9ef9d356152dd2a1b0920739132a50e4be9429887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCSLFQ24%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpH7e12AHzaSGWP7W2c5HOzLkz9bSipZDqMuD7NyJX7AiBlhgGrWKKWBnVg2J8A9ifUvijYvGSWOhziRio5Loo1WyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ8bfOziezGBKXTxKtwD8mTYQZgRaUvdS8yMSjvU6KCNqm4nG2IOFf1vZcbH71MRXpdT5rbdP%2BCh4iv1e0lp7NP8gI99vJgUf36zdGTFpPIAft7Z7IR57ph2pVW7iLJdb8BSu%2B0mq5pUpMIG0CNbV%2B5ilY90KnnndtDRmTnrGzmLz0S064nGFuajsuugWe%2FC%2FJ91cRIW1IoXlBqXyUJaXTlnezHYIxDoNjoPNOdL5WmkTySDr5tYz6o9NAw4%2BtNzGvz9crN8%2B2eTqwgOOBG0FyuyE0ugF0axxI8hG5T%2FchVv%2FhyG%2F4kGa5LOtlxzS%2F2ei%2FP2VIvO%2FJ7cEVW56bgxBneHLvFnBZeL08QdYupTH%2FZX4TDBTcyo0uROqg1niVjSybKGE0yeeeBH8Q4NrsIcF3lwaAvnU2MSYRXG%2FXyzM4C1ECVVc02XeJ8LTzuvkrnIelSKSTyCxfloaop8SazYg78nSwFRbpXEF0eyWAzgYFe8zdAXhlUGOyVvooWRvJsulep%2FUtJlMkKTwpmwKyIeMm%2BLTex90ZyEw6AoKv%2FIbL8HWn2kgZOlnDO88vOZyZ0ojZ3bGj7b%2FcLC8SmF9K78krw8UIIuodTjKOsjkEEax6AdPKCy7w4AFAB4ElDe0x%2BbO3Mn1zF%2FOTyfDG8wjundyQY6pgHvyHUhc8WjYQiuzNmHHwwjgTZMxuRe5NE%2Fw7FfVFQ7VMQtJoM5ImnLigHKftCGz0ssPzHR2qEf8mZKxsoqkEZYtUeMXdrsfB3u9A7zXtE7cIdlz9QSYI9sSlggaqCz1DpeBe0B89y5E6xHTMrgQBFjF7GUHYFTeygDONcn01GcLERieDQXLu0POK5VwPwOHHClnliSoDQ4JSEpAAJgUBoG93NBB7Tu&X-Amz-Signature=9b75a8ce1f8fef27aa8b4a66eb898e4cd1c671ea66cd3147d75e96ed952877dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
