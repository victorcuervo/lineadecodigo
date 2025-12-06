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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDA3VZAQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVGvE7xAfRSSTxkohB1sDTe86fRZKhfxpTKmODMQsrgIhALda2suX0j0koM41q2mYUxQ3Z0bvAXVRqP2XWq4%2Fb0meKv8DCHUQABoMNjM3NDIzMTgzODA1Igwvpg8nE1SXuNOTBtkq3AObwNqMEEjs2DIWtZI9A7N32FdWR%2FtPTWAuGLmVCiq7m3BpufzuoAai9WTT%2BSwvn2aXV%2FfJnMxaJQcMP8k9QrE6YiFC%2FBNoMLGeXvwlSv5wGK2iRCuF9fcE8uyMTmLqzUXQsppR5%2FzwzA%2BbnqJ84TAB0n9izJW7il4nEw8W6hzG2e4bT0TfZf%2FaCWhZ9d5aosVNfJUk7GLcGaVUiWBqX%2BVZtZGwRbRgBC3MQvdKEUP3l31z8hlS9jQYTxQXRoslqQ31HV5vS3cPkEWagQ07TDIE30zMBnvTmdBM4tmoubA2PetJLyvVpotZX26XN3ypUtUuvtbVX5KXiiyS1OsnNVexRuvH2QQ2FB9PeRTLQGJfhGVcMe6eXehfTKjNOJSalXgT7VcwVKCpjYPsEZpZSZoyQJP%2BcxX35iKO5ud%2FtVVPD792Su5FqlQtROHZHmYudZtZVwoUOSDb4zNPKkRikKOlm0fro7oJ9yNC4RZzhsNH95kKFQ6TI%2FJ17zbt4%2FRBPSHeDE8crDAlfyAQv1rrZKG%2FyeXRax44h8Nv%2BjsLWuLKXFxYVBIjoKvO%2Bjbxa6ACskpgg0Lc6bs4Be1u%2FWoXuUpSHA9Qzf8rZDdzChcKxdt7HgF3g%2BpdWcnhxkx0vjDiptDJBjqkATNclPYnVwfoftwxCyeq3BjSp6j7H88hd49M2v%2B39x2KLXj13ElR43XbLti3PZvxeXTIiKddjvnGgrF%2Fv7Cdn3%2FTTKDSgvORwqZq0XXYiCJLwFdplHvyZMG3xX4k3PYN8xsSUH3byQd107R%2B7W55ZXRyw9TX450KevR7i%2BcEZk2%2FxFD5J1CD8I4jDWqiVR6lem93RpR5lQct8hj2xaiOR8VMIlcT&X-Amz-Signature=38a914e202a760f1dbf63ab20063996de7c2c460fbbb01cd002055abe827376a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDA3VZAQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVGvE7xAfRSSTxkohB1sDTe86fRZKhfxpTKmODMQsrgIhALda2suX0j0koM41q2mYUxQ3Z0bvAXVRqP2XWq4%2Fb0meKv8DCHUQABoMNjM3NDIzMTgzODA1Igwvpg8nE1SXuNOTBtkq3AObwNqMEEjs2DIWtZI9A7N32FdWR%2FtPTWAuGLmVCiq7m3BpufzuoAai9WTT%2BSwvn2aXV%2FfJnMxaJQcMP8k9QrE6YiFC%2FBNoMLGeXvwlSv5wGK2iRCuF9fcE8uyMTmLqzUXQsppR5%2FzwzA%2BbnqJ84TAB0n9izJW7il4nEw8W6hzG2e4bT0TfZf%2FaCWhZ9d5aosVNfJUk7GLcGaVUiWBqX%2BVZtZGwRbRgBC3MQvdKEUP3l31z8hlS9jQYTxQXRoslqQ31HV5vS3cPkEWagQ07TDIE30zMBnvTmdBM4tmoubA2PetJLyvVpotZX26XN3ypUtUuvtbVX5KXiiyS1OsnNVexRuvH2QQ2FB9PeRTLQGJfhGVcMe6eXehfTKjNOJSalXgT7VcwVKCpjYPsEZpZSZoyQJP%2BcxX35iKO5ud%2FtVVPD792Su5FqlQtROHZHmYudZtZVwoUOSDb4zNPKkRikKOlm0fro7oJ9yNC4RZzhsNH95kKFQ6TI%2FJ17zbt4%2FRBPSHeDE8crDAlfyAQv1rrZKG%2FyeXRax44h8Nv%2BjsLWuLKXFxYVBIjoKvO%2Bjbxa6ACskpgg0Lc6bs4Be1u%2FWoXuUpSHA9Qzf8rZDdzChcKxdt7HgF3g%2BpdWcnhxkx0vjDiptDJBjqkATNclPYnVwfoftwxCyeq3BjSp6j7H88hd49M2v%2B39x2KLXj13ElR43XbLti3PZvxeXTIiKddjvnGgrF%2Fv7Cdn3%2FTTKDSgvORwqZq0XXYiCJLwFdplHvyZMG3xX4k3PYN8xsSUH3byQd107R%2B7W55ZXRyw9TX450KevR7i%2BcEZk2%2FxFD5J1CD8I4jDWqiVR6lem93RpR5lQct8hj2xaiOR8VMIlcT&X-Amz-Signature=4bbb5d4a820d9aca0c4b0bcf869b41f83a63d45f4bc2f3c0b0e4b117dada3ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
