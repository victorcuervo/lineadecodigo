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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6QXUTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCEHmJMxThfBvVWYqCg4aKi9P0rZKSe7gdlnbA0efPS6QIhAJX00OdTMZWi8h%2F3frgmC7VgpY1KcRhQDDRGCfs0GnOUKv8DCDoQABoMNjM3NDIzMTgzODA1IgziIlsO%2BZI%2F5ar%2F%2FG8q3APVi3E%2FHvXVoBtH8H5MSUhVfJjZ3Q%2FDje6I4sgDnntGLFYjOu5AzeEOWfgMaIoz5JWoYdZUhoOuoPvj9a%2FCIeNUS2QDME%2BpHbrOJpqNSMEpEAAygYjMd2s0E3LVKxbOBt9eU8ocLEyQz7sOblLcShypyodi%2FrOcYLj7y%2BkWsaNmUKAnAxUW2mdfSUZFtZh5SouSB2giQ9hU784ZJUstplKiRvMVLIJWb8XZApb%2Fn%2ByhV6iNYMWwd44sDFwZcrjv2m9dI2UafZ2KG%2B6N0dK1ZtwbYFeRXJ4g8tFm2QY6W1p6cLxsyBneyQZN%2FA9lB%2BOqkrNLLk4fab3kLD1Baj49FwH0atuLPQaVmNvHdFGjtf1%2BOGr5VWqn7BQG2FqnPzM9QgJSGnxkChudjL6hmExsr6eNSTjuDo7piNCbB5dWogSSrctg9cT0gcQwwZHEQHblemSJevq2aR5A%2B0%2BSR0nVP4AmI%2Fmo5K2uuQxoufgXrax58LD%2FGPYSwO1VjyUi8%2BwIfUrQewis1DX1efhKiM8SkAPbCqfI9xcGde6fm7gcTcl5366CRytWcO2tu0t8aUokJqkctn8gSTBNCodicSFqn7tcRO2TJFWUqP2LjlKlg6837Yp9Jd83%2F2uJGldoeDD5s8PJBjqkAY0fkIYJGQqO%2FbpKnoxtVYo0tadOE5TlqEZVcjjQCyq3EU0uqm%2Bk4mMtwVEaFWPORdE6ccMQ0iB%2FBSs5WrZJBSPbBYIWkyC6cngT2F5XAKPdHTYiD9WAxVDRiUfcJOAGSqeLXQObqiRqNspXFgVi80KC7BymLAd6sXPYgczLKlgsPeQVB1c14p%2F4uRAFNZzZb8Kdm2sOzUIfY52lyN15yXiQ56R2&X-Amz-Signature=910f54682355d1ce15bf55670948810e722b42aabac5ee3da90eed9f8129494f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6QXUTW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCEHmJMxThfBvVWYqCg4aKi9P0rZKSe7gdlnbA0efPS6QIhAJX00OdTMZWi8h%2F3frgmC7VgpY1KcRhQDDRGCfs0GnOUKv8DCDoQABoMNjM3NDIzMTgzODA1IgziIlsO%2BZI%2F5ar%2F%2FG8q3APVi3E%2FHvXVoBtH8H5MSUhVfJjZ3Q%2FDje6I4sgDnntGLFYjOu5AzeEOWfgMaIoz5JWoYdZUhoOuoPvj9a%2FCIeNUS2QDME%2BpHbrOJpqNSMEpEAAygYjMd2s0E3LVKxbOBt9eU8ocLEyQz7sOblLcShypyodi%2FrOcYLj7y%2BkWsaNmUKAnAxUW2mdfSUZFtZh5SouSB2giQ9hU784ZJUstplKiRvMVLIJWb8XZApb%2Fn%2ByhV6iNYMWwd44sDFwZcrjv2m9dI2UafZ2KG%2B6N0dK1ZtwbYFeRXJ4g8tFm2QY6W1p6cLxsyBneyQZN%2FA9lB%2BOqkrNLLk4fab3kLD1Baj49FwH0atuLPQaVmNvHdFGjtf1%2BOGr5VWqn7BQG2FqnPzM9QgJSGnxkChudjL6hmExsr6eNSTjuDo7piNCbB5dWogSSrctg9cT0gcQwwZHEQHblemSJevq2aR5A%2B0%2BSR0nVP4AmI%2Fmo5K2uuQxoufgXrax58LD%2FGPYSwO1VjyUi8%2BwIfUrQewis1DX1efhKiM8SkAPbCqfI9xcGde6fm7gcTcl5366CRytWcO2tu0t8aUokJqkctn8gSTBNCodicSFqn7tcRO2TJFWUqP2LjlKlg6837Yp9Jd83%2F2uJGldoeDD5s8PJBjqkAY0fkIYJGQqO%2FbpKnoxtVYo0tadOE5TlqEZVcjjQCyq3EU0uqm%2Bk4mMtwVEaFWPORdE6ccMQ0iB%2FBSs5WrZJBSPbBYIWkyC6cngT2F5XAKPdHTYiD9WAxVDRiUfcJOAGSqeLXQObqiRqNspXFgVi80KC7BymLAd6sXPYgczLKlgsPeQVB1c14p%2F4uRAFNZzZb8Kdm2sOzUIfY52lyN15yXiQ56R2&X-Amz-Signature=0066578c8a6687c6824abfc677aeff3bd8955b87da189e9a6ce93cef7b1288ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
