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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQISU52W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfI7d02B5RnK4dRZsz66BRFKMh5NwPchoCd1xsQPCAIhAINH%2BEN19MBqsmUwR8CJGTHrnTIW60HlfarFdO1zDpLyKv8DCDoQABoMNjM3NDIzMTgzODA1IgwJN2VIWafonI%2B3fsoq3AN8EABWTbcZhw%2B4m7fKWy%2B5SBSyvC1C%2FAwMawi8FQVnO%2FgcfQp7twftAnBwt9TYGiQj1HpBmkbFdYK8Pm9BPNY2ek6NzrcoCxWfeTG8xkNRuSlX%2BogE36zwW3IeOoZ9%2FFVkUpOQZYVPt0OASVZOCvL7CmSxFWAg8mLxC7HqXxrhmsdvldU7lg4H1OI5mCco%2FcC3W9L3rlq7QwN%2B6crBZW3mfF0thdfT8EvX0109XCMBvarPSGuQDoqajI6thb0F%2FkLg8UaxzJr81AwtU1Hhy4n3nv0OS89nUd2FAuuFZWwS4jNL%2BfA1m3i%2FZXdMfPxcNa5b%2BNOqP6JDYLJpqxjkMwc3muRm1jpgOlnvW%2BglLklV30ENCqOy9xrbhZ4sKnYqLDO%2F%2FqJzCj%2FH%2BYgOorbF1U3HUbY%2FqoZwQfGMsv%2BP4ALeDNrQd0o3ck6aMEn1mVfy3RpRQZ7mfnmg9DJrCtTKhNELm2V0dXyaLESP2QlCmjA0A2nyvchv3Au5Sceqh2J2%2FuXyd2GJjb9SjCW9RmzL5BGUC5KW%2FTOmSGEYTDdZvUnaWow44OzMeMlIYmkBxHNARemQpFk0nzh47skmJuXz%2F%2FUeCc5Mdlxa3KUsyZsSpomn%2FBEZvM8tf0CIPqsKbzCVtMPJBjqkAeAA2IKMRq6cebAJKHHonWQPtk2FQFVH%2BAOmR6ZKpSocWAi4zmte%2Fv%2FLk9KTdgDkCWcU8XQ2hadDRe%2BD%2FNdvagTPhAKR9ARpjABGMz7qTuu2o1dYUP4ZbD36ZJGhCP1CMHOqdxVJH3TfOpYrM%2F9PCMrSIUTfNNFv0Zlz4ZDQ035MtpIXNaDP7B1%2BviXJrtY0LkY0SOORAwlKV7shsgUjVKlZpGmi&X-Amz-Signature=2dea7b531f2fa4e1e0ef58db8d85d3341dfbad243d28d4070f714ba995810c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQISU52W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2BnfI7d02B5RnK4dRZsz66BRFKMh5NwPchoCd1xsQPCAIhAINH%2BEN19MBqsmUwR8CJGTHrnTIW60HlfarFdO1zDpLyKv8DCDoQABoMNjM3NDIzMTgzODA1IgwJN2VIWafonI%2B3fsoq3AN8EABWTbcZhw%2B4m7fKWy%2B5SBSyvC1C%2FAwMawi8FQVnO%2FgcfQp7twftAnBwt9TYGiQj1HpBmkbFdYK8Pm9BPNY2ek6NzrcoCxWfeTG8xkNRuSlX%2BogE36zwW3IeOoZ9%2FFVkUpOQZYVPt0OASVZOCvL7CmSxFWAg8mLxC7HqXxrhmsdvldU7lg4H1OI5mCco%2FcC3W9L3rlq7QwN%2B6crBZW3mfF0thdfT8EvX0109XCMBvarPSGuQDoqajI6thb0F%2FkLg8UaxzJr81AwtU1Hhy4n3nv0OS89nUd2FAuuFZWwS4jNL%2BfA1m3i%2FZXdMfPxcNa5b%2BNOqP6JDYLJpqxjkMwc3muRm1jpgOlnvW%2BglLklV30ENCqOy9xrbhZ4sKnYqLDO%2F%2FqJzCj%2FH%2BYgOorbF1U3HUbY%2FqoZwQfGMsv%2BP4ALeDNrQd0o3ck6aMEn1mVfy3RpRQZ7mfnmg9DJrCtTKhNELm2V0dXyaLESP2QlCmjA0A2nyvchv3Au5Sceqh2J2%2FuXyd2GJjb9SjCW9RmzL5BGUC5KW%2FTOmSGEYTDdZvUnaWow44OzMeMlIYmkBxHNARemQpFk0nzh47skmJuXz%2F%2FUeCc5Mdlxa3KUsyZsSpomn%2FBEZvM8tf0CIPqsKbzCVtMPJBjqkAeAA2IKMRq6cebAJKHHonWQPtk2FQFVH%2BAOmR6ZKpSocWAi4zmte%2Fv%2FLk9KTdgDkCWcU8XQ2hadDRe%2BD%2FNdvagTPhAKR9ARpjABGMz7qTuu2o1dYUP4ZbD36ZJGhCP1CMHOqdxVJH3TfOpYrM%2F9PCMrSIUTfNNFv0Zlz4ZDQ035MtpIXNaDP7B1%2BviXJrtY0LkY0SOORAwlKV7shsgUjVKlZpGmi&X-Amz-Signature=7780b3375b05840041727510709243e0201df75830ba9537451305915868be13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
