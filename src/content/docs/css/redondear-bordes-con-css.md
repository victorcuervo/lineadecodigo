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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4MQJRW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDrSB2ohJpsLz98bqvY4%2BwxB%2BuER9b5r7R5EsgviUthmgIhALJWJH4I9LfJJLruuu60KwpIkYOU7eQgfyHa30iVLLskKv8DCD0QABoMNjM3NDIzMTgzODA1Igw%2BMBOTcJLHBZYzw1Qq3AOxQyZ1sToHGEyUJuuTPFsEJhemf6xZhhe26ialE1Z8c0BRM673UjNCmuYVGc7lyOq3M6oL55Pa%2FKPlkuMjnpoGC3h4G%2BHXd5xSoddF6qq0YiUMXzkzC%2Fl5iRNZaprkEJfAJ2%2FeSUMP2tmg6UiwO8NqQ6PXgO%2FxwcSiHyCARc8sFTNH2urVY0hMnGzir25638H1ztT37xnGDhGteFguQo1dVZH%2F7cTjGwNyjocYeUydHph%2F0bv9wa%2BIe8Ca0HHoLYaIcoK87CUn1VEwzXIfWEzs8vEYFE1e%2BsSjoJ48MhiDIsY40V%2Fwu2yGuIeU9Dy9oSxLs5poqFZ6cZrS5W0jxZhnnkFB8MJK0O4C0FMesbhGat73UFWLPxSBmsUBWTVW%2BCWpqd3miwPb1ZQXFIt5FcAbik2KmCZyqxoYjZk%2FfjOwowf5jsliR5%2B2Hh%2BnA7HsxdCQVIW0yiwm8rm2U1E8KyDqYAnH%2F03wF3q9l8ZMe5HEAF91E9PMKQAvr5fmEN6oSc%2FcXGITb0TXqP33pT6BVyZzOMjjHGOSWcTV%2B81y8VsM00HeZcC4d7ToxJ5ZMMux091NP6LL0t9jZMes7AToZXT5501a61I6ow8Si5j9SPNzb%2B7B7JJETiODh4WnODCMkcTJBjqkAb%2BFCSygBAbCG3CwHOUUhYfHnEOfx91JMuCeWzrJ48AgYlSCes5IjJAfdSvbSkZNnwbXY%2ByK1xU6UvW5rdnIDCBTpV0POe%2Buhe4x5ltdcau1ofjuoChNqv7W97ZEt%2Fq%2FQwYxN4yri22VEhvAf6rKxfXwV074OFlrNBqHSSieQnUt2VH2Tlu91gbaOI%2BAoTDWb8Sb4BDz%2Fj17F9NQeLeY6RFyIxx%2F&X-Amz-Signature=b9bc11ab48dd289911d354cd966c6517d599f4f5aa0379e33434f74d1358334d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4MQJRW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDrSB2ohJpsLz98bqvY4%2BwxB%2BuER9b5r7R5EsgviUthmgIhALJWJH4I9LfJJLruuu60KwpIkYOU7eQgfyHa30iVLLskKv8DCD0QABoMNjM3NDIzMTgzODA1Igw%2BMBOTcJLHBZYzw1Qq3AOxQyZ1sToHGEyUJuuTPFsEJhemf6xZhhe26ialE1Z8c0BRM673UjNCmuYVGc7lyOq3M6oL55Pa%2FKPlkuMjnpoGC3h4G%2BHXd5xSoddF6qq0YiUMXzkzC%2Fl5iRNZaprkEJfAJ2%2FeSUMP2tmg6UiwO8NqQ6PXgO%2FxwcSiHyCARc8sFTNH2urVY0hMnGzir25638H1ztT37xnGDhGteFguQo1dVZH%2F7cTjGwNyjocYeUydHph%2F0bv9wa%2BIe8Ca0HHoLYaIcoK87CUn1VEwzXIfWEzs8vEYFE1e%2BsSjoJ48MhiDIsY40V%2Fwu2yGuIeU9Dy9oSxLs5poqFZ6cZrS5W0jxZhnnkFB8MJK0O4C0FMesbhGat73UFWLPxSBmsUBWTVW%2BCWpqd3miwPb1ZQXFIt5FcAbik2KmCZyqxoYjZk%2FfjOwowf5jsliR5%2B2Hh%2BnA7HsxdCQVIW0yiwm8rm2U1E8KyDqYAnH%2F03wF3q9l8ZMe5HEAF91E9PMKQAvr5fmEN6oSc%2FcXGITb0TXqP33pT6BVyZzOMjjHGOSWcTV%2B81y8VsM00HeZcC4d7ToxJ5ZMMux091NP6LL0t9jZMes7AToZXT5501a61I6ow8Si5j9SPNzb%2B7B7JJETiODh4WnODCMkcTJBjqkAb%2BFCSygBAbCG3CwHOUUhYfHnEOfx91JMuCeWzrJ48AgYlSCes5IjJAfdSvbSkZNnwbXY%2ByK1xU6UvW5rdnIDCBTpV0POe%2Buhe4x5ltdcau1ofjuoChNqv7W97ZEt%2Fq%2FQwYxN4yri22VEhvAf6rKxfXwV074OFlrNBqHSSieQnUt2VH2Tlu91gbaOI%2BAoTDWb8Sb4BDz%2Fj17F9NQeLeY6RFyIxx%2F&X-Amz-Signature=510c2072f7c20acb9ed45c0950aa78eb31ef43e846ee5a51a77467e3b692987c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
