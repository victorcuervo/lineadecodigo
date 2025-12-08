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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DEVWAN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBmI%2B6gXhzBzRFN6Qo8Rfsd%2BH4uKYQIOVRU8B%2Fc%2BwYGwIhAPCCUnErTUa9%2BOLQ%2BD2ghYy5AHruIllWnynYHKP3X78KKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNfrT3USpBQ%2Bmt2Ksq3ANyNFKana3n%2FpZKeosYtrMtuYQw5jLgzfTtUfk9k%2FUN4brV2eVFF68oZtEfKWd4Xlm82wDTnWvBXsISkg6s7paWD909lxkwFuCh321sRo6Rp4MU7lLS6AeWWcMDa%2BrlG0B6IHKIkJcbWFMhMxbrKw%2FR25ECv3TiYv96o%2FvgMrRzhKrlZu7x2zMjqLH2GXg6wqvM7hHelg6ox7v5hY1gfYtOPc5Tk7pjFsJlLUpogVf8ZXk010GxurDIDxaJlbBZ7oD5IgblAQO3qYlwI3oIaLYUyEy4FNKNE0p3lUIsYgXBD66TxtZnn45Dt9aewOzjza%2F9GwpTBLzCYpgL9dpQpXe2ToaOKSzzWY0%2BO6Zr8FyMSDg3NTwUbvw40PiCRvfwUcaVZoG7%2B4jC3riH2MmY%2FWQNLeVT2VKUd8ohj0njeTrq7hEsooU7rB8vYDjXojruGR7a5Tuv88vnE8urhM1LXv9YpvNm3gDAv30NovcuwTRCIsmA9hFi1jSWulNZ%2FNpWtm6%2BOaEVkmbA4Jm%2BWeFTuzfJ0oQ6ZLmOrJ0UV3CJ1PUlWDdNGGSXXzCW60iz3kFou%2Fp5ox2TAhPe6z%2B6bX3YnIGlqFN894ObdTGNBXEBEMn%2B1i2%2FSWfqQINhgFl1KjDNhtzJBjqkATHARPLMEO0zYl5uz%2BjuJq%2FJqYc9WluCeyBPlzaDHcUTYRwdSVRP9Qq3gCKGAAfQqybhVonK28PgzQDfQUVCAMq5bQ5c0c9ZTWKKRGob2qMHfSCcZsDeXu3FMZi%2FC8EfySTbjWGAfXv27TOV9jfG7zsn%2BDdALn2zqfFOFod6z20ADgC%2FuVZr5AZOmqdVNV4zRVkP3vk9UxQ9RuMICbjplMbgkkx4&X-Amz-Signature=3c43770efcffc7b114fe2dad7409312461b57a9d1dd2f3571e054373e38f7e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DEVWAN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBmI%2B6gXhzBzRFN6Qo8Rfsd%2BH4uKYQIOVRU8B%2Fc%2BwYGwIhAPCCUnErTUa9%2BOLQ%2BD2ghYy5AHruIllWnynYHKP3X78KKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNfrT3USpBQ%2Bmt2Ksq3ANyNFKana3n%2FpZKeosYtrMtuYQw5jLgzfTtUfk9k%2FUN4brV2eVFF68oZtEfKWd4Xlm82wDTnWvBXsISkg6s7paWD909lxkwFuCh321sRo6Rp4MU7lLS6AeWWcMDa%2BrlG0B6IHKIkJcbWFMhMxbrKw%2FR25ECv3TiYv96o%2FvgMrRzhKrlZu7x2zMjqLH2GXg6wqvM7hHelg6ox7v5hY1gfYtOPc5Tk7pjFsJlLUpogVf8ZXk010GxurDIDxaJlbBZ7oD5IgblAQO3qYlwI3oIaLYUyEy4FNKNE0p3lUIsYgXBD66TxtZnn45Dt9aewOzjza%2F9GwpTBLzCYpgL9dpQpXe2ToaOKSzzWY0%2BO6Zr8FyMSDg3NTwUbvw40PiCRvfwUcaVZoG7%2B4jC3riH2MmY%2FWQNLeVT2VKUd8ohj0njeTrq7hEsooU7rB8vYDjXojruGR7a5Tuv88vnE8urhM1LXv9YpvNm3gDAv30NovcuwTRCIsmA9hFi1jSWulNZ%2FNpWtm6%2BOaEVkmbA4Jm%2BWeFTuzfJ0oQ6ZLmOrJ0UV3CJ1PUlWDdNGGSXXzCW60iz3kFou%2Fp5ox2TAhPe6z%2B6bX3YnIGlqFN894ObdTGNBXEBEMn%2B1i2%2FSWfqQINhgFl1KjDNhtzJBjqkATHARPLMEO0zYl5uz%2BjuJq%2FJqYc9WluCeyBPlzaDHcUTYRwdSVRP9Qq3gCKGAAfQqybhVonK28PgzQDfQUVCAMq5bQ5c0c9ZTWKKRGob2qMHfSCcZsDeXu3FMZi%2FC8EfySTbjWGAfXv27TOV9jfG7zsn%2BDdALn2zqfFOFod6z20ADgC%2FuVZr5AZOmqdVNV4zRVkP3vk9UxQ9RuMICbjplMbgkkx4&X-Amz-Signature=e7b48d2ab51e3306befac707741b9bd555630dcc4a4513275d0af2cadfcce227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
