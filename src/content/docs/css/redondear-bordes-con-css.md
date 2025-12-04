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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJUC7YA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICVchHt%2BBAtFyKn6ofBuhQKWAnjMpqburOWveGh30aIkAiAVju7Uj2QxDSciBd55bGlrYiGR3w1em4VeW6hv8cT46yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FMSFs8MNvrUtB8UtKtwDrq%2BxaQRrbtRihtRURcoHn9%2FMVkwtLJUHf1iTsdLq%2BmLN0oMDz%2Ff8FQl5C1UE8si0wBlzEet3dxdywqMjSez9tC1m0XAWXIS5tQEB%2BF9c2xEWaojHTSy0TDUyhl9vj5TzMkvC%2Fx5SpuvGR6Iv1wJ7ZAuW44azGoLGAuTmFnxRKaAnLPsE%2BjXONHZ2dhvxmIE8TF7X%2BxouxSdhJ8Ygk53WNEfcLLXV4G0Ekdtp7n1JA7yeQ8R0VZMlqHRWuDgkztt%2FeYXvmTmWCvPjmQcD6DdKEIwns1w7R6FyKjbhKrzyKytfg88kHy5IyrEAM7dj4%2FGNfqsH7tunIObrEBddGbJRauIggq%2F02aVTTAZrjObLTDOEI%2FIrUwKm%2BTQB1afxHDfNDfRCgccQUkrqTNoNv1MhvA5zO4FXrDNiXJNT29KVPxpQWBe7h32Hr8gIZgKmj2ZV8Tb%2FRKAm7tHKZzZKSp%2BZCzESGh6bvM8TxgumuOU42uZdH9mEgKzKHvqUQeK7SItRYGfYDVqp8a0cciyDYmCIs9DKKcsBcBMYYiMyU9ygBxynp1fJLQoqSPhQ3IhygNDL5a54n82p8tFA8wQj8PneGNe16V%2B5vVnjwHASiYJmnK2wGYGSmqnY9ndHbSYws4bFyQY6pgGSo6gGSzZ79zn4Gb5LtkEpw9TZzy9NGTQEBnCp4xB0J6zGFVpJCkqntICjSU3jquc6vgVOiXxqUqDh42wis9K7CaPPythNUAahIIxxGliScO8QzjRZ4kMGjvgW7cr9hXUGumpQCpgSySJFGMHS0kqu4lCXG9egZB9AXaGFox8a8JpgUNVkawOgCFqC1j89f0NTGItgLGSxQo%2FbNcUi8sfknhDLONxW&X-Amz-Signature=75545770f6958b0a8e78f2c9d042d34f89255b24dbed09a21a3e60fedf236223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJUC7YA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICVchHt%2BBAtFyKn6ofBuhQKWAnjMpqburOWveGh30aIkAiAVju7Uj2QxDSciBd55bGlrYiGR3w1em4VeW6hv8cT46yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FMSFs8MNvrUtB8UtKtwDrq%2BxaQRrbtRihtRURcoHn9%2FMVkwtLJUHf1iTsdLq%2BmLN0oMDz%2Ff8FQl5C1UE8si0wBlzEet3dxdywqMjSez9tC1m0XAWXIS5tQEB%2BF9c2xEWaojHTSy0TDUyhl9vj5TzMkvC%2Fx5SpuvGR6Iv1wJ7ZAuW44azGoLGAuTmFnxRKaAnLPsE%2BjXONHZ2dhvxmIE8TF7X%2BxouxSdhJ8Ygk53WNEfcLLXV4G0Ekdtp7n1JA7yeQ8R0VZMlqHRWuDgkztt%2FeYXvmTmWCvPjmQcD6DdKEIwns1w7R6FyKjbhKrzyKytfg88kHy5IyrEAM7dj4%2FGNfqsH7tunIObrEBddGbJRauIggq%2F02aVTTAZrjObLTDOEI%2FIrUwKm%2BTQB1afxHDfNDfRCgccQUkrqTNoNv1MhvA5zO4FXrDNiXJNT29KVPxpQWBe7h32Hr8gIZgKmj2ZV8Tb%2FRKAm7tHKZzZKSp%2BZCzESGh6bvM8TxgumuOU42uZdH9mEgKzKHvqUQeK7SItRYGfYDVqp8a0cciyDYmCIs9DKKcsBcBMYYiMyU9ygBxynp1fJLQoqSPhQ3IhygNDL5a54n82p8tFA8wQj8PneGNe16V%2B5vVnjwHASiYJmnK2wGYGSmqnY9ndHbSYws4bFyQY6pgGSo6gGSzZ79zn4Gb5LtkEpw9TZzy9NGTQEBnCp4xB0J6zGFVpJCkqntICjSU3jquc6vgVOiXxqUqDh42wis9K7CaPPythNUAahIIxxGliScO8QzjRZ4kMGjvgW7cr9hXUGumpQCpgSySJFGMHS0kqu4lCXG9egZB9AXaGFox8a8JpgUNVkawOgCFqC1j89f0NTGItgLGSxQo%2FbNcUi8sfknhDLONxW&X-Amz-Signature=b60487103a13fc5a97e972eb0a49a6531e2ba1cec89403592e35e7433942161b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
