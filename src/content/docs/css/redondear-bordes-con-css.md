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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKKZBP2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOg3hjQchDMklUQiztl7kZfAVuHvixe1QBa0fyCF%2FM8AiAJmSiVVnfRidQcjXW9EqHXFs7mZnSAHH75llMYboz0qCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMAoIFHuXF7BhpVyv2KtwD3H0PtPbEVKAv17EiNLRGOcXZA1Uk6GHJuLV5L46i8KgYQWK5Gk%2BCukfGMsqvR%2FK0ge%2FY0yLPbEujLixmIfbncWiwo9qy572mIyFc49YQ7FWD0970cT4b5C9lKOHfHtpwyoUfPc0cPukWS4K6Wxkw3uTK4yhLW6m8bPlElJ6%2F3oREuq5tsOKOeSdKbIJoonb4VK0QIIaT4Q9qZHJc9rWYCrgtOfqHG2bX7LmJLqFfYocJ5lM8ovh5itaSfScgX4Q8xWQQI%2FEriIfjN6%2F4Xs90MmVMZMV7vxY1HRpQwK4rp67WnLO3dCdla497po6Iuf9bm2Rl1JhPD1OW4aewrbn8KMqm%2B%2BTy26Wxfe3LKnEmACE8E0pwpXbNZvyM3PP1bXD4Il%2B2iDvBYuqNtsWtLy9Y%2Bzb1lFbQBKHtVYs%2BXejG3%2FbnKoxjufpj5Om6bkq53ktAL5O24Oa4Fo6tHZvoLVpRLVAgeXy4N4VX2yrrSls9DgFzL%2FnJ2N9jyE2woji9t9mpe%2FHDJhqyG%2B%2Fv83eDQ%2BmQbAcUsMEl10Puti1jEHuQRHoM7TpehQbp9kyot9CU4%2FHa4wtj5AOP8zsJ4q3qVYa57lgUdf%2FZOqDESFdrzEKAr4ndzXcrmiJo5apzI9gwkvjLyQY6pgHptyUjkls%2FugdBEPxaN2J7CHU6BivT8DPlDENuavhWVIYN9gidGb%2FuzltU8PE2FXwezZjkoxYKYmyH07Uy6y9Q0Q6fAcZqvXdHjwPkRYdf1y4GJt7AAVVTQcnI01H%2BMn5in7UexobGgsSEhh71SesIF8hNAuhDdcAJ9EcQv%2FUcW%2B1riTNh%2FnMXvp5ngwfYRxj%2FSLc9mMHTMUjGHPIN6j1%2Fz%2B34unzZ&X-Amz-Signature=ab56a9e1e3eeb0ce85a623732c5530c0e93d2519f6f9eeb399fc0316fa3c6da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKKZBP2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOg3hjQchDMklUQiztl7kZfAVuHvixe1QBa0fyCF%2FM8AiAJmSiVVnfRidQcjXW9EqHXFs7mZnSAHH75llMYboz0qCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMAoIFHuXF7BhpVyv2KtwD3H0PtPbEVKAv17EiNLRGOcXZA1Uk6GHJuLV5L46i8KgYQWK5Gk%2BCukfGMsqvR%2FK0ge%2FY0yLPbEujLixmIfbncWiwo9qy572mIyFc49YQ7FWD0970cT4b5C9lKOHfHtpwyoUfPc0cPukWS4K6Wxkw3uTK4yhLW6m8bPlElJ6%2F3oREuq5tsOKOeSdKbIJoonb4VK0QIIaT4Q9qZHJc9rWYCrgtOfqHG2bX7LmJLqFfYocJ5lM8ovh5itaSfScgX4Q8xWQQI%2FEriIfjN6%2F4Xs90MmVMZMV7vxY1HRpQwK4rp67WnLO3dCdla497po6Iuf9bm2Rl1JhPD1OW4aewrbn8KMqm%2B%2BTy26Wxfe3LKnEmACE8E0pwpXbNZvyM3PP1bXD4Il%2B2iDvBYuqNtsWtLy9Y%2Bzb1lFbQBKHtVYs%2BXejG3%2FbnKoxjufpj5Om6bkq53ktAL5O24Oa4Fo6tHZvoLVpRLVAgeXy4N4VX2yrrSls9DgFzL%2FnJ2N9jyE2woji9t9mpe%2FHDJhqyG%2B%2Fv83eDQ%2BmQbAcUsMEl10Puti1jEHuQRHoM7TpehQbp9kyot9CU4%2FHa4wtj5AOP8zsJ4q3qVYa57lgUdf%2FZOqDESFdrzEKAr4ndzXcrmiJo5apzI9gwkvjLyQY6pgHptyUjkls%2FugdBEPxaN2J7CHU6BivT8DPlDENuavhWVIYN9gidGb%2FuzltU8PE2FXwezZjkoxYKYmyH07Uy6y9Q0Q6fAcZqvXdHjwPkRYdf1y4GJt7AAVVTQcnI01H%2BMn5in7UexobGgsSEhh71SesIF8hNAuhDdcAJ9EcQv%2FUcW%2B1riTNh%2FnMXvp5ngwfYRxj%2FSLc9mMHTMUjGHPIN6j1%2Fz%2B34unzZ&X-Amz-Signature=66bcbbd1f5b4491fd46b5444a65a30a44eb035f89f2d94cfa7527645abb6ac11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
