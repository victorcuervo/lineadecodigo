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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7XJHIO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd7M028v67TSXt8tiSfmKGwbJadw%2BtR%2BtlozT0XqxRVwIhAKD80oHsnauprGS8jAXZYtQSkVY6f%2FOzAWQi2ZPGF7jKKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8LaM77b6GeEDKpnwq3AOh3Ig1HUbGxjLWgNGv6Cqh3HQuF0HeLnhcVg5Nf6JGQKstgUuTJggildFOFUqyXpMwGjhJjSNoXEkNwMJMexR7f4rIaDDgegXi%2FF%2BppGwTQd4oZ2qtfbdmzCDIDiRZo7gO1V63r6WdL8BUZjCCUBmU73AD%2FQ%2BNczw1N2jqc7HVly5Q7tjh1fBOKaE0sjcijbRD7pZzC5O62YwajMS4Hs1YO7ZVADWB%2BbeC9B4Njdq6YSl51T0Smbiw6y9FJvOoFCo1jKIJJifbz7bt0GJodpXuB3y7gyG%2Bv7LHmV7%2FX5QCIsEhCgX8faEQ05YA%2BrbsO2ccAUOLSOvPb%2FCnSI3ZQ%2FzC8dhv1TmEa1OQE6wE81eSboQ%2BY7rqM%2BsLExxEgp0lFxwcdEVJpj1yRV86nXDxof0HIOJT4MuSmqo0za8xuWCNe5qMlG%2Buw8aJ%2BkcK00RekhCPjfr4Zi2uuFcVMmqzreh3woB56PYpSqBTm5LDIY3TQ0umGyWsEJUFY%2FmgPLC44A4E32E7OEjwvU3dZ6gFAT13lIB424SusIAiZk%2B6UxV%2B6oBR4tvc6tfDY1LwoVp%2FLg8gAPxmoc5UslsD9U9o%2FBRNVQ5BRl0%2Fb5HCYLi4Bj508n7SgoAUmvrFNl%2B8ZTCXyNfJBjqkARS%2BCW45sXa264kvM06pXJVCQcZXoDtDqctE75Yl4Mxd9ciooAv05bMKaWPHL9u7DfxVlR9vQzfltvkLk6WiJ4TQaZQpz4cylOlZYsG8FwSjhNn0vZ3NYpQx6AHA8b4vfrUzlnALD7k7ULF1z52%2Fbg63bseq7YzhNxBtv%2B9Fv8LSmEMN0Y7Hub6AW5ld9oTh3Iz1oaxx1YXNEVupLzdk6VEirptR&X-Amz-Signature=3e4262f19c8ea6965f1da675a5aa2e7864fbaa1277d2bc230a392171355463f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7XJHIO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd7M028v67TSXt8tiSfmKGwbJadw%2BtR%2BtlozT0XqxRVwIhAKD80oHsnauprGS8jAXZYtQSkVY6f%2FOzAWQi2ZPGF7jKKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8LaM77b6GeEDKpnwq3AOh3Ig1HUbGxjLWgNGv6Cqh3HQuF0HeLnhcVg5Nf6JGQKstgUuTJggildFOFUqyXpMwGjhJjSNoXEkNwMJMexR7f4rIaDDgegXi%2FF%2BppGwTQd4oZ2qtfbdmzCDIDiRZo7gO1V63r6WdL8BUZjCCUBmU73AD%2FQ%2BNczw1N2jqc7HVly5Q7tjh1fBOKaE0sjcijbRD7pZzC5O62YwajMS4Hs1YO7ZVADWB%2BbeC9B4Njdq6YSl51T0Smbiw6y9FJvOoFCo1jKIJJifbz7bt0GJodpXuB3y7gyG%2Bv7LHmV7%2FX5QCIsEhCgX8faEQ05YA%2BrbsO2ccAUOLSOvPb%2FCnSI3ZQ%2FzC8dhv1TmEa1OQE6wE81eSboQ%2BY7rqM%2BsLExxEgp0lFxwcdEVJpj1yRV86nXDxof0HIOJT4MuSmqo0za8xuWCNe5qMlG%2Buw8aJ%2BkcK00RekhCPjfr4Zi2uuFcVMmqzreh3woB56PYpSqBTm5LDIY3TQ0umGyWsEJUFY%2FmgPLC44A4E32E7OEjwvU3dZ6gFAT13lIB424SusIAiZk%2B6UxV%2B6oBR4tvc6tfDY1LwoVp%2FLg8gAPxmoc5UslsD9U9o%2FBRNVQ5BRl0%2Fb5HCYLi4Bj508n7SgoAUmvrFNl%2B8ZTCXyNfJBjqkARS%2BCW45sXa264kvM06pXJVCQcZXoDtDqctE75Yl4Mxd9ciooAv05bMKaWPHL9u7DfxVlR9vQzfltvkLk6WiJ4TQaZQpz4cylOlZYsG8FwSjhNn0vZ3NYpQx6AHA8b4vfrUzlnALD7k7ULF1z52%2Fbg63bseq7YzhNxBtv%2B9Fv8LSmEMN0Y7Hub6AW5ld9oTh3Iz1oaxx1YXNEVupLzdk6VEirptR&X-Amz-Signature=5d612ad2d906a70ef99be8f41f25b226f8cf5d7b45a653e87d17dd9ae72fdeeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
