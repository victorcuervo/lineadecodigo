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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BULTXRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQpBhjIciPOXLs4D6dduvkGJsI5H1XtXmtwSaRZG2SOAiB8SiF%2BkrZNuZU6uxfp9EqLBotVseiy%2Bl9dOIukXGslWir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9grJS8hO8E96YI0iKtwDy4sp0tuNkSq3xZ5UcBWfOfKk0PF8VXsCPYy6DQD3MWqEzClv6g5gpRKudX4goszMykpJWzkAouDzpu4wexhevhfw%2FGHiNKtG2OMNskvRHPINYVJOQ7XbJR2h7oJa5jePIhbAF5ru2TNfYifnlEH0bqFhbANmMZ9wU3XgdtTbPZyyJz8GlSoqYqEjj2OgeVUJWtDtXduECE5FxAAtfHfQHJ0RdPcSTaHJx1p8Mz0fVBpjg%2BT53dbixeB8HqIhuyNu9qaVZRH9n01x%2Fbp8Wllvn2uPAy192ZQL3uwEebgAYieCocHntEp6IoZ7cE5rJUlyDMB%2FsCJFn%2BZ6FJ%2BHVJnjL%2FU%2BRZ7muTMtXFHOEt0kduD1hZIbre0xcAtv%2Fw3mPxcOX7yYCIIXc2jxAX9AfAX4PNaijYr2ONoNLxeFxd7iMHM5ctXP1R8ju9daulIqn5G6cdkktpD8Bm8pFnkUJYs0znbRAs4s57pHzVfTaE6vGYS7Nre2Y8NeRI46Mmav%2B2XOSxVm7z6gzXfQWjseX32AwVZCG8bWwa1XPn%2FRJ85GfUNXF%2FHFz2RnV30uC2QqgjBbFec06DNcIBsn5bd4mjcStgvTJ1SIdVETfclWAvZ6eunqxICy1FZP6cwPccowvPGJygY6pgHodl6HQI03Vr8jJyVr30BeztcKsCSs2Tu5OPlbhayYB54Frh%2B8nRZo3Hng82cUO4bMO32E5rDFgZ1MlPAloffI5rY3x%2FoM%2FzOfLqV9P9ELFAqngSYo29sckcjoEYmvy5VRDiP%2FK3JKhcvjhMjrJWLarxvo0lNP1UHkuk0ay39DMb0eHndA96RQUNLy40Fe3u47MNtvs52ThlWtuqvj%2F3gbjakXQ1Q7&X-Amz-Signature=3fe3ddfabfb82453aaf2263bb51e22c7d75dcf572d2e10e30c4a174563bd3427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BULTXRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQpBhjIciPOXLs4D6dduvkGJsI5H1XtXmtwSaRZG2SOAiB8SiF%2BkrZNuZU6uxfp9EqLBotVseiy%2Bl9dOIukXGslWir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9grJS8hO8E96YI0iKtwDy4sp0tuNkSq3xZ5UcBWfOfKk0PF8VXsCPYy6DQD3MWqEzClv6g5gpRKudX4goszMykpJWzkAouDzpu4wexhevhfw%2FGHiNKtG2OMNskvRHPINYVJOQ7XbJR2h7oJa5jePIhbAF5ru2TNfYifnlEH0bqFhbANmMZ9wU3XgdtTbPZyyJz8GlSoqYqEjj2OgeVUJWtDtXduECE5FxAAtfHfQHJ0RdPcSTaHJx1p8Mz0fVBpjg%2BT53dbixeB8HqIhuyNu9qaVZRH9n01x%2Fbp8Wllvn2uPAy192ZQL3uwEebgAYieCocHntEp6IoZ7cE5rJUlyDMB%2FsCJFn%2BZ6FJ%2BHVJnjL%2FU%2BRZ7muTMtXFHOEt0kduD1hZIbre0xcAtv%2Fw3mPxcOX7yYCIIXc2jxAX9AfAX4PNaijYr2ONoNLxeFxd7iMHM5ctXP1R8ju9daulIqn5G6cdkktpD8Bm8pFnkUJYs0znbRAs4s57pHzVfTaE6vGYS7Nre2Y8NeRI46Mmav%2B2XOSxVm7z6gzXfQWjseX32AwVZCG8bWwa1XPn%2FRJ85GfUNXF%2FHFz2RnV30uC2QqgjBbFec06DNcIBsn5bd4mjcStgvTJ1SIdVETfclWAvZ6eunqxICy1FZP6cwPccowvPGJygY6pgHodl6HQI03Vr8jJyVr30BeztcKsCSs2Tu5OPlbhayYB54Frh%2B8nRZo3Hng82cUO4bMO32E5rDFgZ1MlPAloffI5rY3x%2FoM%2FzOfLqV9P9ELFAqngSYo29sckcjoEYmvy5VRDiP%2FK3JKhcvjhMjrJWLarxvo0lNP1UHkuk0ay39DMb0eHndA96RQUNLy40Fe3u47MNtvs52ThlWtuqvj%2F3gbjakXQ1Q7&X-Amz-Signature=789a07cf9c26d22c8966d3f82ef9d516f2c9435b57915b19a662a2fe472951b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
