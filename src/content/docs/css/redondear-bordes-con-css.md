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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5JUQR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeKcVQPg6CC2CSbtXYSHLNg9Q5yinIvJYp%2Fc7fJkyOaAiBBL52IYsWi0kdxMvOLetWsn%2FizXdQ0aL8xdRQm%2FjKrtir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMjw73tvvERKJIf94%2BKtwDkdJq42LxSKudQWU6zl7D%2FixCTTvQzRdz4iIlFwEekilG1JhAoJSe5eNDGhg%2ByJ%2FFMRLcUD%2FvwsHVv5%2BIjZZ8S6dX77OU%2BoVLjyNiBbMPPsQEcenLYPN6QZX7G8cDh2vMUOL851suq8qnCQytzychaFvBPUkXw%2B6N4WvgCgwvOnTdgnty0KFJl1rgKVJaXpNkZNNXoHTiilkitioXMNUfRqOlJJqOBxzZyQ7IBSMJRB72ClMp3eFh2i7ytb6CqaInWITDJl7BuUTO4LADdkBSq%2B2HvBPhk%2BhxlGui46rY2K2aumtkVu7YoxHCmVfRirCxs666gLqeeMnKaUQXew58gzTyi2k19M%2Bb5BoKNhRr9kR9uTRH30%2FWR644cFj85qhvw20k0rFKjdhF5doQgJyYtswPZU9wk9uxw62KhJsy99%2FApOnxznxzAASOrbp5EbYlMDIxJGh6eM1rmN8LT0TIeQGRrmSmEyFni1PkjaLLgvK4t3nkF1KW0xB%2BLLl0lbf0iu6unwn2qjjHAiYRa08K59NCknvPvJZ0w2b11IqUIrCOakb1EyNB4Z8OW9oL8r0N1s%2FjQl3it%2FLVe0kd%2BpwgXVTaeKD4es6IEw1KPobEt79DM1E%2Fnh1o1HmX%2BW8wo9TSyQY6pgEJkdHSo93ZTaLeB4INXUXYqqa%2BN8iMW2%2B2eVDcT%2Bzw7SQbQaKrUpmZxjYJWtbzl5VYfRjyKQ%2BWandCinjFdlIo%2FQVti6%2FCuVJLkv6qUaosva2ZQc63VVn9fNzb7XjWP1W7IDWDEZv7SNA7t31p7RYvVmMi98XpqhbqAMQDgE24jnhtgbuz80JkNG7QhCoTGphI7mhUkBMYO7SZTjPwUGUMELn1s56K&X-Amz-Signature=3e1a29b0fbd1f57add05b9391075dc44b518fc838800a63da9fbb36598c808b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5JUQR4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeKcVQPg6CC2CSbtXYSHLNg9Q5yinIvJYp%2Fc7fJkyOaAiBBL52IYsWi0kdxMvOLetWsn%2FizXdQ0aL8xdRQm%2FjKrtir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMjw73tvvERKJIf94%2BKtwDkdJq42LxSKudQWU6zl7D%2FixCTTvQzRdz4iIlFwEekilG1JhAoJSe5eNDGhg%2ByJ%2FFMRLcUD%2FvwsHVv5%2BIjZZ8S6dX77OU%2BoVLjyNiBbMPPsQEcenLYPN6QZX7G8cDh2vMUOL851suq8qnCQytzychaFvBPUkXw%2B6N4WvgCgwvOnTdgnty0KFJl1rgKVJaXpNkZNNXoHTiilkitioXMNUfRqOlJJqOBxzZyQ7IBSMJRB72ClMp3eFh2i7ytb6CqaInWITDJl7BuUTO4LADdkBSq%2B2HvBPhk%2BhxlGui46rY2K2aumtkVu7YoxHCmVfRirCxs666gLqeeMnKaUQXew58gzTyi2k19M%2Bb5BoKNhRr9kR9uTRH30%2FWR644cFj85qhvw20k0rFKjdhF5doQgJyYtswPZU9wk9uxw62KhJsy99%2FApOnxznxzAASOrbp5EbYlMDIxJGh6eM1rmN8LT0TIeQGRrmSmEyFni1PkjaLLgvK4t3nkF1KW0xB%2BLLl0lbf0iu6unwn2qjjHAiYRa08K59NCknvPvJZ0w2b11IqUIrCOakb1EyNB4Z8OW9oL8r0N1s%2FjQl3it%2FLVe0kd%2BpwgXVTaeKD4es6IEw1KPobEt79DM1E%2Fnh1o1HmX%2BW8wo9TSyQY6pgEJkdHSo93ZTaLeB4INXUXYqqa%2BN8iMW2%2B2eVDcT%2Bzw7SQbQaKrUpmZxjYJWtbzl5VYfRjyKQ%2BWandCinjFdlIo%2FQVti6%2FCuVJLkv6qUaosva2ZQc63VVn9fNzb7XjWP1W7IDWDEZv7SNA7t31p7RYvVmMi98XpqhbqAMQDgE24jnhtgbuz80JkNG7QhCoTGphI7mhUkBMYO7SZTjPwUGUMELn1s56K&X-Amz-Signature=77650e79c7202d15cfae6ef9961030c03ae1dca19b0d2a72bc3c325d90770b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
