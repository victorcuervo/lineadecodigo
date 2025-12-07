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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKKH7LU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtkDWkSQTzvU27KW0Op%2FpP9cY8pvKB9sNFE9s%2F3041EAiEAqBZIEbUy3i4yJl9CIhyaZESPJH6LdKKiXzW6jMKTYdEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FsN%2BG%2BnINdXeP81CrcA48QzZFKT5hzdYyCdEAMNNUN3JfGoDjrCYUbxqeS4yAwtldkANhaKILyezd%2BqT%2BWqzeYsD6qHCIm%2F9pahghO15SL%2BWR%2BdlPm0Vn9ku1IIrXdqQOHL79W0xTSesqwQ0cdXLYgUEmz2i741RxGF%2FSwfntPGa8A8tjN3F20yshJB0gVSpUBmXEO3XMyWBxg8szoGMvDtXH7dYI8butmp5J9MtGEI81p0qbvofz%2F0MAh7lqzfZji0IxKY4KC7CfBv9gEtGFHVSSpBhp0FNVx48NFS2gHBp8JWqCSsHxO0e%2F8VDw8OLZVSyTbr8ssUkxu3oFs3eDbnKjPr9KMPoXjd8aj0E6fEYaD%2FrRHdeWBf2ZLRkpK38PqvRsE2F3AXbzI6%2B1uQdymxxm8zTA7QtTFLu6CUqSH9OjHhiCTx23nDw7N5lxFotdYP%2FiixGjCRuMXaQAaFEr2xYIAxj8usqkM%2F4uMIimOvVfHgJpd5u1XDyWHhlgUGWeKmsg%2BNwdgpDz4tLJxUP5q3r1GumOTJ5NVekm0mFfdyNnkdQFowZM0Hix%2FalmOIbGHgVZrrrKCKwjJIpawiLBJ4acQ1tEQI%2FRk%2BsNWzkYLrNkuhq92WcydcEAgwjP6fh%2FGY96PvhukdHWSMI%2F90skGOqUB5aU9Z7xgN28hVrHDkxHvrBUitwfoQspaJWRuCfban9nasB7YP04EN7BJgBxbaD%2BOB8vdWxVvhYjVHDpKVccOCPYm52XIykk8XQE1JARpw4CGaKV5HkZo%2FUetA%2F0wqZ5e%2BYpuQ0%2B%2FjHfTxDzZ0fmXqLxrRqko8oOzYr2haMAumYvOWq6cww8Fodetd%2Fa44TqD5%2FJuQ0Dn0XITbSEGuX%2BjzFOWc475&X-Amz-Signature=33ccb0a2620705cda83b0558418d50a10d9a1f55953ad9bc5e3b41f37d65fbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKKH7LU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtkDWkSQTzvU27KW0Op%2FpP9cY8pvKB9sNFE9s%2F3041EAiEAqBZIEbUy3i4yJl9CIhyaZESPJH6LdKKiXzW6jMKTYdEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FsN%2BG%2BnINdXeP81CrcA48QzZFKT5hzdYyCdEAMNNUN3JfGoDjrCYUbxqeS4yAwtldkANhaKILyezd%2BqT%2BWqzeYsD6qHCIm%2F9pahghO15SL%2BWR%2BdlPm0Vn9ku1IIrXdqQOHL79W0xTSesqwQ0cdXLYgUEmz2i741RxGF%2FSwfntPGa8A8tjN3F20yshJB0gVSpUBmXEO3XMyWBxg8szoGMvDtXH7dYI8butmp5J9MtGEI81p0qbvofz%2F0MAh7lqzfZji0IxKY4KC7CfBv9gEtGFHVSSpBhp0FNVx48NFS2gHBp8JWqCSsHxO0e%2F8VDw8OLZVSyTbr8ssUkxu3oFs3eDbnKjPr9KMPoXjd8aj0E6fEYaD%2FrRHdeWBf2ZLRkpK38PqvRsE2F3AXbzI6%2B1uQdymxxm8zTA7QtTFLu6CUqSH9OjHhiCTx23nDw7N5lxFotdYP%2FiixGjCRuMXaQAaFEr2xYIAxj8usqkM%2F4uMIimOvVfHgJpd5u1XDyWHhlgUGWeKmsg%2BNwdgpDz4tLJxUP5q3r1GumOTJ5NVekm0mFfdyNnkdQFowZM0Hix%2FalmOIbGHgVZrrrKCKwjJIpawiLBJ4acQ1tEQI%2FRk%2BsNWzkYLrNkuhq92WcydcEAgwjP6fh%2FGY96PvhukdHWSMI%2F90skGOqUB5aU9Z7xgN28hVrHDkxHvrBUitwfoQspaJWRuCfban9nasB7YP04EN7BJgBxbaD%2BOB8vdWxVvhYjVHDpKVccOCPYm52XIykk8XQE1JARpw4CGaKV5HkZo%2FUetA%2F0wqZ5e%2BYpuQ0%2B%2FjHfTxDzZ0fmXqLxrRqko8oOzYr2haMAumYvOWq6cww8Fodetd%2Fa44TqD5%2FJuQ0Dn0XITbSEGuX%2BjzFOWc475&X-Amz-Signature=e343911539387647f5c2988bf5ec58d776360c90982d89c102af2c774009fa67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
