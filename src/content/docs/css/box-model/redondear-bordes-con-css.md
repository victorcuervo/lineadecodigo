---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666TEXS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDAIhD2ZHZMk%2BgkZIAbnMTbTL0ET3a%2BQpxbBA9KoesUQIhAMJj5r1fPbEq70EG7i1YhpIckyBun82MXeqo8%2BVs%2BBKcKv8DCH8QABoMNjM3NDIzMTgzODA1Igwt6M5y8Ob4zJGbL2Yq3AMQZJ2aSyGzB%2BZaaJGZ%2FJ7SzbNY7pD6AGH9k0UtCoATi1F7bLlxjOYAehm627ayWU3NGSOF8g3TWuM7EI1F6b1iFZawvDmiHB%2Bo%2BPabsa%2F9bHSi2SXv%2FKOF4cnQhaa%2FsogNs3psJHOpuNuk6KSRNrXRkZW1pkZKUPAb36B0NGLvxm%2BttHO1J2OtPPKMToLK9bKqJnIcwx7%2FRWQq%2BYw6O4lyRF3%2BNmT%2FaK158A8oVYVt6P31N7YB3Zs7QOVFB58zV8f90671dGmIu1%2FgHwFufXlSdgLlHb0qW51Pxr9dxTljoBx%2B0vXV3ijZsdUOghJ1Z0ZyNXwCV7%2F9yHnIHms5tGLI05qp9Hbh4ayP4pLkY1e7Bl%2FWLvZHaDblKP92tDw4f5IwwO1ArH3lEtAxHATVp0V4CYgsdYKu71oxaNMsd4DCZqIO7nX1FJTbYMVnZbdR%2FyLl81rTI0RWp13s%2Fccf1mwQqMuoSjmjm%2FC49wgACxANFuMOm4%2FrSwDMrUpjwzAzB7clZbDK8oE6W4LD0F7VgbGequPWuXKLzSnAsp63ec%2BytzjTlDYCawDQahpnvm%2BFByZIrSwa%2B2VoOr2Qsa5LL9Dknn4mmtoxseVmbTEEPykAaxCNWTwzcL5FzCkZNjC24YrKBjqkAVAtiyZaCEh6a2L79IlmozyFL%2BhWeHjANboUqU8D4Ijf2XBFjW1NWorQkIqlO5O1TdRs8nbI0bp2kfLjR8LSAGux%2FXxarrG0wQjuHfnpUJlidOhs9rC6MNJ%2Bk%2Fg8edlwvL7aicQlLKAsU1NALgn4FfL7jY7NWr5q6va2I6ld18syGFxvFqDtD%2FnUPuLDra76b%2Fk5KFYtvTUhfh8urlOrt5nZq2qR&X-Amz-Signature=c2314db5502a4365e0277440ad42a7e44f9e9622017620c42193113d5cb5992c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666TEXS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDAIhD2ZHZMk%2BgkZIAbnMTbTL0ET3a%2BQpxbBA9KoesUQIhAMJj5r1fPbEq70EG7i1YhpIckyBun82MXeqo8%2BVs%2BBKcKv8DCH8QABoMNjM3NDIzMTgzODA1Igwt6M5y8Ob4zJGbL2Yq3AMQZJ2aSyGzB%2BZaaJGZ%2FJ7SzbNY7pD6AGH9k0UtCoATi1F7bLlxjOYAehm627ayWU3NGSOF8g3TWuM7EI1F6b1iFZawvDmiHB%2Bo%2BPabsa%2F9bHSi2SXv%2FKOF4cnQhaa%2FsogNs3psJHOpuNuk6KSRNrXRkZW1pkZKUPAb36B0NGLvxm%2BttHO1J2OtPPKMToLK9bKqJnIcwx7%2FRWQq%2BYw6O4lyRF3%2BNmT%2FaK158A8oVYVt6P31N7YB3Zs7QOVFB58zV8f90671dGmIu1%2FgHwFufXlSdgLlHb0qW51Pxr9dxTljoBx%2B0vXV3ijZsdUOghJ1Z0ZyNXwCV7%2F9yHnIHms5tGLI05qp9Hbh4ayP4pLkY1e7Bl%2FWLvZHaDblKP92tDw4f5IwwO1ArH3lEtAxHATVp0V4CYgsdYKu71oxaNMsd4DCZqIO7nX1FJTbYMVnZbdR%2FyLl81rTI0RWp13s%2Fccf1mwQqMuoSjmjm%2FC49wgACxANFuMOm4%2FrSwDMrUpjwzAzB7clZbDK8oE6W4LD0F7VgbGequPWuXKLzSnAsp63ec%2BytzjTlDYCawDQahpnvm%2BFByZIrSwa%2B2VoOr2Qsa5LL9Dknn4mmtoxseVmbTEEPykAaxCNWTwzcL5FzCkZNjC24YrKBjqkAVAtiyZaCEh6a2L79IlmozyFL%2BhWeHjANboUqU8D4Ijf2XBFjW1NWorQkIqlO5O1TdRs8nbI0bp2kfLjR8LSAGux%2FXxarrG0wQjuHfnpUJlidOhs9rC6MNJ%2Bk%2Fg8edlwvL7aicQlLKAsU1NALgn4FfL7jY7NWr5q6va2I6ld18syGFxvFqDtD%2FnUPuLDra76b%2Fk5KFYtvTUhfh8urlOrt5nZq2qR&X-Amz-Signature=a191d5cb838068b3274e94f4f06ab1fde5c65ece695526ebbb5d53143624add6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
