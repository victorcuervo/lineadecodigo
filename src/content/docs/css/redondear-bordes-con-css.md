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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2ICQMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHG99gZ%2FV75N%2FjqVfl7UurGJmsZcQRuVifhSFP%2Bo45mAIhAJ0I10nazR5XWxZA3PyJMIqBKVYlya1Y1bvGb%2FgQbRUyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwZcuJCYxcl87hOEq3AO6iLPVw2rQLxZB40XZZ069yK%2Fzg%2BFvoCNsyb7zIPqYt8iw5sHK264K6ylzDNbLKQFn5%2FJhom3wIgYIJZAxLkL3K91CkqI%2F2y5yX3R8Kwx%2BmNpawxdu5hk%2BEe%2BcAsZIKmuk36cudu%2FaoisbGFwLXUwxveOktG4oVQWH2VRXXYbCSYIygmwNhCWOr%2F%2BEdVOortTKv3g65%2FEpeJF7al%2FpkPqshUhdN76rKAmAdya7YUOK0i51VWwat%2FiejdDn839YIYeBmopSdXUiO9IfqWyz%2FAI1jlaZcsH4UvW89Bx0sUJs1CG%2BJvBaUUPBAwcEjCus%2FnhMFxJ8RxSyTvX0Ny67zTm7ixLDB6JEbfmBglJpqM%2FXQu2y3jzZrb2dJDvLEgSEBOzfeDmubZsJo%2BAkzB2%2B7IUErUIEySzmbVuOcYCdovaIA6Y2YAW5For72pXcEwppoFnQN4W3F9VPnqMb5IB6NrPudNmSySECgw55ilYJMPtuyzFMKctJOk3UdBBD2HeN03F%2Fy8zE4D%2F8RxJVC4ekqyydg5Xfxc4wCaaIHK%2BSM0At7sWLmQexNDRRGBgTd2scORoy8VVW%2B8f3mUnIkoykTq9L4cbyGvTW%2Fwp%2BAWrkt6tXAJbtWERTi6JWZx4rAjDJmdXJBjqkAaRP5PwTxuq%2BzVY1dmzcnu9w82eZbmTvfSq2QpT5Ds2uMdPUbm8sWHtu4o0C9RVaAanbsVrclbggGHngnYoebdJ9W8k5OK%2FyQk3GJdVhDYC%2F8amYwkrowFwWP6UkRnBpnNmn4Kxn2f4cJhlbBRVGtpVi7PF4nE7GhY7QD8%2FynGOB%2B1q3cqSQTaczbLGBEk%2FQfvFXXOAemh5ETxXfCNW%2BdDU0%2BFJ3&X-Amz-Signature=90ebf2f5bcb9c321cbc10aa99570a6084e1277bca5af8b74ec80a35c7e119c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2ICQMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHG99gZ%2FV75N%2FjqVfl7UurGJmsZcQRuVifhSFP%2Bo45mAIhAJ0I10nazR5XWxZA3PyJMIqBKVYlya1Y1bvGb%2FgQbRUyKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwZcuJCYxcl87hOEq3AO6iLPVw2rQLxZB40XZZ069yK%2Fzg%2BFvoCNsyb7zIPqYt8iw5sHK264K6ylzDNbLKQFn5%2FJhom3wIgYIJZAxLkL3K91CkqI%2F2y5yX3R8Kwx%2BmNpawxdu5hk%2BEe%2BcAsZIKmuk36cudu%2FaoisbGFwLXUwxveOktG4oVQWH2VRXXYbCSYIygmwNhCWOr%2F%2BEdVOortTKv3g65%2FEpeJF7al%2FpkPqshUhdN76rKAmAdya7YUOK0i51VWwat%2FiejdDn839YIYeBmopSdXUiO9IfqWyz%2FAI1jlaZcsH4UvW89Bx0sUJs1CG%2BJvBaUUPBAwcEjCus%2FnhMFxJ8RxSyTvX0Ny67zTm7ixLDB6JEbfmBglJpqM%2FXQu2y3jzZrb2dJDvLEgSEBOzfeDmubZsJo%2BAkzB2%2B7IUErUIEySzmbVuOcYCdovaIA6Y2YAW5For72pXcEwppoFnQN4W3F9VPnqMb5IB6NrPudNmSySECgw55ilYJMPtuyzFMKctJOk3UdBBD2HeN03F%2Fy8zE4D%2F8RxJVC4ekqyydg5Xfxc4wCaaIHK%2BSM0At7sWLmQexNDRRGBgTd2scORoy8VVW%2B8f3mUnIkoykTq9L4cbyGvTW%2Fwp%2BAWrkt6tXAJbtWERTi6JWZx4rAjDJmdXJBjqkAaRP5PwTxuq%2BzVY1dmzcnu9w82eZbmTvfSq2QpT5Ds2uMdPUbm8sWHtu4o0C9RVaAanbsVrclbggGHngnYoebdJ9W8k5OK%2FyQk3GJdVhDYC%2F8amYwkrowFwWP6UkRnBpnNmn4Kxn2f4cJhlbBRVGtpVi7PF4nE7GhY7QD8%2FynGOB%2B1q3cqSQTaczbLGBEk%2FQfvFXXOAemh5ETxXfCNW%2BdDU0%2BFJ3&X-Amz-Signature=6c96c2df72d5328cab1d4114d832b58335ebff5b2de8c70ef541f52cf1f5a3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
