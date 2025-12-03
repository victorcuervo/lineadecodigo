---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7Q7UJJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDdLCHQPsKblhcZqx%2FasY9EL4buKNaxndUY%2B1ymuwn9pQIhAKLtrlgZ4ZEIt23qiV5ZeE4TGh7P7JFVzn6bMgdxjSv0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxhkGM%2BjeNG79GL%2FI0q3APPVBAxmuq1uzCLN4%2FnQkoRkNe9PZK4ugqRFb9by7y3H9If3bC71Fc8xzK%2FmzbLYqetVt59%2BcIpd2lM4ZeJOqNOS1GKNnDYEQ1iotmaflU%2FTqhl%2BAcC8NJzNZ0FJMFTX6BvpPJzVT5BAfyGf%2BwdkjLNEKWKzrcC1EpfhyQCKeCHQSm7DHTW8A7TlJjfkTByI%2F6CVw8z9NZgZTtxM1p9ttax3uBhHXa7vvMTh79IEtS1xCHCH4KUcZ%2BFdB4nt5JEq1exaLICtRwWlMWFjyDC4AioTwDWYTf%2FtC0fgA4CsvHIjQfGzu1T%2F%2BHCrfQtuXdvkzM2%2FcMrpyhQarFpJ3LZj4NST096x%2BSN4q%2BKz1TSrqML97IdTr2%2FOp7eN9ztnZSLcFEIRimYr85iNPQmem4C4d5jvYEMPdj4c9oesODqFtDHXvuxgSMAL3chFd8b3c9XhiqULy1Y%2BU7antOHO%2FEutwXqJs8hsuE65wVXKoauyyWh8c%2FwUrwMWC5rmWQitYcyveFU3tKcOuU0%2Fg0qq%2FXZ03CK0qR65l0jr12hr%2Fkwv3EI9Vg1p8h5DfTDJbMzif0Kgs6CQGiVeJe5hq2L328gGt1JKJ0p5vG%2FC88EHVqrVv%2FXsrrO%2BqjrqPQnjgdbSDD2vcLJBjqkAWg9NLTi2tbWURk8AiuNGMTWQn6DY0OYMZBTigYoqzQpgB92fVtt91%2B%2FYEgBhfJVUkw7U5UJYn6QvoEv63dK1xYwhdf4Wg4snIQEMnJWYUnvFCmu5NmnyXs30r%2FbIVQsxNhYSPJGEfvNZtBuQBBpMGeFUYGb7%2B1aEoiadhbn6ujeATgNK7oUPudqhBcqK8zjhLk3yAEysVgDwIXmsQKiYvkIK2r6&X-Amz-Signature=ebadad23da40d19884db37df5d634e19fc1f63d78d4154f5bcd0f8aeca872202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7Q7UJJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDdLCHQPsKblhcZqx%2FasY9EL4buKNaxndUY%2B1ymuwn9pQIhAKLtrlgZ4ZEIt23qiV5ZeE4TGh7P7JFVzn6bMgdxjSv0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxhkGM%2BjeNG79GL%2FI0q3APPVBAxmuq1uzCLN4%2FnQkoRkNe9PZK4ugqRFb9by7y3H9If3bC71Fc8xzK%2FmzbLYqetVt59%2BcIpd2lM4ZeJOqNOS1GKNnDYEQ1iotmaflU%2FTqhl%2BAcC8NJzNZ0FJMFTX6BvpPJzVT5BAfyGf%2BwdkjLNEKWKzrcC1EpfhyQCKeCHQSm7DHTW8A7TlJjfkTByI%2F6CVw8z9NZgZTtxM1p9ttax3uBhHXa7vvMTh79IEtS1xCHCH4KUcZ%2BFdB4nt5JEq1exaLICtRwWlMWFjyDC4AioTwDWYTf%2FtC0fgA4CsvHIjQfGzu1T%2F%2BHCrfQtuXdvkzM2%2FcMrpyhQarFpJ3LZj4NST096x%2BSN4q%2BKz1TSrqML97IdTr2%2FOp7eN9ztnZSLcFEIRimYr85iNPQmem4C4d5jvYEMPdj4c9oesODqFtDHXvuxgSMAL3chFd8b3c9XhiqULy1Y%2BU7antOHO%2FEutwXqJs8hsuE65wVXKoauyyWh8c%2FwUrwMWC5rmWQitYcyveFU3tKcOuU0%2Fg0qq%2FXZ03CK0qR65l0jr12hr%2Fkwv3EI9Vg1p8h5DfTDJbMzif0Kgs6CQGiVeJe5hq2L328gGt1JKJ0p5vG%2FC88EHVqrVv%2FXsrrO%2BqjrqPQnjgdbSDD2vcLJBjqkAWg9NLTi2tbWURk8AiuNGMTWQn6DY0OYMZBTigYoqzQpgB92fVtt91%2B%2FYEgBhfJVUkw7U5UJYn6QvoEv63dK1xYwhdf4Wg4snIQEMnJWYUnvFCmu5NmnyXs30r%2FbIVQsxNhYSPJGEfvNZtBuQBBpMGeFUYGb7%2B1aEoiadhbn6ujeATgNK7oUPudqhBcqK8zjhLk3yAEysVgDwIXmsQKiYvkIK2r6&X-Amz-Signature=663811d484881a7ad0f81247b6ebce75e9850677857336b36111bbe221d43268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
