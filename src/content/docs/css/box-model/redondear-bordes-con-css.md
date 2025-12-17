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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6OYUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnZ0Rcug1QHO%2FesUcsX4cH5tmWjvHq4L%2BKZVYrbEx4HQIhAPEOlcrWN0fgu4y1m0CTC35nY5T7lxTyRzicTpssLxkYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4kLwS%2F32HtVbH%2FYsq3AOScKCtaDCUpvH1b3fA1mS4dxCnEYvm7WDentYTgNB%2F1Vab8GGreP6G51xHwYlI8QNoQn83pumwALPj4hOPPsOJridRpaw90nVxR2Iimc91w%2B73Euz5n4OT541W3tMmyZ7f7MajeOVMmqIp%2BwOJIyoqd7T4eg0vciO55i%2Bjl1ZwWM2t2u54NaFoT9SnTz19l7cctnBLbC%2FOyudKcFLcT5i8AfDPrl1ypMxwzQKhD%2F%2BBnF52FjvOMO8BJkHevTmeF7FlySdnlPFHf3BoHQhpJ3HwgxFbBWOUo5XPP9Q%2BXcMj9W0qqNno62JWKYN9WKwMYahZZyjNs%2Fsr%2FjZm7%2FcurVEF85QDgDfpiDZD%2FN6BADekavWhMFNTkE%2Fqh0k5DMJOaJnkxBq4k4FOO0CUbdDvgVuvS16JVeY2qd7IbbZnu2PC9fv68Wx%2FrwfnoYT3U4OSeIBGWNKF6Qk6Jl0L1fGrpvod8P%2BBisG8o8ZFSoZaj1%2F4JCKIOEPZigBU%2Bgqjb5CRhcQpdQaiQRAjXDKRPV2Ft3XMzrAUbTj%2BtT8f8MU5wjXg4huB5%2FvQ7nfnCIFbA94cSE7a3e9XWFFCz2HVoFEgtVVZ8zJZP7LcUB6jZTKq3iBQbJb2H9J1Ik8HC3LcvDCIoIvKBjqkAYS7LK7yABJvr1Wotggeh7SeP0pePMy8dIso6W5KVBfbS7ZWqOZrwSoDqEO6nU%2FFSODy1n3yp%2Bua0BnCSqiBWA%2B3tuQntnHmpCz5Zxr7jv1vPNGtWT4rlgSyz6fH5HFxzSYE9c4VwsX08dmyuxCtqGOA5cbxGj4isGEJ6NKQ3za7FkeC7bJdngbSeoc43zqH8sNGnx9drDDMRB6q2XAX1ijyiR3N&X-Amz-Signature=52d60f55406cc082f4b88e16ff019252a7d57c72dd97c2dba513c8f60e0c7620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6OYUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnZ0Rcug1QHO%2FesUcsX4cH5tmWjvHq4L%2BKZVYrbEx4HQIhAPEOlcrWN0fgu4y1m0CTC35nY5T7lxTyRzicTpssLxkYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4kLwS%2F32HtVbH%2FYsq3AOScKCtaDCUpvH1b3fA1mS4dxCnEYvm7WDentYTgNB%2F1Vab8GGreP6G51xHwYlI8QNoQn83pumwALPj4hOPPsOJridRpaw90nVxR2Iimc91w%2B73Euz5n4OT541W3tMmyZ7f7MajeOVMmqIp%2BwOJIyoqd7T4eg0vciO55i%2Bjl1ZwWM2t2u54NaFoT9SnTz19l7cctnBLbC%2FOyudKcFLcT5i8AfDPrl1ypMxwzQKhD%2F%2BBnF52FjvOMO8BJkHevTmeF7FlySdnlPFHf3BoHQhpJ3HwgxFbBWOUo5XPP9Q%2BXcMj9W0qqNno62JWKYN9WKwMYahZZyjNs%2Fsr%2FjZm7%2FcurVEF85QDgDfpiDZD%2FN6BADekavWhMFNTkE%2Fqh0k5DMJOaJnkxBq4k4FOO0CUbdDvgVuvS16JVeY2qd7IbbZnu2PC9fv68Wx%2FrwfnoYT3U4OSeIBGWNKF6Qk6Jl0L1fGrpvod8P%2BBisG8o8ZFSoZaj1%2F4JCKIOEPZigBU%2Bgqjb5CRhcQpdQaiQRAjXDKRPV2Ft3XMzrAUbTj%2BtT8f8MU5wjXg4huB5%2FvQ7nfnCIFbA94cSE7a3e9XWFFCz2HVoFEgtVVZ8zJZP7LcUB6jZTKq3iBQbJb2H9J1Ik8HC3LcvDCIoIvKBjqkAYS7LK7yABJvr1Wotggeh7SeP0pePMy8dIso6W5KVBfbS7ZWqOZrwSoDqEO6nU%2FFSODy1n3yp%2Bua0BnCSqiBWA%2B3tuQntnHmpCz5Zxr7jv1vPNGtWT4rlgSyz6fH5HFxzSYE9c4VwsX08dmyuxCtqGOA5cbxGj4isGEJ6NKQ3za7FkeC7bJdngbSeoc43zqH8sNGnx9drDDMRB6q2XAX1ijyiR3N&X-Amz-Signature=c2d4fc971449344442dbe6a9d3cdcb261552068dbf83135158341567f01722b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
