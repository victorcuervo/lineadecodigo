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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO47MQ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCFTngp4xHuJ3xNOh7c45Rm9Ex2Ofm27cwZZl3c%2FAlH2wIhAMClFTrAchGsr18IYW511ruDjmBdch2MlSSHIAASo2lvKv8DCD0QABoMNjM3NDIzMTgzODA1Igw1peoEzeG7XsBVwWAq3AO5rSE%2B3lxOvnUje7%2FfJ2IHjD0yEHN3lsCkWipNZD%2BhjjoW%2BvfaWgW2rGyu%2FqbkotBz7or%2FhkJM6ILXvK75x6C8xFJ3hR8j9yl5BAU3%2BIh1FBCiQZOTkDtkHY0WKy90oXgTFkYMBym4cWvPZizx7M%2Fkm5yozgEWY5ahspwoq1J2peXwhcJaxUgGI6dCKGlD1sT2kkoj7YqLE%2FR7ITV9NFdQDCbnEb599qkwuOPPWc6dUsaOXtHMn2zfpRl9j9b2s3qmqE3%2BuE0CUi2rAWN4HMjmnkVJq139JOzurUAhxfR2fzaQQPqDU0nsEhTI3fpanlvzNyq%2BZ73aDnlIVgZDC7gdty%2FOYxqQSkR08C8HLniyW5%2FX2QOra3Upc8QKyJAdDG2b%2FQlz2P8iLwufV61IsiAj3k1tfrFmbDkltGYHksNsHNhVYkdyrZLlPvX8bJBAfg2pvowPOsnHwyqMsTa0W0Ajvmtc1feGpk3wDfKXwRWNFIgETXlVgnYQwzh%2FS4qnr9MU7Ban%2BJMYZA%2BhbTKR9a0hVpTVgi5wXT7B0TvsqP7wJhMYDBW4VwXVJwX%2F2eLGig75VCnCJ5g3UjZ2JtXRzbdZUxCIo58mIu6jyRZu6%2BtcOg8tjVeY%2BQLu7Bs9xTCIkcTJBjqkAWFfpbUpFA4ZZY9c0PkWc793RYBNg4K%2B53ox5nrqFu9Cg3WpcReWpPD5y5j4GdiA1tT8jmdPiZTs0NPyBWtp3%2BsRnF%2FB3MLJn21zoR1lCzxthnE9FIUfGJzIZPsgtQ8kjkqHpwZx3j8m9RF9ZtjEdgG6%2F9%2FvmnTI9iMUwdVp%2BD4RQhmPUeWx6J5lZ6BLHua1iJeB5DFN7RkTeVb69D99dT2juKAv&X-Amz-Signature=b3472e6d4039e0db9bbf08713592b9190d69f61403e636bf966b1ae0a592e100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO47MQ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCFTngp4xHuJ3xNOh7c45Rm9Ex2Ofm27cwZZl3c%2FAlH2wIhAMClFTrAchGsr18IYW511ruDjmBdch2MlSSHIAASo2lvKv8DCD0QABoMNjM3NDIzMTgzODA1Igw1peoEzeG7XsBVwWAq3AO5rSE%2B3lxOvnUje7%2FfJ2IHjD0yEHN3lsCkWipNZD%2BhjjoW%2BvfaWgW2rGyu%2FqbkotBz7or%2FhkJM6ILXvK75x6C8xFJ3hR8j9yl5BAU3%2BIh1FBCiQZOTkDtkHY0WKy90oXgTFkYMBym4cWvPZizx7M%2Fkm5yozgEWY5ahspwoq1J2peXwhcJaxUgGI6dCKGlD1sT2kkoj7YqLE%2FR7ITV9NFdQDCbnEb599qkwuOPPWc6dUsaOXtHMn2zfpRl9j9b2s3qmqE3%2BuE0CUi2rAWN4HMjmnkVJq139JOzurUAhxfR2fzaQQPqDU0nsEhTI3fpanlvzNyq%2BZ73aDnlIVgZDC7gdty%2FOYxqQSkR08C8HLniyW5%2FX2QOra3Upc8QKyJAdDG2b%2FQlz2P8iLwufV61IsiAj3k1tfrFmbDkltGYHksNsHNhVYkdyrZLlPvX8bJBAfg2pvowPOsnHwyqMsTa0W0Ajvmtc1feGpk3wDfKXwRWNFIgETXlVgnYQwzh%2FS4qnr9MU7Ban%2BJMYZA%2BhbTKR9a0hVpTVgi5wXT7B0TvsqP7wJhMYDBW4VwXVJwX%2F2eLGig75VCnCJ5g3UjZ2JtXRzbdZUxCIo58mIu6jyRZu6%2BtcOg8tjVeY%2BQLu7Bs9xTCIkcTJBjqkAWFfpbUpFA4ZZY9c0PkWc793RYBNg4K%2B53ox5nrqFu9Cg3WpcReWpPD5y5j4GdiA1tT8jmdPiZTs0NPyBWtp3%2BsRnF%2FB3MLJn21zoR1lCzxthnE9FIUfGJzIZPsgtQ8kjkqHpwZx3j8m9RF9ZtjEdgG6%2F9%2FvmnTI9iMUwdVp%2BD4RQhmPUeWx6J5lZ6BLHua1iJeB5DFN7RkTeVb69D99dT2juKAv&X-Amz-Signature=4fdf3e56090fcb744df87a797f8983923c2bc73d000d0b9d63778c4730d6e0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
