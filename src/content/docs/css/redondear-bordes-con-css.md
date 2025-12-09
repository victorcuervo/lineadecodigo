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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE72IIWW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW9ueyRQLl7P2yc245xg9rL5xdQnuBsIwhYWkj%2FNw4wgIhAMMD2anUBzKht21EvbtmLhn7Bjdu7EKjoSk7Jvu0HhTsKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvYV1osMHj73aeAEq3AOf%2FIySOzcy77CkzKJkY3hp9PueBy%2F%2BKgQnNR6kDVvmenvNPASIun69Ffm3hsKcoUKfgorEpssgs6zFC3wCltgtjQkKAW1aqVY9gZcGjR3XWf6S3rLP%2BvqBZNdOfBKJXlCOmFL%2BSh5O7ia%2F7ZIJ9NZ2cld%2BDqqEUfrQtB87E7sKJVgUZ1rODH7eJ9Sjs%2FBH4oz6o6%2B991TKS6K40JD1mlh9iOEfU%2F6QSFnC9ZMJN6tI%2FgeVgJqT%2FgEIYmytEbT%2BJDQpL76nxS8zeoznVwWmKkFX2FO3F1NFZupO0fMWuqFFW1uRYv0OcBNhna%2FDu1UPEcPOoC9c2Yv9d8d05OU%2FWGmxbPXGmke1fjCr%2BuZmuXMGuLfG1c7iZy77gO9D4yyP7NPnHVC1RiiVOAP3R1pTnH5sfg5GkxA6Uf18gB3%2B1csLJP8hd919xtlS9CjM5DRvOzBCpgrwpSAWhZ1hDHHlLq2t8lLD7u2WigzYfaMRP41kK%2BxQPmHojSvvWE%2B%2FQNYkZPAjDxu%2F3v6hHuu4JsvezV27g%2BzHi1iNfUv%2Btm7rObdEBQRApnskhnxP5usiCwyvAUvA8JHwWp26JFD6Ep0t0VnFgLotk%2BG%2FqokOHEnvk6LsmB0CYGo%2FYrfJWdADJzDBxN%2FJBjqkAffVSe9OUJrmJAKSZPYu75NJTBjjeVRXHaaZwLGv8GiNOdZHs6GzjlQFElYmVlqIWEquMCrA%2FAZK4gTkgDSv0HlAzqVQrFfH3KVu7%2FC3sFD4NjQ%2Bo29Y2JtDLXCUJodXIY0KW6MVYG8yMI3CvnmIBWWm3NZZY%2F0hXOvyQgqACE5gvDGbWkRg9KvT%2FCubrHycp0TaNFYbcWW4Lx%2BpiCEMj9atc1aE&X-Amz-Signature=c081fbace7fc499f9f4e10e9b6bc0a8f72785d133fcb917a3db48b654f517784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE72IIWW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW9ueyRQLl7P2yc245xg9rL5xdQnuBsIwhYWkj%2FNw4wgIhAMMD2anUBzKht21EvbtmLhn7Bjdu7EKjoSk7Jvu0HhTsKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwvYV1osMHj73aeAEq3AOf%2FIySOzcy77CkzKJkY3hp9PueBy%2F%2BKgQnNR6kDVvmenvNPASIun69Ffm3hsKcoUKfgorEpssgs6zFC3wCltgtjQkKAW1aqVY9gZcGjR3XWf6S3rLP%2BvqBZNdOfBKJXlCOmFL%2BSh5O7ia%2F7ZIJ9NZ2cld%2BDqqEUfrQtB87E7sKJVgUZ1rODH7eJ9Sjs%2FBH4oz6o6%2B991TKS6K40JD1mlh9iOEfU%2F6QSFnC9ZMJN6tI%2FgeVgJqT%2FgEIYmytEbT%2BJDQpL76nxS8zeoznVwWmKkFX2FO3F1NFZupO0fMWuqFFW1uRYv0OcBNhna%2FDu1UPEcPOoC9c2Yv9d8d05OU%2FWGmxbPXGmke1fjCr%2BuZmuXMGuLfG1c7iZy77gO9D4yyP7NPnHVC1RiiVOAP3R1pTnH5sfg5GkxA6Uf18gB3%2B1csLJP8hd919xtlS9CjM5DRvOzBCpgrwpSAWhZ1hDHHlLq2t8lLD7u2WigzYfaMRP41kK%2BxQPmHojSvvWE%2B%2FQNYkZPAjDxu%2F3v6hHuu4JsvezV27g%2BzHi1iNfUv%2Btm7rObdEBQRApnskhnxP5usiCwyvAUvA8JHwWp26JFD6Ep0t0VnFgLotk%2BG%2FqokOHEnvk6LsmB0CYGo%2FYrfJWdADJzDBxN%2FJBjqkAffVSe9OUJrmJAKSZPYu75NJTBjjeVRXHaaZwLGv8GiNOdZHs6GzjlQFElYmVlqIWEquMCrA%2FAZK4gTkgDSv0HlAzqVQrFfH3KVu7%2FC3sFD4NjQ%2Bo29Y2JtDLXCUJodXIY0KW6MVYG8yMI3CvnmIBWWm3NZZY%2F0hXOvyQgqACE5gvDGbWkRg9KvT%2FCubrHycp0TaNFYbcWW4Lx%2BpiCEMj9atc1aE&X-Amz-Signature=9c5a839afe99522180dfeb043a9aa47f29b11a8f376bc3b6e8fb315b85a16319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
