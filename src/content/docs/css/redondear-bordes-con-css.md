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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKH2NKWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPTrQFXrI%2F4WtgQD6aG4iy4CmnQVFhhzNIT6CVJa22cQIhAKRR%2F5eTrfBNZ9TWTUklbFll8zmKlUWYO2ltaS5wDkOmKv8DCGEQABoMNjM3NDIzMTgzODA1IgxNLYxIT4MY0vW9pD8q3APhaTwbux3QYfoAmA%2FKMfckI%2BZdEauBfR9aDgkm2QGfk6Ib2Lwsxe%2FDsJicV6ZQ30SnzPiDC71YlpCnuZEDu3k%2Fa0tbo5f5xcRJ0eWuIzc0bkTdhov7F8wef75irqDMqDZIVetV97dwvDOeV7o2Hli51ELE8evPdEGdLeY9Z8Os%2B1s9uDws3VC%2BcPiNfj%2F5udstnhV2O1lwD1C5f1jRdORPqoVD9Uot7p8FTiv8GrRr8Th0K33WKTsJJI3KgGvKYibYNjcC5Iw%2FmRnsaiSKTn1%2FyDJBt%2BN7XQ%2BmU1qwayc42ZcMGK6iK755Y70HOVkqqKW7DqrEYuTghuKXwwGzsX8myLyoJA6XjeOqo9kH2KaHV1Pfv3EXnvuEPzpc9eR%2FXw29oUtJzSRi9KcJ283w0wczv5U6Ns8RA5HfcL%2BB3EcU40Mubovp8mB64WbDPEbVqSxlWSBMyZXCHKkxCsYQO7eTdZCMgJYjdwUeULFiVaIQgAMZf0fH4ltC2auS3FBeJRNvuDujjjUpZC1sPFgtREXZnbVormFvoSPJ1hfKV%2Fah%2F3n3%2FFwZy0Mvt993QvmjdkhDzc3xL8tJDZi8EZzllklZroC%2B0YHxOvQEjhrQ7Q0OeUVepa7QyImEbtx3ETCu9svJBjqkAYYm4Bii6KXbdNJa9yVMwlXuLze2OSJZ0%2BYpe1tf6h%2FMNlCIJJ80k5oZe%2FlVp%2BdwtAs3ZhSdxS7LPdERJYI9vyerfnZt7ipN5usJLptcFar7sPePiktENE3zkpwUHl0ZxAyhsZIMJ06pY7OuGJByzCbCFSL6mR1NktsCbrpMefzsVsjlbdUvI2a5gSCjtiRJHz%2FthsXaxCDIu%2F8wki9rmYzUxZXK&X-Amz-Signature=8806ded23470b4945384197d35428bd556f719b084105b14cb9c4d4aaa35dffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKH2NKWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPTrQFXrI%2F4WtgQD6aG4iy4CmnQVFhhzNIT6CVJa22cQIhAKRR%2F5eTrfBNZ9TWTUklbFll8zmKlUWYO2ltaS5wDkOmKv8DCGEQABoMNjM3NDIzMTgzODA1IgxNLYxIT4MY0vW9pD8q3APhaTwbux3QYfoAmA%2FKMfckI%2BZdEauBfR9aDgkm2QGfk6Ib2Lwsxe%2FDsJicV6ZQ30SnzPiDC71YlpCnuZEDu3k%2Fa0tbo5f5xcRJ0eWuIzc0bkTdhov7F8wef75irqDMqDZIVetV97dwvDOeV7o2Hli51ELE8evPdEGdLeY9Z8Os%2B1s9uDws3VC%2BcPiNfj%2F5udstnhV2O1lwD1C5f1jRdORPqoVD9Uot7p8FTiv8GrRr8Th0K33WKTsJJI3KgGvKYibYNjcC5Iw%2FmRnsaiSKTn1%2FyDJBt%2BN7XQ%2BmU1qwayc42ZcMGK6iK755Y70HOVkqqKW7DqrEYuTghuKXwwGzsX8myLyoJA6XjeOqo9kH2KaHV1Pfv3EXnvuEPzpc9eR%2FXw29oUtJzSRi9KcJ283w0wczv5U6Ns8RA5HfcL%2BB3EcU40Mubovp8mB64WbDPEbVqSxlWSBMyZXCHKkxCsYQO7eTdZCMgJYjdwUeULFiVaIQgAMZf0fH4ltC2auS3FBeJRNvuDujjjUpZC1sPFgtREXZnbVormFvoSPJ1hfKV%2Fah%2F3n3%2FFwZy0Mvt993QvmjdkhDzc3xL8tJDZi8EZzllklZroC%2B0YHxOvQEjhrQ7Q0OeUVepa7QyImEbtx3ETCu9svJBjqkAYYm4Bii6KXbdNJa9yVMwlXuLze2OSJZ0%2BYpe1tf6h%2FMNlCIJJ80k5oZe%2FlVp%2BdwtAs3ZhSdxS7LPdERJYI9vyerfnZt7ipN5usJLptcFar7sPePiktENE3zkpwUHl0ZxAyhsZIMJ06pY7OuGJByzCbCFSL6mR1NktsCbrpMefzsVsjlbdUvI2a5gSCjtiRJHz%2FthsXaxCDIu%2F8wki9rmYzUxZXK&X-Amz-Signature=c09e2f91284a83236c51ca908e33405bfa279e8f23841f1da6a63ff330291c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
