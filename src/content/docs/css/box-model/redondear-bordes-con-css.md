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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUXCBJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClTIwbGkWM2nSlBC6pq%2BrG7LWhD5a6Brx1mlQxJrR3hAIgJCGIZzh%2F%2FbmFVp0Eg2jR%2FrT7fzqSObd4cj99FBGAY%2FkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLU2beq1HIoN2BjyyrcAydU%2F%2F6uVjvLG9u6xUgqQQe1csQIvAAQi5%2FD%2BzvENL9jtDynK2FRGs7CAKJoWmjvrx2M7n1Q6Z4GZEMsqVyD5Zu1%2BOr3smpqY8KXK09aLi3lRpVcMQZuOuH%2FBeb0gVBf9Q1NMMfeWzMmz1yZx0fUbkoYV08kOcbQiIAHQRM7H4vFg9uN9qnLAloh8x9zTkg6x7Ha0dVlot1LAKEpf8%2FvG94EY5R%2FLU%2BEP7JeB59fs%2BAyp4wOq7bkJv3mySk2TJ5yan4s2q2MA8MuXF%2B7tG31rpPdYEy66R2hy9ufPGS9HNIes4FOjgcLZ1k1YWwK4d5YmWFxKR7ArG%2FYS3BkcweqRgZxley8SdVquzKmoZkH3e72tQb%2FdJ07uCMiO%2FQABAe7qY1%2BXnslbByRASUQ6KwfHPhOW0eksj5ZlsOiVsoo45esCgzuF7ZIsTcVbHbB2gdEc1JvZpi8rWrtGLhnRpOAl%2F0aReYSteQaexPzw0lOzJMTSItZO1xfG7jzBJm7H4OJMTPmM%2B6rdxVFG79tQlG13V8Wu0Ym0LgxPRd5qsvjYVkEap0QLtIyIiPHRtzbnuuPkd3H%2B6aE48yIfVq%2FSvRvrpGetTVwsbKRLXaKe6zNnpHK%2B2xeKi82166DxodpMKmujMoGOqUBe2PaYOsQOK9KT%2B9g6lqVynJNdAmLuiEX4z833jVH2JOPgZVaLgfm8epdz7WWaXG%2FZXdGz2QLHJT8XZCWmVhWQZUj8EoyQucso7T%2FfqBpBOvqFLULRwbdmDB8GiCsc9dVvFZ4lDoDauXyxgs32ZMR%2BA%2F0uCtPQYVf2B4CT9iNppkLVjeUliCIuwOcsbHGRXTcTRUuihKXAWWTeqJmtXfwsJhfhdzb&X-Amz-Signature=0d812a8ccdbdbd42f5f3c918753c827018fe566464b4d2cc204f96a58f0c1eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUXCBJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClTIwbGkWM2nSlBC6pq%2BrG7LWhD5a6Brx1mlQxJrR3hAIgJCGIZzh%2F%2FbmFVp0Eg2jR%2FrT7fzqSObd4cj99FBGAY%2FkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLU2beq1HIoN2BjyyrcAydU%2F%2F6uVjvLG9u6xUgqQQe1csQIvAAQi5%2FD%2BzvENL9jtDynK2FRGs7CAKJoWmjvrx2M7n1Q6Z4GZEMsqVyD5Zu1%2BOr3smpqY8KXK09aLi3lRpVcMQZuOuH%2FBeb0gVBf9Q1NMMfeWzMmz1yZx0fUbkoYV08kOcbQiIAHQRM7H4vFg9uN9qnLAloh8x9zTkg6x7Ha0dVlot1LAKEpf8%2FvG94EY5R%2FLU%2BEP7JeB59fs%2BAyp4wOq7bkJv3mySk2TJ5yan4s2q2MA8MuXF%2B7tG31rpPdYEy66R2hy9ufPGS9HNIes4FOjgcLZ1k1YWwK4d5YmWFxKR7ArG%2FYS3BkcweqRgZxley8SdVquzKmoZkH3e72tQb%2FdJ07uCMiO%2FQABAe7qY1%2BXnslbByRASUQ6KwfHPhOW0eksj5ZlsOiVsoo45esCgzuF7ZIsTcVbHbB2gdEc1JvZpi8rWrtGLhnRpOAl%2F0aReYSteQaexPzw0lOzJMTSItZO1xfG7jzBJm7H4OJMTPmM%2B6rdxVFG79tQlG13V8Wu0Ym0LgxPRd5qsvjYVkEap0QLtIyIiPHRtzbnuuPkd3H%2B6aE48yIfVq%2FSvRvrpGetTVwsbKRLXaKe6zNnpHK%2B2xeKi82166DxodpMKmujMoGOqUBe2PaYOsQOK9KT%2B9g6lqVynJNdAmLuiEX4z833jVH2JOPgZVaLgfm8epdz7WWaXG%2FZXdGz2QLHJT8XZCWmVhWQZUj8EoyQucso7T%2FfqBpBOvqFLULRwbdmDB8GiCsc9dVvFZ4lDoDauXyxgs32ZMR%2BA%2F0uCtPQYVf2B4CT9iNppkLVjeUliCIuwOcsbHGRXTcTRUuihKXAWWTeqJmtXfwsJhfhdzb&X-Amz-Signature=64ad270ffc45d5998a3e9c8d7e447b2ecb73812802e2a705fff79119750f0dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
