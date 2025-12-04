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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMBVOAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAnGFecDWvUY841Na9IbTJxZ5dSNRmSYm6j3gXGGrYtoAiBxqwYD5g33HT%2BhKfYUi4D8r8fqkiLs8qwz86wiiupKfyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhe57ebgV0LbEHAeQKtwDoiONpTGFYGVigQmbfxYy6g8OFI2T6zFkQtiCHKPaPElLXo7wXEvL2DxcKJyh00m0tR%2Ftp5sPaxCsQ2tB9IiCG7UzgQi4JFNUjulzHKrL1n4p24N0iOyET3%2FPffKWIzr9lhpKXSFvdpfvpHteY6DlNwk0RoLVW%2FgwPC8GXlAkSGpUwSQnFmjLXqw237tySML%2B5Bq12MT%2Bvydd19VKrAeGHX1vr5RCA6GBQBbYBRroLq5FT9kqBxuW2kL%2BNMlnSwZGE8QqumjKIGYctqG4UnwCpNP9G%2BfV%2B7TyMMPihI11C1HKClnu8Eo3%2BunLJjP10yQ5o9cpAKz0TFhvNJ90VqIc8999pTJqOItCKJ2%2FgxBC%2B0Xdf%2BEIJCCGx1oCJY0hqRdRaCziJuc2SAcaC8Y3No8pzlLI%2Byq9pBP%2FJddfp6sBhluZCmtASFQV6n2zKo2eRhcA10X491SvCxd0VJ1FlTppF2SD5MyccYcNnhriHaQOy7D9f03jDNrpn3sBgwyQ3dyDabBmiekOCEpUD9YFpJO2YL9m6nmTXps4bhTGP376zLUlj0wlDe8it2LIBvUr2LNduGZTYJd%2B6fO%2BYgIPTgOA9omHNgOQL9FrUP7y05UUkV9FVw6NrcMS%2BqKsQl4w%2B%2FLDyQY6pgG8W5wGolFnvoYdRqp0K5OzBLgvGbAocXxiIs%2BYJacWsBYzlNu2Zi2U037QI5mwnkhnOk6NMe%2BdZSggXS4mCC1NEze5oFuYCwPpcqSGNz6LdEiU3D2KNZBnQHS3lVLa3lkGZSkXHDtUF1Q65TtKK7GqLqVyyb6tktK1YeKQbsIe%2Bp273Nptfua2NSbWC4BhyGD80OUcoKBXKgLEgrQSBEJ1jgwIJ1NV&X-Amz-Signature=8036a3472b0d4f80968e77fb07938aabf17c96f8febb1537037cfcbd8fa3c7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RMBVOAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAnGFecDWvUY841Na9IbTJxZ5dSNRmSYm6j3gXGGrYtoAiBxqwYD5g33HT%2BhKfYUi4D8r8fqkiLs8qwz86wiiupKfyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhe57ebgV0LbEHAeQKtwDoiONpTGFYGVigQmbfxYy6g8OFI2T6zFkQtiCHKPaPElLXo7wXEvL2DxcKJyh00m0tR%2Ftp5sPaxCsQ2tB9IiCG7UzgQi4JFNUjulzHKrL1n4p24N0iOyET3%2FPffKWIzr9lhpKXSFvdpfvpHteY6DlNwk0RoLVW%2FgwPC8GXlAkSGpUwSQnFmjLXqw237tySML%2B5Bq12MT%2Bvydd19VKrAeGHX1vr5RCA6GBQBbYBRroLq5FT9kqBxuW2kL%2BNMlnSwZGE8QqumjKIGYctqG4UnwCpNP9G%2BfV%2B7TyMMPihI11C1HKClnu8Eo3%2BunLJjP10yQ5o9cpAKz0TFhvNJ90VqIc8999pTJqOItCKJ2%2FgxBC%2B0Xdf%2BEIJCCGx1oCJY0hqRdRaCziJuc2SAcaC8Y3No8pzlLI%2Byq9pBP%2FJddfp6sBhluZCmtASFQV6n2zKo2eRhcA10X491SvCxd0VJ1FlTppF2SD5MyccYcNnhriHaQOy7D9f03jDNrpn3sBgwyQ3dyDabBmiekOCEpUD9YFpJO2YL9m6nmTXps4bhTGP376zLUlj0wlDe8it2LIBvUr2LNduGZTYJd%2B6fO%2BYgIPTgOA9omHNgOQL9FrUP7y05UUkV9FVw6NrcMS%2BqKsQl4w%2B%2FLDyQY6pgG8W5wGolFnvoYdRqp0K5OzBLgvGbAocXxiIs%2BYJacWsBYzlNu2Zi2U037QI5mwnkhnOk6NMe%2BdZSggXS4mCC1NEze5oFuYCwPpcqSGNz6LdEiU3D2KNZBnQHS3lVLa3lkGZSkXHDtUF1Q65TtKK7GqLqVyyb6tktK1YeKQbsIe%2Bp273Nptfua2NSbWC4BhyGD80OUcoKBXKgLEgrQSBEJ1jgwIJ1NV&X-Amz-Signature=aa3f93c9a5e65b6630e6433dba69e2f1a32fccba0c592c2b186aed1516991a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
