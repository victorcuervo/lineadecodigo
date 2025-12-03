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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFFPKGCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHhS%2FhUqmUDG63Tnw96GGgbqWypSb5tnItbEw9olKMVWAiEAkEhdgne2HdNuqr6%2FliwS0SRro%2BCu57uFSQJupG3esLkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAIzM5hbLNUq7lC1hircA%2BDdpQ3YTjjkoDLSiD3yIit0%2FnemaKsPfdhtKrNAwtw6k7gw4lYnh8TekPqPSn8BIyMWVWa63MVp4SQlYOGaPhjysnV4dvCi4FzOjC%2BMAB5PXr5YnFvlw%2F5uVtRmEedWciIPIF5PPxbm%2FcWQUC71gWkb%2BJY5s5QNdRpsiyA%2FIYpLJuGBkjdrEbWT%2BuyOuvB5GTeQyUvASyBFvkf2hsAoqShT9hTs83peHC%2F4o1e61CSkmscgYgXhx5wk4zcS8mGRlD35p0YjBbJEQ7UNkNcL%2Bj3O%2FsW7oaGcYnQhM6jznl16yiPrsA06gHywNnRqND8Vx4puQ2I9JTcAKAh4fJzTpRvmT9UZPkzJwskZGJMSkplrQgd%2BnQ1jIBZrnJ1zdqRa66CCsiJUszaDHiJg2gGMOEL6KXN9UXXhWc0VClN461bXjdep9G08yKNR01ENIQGKTGWoHHyJ42m4ku03f75ZvAom6Qd19JI0UkMaQwJmtmdjXJscJIpjdHNsd8WXxgkd7fW1QzA6hjDo8%2FESAAGDkAa5FDieRqsAmU3RayaBN5PF4JAXxQpU%2FUskXo2Z333Kb5bbW06utmDuovC8My197vzm9jC7p15OyPIpxtU9rm6zKungmpsUnHOiae34MJHdwskGOqUBwONORxwnNHJsiftZrX1QM4C5E3aYi3jleVO%2BaRZrXU2GYBA4FImZHby3K6gYVpd7Hw7JMUHUfzBiNWsQdoWKZd59Btg3N1qciFRzjhY6cN5N%2FFHmOXaPrdQQnlfI3r2lOjmnz%2B%2BFftIT7ASYsTLBAcHPNMh4vvpWl44VLqSBOTxgGlTwnAQmTOTM6O7PS9gNGi3KGmc06hDvzhScY4OlH0229KcC&X-Amz-Signature=caa28f4420fabe63b136b0a21573485568669b67f6155f9b11809f6091b2d2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFFPKGCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHhS%2FhUqmUDG63Tnw96GGgbqWypSb5tnItbEw9olKMVWAiEAkEhdgne2HdNuqr6%2FliwS0SRro%2BCu57uFSQJupG3esLkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAIzM5hbLNUq7lC1hircA%2BDdpQ3YTjjkoDLSiD3yIit0%2FnemaKsPfdhtKrNAwtw6k7gw4lYnh8TekPqPSn8BIyMWVWa63MVp4SQlYOGaPhjysnV4dvCi4FzOjC%2BMAB5PXr5YnFvlw%2F5uVtRmEedWciIPIF5PPxbm%2FcWQUC71gWkb%2BJY5s5QNdRpsiyA%2FIYpLJuGBkjdrEbWT%2BuyOuvB5GTeQyUvASyBFvkf2hsAoqShT9hTs83peHC%2F4o1e61CSkmscgYgXhx5wk4zcS8mGRlD35p0YjBbJEQ7UNkNcL%2Bj3O%2FsW7oaGcYnQhM6jznl16yiPrsA06gHywNnRqND8Vx4puQ2I9JTcAKAh4fJzTpRvmT9UZPkzJwskZGJMSkplrQgd%2BnQ1jIBZrnJ1zdqRa66CCsiJUszaDHiJg2gGMOEL6KXN9UXXhWc0VClN461bXjdep9G08yKNR01ENIQGKTGWoHHyJ42m4ku03f75ZvAom6Qd19JI0UkMaQwJmtmdjXJscJIpjdHNsd8WXxgkd7fW1QzA6hjDo8%2FESAAGDkAa5FDieRqsAmU3RayaBN5PF4JAXxQpU%2FUskXo2Z333Kb5bbW06utmDuovC8My197vzm9jC7p15OyPIpxtU9rm6zKungmpsUnHOiae34MJHdwskGOqUBwONORxwnNHJsiftZrX1QM4C5E3aYi3jleVO%2BaRZrXU2GYBA4FImZHby3K6gYVpd7Hw7JMUHUfzBiNWsQdoWKZd59Btg3N1qciFRzjhY6cN5N%2FFHmOXaPrdQQnlfI3r2lOjmnz%2B%2BFftIT7ASYsTLBAcHPNMh4vvpWl44VLqSBOTxgGlTwnAQmTOTM6O7PS9gNGi3KGmc06hDvzhScY4OlH0229KcC&X-Amz-Signature=82b576cdf6a0447fac58b8da393ca59ed0f7dc75cdd8effbe5f210a3913d399f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
