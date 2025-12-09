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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISYP2CR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvYHR75O%2FY9ZEdd3lW91uOAS60XKdBHsdRrmJQXfiXbAiEA3rZOgUmuJqyhH3O%2FT3XZwvs8iSeQUDcHkVxqhQccqjwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMAxUZvQHfnPHVOlCrcA8Yx5mBlBR%2FomYj7%2BBnhxACgFnoPzaq2ivRUPI3N7ynQIRx1S3Xn9oAHnLaNBLU9UxkmAycbLElRci8nBuV%2BrLvWCUBsXyE2oO8LKbaT%2FODFa9zwrJbkxFKYPys2h0%2FizylXuL6QBq%2BdnWa1xzpcEDMBfDZP4pqMJi0UvBDmvt3ydCXxtLAlX9Gq%2BpbXYD6WgTzkHAYm2hPQV22MsM%2BuL9ogZJzHrpfQLHNUBbb1fH0WThGAj7JzkPHezo7%2FCAK5rtR2lhRV4v6rx4VJVBpxvrR%2FSzOxQklnk4V86had%2BFSx0tMZ2%2FYKCuWpRkZjoqeXkAeb8HS41YueYgLjAwWkNONYbG4rbvOQ11%2FSVxwrIVqU5dgjbT2bDKiPwqKkMIJNpb%2BlxDxvWvolobxDjJ4HkD6zT5WUWs25KCLG7V3JruEoSItsN%2FTkMZ%2FScWCiqViyTHylW%2FVkYS43kQjwk9sXs2Yzqlya0vod8PabrF4X9S7ROCZM%2FxU8IOcdEE4NsKEGyVGnw1ZQXEIR%2FaRXWlXHhtY6hBqfggnPnBtZBPLYsbHqcAeaOEXphOxg8ga2atMh6ZJ0WgEothYPv8gA5d3Dy93svDQAjWu0kBmlxzeLuY%2Bn026kgESNKGHvCreNMIPp3ckGOqUBfOveHX1nWnmIENNNS%2FU0SBXtM0e8uFBbsGZrfhC8dtusjZ32z6JPhaDQrEt38Gmfr5fUEhDrvqFMLjUHwZduKtKgGSwjZk2kT39CKnoYJazGdhIJF3TmJexcCvkSAjnLQOuR5qt6%2FbjMcRpc9AYcqvVXCW0FiElr4hYR25hQRe3J6qx9yxUQQsmNQKUQv8Zex0Se8z6D6ndHFyu19%2F7h%2BDzRkxgi&X-Amz-Signature=4ea4560df12045119fea89528dfe0fadbc0a1774822975fbda67be102f099522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISYP2CR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvYHR75O%2FY9ZEdd3lW91uOAS60XKdBHsdRrmJQXfiXbAiEA3rZOgUmuJqyhH3O%2FT3XZwvs8iSeQUDcHkVxqhQccqjwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMAxUZvQHfnPHVOlCrcA8Yx5mBlBR%2FomYj7%2BBnhxACgFnoPzaq2ivRUPI3N7ynQIRx1S3Xn9oAHnLaNBLU9UxkmAycbLElRci8nBuV%2BrLvWCUBsXyE2oO8LKbaT%2FODFa9zwrJbkxFKYPys2h0%2FizylXuL6QBq%2BdnWa1xzpcEDMBfDZP4pqMJi0UvBDmvt3ydCXxtLAlX9Gq%2BpbXYD6WgTzkHAYm2hPQV22MsM%2BuL9ogZJzHrpfQLHNUBbb1fH0WThGAj7JzkPHezo7%2FCAK5rtR2lhRV4v6rx4VJVBpxvrR%2FSzOxQklnk4V86had%2BFSx0tMZ2%2FYKCuWpRkZjoqeXkAeb8HS41YueYgLjAwWkNONYbG4rbvOQ11%2FSVxwrIVqU5dgjbT2bDKiPwqKkMIJNpb%2BlxDxvWvolobxDjJ4HkD6zT5WUWs25KCLG7V3JruEoSItsN%2FTkMZ%2FScWCiqViyTHylW%2FVkYS43kQjwk9sXs2Yzqlya0vod8PabrF4X9S7ROCZM%2FxU8IOcdEE4NsKEGyVGnw1ZQXEIR%2FaRXWlXHhtY6hBqfggnPnBtZBPLYsbHqcAeaOEXphOxg8ga2atMh6ZJ0WgEothYPv8gA5d3Dy93svDQAjWu0kBmlxzeLuY%2Bn026kgESNKGHvCreNMIPp3ckGOqUBfOveHX1nWnmIENNNS%2FU0SBXtM0e8uFBbsGZrfhC8dtusjZ32z6JPhaDQrEt38Gmfr5fUEhDrvqFMLjUHwZduKtKgGSwjZk2kT39CKnoYJazGdhIJF3TmJexcCvkSAjnLQOuR5qt6%2FbjMcRpc9AYcqvVXCW0FiElr4hYR25hQRe3J6qx9yxUQQsmNQKUQv8Zex0Se8z6D6ndHFyu19%2F7h%2BDzRkxgi&X-Amz-Signature=7dfceed4e45807e1a78a32652b8d6debb011cc94f7825c9df3804589235cc636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
